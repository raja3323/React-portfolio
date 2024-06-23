import "./toggle.css"
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"
import { useContext } from "react"
import { ThemeContext } from "../../context"

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = ()=>{
    theme.dispatch({type:"TOGGLE"})
  }

  return (
    <div className="t">
      <img src={Moon} alt="" className="t-icon" />
      <img src={Sun} alt="" className="t-icon" />
      <div onClick={handleClick} style={{left: theme.state.darkMode ? "25px" : "0"}} className="t-button"></div>
    </div>
  )
}

export default Toggle;
