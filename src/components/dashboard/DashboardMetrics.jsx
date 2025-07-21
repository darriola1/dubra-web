import React from "react";
import ServiceCard from "../card/ServiceCard";
import {
  Ban,
  Calendar,
  ChartLine,
  DollarSign,
  FileQuestion,
} from "lucide-react";

const DashboardMetrics = ({rol, cols}) => {
  return (
    <div className={`grid ${cols} gap-4 h-fit w-fit`}>
        { rol == 'user' ? 
        (<><ServiceCard
        title="Pedidos a pagar"
        description="25 / 5 / 2025"
        icon={<DollarSign />}
        iconDiv={"rounded bg-dubraSecondary p-2"}
        background={"outline bg-dubraPrimary"}
      />

      <ServiceCard
        title="Pedidos a aprobar"
        description="3"
        icon={<FileQuestion />}
        iconDiv={"rounded bg-dubraSecondary p-2"}
        background={"outline bg-dubraPrimary"}
      /></>) : null}
      <ServiceCard
        title="Pedidos Cancelados"
        description="0"
        icon={<Ban />}
        iconDiv={"rounded bg-dubraSecondary p-2"}
        background={"outline bg-dubraPrimary"}
       />

      <ServiceCard
        title="Pedidos Este Mes"
        description="3"
        icon={<Calendar />}
        iconDiv={"rounded bg-dubraSecondary p-2"}
        background={"outline bg-dubraPrimary"}
        />
      
    </div>
  );
};

export default DashboardMetrics;
