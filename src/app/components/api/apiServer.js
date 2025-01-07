import { cookies } from "next/headers";




export const classes = async () => {
    let test = await fetch("http://127.0.0.1:8000/api/admin/class/index", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    let data = await test.json();
    return data;
}

export const users = async () => {
    const cook = cookies();

    const data = cook.get('token')?.value
    const token = JSON.parse(data)

    console.log("users", token)
    let test = await fetch("http://localhost:8000/api/", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log('users');
    if (test.ok) {

        let data = await test.json();
        if (!data) {
            console.error("Token not found");
        }
        console.log("users api", data)

    }


}
export const user = async () => {
    const cook = cookies();

    const data = cook.get('token')?.value
    const token = JSON.parse(data)

    console.log("auth", token)
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
        console.log('done');
        console.log("auth api", data)
        // cook.set('user2', JSON.stringify(test));
    }


}
