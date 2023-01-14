import { useContext } from "react"
import { GlobalContext } from "../../../context/GlobalContext"
import { MainModalLogin } from "./styleLoginModal"

function LoginModal(){

    const context = useContext(GlobalContext)

    return(
        <MainModalLogin
        modal={context.setShowModal}
        action={context.setAction}
        >
        <h1>OLÁ</h1>
        </MainModalLogin>
    )
}

export default LoginModal