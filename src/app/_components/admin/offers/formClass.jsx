"use client"
import { Form } from "@/components/ui/form";
import InputRegister from "../../InputRegister";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Cookies from "js-cookie";
import axios from "axios";

export default function FormClass() {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("")
    const [tach, setTach] = useState("")
    const [time, setTime] = useState("")
    const [target, setTarget] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [days, setDays] = useState("")
    const [discretion, setDiscretion] = useState("")


    async function send() {
        let token = JSON.parse(Cookies.get('token'));
     

        try {
            let res = await axios.post("http://mohammed199911.byethost22.com/api/admin/class/create",
                {

                    className: name,
                    tethName: tach,
                    time: time,
                    target: target,
                    startDate: startDate,
                    endDate: endDate,
                    numberClass: days,
                    discretion: discretion,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            // window.location.reload();
        

        } catch (error) {
            console.log("error front", error)
        }
        setOpen(false);
        
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='bg-green-500 w-60 text-white p-3 m-2 rounded-lg text-xl font-bold'>+ New Class </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center">بينات السيشن</DialogTitle>
                    <DialogDescription className="p-5 flex flex-col gap-5">
                        <Form className=" ">
                            <InputRegister value={name} fun={(e) => setName(e.target.value)} placeholder="ادخل اسم السيشن" type="text" name="className" />
                            <InputRegister value={tach} fun={(e) => setTach(e.target.value)} placeholder="ادخل اسم المدرب" type="text" name="tethName" />
                            <InputRegister value={time} fun={(e) => setTime(e.target.value)} placeholder="وقت بداء السشين" type="time" name="time" />
                            <InputRegister value={target} fun={(e) => setTarget(e.target.value)} placeholder="الهدف من السيشن" type="text" name="target" />
                            <InputRegister value={startDate} fun={(e) => setStartDate(e.target.value)} placeholder="تاريخ بداء السيشن" type="date" name="startDate" />
                            <InputRegister value={endDate} fun={(e) => setEndDate(e.target.value)} placeholder="تاريخ امنهاء السيشن" type="date" name="endDate" />
                            <InputRegister value={days} fun={(e) => setDays(e.target.value)} placeholder="عدد السيشنات" type="number" name="numberClass" />
                            <InputRegister value={discretion} fun={(e) => setDiscretion(e.target.value)} placeholder=" وصف" type="text" name="discretion" />
                            <Button onClick={send} className="w-full font-bold p-2 ">تسجيل السيشن</Button>
                        </Form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
