import { cookies } from "next/headers";


export default async function apiGet() {
    const cook = cookies();
    const token = cook.get('token')?.value;
  try {
    const response = await fetch('http://localhost:8000/api/admin/class/index',  {
       Authorization: `Bearer ${token}`,
       "Content-Type": "application/json",
     })
 
    const data = await response.json(); // استخراج البيانات كـ JSON
    console.log("data api", data)
    return data; // إرجاع البيانات
  } catch (error) {
    console.log("error api",error)
    
  }
}
