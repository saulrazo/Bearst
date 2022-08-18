import { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss"

export default function useLocoScroll(){
    useEffect(()=>{
        setTimeout(() => {
            const scroll = new locomotiveScroll({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                tablet: { smooth: true },
                smartphone: { smooth: true }
              });
        }, 1100);

    })
}