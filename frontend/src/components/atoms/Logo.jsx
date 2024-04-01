import LogoImage from "../../assets/img/logo.png"
import '../../assets/styles/index.css'
const Logo = () => {
  console.log(process.env)
  return <img src={LogoImage} className="logo" alt="Logo" />
}

export default Logo
