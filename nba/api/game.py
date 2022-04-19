from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

from ..models import Game
from ..serializer.gameSerializer import GameSerializer


class GameListAPI(ListAPIView):
    """
        Games list endpoint
    """
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    

class GameAPI(RetrieveAPIView):
    """
        Retrieve a game endpoint
    """
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    lookup_field = 'uuid'
    
    
# TODO: Add game detail 
