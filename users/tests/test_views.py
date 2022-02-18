import json
import pdb

from rest_framework import status
from rest_framework.authtoken.models import Token

from .test_setup import TestSetUp


class TestViews(TestSetUp):

    def test_registration(self):
        user_data = self.user_data
        res = self.client.post(self.register_url, user_data, format="json")
        self.assertEqual(res.status_code, 201)
        
    def test_login(self):
        login_data = {
            "email": "endy78190@hotmail.com",
            "password": "kira971"
        }
        res = self.client.post(self.login_url, login_data, format="json")
        self.assertEqual(res.status_code, 200)
        
        
    def test_user_cannot_register_with_no_data(self):
        res = self.client.post(self.register_url)
        self.assertEqual(res.status_code, 400)
        
    def test_user_canot_login_without_unverified_email(self):
        self.client.post(self.register_url, self.user_data, format="json")
        res = self.client.post(self.login_url, self.user_data, format='json')
        self.assertEqual(res.status_code, 401)
