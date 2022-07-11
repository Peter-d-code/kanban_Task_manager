import {ContextProvider, Context,} from "./useContext"
import App from "./app"
import {Card, Card_creater, } from "./card"
import {Console } from "console"
import {List} from "./appState"
export const Main = ()=>{

return(
<>
<ContextProvider>

<App />
</ContextProvider>
</>
    )
}