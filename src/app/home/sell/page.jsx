import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export default function Page() {
  return (
    <>
      <Tabs className=" flex flex-col gap-3 min-h-screen justify-between">

        <div className=" space-y-5 grid grid-rows-3">
          <TabsContent value="1">

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>اسم السيشن</CardTitle>
                  <CardDescription>وصف</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>ج.م : 200</p>
                </CardContent>
                <CardFooter>
                  <p>عدد السيشنات : 2</p>
                </CardFooter>
              </Card>

            </div>
          </TabsContent>
          <TabsContent value="2">

            <div>
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
          </TabsContent>
          <TabsContent value="3">

            <div>
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
          </TabsContent>



        </div>

        <TabsList>
          <TabsTrigger value="1">1</TabsTrigger>
          <TabsTrigger value="2">2</TabsTrigger>
          <TabsTrigger value="3">3</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
}