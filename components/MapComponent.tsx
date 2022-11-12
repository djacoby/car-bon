import { useEffect, useState } from 'react';
import { Map } from 'maplibre-gl';

import { LoadingOverlay } from '@mantine/core';

export default function MapComponent() {
  const [loading, updateLoading] = useState(true);

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
        updateLoading(false);
      },
      (_error) => {
        // If user location is turned off, default to NYC
        map.setCenter({
          lng: -74.0060,
          lat: 40.7128,
        });

        // Added setTimout to add some "juice to the ux"
        // setTimeout(() => updateLoading(false), 1500)
        updateLoading(false);
      }
    );

  }, []);

  return (

    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <LoadingOverlay
        visible={loading}
        overlayBlur={2}
        loaderProps={{
          size: 'xl'
        }}
      />
      {<div id='map'></div>}
    </div>
  );
}
