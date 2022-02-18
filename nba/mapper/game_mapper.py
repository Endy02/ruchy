import csv
import os
from datetime import datetime

from ..models import Game, GameDetail, Player, Season, Team


class GameMapper:
    def __init__(self):
        self.games = os.path.dirname(os.path.abspath("data")) + "/data/games.csv"
        self.games_details = os.path.dirname(os.path.abspath("data")) + "/data/games_details.csv"
        self.date = datetime.today()
        
    def import_games(self):
        try:
            row_count = len(list(open(self.games)))
            with open(self.games) as f :
                file = csv.reader(f)
                counter = 0
                for row in file:
                    counter += 1
                    if row[1] == "GAME_ID":
                        pass
                    else:
                        print(f"Games | id : {row[1]} | Year : {row[5]} | import : {round(counter / row_count * 100 ,2)} %", end='\r')
                        Game.objects.update_or_create(
                            game_id = row[1],
                            season = Season.objects.filter(year=row[5]).first(),
                            defaults={
                                "game_status" : row[2],
                                "est_date" : datetime.strptime(row[0], '%Y-%m-%d'),
                                "home_team" : Team.objects.filter(team_id=row[3]).first(),
                                "pts_home" : row[7] if row[7] != '' else float(0),
                                "fg_pct_home" : row[8] if row[8] != '' else float(0),
                                "ft_pct_home" : row[9] if row[9] != '' else float(0),
                                "fg3_pct_home" : row[10] if row[10] != '' else float(0),
                                "ast_home" : row[11] if row[11] != '' else float(0),
                                "reb_home" : row[12] if row[12] != '' else float(0),
                                "away_team" : Team.objects.filter(team_id=row[4]).first(),
                                "pts_away" : row[14] if row[14] != '' else float(0),
                                "fg_pct_away" : row[15] if row[15] != '' else float(0),
                                "ft_pct_away" : row[16] if row[16] != '' else float(0),
                                "fg3_pct_away" : row[17] if row[17] != '' else float(0),
                                "ast_away" : row[18] if row[18] != '' else float(0),
                                "reb_away" : row[19] if row[19] != '' else float(0),
                                "home_team_win" : row[20]
                            }
                        )
            return True
        except Exception as e:
            raise e
        
    
    def import_games_details(self):
        try:
            row_count = len(list(open(self.games_details)))
            with open(self.games_details) as f :
                file = csv.reader(f)
                counter = 0
                for row in file:
                    counter += 1
                    if row[0] == "GAME_ID":
                        pass
                    else:
                        print(f"Game details | id : {row[0]} | import : {round(counter / row_count * 100 ,2)} %", end='\r')
                        game = Game.objects.filter(game_id=row[0]).first()
                        team = Team.objects.filter(team_id=row[1]).first()
                        player = Player.objects.filter(player_id=row[4]).first()
                        if GameDetail.objects.filter(game=game, team=team, player=player):
                            GameDetail.objects.create(
                                game = game,
                                team = team,
                                player = player,
                                start_position = row[7] if row[7] != '' else None,
                                comment = row[8] if row[8] != '' else None,
                                mins = row[9] if row[9] != '' else None,
                                fgm = row[10] if row[10] != '' else None,
                                fga = row[11] if row[11] != '' else None,
                                fg_pct = row[12] if row[12] != '' else None,
                                fg3m = row[13] if row[13] != '' else None,
                                fg3a = row[14] if row[14] != '' else None,
                                fg3_pct = row[15] if row[15] != '' else None,
                                ftm = row[16] if row[16] != '' else None,
                                fta = row[17] if row[17] != '' else None,
                                ft_pct = row[18] if row[18] != '' else None,
                                oreb = row[19] if row[19] != '' else None,
                                dreb = row[20] if row[20] != '' else None,
                                reb = row[21] if row[21] != '' else None,
                                ast = row[22] if row[22] != '' else None,
                                to = row[23] if row[23] != '' else None,
                                stl = row[24] if row[24] != '' else None,
                                blk = row[25] if row[25] != '' else None,
                                pf = row[26] if row[26] != '' else None,
                                pts = row[27] if row[27] != '' else None,
                                plus_minus = row[28] if row[28] != '' else None
                            )
            return True
        except Exception as e:
            raise e
