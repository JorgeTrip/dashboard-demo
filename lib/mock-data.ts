import { SaleRecord } from './types';
import { format } from 'date-fns';

const SALESPEOPLE = [
    'Carlos Ruiz', 'Sofia Mendes', 'Javier Lopez', 'Ana Garcia', 'Martin Torres'
];

// Regiones con coordenadas latitud/longitud aproximadas para el mapeo visual
export const REGIONS_DATA = {
    'CABA': { lat: -34.6037, lng: -58.3816 },
    'GBA Norte (San Isidro)': { lat: -34.4700, lng: -58.5200 },
    'GBA Oeste (Morón)': { lat: -34.6500, lng: -58.6200 },
    'GBA Sur (Quilmes)': { lat: -34.7200, lng: -58.2500 },
    'Córdoba Capital': { lat: -31.4201, lng: -64.1888 },
    'Rosario (Santa Fe)': { lat: -32.9442, lng: -60.6505 },
    'Mendoza Capital': { lat: -32.8895, lng: -68.8458 },
    'Mar del Plata': { lat: -38.0055, lng: -57.5426 }
};

const REGIONS = Object.keys(REGIONS_DATA);

const CATEGORIES = [
    'DIETETICA', 'DISTRIBUIDOR', 'COSMETICA', 'FARMACIA'
];

const PRODUCTS = {
    'DIETETICA': [
        { name: 'ALHUCEMA (LAVANDA) FLOR PURA', price: 21990 },
        { name: 'ANIS ESTRELLADO ENTERO', price: 26245 },
        { name: 'CARQUEJA', price: 5190 },
        { name: 'COLA DE CABALLO', price: 4990 },
        { name: 'HIBISCO FLOR', price: 33900 },
        { name: 'MANZANILLA FLOR PURA', price: 22790 },
        { name: 'TE VERDE', price: 4290 }
    ],
    'DISTRIBUIDOR': [
        { name: 'TINTURA MADRE - CARDO MARIANO', price: 3500 },
        { name: 'TINTURA MADRE - VALERIANA', price: 3500 },
        { name: 'ACEITE ESENCIAL LAVANDA', price: 8500 }
    ],
    'COSMETICA': [
        { name: 'CREMA CALENDULA', price: 12500 },
        { name: 'SHAMPOO NATURAL', price: 9800 }
    ],
    'FARMACIA': [
        { name: 'JARABE HIEDRA', price: 6500 },
        { name: 'PASTILLAS PROPOLEO', price: 3200 }
    ]
};

const TOWNS = ['GUILLERMO E. HUDSON', 'GONZALEZ CATAN', 'AVELLANEDA', 'FLORES', 'MARTINEZ', 'LA PLATA'];

// Crear un conjunto de clientes recurrentes para simular fidelidad
const CUSTOMERS = Array.from({ length: 450 }, (_, i) => ({
    id: `CLI-${1000 + i}`,
    name: `CLIENTE ${i + 1}`,
    city: getRandomElement(TOWNS)
}));

function getRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const generateMockData = (): SaleRecord[] => {
    const records: SaleRecord[] = [];
    const startDate = new Date(2025, 0, 1); // 1 de Enero de 2025
    const endDate = new Date(2025, 2, 31); // 31 de Marzo de 2025

    // Generamos exactamente 36,102 registros para coincidir con el estudio de caso
    for (let i = 0; i < 36102; i++) {
        const categoryName = getRandomElement(CATEGORIES);
        const categoryProducts = PRODUCTS[categoryName as keyof typeof PRODUCTS] || PRODUCTS['DIETETICA'];
        const product = getRandomElement(categoryProducts);
        const qty = Math.floor(Math.random() * 5) + 1; // Cantidad aleatoria entre 1 y 5
        const priceWithTax = product.price * 1.21;
        const total = priceWithTax * qty;

        const customer = getRandomElement(CUSTOMERS);

        records.push({
            id: `FAC-${10000 + i}`,
            date: format(randomDate(startDate, endDate), 'yyyy-MM-dd'),
            invoice_type: 'FAC',
            invoice_number: `A0001000${23767 + i}`,
            salesperson: getRandomElement(SALESPEOPLE),
            customer_name: customer.name,
            city: customer.city,
            region: getRandomElement(REGIONS),
            sku: `ART-${Math.floor(Math.random() * 999)}`,
            product_name: product.name,
            quantity: qty,
            total_amount: Number(total.toFixed(2)),
            category: categoryName
        });
    }

    // Ordenar por fecha para optimizar el rendimiento de los filtros y gráficos temporales
    return records.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const MOCK_DATA = generateMockData();
