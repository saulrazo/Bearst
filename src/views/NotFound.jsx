import React from "react";
function NotFound() {
  return (
    <div style={{
      margin:"auto",
      textAlign:"center"
    }}>
        <h1 className="Err404" style={{
          position:"fixed",
          top:"30%",
          left:"50%",
          transform:"translateX(-50%)",
          zIndex:"-1",
          fontSize:"20vw",
          fontWeight:"bold",
          color:"black"
        }}>4<span style={{
          fontSize:"70%",
        }}>😓</span>4</h1>
        <h2  className="NotFoundTitle" style={{
          position:"fixed",
          top:"53%",
          left:"50%",
          transform:"translateX(-50%)",
          fontSize:"3.5vw",
          fontWeight:"bold"
        }}>PAGINA NO ENCONTRADA</h2>
        <a className="NotFoundBtn" href={window.location.origin} style={{
          position:"fixed",
          left:"50%",
          transform:"translateX(-50%)",
          textDecoration:"none",
          top:"70%",
          padding:"10px",
          borderRadius:"0.5rem"
        }}>Regresar a Principal</a>
    </div>
  );
}

export default NotFound;