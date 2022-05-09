export default function MidPost(props){
    if(props.postSrc.endsWith(".mp4")){
        return (
            <div className="mid-post" onClick={props.onclick}>
                    <video autoPlay muted loop>
                        <source src={props.postSrc} type="video/mp4" />
                        <source src={props.postSrcOgg} type="video/ogg" />
                        Seu navegador não suporta vídeos.
                    </video>
            </div>
        )
    }
    return (
        <div className="mid-post" onClick={props.onclick}>
                <img src={props.postSrc}/>
        </div>
    )
}