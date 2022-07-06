from django.urls import path

# API Serializers
from .api.dashboard import ExportGamesAPI, ExportPlayersAPI, ExportTeamsAPI, GenerateDataAPI
from .api.game import (GameAPI, GameListAPI, SimulateGameAPI, GameRankingAPI)
from .api.gameDetail import (GameDetailAPI, GameDetailListAPI)
from .api.player import (PlayerAPI, PlayerListAPI)
from .api.season import (SeasonAPI, SeasonListAPI)
from .api.team import (TeamAPI, TeamListAPI)

urlpatterns = [
    # Dashboard (admin function)
    path('dashboard/export/games/', ExportGamesAPI.as_view(), name="export-games"),
    path('dashboard/export/teams/', ExportTeamsAPI.as_view(), name="export-teams"),
    path('dashboard/export/players/', ExportPlayersAPI.as_view(), name="export-players"),
    path('dashboard/generate/data/', GenerateDataAPI.as_view(), name="generate-data"),
   
    # Game Urls
    # Simulator
    path('game/ranking/', GameRankingAPI.as_view(), name="game-ranking"),
    path('game/simulate/', SimulateGameAPI.as_view(), name="simulate-game"),
    path('games/', GameListAPI.as_view(), name="all-games"),
    path('game/<uuid>/', GameAPI.as_view(), name="single-game"),
    
    # Game Details Urls
    path('games-details/', GameDetailListAPI.as_view(), name="all-games-detail"),
    path('game-detail/<uuid>/', GameDetailAPI.as_view(), name="single-game-detail"),

    # Team Urls
    path('teams/', TeamListAPI.as_view(), name="all-teams"),
    path('teams/<uuid>/', TeamAPI.as_view(), name="team-detail"),
    
    # Player Urls
    path('players/', PlayerListAPI.as_view(), name="all-players"),
    path('players/<uuid>/', PlayerAPI.as_view(), name="player-detail"),
    
    # Season Urls
    path('seasons/', SeasonListAPI.as_view(), name="all-season"),
    path('seasons/<uuid>/', SeasonAPI.as_view(), name="seaon-detail"),    
    
]
