import { Link, useLoaderData } from "react-router-dom";

export default function Articles() {
    const { articles } = useLoaderData();

    return (
        <div>
            <h2>Список статей</h2>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <Link to={`/article/${article.slug}`}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
