import "../../src/globalstyles.css"
import{Context} from "./useContext"
import close from "../icons/close.png"
import { MdOutlineClose,MdModeEditOutline

} from "react-icons/md";
import {IoIosAddCircleOutline} from "react-icons/io"
import {AiOutlineDelete} from "react-icons/ai"
import { useEffect, useRef } from "react";
export const  style = {
    container : {
width: "80%",
height: "90%",
display: "flex",
backgroundColor: "#E9ECEF",
borderRadius: "20px",
marginLeft: "5%",
    },

    card_elm_container : {
     
display: "flex",
justifyContent: "flex-start",
padding: "10px",
alignItems: "center",
width: "100%",
height: "100%",
flexDirection: "column" as "column",
fontSize: "1.6em",
fontFamily: "Noto Sans",
title:{
    width: "90%",
    height: "15%",
    backgroundColor: "red",
    borderRadius: "10px",
    fontFamily: "Noto Sans",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "capitalize" as "capitalize",
},
body:{
    height: "55%",
    width: "100%",
    marginTop: "1%",
    overflow: "scroll" as "scroll",
    flexDirection:  "column" as "column",
}
    },
    
card_creater: {
    fontSize: "1.8em",
    width: "70%", height:"45%", borderRadius: "10px", 
    display: "flex",
    justifyContent: "space-around",
    alignItems : "center",
    // gridArea: 
    // "card_creater",
    flexDirection: "column" as "column",
    backgroundColor: "#E9ECEF",
    padding: "10px",

    marginLeft: "10%",
    marginTop: "10%",
    input:{
width: "70%",
height: "40px",
borderRadius: "10px",
border: "none",
padding: "10px",
fontSize: "1em",
color: "#134074",
fontFamily: "Noto Sans",

    },
    button:{
        width: "30%",
   height: "60px",
   borderRadius: "10px",
   marginLeft: "60%",
   backgroundColor: "#448CF7",
   border: "none",
   color: "white",
   fontSize: "0.8em",
   letterSpacing: "1px",
marginTop: "5%"
    },
    text: {
        color: "black",
        width: "95%",
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "space-between",
        alingItems: "center",
 

    },
    p:{
marginLeft: "60px",
fontSize: "1.1em",

    },

    i: {
backgroundImage: `url(${close})`,
width: "200px",
height: "50px",
position: "absolute" as "absolute",
backgroundRepeat: "no-repeat",
bakgroundSize: "cover",
backgoundPositon: "center",
    }
},

list_functions: {
width: "90%",
height: "10%",
display: "flex",
borderRadius: "10px",
alignItems: "center",
backgroundColor: "blue",
marginTop: "20px",
padding: "20px",
justifyContent: "flex-end",

},
list: {
    width: "80%",
    height: "190px",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
}
};
interface card {
    text?: string,
    body?: any

}
const listItems = ()=>{
    
}
export const Card:React.FC<card> = ({text, body})=>{
    const {invoke_create_card, close_create_card,setCardtitle }   =  Context()
    return (
        <div style={style.container}> 
        <div style={style.card_elm_container}>
<div style={style.card_elm_container.title}>
{text}</div>
<div style={{...style.card_elm_container.title, ...style.card_elm_container.body}}>
{/* <div style = {style.list}>dfdf</div>
<div>dfdf</div>
<div>dfdf</div> */}
</div>
{/* <div style = {style.list_functions}>dfdf</div> */}
<div style={style.list_functions}> <IoIosAddCircleOutline size = "45"style={{marginRight: "2%"}}/><AiOutlineDelete size = "45" style={{marginRight: "2%"}}/><MdModeEditOutline  size = "45" /></div>
</div>
        </div>
    )
}
const useFocus = ()=>{
    const ref = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        ref.current?.focus()
    },[])
    return ref
}
const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>)=>{
    if(event.key === "Enter"){
        
    }
}
export const Card_creater = ()=>{
    const {invoke_create_card, close_create_card,setCardtitle,Card_title}   =  Context()
    const inputRef = useFocus()
    console.log(Card_title);
    return(
<div style={style.card_creater}>
<div style={style.card_creater.text}><p style={style.card_creater.p}>Enter New Card Title </p><MdOutlineClose onClick = {()=>close_create_card()}/></div>
<input style={style.card_creater.input} onChange= {(e)=>setCardtitle(e.target.value)} ref={inputRef}></input>
<button style={style.card_creater.button}>Create</button>
</div>
    )
}