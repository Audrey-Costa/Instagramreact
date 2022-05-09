import reactDom from "react-dom";
import Contents from "./Contents";
import Top from "./Top";

function App(){
    return (
        <div>
            <Top/>
            <Contents/>
        </div>
    )
}

reactDom.render(<App/> ,document.querySelector(".root"))