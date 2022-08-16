import { useNavigate } from "react-router-dom";
function useNavigateToPath( path, id="" ) {
    const navigate = useNavigate();

    return () => {
        let navigateTo = path + id;
        console.log(navigateTo)
        navigate(navigateTo, { replace: true })
    }
   
}
export default useNavigateToPath