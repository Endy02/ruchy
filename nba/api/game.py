from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

from ..models import Game
from ..serializer.gameSerializer import GameSerializer


class GameListAPI(ListAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    

class GameAPI(RetrieveAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    lookup_field = 'uuid'
    

class GameCreateAPI(CreateAPIView):
    pass


class GameUpdateAPI(UpdateAPIView):
    pass


class GameDeleteAPI(DestroyAPIView):
    pass