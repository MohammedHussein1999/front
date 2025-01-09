import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer'
import { Link } from '@radix-ui/react-navigation-menu'



export default function AdminButton() {
  return (
    <Drawer direction="right" >
      <DrawerTrigger className=' border-slate-100 border p-3 rounded-lg w-32 hover:bg-gray-800'>Admin</DrawerTrigger>
      <DrawerContent className=" bg-seconder max-w-60 h-screen">
        <DrawerHeader className=''>
          <div className=' w-full text-white  flex flex-col text-right text-xl font-bold '>
            <Link href="" className="delay-150 p-3 hover:bg-zinc-700 rounded-md hover:text-min   " >العروض</Link>
            <Link href="/home/admin/productAdmin" className="delay-150 p-3 hover:bg-zinc-700 rounded-md hover:text-min   " >المنتجات</Link>
            <Link href="/home/admin/usersAdmin" className="delay-150 p-3 hover:bg-zinc-700 rounded-md hover:text-min   " >المستخدمين</Link>
            <Link href="/home/admin/offersAdmin" className="delay-150 p-3 hover:bg-zinc-700 rounded-md hover:text-min   " >السيشن</Link>

          </div>
        </DrawerHeader>
        <DrawerFooter>


          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  )
}
