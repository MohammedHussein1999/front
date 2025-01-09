import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";


export default function Class() {
  return (
    <Table>

      <TableHeader>
        <TableRow>
          <TableHead>اسم السيشن</TableHead>
          <TableHead>الهدف</TableHead>
          <TableHead>عدد الحصص</TableHead>
          <TableHead >موعد السشن</TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  )
}
