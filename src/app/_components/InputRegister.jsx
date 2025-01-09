import { Input } from '@/components/ui/input'

export default function InputRegister({ type, value , placeholder, name, fun }) {
  return (
    <>
      <Input onChange={fun} value={value} type={type} placeholder={placeholder} name={name} className="font-medium" />
    </>
  )
}
