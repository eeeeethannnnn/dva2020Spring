import pandas as pd
import requests

class CrimeData():
    def __init__(self,path):
        self.path = path

    def get_crime_data_json(self):
        df = pd.read_csv(self.path)
        df = df.loc[:,['crime','date','lat','long']] # preprocess data to the columns that we need
        df['dayofweek']=df['date'].astype('datetime64[ns]').dt.dayofweek

        # for dayofweek column Monday=0, Sunday=6.
        json = df.to_json(r'crime.json',orient='index')
        return json


    def get_crime_data_for_dayofweek(self, day): # day in the range [0,6]
        df = pd.read_csv(self.path)
        df = df.loc[:,['crime','date','lat','long']] # preprocess data to the columns that we need
        df['dayofweek']=df['date'].astype('datetime64[ns]').dt.dayofweek
        day_df = df[df['dayofweek']==day]
        json = day_df.to_json(f'crime_dayofweek={day}.json',orient='index')
        day_df.to_csv(f'crime_dayofweek{day}.csv')
        return json



def get_marta_bus_data():
    response = requests.get('http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus')
    if response.status_code != 200:
        print("Marta bus api wrong status")
        return
    pd_df = pd.read_json(response.text) # pandas df can work as intermediate data processing level
    pd_df.to_json('all_bus_info.json',orient='index')




def get_marta_rail_data():
    response = requests.get('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=d29e12c7-e8e7-40fe-8a54-07bcc48da4f3')
    if response.status_code != 200:
        print("Marta rail api wrong status")
        return
    pd_df = pd.read_json(response.text) # pandas df can work as intermediate data processing level
    pd_df.to_json('all_rail_info.json',orient='index')


# example for uses


cd = CrimeData('atlcrime.csv')
cd.get_crime_data_json()
cd.get_crime_data_for_dayofweek(0)

get_marta_bus_data()
get_marta_rail_data()

#get_crime_data_json('atlcrime.csv')
