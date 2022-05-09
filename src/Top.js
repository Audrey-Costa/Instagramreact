export default function Top(){
    return (
        <div className="top">
            <div className="Menu">
                <div>
                    <div><a href="https://www.instagram.com/">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a></div>
                    <div className="divisor"></div>
                    <div><a href="https://www.instagram.com/">
                        <img src="./Images/logo.png"/>
                    </a></div>
                </div>
                <div>
                    <input type="text" placeholder="Pesquisar" /></div>
                <div>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon className="non-mobile" name="compass-outline"></ion-icon>
                    <ion-icon className="non-mobile" name="heart-outline"></ion-icon>
                    <ion-icon className="non-mobile" name="person-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}