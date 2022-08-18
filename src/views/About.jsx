import React from "react";
import Layaout from "../components/Layout";
import useLocoScroll from "../hooks/useLocoScroll";
import img from "../assets/img/webp/white_icon.webp"
import S from "../assets/img/avatar/saul.svg"
import L from "../assets/img/avatar/luis.svg"
import "../components/styles/About.css"
import { Helmet } from "react-helmet";
import { useEffect } from "react";
function About(){
    useEffect(()=>{
        setTimeout(() => {
            document.getElementById("ContBtn").style.display="none"
            console.log(document.getElementById("ContBtn"))
        }, 1000);
      },[])



    useLocoScroll();
    return(
        <Layaout>
            <Helmet>
            <title>Bearst.com.mx: About Us | Marca la diferencia con un diseño web profesional</title>
            <meta name="description" content="
            Servicio completo de diseño web, desarrollo web, tiendas online y posicionamiento SEO.
            Crea tu propia página web optimizada con Bearst.
            " />
            <link rel="canonical" href="https://bearst.com.mx/About" />
            </Helmet>
            <div className="AboutContainer" data-scroll-container>
                <h1 className="AboutTitle" data-scroll data-scroll-speed="-4">¿Quienes somos?</h1>
                <br />
                <br />
                <section className="grid2">
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5"><img src={img} alt="" /></div>
                </section>

                <section className="grid3">
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><img src={img} alt="" /></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><h2>Bearst</h2></div>
                    <div className="ElG" data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5"><img src={img} alt="" /></div>
                </section>
                
                <section className="MainSec" >


                    <div className="GridSec">
                        <div data-scroll data-scroll-speed="8">
                            <h2>Misión</h2>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis, fugiat repellat laudantium eos sed tempora, numquam, quae molestias temporibus vitae natus praesentium? Placeat inventore delectus voluptates ipsam quos consectetur.</p>
                        </div>
                        <div data-scroll data-scroll-speed="9">
                            <h2>Visión</h2>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis, fugiat repellat laudantium eos sed tempora, numquam, quae molestias temporibus vitae natus praesentium? Placeat inventore delectus voluptates ipsam quos consectetur.</p>
                        </div>
                    </div>

   
                    {/* <div>
                        <h2 style={{
                            textAlign:"center"
                        }}>Nosotros</h2>
                        <div>
                            <h2>Saul</h2>
                            <img src={S} alt="" style={{
                                width:"200px"
                            }} />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, consequatur?</p>
                        </div>
                        <div>
                        <h2>Luis</h2>
                            <img src={L} alt="" style={{
                                width:"200px"
                            }} />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quam.</p> */}
                    <h2 className="FundaTitle" data-scroll data-scroll-speed="5">Cofundadores</h2>
                    <div className="Avatars" data-scroll data-scroll-speed="2">
                        <div className="AvatarSaul">
                            <div className="AvInfo">
                            <img className="Avatar" src={S} alt="" onClick={()=>{
                                window.open("https://linkedin.com/in//saul-razo-64324021b")
                            }}/>
                                <strong className="AvatarName">Saul</strong>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, cupiditate.</p>
                        </div>
                        <div className="AvatarLuis" data-scroll data-scroll-speed="3">
                            <div className="AvInfo">
                            <img className="Avatar" src={L} alt="" onClick={()=>{
                                window.open("https://linkedin.com/in/luisfer--")
                            }}/>
                                <strong className="AvatarName">Luis</strong>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, cupiditate.</p>
                        </div>
                    </div>
                    
                </section>
                <footer className="AboutFooter"  data-scroll data-scroll-speed="5" style={{
                    padding:"4vw",
                    backgroundColor:"#003459",
                    height:"75vh",
                    marginTop:"-40vh",
                    display:"grid",
                    gridTemplateColumns:"70vw auto"
                }}>
                    <div>            
                        <h2 style={{
                            fontWeight:"bold",
                            fontSize:"7vw"
                        }}>TRABAJEMOS JUNTOS</h2>
                        <a href="https://m.me/BearstMx" target="_blank" style={{
                            color:"white",
                            backgroundColor:"black",
                            textDecoration:"none",
                            padding:"0.5vw"
                        }}>Contactar</a>
                    </div>
                    <div style={{
                        color:"white"
                    }}>
                        <ul style={{
                            margin:"0",
                            padding:"0"
                        }}>
                            <li><a href="mailto:ceo@bearst.com.mx">CEO@bearst.com.mx</a></li>
                            <li><a href="tel:+7551382378">+52 1 755 138 2378</a></li>
                            <li><a href="tel:+7551382378">+52 1 33 2154 6865</a></li>
                        </ul>
                        <br />
                        <br />
                        <ul style={{
                            margin:"0",
                            padding:"0"
                        }}>
                            <li><a href="https://www.facebook.com/BearstMx" target="_blank">Facebook</a> </li>
                            <li><a href="https://www.instagram.com/bearst_mx" target="_blank">Instagram</a></li>
                        </ul>
                        <p>© Bearst, DERECHOS RESERVADOS, 2022</p>
                    </div>
                </footer>
                </div>
        </Layaout>
    )
}
export default About;