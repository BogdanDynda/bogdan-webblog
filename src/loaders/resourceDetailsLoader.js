import { json } from "react-router-dom";

export async function resourceDetailsLoader({ params }) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.resourceId}`
    );

    if (!response.ok) {
        throw json(
            { message: "Ресурс не знайдено" },
            { status: response.status }
        );
    }

    return { resource: await response.json() };
}