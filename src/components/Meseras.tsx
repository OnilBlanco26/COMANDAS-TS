import { Avatar } from '@nextui-org/react'
import { CategoryItem } from '../types'

type MeseraProps = {
    mesera: CategoryItem
    setMeseraT: (mesera : CategoryItem) => void
}


export const Meseras = ({mesera,setMeseraT}: MeseraProps) => {
  return (
    <button onClick={() => setMeseraT(mesera)} className="flex gap-4 items-center hover:border-primary hover:border-3 hover:rounded-[50%]">
    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large" />
    <p>{mesera.name}</p>
  </button>
  )
}
