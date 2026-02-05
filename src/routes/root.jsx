import { Outlet, NavLink, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/uiSlice";
import { useEffect } from "react";
import "../css/root.css";

export default function Root() {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const theme = useSelector(state => state.ui.theme);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <>
            <div id="sidebar">
                <h1>Dynda Blog</h1>
                <nav>
                    <NavLink to="/">Головна</NavLink>
                    <NavLink to="/about">Про нас</NavLink>
                    <NavLink to="/articles">Статті</NavLink>
                    <NavLink to="/resources">Ресурси</NavLink>
                </nav>

                <button onClick={() => dispatch(toggleTheme())}
                    style={{
                        marginLeft: "auto",
                        padding: "6px 12px",
                        cursor: "pointer",
                        background: "#444",
                        color: "white",
                        border: "1px solid #777",
                        borderRadius: "5px"
                    }}
                >
                    Тема: {theme === "light" ? "Світла" : "Темна"}
                </button>
            </div>

            {navigation.state === "loading" && (
                <div style={{ padding: "10px", background: "yellow", color: "black" }}>
                    Завантаження...
                </div>
            )}

            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
