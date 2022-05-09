function Storie(props){
    return (
        <div className="storie">
            <div className="image">
                <img src={props.src}/>
            </div>
            <div>
                <h3>{props.user}</h3>
            </div>
        </div>
    )
}

export default function Stories(){
    const storiesList = [
        {
            src: "./Images/9gag 1.png",
            user: "9gag",
            key: 1
        },
        {
            src: "./Images/meowed 1.png",
            user: "meowed",
            key: 2
        },
        {
            src: "./Images/barked 1.png",
            user: "barked",
            key: 3
        },
        {
            src: "./Images/nathanwpylestrangeplanet 1.png",
            user: "nathanwpylestrangeplanet",
            key: 4
        },
        {
            src: "./Images/wawawiwacomicsa 1.png",
            user: "wawawiwacomicsa",
            key: 5
        },
        {
            src: "./Images/respondeai 1.png",
            user: "respondeai",
            key: 6
        },
        {
            src: "./Images/filomoderna 1.png",
            user: "filomoderna",
            key: 7
        },
        {
            src: "./Images/memeriagourmet 1.png",
            user: "memeriagourmet",
            key: 8
        }
    ]
    return (
        <div className="stories">
            {storiesList.map(element => <Storie key={element.key} src={element.src} user={element.user}/>)}
            <div className="right">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}