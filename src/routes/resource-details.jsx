import { useLoaderData } from "react-router-dom";

export default function ResourceDetailsPage() {
    const { resource } = useLoaderData();

    return (
        <div>
            <h2>{resource.title}</h2>
            <p>{resource.body}</p>
        </div>
    );
}
