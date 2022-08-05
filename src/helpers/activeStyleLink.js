import { linkStyle } from "../Components/Navbar/styled";
function activeStyle(pathname, actPath) {
    if (pathname === actPath) {
        return {
            textDecoration: "underline red",
            color: "red",
            
        }
    }
    else {
        return linkStyle
    }
}

export default activeStyle