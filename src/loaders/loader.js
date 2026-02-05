import { getArticles, getArticle } from "../data";

export async function articlesLoader() {
    const articles = await getArticles();
    return { articles };
}

export async function articleLoader({ params }) {
    const article = await getArticle(params.slug);
    if (!article) {
        throw new Response("", {
            status: 404,
            statusText: "Article Not Found",
        });
    }
    return { article };
}