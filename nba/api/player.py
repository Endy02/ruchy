from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

from ..models import Player
from ..serializer.playerSerializer import PlayerSerializer


class PlayerListAPI(ListAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    

class PlayerAPI(RetrieveAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer
    lookup_field = 'uuid'
    

class PlayerCreateAPI(CreateAPIView):
    pass


class PlayerUpdateAPI(UpdateAPIView):
    pass


class PlayerDeleteAPI(DestroyAPIView):
    pass