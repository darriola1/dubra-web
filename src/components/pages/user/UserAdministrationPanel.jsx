import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { API_BASE_URL, STATUS_PAYMENT_OPTIONS } from "@/lib/constants";
import { useAuth } from "@/context/AuthContext";
import Filters from "@/components/shared/Filters";
import Pagination from "@/components/shared/Pagination";
import { Download } from "lucide-react"

export default function UserAdministrationPanel() {
  const [invoices, setInvoices] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [statusPayment, setStatusPayment] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    const fetchInvoices = async () => {
      if (!user || user.role !== "user") return;

      const query = new URLSearchParams({
        search,
        status: statusPayment,
        fromDate,
        toDate,
        limit,
        offset,
      });

      try {
        const res = await fetch(`${API_BASE_URL}/invoice/customer/${user.customerId}?${query.toString()}`, {
          credentials: "include"
        });

        const data = await res.json();
        if (Array.isArray(data)) {
          setInvoices(data);
          setTotal(data.length);
        } else {
          setInvoices([]);
          setTotal(0);
        }
      } catch {
        setInvoices([]);
        setTotal(0);
      }
    };

    fetchInvoices();
  }, [user, search, statusPayment, fromDate, toDate, offset, limit]);

  const toggleSelect = (invoiceId) => {
    setSelectedIds(prev =>
      prev.includes(invoiceId) ? prev.filter(id => id !== invoiceId) : [...prev, invoiceId]
    );
  };

  const handlePayOneInvoice = async (invoiceId) => {
    const invoice = invoices.find(inv => inv.id === invoiceId);
    const total = invoice?.movement?.amount || 0;

    if (total >= 0) {
      console.error("Esta factura ya está pagada.");
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/payment/checkout`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          invoiceId: invoice.id,
          description: `Pago de factura ${invoice.number}`,
          amount: Math.abs(total),
          user,
        }),
      });

      const data = await res.json();
      if (data.init_point) {
        window.location.href = data.init_point;
      } else {
        console.error("No se pudo generar el enlace de pago.");
      }
    } catch (err) {
      console.error("Error al generar preferencia de pago:", err);
    }
  };

  return (
    <Card className="w-full max-w-5xl mx-auto bg-dubraWhite">
      <CardHeader>
        <CardTitle>Mis Facturas</CardTitle>
      </CardHeader>
      <CardContent>
        <Filters
          search={search}
          onSearchChange={setSearch}
          statusPayment={statusPayment}
          onStatusPaymentChange={setStatusPayment}
          statusPaymentOptions={STATUS_PAYMENT_OPTIONS}
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={setFromDate}
          onToDateChange={setToDate}
          showSearch
          showStatusPayment
          showDateRange
        />

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Seleccionar</TableHead>
              <TableHead>N° Factura</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Monto</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Acciones</TableHead>
              <TableHead>Archivo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center">No hay facturas.</TableCell>
              </TableRow>
            ) : (
              invoices.map(inv => {
                const fecha = new Date(inv.createdAt).toLocaleDateString("es-AR");
                const total = inv.movement?.amount ?? 0;
                const estadoValue = inv.movement?.estado;
                const estadoData = STATUS_PAYMENT_OPTIONS.find(opt => opt.value === estadoValue);
                const estadoLabel = estadoData?.label || "—";
                const badgeClass = estadoData?.colorClass || "bg-gray-100 text-gray-800";

                return (
                  <TableRow key={inv.id}>
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(inv.id)}
                        onChange={() => toggleSelect(inv.id)}
                      />
                    </TableCell>
                    <TableCell>{inv.number}</TableCell>
                    <TableCell>{fecha}</TableCell>
                    <TableCell className={`font-bold ${total >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {`$${total.toLocaleString("es-AR")}`}
                    </TableCell>
                    <TableCell>
                      <Badge className={`${badgeClass} font-bold`}>{estadoLabel}</Badge>
                    </TableCell>
                    <TableCell>
                      {total < 0 && (
                        <Button variant="outline" size="sm" onClick={() => handlePayOneInvoice(inv.id)}>
                          Pagar
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {inv.fileBase64 ? (
                        <Button asChild variant="outline" size="sm" className="h-7 px-2 text-xs flex items-center gap-1">
                          <a href={`data:application/pdf;base64,${inv.fileBase64}`} download={`${inv.number}.pdf`}>
                            <Download className="w-3 h-3" />
                            Descargar
                          </a>
                        </Button>
                      ) : (
                        <span className="text-gray-500 italic">Sin archivo</span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
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
