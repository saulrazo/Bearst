import React from "react";
import Logo from "../assets/img/main_bearst.png"
import {AiOutlineWhatsApp} from"react-icons/ai"
import {BsFacebook,BsInstagram} from"react-icons/bs"
import{HiMenu} from "react-icons/hi"
import * as bootstrap from"bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/styles/Layout.css'
import WhLogo from "../assets/img/webp/white_bearst.webp"
import WhMnLogo from "../assets/img/webp/white_icon.webp"
import MnLogo from "../assets/img/main_icon.png"
import { useEffect } from "react";
import { useState } from "react";
function Layaout({ children }){
    const [loading,setLoading]= useState(true)
    const cambiarEstado=()=>{
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }
    if(loading){
        cambiarEstado();
        return(
            <div className="Load"><img src={WhLogo} alt="" /></div>
        )
    }
    else{
        return(
            <div>
            <nav style={{
                padding:"20px",
                paddingLeft:"100px",
                paddingRight:"100px",
                display:"flex",
                justifyContent:"space-between"
            }}>
                <a href={window.location.origin}>
                    <img className="LgLogo" src={WhLogo} alt="bearst.com.mx" width={"150px"}/>
                    <img className="MnLogo" src={WhMnLogo} alt="bearst.com.mx" width={"40px"}/>
                </a>
                <div className="navList" style={{
                    width:"100%",
                    marginTop:"auto"
                }}>
                    <ul className="navListUl" style={{
                        display:"flex",
                        marginTop:"auto",
                        justifyContent:"space-evenly",
                        width:"40%"
                    }}>
                        <li><a href={window.location.origin+"#ser"}>Servicios</a></li>
                        <li><a href={window.location.origin+"/Portafolio"}>Portafolio</a></li>
                        <li><a href={window.location.origin+"/About"} readOnly>About</a></li>
                        <li><a href={window.location.origin+"/Social"} readOnly>Social</a></li>
                    </ul>
                </div>
    
                <div style={{display:"flex"}}>
                <a href="https://wa.me/message/YVYOC67OGLJ3C1" id="wa" target="_blank" style={{
                    color:"#003459",
                    textDecoration:"none",
                    margin:"auto",
                    marginRight:"50px"
                }}>
                <AiOutlineWhatsApp size={30}/>
                </a>
                <HiMenu size={40} style={{
                    color:"white",
                    cursor:"pointer",
                    margin:"auto"
                }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"/>
                </div>
            </nav>
    
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{
                backgroundColor:"#00171F"
            }}>
            <div className="offcanvas-header">
                <img id="offcanvasRightLabel" src={WhLogo} alt="bearst.com.mx" width={"150px"}/>
                <button type="button" id="btnClose" className="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <ul style={{
                listStyle:"none",
            }} className="SeUl">
            <li><a href={window.location.origin}>Inicio</a></li>
            <li><a href={window.location.origin+"#ser"} onClick={()=>{
                document.getElementById("btnClose").click()
            }}>Servicios</a></li>
            <li><a href={window.location.origin+"/Portafolio"}>Portafolio</a></li>
            <li><a href={window.location.origin+"/About"}>About Us</a></li>
            <li id="ContBtn"><a  href="#footer" onClick={()=>{
                document.getElementById("btnClose").click()
            }}>Contacto</a></li>
            </ul>
            
            <div className="sn" style={{
                textAlign:"center",
                marginTop:"150px",
                display:"flex",
                justifyContent:"space-evenly"
            }}>
            <a href="https://www.facebook.com/Bearst-112790664757593" target="_blank">
                <BsFacebook size={30} style={{
                    color:"white"
                }}/>
            </a>
            <a href="https://www.instagram.com/bearst_mx/" target="_blank">
                <BsInstagram size={30} style={{
                    color:"white"
                }}/>
            </a>
            <a href="https://wa.me/message/YVYOC67OGLJ3C1" target="_blank">
                <AiOutlineWhatsApp size={30} style={{
                    color:"white"
                }}/>
            </a>
            </div>
            <div style={{
                display:"flex",
                justifyContent:"center",
                marginTop:"50px"
            }}>
            <p>© 2022 Copyright:</p>
            <a href="https://bearst.com.mx/">bearst.com.mx</a>
            </div>
            </div>
            </div>
            <main style={{
                marginTop:"140px"
            }}>
            {children}
            </main>
    
            <footer id="footer" className="text-white text-center text-lg-start" style={{
                marginTop:"150px"
            }}>
            <div className="container p-4">
                <div className="row">
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <img src={WhLogo} alt="" width="150px" />
    
                    <p>
                    © 2022 Copyright: <a href="./index.html" style={{
                        color:"white",
                        textDecoration:"none"
                    }}>bearst.com.mx</a>
                    </p>
                </div>
    
    
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h3 className="text-uppercase mb-0" style={{
                        textAlign:"center"
                    }}>Social Network</h3>
                    <br />
    
                    <ul className="list-unstyled" style={{
                        display:"flex",
                        justifyContent:"space-evenly"
                    }}>
                    <li>
                        <a href="https://www.facebook.com/Bearst-112790664757593" target="_blank">
                        <BsFacebook size={30} style={{
                            color:"white"
                        }}/>
                        </a>
                    
                    </li>
                    <li>
                        <a href="https://www.instagram.com/bearst_mx/" target="_blank">
                        <BsInstagram size={30} style={{
                            color:"white"
                        }}/>
                        </a>
                    
                    </li>
                    <li>
                        <a href="https://wa.me/message/YVYOC67OGLJ3C1" target="_blank">
                            <AiOutlineWhatsApp size={30} style={{
                                color:"white"
                            }}/>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </footer>
            </div>
        )
    }
    // useEffect(()=>{
    //     document.querySelector(".Load").style.display="block";
    //     document.addEventListener("DOMContentLoaded", function(event) {
    //         document.querySelector(".Load").style.display="none";
    //         console.log("hola mundo")
    //     });
    // },[])
    
}
export default Layaout;