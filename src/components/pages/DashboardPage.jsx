import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import Dashboard from "../Dashboard";
import { ArrowBigRight, Database } from 'lucide-react'
import NavBarButton from "../NavBarButton";

const DashboardPage = () => {

  //POR EL MOMENTO PAGINA DE PRUEBA PARA QUE REDIGIRA A ALGUN LADO CON LOGIN Y REGISTER
  return (
    <div>
      <section className="bg-dubraPrimary min-h-screen flex pt-25">
        
      <div className='grid grid-cols-6 w-full '>
        
        <div className='sm:col-span-1 bg-dubraSecondary max-md:hidden '>
          <NavigationMenu>

            <NavigationMenuList  className='flex justify-center gap-5 flex-col items-center pt-5'>

              <NavigationMenuItem className='flex-row flex gap-1'>
                  <Database/>
                  <NavBarButton text={'DashBoard'} link={'/dashboard'}/>

              </NavigationMenuItem>

              <NavigationMenuItem>

                  <NavBarButton text='Hola' link={'/dashboard'}/>

              </NavigationMenuItem>

            </NavigationMenuList>

          </NavigationMenu>
          
        </div>

        <div className='md:col-span-5 max-md:col-span-6 w-full'>
          <h1 className="ps-5 pt-5 text-5xl max-md:text-center">Dashboard.</h1>
          <Dashboard/>
        </div>
      </div>

      <div className="fixed h-full flex items-center pb-25">
        <div className="bg-dubraSecondary py-5 rounded-r hover:bg-dubraSecondary/80  md:hidden">
          <ArrowBigRight/>
        </div>
      </div>
          {/* todo: showing and hiding DASHBOARD PAGE NAVIGATION MENU */}
      </section>
    </div>
  );
};

export default DashboardPage;