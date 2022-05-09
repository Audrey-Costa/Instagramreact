import Sugestions from "./Sugestions";

function User(props){
    return (
        <div className="user">
            <img src={props.src}/>
            <div>
                <strong><h2>{props.user}</h2></strong><h3>{props.userTag}</h3>
            </div>
        </div>
    )
}

export default function Sidebar(){
    return (
        <div className="sidebar">
            <User src={"./Images/catanacomics 1.png"} user={"catanacomics"} userTag={"Catana"}/>
            <Sugestions/>
        </div>
    )
}