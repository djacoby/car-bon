/**
 * API Response
 */
export interface ApiResponse<T> {
  result: string | T,
  error: boolean,
}

/**
 * Year object shape
 */
export interface FuelEconomyApiValue {
  text: string,
  value: string,
}

/**
 * Years, makes, models, and trims response from fueleconomy.gov
 */
export interface FuelEconomyApiResponse {
  menuItem: FuelEconomyApiValue[],
}

/**
 * Vehicle response from fueleconomy.gob
 */
export interface FuelEconomyApiVehicle {
  atvType: string,
  barrels08: number,
  barrelsA08: number,
  c240Dscr: string,
  c240bDscr: string,
  charge120: number,
  charge240: number,
  charge240b: number,
  city08: number,
  city08U: number,
  cityA08: number,
  cityA08U: number,
  cityCD: number,
  cityE: number,
  cityUF: number,
  co2: number,
  co2A: number,
  co2TailpipeAGpm: number,
  co2TailpipeGpm: number,
  comb08: number,
  comb08U: number,
  combA08: number,
  combA08U: number,
  combE: number,
  combinedCD: number,
  combinedUF: number,
  createdOn: string,
  cylinders: number,
  displ: number,
  drive: string,
  emissionsList: {
    emissionsInfo: {
      efid: string,
      id: number,
      salesArea: number,
      score: number,
      scoreAlt: number,
      smartwayScore: number,
      standard: string,
      stdText: string,
    }[],
  },
  engId: number,
  eng_dscr: string,
  evMotor: string,
  feScore:number,
  fuelCost08:number,
  fuelCostA08:number,
  fuelType: string,
  fuelType1: string,
  fuelType2: string,
  ghgScore: number,
  ghgScoreA: number,
  guzzler: string,
  highway08:number,
  highway08U:number,
  highwayA08:number,
  highwayA08U: number,
  highwayCD: number,
  highwayE: number,
  highwayUF: number,
  hlv: number,
  hpv: number,
  id: number,
  lv2: number,
  lv4: number,
  make:string,
  mfrCode:string,
  model:string,
  modifiedOn:string,
  mpgData:string,
  mpgRevised: boolean,
  phevBlended: boolean,
  phevCity: number,
  phevComb: number,
  phevHwy: number,
  pv2: number,
  pv4: number,
  range: number,
  rangeA: string,
  rangeCity: number,
  rangeCityA: number,
  rangeHwy: number,
  rangeHwyA: number,
  startStop: string,
  trans_dscr: string,
  trany: string,
  UCity: number,
  UCityA: number,
  UHighway: number,
  UHighwayA: number,
  VClass: string,
  year: number,
  youSaveSpend: number,
  sCharger: string,
  tCharger: string,
}