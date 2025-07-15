import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { API_BASE_URL, STATUS_PAYMENT_OPTIONS } from "@/lib/constants";
import { useAuth } from "@/context/AuthContext";
import Filters from "@/components/shared/Filters";
import Pagination from "@/components/shared/Pagination";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AdminAdministrationPanel() {
  const [invoices, setInvoices] = useState([]);
  const { user } = useAuth();
  const [uploadStatus, setUploadStatus] = useState({});
  const [search, setSearch] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [customers, setCustomers] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [statusPayment, setStatusPayment] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/customer/`, { credentials: "include" });
        const data = await res.json();
        setCustomers(data || []);
      } catch {
        setCustomers([]);
      }
    };
    fetchCustomers();
  }, []);

  useEffect(() => {
    const fetchInvoices = async () => {
      if (!user || user.role !== "admin") return;

      const query = new URLSearchParams({
        search,
        status: statusPayment,
        customerId,
        fromDate,
        toDate,
        limit,
        offset,
      });

      try {
        const res = await fetch(`${API_BASE_URL}/invoice/?${query.toString()}`, {
          method: 'GET',
          credentials: 'include'
        });

        const data = await res.json();
        if (data && Array.isArray(data.rows)) {
          setInvoices(data.rows);
          setTotal(data.total);
        } else {
          setInvoices([]);
          setTotal(0);
        }
      } catch {
        setInvoices([]);
      }
    };

    fetchInvoices();
  }, [user, search, customerId, statusPayment, fromDate, toDate, offset, limit]);

  const handleFileUpload = async (invoiceId, file) => {
    const formData = new FormData();
    formData.append("file", file);
    setUploadStatus(prev => ({ ...prev, [invoiceId]: "loading" }));

    try {
      const res = await fetch(`${API_BASE_URL}/invoice/${invoiceId}/upload`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      if (!res.ok) throw new Error("Error al subir archivo");
      const updated = await res.json();

      setInvoices(prev => prev.map(inv => (inv.id === invoiceId ? updated : inv)));
      setUploadStatus(prev => ({ ...prev, [invoiceId]: "done" }));

      setTimeout(() => {
        setUploadStatus(prev => {
          const newStatus = { ...prev };
          delete newStatus[invoiceId];
          return newStatus;
        });
      }, 2000);
    } catch {
      setUploadStatus(prev => ({ ...prev, [invoiceId]: "error" }));
    }
  };

  const inputRefs = useRef({});

  return (
    <Card className="w-full max-w-5xl mx-auto bg-dubraWhite">
      <CardHeader>
        <CardTitle>Facturas</CardTitle>
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
          customerId={customerId}
          onCustomerChange={setCustomerId}
          customers={customers}
          showSearch
          showStatusPayment
          showDateRange
          showCustomerFilter
        />
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>N° Factura</TableHead>
              <TableHead>Empresa</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Monto</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Archivo</TableHead>
              <TableHead>Acciones</TableHead>
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
                const total = inv.movement?.amount ?? "—";
                const estadoValue = inv.movement?.estado;
                const estadoData = STATUS_PAYMENT_OPTIONS.find(opt => opt.value === estadoValue);
                const estadoLabel = estadoData?.label || "—";
                const badgeClass = estadoData?.colorClass || "bg-gray-100 text-gray-800";

                return (
                  <TableRow key={inv.id}>
                    <TableCell>{inv.number}</TableCell>
                    <TableCell>{inv.customer?.nombre_fantasia ?? "—"}</TableCell>
                    <TableCell>{fecha}</TableCell>
                    <TableCell className={`font-bold ${total >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {typeof total === "number" ? `$${total.toLocaleString("es-AR")}` : "—"}
                    </TableCell>
                    <TableCell>
                      <Badge className={`${badgeClass} font-bold`}>{estadoLabel}</Badge>
                    </TableCell>
                    <TableCell>
                      {typeof total === "number" && total >= 0 ? (
                        <input
                          ref={(el) => (inputRefs.current[inv.id] = el)}
                          type="file"
                          accept="application/pdf"
                          disabled={uploadStatus[inv.id] === "loading"}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleFileUpload(inv.id, file).then(() => {
                                if (inputRefs.current[inv.id]) {
                                  inputRefs.current[inv.id].value = "";
                                }
                              });
                            }
                          }}
                        />
                      ) : (
                        <span className="text-gray-400 italic">No disponible, pago pendiente.</span>
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
