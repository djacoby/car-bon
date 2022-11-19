/**
 * API Response
 */
export interface ApiResponse<T> {
  result: string | T;
  error: boolean;
}

/**
 * Fuel economy API object response
 */
export interface FuelEconomyApiValue {
  label: string;
  value: string;
}

/**
 * Fuel economy menu itme
 */
export interface FuelEconomyMenuItem {
  text: string;
  value: string;
}

/**
 * Years, makes, models, and trims response from fueleconomy.gov
 */
export interface FuelEconomyApiResponse {
  menuItem: FuelEconomyMenuItem | FuelEconomyMenuItem[];
}

/**
 * Vehicle response from fueleconomy.gob
 */
export interface FuelEconomyApiVehicle {
  atvType: string;
  barrels08: number;
  barrelsA08: number;
  c240Dscr: string;
  c240bDscr: string;
  charge120: number;
  charge240: number;
  charge240b: number;
  city08: number;
  city08U: number;
  cityA08: number;
  cityA08U: number;
  cityCD: number;
  cityE: number;
  cityUF: number;
  co2: number;
  co2A: number;
  co2TailpipeAGpm: number;
  co2TailpipeGpm: number;
  comb08: number;
  comb08U: number;
  combA08: number;
  combA08U: number;
  combE: number;
  combinedCD: number;
  combinedUF: number;
  createdOn: string;
  cylinders: number;
  displ: number;
  drive: string;
  emissionsList: {
    emissionsInfo: {
      efid: string;
      id: number;
      salesArea: number;
      score: number;
      scoreAlt: number;
      smartwayScore: number;
      standard: string;
      stdText: string;
    }[];
  };
  engId: number;
  eng_dscr: string;
  evMotor: string;
  feScore:number;
  fuelCost08:number;
  fuelCostA08:number;
  fuelType: string;
  fuelType1: string;
  fuelType2: string;
  ghgScore: number;
  ghgScoreA: number;
  guzzler: string;
  highway08:number;
  highway08U:number;
  highwayA08:number;
  highwayA08U: number;
  highwayCD: number;
  highwayE: number;
  highwayUF: number;
  hlv: number;
  hpv: number;
  id: number;
  lv2: number;
  lv4: number;
  make:string;
  mfrCode:string;
  model:string;
  modifiedOn:string;
  mpgData:string;
  mpgRevised: boolean;
  phevBlended: boolean;
  phevCity: number;
  phevComb: number;
  phevHwy: number;
  pv2: number;
  pv4: number;
  range: number;
  rangeA: string;
  rangeCity: number;
  rangeCityA: number;
  rangeHwy: number;
  rangeHwyA: number;
  startStop: string;
  trans_dscr: string;
  trany: string;
  UCity: number;
  UCityA: number;
  UHighway: number;
  UHighwayA: number;
  VClass: string;
  year: number;
  youSaveSpend: number;
  sCharger: string;
  tCharger: string;
}

/**
 * Opencage address lookup API response object
 */
export interface OpenCageAddressLookupResponse {
  documentation: string;
  licenses: {
    name: string;
    url: string;
  }[],
  rate: {
    limit: number;
    remaining: number;
    reset: number;
  },
  results: {
    annotations: {
      DMS: {
        lat: string;
        lng: string;
      },
      FIPS: {
        state: number;
      },
      MGRS: string;
      Maidenhead: string;
      Mercator: {
        x: number;
        y: number;
      },
      OSM: {
        note_url: string;
        url: string;
      },
      UN_M49: {
        regions: {
          AMERICAS: number;
          NORTHERN_AMERICA: number;
          US: number;
          WORLD: number;
        },
        statistical_groupings: string[];
      },
      callingcode: number;
      currency: {
        alternate_symbols: string[];
        decimal_mark: string;
        disambiguate_symbol: string;
        html_entity: string;
        iso_code: string;
        iso_numeric: number;
        name: string;
        smallest_denomination: number;
        subunit: string;
        subunit_to_unit: number;
        symbol: string;
        symbol_first: number;
        thousands_separator: string;
      },
      flag: string;
      geohash: string;
      qibla: number;
      roadinfo: {
        drive_on: string;
        road: string;
        speed_in: string;
      },
      sun: {
        rise: {
          apparent: number;
          astronomical: number;
          civil: number;
          nautical: number;
        },
        set: {
          apparent: number;
          astronomical: number;
          civil: number;
          nautical: number;
        }
      },
      timezone: {
        name: string;
        now_in_dst: number;
        offset_sec: number;
        offset_string: number;
        short_name: string;
      },
      what3words: {
        words: string;
      }
    },
    components: {
      'ISO_3166-1_alpha-2': string;
      'ISO_3166-1_alpha-3': string;
      'ISO_3166-2': string[];
      _category: string;
      _type: string;
      continent: string;
      country: string;
      country_code: string;
      road: string;
      state: string;
      state_code: string;
      town: string;
    },
    confidence: number;
    formatted: string;
    geometry: {
      lat: number;
      lng: number;
    }
  }[],
  status: {
    code: number;
    message: string;
  },
  stay_informed: {
    blog: string;
    twitter: string;
  },
  thanks: string;
  timestamp: {
    created_http: string;
    created_unix: number;
  },
  total_results: number;
}
