import axios from "axios";
import Cookies from "js-cookie";
import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");


  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }



  try {

    let token = axios.get('http://127.0.0.1:8000/api/show', {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`
      }
    })
    token === Cookies.get('token') ? '/home' : "/";
  } catch (error) {
    

  }

  // السماح بالوصول إذا كان المستخدم مسجلاً دخوله
  return NextResponse.next();
}

// تحديد المسارات المحمية
export const config = {
  matcher: ["/home", "/home/:path*"], // المسارات المحمية
};
