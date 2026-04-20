import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const goToSwitcher = () => {
        navigate("/switcher");
    }

    const goToLogin = () => {
        navigate("/login");
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={goToSwitcher}>
                Go to Switcher
            </button>
            <button onClick={goToLogin}>
                Go to Login
            </button>
        </div>
    );
}

export default Home;