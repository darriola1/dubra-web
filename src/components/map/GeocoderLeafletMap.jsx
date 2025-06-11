import React, { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder';
import LeafletMap from './LeafletMap';

const [adressValue, setAdressValue] = useState('')
const [latlngValue, setLatlLngValue] = useState('')


function GeocoderControl() {
  const map = useMap();

  useEffect(() => {
    if (!map || !L.Control.Geocoder) return;

    const geocoder = L.Control.geocoder({
      collapsed: false,
      defaultMarkGeocode: false,
      placeholder: 'Buscar dirección...',
    }).addTo(map);

    geocoder.on('markgeocode', function (e) {
      const adress = e.geocode.name; // geocode input text
      const latlng = e.geocode.center; // geocode latitude and longitude

      L.marker(latlng).addTo(map).bindPopup(adress).openPopup(); // marker
      map.setView(latlng, 15);
      setAdressValue(adress);
      setLatlLngValue(latlng);
    });

    return () => map.removeControl(geocoder);
  }, [map]);

  return null;
}

function GeocoderLeafletMap() {
  return (
    <LeafletMap children={<GeocoderControl/>}/>
  );
}

export default GeocoderLeafletMap;
