import { useEffect } from 'react';
import { Map } from 'maplibre-gl'

export default function DropdownSelect() {
  useEffect(() => {
    new Map({
    container: 'map',
    style: 'https://tiles.stadiamaps.com/styles/osm_bright.json', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
  });
  }, [])

  return (
    <div id='map'></div>
  );
}
