from django.urls import reverse
from rest_framework.test import APITestCase

from ..models import User


class TestSetUp(APITestCase):
    
    def setUp(self):
        self.register_url = reverse('register')
        self.login_url = reverse('login')
        self.season_url = reverse('user-list')
        
        self.user_data = {
            "email" : "endy78190@hotmail.com",
            "username" : "Scorpio",
            "password" : "kira971"
        }
        
        return super().setUp()
    
    def tearDown(self):
        return super().tearDown()
