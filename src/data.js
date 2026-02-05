const articles = [
    {
        id: "1",
        slug: "react-router-v6",
        title: "Огляд React Router v6.4",
        author: "Ivan Dev",
        content: "Data Router API змінює спосіб завантаження даних...",
    },
    {
        id: "2",
        slug: "javascript-es2024",
        title: "Нові фічі JS у 2024",
        author: "Maria Code",
        content: "Розглянемо нові методи масивів та групування...",
    },
    {
        id: "3",
        slug: "ai-in-web",
        title: "ШІ у веб-розробці",
        author: "Ivan Dev",
        content: "Як інтегрувати LLM у ваші застосунки...",
    },
];

export async function getArticles() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return articles;
}

export async function getArticle(slug) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const article = articles.find((article) => article.slug === slug);
    return article;
}