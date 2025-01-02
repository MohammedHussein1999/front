"use client"

import Cookies from "js-cookie";


export const classes = async () => {
  let test = await fetch("http://127.0.0.1:8000/api/admin/class/index", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let data = await test.json();
  return data;
}

export const Users = async () => {


  const data = Cookies.get('token');
  const token = JSON.parse(data)

 
  let test = await fetch("http://localhost:8000/api/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (test.ok) {

    let data = await test.json();
    console.log(data)
    if (!data) {
      console.error("Token not found");
    }
    Cookies.set("user",JSON.stringify( data.user))

    return data.user;
  }


}
export const User = async () => {


  const data = Cookies.get('token');
  const token = JSON.parse(data)

 
  let test = await fetch("http://localhost:8000/api/show", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (test.ok) {

    let data = await test.json();
    if (!data) {
      console.error("Token not found");
    }
    Cookies.set("user",JSON.stringify( data.user))

    return data.user;
  }


}
