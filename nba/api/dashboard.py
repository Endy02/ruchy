from django.conf import settings
from fu_scrapper.nba.games import Games
from fu_scrapper.nba.players import Players
from fu_scrapper.nba.teams import Teams
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView

from ..mapper.game_mapper import GameMapper
from ..mapper.player_mapper import PlayerMapper
from ..mapper.ranking_mapper import RankingMapper
from ..mapper.team_mapper import TeamMapper


class ExportPlayersAPI(APIView):
    """
        Export Players informations into csv file
    """
    permission_classes = [IsAdminUser]
    
    def post(self, request, format=None):
        players = Players(url=settings.DATASET_URL)
        players.export_players()
        mapper = PlayerMapper()
        result = mapper.import_player()
        context = {}
        if result:
            context = {
                "Status" : "Success !"
            }
        else:
            context = {
                "Status" : "Error !"
            }    
        return Response(status=status.HTTP_200_OK, data=context)
        

class ExportTeamsAPI(APIView):
    """
        Export Teams informations into csv file
    """
    permission_classes = [IsAdminUser]
    
    def post(self, request, format=None):
        teams = Teams(url=settings.DATASET_URL)
        teams.export_teams()
        mapper = TeamMapper()
        result = mapper.import_team()
        context = {}
        if result:
            context = {
                "Status" : "Success !"
            }
        else:
            context = {
                "Status" : "Error !"
            }
        return Response(status=status.HTTP_200_OK, data=context)


# class ExportTeamsDetailsAPI(APIView):
#     """
#         Export Teams details informations into csv
#     """
#     permission_classes = [IsAdminUser]
    
#     def post(self, request):
#         teams = Teams(url=settings.DATASET_URL)
#         teams.export_team_detail()
#         return Response(status=status.HTTP_200_OK)


class ExportGamesAPI(APIView):
    """
        Export Games, Games details and Ranking into csv files
    """
    permission_classes = [IsAdminUser]
    
    def post(self, request):
        games = Games(url=settings.DATASET_URL)
        games.new_games()
        mapper = GameMapper()
        result = mapper.import_games()
        context = {}
        if result:
            context = {
            "Status" : "Success !"
            }
        else:
            context = {
                "Status" : "Error !"
            }
        return Response(status=status.HTTP_200_OK, data=context)
    
    
class ExportRankingAPI(APIView):
    """
        Export Games, Games details and Ranking into csv files
    """
    permission_classes = [IsAdminUser]
    
    def post(self, request):
        ranking_mapper = RankingMapper()
        ranking_result = ranking_mapper.import_ranking()
        context = {}
        if ranking_result:
            context = {
                "Status" : "Success !"
            }
        else:
            context = {
                "Status" : "Error !"
            }
        return Response(status=status.HTTP_200_OK, data=context)
