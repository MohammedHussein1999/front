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
    const [title, setTitle] = useState("");
    const [discretion, setDiscretion] = useState("")
    const [cost, setCost] = useState("")

    async function send() {
        let token = JSON.parse(Cookies.get('token'));


        try {
            let res = await axios.post("http://mohammed199911.byethost22.com/api/admin/product/create",
                {

                    title: title,
                    cost: cost,
                    discretion: discretion,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            window.location.reload();
            console.log(res);

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
                            <InputRegister value={title} fun={(e) => setTitle(e.target.value)} placeholder="ادخل اسم السيشن" type="text" name="title" />
                            <InputRegister value={discretion} fun={(e) => setDiscretion(e.target.value)} placeholder="ادخل اسم المدرب" type="text" name="discretion" />
                            <InputRegister value={cost} fun={(e) => setCost(e.target.value)} placeholder="وقت بداء السشين" type="number" name="cost" />

                            <Button onClick={send} className="w-full font-bold p-2 ">تسجيل السيشن</Button>
                        </Form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
