import { Database, FileSliders, MapPinHouseIcon, PackagePlus, PackageSearch, Phone, User } from "lucide-react";

export const FULL_ROUTES= (user) => { return user == 'admin' ? [
      {text: 'Panel de Control', link:`/${user}/dashboard`, icon:<Database/> },
      {text: 'Gestioná tus Pedidos', link:`/${user}/placeOrder`, icon:<PackageSearch/> },
      {text: 'Panel administrativo', link:`/${user}/administrationPanel`, icon:<FileSliders/>},
      {text: 'Personalizá tu Perfil', link:`/${user}/profile`, icon:<User/> },
      {text: 'Ver Recorrido de Entregas', link:`/${user}/map`, icon:<MapPinHouseIcon/> },
    ] : [
    { text: 'Panel de Control', link: `/${user}/dashboard`, icon: <Database /> },
    { text: 'Gestioná tus Pedidos', link: `/${user}/placeOrder`, icon: <PackageSearch /> },
    { text: 'Panel administrativo', link: `/${user}/administrationPanel`, icon: <FileSliders /> },
    { text: 'Creá una nueva Orden', link: `/${user}/newOrder`, icon: <PackagePlus /> },
    { text: 'Personalizá tu Perfil', link: `/${user}/profile`, icon: <User /> },
    { text: 'Ponete en Contacto', link: `/${user}/contact`, icon: <Phone /> },
  ]}