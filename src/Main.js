import Feed from "./Feed"
import Stories from "./Stories"

export default function Main(){
    return (
        <div className="main">
            <Stories/>
            <Feed/>
        </div>
    )
}