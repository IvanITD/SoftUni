function comments(input) {
    let users = {};
    let articles = {};
    let commentsByArticle = {};

    for (let line of input) {
        if (line.startsWith('user ')) {
            let username = line.replace('user ', '');

            users[username] = true;
        } else if (line.startsWith('article ')) {
            let articleName = line.replace('article ', '');

            articles[articleName] = true;
        } else if (line.includes(' posts on ')) {
            let postParts = line.split(' posts on ');
            let username = postParts[0];
            let rest = postParts[1];

            let articleParts = rest.split(': ');
            let articleName = articleParts[0];
            let titleAndContent = articleParts[1];

            let commaIndex = titleAndContent.indexOf(', ');
            let title = titleAndContent.substring(0, commaIndex);
            let content = titleAndContent.substring(commaIndex + 2);

            if (users[username] && articles[articleName]) {
                if (!commentsByArticle[articleName]) {
                    commentsByArticle[articleName] = [];
                }

                commentsByArticle[articleName].push ({
                    user: username,
                    title: title,
                    content: content
                });
            }
        }
    }

    let articleNames = Object.keys(commentsByArticle);

    articleNames.sort((a, b) => {
        return commentsByArticle[b].length - commentsByArticle[a].length;
    });

    for (let articleName of articleNames) {
        console.log(`Comments on ${articleName}`);

        let articleComments = commentsByArticle[articleName];

        articleComments.sort((a, b) => a.user.localeCompare(b.user));

        for (let comment of articleComments) {
            console.log(`--- From user ${comment.user}: ${comment.title} - ${comment.content}`);
        }
    }

}

comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 
    'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 
    'uSeR4 posts on Books: I like books, I do really like them', 
    'uSeR4 posts on Movies: I also like movies, I really do', 
    'someUser posts on Shopping: title, I go shopping every day', 
    'someUser posts on Movies: Like, I also like movies very much']);
console.log('--------------------------------');
comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 
    'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 
    'someUser posts on Movies: Like']);