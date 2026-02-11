import { useEffect, useState } from 'react'
import "./gototop.css"

const GotoTop = () => {
    const[isVisible,setisVisible]=useState(false)

    const gotoTop=()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }

    const listentoscroll=()=>{
        const winscroll=document.body.scrollTop || document.documentElement.scrollTop
        console.log("scroll here==>",winscroll);
        

        if (winscroll>90) {
            setisVisible(true)
        }
        else{
            setisVisible(false)
        }
    }

    useEffect(()=>{
  window.addEventListener("scroll",listentoscroll)
    },[])
  return (
    <>
    
     {
        isVisible && <div onClick={gotoTop} className=" bg-[#a97105] fixed bottom-7  right-6 z-20 flex justify-center items-center  rounded-full  h-12 w-12 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-arrow-up animate-arrow  relative z-50 " viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg>
    </div>
    }
    
    </>
   
  )
}

export default GotoTop