# Car-bon Calculator

## Objectives

- User will enter in the year, make, and model of their vehicle
- The user will then enter a route consisting of a starting point A and ending point B
- The application will then calculate the amount of carbon emitted by their vehicle by trip, week, month, year

## Reasoning

- User can understand the carbon output of their daily driving habits (mainly work/ school commutes)
- User can evaluate how much their carbon output will be reduced by comparing more efficient vehicles
- User can evaluate how switching to a hybrid or remote work arrangement can reduce their carbon output
- User can evaluate their carbon reduction by moving closer to their school/ work

## Resources

- [Fuel Economy API](https://www.fueleconomy.gov/feg/ws/#vehicle)
- [Stadia Maps](https://stadiamaps.com/)
- [MapLibre](https://maplibre.org/)


### TODO

-[x] Explore fuel economy API
    - Basic API workflow
        - Call get years endpoint
        - Call get makes endpoint with year param
        - Call get models endpoint with year & make params
        - Call get trims endpoint with year, make, & model params
        - Call get vehicle endpoint with vehicle id
        - Calculate pounds of carbon output using returned value co2TailpipeGpm (Co2 tailpipe grams per mile) using valid aggregations (trip, week, month, year)
        - Perhaps list EPA smog score? From emissions list would have to figure out which one?
-[] Read map(s) docs
    - [Routing API Call](https://docs.stadiamaps.com/routing/#__tabbed_1_2)
-[x] Decide on ui library, tailwind, etc
-[x] Scaffold Next project