import "./WidgetSmExample.css"
import {Preview} from "@mui/icons-material"

const WidgetSmExample = () =>{
    return (
        <div className="WidgetSmExample">
            <span className="WidgetSmTitle">New Users</span>
            <ul className="WidgetSmListe">
                <li className="WidgetSmItem">
                    <img src="/assets/images/poste-logo.jpg" alt="" className="WidgetSmImage"/>
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUsername">Saifeddine Houji</span>
                        <span className="WidgetSmJob">Software engineer</span>
                    </div>
                    <button className="WidgetSmButton">
                        <Preview className="WidgetSmIcon"/> Check Profile
                    </button>
                </li>

                <li className="WidgetSmItem">
                    <img src="/assets/images/poste-logo.jpg" alt="" className="WidgetSmImage"/>
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUsername">Hamdi Nahdi</span>
                        <span className="WidgetSmJob">Software engineer</span>
                    </div>
                    <button className="WidgetSmButton">
                        <Preview className="WidgetSmIcon"/> Check Profile
                    </button>
                </li>

                <li className="WidgetSmItem">
                    <img src="/assets/images/poste-logo.jpg" alt="" className="WidgetSmImage"/>
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUsername">Tarek Zaafrane</span>
                        <span className="WidgetSmJob">Software engineer</span>
                    </div>
                    <button className="WidgetSmButton">
                        <Preview className="WidgetSmIcon"/> Check Profile
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSmExample;