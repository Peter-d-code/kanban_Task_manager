import React, { Children, createContext, useContext, useState } from "react";
import {Card} from "./card"
import {appData,AppState , List} from "./appState"
interface Context_type {
    create_card : boolean,
    setCardtitle:any,
    Card_title:string
    invoke_create_card():void,
    close_create_card():void
    appData:AppState
    list: List[],
    getTaskByListId(id:string):object
}
interface task_props {
    text: string,
    id: string
}
const Auth_Context = createContext<Context_type>({} as Context_type);
interface Props {
    children: React.ReactNode;
  }
export const ContextProvider: React.FC<Props> = ({children}) =>{
const [create_card, set_create_card_] = useState(false)
const [Card_title, setCardtitle] = useState('')
const {list} = appData

const invoke_create_card = ()=>{
    set_create_card_(true)
}
const close_create_card = ()=>{
    set_create_card_(false)
}

const getTaskByListId = (id:string)=>list.find((list)=>list.id==id)?.task || []

const tasks = ({text,id}: task_props)=>{
    const tasklist = getTaskByListId(id)
    return (
        <Card props = {text}>

        </Card>
    )

}
return(
    <Auth_Context.Provider value = {{invoke_create_card, close_create_card, create_card,setCardtitle,Card_title,appData ,getTaskByListId, list}}>
{children}
        </Auth_Context.Provider>
)
}
export const Context = ():Context_type=>{
const context = useContext(Auth_Context)
return context;
}