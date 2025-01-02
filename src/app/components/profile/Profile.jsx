import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import User from "./user/user";
import Class from "./user/Class";




export default function Profile() {


 
  return (
    <div className=" ">
      <Tabs defaultValue="profile" className="  flex flex-col justify-start min-h-screen w-full">
        <TabsList className=" flex-row m-2 flex w-full items-center justify-center   h-max gap-6">

          <TabsTrigger value="class" className="font-semibold p-2  text-min data-[state=active]:bg-main data-[state=active]:text-white rounded-lg shadow-md text-xl">
            تفاصيل الفصول
          </TabsTrigger>
          <TabsTrigger value="profile" className="font-semibold  data-[state=active]:bg-main data-[state=active]:text-white p-2 flex  text-min rounded-lg shadow-md text-xl ">
            الملف الشصخي
          </TabsTrigger>
        </TabsList>
        <AspectRatio className=" p-5 bg-slate-300 h-max" ratio={16 / 9}>
          <TabsContent value="profile"><User /></TabsContent>
          <TabsContent value="class"><Class /></TabsContent>
        </AspectRatio>
      </Tabs>
    </div>
  )
}
