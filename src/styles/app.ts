import search from ".././icons/search.png"
import add from ".././icons/add.png"
import Activity from ".././icons/Activity.png"
import  Profile from ".././icons/Profile.png"
import Timer from ".././timer.png"
export const   style  = {
container : {
widht: "100%",
height: "100vh",
display: "grid",
gridTemplateRows: "auto",
gridTemplateColumns: "30% 70%",
backgroundColor: "#FDFDFD",
},
first_column: {
container : {
    display: "flex",
    fontFamily: "Noto Sans",
flexDirection: "column" as "column",
justifyContent: "flex-start",
alignItems: "center",
justifySelf: "center",
borderRight: "2px solid #adb5bd",
height: "100%",
width: "100%",
},

logo : {
    width: "90%",
    height: "12%",
    borderRadius: "10px",
    backgroundColor: "#448CF7",
    marginTop: "4%",
},
menubar : {
    fontSize: "1.4em",
    width: "100%",
    height: "30%",
    // backgroundColor: "red",
    marginTop: "7%",

    display: "flex",
    alignItems: "center",
    flexDirection: "column" as "column",
    textTransform: "capitalize" as "capitalize",
    letterSpacing: "1px",
    list_container: {
        
        fontFamily: "Noto Sans",
        fontWeight: "500",
        listStyleType: "none",
       
     
        width: "70%",
      
        list_items: {

            backgroundColor: "#e9ecef",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "4%",
            borderRadius : "10px",
            height: "55%",
            
          
        },
        list_icons: {
            display: "inline-block",
            width: "50px",
            height: "60px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgorundSize: "cover",
            overflow: "visible",
            marginRight: "7%",
        }
        ,
     }
},
workspace  :{
    // backgroundColor: "red",
    fontSize: "1.2em",
    width: "100%",
    height: "55%",
    
    first_row: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        height: "10%",
        // backgroundColor: "pink",
    },
    second_row : {
        paddingTop: "2%",
        height: "80%",
        // backgroundColor: "orange",
        display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",

      
    },
    second_row_checkbox_container : {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: "4%",
    
backgroundColor: "#E9ECEF",
borderRadius: "10px",
marginBottom: "5%",
height: "60px",
width: "50%",
    },
    text_center:{
// backgroundColor: "blue",
width: "70%",
    marginLeft: "5%",
    },
    input: {
transform: "scale(1.50)",
    },

},
},
second_column: {
  container: {
fontFamily: "Noto Sans",
display: "flex",
flexDirection: "column" as "column",
justifyContent: "flex-start",
alignItems: "center",
justifySelf: "center",
width: "100%",
height: "100%",

  },
first_row: {
    fontFamily: "Noto Sans",
    width: "100%",
    height: "30%",
    wrap: "wrap",
    display: "flex",
    flexDirection: "column" as "column",
justifyContent: "flex-start",
paddingTop: "1%",
alignItems: "flex-start",
justifySelf: "center",
container : {
    width: "100%",
    height: "70%",
    display: "flex",
    flexDirection: "row" as "row",
},

    first_column: {
        fontSize: "3.6em",
        width: "40%",
        height: "100%",
        display: "flex",
        flexDirection: "column" as "column",
        justifyContent: "center",
        paddingLeft: "5%",
        paddingRight: "5%",
    }
,
        text:{
            fontSize: ".25em",
            width: "80%",
            marginTop: "1%",
        },
        second_column: {
           container: { 
            paddingTop: "7%",
            width: "60%",
            fontSize: ".6em",
            height: "100%",
            // backgroundColor: "red",
        },
            input : {
                width: "70%",
                height: "30%",
                borderRadius: "30px",
                border: "1px solid #7209b7",
                zIndex: "-1",
            },
input_icon : {
    display: "inline-block",
    backgroundImage: `url(${search})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "30px",
    height: "30px",
    zIndex: "1",
    marginLeft: "1%",
    marginTop: "1%",
    position: "absolute" as "absolute",
},
Notification_icon : {
    display: "inline-block",
    // backgroundImage: `url(${notification})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "30px",
    height: "30px",
    zIndex: "1",
    marginLeft: "1%",
    marginTop: "1%",
    position: "absolute" as "absolute",
}
            },
            second_row: {
                width: "100%",
                height: "30%",
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            },
            buttons: {
width: "130px",
height: "50px",
borderRadius: "30px",
letterSpacing: "1px",
fontSize: "0.9em",
border: "none",
color: "white",
fontWeight: "600",

            },
},
second_row: {
    width: "100%",
    height: "60%",
    margin: "0",
    padding: "0",
    display: "grid",
  
    justifyContent: "flex-start",
    gridTemplateColumns: "50% 50%",
gridTemplateRows: "auto",
    // backgroundColor: "red",
},
third_row:{
    width: "100%",
    height: "10%",
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "blue",
    alignItems: "flex-start",
    fontSize: "1.6em",
    fontFamily: "Noto Sans",
    add_image:{
        width: "45px",
        height: "45px",
        backgroundImage: `url(${add})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginLeft: "2%",
        fontFamily: "Lato",
        letterSpacing: "1px",
    }
}

}
}