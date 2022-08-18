import React from "react";
import Layaout from "../components/Layout";
import { Helmet } from "react-helmet";
import WhLogo from"../assets/img/webp/white_icon.webp"
import '../components/styles/Social.css'
import {AiOutlineWhatsApp} from"react-icons/ai"
import {BsFacebook,BsInstagram} from"react-icons/bs"
function Social(){
    return(
        <div>
            <Helmet>
            <title>Bearst.com.mx: Social | Social Network</title>
            <meta name="description" content="
            Crea tu propia página web optimizada con Bearst.
            Ve como nuestros clientes lo han aprovechado.
            " />
            <meta name="keywords" content="Website, Página Web, Wix, Desarallo Web, Portafolio Web,Optimización Web" />
            <link rel="canonical" href="https://bearst.com.mx/social" />
          </Helmet>
          <div>
            <div className="SocialIcon" style={{
                backgroundImage: `url("${WhLogo}")`,
            }}></div>
            <h1 style={{
                textAlign:"center"
            }}>@Bearst_mx</h1>
            <br />
            <div className="Social">
                <ul style={{
                    listStyle:"none"
                }}>
                    <li onClick={()=>{
                        window.open("https://bearst.com.mx")
                    }}>Visitar página web</li>
                    <li onClick={()=>{
                        window.open("https://www.behance.net/luisfemontes1")
                    }}>Portafolio online</li>
                    <li onClick={()=>{
                        window.open("https://wa.me/message/YVYOC67OGLJ3C1")
                    }}>Cotiza tu proyecto</li>
                </ul>
            </div>
            <div className="SocialSN">
                    <ul style={{
                        listStyle:"none",
                        display:"flex",
                        justifyContent:"space-evenly",
                        padding:"0"
                    }}>
                        <li><a href="https://fb.me/BearstMx "><BsFacebook size={30}/></a></li>
                        <li><a href="https://www.instagram.com/bearst_mx/"><BsInstagram size={30}/></a></li>
                        <li><a href="https://wa.me/message/YVYOC67OGLJ3C1"><AiOutlineWhatsApp size={30}/></a></li>
                    </ul>
            </div>

          </div>
        </div>
    )
}
export default Social;