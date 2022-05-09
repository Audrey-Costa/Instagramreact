import MidPost from "./MidPost";

export default function Post(props){
    return (
        <div className="post">
            <div className="top-post">
                <div><img src={props.userSrc}/><h2>{props.user}</h2></div>
                <div><ion-icon name="ellipsis-horizontal-outline"></ion-icon></div>
            </div>
            <MidPost postSrc={props.postSrc} postSrcOgg={props.postSrcOgg}/>
            <div className="bottom-post">
                <div>
                    <ion-icon className="unlike" name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div className="end-post">
                <img src={props.likesSrc}/><h2>Curtido por <strong>{props.likeUser}</strong>  e <strong>{props.likes}</strong></h2>
            </div>
            <div className="comments">
                <div>
                    <ion-icon name="happy-outline"></ion-icon>
                    <input type="text" value="Adicione um comentário..."/>
                </div>
                <input className="button" type="button" value="Publicar"/> 
            </div>
        </div>
    )
}