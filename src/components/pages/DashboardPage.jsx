import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@radix-ui/react-navigation-menu";
import Dashboard from "../Dashboard";
import { Database } from 'lucide-react'
import NavBarButton from "../NavBarButton";

const DashboardPage = () => {

  //POR EL MOMENTO PAGINA DE PRUEBA PARA QUE REDIGIRA A ALGUN LADO CON LOGIN Y REGISTER
  return (
    <div>
      <section className="bg-dubraWhite min-h-screen flex justify-center pt-25">
      <div className='grid sm:grid-cols-5 w-full max-sm:grid-cols-6'>
        <div className='sm:col-span-1 max-sm:col-span-2 bg-dubraSecondary'>
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

        <div className='sm:col-span-4 max-sm:col-span-4 bg-dubraPrimary w-full'>
          <Dashboard/>
        </div>
      </div>

          
      </section>
    </div>
  );
};

export default DashboardPage;