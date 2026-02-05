import { json } from "react-router-dom";

export async function resourcesLoader({ request }) {
    const url = new URL(request.url);
    const query = url.searchParams.get("query") || "";

    let apiUrl = "https://jsonplaceholder.typicode.com/posts";

    if (query) {
        apiUrl += `?q=${query}`;
    }

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw json(
            { message: "Помилка завантаження ресурсів" },
            { status: response.status }
        );
    }

    const data = await response.json();
    return { resources: data, query };
}
