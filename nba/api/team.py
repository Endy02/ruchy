from rest_framework.generics import (CreateAPIView, DestroyAPIView,
                                     ListAPIView, RetrieveAPIView,
                                     UpdateAPIView)
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated

from ..models import Team
from ..serializer.teamSerializer import TeamSerializer


class TeamListAPI(ListAPIView):
    permission_classes = [AllowAny]
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    

class TeamAPI(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    lookup_field = 'uuid'
    

class TeamCreateAPI(CreateAPIView):
    permission_classes = [IsAdminUser]
    lookup_field = 'uuid'


class TeamUpdateAPI(UpdateAPIView):
    permission_classes = [IsAdminUser]
    lookup_field = 'uuid'


class TeamDeleteAPI(DestroyAPIView):
    permission_classes = [IsAdminUser]
    lookup_field = 'uuid'
