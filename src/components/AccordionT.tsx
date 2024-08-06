import { Accordion, AccordionItem } from "@nextui-org/react";
import type { CategoryItem, MenuItem } from "../types";
import { menuItems } from "../data/db";
import { MenuItems } from "./MenuItems";

type CategoryProps = {
  category: CategoryItem;
  addItem: (item: MenuItem) => void;
};

export const AccordionT = ({ addItem, category }: CategoryProps) => {
  return (
    <>
      <Accordion className="flex justify-center" variant="splitted">
        <AccordionItem
          className="w-[80%] md:w-full"
          key="1"
          aria-label="Accordion 1"
          title={category.name}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-2">
            {menuItems.map((item) =>
              item.Categoria === category.name ? (
                <MenuItems key={item.id} item={item} addItem={addItem} />
              ) : null
            )}
          </div>
        </AccordionItem>
      </Accordion>
    </>
  );
};
