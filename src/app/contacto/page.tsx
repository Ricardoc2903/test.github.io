import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function App() {
  const variants = ["flat", "bordered", "underlined", "faded"];

  return (
    <div className="flex flex-col items-center mt-10">
      <div className=" w-1/2 rounded-lg h-96 flex flex-col items-center">
        <h1 className="font-bold text-2xl">Contactanos</h1>
        <form action="">
          <div className="flex w-80 flex-col px-2 sm:px-0 flex-wrap md:flex-nowrap gap-10">
            <Input type="name" variant={"underlined"} color="primary" required label="Nombre" />
            <Input type="number" variant={"underlined"} color="primary" required label="Teléfono" />
            <Input type="email" variant={"underlined"} color="primary" required label="Email" />
            <Input type="message" variant={"underlined"} color="primary" required label="Mensaje" />
          </div>
          <div className="flex flex-col px-2 sm:px-0 sm:flex-row justify-center mt-5 gap-5">
            <Button className=" w-full sm:w-1/2" color="primary" variant="shadow">
              Enviar
            </Button>
            <Button className=" w-full sm:w-1/2" color="primary" variant="ghost">
              Borrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

