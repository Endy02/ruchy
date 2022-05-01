import uuid

from django.db import models
from users.models import User

# Create your models here.

class Season(models.Model):
    year = models.CharField(max_length=4)
    date = models.CharField(max_length=50)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    
    def __str__(self):
        return self.date
    
    class Meta:
        verbose_name = 'season'
        verbose_name_plural = 'seasons'
        

class Team(models.Model):
    team_id = models.IntegerField(primary_key=True, unique=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=150)
    abbreviation = models.CharField(max_length=50)
    year_founded = models.CharField(max_length=4)
    season = models.ForeignKey(Season, on_delete=models.CASCADE)
    gp = models.IntegerField()
    win = models.IntegerField()
    loss = models.IntegerField()
    win_pct = models.FloatField()
    min = models.FloatField()
    fgm = models.IntegerField()
    fga = models.IntegerField()
    fg_pct = models.FloatField()
    fg3m = models.IntegerField()
    fg3a = models.IntegerField()
    fg3_pct = models.FloatField()
    ftm =models.IntegerField()
    fta = models.IntegerField()
    ft_pct = models.FloatField()
    oreb = models.IntegerField()
    dreb = models.IntegerField()
    reb = models.IntegerField()
    ast = models.IntegerField()
    tov = models.FloatField()
    stl = models.IntegerField()
    blk = models.IntegerField()
    blka = models.IntegerField()
    pf = models.IntegerField()
    pfd = models.IntegerField()
    pts = models.IntegerField()
    plus_minus = models.FloatField()
    gp_rank = models.IntegerField()
    win_rank = models.IntegerField()
    loss_rank = models.IntegerField()
    win_pct_rank = models.IntegerField()
    min_rank = models.IntegerField()
    fgm_rank = models.IntegerField()
    fga_rank = models.IntegerField()
    fg_pct_rank = models.IntegerField()
    fg3m_rank = models.IntegerField()
    fg3a_rank = models.IntegerField()
    fg3_pct_rank = models.IntegerField()
    ftm_rank = models.IntegerField()
    fta_rank = models.IntegerField()
    ft_pct_rank = models.IntegerField()
    oreb_rank = models.IntegerField()
    dreb_rank = models.IntegerField()
    reb_rank = models.IntegerField()
    ast_rank = models.IntegerField()
    tov_rank = models.IntegerField()
    stl_rank = models.IntegerField()
    blk_rank = models.IntegerField()
    blka_rank = models.IntegerField()
    pf_rank = models.IntegerField()
    pfd_rank = models.IntegerField()
    pts_rank = models.IntegerField()
    plus_minus_rank = models.IntegerField()
    cfid = models.IntegerField()
    cfparams = models.CharField(max_length=150)
    update_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'team'
        verbose_name_plural = 'teams'

    
class Player(models.Model):
    player_id = models.IntegerField(primary_key=True, unique=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    nickname = models.CharField(max_length=150)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    season = models.ForeignKey(Season, on_delete=models.CASCADE)
    age = models.FloatField()
    gp = models.IntegerField()
    win = models.IntegerField()
    loss = models.IntegerField()
    win_pct = models.FloatField()
    min = models.FloatField()
    fgm = models.IntegerField()
    fga = models.IntegerField()
    fg_pct = models.FloatField()
    fg3m = models.IntegerField()
    fg3a = models.IntegerField()
    fg3_pct = models.FloatField()
    ftm =models.IntegerField()
    fta = models.IntegerField()
    ft_pct = models.FloatField()
    oreb = models.IntegerField()
    dreb = models.IntegerField()
    reb = models.IntegerField()
    ast = models.IntegerField()
    tov = models.IntegerField()
    stl = models.IntegerField()
    blk = models.IntegerField()
    blka = models.IntegerField()
    pf = models.IntegerField()
    pfd = models.IntegerField()
    pts = models.IntegerField()
    plus_minus = models.IntegerField()
    nba_fantasy_pts = models.FloatField()
    dd2 = models.IntegerField()
    td3 = models.IntegerField()
    gp_rank = models.IntegerField()
    win_rank = models.IntegerField()
    loss_rank = models.IntegerField()
    win_pct_rank = models.IntegerField()
    min_rank = models.IntegerField()
    fgm_rank = models.IntegerField()
    fga_rank = models.IntegerField()
    fg_pct_rank = models.IntegerField()
    fg3m_rank = models.IntegerField()
    fg3a_rank = models.IntegerField()
    fg3_pct_rank = models.IntegerField()
    ftm_rank = models.IntegerField()
    fta_rank = models.IntegerField()
    ft_pct_rank = models.IntegerField()
    oreb_rank = models.IntegerField()
    dreb_rank = models.IntegerField()
    reb_rank = models.IntegerField()
    ast_rank = models.IntegerField()
    tov_rank = models.IntegerField()
    stl_rank = models.IntegerField()
    blk_rank = models.IntegerField()
    blka_rank = models.IntegerField()
    pf_rank = models.IntegerField()
    pfd_rank = models.IntegerField()
    pts_rank = models.IntegerField()
    plus_minus_rank = models.IntegerField()
    nba_fantasy_pts_rank = models.IntegerField()
    dd2_rank = models.IntegerField()
    td3_rank = models.IntegerField()
    cfid = models.IntegerField()
    cfparams = models.CharField(max_length=150)
    height = models.CharField(max_length=100)
    height_inches = models.FloatField(null=True,blank=True)
    weight = models.FloatField(null=True,blank=True)
    college = models.CharField(max_length=150)
    country = models.CharField(max_length=150)
    draft_year = models.CharField(max_length=150)
    draft_round = models.CharField(max_length=150)
    draft_number = models.CharField(max_length=150)
    net_rating = models.CharField(max_length=150)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = 'player'
        verbose_name_plural = 'players'
    
    
class Game(models.Model):
    game_id = models.IntegerField(primary_key=True, unique=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    game_status = models.CharField(max_length=200)
    est_date = models.DateField()
    season = models.ForeignKey(Season, on_delete=models.CASCADE, blank=True, null=True)
    home_team = models.ForeignKey(Team, related_name='home_team', on_delete=models.CASCADE)
    home_team_name = models.CharField(max_length=200, null=True, blank=True)
    pts_home = models.FloatField(blank=True, null=True)
    fg_pct_home = models.FloatField(blank=True, null=True)
    ft_pct_home = models.FloatField(blank=True, null=True)
    fg3_pct_home = models.FloatField(blank=True, null=True)
    ast_home = models.FloatField(blank=True, null=True)
    reb_home = models.FloatField(blank=True, null=True)
    away_team = models.ForeignKey(Team, related_name='away_team', on_delete=models.CASCADE)
    away_team_name = models.CharField(max_length=200, null=True, blank=True)
    pts_away = models.FloatField(blank=True, null=True)
    fg_pct_away = models.FloatField(blank=True, null=True)
    ft_pct_away = models.FloatField(blank=True, null=True)
    fg3_pct_away = models.FloatField(blank=True, null=True)
    ast_away = models.FloatField(blank=True, null=True)
    reb_away = models.FloatField(blank=True, null=True)
    home_team_win = models.BooleanField(blank=True, null=True)
    
    def __str__(self) -> str:
        return self.home_team.name + " vs " + self.away_team.name
    
    class Meta:
        verbose_name = 'game'
        verbose_name_plural = 'games'
    

class GameDetail(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False,)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    player = models.ForeignKey(Player, on_delete=models.CASCADE, null=True)
    start_position = models.CharField(max_length=50, blank=True, null=True)
    comment = models.TextField(blank=True, null=True)
    mins = models.CharField(max_length=100, blank=True, null=True)
    fgm = models.FloatField(blank=True, null=True)
    fga = models.FloatField(blank=True, null=True)
    fg_pct = models.FloatField(blank=True, null=True)
    fg3m = models.FloatField(blank=True, null=True)
    fg3a = models.FloatField(blank=True, null=True)
    fg3_pct = models.FloatField(blank=True, null=True)
    ftm = models.FloatField(blank=True, null=True)
    fta = models.FloatField(blank=True, null=True)
    ft_pct = models.FloatField(blank=True, null=True)
    oreb = models.FloatField(blank=True, null=True)
    dreb = models.FloatField(blank=True, null=True)
    reb = models.FloatField(blank=True, null=True)
    ast = models.FloatField(blank=True, null=True)
    stl = models.FloatField(blank=True, null=True)
    blk = models.FloatField(blank=True, null=True)
    to = models.FloatField(blank=True, null=True)
    pf = models.FloatField(blank=True, null=True)
    pts = models.FloatField(blank=True, null=True)
    plus_minus = models.FloatField(blank=True, null=True)
    
    def __str__(self):
        return self.game.home_team.abbreviation + " vs " + self.game.away_team.abbreviation
    
    class Meta:
        verbose_name = 'game_detail'
        verbose_name_plural = 'game_details'
    
class Ranking(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    season = models.ForeignKey(Season, on_delete=models.CASCADE)
    standings_date = models.DateTimeField()
    games = models.IntegerField(blank=True, null=True)
    wins = models.IntegerField(blank=True, null=True)
    losses = models.IntegerField(blank=True, null=True)
    wins_pct = models.FloatField(blank=True, null=True)
    home_record = models.CharField(max_length=50, blank=True, null=True)
    road_record = models.CharField(max_length=50, blank=True, null=True)
    return_play = models.FloatField(blank=True, null=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    
    def __str__(self):
        return self.team.name
    
    class Meta:
        verbose_name = 'ranking'
        verbose_name_plural = 'rankings'


class Prediction(models.Model):
    game_id = models.IntegerField(primary_key=True, unique=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    game_status = models.CharField(max_length=200)
    est_date = models.DateField()
    season = models.ForeignKey(Season, on_delete=models.CASCADE, blank=True, null=True)
    home_team = models.ForeignKey(Team, related_name='pred_home_team', on_delete=models.CASCADE)
    home_team_name = models.CharField(max_length=200, null=True, blank=True)
    pts_home = models.FloatField(blank=True, null=True)
    fg_pct_home = models.FloatField(blank=True, null=True)
    ft_pct_home = models.FloatField(blank=True, null=True)
    fg3_pct_home = models.FloatField(blank=True, null=True)
    ast_home = models.FloatField(blank=True, null=True)
    reb_home = models.FloatField(blank=True, null=True)
    away_team = models.ForeignKey(Team, related_name='pred_away_team', on_delete=models.CASCADE)
    away_team_name = models.CharField(max_length=200, null=True, blank=True)
    pts_away = models.FloatField(blank=True, null=True)
    fg_pct_away = models.FloatField(blank=True, null=True)
    ft_pct_away = models.FloatField(blank=True, null=True)
    fg3_pct_away = models.FloatField(blank=True, null=True)
    ast_away = models.FloatField(blank=True, null=True)
    reb_away = models.FloatField(blank=True, null=True)
    home_team_win = models.BooleanField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.home_team.name + " vs " + self.away_team.name
    
    class Meta:
        verbose_name = 'prediction'
        verbose_name_plural = 'predictions'
        
class Simulation(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    game_id = models.IntegerField(primary_key=True, unique=True)
    uuid = models.UUIDField(default=uuid.uuid4, editable=False)
    game_status = models.CharField(max_length=200)
    est_date = models.DateField()
    season = models.ForeignKey(Season, on_delete=models.CASCADE, blank=True, null=True)
    home_team = models.ForeignKey(Team, related_name='sim_home_team', on_delete=models.CASCADE)
    home_team_name = models.CharField(max_length=200, null=True, blank=True)
    pts_home = models.FloatField(blank=True, null=True)
    fg_pct_home = models.FloatField(blank=True, null=True)
    ft_pct_home = models.FloatField(blank=True, null=True)
    fg3_pct_home = models.FloatField(blank=True, null=True)
    ast_home = models.FloatField(blank=True, null=True)
    reb_home = models.FloatField(blank=True, null=True)
    away_team = models.ForeignKey(Team, related_name='sim_away_team', on_delete=models.CASCADE)
    away_team_name = models.CharField(max_length=200, null=True, blank=True)
    pts_away = models.FloatField(blank=True, null=True)
    fg_pct_away = models.FloatField(blank=True, null=True)
    ft_pct_away = models.FloatField(blank=True, null=True)
    fg3_pct_away = models.FloatField(blank=True, null=True)
    ast_away = models.FloatField(blank=True, null=True)
    reb_away = models.FloatField(blank=True, null=True)
    home_team_win = models.BooleanField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.home_team.name + " vs " + self.away_team.name
    
    class Meta:
        verbose_name = 'simulation'
        verbose_name_plural = 'simulations'
