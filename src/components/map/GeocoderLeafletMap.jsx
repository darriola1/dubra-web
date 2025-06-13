import React, { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder';
import LeafletMap from './LeafletMap';

function GeocoderLeafletMap() {
  const [addressValue, setAddressValue] = useState('');
  const [latlngValue, setLatlngValue] = useState(null);

  const handleGeocode = ({ address, latlng }) => {
    setAddressValue(address);
    setLatlngValue(latlng);
  };

function GeocoderControl({ onGeocode }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !L.Control.Geocoder) return;

    const geocoder = L.Control.geocoder({
      collapsed: false,
      defaultMarkGeocode: false,
      placeholder: 'Buscar dirección...',
    }).addTo(map);

    geocoder.on('markgeocode', function (e) {
      const address = e.geocode.name;
      const latlng = e.geocode.center;

      L.marker(latlng).addTo(map).bindPopup(address).openPopup();
      map.setView(latlng, 15);

      // Pasar los valores al componente padre
      onGeocode({ address, latlng });
    });

    return () => map.removeControl(geocoder);
  }, [map, onGeocode]);

  return null;
}

  return (
    <>
      <LeafletMap>
        <GeocoderControl onGeocode={handleGeocode} />
      </LeafletMap>
      <div>
        <p><strong>Dirección:</strong> {addressValue}</p>
        <p><strong>LatLng:</strong> {latlngValue ? `${latlngValue.lat}, ${latlngValue.lng}` : ''}</p>
      </div>
    </>
  );
}

export default GeocoderLeafletMap;
