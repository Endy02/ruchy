from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

from ..models import GameDetail
from ..serializer.gameDetailSerializer import GameDetailSerializer


class GameDetailListAPI(ListAPIView):
    queryset = GameDetail.objects.all()
    serializer_class = GameDetailSerializer
    

class GameDetailAPI(RetrieveAPIView):
    queryset = GameDetail.objects.all()
    serializer_class = GameDetailSerializer
    lookup_field = 'uuid'
    

class GameDetailCreateAPI(CreateAPIView):
    pass


class GameDetailUpdateAPI(UpdateAPIView):
    pass


class GameDetailDeleteAPI(DestroyAPIView):
    pass