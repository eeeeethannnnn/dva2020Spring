# dva2020Spring
repo for dva 2020spring


Preliminary requirement:
pip install flask

To run app, change directory to /dva2020SPring, type `python3 navigator.py` in cmd or terminal and copy the http link in terminal to see the app.

# Crime data source:
https://data.world/bryantahb/crime-in-atlanta-2009-2017

# development Progress
backend: finished data processing for crime data as json, finished data loading for Marta data as json with get_backend_data.py

Crime Map:
1. Build a model of grids, calculate number of cases in each grid, divided by total number, and set crime index of cases with
max cases as 100.
2. Build a dayofweek bar to change data.



Progress report:  https://docs.google.com/document/d/14zlKJDJ-P-m9XlJSsZxpegkVBsxR0UmXlAieJRGKgJ8/edit

Proposal final version: https://docs.google.com/document/d/1k3DO6w0mCKB6WbNiO9V56wjT1AQXCydWLjSJJyBqI10/edit

Proposal discussion: https://docs.google.com/document/d/1k-9Isi-dyjtrnoLBnD3rLMsvTG4m8MDrT2V3ZnC_pAM/edit


For direction setup:

Run:
python cors_server.py

Open: direction.html