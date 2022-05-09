function Sugestion(props){
    return (
        <div className="sugestion">
            <div>
                <img src={props.src}/>
                <div>
                    <h2>{props.user}</h2>
                    <h3>{props.follow}</h3>
                </div>
            </div>
            <div>
                <h3>Seguir</h3>
            </div>
        </div>
    )
}

export default function Sugestions(){

    const userSugestions = [
        {
            src: "./Images/badvibesmemes 1.png",
            user: "bad.vibes.memes",
            follow: "Segue você",
            key: 1
        },
        {
            src: "./Images/chibirdart 1.png",
            user: "chibidart",
            follow: "Segue você",
            key: 2
        },
        {
            src: "./Images/razoesparaacreditar 1.png",
            user: "razoesparaacreditar",
            follow: "Novo no instagram",
            key: 3
        },
        {
            src: "./Images/adorableanimals 1.png",
            user: "adorable_animals",
            follow: "Segue você",
            key: 4
        },
        {
            src: "./Images/smallcutecats 1.png",
            user: "smallcutecats",
            follow: "Segue você",
            key: 5
        },
    ]
    return (
        <div className="sugestions">
            <div className="sugestion-top"><h3>Sugestões para você</h3><h3>Ver tudo</h3></div>
            {userSugestions.map(element => <Sugestion key={element.key} src={element.src} user={element.user} follow={element.follow}/>)}
            <div>
                <h4>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</h4>
            </div>
            <div className="sugestion-bottom">
                <h4>© 2021 INSTAGRAM DO FACEBOOK</h4>
            </div>
        </div>
        
    )
}