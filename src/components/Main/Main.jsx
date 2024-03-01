import "../../App.css";
import "./Main.css";
import googlePlaystore from "../../assets/googlePlaystore.svg";
import appstore from "../../assets/appstore.svg";
import mobieImage from "../../assets/mobieImage.png";

export default function Main(){
    return(<>
        <main className="mainSection">
            <div className="leftSection">
                <h2 className="degisnHeading">Share <br/> Open <br/> Discover</h2>
                <p className="degisnText">Get the best of health and fitness , all in one <br/> place. Download the app today!</p>
                 <div className="storeImgWrapper">
                    <div className="storeImg">
                        <a href="#">
                            <img src={googlePlaystore} alt="googlePlaystoreImage"/>
                        </a>
                    </div>
                    <div className="storeImg">
                        <a href="javascript:void(0)">
                            <img src={appstore} alt="appstoreImage"/>
                        </a>
                    </div>
                 </div>
            </div>

            <div className="rightSection">
                <div className="mobileImageWrapper">
                    <img src={mobieImage} alt="mobileImage"/>
                </div>
            </div>

         
        </main>
    </>);
}