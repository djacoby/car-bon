import type { FuelEconomyApiResponse, FuelEconomyApiValue, FuelEconomyMenuItem } from './interfaces';

/**
 * Reshapes Fuel economy api response for Select component consumption
 */
export const reshapeApiResponse = (apiResponse: FuelEconomyApiResponse): FuelEconomyApiValue[] => {
  if (!Array.isArray(apiResponse.menuItem)) {
    return [{
      label: apiResponse.menuItem.text,
      value: apiResponse.menuItem.value,
    }]
  }

  return apiResponse.menuItem.map(
    (item: FuelEconomyMenuItem) => {
      return {
        label: item.text,
        value: item.value,
      }
    }
  )
}
