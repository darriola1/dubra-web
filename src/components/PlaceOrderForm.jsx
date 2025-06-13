import React, { useState } from 'react'
import FormBuilder from './FormBuilder'
import { Button } from './ui/button'
import ModalPopUp from './ModalPopUp';
import GeocoderLeafletMap from './map/GeocoderLeafletMap';

const PlaceOrderForm = () => {

    const [fields, setFields] = useState([
        { name: 'RUT', label: 'RUT', type: 'text', placeholder: 'RUT' },
    ]);
    const [isOpen, setIsOpen] = useState(false);
    const [number, setNumber] = useState(0);


    function editField(id) {
        const newNumber = number + 1;
        setNumber(newNumber);
        switch(id){
            case 'pickUpAddressButton':
                setFields( 
                    [... fields,
                    { name: `pickUpAddress${number}`,
                    label: `Direccion de Recogida ${number}`,
                    type: 'text', 
                    placeholder: 'Calle Ejemplo 111',
                    onclick: () => setIsOpen(!isOpen) /*REFERENCE */}]);
                break;
            case 'deliveryAddressButton':
                setFields(
                    [... fields,
                    { name: `deliveryAddress${number}`,
                    label: `Direccion de Entrega ${number}`,
                    type: 'text', 
                    placeholder: 'Calle Ejemplo 222'}]);
                break;
            case id:
                break;
        }
        
    }

  return (
    <FormBuilder
    title='Realiza tu pedido'
    description=''
    background='bg-dubraPrimary'
    fields={fields}
    children={
        <div>
            <div>
                <ModalPopUp
                children={<GeocoderLeafletMap/>}
                isOpen={isOpen}
                onClose={() => setIsOpen(!isOpen)}/>

            </div>
            <div className='flex pt-3 justify-between col-span-2'>

                    <Button id={'pickUpAddressButton'} onClick={() => editField('pickUpAddressButton')} className='bg-dubraSecondary'>
                        Agregar punto de Recogida
                    </Button>

                    <Button id={'deliveryAddressButton'} onClick={() => editField('deliveryAddressButton')} className='bg-dubraSecondary'>
                        Agregar punto de Entrega
                    </Button>

            </div>
        </div>
        }
    />
  )
}

export default PlaceOrderForm