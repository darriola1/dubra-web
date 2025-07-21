import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { API_BASE_URL, STATUS_SHIPPING_OPTIONS } from '@/lib/constants';
import Filters from "@/components/shared/Filters";
import Pagination from "@/components/shared/Pagination";


export default function AdminPlaceOrderPage() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchOrders = async () => {
      const query = new URLSearchParams({
        search,
        status: statusFilter,
        fromDate,
        toDate,
        limit,
        offset,
      });

      try {
        const res = await fetch(`${API_BASE_URL}/shipping?${query.toString()}`, {
          credentials: "include"
        });

        const data = await res.json();
        if (data.items && Array.isArray(data.items)) {
          setOrders(data.items);
          setTotal(data.total);
        } else {
          setOrders([]);
          setTotal(0);
        }
      } catch {
        setOrders([]);
        setTotal(0);
      }
    };

    fetchOrders();
  }, [search, statusFilter, fromDate, toDate, offset, limit]);

  return (

    <Card className="w-full max-w-5xl mx-auto bg-dubraWhite">
      <CardHeader><CardTitle>Mis Pedidos</CardTitle></CardHeader>
      <CardContent>
        <Filters
          search={search}
          onSearchChange={setSearch}
          statusShipping={statusFilter}
          onStatusShippingChange={setStatusFilter}
          statusShippingOptions={STATUS_SHIPPING_OPTIONS}
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={setFromDate}
          onToDateChange={setToDate}
          showSearch
          showStatusShipping
          showDateRange
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">ID</TableHead>
              <TableHead className="font-bold">Cliente</TableHead>
              <TableHead className="font-bold">Creado</TableHead>
              <TableHead className="font-bold">Recogida</TableHead>
              <TableHead className="font-bold">Entrega</TableHead>
              <TableHead className="font-bold">Estado</TableHead>
              <TableHead className="font-bold">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map(shipment => {

              const colorClass = STATUS_SHIPPING_OPTIONS.find(opt => opt.value === shipment.status)?.colorClass || "bg-gray-100 text-gray-800";
              const fecha = new Date(shipment.createdAt);
              const fechaStr = fecha.toLocaleDateString("es-AR");
              const horaStr = fecha.toLocaleTimeString("es-AR", {
                hour: "2-digit",
                minute: "2-digit",
              });

              return (
                <TableRow key={shipment.trackingId}>
                  <TableCell className="font-extrabold">{shipment.trackingId || `#${shipment.id}`}</TableCell>
                  <TableCell>
                    <span className="block font-medium">{shipment.contactName || "Sin nombre"}</span>
                  </TableCell>
                  <TableCell>
                    <div className="text-xs flex items-center gap-1">
                      {fechaStr} - {horaStr}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm flex items-center gap-1">{shipment.fromAddress || "-"}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm flex items-center gap-1">{shipment.toAddress || "-"}</div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${colorClass} font-extrabold`}>
                      {STATUS_SHIPPING_OPTIONS.find(opt => opt.value === shipment.status)?.label || "N/A"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {/*podemos incluir para cambiar de estas, editar o eliminar*/}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Pagination
          offset={offset}
          limit={limit}
          total={total}
          onPrev={() => setOffset(Math.max(0, offset - limit))}
          onNext={() => setOffset(offset + limit)}
        />
      </CardContent>
    </Card>
  );
}
