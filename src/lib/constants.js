export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const COLORS = {
  white: '#FEFEFE',
  terracotta: '#C84630',
  darkRed: '#A12F1B',
  lightBeige: '#F5F2ED',
  warmGray: '#C0B8AB',
  lightBlue: '#E9F2EF',
  darkBlue: '#001F45',
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ABOUTUS: '/aboutUs',
  
  //User routes
  USERDASHBOARD: '/user/dashboard',
  
  //Admin routes
  ADMINDASHBOARD: '/admin/dashboard',
};

export const STATUS_SHIPPING_OPTIONS = [
  {
    value: "pendiente",
    label: "Pendiente",
    colorClass: "bg-yellow-100 text-yellow-800",
  },
  {
    value: "en_camino",
    label: "En camino",
    colorClass: "bg-blue-100 text-blue-800",
  },
  {
    value: "entregado",
    label: "Entregado",
    colorClass: "bg-green-100 text-green-800",
  },
  {
    value: "cancelado",
    label: "Cancelado",
    colorClass: "bg-red-100 text-red-800",
  },
];


export const STATUS_PAYMENT_OPTIONS = [
  { value: "pending", label: "Pendiente", colorClass: "bg-yellow-100 text-yellow-800" },
  { value: "approved", label: "Pagado", colorClass: "bg-green-100 text-green-800" },
];
