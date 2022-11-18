import { config } from './config';

/**
 * Fuel Economy API URL
 */
export const fuelEconomyApiRoute = {
  year: () => `${config.fuelEconomyApiUrl}/menu/year`,
  make: (year: string) => `${config.fuelEconomyApiUrl}/menu/make?year=${year}`,
  model: (year: string, make: string) => `${config.fuelEconomyApiUrl}/menu/model?year=${year}&make=${make}`,
  trim: (year: string, make: string, model: string) => `${config.fuelEconomyApiUrl}/menu/options?year=${year}&make=${make}&model=${model}`,
  vehicle: (id: string) => `${config.fuelEconomyApiUrl}/${id}`,
};

/**
 * Open cage API URL
 */
export const openCageApiUrlRoute = {
  geoCoordinates: (address: string) => `${config.openCageApiUrl}${config.openCageApiKey}&q=${address}`,
};

