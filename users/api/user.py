from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from ..models import User
from ..serializer.userSerializer import UserSerializer
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.sites.shortcuts import get_current_site
from django.shortcuts import redirect
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from ruchy.utils import account_activation_token
from django.core.mail import EmailMessage


class UserListAPI(ListAPIView):
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    

class UserAPI(RetrieveAPIView):
    permission_classes = [IsAdminUser]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'uuid'
    

class UserCreateAPI(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            new_user = serializer.save()
            
            current_site = get_current_site(request)
            mail_subject = "Activate your ruchy account"
            message = render_to_string("active_email.html", {
                'user': new_user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(new_user.pk)),
                'token': account_activation_token.make_token(new_user),
            })
            to_email = new_user.email
            email = EmailMessage(
                mail_subject, message, to=[to_email]
            )
            email.send()
    
            if new_user:
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ActiveAccountAPI(APIView):
    
    permission_classes = [AllowAny]
    
    def get(self, request, uidb64, token, format=None):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
        
        if user is not None and account_activation_token.check_token(user, token):
            user.is_active = True
            user.save()
            return redirect('/login')
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
        

class ForgotPasswordAPI(APIView):
    
    permission_classes= [AllowAny]
    
    def post(self, request):
        if User.objects.filter(email=request.data['email']).exists():
            user = User.objects.get(email=request.data['email'])
            current_site = get_current_site(request)
            mail_subject = "Reset your account password"
            message = render_to_string("reset_email.html", {
                'user': user,
                'domain': current_site.domain,
                'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                'token': account_activation_token.make_token(user),
            })
            to_email = user.email
            email = EmailMessage(
                mail_subject, message, to=[to_email]
            )
            email.send()
        else:
            return Response({'status': 'Error', 'message': 'User account does not exist'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'status' : 'Success', 'message': 'We have sent you an email with the link to reset your password'},status=status.HTTP_200_OK)


class ResetPasswordAPI(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request, uidb64, token, format=None):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
            if not user.check_password(request.data['password1']):
                user.set_password(request.data['password1'])
                user.save()
                return Response(status=status.HTTP_200_OK)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
        
        return Response(status=status.HTTP_400_BAD_REQUEST)


class BlacklistAPI(APIView):
    """
        Blacklist user tokens
    """
    permission_classes = [AllowAny]
    
    def post(self, request, format=None):
        try:
            refresh_token = request.data["refresh_token"]
            print(refresh_token)
            token = RefreshToken(refresh_token)
            print(token.blacklist())
            token.blacklist()
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserUpdateAPI(UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'uuid'


class UserDeleteAPI(DestroyAPIView):
    pass