export default function Filters({
    search, onSearchChange,
    statusPayment, onStatusPaymentChange,
    statusShipping, onStatusShippingChange,
    statusPaymentOptions = [],
    statusShippingOptions = [],
    fromDate, toDate, onFromDateChange, onToDateChange,
    customerId, onCustomerChange, customers = [],
    showSearch = false,
    showStatusPayment = false,
    showStatusShipping = false,
    showDateRange = false,
    showCustomerFilter = false

}) {
    return (
        <div className="flex gap-4 mb-4 flex-wrap">
            {showSearch && (
                <input
                    type="text"
                    placeholder="Buscar"
                    value={search}
                    onChange={e => onSearchChange(e.target.value)}
                    className="border px-2 py-1 rounded"
                />
            )}

            {showStatusPayment && (
                <select
                    value={statusPayment}
                    onChange={e => onStatusPaymentChange(e.target.value)}
                    className="border px-2 py-1 rounded cursor-pointer"
                >
                    <option value="">Estados de pago</option>
                    {statusPaymentOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            )}

            {showStatusShipping && (
                <select
                    value={statusShipping}
                    onChange={e => onStatusShippingChange(e.target.value)}
                    className="border px-2 py-1 rounded cursor-pointer"
                >
                    <option value="">Estados de envío</option>
                    {statusShippingOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            )}

            {showCustomerFilter && (
                <select
                    value={customerId}
                    onChange={e => onCustomerChange(e.target.value)}
                    className="border px-2 py-1 rounded cursor-pointer"
                >
                    <option value="">Todos los clientes</option>
                    {customers.map(c => (
                        <option key={c.id} value={c.id}>
                            {c.nombre_fantasia || c.name}
                        </option>
                    ))}
                </select>
            )}

            {showDateRange && (
                <>
                    <input
                        type="date"
                        value={fromDate}
                        onChange={e => onFromDateChange(e.target.value)}
                        className="border px-2 py-1 rounded"
                    />
                    <input
                        type="date"
                        value={toDate}
                        onChange={e => onToDateChange(e.target.value)}
                        className="border px-2 py-1 rounded"
                    />
                </>
            )}
        </div>
    );
}
