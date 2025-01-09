
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { cookies } from "next/headers";

import Cod from "./Cod";







export default async function User() {



  let cook = await cookies();
  let data = cook.get('user');
  let user = JSON.parse(data.value);



  return (
    <div className="w-full">
      <div className=" w-full flex flex-col justify-center items-center">


        <Avatar className=" ]">
          <AvatarImage className=" border-2 border-slate-500 w-16 rounded-full" src="https://github.com/shadcn.png" />
        </Avatar>
        <span className=" p-3 font-bold text-xl">

          {user.name}
        </span>
        <Cod cod={user.cod.cod} />
      </div>
      <hr />
      <div>
        <form className=" text-center" action="">
          <div className="flex p-5 justify-center flex-row gap-5" >

            <div className="flex flex-col gap-3">
              <label htmlFor="">
                <span className="  block text-lg font-semibold">الاسم</span>
                <input value={user.name} className=" rounded-md p-2" type="text" />
              </label>
              <label htmlFor="">
                <span className="  block text-lg font-semibold">رقم الهاتف</span>
                <input value={user.phone} className=" rounded-md p-2" type="text" />
              </label>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="">
                <span className="  block text-lg font-semibold"> العنوان</span>
                <input value={user.location} className=" rounded-md p-2" type="text" />
              </label>
              <label htmlFor="">
                <span className="  block text-lg font-semibold"> البريد الالكتروني</span>
                <input value={user.email} className=" rounded-md p-2" type="text" />
              </label>
            </div>
          </div>
          <input className=" w-full text-xl rounded-md p-2 font-bold bg-blue-600 text-white" type="submit" value="تحديث" />
        </form>
      </div>
    </div>
  )
}
