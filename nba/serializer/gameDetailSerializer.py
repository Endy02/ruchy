from rest_framework import serializers
from ..models import GameDetail


class GameDetailSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = GameDetail
        fields = '__all__'