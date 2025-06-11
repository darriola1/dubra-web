import React, { useState } from 'react'
import HeroSection from '../HeroSection'
import ModalPopUp from '../ModalPopUp'
import LeafletMap from '../map/LeafletMap';
import GeocoderLeafletMap from '../map/GeocoderLeafletMap';

const PlaceOrderPage = () => {
    const [showPopup, setShowPopup] = useState(false);
  return (
    <HeroSection
    extraComponent= {
    <div className="p-4">
      <button
        onClick={() => setShowPopup(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl"
      >
        Abrir Pop-Up
      </button>

      <ModalPopUp isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <GeocoderLeafletMap/>
      </ModalPopUp>
    </div>}
    centerContent= {true}
    customHeight= 'h-full'
    />
  )
}

export default PlaceOrderPage