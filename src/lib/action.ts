"use server"
const newsApi = process.env.NEWS_API
export const getNews = async ({ category, query, country = "us" }: { category?: string, query?: string, country?: string }) => {


    let params = ''
    if (category) params += `&category=${category}`;
    if (query) params += `&q=${query}`;


    const request = `https://newsapi.org/v2/top-headlines?apiKey=${newsApi}&country=${country || ""}${params}`
    console.log('====================================');
    console.log(request);
    console.log('====================================');



    return fetch(request)
        .then(response => response.json())
        .then(data => data.articles)
        .catch(error => console.error('Error:', error));
    // return fetch(`https://newsapi.org/v2/top-headlines?category=${category === undefined ? "" : category}&q=${query || ""}&country=${country || ""}&apiKey=${newsApi}`)
    //     .then(response => response.json())
    //     .then(data => data.articles)
    //     .catch(error => console.error('Error:', error));
}