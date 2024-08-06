"use client";

import { URL_BE } from '../../../constant';
import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';

// Define the SalesDetail interface
interface SalesDetail {
    sales_id: number;  // Adjust the type based on your actual data
    tgl: string;       // Assuming date is a string, adjust if it's a Date object
    name: string;      // Assuming this is the customer's name
    qty: number;       // Quantity
    subtotal: number;     // Sub total
    diskon: number;    // Discount
    ongkir: number;    // Shipping cost
    total_bayar: number;     // Sub total
}

interface ApiResponse {
    status: number;
    message: string;
    data: SalesDetail[]; // The sales data is in the `data` property
}

export default function Dashboard() {
    const [salesData, setSalesData] = useState<SalesDetail[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>(''); // State for search term

    // Async function to load data
    const loadData = async () => {
        try {
            const response = await axios.get<ApiResponse>(URL_BE + "/api/sales_detail/all/0");
            const { data } = response.data; // Extract the sales data array

            console.log(data); // Check the response structure

            // Set sales data directly as it is already an array
            setSalesData(data);
        } catch (err) {
            console.error("Error fetching data:", err);
            // Check if the error is an Axios error
            if (axios.isAxiosError(err)) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    // Use effect to call loadData on component mount
    useEffect(() => {
        loadData();
    }, []);

    // Calculate the grand total
    const grandTotal = salesData.reduce((acc, item) => acc + Number(item.total_bayar), 0);

    // Filter sales data based on the search term
    const filteredSalesData = salesData.filter(item =>
        item.sales_id.toString().includes(searchTerm) || // Search by sales_id
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || // Search by name
        item.tgl.includes(searchTerm) // Search by date (assuming it's in string format)
    );

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Dashboard</h1>
            <a href={'/dashboard/tambah'}>Tambah Transaksi</a>
            <div className='datatable'>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                    className="mb-4 p-2 border border-gray-300 rounded"
                />
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (
                    <table style={{ width: '100%', border: 'solid 1px black', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>No Transaksi</th>
                                <th>Tanggal</th>
                                <th>Nama Customer</th>
                                <th>Jumlah Barang</th>
                                <th>Sub total</th>
                                <th>Diskon</th>
                                <th>Ongkir</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredSalesData.map((item, index) => (
                                <tr key={item.sales_id}>
                                    <td>{index + 1}</td>
                                    <td>{item.sales_id}</td>
                                    <td>{item.tgl}</td>
                                    <td>{item.name}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.subtotal}</td>
                                    <td>{item.diskon || 0}</td> {/* Handle diskon as needed */}
                                    <td>{item.ongkir || 0}</td> {/* Handle diskon as needed */}
                                    <td>{item.total_bayar}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={8} style={{ textAlign: 'right' }}>Grand Total</td>
                                <td colSpan={1}>
                                    {/* Display the grand total */}
                                    {grandTotal}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                )}
            </div>
        </div>
    );
}
