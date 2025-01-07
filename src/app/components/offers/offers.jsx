'use client';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { DataList } from '@radix-ui/themes';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';



export default function Offers() {
  const [test, setTest] = useState([]); // تغيير اسم المتغير ليكون أكثر وضوحًا
  const [numberClass, setNumberClass] = useState(); // تغيير اسم المتغير ليكون أكثر وضوحًا


  const [error, setError] = useState(null); // للتعامل مع الأخطاء

  // قراءة التوكن من الكوكيز
  const token = JSON.parse(Cookies.get('token'));





  const fetchData = async () => {
    // let tt = await classes();
    // console.log("api class",tt)

    try {

      let test = await fetch("http://127.0.0.1:8000/api/admin/class/index", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = await test.json();



      setTest(data)



    } catch {
      console.log('error');

      setError("لا يوجد بينات")

    }


  };
  useEffect(() => {

    fetchData();

  }, []);


  function increment(el, id) {
    console.log("el", el);
    console.log("id", id);

    let target = test.find((e) => e.id === id);
    target.count = target.numberClass * el;
    console.log(target)


    setNumberClass(target.numberClass * el);


  }

  function handel(e) {
    console.log(e);
  }


  // عرض حالة التحميل أو الأخطاء

  return (
    <div className=' space-y-36  md:space-y-5  p-4 '>

      {test.map((e, index) => (
        <>
          <AspectRatio className='    p-4 h-min space-y-4 bg-slate-300  rounded-md ' key={index} ratio={16 / 8} >

            <h2 className='text-3xl font-semibold text-slate-500  text-center' >{e.className}</h2>
            <div className='flex  justify-between'>

              <DataList.Root>
                <DataList.Item className=' space-y-2 p-2'>
                  <DataList.Label>
                    اسم المدرب
                  </DataList.Label>
                  <DataList.Value>
                    {e.tethName}
                  </DataList.Value>
                  <DataList.Label>
                    هدف السيشن
                  </DataList.Label>
                  <DataList.Value>
                    {e.target}
                  </DataList.Value>
                  <DataList.Label>
                    تبداء من
                  </DataList.Label>
                  <DataList.Value>
                    {e.time}
                  </DataList.Value>
                  <DataList.Label>
                    يبدا السيشن من تاريخ
                  </DataList.Label>
                  <DataList.Value>
                    {e.startDate}
                  </DataList.Value>
                  <DataList.Label>
                    الي تاريخ
                  </DataList.Label>
                  <DataList.Value>
                    {e.endDate}
                  </DataList.Value>
                  <DataList.Label>

                    تكلفة السيشن

                  </DataList.Label>
                  <DataList.Value>
                    <span className=' text-blue-700 font-semibold'>ج.م </span>{e.count ?? e.numberClass}
                    {console.log("all", e)}
                  </DataList.Value>
                  <DataList.Label>

                    عدد  السيشن

                  </DataList.Label>
                  <DataList.Value>

                    <input type="number" onClick={(el) => increment(el.target.value, e.id)} name="" className='p-1 outline-none max-w-10 rounded-md border-none' id="" defaultValue="1" min="1" />
                  </DataList.Value>
                  <DataList.Label>
                    وصف  السيشن
                  </DataList.Label>
                  <DataList.Value>
                    {e.discretion}

                  </DataList.Value>
                </DataList.Item>
              </DataList.Root>
              <img src="/images/logo.png" className='w-60' />
            </div>
              <Button onClick={() => handel(e.id)} className="w-full ">استراك</Button>
          </AspectRatio>
        </>
      ))}
    </div>
  );
}
