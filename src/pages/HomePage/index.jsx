import { LoginForm } from "../../components/form/loginForm";
import logo from "../../assets/logo1.svg";
import pageStyles from "../../style/modules/pageBox.module.scss";

export const Home = () => {

    return (
        <>
            <main className={pageStyles.pageBox}>
                <div>
                    <figure>
                        <img src={logo} alt="Logo Kenzie Hub" />
                    </figure>
                    <LoginForm />
                </div>
            </main>

        </>
    )
    
}