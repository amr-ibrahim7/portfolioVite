import { useEffect } from "react";


export default function useOutsideAlerter({menuRef,setMenuOpened}) {
    const viewPort_width = document.documentElement.clientWidth;
    useEffect(() => {
        
         /**
     * Alert if clicked on outside of element
     */

         function handleClickOutside(event) {
            if(menuRef.current && !menuRef.current.contains(event.target)) {
                if(viewPort_width <= 640) {
                    setMenuOpened(false);
                }
            }
         }

         // Bind The Event listener

         document.addEventListener("mousedown",handleClickOutside);

         return() => {
            document.removeEventListener("mousedown",handleClickOutside)
         }

    },[menuRef])
}