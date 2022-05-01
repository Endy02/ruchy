from rest_framework.generics import (CreateAPIView, DestroyAPIView,
                                     ListAPIView, RetrieveAPIView,
                                     UpdateAPIView)
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny

from ..models import Game
from ..serializer.gameSerializer import GameSerializer


class GameListAPI(ListAPIView):
    """
        Games list endpoint
    """
    permission_classes = [AllowAny]
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    

class GameAPI(RetrieveAPIView):
    """
        Retrieve a game endpoint
    """
    permission_classes = [AllowAny]
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    lookup_field = 'uuid'
    
    
# TODO: Add game detail 
