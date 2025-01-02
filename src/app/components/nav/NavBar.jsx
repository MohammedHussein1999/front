'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AdminButton from '../admin/AdminButton';
import Cookies from 'js-cookie';

import { useEffect, useState } from 'react';
import { User } from '../api/apiClient';




export default function NavBar({ }) {
  const path = usePathname();
  User()
 

  // تحقق مما إذا كانت الروابط الخاصة بالتسجيل مطلوبة
  const isHomePage = path.startsWith('/home');
  const isAuthPage = path.startsWith('/auth') || path === '/';


  let adminShow;
  const user = Cookies.get('user')
  if (user) {

    const data = JSON.parse(user)
    


    if (data.roles.length > 0) {

      adminShow = data.roles[0].roles === 'admin';
    }
  }

  return (
    <div className="w-full">
      <NavigationMenu className="min-w-full rtl:justify-evenly p-8 bg-seconder items-center h-20 flex justify-center text-white">
        <NavigationMenuList >
          <NavigationMenuItem className="font-bold w-full gap-8 flex px-3 justify-center items-center">
            {/* روابط الصفحة الرئيسية */}
            {isHomePage && (
              <>


                <NavigationMenuLink href='/home' className=' data-[active]:text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 transition p-2 rounded-lg bg-min w-32 text-center'>الصفحة الرئيسية</NavigationMenuLink>
                <NavigationMenuLink href='/home/product' className=' data-[active]:text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 transition p-2 rounded-lg bg-min w-32 text-center'>العروض</NavigationMenuLink>
                <NavigationMenuLink href='/home/class' className=' data-[active]:bg-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 transition p-2 rounded-lg bg-min w-32 text-center'>المنتجات</NavigationMenuLink>


                <div className="avater">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <DropdownMenuContent dir="rtl" className=" select-none w-40 text-center  text-lg font-semibold ">
                        <DropdownMenuLabel>اعدادات الحساب</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href='/home/pageProfile'> <DropdownMenuItem className="cursor-pointer">البروفيل</DropdownMenuItem></Link>
                        <DropdownMenuItem className="cursor-pointer">المحفظة</DropdownMenuItem>


                      </DropdownMenuContent>
                    </DropdownMenuTrigger>

                  </DropdownMenu>
                </div>


              </>
            )}

            {/* روابط تسجيل الدخول والتسجيل */}
            {isAuthPage && (
              <>
                <NavigationMenuLink
                  href="/auth/register"
                  className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 transition p-1 rounded-lg bg-min w-20 text-center"
                >
                  تسجيل
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/auth/login"
                  className="ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 transition p-1 rounded-lg bg-min min-w-20 text-center"
                >
                  تسجيل الدخول
                </NavigationMenuLink>
              </>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
        {adminShow && (
          <div className=" text-right">
            <AdminButton />
          </div>
        )}
      </NavigationMenu>
    </div>
  );
}
