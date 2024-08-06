"use client";
import React, { useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import axios, { AxiosError } from 'axios';
import { URL_BE } from '../../../../constant';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from 'next/navigation';

interface Option {
    id_barang: string;
    value: string;
    label: string;
    harga: number;
}

interface SelectedItem extends Option {
    qty: number;
    price: number;
    discount_percent: number;
    discount_price: number;
    price_result: number;
    total: number;
}

export default function TambahLayout() {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<SingleValue<Option>>(null);
    const [options, setOptions] = useState<Option[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
    const [qty, setQty] = useState<number>(1);
    const [price, setPrice] = useState<number>(0);
    const [discount, setDiscount] = useState<number>(0);
    const [txt_message, setMessage] = useState<string>('');
    const [editingIndex, setEditingIndex] = useState<number | null>(null);
    const [transactionDate, setTransactionDate] = useState<Date | null>(null);
    const [grandTotalDiscount, setGrandTotalDiscount] = useState<number>(0);
    const [ongkir, setOngkir] = useState<number>(0);
    const [transactionCode, setTransactionCode] = useState<string>('');
    const [customerCode, setCustomerCode] = useState<string>('');
    const [customerName, setCustomerName] = useState<string>('');
    const [customerTelp, setCustomerTelp] = useState<string>('');

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                setLoading(true);
                const response = await axios.get(URL_BE + '/api/product/find/0');
                const data: Option[] = response.data.data.map((item: any) => ({
                    id_barang: item.id, // Ensure this is included
                    value: item.kode,
                    label: item.name,
                    harga: parseFloat(item.harga)
                }));

                setOptions(data);
            } catch (error) {
                const axiosError = error as AxiosError;
                setError(axiosError.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOptions();
    }, []);

    const handleChange = (option: SingleValue<Option>) => {
        setSelectedOption(option);
        const harga = option && typeof option.harga === 'number' ? option.harga : 0;
        setPrice(harga);
        setQty(1);
    };

    const handleAddItem = () => {
        if (selectedOption && price > 0) {
            const discount_price = (price * (discount / 100));
            const price_result = price - discount_price;
            const total = (price_result * qty);

            const newItem: SelectedItem = {
                ...selectedOption,
                qty: qty,
                price: price,
                discount_percent: discount,
                discount_price: discount_price,
                price_result: price_result,
                total: total
            };
            setSelectedItems([...selectedItems, newItem]);
            resetForm();
        } else {
            alert("Please select an item and enter a valid price.");
        }
    };

    const resetForm = () => {
        setSelectedOption(null);
        setQty(1);
        setPrice(0);
        setDiscount(0);
        setEditingIndex(null);
        setTransactionDate(null);
    };

    const handleRemoveItem = (index: number) => {
        const updatedItems = selectedItems.filter((_, itemIndex) => itemIndex !== index);
        setSelectedItems(updatedItems);
    };

    const handleEditItem = (index: number) => {
        const item = selectedItems[index];
        setEditingIndex(index);
        setSelectedOption({ value: item.value, label: item.label, harga: item.price, id_barang: item.id_barang });
        setQty(item.qty);
        setPrice(item.price);
        setDiscount(item.discount_percent);
    };

    const handleSaveItem = () => {
        if (editingIndex !== null && selectedOption && price > 0) {
            const discount_price = (price * (discount / 100));
            const price_result = price - discount_price;
            const total = (price_result * qty);

            const updatedItem: SelectedItem = {
                ...selectedOption,
                qty: qty,
                price: price,
                discount_percent: discount,
                discount_price: discount_price,
                price_result: price_result,
                total: total,
                id_barang: selectedOption.id_barang
            };

            const updatedItems = [...selectedItems];
            updatedItems[editingIndex] = updatedItem;
            setSelectedItems(updatedItems);
            resetForm();
        } else {
            alert("Please ensure all fields are filled out correctly.");
        }
    };

    // Calculate the grand total
    const grandTotal = selectedItems.reduce((acc, item) => acc + item.total, 0);

    // Calculate Total Bayar (Total Payable)
    const totalBayar = (grandTotal + ongkir) - grandTotalDiscount;

    // Function to handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission 
        // 
        // alert(customerName);
        
        
        // setMessage(JSON.stringify(selectedItems));
        try {
            const cust_response = await axios.post(`${URL_BE}/api/cust/save`, {
                kode: customerCode,
                name: customerName,
                telp: customerTelp,
                email: 'empty'
            });
            
            const sales_response = await axios.post(`${URL_BE}/api/sales/save`, {
                kode: transactionCode ,
                tgl: transactionDate ,
                cust_id: cust_response.data.data.id, 
                subtotal: grandTotal,
                diskon: grandTotalDiscount ,
                ongkir: ongkir ,
                total_bayar: totalBayar
            });
            alert(sales_response.data.content.data);
            const sales_detail_response = await axios.post(`${URL_BE}/api/sales_detail/save`, {
                sales_id: transactionCode,
                item: JSON.stringify(selectedItems), 
            });
            if (sales_detail_response.status = 200) {
            }else{
                
            }
            // setMessage(JSON.stringify(selectedItems));
            // console.log('Data successfully submitted:', response.data);
            router.push('/dashboard');
            // Optionally, reset your form or show a success message here
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error('Error submitting data:', axiosError.message);
        }
    };

    return (
        <div>
            <table className="min-w-full border border-gray-300">
                <tbody>
                    <tr>
                        <td colSpan={2} className="border border-gray-300 p-2">
                            <div>
                                <h6>Transaksi</h6>
                            </div>
                            <div>
                                <label>No</label>
                                <input id="transaction_code" value={transactionCode} onChange={(e) => setTransactionCode(e.target.value)} placeholder='masukkan kode transaksi' />
                            </div>
                            <div>
                                <label>Tanggal</label>
                                <DatePicker
                                    id='tgl_transaksi'
                                    selected={transactionDate}
                                    onChange={(date) => setTransactionDate(date)}
                                    dateFormat="yyyy/MM/dd"
                                    placeholderText="Select a date"
                                    className="border border-gray-300 p-2"
                                />
                            </div>
                        </td>
                        <td rowSpan={2} colSpan={2} className="border border-gray-300 p-2">
                            <div className='chooseBarang'>
                                <h6>Pilih Barang dulu disini</h6>
                                {loading ? (
                                    <p>Loading...</p>
                                ) : error ? (
                                    <p>Error loading options: {error}</p>
                                ) : (
                                    <div>
                                        <Select
                                            value={selectedOption}
                                            onChange={handleChange}
                                            options={options}
                                            placeholder="Select a product..."
                                            className="basic-single"
                                            classNamePrefix="select"
                                        />
                                        <div>
                                            <label>Qty</label>
                                            <input
                                                id="qty"
                                                type="number"
                                                value={qty}
                                                onChange={(e) => setQty(Number(e.target.value))}
                                                min="1"
                                            />
                                        </div>
                                        <div>
                                            <label>Price</label>
                                            <input
                                                id="price"
                                                type="number"
                                                value={price}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <label>Diskon</label>
                                            <input
                                                id="discount"
                                                type="number"
                                                value={discount}
                                                onChange={(e) => setDiscount(Number(e.target.value))}
                                            />
                                        </div>
                                        <button onClick={editingIndex !== null ? handleSaveItem : handleAddItem}>
                                            {editingIndex !== null ? 'Save' : 'Add'}
                                        </button>
                                    </div>
                                )}
                            </div>
                            <a href='/dashboard/barang/tambah'>tambah barang baru</a>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="border border-gray-300 p-2">
                            <div>
                                <h6>Customer</h6>
                            </div>
                            <div>
                                <label>Kode</label>
                                <input id="customer_code" value={customerCode} onChange={(e) => setCustomerCode(e.target.value)} placeholder='masukkan kode transaksi' />
                            </div>
                            <div>
                                <label>Nama</label>
                                <input id="customer_name" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder='masukkan nama customer' />
                            </div>
                            <div>
                                <label>Telp</label>
                                <input id="customer_telp" value={customerTelp} onChange={(e) => setCustomerTelp(e.target.value)} placeholder='masukkan telp' />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>{txt_message}</div>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}> {/* Set a fixed height and overflow for scrolling */}
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th>Tambah</th>
                            <th>No</th>
                            <th>Kode barang</th>
                            <th>Nama barang</th>
                            <th>Qty barang</th>
                            <th>Harga barang</th>
                            <th>% Diskon</th>
                            <th>(Rp) Diskon</th>
                            <th>Harga Diskon</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedItems.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                                    &nbsp;&nbsp;&nbsp;
                                    ||
                                    &nbsp;&nbsp;&nbsp;
                                    <button onClick={() => handleEditItem(index)}>Edit</button>
                                </td>
                                <td>{index + 1}</td>
                                <td><p hidden>{item.id_barang}</p>{item.value}</td>
                                <td>{item.label}</td>
                                <td>{item.qty}</td>
                                <td>{item.price}</td>
                                <td>{item.discount_percent}</td>
                                <td>{item.discount_price.toFixed(2)}</td>
                                <td>{item.price_result.toFixed(2)}</td>
                                <td>{item.total.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={8}></td>
                            <td colSpan={1} className='gtotal'>Grand Total</td>
                            <td colSpan={1}>{grandTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colSpan={8}></td>
                            <td colSpan={1} className='dgtotal'>Discount grand</td>
                            <td colSpan={1}>
                                <input
                                    className='input_dgtotal'
                                    type="number"
                                    width={40}
                                    value={grandTotalDiscount}
                                    onChange={(e) => setGrandTotalDiscount(Number(e.target.value))}
                                    placeholder="Enter discount %"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={8}></td>
                            <td colSpan={1} className='dgtotal'>Ongkir</td>
                            <td colSpan={1}>
                                <input
                                    className='input_dgtotal'
                                    type="number"
                                    width={50}
                                    value={ongkir}
                                    onChange={(e) => setOngkir(Number(e.target.value))}
                                    placeholder="Ongkir"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={8}></td>
                            <td colSpan={1} className='dgtotal'>Total Bayar</td>
                            <td colSpan={1}>{totalBayar.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
                <div>
                    <form onSubmit={handleSubmit}> {/* Add onSubmit to the form */}
                        {/*  */}
                        <input id='_transaksi_code' hidden value={transactionCode} />
                        <input id='_tgl_transaksi' hidden value={transactionDate ? transactionDate.toISOString() : ''} />
                        {/*  */}
                        <input id='_customer_code' hidden value={customerCode} />
                        <input id='_customer_name' hidden value={customerName} />
                        <input id='_customer_telp' hidden value={customerTelp} />
                        {/* sales */}
                        <input id='_subtotal' hidden value={grandTotal} />
                        <input id='_diskon' hidden value={grandTotalDiscount} />
                        <input id='_ongkir' hidden value={ongkir} />
                        <input id='_total_bayar' hidden value={totalBayar} />
                        <button type="submit">save</button> {/* Submit button for the form */}
                        <a href='/dashboard'>BATAL</a> {/* Submit button for the form */}
                    </form>
                </div>
            </div>
        </div>
    );
}
