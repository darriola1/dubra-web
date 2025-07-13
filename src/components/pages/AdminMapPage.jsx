import React from 'react'
import LeafletMap from '../map/LeafletMap'

const AdminMapPage = () => {
  return (
    //todo: use HeroSection
    // todo: responsive
    <div className='flex h-full w-full'>
        <div className='w-5/6 h-full'>
            <LeafletMap/>
        </div>
        <div className='w-1/6 bg-blue-200 rounded-e-2xl'>
            {/* todo: select leaflet waypoints and routing*/}
        </div>
    </div>
  )
}

export default AdminMapPage