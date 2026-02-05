import { useLoaderData } from "react-router-dom";

export default function Article() {
    const { article } = useLoaderData();

    return (
        <div>
            <h2>{article.title}</h2>
            <p><i>Автор: {article.author}</i></p>
            <hr />
            <p>{article.content}</p>
        </div>
    );
}
