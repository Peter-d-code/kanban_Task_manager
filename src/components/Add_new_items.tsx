import {useState} from "react"

interface Addnewitemprops {
    onAdd(text: string): void,
    
}


export const Addnewitems = (props: Addnewitemprops)=> {
const [showForm, setShowForm] = useState()
if(showForm){

}
return (
<>
</>
)

}