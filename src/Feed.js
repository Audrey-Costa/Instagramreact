import Post from "./Post";


export default function Feed(){
    const postsList = [
        {
            userSrc:"./Images/meowed 2.png",
            user: "meowed",
            postSrc: "./Images/gato-telefone 1.png",
            postSrcOgg:"",
            likesSrc: "./Images/respondeai 1.png",
            likeUser: "respondeai",
            likes: "outras 101.523 pessoas",
            key: 1
        },
        {
            userSrc: "./Images/barked 2.png",
            user: "barked",
            postSrc: "./Images/dog 1.png",
            postSrcOgg: "",
            likesSrc: "./Images/adorableanimals 2.png",
            likeUser: "adorable_animals",
            likes: "outras 99.159 pessoas",
            key: 2
        },
        {
            userSrc: "./Images/meowed 2.png",
            user: "meowed",
            postSrc: "./Videos/video1.mp4",
            postSrcOgg: "./Videos/video1.ogg",
            likesSrc: "./Images/respondeai 1.png",
            likeUser: "respondeai",
            likes: "outras 101.523 pessoas",
            key: 3
        },
        {
            userSrc: "./Images/meowed 2.png",
            user: "meowed",
            postSrc: "./Videos/video2.mp4",
            postSrcOgg: "./Videos/video2.ogg",
            likesSrc: "./Images/9gag 1.png",
            likeUser: "9gag",
            likes: "outras 145.533 pessoas",
            key: 4
        },
        {
            userSrc: "./Images/meowed 2.png",
            user: "meowed",
            postSrc: "./Videos/video3.mp4",
            postSrcOgg: "./Videos/video3.ogg",
            likesSrc: "./Images/chibirdart 1.png",
            likeUser: "chibidart",
            likes: "outras 97.320 pessoas",
            key: 5
        },
        {
            userSrc: "./Images/meowed 2.png",
            user: "meowed",
            postSrc: "./Videos/video4.mp4",
            postSrcOgg: "./Videos/video4.ogg",
            likesSrc: "./Images/barked 2.png",
            likeUser: "barked",
            likes: "outras 181.120 pessoas",
            key: 6
        },
        {
            userSrc: "./Images/meowed 2.png",
            user: "meowed",
            postSrc: "./Videos/video5.mp4",
            postSrcOgg: "./Videos/video5.ogg",
            likesSrc: "./Images/filomoderna 1.png",
            likeUser: "filomoderna",
            likes: "outras 241.408 pessoas",
            key: 7
        }
    ]
    return (
        <div className="feed">
            {postsList.map(element => <Post userSrc={element.userSrc} user={element.user} postSrc={element.postSrc} postSrcOgg={element.postSrcOgg} likesSrc={element.likesSrc} likeUser={element.likeUser} likes={element.likes} key={element.key}/>)}
            <div class="menu-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    )
}