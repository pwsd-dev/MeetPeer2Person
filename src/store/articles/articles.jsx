import server from "../../api/server";

async function getArticles() {
    const response = await server.get('articles.php');
    console.log(response);
    return response.data;
}


export { getArticles };
