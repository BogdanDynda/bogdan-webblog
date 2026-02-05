import { useNavigate } from "react-router-dom";

export default function AdminArea() {
    const navigate = useNavigate();

    function handleLogout() {
        console.log("User logged out");
        navigate("/");
    }

    return (
        <div>
            <h2>Панель адміністратора</h2>
            <p>Тут секретна інформація...</p>
            <button onClick={handleLogout}>Вийти</button>
        </div>
    );
}