 interface Task {
    id: string,
    text: string
}
export interface List  {
    id: string,
    text: string,
    task: Task[]
}
export interface AppState {
list: List[]
}
export const appData: AppState = {

    list :[
        {
        id: "0",
        text: 'To DO',
        task: [{id: "c0", text: "Genrate app scafflod"}]
}
,
{
    id: "1",
    text: 'To DO',
    task: [{id: "c2", text: "Genrate app scafflod"}]
},
{
    id: "2",
    text: 'To DO',
    task: [{id: "c3", text: "Genrate app scafflod"}]
}

],



}