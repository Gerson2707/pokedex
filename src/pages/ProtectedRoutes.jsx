import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router"

const ProtectedRoutes = () => {

    const trainer =  useSelector(store => store.trainer )

    if (trainer.length >= 3) {
        return  <Outlet />
    } else {
        return <Navigate to='/' />
    }

}
export default ProtectedRoutes