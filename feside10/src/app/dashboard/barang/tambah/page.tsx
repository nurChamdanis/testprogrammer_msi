"use client";
import { URL_BE } from "../../../../../constant";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function TambahLayout() {
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission

        // Create payload from form fields
        const payload = {
            kode: event.currentTarget.kode.value,
            name: event.currentTarget.nama.value,
            harga: event.currentTarget.harga.value
        };

        try {
            const { data } = await axios.post(URL_BE + "/api/product/save", payload);
            alert('SUKSES TAMBAH BARANG!');
            router.push('/dashboard/tambah');
        } catch (e) {
            const error = e as AxiosError;
            alert(error.message); // Alert the error message
        }
    };

    return (
        <div>
            <a href="/dashboard/tambah">Kembali</a>
            <div></div>
            <div>
                <h4>Barang baru</h4>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>kode</label>
                        <input name="kode" placeholder="kode barang" type="text" />
                    </div>
                    <div>
                        <label>nama</label>
                        <input name="nama" placeholder="nama barang" type="text" />
                    </div>
                    <div>
                        <label>harga</label>
                        <input name="harga" placeholder="harga barang" type="text" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
