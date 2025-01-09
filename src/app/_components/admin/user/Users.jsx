'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import { Skeleton } from "@/components/ui/skeleton"
import FormClass from './formClass';
import ButtonDelete from '../../ButtonDelete';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';


export default function Users() {
    const [classes, setClasses] = useState(); // تغيير اسم المتغير ليكون أكثر وضوحًا
    const [loading, setLoading] = useState(true); // لإظهار حالة التحميل
    const [error, setError] = useState(null); // للتعامل مع الأخطاء

    // قراءة التوكن من الكوكيز
     const token = Cookies.get('token') ? JSON.parse(Cookies.get('token')) : null;



    const fetchData = async () => {
        try {
            const res = await axios.get('http://mohammed199911.byethost22.com/api/users', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res)
            setClasses(res.data.user); // تخزين البيانات

            setLoading(false); // إنهاء حالة التحميل
        } catch (err) {
            console.error('Error fetching data:', err);
            setError('فشل في جلب البيانات. يرجى المحاولة لاحقًا.');
            setLoading(false);
        }
    };
    useEffect(() => {

        fetchData();

    }, []);




    // عرض حالة التحميل أو الأخطاء
    if (loading) return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    );
    if (error) return <p>{error}</p>;
    async function Delete(id) {


        try {

            let res = await axios.delete(`http://localhost:8000/api/admin/class/delete/${id}`, {

                headers: { Authorization: `Bearer ${token}` }
            })

            toast.success('تم حذف المنتج');
            setClasses(classes.filter(item => item.id !== id));
        } catch (error) {
            toast.error('لم يتم حذف المنتج');
            console.log("delete error", error);
        }

    }
    return (
        <div>
            <section className="text-center">
                <FormClass />
            </section>

            <Table>
                <TableHeader>
                    <TableRow className="p-5">
                        <TableHead>م</TableHead>
                        <TableHead>اسم المنتج</TableHead>
                        <TableHead>السعر</TableHead>
                        <TableHead> وصف المنتج</TableHead>
                        <TableHead>  صورة المنتج</TableHead>

                        <TableHead>حذف</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {classes.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.location}</TableCell>
                            {/* <TableCell>{item.location}</TableCell> */}


                            <TableCell>
                                <Toaster richColors />
                                <ButtonDelete fun={() => Delete(item.id)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
