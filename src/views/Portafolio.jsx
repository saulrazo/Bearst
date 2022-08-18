import React from "react";
import Layaout from "../components/Layout";
import MBmodels from"../assets/img/mbmodels.webp"
import Mambru from"../assets/img/mambru.webp"
import { Helmet } from "react-helmet";
function Portafolio(){
    return(
        <Layaout>
          <Helmet>
            <title>Bearst.com.mx: Portafolio | Optimiza tu sitio web</title>
            <meta name="description" content="
            Crea tu propia página web optimizada con Bearst.
            Ve como nuestros clientes lo han aprovechado.
            " />
            <meta name="keywords" content="Website, Página Web, Wix, Desarallo Web, Portafolio Web,Optimización Web" />
            <link rel="canonical" href="https://bearst.com.mx/portafolio" />
          </Helmet>
      <div id="cont">
        <h2>Portafolio</h2>
          <div  class="pag" >
            <div  id="pag"onclick="window.open('https://mambrumusic.com/')">
              <img src={Mambru} width="100%" alt="" />

              
              <h3>Mambrú</h3>
              <p>Haz conocer tu música como estos artistas</p>
              <a href="https://mambrumusic.com" target="_blank">Visitar</a>
            </div>
            <div id="pag" onclick="window.open('https://agenciademodelosyedecanes.com.mx/')">
              <img src={MBmodels} width="100%" alt="" />

              <h3>MbModels</h3>
              <p>Haz conocer tu empresa como esta empresa de modelaje</p>
              <a href="https://agenciademodelosyedecanes.com.mx/" target="_blank">Visitar</a>
            </div>
          </div>
      </div>
        </Layaout>

    )
}
export default Portafolio;