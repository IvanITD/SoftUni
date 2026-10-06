function getArticleGenerator(articles) {
    let index = 0;

    return function () {
        if (index >= articles.length) {
            return;
        }

        let article = document.createElement('article');
        article.textContent = articles[index];
        document.getElementById('content').appendChild(article);
        index++;
    };
}
