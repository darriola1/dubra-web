import React from 'react'
import HeroSection from '../HeroSection'
import ServiceCard from '../ServiceCard'
import camioneta from '@/assets/camionetaFiorino.jpg'
import { Truck, FileText, PackageOpen, History, Rat } from 'lucide-react'
import TrackingInputGroup from '../TrackingInputGroup'
import CardGrid from '../CardGrid'

const HomePage = () => {
  return (
    <div>
        <HeroSection
        imageSrc={camioneta}
        title={'SEGUÍ TU ENVÍO'}
        subtitle={'Ingresá el número de rastreo y conocé el estado de tu pedido.'}
        extraComponent={<TrackingInputGroup/>}
        background={'bg-dubraPrimary/80'}
        textColor={'text-dubraText'}
        centerContent={true}/>

        <HeroSection
        title={'GESTIONÁ TU PEDIDO CON NOSOTROS'}
        background={'bg-dubraWhite'}
        textColor={'text-dubraPrimary'}
        customHeight='h-fit'
        extraComponent={
          <div className='flex h-full pb-5 flex-col justify-center items-center'>
            <CardGrid> 
              <ServiceCard
              title={"Seguimiento de pedidos"}
              content={"Conocé el estado de tus envíos en todo momento."}
              icon={<Truck className='text-dubraSecondary'/>}
              background={'outline-1 outline-dubraSecondary'}>
              </ServiceCard>

              <ServiceCard
              title={"Gestión de pedidos"}
              content={"Ingresá y gestioná tus pedidos de forma sencilla."}
              icon={<PackageOpen className='text-dubraSecondary'/>}
              background={'outline-1 outline-dubraSecondary'}>
              </ServiceCard>

              <ServiceCard
              title={"Historial de pedidos"}
              content={"Accedé a tu historial de pedidos en tiempo real."}
              icon={<History className='text-dubraSecondary'/>}
              background={'outline-1 outline-dubraSecondary'}>
              </ServiceCard>

              <ServiceCard
              title={"Documentación digital"}
              content={"Gestioná tus comprobantes y documentación online."}
              icon={<FileText className='text-dubraSecondary'/>}
              background={'outline-1 outline-dubraSecondary'}>
              </ServiceCard>
            </CardGrid>
          </div>}/>

        <HeroSection
        title={'NUESTRA MISIÓN'}
        extraComponent={
        <div className='text-center text-xl md:text-2xl my-5'>
          <p>Ofrecemos un servicio de transporte de mercadería confiable y eficiente para empresas que necesiten enviar o recibir paquetes en el día.
           <br/> Buscamos ser el nexo entre nuestros clientes, uniendo Montevideo y Ciudad de la Costa.</p>
        </div>}
        background={'bg-dubraPrimary'}
        customHeight='h-fit'/>

        <HeroSection
        title={'¿POR QUÉ ELEGIRNOS?'}
        background={'bg-dubraWhite'}
        textColor={'text-dubraPrimary'}
        customHeight='h-fit'
        extraComponent={
          <div className='flex h-full pb-5 flex-col justify-center items-center'>
            <CardGrid> 
              <ServiceCard
              title={"El tiempo es clave"}
              content={"Ofrecemos una entrega garantizada en el mismo día para que tus envíos lleguen sin retrasos."}
              icon={<Truck className='text-dubraSecondary'/>}
              background={'bg-dubraWhite outline-1 outline-dubraPrimary'}>
              </ServiceCard>

              <ServiceCard
              title={" Confianza y seguridad"}
              content={"Cada paquete es tratado con el máximo cuidado, asegurando su integridad durante todo el recorrido."}
              icon={<PackageOpen className='text-dubraSecondary'/>}
              background={'bg-dubraWhite outline-1 outline-dubraPrimary'}>
              </ServiceCard>

              <ServiceCard
              title={"Eficiencia"}
              content={"Optimización de rutas y recursos para la mejor relación costo-beneficio"}
              icon={<History className='text-dubraSecondary'/>}
              background={'bg-dubraWhite outline-1 outline-dubraPrimary'}>
              </ServiceCard>

              <ServiceCard
              title={" Atención personalizada"}
              content={" Garantizamos una comunicación fluida para coordinar el retiro/entrega de tus paquetes. "}
              icon={<FileText className='text-dubraSecondary'/>}
              background={'bg-dubraWhite outline-1 outline-dubraPrimary'}>
              </ServiceCard>

            </CardGrid>
          </div>}/>
    </div>
  )
}

export default HomePage
