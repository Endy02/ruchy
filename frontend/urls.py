from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    # Commun views
    path('predictions', views.index, name='predictions'),
    path('prediction/<int:id>', views.index, name='prediction-details'),
    path('simulator', views.index, name='simulator'),
    path('simulate/<int:id_t1>/<int:id_t2>', views.index, name='simulation'),
    path('statistics', views.index, name='statistics'),
    path('statistics/<int:id>', views.index, name='statistic-details'),
    path('team/<slug:slug>', views.index, name='team-details'),
    path('', views.index, name='home'),
    
    # Authentication views
    path('login', views.index, name='login'),
    path('logout', views.index, name='login'),
    path('register', views.index, name='register'),
    path('forgot-password', views.index, name='forgot-password'),
    path('activate/<uidb64>/<token>', views.index, name='activate'),
    path('confirm-reset/<uidb64>/<token>', views.index, name='confirm-reset-password'),
    path('reset-password/<uidb64>/<token>', views.index, name='reset-password'),
    
    # User views
    path('profile', views.index, name='profile'),
    path('settings', views.index, name='settings'),
]