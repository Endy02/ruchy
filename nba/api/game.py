from nba.scripts.nba_predictor import NBAPredictor
from rest_framework import status
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from ..models import Game, Team
from ..serializer.gameSerializer import GameSerializer


class GameListAPI(ListAPIView):
    """
        Games list endpoint
    """
    permission_classes = [AllowAny]
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    
    def get_queryset(self):
        """
            Filter games by date
        """
        queryset = Game.objects.all()
        day_game = self.request.query_params.get('est_date')
        if day_game is not None:
            queryset = queryset.filter(est_date=day_game)
        return queryset
    

class GameAPI(RetrieveAPIView):
    """
        Retrieve a game endpoint
    """
    permission_classes = [AllowAny]
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    lookup_field = 'uuid'
    

class SimulateGameAPI(APIView):
    """
        Games list endpoint
    """
    permission_classes = [AllowAny]
    
    def post(self, request, format=None):
        try:
            predictor = NBAPredictor()
            pct_home, pct_away, winner = predictor.make_prediction(request.data['homeTeam'], request.data['awayTeam'])
            
            context = {
                "winner": winner,
                "home_team_pct": pct_home,
                "away_team_pct": pct_away
            }
            return Response(status=status.HTTP_200_OK, data=context)
        except (TypeError, ValueError, OverflowError):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        
class GameRankingAPI(APIView):
    """
        Account activation Endpoint
    """
    
    permission_classes = [AllowAny]
    
    def post(self, request, format=None):
        try:
            points = Team.objects.all().order_by("-pts").first()
            three_points = Team.objects.all().order_by("-fg3m").first()
            rebonds = Team.objects.all().order_by("-reb").first()
            asists = Team.objects.all().order_by("-ast").first()
            free_throws = Team.objects.all().order_by("-ftm").first()
            steals = Team.objects.all().order_by("-stl").first()
            blocks = Team.objects.all().order_by("-blk").first()
            turnover = Team.objects.all().order_by("-tov").first()
            context = {
                "points":{
                        "team":points.name.lower().replace(' ', '-').replace(' ', '-'),
                        "score":points.pts,
                    },
                "three_points":{
                        "team": three_points.name.lower().replace(' ', '-').replace(' ', '-'),
                        "score":three_points.fg3m,
                    },
                "rebonds":{
                        "team":rebonds.name.lower().replace(' ', '-').replace(' ', '-'),
                        "score":rebonds.reb,
                    },
                "assists":{
                        "team":asists.name.lower().replace(' ', '-').replace(' ', '-'),
                        "score":asists.ast,
                    },
                "free_throws":{
                        "team":free_throws.name.lower().replace(' ', '-').replace(' ', '-'),
                        "score": free_throws.ftm,
                    },
                "steals":{
                        "team":steals.name.lower().replace(' ', '-').replace(' ', '-'),
                        "score":steals.stl,
                    },
                "blocks":{
                        "team":blocks.name.lower().replace(' ', '-').replace(' ', '-'),
                        "score":blocks.blk,
                    },
                "turnover":{
                        "team":turnover.name.lower().replace(' ', '-').replace(' ', '-'),
                        "score":turnover.tov,
                    }
            }
            print(context)
            
            return Response(status=status.HTTP_200_OK, data=context)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
