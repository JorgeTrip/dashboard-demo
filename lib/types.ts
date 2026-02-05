export interface SaleRecord {
    id: string;
    date: string; // Fecha en formato ISO YYYY-MM-DD
    invoice_type: 'FAC' | 'NC';
    invoice_number: string;
    salesperson: string;
    customer_name: string;
    city: string;
    region: string;
    sku: string;
    product_name: string;
    quantity: number;
    total_amount: number; // Precio con IVA
    category: string;
}

export type Period = 'last_7_days' | 'last_30_days' | 'last_3_months' | 'custom';
