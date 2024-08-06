import { Avatar, Button } from "@nextui-org/react";
import { CategoryItem } from "../types";

type MeseraProps = {
  mesera: CategoryItem;
  setMeseraT: (mesera: CategoryItem) => void;
};

export const Meseras = ({ mesera, setMeseraT }: MeseraProps) => {
  return (
    <Button
      color="primary"
      variant="ghost"
      onClick={() => setMeseraT(mesera)}
      className="h-32 flex flex-col gap-1 items-center"
    >
      <Avatar
        isBordered
        color="primary"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        className="w-[80%] h-[80%] text-large"
      />
      <p>{mesera.name}</p>
    </Button>
  );
};
