import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import Dashboard from "../dashboard/Dashboard";
import { ArrowBigRight, Database } from 'lucide-react'
import NavBarButton from "../navbar/NavBarButton";
import ResponsiveNavBar from "../navbar/ResponsiveNavBar";
import { useEffect, useRef, useState } from "react";
import Logo from '@/assets/LogoSF.png'

const DashboardPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Cierra el menú
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
      <section className="bg-dubraText min-h-screen flex pt-25">
        
      <div className='grid grid-cols-6 w-full '>
        
        <ResponsiveNavBar
        fields={[
          {text:'Dashboard', icon:<Database/>, link:'/dashboard'}
          ]}
          menuRef={menuRef}
          className={`justify-start ${isOpen ? 'opacity-100 visible bg-black/50' : 'opacity-0 invisible'} `}
          Logo={Logo}/>

        <div className='sm:col-span-1 bg-dubraPrimary max-md:hidden'>
          <NavigationMenu>

            <NavigationMenuList  className='flex justify-center gap-5 flex-col items-center pt-5'>
                  
                  <NavBarButton text={'DashBoard'} link={'/dashboard'} icon={<Database/>}/>

                  <NavBarButton text='Hola' link={'/dashboard'}/>

            </NavigationMenuList>

          </NavigationMenu>
          
        </div>

        <div className='md:col-span-5 max-md:col-span-6 w-full'>
          <Dashboard/>
        </div>
      </div>

      <div className="fixed h-full flex items-center pb-25">
        <div className="bg-dubraSecondary py-5 rounded-r hover:bg-dubraSecondary/80 md:hidden " onClick={() => setIsOpen(!isOpen)}>
          <ArrowBigRight/>
        </div>
      </div>
          {/* todo: showing and hiding DASHBOARD PAGE NAVIGATION MENU */}
      </section>
    </div>
  );
};

export default DashboardPage;