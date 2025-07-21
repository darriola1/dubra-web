import { ArrowBigRight } from 'lucide-react'
import ResponsiveNavBar from "../navbar/ResponsiveNavBar";
import { useEffect, useMemo, useRef, useState } from "react";
import NavBar from "../navbar/NavBar";
import { Outlet } from "react-router-dom";
import { FULL_ROUTES} from '@/lib/routeConfig';
import { useAuth } from '@/context/AuthContext';

const DashboardPage = () => {

  const {user} = useAuth()

  // const fields = [
  //   { text: 'Panel de Control', link: `/${user?.role}/dashboard`, icon: <Database /> },
  //   { text: 'Gestioná tus Pedidos', link: `/${user?.role}/placeOrder`, icon: <PackageSearch /> },
  //   { text: 'Panel administrativo', link: `/${user?.role}/administrationPanel`, icon: <FileSliders /> },
  //   { text: 'Creá una nueva Orden', link: `/${user?.role}/newOrder`, icon: <PackagePlus /> },
  //   { text: 'Personalizá tu Perfil', link: `/${user?.role}/profile`, icon: <User /> },
  //   { text: 'Ponete en Contacto', link: `/${user?.role}/contact`, icon: <Phone /> },
  // ];
  // todo: ask why user?.role
    const fields = FULL_ROUTES(user?.role)
    console.log(fields)
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  //POR EL MOMENTO PAGINA DE PRUEBA PARA QUE REDIGIRA A ALGUN LADO CON LOGIN Y REGISTER
  return (
    <div>
      <section className="bg-dubraGradient h-screen flex pt-25 overflow-hidden flex-1" id='userDashboard'>
        
      <div className='w-full flex'>
        
        <ResponsiveNavBar
        fields={fields}
          menuRef={menuRef}
          className={`justify-start  ${isOpen ? 'opacity-100 visible bg-black/50' : 'opacity-0 invisible' } `}
          Logo={true}/>

        <div className='sm:w-1/5 bg-dubraPrimary max-lg:hidden'>

          <NavBar
          fields={fields}
          extraFields={[]}
          extraButton={[]}
          width={'full'}
          className={'flex-col py-5 w-full'}/>
          
        </div>
        
        <main className='flex-1 w-full overflow-y-auto p-6'>
          <Outlet/>
        </main>

      </div>

      <div className="fixed h-full flex items-center pb-25">
        <div className="bg-dubraSecondary py-5 rounded-r hover:bg-dubraSecondary/80 lg:hidden " onClick={() => setIsOpen(!isOpen)}>
          <ArrowBigRight/>
        </div>
      </div>
      </section>
    </div>
  );
};

export default DashboardPage;