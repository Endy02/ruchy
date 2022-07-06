import time
from django.conf import settings
from fu_scrapper.nba.games import Games
from fu_scrapper.nba.players import Players
from fu_scrapper.nba.teams import Teams
from nba.scripts.analyzis.nba_cleaner import NBACleaner
from nba.scripts.nba_predictor import NBAPredictor
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response
from rest_framework.views import APIView

from ..mapper.game_mapper import GameMapper
from ..mapper.player_mapper import PlayerMapper
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


class GenerateDataAPI(APIView):
    """
        Games list endpoint
    """
    permission_classes = [IsAdminUser]
    
    def post(self, request, format=None):
        try:
            s_time = time.time()
            # Generate Games Formated
            cleaner = NBACleaner()
            cleaner.get_formated_data()
            # Generate Mega Data
            predictor = NBAPredictor()
            predictor.create_mega_data()
            e_time = time.time()
            print(f"Execution time : {round(e_time - s_time , 2)} s")
            
            return Response(status=status.HTTP_200_OK)
        except (TypeError, ValueError, OverflowError):
            return Response(status=status.HTTP_400_BAD_REQUEST)
