import aire from "@/images/0001.png"
import hel from "@/images/0002.png"
import free from "@/images/0003.png"
import lavSec from "@/images/0004.png"
import camFri from "@/images/0005.png"
import man from "@/images/mantenimiento1.jpg"

import "@/css/HomePage.css"

import Image from "next/image"
import Card from "@/components/Card"

export default function HomePage() {
  return (
    <div>
      <div className="main">
        <div className="item2">
          <h1>Servicio Técnico Profesional</h1>
          <br />
          <p>Ofrecemos servicio técnico profesional de cámaras frigoríficas, heladeras domésticas y comerciales, aires acondicionados, lavarropas y secarropas. Trabajamos con todas las marcas. Nuestro trabajo cuenta con garantía, no dudes en llamarnos.</p>
        </div>
        <div className="item3"><Image src={man} alt="imagen" /></div>
      </div>

      <div className="servicios item4" id="servicios">
        <Card
          imagen={aire}
          titulo="Aires Acondicionados"
          mensaje="Ofrecemos servicios especializados en instalación, reparación y mantenimiento de aires acondicionados. Nuestros técnicos altamente capacitados pueden diagnosticar y solucionar un a amplia gama de problemas, desde falta de enfriamiento hasta fugas de refrigerante."
        />
        <Card
          imagen={free}
          titulo="freezers"
          mensaje="Ofrecemos soluciones completas para la reparación y mantenimiento de freezers. Desde problemas con la temperatura hasta fallas en el sistema de descongelación, nuestros técnicos pueden diagnosticar y reparar eficientemente."
        />
        <Card
          imagen={hel}
          titulo="Heladeras"
          mensaje="Nuestros expertos en refrigeración se especializan en la reparación y mantenimiento de heladeras y exhibidores. Ya sea una fuga de refrigerante, un compresor defectuoso o problemas con el sistema de descongelación, podemos solucionarlo."
        />
        <Card
          imagen={camFri}
          titulo="Cámaras Frigoríficas"
          mensaje="Brindamos servicios especializados para la reparación y mantenimiento de cámaras frigoríficas. Nuestros técnicos tienen experiencia en resolver problemas como la falta de enfriamiento, fallos en los sensores y problemas con las puertas."
        />
        <Card
          imagen={lavSec}
          titulo="Lavarropas / Secarropas"
          mensaje="Contamos con servicios integrales para la reparación y mantenimiento de lavarropas y secarropas. Desde problemas con el tambor hasta fallas en los controles electrónicos, estamos aquí para ayudarte a que tus electrodomésticos funcionen como nuevos."
        />
      </div>
    </div>
  )
}
