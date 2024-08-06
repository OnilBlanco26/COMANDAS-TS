
import { Chip } from "@nextui-org/react";
import { AccordionT } from "./components/AccordionT";
import { categorias, meseras } from "./data/db";
import useOrder from "./hooks/useOrder";
import { Meseras } from "./components/Meseras";


function App() {

  const {addItem, meseraT, setMeseraT} = useOrder()

  
  return (
    <div className="dark text-foreground bg-background w-full h-full">
      <header className="w-full text-center bg-primary p-4 font-bold text-5xl py-5">
        <h1>SISTEMA DE COMANDAS</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 bg-neutral-900">
        <div>
      
        <Chip className="text-3xl uppercase p-4 mb-5" color="primary" variant="shadow">Menu</Chip>
        <div className="flex flex-wrap justify-center gap-2 mb-5">
        {
          meseras.map(mesera => (
            <Meseras key={mesera.id} mesera={mesera} setMeseraT={setMeseraT} />
          ))
        }
        </div>
        <p>Mesera Seleccionada: {meseraT.name}</p>
         {
          categorias.map(category => (
            <AccordionT key={category.id} category={category} addItem={addItem}/>
          ))
         }
         
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default App;
 