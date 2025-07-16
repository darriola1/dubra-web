import React, { useState } from 'react'
import LeafletMap from '../map/LeafletMap'
import HeroSection from '../HeroSection'
import RoutingMachine from '../map/RoutingMachine'
import RoutingSelect from '../map/RoutingSelect'

const AdminMapPage = () => {
  const [actualPoint, setPoint] = useState(null)

  const points = [
    { from: { lat: -34.9011, lng: -56.1645 }, to: { lat: -34.9100, lng: -56.1600 }, name: 'Ciudad Vieja → Parque Rodó' },
    { from: { lat: -34.9100, lng: -56.1600 }, to: { lat: -34.9205, lng: -56.1340 }, name: 'Parque Rodó → Buceo' },
    { from: { lat: -34.9205, lng: -56.1340 }, to: { lat: -34.8772, lng: -56.0780 }, name: 'Buceo → Malvín Norte' },
    { from: { lat: -34.8772, lng: -56.0780 }, to: { lat: -34.8695, lng: -56.0232 }, name: 'Malvín Norte → Carrasco' },
    { from: { lat: -34.8695, lng: -56.0232 }, to: { lat: -34.8602, lng: -55.9890 }, name: 'Carrasco → Paso Carrasco' },
    { from: { lat: -34.8602, lng: -55.9890 }, to: { lat: -34.8545, lng: -55.9482 }, name: 'Paso Carrasco → Shangrilá' },
    { from: { lat: -34.8545, lng: -55.9482 }, to: { lat: -34.8437, lng: -55.9233 }, name: 'Shangrilá → Lagomar' },  
    { from: { lat: -34.8437, lng: -55.9233 }, to: { lat: -34.8312, lng: -55.9020 }, name: 'Lagomar → Solymar' },
    { from: { lat: -34.8312, lng: -55.9020 }, to: { lat: -34.8210, lng: -55.8835 }, name: 'Solymar → El Pinar' },
  ];

  return (
    //todo: use HeroSection
    // todo: responsive
    // todo: considerar scrollbar-none, que es un plugin de tailwind

    <HeroSection
          extraComponent={
          <div className='flex h-full w-full border-2 border-dubraSecondary rounded-e-2xl'>
            <div className='w-6/8 h-full'>
                <LeafletMap children={<RoutingMachine from={actualPoint ? actualPoint.from : null} to={actualPoint? actualPoint.to : null}/>}/>
            </div>
            <ul className='w-2/8 bg-dubraPrimary flex flex-col items-center rounded-e-2xl gap-5 overflow-y-scroll p-2'> 
                {points.map((point, index) => (
                  <li key={index}>
                    <RoutingSelect id={index} point={point} changePoint={(val) => setPoint(val)}/>
                  </li>
                ))}
            </ul>
          </div>}
          customHeight=' h-full '
          centerContent={false}
          textColor={'text-dubraPrimary'}/>
  )
}

export default AdminMapPage