import React from "react";
import { Layout } from "../components/";
import celebrate from"../assets/img/webp/logo3.webp"
import {MdWebAsset} from"react-icons/md"
import {HiDesktopComputer} from"react-icons/hi"
import {BsGoogle,BsArrowRight} from "react-icons/bs"
import { Helmet } from "react-helmet";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";
import Mambru from"../assets/img/mambru.webp"
import MambruPhone from "../assets/img/webp/mambruPhone.webp"
import Laptop from "../assets/img/webp/laptopFinal2.webp"
import { useEffect } from "react";
function Home(){

    return(
        <Layout>
          <Helmet>
            <link rel="canonical" href="https://bearst.com.mx/" />
          </Helmet>
        <div id="Mn">
        <div>
          <h1 style={{
            textAlign:"center"
          }}>Bienvenido a <p id="beName">Bearst</p></h1>
            <p>Somos una empresa enfocada al desarollo web, nos encanta ver las cosas funcionar asi que no dudes en contactarnos.</p>
        </div>
          <img src={celebrate} width="100%" alt="" />
        </div>


        <div className="SE" id="ser">
        <h2>Servicio</h2>
        <div className="services">
          <div id="SD" style={{
          cursor:"pointer"
        }} 
        onClick={()=>{
          window.open("/prices","_self")
        }}
        className="WD">
          <MdWebAsset size={80} style={{
                backgroundColor:"#e6edff",
                color:"#0047cc",
                padding:"12px",
                borderRadius:"0.5rem"
            }}/>
            <br />
            <br />
            <h3>Web Desing</h3>
            <p>Crea un sitio web asombroso</p>
          </div>
          <div id="SD" className="GA"
          style={{
            opacity:"40%",
            cursor:"not-allowed"
          }}
          >
            <BsGoogle size={80} style={{
                backgroundColor:"#e6edff",
                color:"#0047cc",
                padding:"12px",
                borderRadius:"0.5rem"
            }}/>
            <br />
            <br />
            <h3>Google Ads</h3>
            <p>Haz conocer tu empresa con nuestros servicios de google Ads</p>
          </div>
          <div id="SD" 
          style={{
            opacity:"40%",
            cursor:"not-allowed"
          }}>
      
           <HiDesktopComputer size={80} style={{
                backgroundColor:"#e6edff",
                color:"#0047cc",
                padding:"12px",
                borderRadius:"0.5rem"
            }}/>
            <br />
            <br />
            <h3>Crea tu PC</h3>
            <p>Servicio de armado personalizado de pc</p>
          </div>
        </div>
      </div>


      <div className="MainFInfo">
      <div className="FInfo">
      <svg viewBox="0 0 14 26" version="1.1" className="dots" >
        <circle cx="1" cy="5" r="1" className="C1" />
        <circle cx="1" cy="10" r="1" className="C2" />
        <circle cx="1" cy="15" r="1" className="C3" />
        <circle cx="1" cy="20" r="1" className="C4" />
        <circle cx="1" cy="25" r="1" className="C5" />

        <circle cx="5" cy="5" r="1" className="C1" />
        <circle cx="5" cy="10" r="1" className="C2" />
        <circle cx="5" cy="15" r="1" className="C3" />
        <circle cx="5" cy="20" r="1" className="C4" />
        <circle cx="5" cy="25" r="1" className="C5" />


        <circle cx="9" cy="5" r="1" className="C1" />
        <circle cx="9" cy="10" r="1" className="C2" />
        <circle cx="9" cy="15" r="1" className="C3" />
        <circle cx="9" cy="20" r="1" className="C4" />
        <circle cx="9" cy="25" r="1" className="C5" />

        <circle cx="13" cy="5" r="1" className="C1" />
        <circle cx="13" cy="10" r="1" className="C2" />
        <circle cx="13" cy="15" r="1" className="C3" />
        <circle cx="13" cy="20" r="1" className="C4" />
        <circle cx="13" cy="25" r="1" className="C5" />
      </svg>


            <img loading="lazy" src={MambruPhone} className="MambruImg1" alt="" />
        <div>
            <h2 style={{
              fontWeight:"bold",
              borderBottom:"2px solid white",
              textAlign:"left"
            }} >Crea tu propia web profesional.</h2>
            <p style={{
              textAlign:"justify"
            }}>
              Ofrecemos un servicio completo de diseño web, desarrollo web, tiendas online y posicionamiento SEO. 
              <br />
              Nuestro equipo de diseñadores y desarrolladores con una vasta experiencia en la creación de páginas web, darán todo para impulsar tu negocio.
              <br />
              Nos caracteriza el diseño de páginas web totalmente personalizadas, resaltando cada uno de los
              elementos que hacen única a tu marca o
              negocio.
            </p>
        </div>

        <div>

        </div>                
            <img loading="lazy" src={Mambru} className="MambruImg2" alt="" />
      </div>
      <div className="FInfo2">
        <div>
          <h2 style={{
              fontWeight:"bold",
              borderBottom:"2px solid white",
              textAlign:"left",
            }} >Solo unos segundos para impresionar.</h2>             
            <p style={{
              textAlign:"justify"
            }}>
              El usuario promedio tarda tan solo <strong>4 segundos</strong> en decidir si se queda en tu sitio o no. El profesionalismo debe reflejarse, con una carga veloz, un contenido de calidad y perfección hasta en mínimos detalles.
            <br />
            <span style={{
              opacity:"50%"
            }}>
            No des una mala imagen con un sitio web que no refleje la calidad de tus servicios.
            </span>
            </p>
            <a href="/prices" className="FInfo2SerBtn">Servicios <BsArrowRight size={15} /> </a>
        </div>   
        <img loading="lazy" className="LpImg" src={Laptop} alt=""  />
        <svg viewBox="0 0 13 10" version="1.1" className="dots2" >
        <circle cx="7" cy="5" r="5" className="C2-1" />
        <circle cx="7" cy="5" r="4" className="C2-2" />
        <circle cx="7" cy="5" r="3" className="C2-3" />
        <circle cx="7" cy="5" r="2" className="C2-4" />
        <circle cx="7" cy="5" r="1" className="C2-5" />
      </svg>
      </div>
      
      <div className="FInfo3">   
      <h2 style={{
              fontWeight:"bold",
              borderBottom:"2px solid white",
              textAlign:"left",
              height:"80%"
            }} >La mejor herramienta para posicionar tu marca.</h2>             
            <p style={{
              textAlign:"justify"
            }}>
              La clave del éxito en línea es una página web, aumenta la credibilidad de tu negocio.
              <br />
              Servicio web profesional. Si estás pensando aventurarte en línea o buscas rediseñar tu sitio, nuestro equipo te apoyará en todo el proceso garantizando una imagen profesional y de gran impacto visual.
            </p>
      </div>
      </div>
        </Layout>

    )
}
export default Home;