"use client"
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import InputRegister from '../../InputRegister'
import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

export default function LogIn() {



    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    async function log(e) {
        e.preventDefault();

        console.log(phone, password);

        try {
            const response = await axios.post("http://localhost:8000/api/login", {
                name: phone,
                password: password
            })

            Cookies.set('token', JSON.stringify(response.data.token))
            Cookies.set('user', JSON.stringify(response.data.user))
           

            if (!response.ok) {


                window.location.href = '/auth/login'
            }

            window.location.href = '/home'

        } catch (error) {
            console.log(error);

        }

    }

    return (
        <>
            <div className="max-w-md mt-20 m-auto gap-4 p-5 flex justify-center items-center flex-col">

                <Form action="/home">
                    <InputRegister type='text' name="name" value={phone} fun={(e) => setPhone(e.target.value)} placeholder={"رقم الهاتف"} />
                    <InputRegister type='password' name="password" value={password} fun={(e) => setPassword(e.target.value)} placeholder={"كلمة المرور"} />
                    <Button onClick={log} className="font-bold w-full">تسجيل الدخول</Button>
                </Form>
            </div>
        </>
    )
}
