from django.urls import path
from .api.user import UserListAPI, UserAPI, UserCreateAPI, BlacklistAPI, ActiveAccountAPI, ResetPasswordAPI, ForgotPasswordAPI
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='api-login'),
    path('resfresh/', TokenRefreshView.as_view(), name='api-refresh-token'),
    path('all/', UserListAPI.as_view(), name='user-list'),
    path('<uuid>/', UserAPI.as_view(), name='single-user'),
    path('register/', UserCreateAPI.as_view(), name='api-register'),
    path('logout/blacklist/', BlacklistAPI.as_view(), name='blacklist'),
    path('forgot-password/', ForgotPasswordAPI.as_view(), name='api-forgot-password'),
    path('activate/<uidb64>/<token>', ActiveAccountAPI.as_view(), name='api-activate'),
    path('reset-password/<uidb64>/<token>/', ResetPasswordAPI.as_view(), name='confirm-reset-password'),
]
