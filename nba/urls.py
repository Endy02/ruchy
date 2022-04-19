from django.urls import path

# API Serializers
from .api.dashboard import ExportGamesAPI, ExportPlayersAPI, ExportTeamsAPI, ExportRankingAPI
from .api.game import (GameAPI, GameListAPI)
from .api.gameDetail import (GameDetailAPI, GameDetailCreateAPI,
                             GameDetailDeleteAPI, GameDetailListAPI,
                             GameDetailUpdateAPI)
from .api.player import (PlayerAPI, PlayerCreateAPI, PlayerDeleteAPI,
                         PlayerListAPI, PlayerUpdateAPI)
from .api.ranking import (RankingAPI, RankingCreateAPI, RankingDeleteAPI,
                          RankingListAPI, RankingUpdateAPI)
from .api.season import (SeasonAPI, SeasonCreateAPI, SeasonDeleteAPI,
                         SeasonListAPI, SeasonUpdateAPI)
from .api.team import (TeamAPI, TeamCreateAPI, TeamDeleteAPI, TeamListAPI,
                       TeamUpdateAPI)

urlpatterns = [
    # Dashboard (admin function)
    path('dashboard/export/games/', ExportGamesAPI.as_view(), name="export-games"),
    path('dashboard/export/teams/', ExportTeamsAPI.as_view(), name="export-teams"),
    path('dashboard/export/players/', ExportPlayersAPI.as_view(), name="export-players"),
    path('dashboard/export/ranking/', ExportRankingAPI.as_view(), name="export-ranking"),
   
    # Game Urls
    path('games/', GameListAPI.as_view(), name="all-games"),
    path('game/<uuid>/', GameAPI.as_view(), name="single-game"),
    # path('games/today/', TodayGameAPI.as_view(), name="today-game"),
    # path('games/next_week', NextWeekGameAPI.as_view(), name="next-week-games"),
    # path('games/last_week', LastWeekGameAPI.as_view(), name="last-week-games"),
    
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
    
    # Ranking Urls
    # TODO all rankings urls
    # path('ranking/<uuid>/player/<uuid>', PlayerRankingAPI.as_view(), name="player-ranking"),
    # path('ranking/<uuid>/players/', AllPlayerRankingAPI.as_view(), name="all-player-ranking"),
    # path('ranking/<uuid>/teams/', TeamRankingAPI.as_view(), name="team-ranking"),
    # path('ranking/<uuid>/team/<uuid>', TeamRankingAPI.as_view(), name="team-ranking"),
    # path('ranking/<uuid>/team/<uuid>', TeamRankingAPI.as_view(), name="team-ranking"),
    path('rankings/', RankingListAPI.as_view(), name="all-ranks"),
    path('rankings/<uuid>/', RankingAPI.as_view(), name="ranking-detail"),
    
    
]
