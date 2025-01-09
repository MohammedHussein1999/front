"use client"
import { Button } from '@/components/ui/button'



import { toast, Toaster } from 'sonner'

export default function Cod({ cod }) {
  // const [clipboardText, setClipboardText] = useState("");

  function handel() {
    navigator.clipboard.writeText(cod)

  };

  return (
    <div>
      <Toaster richColors />
      <Button class="text-white p-3 rounded-lg m-2" onClick={() => { toast.success('تم نسخ النص'), handel(cod) }}>
        {cod}
      </Button>
    </div>



  )
}
