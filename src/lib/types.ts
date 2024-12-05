export type Article = {
    source: {
        id: string | null; // Source ID can be null
        name: string; // Source name is always a string
    };
    author: string | null; // Author can be null
    title: string; // Title is always a string
    description: string | null; // Description can be null
    url: string; // URL is always a string
    urlToImage: string | null; // Image URL can be null
    publishedAt: string; // Published date as an ISO string
    content: string | null; // Content can be null
};

export type Articles = Article[];
