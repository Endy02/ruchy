import csv
import os
from datetime import datetime

from ..models import Season, Team


class TeamMapper:
    def __init__(self):
        self.teams = os.path.dirname(os.path.abspath("data")) + "/data/teams.csv"
        self.date = datetime.today()
        
    def import_team(self):
        try:
            row_count = len(list(open(self.teams)))
            with open(self.teams) as f :
                file = csv.reader(f)
                counter = 0
                for row in file:
                    print(f"Teams | Id : {row[1]} | Name : {row[2]} | import : {round(counter / row_count * 100 ,2)} %", end='\r')
                    if row[1] == "TEAM_ID":
                        pass
                    else:
                        if self.date < datetime.strptime(str(self.date.year)+"-10-28","%Y-%m-%d"):
                            current_year = self.date.year - 1
                        else:
                            current_year = self.date.year
                        
                        Team.objects.update_or_create(
                            team_id = row[1],
                            defaults={
                                "name" : row[2],
                                "abbreviation" : row[57],
                                "year_founded" : row[58],
                                "season" : Season.objects.filter(year=str(current_year)).first(),
                                "gp" : row[3],
                                "win" : row[4],
                                "loss" : row[5],
                                "win_pct" : row[6],
                                "min" : row[7],
                                "fgm" : row[8],
                                "fga" : row[9],
                                "fg_pct" : row[10],
                                "fg3m" : row[11],
                                "fg3a" : row[12],
                                "fg3_pct" : row[13],
                                "ftm" : row[14],
                                "fta" : row[15],
                                "ft_pct" : row[16],
                                "oreb" : row[17],
                                "dreb" : row[18],
                                "reb" : row[19],
                                "ast" : row[20],
                                "tov" : row[21],
                                "stl" : row[22],
                                "blk" : row[23],
                                "blka" : row[24],
                                "pf" : row[25],
                                "pfd" : row[26],
                                "pts" : row[27],
                                "plus_minus" : row[28],
                                "gp_rank" : row[29],
                                "win_rank" : row[30],
                                "loss_rank" : row[31],
                                "win_pct_rank" : row[32],
                                "min_rank" : row[33],
                                "fgm_rank" : row[34],
                                "fga_rank" : row[35],
                                "fg_pct_rank" : row[36],
                                "fg3m_rank" : row[37],
                                "fg3a_rank" : row[38],
                                "fg3_pct_rank" : row[39],
                                "ftm_rank" : row[40],
                                "fta_rank" : row[41],
                                "ft_pct_rank" : row[42],
                                "oreb_rank" : row[43],
                                "dreb_rank" : row[44],
                                "reb_rank" : row[45],
                                "ast_rank" : row[46],
                                "tov_rank" : row[47],
                                "stl_rank" : row[48],
                                "blk_rank" : row[49],
                                "blka_rank" : row[50],
                                "pf_rank" : row[51],
                                "pfd_rank" : row[52],
                                "pts_rank" : row[53],
                                "plus_minus_rank" : row[54],
                                "cfid" : row[55],
                                "cfparams" : row[56]
                            }
                        )
            return True
        except Exception as e:
            raise e
