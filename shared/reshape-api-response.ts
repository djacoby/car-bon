import { FuelEconomyApiResponse, FuelEconomyApiValue } from './interfaces';

/**
 * Reshapes Fuel economy api response for Select component consumption
 */
export const reshapeApiResponse = (apiResponse: FuelEconomyApiResponse): FuelEconomyApiValue[] => {
  return apiResponse.menuItem.map(
    (item) => {
      return {
        label: item.text,
        value: item.value,
      }
    }
  )
}