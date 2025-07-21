// import { ArrowBigRight, Database, MapPinHouseIcon, PackageSearch, FileSliders, User } from 'lucide-react'
// import ResponsiveNavBar from "../navbar/ResponsiveNavBar";
// import { useEffect, useRef, useState } from "react";
// import NavBar from "../navbar/NavBar";
// import { Outlet } from "react-router-dom";
// import { useAuth } from '@/context/AuthContext'

// const AdminDashboardPage = () => {
//     const { user } = useAuth();

//     // const fields=[
//     //   {text: 'Panel de Control', link:`/${user?.role}/dashboard`, icon:<Database/> },
//     //   {text: 'Gestioná tus Pedidos', link:`/${user?.role}/placeOrder`, icon:<PackageSearch/> },
//     //   {text: 'Panel administrativo', link:`/${user?.role}/administrationPanel`, icon:<FileSliders/>},
//     //   {text: 'Personalizá tu Perfil', link:`/${user?.role}/profile`, icon:<User/> },
//     //   {text: 'Ver Recorrido de Entregas', link:`/${user?.role}/map`, icon:<MapPinHouseIcon/> },
//     // ];
  
  
//     const [isOpen, setIsOpen] = useState(false);
//     const menuRef = useRef(null);

//     useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);
  
//   return (
//     <div>
//       <section className="bg-dubraGradient h-screen flex pt-28 overflow-hidden flex-1" id='adminDashboard'> 
        
//       <div className='flex w-full '>
        
//         <ResponsiveNavBar
//         fields={fields}
//           menuRef={menuRef}
//           className={`justify-start ${isOpen ? 'opacity-100 visible bg-black/50' : 'opacity-0 invisible'} `}
//           Logo={true}/>

//         <div className='sm:w-1/5 bg-dubraPrimary max-md:hidden'>

//           <NavBar
//           fields={fields}
//           extraFields={[]}
//           extraButton={[]}
//           width={'full'}
//           className={'flex-col py-5 w-full'}/>
          
//         </div>

//         <main className='flex-1 w-full overflow-y-auto'>
//           <Outlet/>
//         </main>
//       </div>

//       <div className="fixed h-full flex items-center pb-25">
//         <div className="bg-dubraSecondary py-5 rounded-r hover:bg-dubraSecondary/80 md:hidden " onClick={() => setIsOpen(!isOpen)}>
//           <ArrowBigRight/>
//         </div>
//       </div>
//       </section>
//     </div>
//   );
// };

// export default AdminDashboardPage;