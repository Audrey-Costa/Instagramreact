export default function MidPost(props){
    if(props.postSrc.endsWith(".mp4")){
        return (
            <div className="mid-post">
                    <video autoplay muted loop>
                        <source src={props.postSrc} type="video/mp4" />
                        <source src={props.postSrcOgg} type="video/ogg" />
                        Seu navegador não suporta vídeos.
                    </video>
            </div>
        )
    }
    return (
        <div className="mid-post">
                <img src={props.postSrc}/>
        </div>
    )
}