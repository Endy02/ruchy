from django.urls import path
from .api.user import UserListAPI, UserAPI, UserCreateAPI
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('token/resfresh/', TokenRefreshView.as_view(), name='fresh-token'),
    path('users/', UserListAPI.as_view(), name='user-list' ),
    path('user/<uuid>', UserAPI.as_view(), name='single-user' ),
    path('register/', UserCreateAPI.as_view(), name='register'),
    # path('logout',)
]
