import { useNavigate } from "react-router-dom";
function useNavigateToPath( path, id ) {
    const navigate = useNavigate();
    console.log(navigate)
    return () => {
        let navigateTo = path + id;
        console.log(navigateTo)
        navigate(navigateTo, { replace: true })
    }
   
}
export default useNavigateToPath