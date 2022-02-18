from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

from ..models import Ranking
from ..serializer.rankingSerializer import RankingSerializer


class RankingListAPI(ListAPIView):
    queryset = Ranking.objects.all()
    serializer_class = RankingSerializer
    

class RankingAPI(RetrieveAPIView):
    queryset = Ranking.objects.all()
    serializer_class = RankingSerializer
    lookup_field = 'uuid'
    

class RankingCreateAPI(CreateAPIView):
    pass


class RankingUpdateAPI(UpdateAPIView):
    pass


class RankingDeleteAPI(DestroyAPIView):
    pass