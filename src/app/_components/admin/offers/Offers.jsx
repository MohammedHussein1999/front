'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import ButtonDelete from '../../ButtonDelete';
import { Skeleton } from "@/components/ui/skeleton"
import { toast, Toaster } from 'sonner';


export default function Offers() {
  const [test, setTest] = useState([]); // تغيير اسم المتغير ليكون أكثر وضوحًا
  const [loading, setLoading] = useState(true); // لإظهار حالة التحميل
  const [error, setError] = useState(null); // للتعامل مع الأخطاء

  // قراءة التوكن من الكوكيز



  const token = Cookies.get('token') ? JSON.parse(Cookies.get('token')) : null;

  console.log(token)

  const fetchData = async () => {

    try {

      let test = await fetch("http://mohammed199911.byethost22.com/?i=1/api/admin/class/index", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = await test.json();
      console.log(data)

      console.log('done');
      setTest(data)
      setLoading(false); // إنهاء حالة التحميل

    } catch {
      console.log('error');

      setError("لا يوجد بينات")
      setLoading(false); // إنهاء حالة التحميل
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

    let del = await fetch(`http://localhost:8000/api/admin/class/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })



    if (del.ok) {
      toast.success('تم حذف السيشن');
      setTest(test.filter(item => item.id !== id));

    } else {

      toast.error('لم يتم حذف السيشن');
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
            <TableHead>الاسم</TableHead>
            <TableHead>الهدف</TableHead>
            <TableHead>عدد الحصص</TableHead>
            <TableHead>المكان</TableHead>
            <TableHead>الوقت</TableHead>
            <TableHead>تاريخ البداء</TableHead>
            <TableHead>تاريخ الانتهاء</TableHead>
            <TableHead>سعر الاشتراك</TableHead>
            <TableHead>عدد المشتركين</TableHead>
            <TableHead>حذف</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {test.map((item, index) => (
            <TableRow key={index}>

              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.className}</TableCell>
              <TableCell>{item.target}</TableCell>
              <TableCell>{item.numberClass}</TableCell>
              <TableCell>{item.location}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.startDate}</TableCell>
              <TableCell>{item.endDate}</TableCell>
              <TableCell>{item.subscriptionPrice}</TableCell>
              <TableCell>{item.subscribersCount}</TableCell>
              <TableCell>
                <Toaster richColors />
                <ButtonDelete fun={() => Delete(item.id)} /></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
