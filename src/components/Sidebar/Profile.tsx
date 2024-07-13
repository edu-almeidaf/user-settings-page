import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/edu-almeidaf.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Eduardo de Almeida Fernandes
        </span>
        <span className="truncate text-sm text-zinc-500">
          eduardoa.fernandes@hotmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="size-5 text-zinc-500" />
      </Button>
    </div>
  )
}
