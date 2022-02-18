from rest_framework import serializers
from ..models import Team

# Foreign Serializers
from ..serializer.rankingSerializer import RankingSerializer


class TeamSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Team
        fields = '__all__'