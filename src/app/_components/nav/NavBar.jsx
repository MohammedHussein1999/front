'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AdminButton from '../admin/AdminButton';
import Cookies from 'js-cookie';
import { MdOutlineShoppingCart } from 'react-icons/md';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function NavBar() {
  const path = usePathname();

  // تحقق مما إذا كانت الروابط الخاصة بالتسجيل مطلوبة
  const isHomePage = path.startsWith('/home');
  const isAuthPage = path.startsWith('/auth') || path === '/';

  let adminShow = false;

  // الحصول على المستخدم من الكوكيز والتحقق من صلاحية البيانات
  const user = Cookies.get('user');
  if (user && user !== 'undefined') {
    const data = JSON.parse(user);
    if (data.roles && data.roles.length > 0) {
      adminShow = data.roles[0].roles === 'admin';
    }
  } else {
    // إذا كانت البيانات غير موجودة أو غير صالحة، إزالة الكوكيز
    Cookies.remove('user');
    Cookies.remove('token');
  }

  return (
    <div className="flex flex-row border-b w-full  border-seconder">
      <NavigationMenu className="p-8 !max-w-none bg-seconder items-center h-20 flex gap-10 justify-end text-white">
        <NavigationMenuList>

          {/* روابط الصفحة الرئيسية */}
          {isHomePage && (
            <>
              <TooltipProvider>
                <Tooltip>
                  <NavigationMenuLink href='/home/sell'>

                    <TooltipTrigger className='relative mx-3 cursor-pointer text-3xl'>
                      <span className=' rounded-full bg-red-600 text-white p-1 text-xs absolute'>3</span>
                      <MdOutlineShoppingCart />
                    </TooltipTrigger>
                  </NavigationMenuLink>
                  <TooltipContent className=" mt-5 border-b  scrollbar-hidden shadow-md border-black  max-h-96">
                    <ScrollArea align='end' className="w-60  p-1 h-[400px] flex gap-5   scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thin">

                      <div className="my-2">
                        <Card >
                          <CardHeader>
                            <CardTitle>اسم السيشن</CardTitle>
                            <CardDescription>وصف</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p>ج.م : 200</p>
                          </CardContent>
                          <CardFooter className="text-right w-full" >
                            <p  >عدد السيشنات : 2</p>
                          </CardFooter>
                        </Card>

                      </div>

                      <div className="my-2">
                        <Card>
                          <CardHeader>
                            <CardTitle>اسم السيشن</CardTitle>
                            <CardDescription>وصف</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p>ج.م : 600</p>
                          </CardContent>
                          <CardFooter>
                            <p>عدد السيشنات : 5</p>
                          </CardFooter>
                        </Card>

                      </div>

                      <div className="my-2">
                        <Card>
                          <CardHeader>
                            <CardTitle>اسم السيشن</CardTitle>
                            <CardDescription>وصف</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p>ج.م : 1000</p>
                          </CardContent>
                          <CardFooter>
                            <p>عدد السيشنات : 10</p>
                          </CardFooter>
                        </Card>

                      </div>

                    </ScrollArea>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <NavigationMenuLink href='/home' className='data-[active]:text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 transition p-2 rounded-lg bg-min w-32 text-center'>
                الصفحة الرئيسية
              </NavigationMenuLink>
              <NavigationMenuLink href='/home/offers' className='data-[active]:text-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 transition p-2 rounded-lg bg-min w-32 text-center'>
                سيشن
              </NavigationMenuLink>
              <NavigationMenuLink href='/home/product' className='data-[active]:bg-black ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 transition p-2 rounded-lg bg-min w-32 text-center'>
                المنتجات
              </NavigationMenuLink>

              <div className="avater">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent dir="rtl" className="select-none w-40 text-center text-lg font-semibold">
                    <DropdownMenuLabel>اعدادات الحساب</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href='/home/pageProfile'>
                      <DropdownMenuItem className="cursor-pointer">البروفيل</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem className="cursor-pointer">المحفظة</DropdownMenuItem>
                  </DropdownMenuContent>
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

        </NavigationMenuList>

        {/* عرض زر المسؤول إذا كان المستخدم من نوع "admin" */}
        {adminShow && (
          <div className="text-right">
            <AdminButton />
          </div>
        )}
      </NavigationMenu>

      <img src="/images/logo.png" className="w-20 h-full p-3 bg-white border rounded-md text-left border-white" alt="Logo" />
    </div>
  );
}
