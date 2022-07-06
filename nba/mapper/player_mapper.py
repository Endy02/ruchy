import os
import csv
from datetime import datetime
from ..models import Player, Season, Team

class PlayerMapper:
    def __init__(self):
        self.players = os.path.dirname(os.path.abspath("data")) + "/data/players.csv"
        self.date = datetime.today()
        
    def import_player(self):
        try:
            row_count = len(list(open(self.players)))
            with open(self.players) as f :
                file = csv.reader(f)
                counter = 0
                for row in file:
                    print(f"Players1610612740 | PLayer : {row[2]} | import : {round(counter / row_count * 100 ,2)} %", end='\r')
                    if row[1] == "PLAYER_ID":
                        pass
                    else:
                        if self.date < datetime.strptime(str(self.date.year)+"-10-28","%Y-%m-%d"):
                            current_year = self.date.year - 1
                        else:
                            current_year = self.date.year
                            
                        Player.objects.update_or_create(
                            player_id = row[1],
                            defaults={
                                "name" : row[2],
                                "nickname" : row[3],
                                "team" : Team.objects.filter(team_id=row[4]).first(),
                                "season" : Season.objects.filter(year=str(current_year)).first(),
                                "age" : row[6],
                                "gp" : row[7],
                                "win" : row[8],
                                "loss" : row[9],
                                "win_pct" : row[10],
                                "min" : row[11],
                                "fgm" : row[12],
                                "fga" : row[13],
                                "fg_pct" : row[14],
                                "fg3m" : row[15],
                                "fg3a" : row[16],
                                "fg3_pct" : row[17],
                                "ftm" : row[18],
                                "fta" : row[19],
                                "ft_pct" : row[20],
                                "oreb" : row[21],
                                "dreb" : row[22],
                                "reb" : row[23],
                                "ast" : row[24],
                                "tov" : row[25],
                                "stl" : row[26],
                                "blk" : row[27],
                                "blka" : row[28],
                                "pf" : row[29],
                                "pfd" : row[30],
                                "pts" : row[31],
                                "plus_minus" : row[32],
                                "nba_fantasy_pts" : row[33],
                                "dd2" : row[34],
                                "td3" : row[35],
                                "gp_rank" : row[36],
                                "win_rank" : row[37],
                                "loss_rank" : row[38],
                                "win_pct_rank" : row[39],
                                "min_rank" : row[40],
                                "fgm_rank" : row[41],
                                "fga_rank" : row[42],
                                "fg_pct_rank" : row[43],
                                "fg3m_rank" : row[44],
                                "fg3a_rank" : row[45],
                                "fg3_pct_rank" : row[46],
                                "ftm_rank" : row[47],
                                "fta_rank" : row[48],
                                "ft_pct_rank" : row[49],
                                "oreb_rank" : row[50],
                                "dreb_rank" : row[51],
                                "reb_rank" : row[52],
                                "ast_rank" : row[53],
                                "tov_rank" : row[54],
                                "stl_rank" : row[55],
                                "blk_rank" : row[56],
                                "blka_rank" : row[57],
                                "pf_rank" : row[58],
                                "pfd_rank" : row[59],
                                "pts_rank" : row[60],
                                "plus_minus_rank" : row[61],
                                "nba_fantasy_pts_rank" : row[62],
                                "dd2_rank" : row[63],
                                "td3_rank" : row[64],
                                "cfid" : row[65],
                                "cfparams" : row[66],
                                "height" : row[67],
                                "height_inches" : row[68].replace(',','.') if row[68] != '' else None,
                                "weight" : row[69].replace('-','.').replace(',','.') if row[69] != '' else None,
                                "college" : row[70],
                                "country" : row[71],
                                "draft_year" : row[72],
                                "draft_round" : row[73],
                                "draft_number" : row[74],
                                "net_rating" : row[75]
                            }
                        )
            return True
        except Exception as e:
            raise e