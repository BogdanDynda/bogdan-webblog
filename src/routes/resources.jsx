import { useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";
import { setAuthorFilter } from "../store/resourcesSlice";

export default function ResourcesPage() {
    const { resources } = useLoaderData();
    const favorites = useSelector(state => state.favorites.saved);
    const activeAuthor = useSelector(state => state.resources.activeAuthor);
    const dispatch = useDispatch();

    const filtered = activeAuthor
        ? resources.filter(r => r.userId === activeAuthor)
        : resources;

    return (
        <div>
            <h2>Статті</h2>

            <button onClick={() => dispatch(setAuthorFilter(1))}>Автор 1</button>
            <button onClick={() => dispatch(setAuthorFilter(2))}>Автор 2</button>
            <button onClick={() => dispatch(setAuthorFilter(null))}>Скинути</button>

            <ul>
                {filtered.map(item => (
                    <li key={item.id}>
                        {item.title}

                        {favorites.includes(item.id) ? (
                            <button style={{ marginLeft: "10px" }} onClick={() => dispatch(removeFavorite(item.id))}>
                                Видалити з обраного
                            </button>
                        ) : (
                            <button style={{ marginLeft: "10px" }} onClick={() => dispatch(addFavorite(item.id))}>
                                Додати в обране
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
