import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, PackagePlus } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL, STATUS_COLORS } from '../../lib/constants';

const ShipmentRow = ({ shipment }) => {
  const fecha = new Date(shipment.createdAt);
  const fechaStr = fecha.toLocaleDateString("es-AR");
  const horaStr = fecha.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <TableRow>
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
        <Badge
          className={`${STATUS_COLORS[shipment.status?.toLowerCase()] || "bg-gray-100 text-gray-800"} font-extrabold`}>
          {shipment.status || "N/A"}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="font-medium">$1,000</div>
      </TableCell>
      <TableCell>
        {/* ver que acciones queremos ponerle eliminar editar o lo que sea */}
      </TableCell>
    </TableRow>
  );
};

export default function PlaceOrderPage() {
  const [shipments, setShipments] = useState([]); // Estado para los envíos
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const [statusFilter, setStatusFilter] = useState(""); // Estado para el filtro de estado
  const [offset, setOffset] = useState(0); // Estado para la paginación
  const [limit, setLimit] = useState(10); // Estado para el límite de resultados
  const [total, setTotal] = useState(0); // Estado para el total de envíos

  const navigate = useNavigate();

  const fetchShipments = async () => {
    try {
      const query = new URLSearchParams({
        search: searchTerm || "",
        status: statusFilter || "",
        limit: limit.toString(),
        offset: offset.toString(),
      });

      const res = await fetch(`${API_BASE_URL}/shipping?${query.toString()}`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await res.json();

      // Actualiza los envíos solo si la respuesta es válida
      if (Array.isArray(data) && data.length > 0) {
        setShipments(data);
        setTotal(data.length);
      } else {
        setShipments([]); // Si no hay datos, se limpia el estado
      }
    } catch (err) {
      console.error("Error al obtener envíos:", err);
      setShipments([]); // Limpia el estado en caso de error
    }
  };
  // obtener los envíos cada vez que cambian las dependencias
  useEffect(() => {
    fetchShipments();
  }, [searchTerm, statusFilter, offset, limit]);

  return (
    <div className="items-center flex flex-col gap-8">
      <div className="flex flex-col gap-4 p-4 max-w-7xl mx-auto w-full">
        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4" />
              <Input
                placeholder="Buscar por nombre, id de pedido, dirección..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border py-2 rounded-md text-sm"
            >
              <option value="">Todos</option>
              <option value="pendiente">Pendiente</option>
              <option value="en_camino">En camino</option>
              <option value="entregado">Entregado</option>
              <option value="cancelado">Cancelado</option>
            </select>
            <Button variant="outline" onClick={() => navigate("/user/newOrder")}>
              <PackagePlus className="h-4 w-4" />
              Nuevo envío
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lista de Envíos</CardTitle>
            <CardDescription>Todos tus envíos para que puedas buscar y filtrar fácilmente</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">ID</TableHead>
                  <TableHead className="font-bold">Cliente</TableHead>
                  <TableHead className="font-bold">Creado</TableHead>
                  <TableHead className="font-bold">Recogida</TableHead>
                  <TableHead className="font-bold">Entrega</TableHead>
                  <TableHead className="font-bold">Estado</TableHead>
                  <TableHead className="font-bold">Valor</TableHead>
                  <TableHead className="font-bold">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shipments.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center">
                      No hay resultados para mostrar.
                    </TableCell>
                  </TableRow>
                ) : (
                  shipments.map((shipment) => (
                    <ShipmentRow key={shipment.id} shipment={shipment} />
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
          <div className="flex justify-between items-center mt-4 px-4">
            <span className="text-sm">
              Mostrando {offset + 1} a {Math.min(offset + limit, total)} de {total} envíos
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setOffset(Math.max(0, offset - limit))}
                disabled={offset === 0}
              >
                Anterior
              </Button>
              <Button
                variant="outline"
                onClick={() => setOffset(offset + limit)}
                disabled={offset + limit >= total}
              >
                Siguiente
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
