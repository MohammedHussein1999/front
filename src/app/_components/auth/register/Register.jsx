'use client'
import InputRegister from '../../InputRegister'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';



export default function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phon, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [cod, setCod] = useState("");
   
    async function send(e) {
        e.preventDefault();
        try {
            let res = await axios.post("http://127.0.0.1:8000/api/create",
                {

                    name: name,
                    password: password,
                    email: email,
                    phone: phon,
                    location: location,
                    cod: cod,
                },
            );
            if (res) {


                window.location.href = '/home'
            }

         
            Cookies.set('token', JSON.stringify(res.data.token1))
            Cookies.set('user', JSON.stringify(res.data.user))
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <div className="max-w-md mt-20 m-auto gap-4 p-5 flex justify-center items-center flex-col">

                <Form   >
                    <InputRegister fun={(e) => setName(e.target.value)} value={name} type='text' placeholder={'الاسم الكامل'} name="name" />
                    <InputRegister fun={(e) => setPassword(e.target.value)} value={password} type="password" placeholder={"كلمة المرور"} name="password" />
                    <InputRegister fun={(e) => setEmail(e.target.value)} value={password} type="email" placeholder={"كلمة المرور"} name="email" />
                    <InputRegister fun={(e) => setPhone(e.target.value)} value={phon} type="tel" placeholder={"رقم الهاتف"} name="phone" />
                    <InputRegister fun={(e) => setLocation(e.target.value)} value={location} type="text" placeholder={"العنوان"} name="location" />
                    <InputRegister fun={(e) => setCod(e.target.value)} value={cod} type="text" placeholder={"كود الدعوة"} name="cod" />
                    <Button onClick={send} type="submit" className="font-bold text-lg w-full" >submit</Button>
                </Form>
            </div>
        </>
    )
}
