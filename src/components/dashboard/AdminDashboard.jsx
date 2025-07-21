import React from "react";
import DashboardMetrics from "./DashboardMetrics";
import RecentOrders from "./RecentOrders";
import Chart from "../Chart";

const AdminDashboard = () => {
  return (
      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-5 items-center">
          <RecentOrders linkTo={"/admin/orderManager"} title={'Órdenes Confirmadas'}/>
          <RecentOrders linkTo={"/admin/orderManager"} title={'Órdenes a aprobar'}/>
          <RecentOrders linkTo={"/admin/orderManager"} title={'Órdenes completadas'}/>
          <div className="flex flex-col gap-3 ">
            <DashboardMetrics />
          </div>
        </div>
          <div className="flex gap-5">
            <Chart/>
            <Chart/>
          </div>
      </div>
  );
};

export default AdminDashboard;
