import { useSearchParams } from "react-router-dom";

export default function SearchForm() {
    const [params, setParams] = useSearchParams();
    const query = params.get("query") || "";

    function handleChange(e) {
        const value = e.target.value;
        setParams(value ? { query: value } : {});
    }

    return (
        <input
            type="text"
            placeholder="Пошук..."
            value={query}
            onChange={handleChange}
            style={{ padding: "8px", width: "250px" }}
        />
    );
}
