from django.db.models import fields
from rest_framework import serializers
from ..models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['uuid', 'first_name', 'last_name', 'username', 'email', 'email_verified','picture', 'password', 'date_joined', 'last_login', 'is_active', 'is_staff', 'is_superuser']
        lookup_field = 'uuid'
        extra_kwargs = {
            'password': {'write_only': True}
        }
        
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        # TODO : Send Verification email to confirm account
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance        