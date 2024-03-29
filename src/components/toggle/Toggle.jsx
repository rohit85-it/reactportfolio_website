import "./toggle.css"
import Moon from "../../img/moon.png"
import Sun from "../../img/sun.png"
import { useContext } from "react"
import { ThemeContext} from "../../context"

export const Toggle = () => {
    const theme = useContext(ThemeContext);
    const handleClick = () =>{
        theme.dispatch({type: "TOGGLE"})
    }
    return (
        <div className="t">
            <img src={Sun} alt="" className="t-icon"/>
            <img src={Moon} alt="" className="t-icon"/>
            <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 30}}></div> 
        </div>
    )
}
