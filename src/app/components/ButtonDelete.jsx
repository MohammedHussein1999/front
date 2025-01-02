import { Button } from '@/components/ui/button'


export default function ButtonDelete({ fun }) {
  return (
    <Button onClick={fun} className="bg-red-600 text-white">Delete</Button>
  )
}
