from django.contrib import admin

from .models import Season, Team, Game, GameDetail, Player, Ranking

# Register your models here.

@admin.register(Season)
class SeasonAdmin(admin.ModelAdmin):
    search_fields = ('year', 'date')
    list_display = ('year','date')
    ordering = ('-year',)


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    search_fields = ('name', 'year_founded', 'abbreviation')
    list_filter = ('name','year_founded')
    list_display = ('team_id', 'name', 'abbreviation', 'year_founded', 'season', 'win', 'loss', 'reb', 'ast', 'tov', 'stl', 'blk', 'pts', 'plus_minus')
    ordering = ('-year_founded',)
    

@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    search_fields = ('est_date', 'season')
    list_filter = ('est_date', 'season')
    list_display = ('game_id', 'est_date', 'game_status', 'season', 'home_team', 'pts_home', 'fg_pct_home', 'ft_pct_home', 'fg3_pct_home', 'ast_home', 'reb_home', 'away_team', 'pts_away', 'fg_pct_away', 'ft_pct_away', 'fg3_pct_away', 'ast_away', 'reb_away', 'home_team_win')
    ordering = ('-season',)


@admin.register(GameDetail)
class GameDetailAdmin(admin.ModelAdmin):
    search_fields = ('team', 'player', 'start_position')
    list_filter = ('team', 'player', 'start_position')
    list_display = ('game', 'team', 'player', 'start_position', 'comment', 'mins', 'fgm', 'fga', 'fg_pct', 'fg3m', 'fg3a', 'fg3_pct', 'ftm', 'fta', 'ft_pct', 'oreb', 'dreb', 'reb', 'ast', 'stl', 'blk', 'to', 'pf', 'pts', 'plus_minus')
    
    
@admin.register(Player)
class PlayerAdmin(admin.ModelAdmin):
    search_fields = ('team', 'season', 'age', 'height')
    list_filter = ('team', 'season', 'age', 'height')
    list_display = ('name', 'team', 'season', 'age', 'height', 'weight', 'reb', 'ast', 'tov', 'stl', 'blk', 'pts', 'plus_minus', 'updated_at')
    ordering = ('-age',)
    

@admin.register(Ranking)
class RankingAdmin(admin.ModelAdmin):
    search_fields = ('team', 'season', 'road_record')
    list_filter = ('team', 'season', 'road_record')
    list_display = ('team', 'season', 'standings_date', 'games', 'wins', 'losses', 'wins_pct', 'home_record', 'road_record', 'return_play')
    ordering = ('-standings_date',)