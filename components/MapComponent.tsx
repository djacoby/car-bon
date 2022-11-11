import { useEffect } from 'react';
import { Map } from 'maplibre-gl'

const getUserLocationErrorCb = (error: any) => {
  console.log(error)
}

export default function MapComponent() {
  useEffect(() => {
    // TODO: refactor this and add some sort of loader if fetching geographic coords
    navigator.geolocation.getCurrentPosition(
      (position) => {
        new Map({
          container: 'map',
          style: 'https://tiles.stadiamaps.com/styles/osm_bright.json', // stylesheet location
          center: [position.coords.longitude, position.coords.latitude], // starting position [lng, lat]
          zoom: 9, // starting zoom
        });
      },
      () => {
        new Map({
          container: 'map',
          style: 'https://tiles.stadiamaps.com/styles/osm_bright.json', // stylesheet location
          center: [-74.0060, 40.7128], // starting position [lng, lat]
          zoom: 9, // starting zoom
        });
      }
    )

  }, [])

  return (
    <div id='map'></div>
  );
}
