import csv
import os
from datetime import datetime

from ..models import Ranking, Season, Team


class RankingMapper:
    def __init__(self):
        self.ranking = os.path.dirname(os.path.abspath("data")) + "/data/ranking.csv"
        self.date = datetime.today()
        
    def import_ranking(self):
        try:
            row_count = len(list(open(self.ranking)))
            with open(self.ranking) as f :
                file = csv.reader(f)
                counter = 0
                for row in file:
                    counter += 1
                    print()
                    print(f"Ranking | Team : {row[0]} | Season : {row[2][1:]} | import : {round(counter / row_count * 100 ,2)} %", end='\r')
                    if row[0] == "TEAM_ID":
                        pass
                    else:
                        date = datetime.strptime(row[3], '%Y-%m-%d')
                        if date < datetime.strptime(str(date.year)+"-10-28","%Y-%m-%d"):
                            current_year = date.year - 1
                        else:
                            current_year = date.year
                        team = Team.objects.filter(team_id=row[0]).first()
                        season = Season.objects.filter(year=current_year).first()
                        if date.year < current_year:
                            pass
                        else:
                            Ranking.objects.update_or_create(
                                team = team,
                                season = season,
                                defaults={
                                    "standings_date" : date.strftime('%Y-%m-%d %H:%M'),
                                    "games" : row[6] if row[6] != '' else int(0),
                                    "wins" : row[7] if row[7] != '' else int(0),
                                    "losses" : row[8] if row[8] != '' else int(0),
                                    "wins_pct" : row[9] if row[9] != '' else float(0),
                                    "home_record" : row[10] if row[7] != '' else None,
                                    "road_record" : row[11] if row[11] != '' else None,
                                    "return_play" : row[12] if row[12] != '' else float(0)
                                }
                            )
            return True
        except Exception as e:
            raise e
