from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

from ..models import Season
from ..serializer.seasonSerializer import SeasonSerializer


class SeasonListAPI(ListAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer
    

class SeasonAPI(RetrieveAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer
    lookup_field = 'uuid'
    

class SeasonCreateAPI(CreateAPIView):
    pass


class SeasonUpdateAPI(UpdateAPIView):
    pass


class SeasonDeleteAPI(DestroyAPIView):
    pass