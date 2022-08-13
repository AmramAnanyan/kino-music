function useClickOutSide() {
    function clickOutSide(ref,callback) {
        function changeRef(ref, callback, e) {
            if (!ref.current.contains((e.target))) {
               callback()
           }
        } 
        if (ref.current) {
            window.addEventListener("click",(e)=>changeRef(ref,callback,e))
        }
    }
    return {clickOutSide}
}
export default useClickOutSide