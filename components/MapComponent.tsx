import {
  type Dispatch,
  type SetStateAction,
  useEffect
} from 'react';

import { Map } from 'maplibre-gl';

interface Props {
  updateLoadingFn: Dispatch<SetStateAction<boolean>>,
}

export default function MapComponent({ updateLoadingFn }: Props) {
  useEffect(() => {
    let map = new Map({
      container: 'map',
      style: 'https://tiles.stadiamaps.com/styles/osm_bright.json', // stylesheet location
      zoom: 9, // starting zoom
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;

        map.setCenter({
          lng: longitude,
	        lat: latitude,
        });

        // Added setTimout to add some "juice to the ux"
        // setTimeout(() => updateLoading(false), 1500)
        updateLoadingFn(false);
      },
      (_error) => {
        // If user location is turned off, default to NYC
        map.setCenter({
          lng: -74.0060,
          lat: 40.7128,
        });

        // Added setTimout to add some "juice to the ux"
        // setTimeout(() => updateLoading(false), 1500)
        updateLoadingFn(false);
      }
    );

  }, []);

  return (
    <div id='map'></div>
  );
}
