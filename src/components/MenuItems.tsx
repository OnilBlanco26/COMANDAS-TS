import { MenuItem } from "../types"



export type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

export const MenuItems = ({item, addItem} : MenuItemProps) => {
  return (
    <button onClick={() => addItem(item)} className="border-primary border-1 rounded-md font-black text-primary hover:text-black hover:border-[#C20E4D] hover:bg-[#C20E4D] p-2">
        <p>
          {item.Nombre}
        </p>
       
    </button>
  )
}
