import * as React from 'react';
import {style} from "../styles/app"
import Activity from "../icons/dow.png"
import  Profile from "../icons/Profile.png"
import timer from "../icons/timer.png"
import {Card,Card_creater} from "./card"
import { create } from 'domain';
import {Context} from "./useContext"

export interface IAppProps {
  createcard: any,

}

export default function App () {   
  const {invoke_create_card, create_card} = Context();
    return (
      <div style = {style.container}>
        <div style = {style.first_column.container}>
            <div style = {style.first_column.logo}></div>
            <div style = {style.first_column.menubar}>
            <ul style = {style.first_column.menubar.list_container}>
                {
                    ["Inbox", "Activity", "Member"].map((args, key)=>{
                        const arr = [Activity, timer, Profile]
                        return(
                            <>
                           <li style = {style.first_column.menubar.list_container.list_items} key = {key}>{args}</li>
                            </>
                        )
                    })
                }
                {/* <i style={{...style.first_column.menubar.list_container.list_icons , backgroundImage: `url(${arr[key]})`}}></i> */}
            </ul>
            </div>
            <div style = {style.first_column.workspace}>
            <div style={style.first_column.workspace.first_row}> Worksace </div>
<div style = {style.first_column.workspace.second_row}>
{["InDesign", "TeamsDesign", "PersonalProject"].map((args,key) => <div key = {key} style={style.first_column.workspace.second_row_checkbox_container}>
    
<input type="checkbox" id="topping" name={args} value={args} key = {key+4} style ={style.first_column.workspace.input}/>
<span key={key+10} style = {style.first_column.workspace.text_center}>{args}</span>
</div>
)
  }
</div>

            </div>
        </div>
        <div style={style.second_column.container}>
            <div style = {style.second_column.first_row}>
                <div style= {style.second_column.first_row.container}>

  <div style={style.second_column.first_row.first_column}>
<p>InDesign</p>
<p style={style.second_column.first_row.text}>inDesing Kanban will contains alll The Essetial tasks related to the design production in the orgins app.</p>
  </div>
  <div  style={style.second_column.first_row.second_column.container}>
  <i style={style.second_column.first_row.second_column.input_icon}></i>
    <input type = "text" style = {style.second_column.first_row.second_column.input}/>
    <i style={style.second_column.first_row.second_column.Notification_icon}></i>
  </div>
</div>
<div style={style.second_column.first_row.second_row}>
{
["ToDo", "InProgress", "Completed"].map((args,key) => {const arr =  ["#2C2F35", "#448CF7", "#54E27C"]
    return(
<button key = {key} style={{...style.second_column.first_row.buttons, backgroundColor: `${arr[key]}`}}>
{args}
</button>
    )
}
)
}
</div>




 
            </div>
            <div style = {style.second_column.second_row}>
            {create_card ? <Card_creater /> : <Card />}
            </div>
            <div style={style.second_column.third_row}>
                <div>Create New Task </div>
                <div style={style.second_column.third_row.add_image}  onClick={()=>invoke_create_card()}> </div>
                </div>
        </div>

      </div>
    );
  }
