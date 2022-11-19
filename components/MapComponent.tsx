import {
  type Dispatch,
  type SetStateAction,
  useEffect
} from 'react';

import {
  Map,
  NavigationControl,
  Marker,
  Popup,
  type NavigationOptions,
  type LngLatLike,
} from 'maplibre-gl';

interface Props {
  updateLoadingFn: Dispatch<SetStateAction<boolean>>,
}

export default function MapComponent({ updateLoadingFn }: Props) {
  useEffect(() => {
    const map = new Map({
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

        updateLoadingFn(false);
      },
      (_error) => {
        // If user location is turned off, default to NYC
        map.setCenter({
          lng: -74.0060,
          lat: 40.7128,
        });

        updateLoadingFn(false);
      }
    );

    const navCtrlOpts: NavigationOptions = {
      showCompass: false,
	    showZoom: true,
	    visualizePitch: false,
    };


    map.addControl(new NavigationControl(navCtrlOpts));

    // TODO: test marker

    // First, we define our marker locations. You can use whatever format you want when
    // working with custom markers, but we have chosen to use GeoJSON for this example, as
    // a lot of geospatial data comes in this form. If you have a lot of data, you may want to
    // put it in another file that is loaded separately.
    const markerCollection = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          // NOTE: in GeoJSON notation, LONGITUDE comes first. GeoJSON
          // uses x, y coordinate notation, just like you used to describe
          // graph coordinates in high school. What you may not realize is
          // that latitude, often said first in English, is actually the y axis.
          coordinates: [-81.092780, 40.733500]
        },
        properties: {
          title: 'Starting location'
        }
      }]
    };

    // Next, we can add markers to the map
    markerCollection.features.forEach(function(point) {
      // Since these are HTML markers, we create a DOM element first, which we will later
      // pass to the Marker constructor.
      const elem = document.createElement('div');
      elem.className = 'marker';

      // Now, we construct a marker and set it's coordinates from the GeoJSON. Note the coordinate order.
      const marker = new Marker(elem);
      marker.setLngLat(point.geometry.coordinates as LngLatLike);

      // You can also create a popup that gets shown when you click on a marker. You can style this using
      // CSS as well if you so desire. A minimal example is shown. The offset will depend on the height of your image.
      const popup = new Popup({ offset: 24, closeButton: false });
      popup.setHTML('<div>' + point.properties.title + '</div>');

      // Set the marker's popup.
      marker.setPopup(popup);

      // Finally, we add the marker to the map.
      marker.addTo(map);

      // TODO: end test marker
    });

  }, []);

  return (
    <div id='map'></div>
  );
}
