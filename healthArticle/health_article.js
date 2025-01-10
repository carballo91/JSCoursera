var xhr = new XMLHttpRequest();
var url = './health_article.json';
var news_url = './news_articles.json';
xhr.open('GET',url,true);
xhr.responseType = 'json';
xhr.onload = function(){
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
    
        var title = document.createElement('h2');
        title.textContent = article.title;
    
        var description = document.createElement('p');
        description.textContent = article.description;
    
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
    
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
        });
    
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
    
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
        });
    
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
    
        articlesDiv.appendChild(articleDiv);
    });
    
    
}
xhr.send();
var xhr2 = new XMLHttpRequest();
xhr2.open('GET',news_url,true);
xhr2.responseType = 'json';
xhr2.onload = function(){
    // console.log(xhr2.response);
    let articles = xhr2.response.articles;
    let news_articles = document.getElementById('newsArticles')
    articles.forEach((article) => { 
        let articleDiv = document.createElement('div')

        let title = document.createElement('h2')
        title.textContent = article.title
        
        let content = document.createElement('p')
        content.textContent = article.content

        articleDiv.appendChild(title);
        articleDiv.appendChild(content);

        news_articles.appendChild(articleDiv);

    })
}
xhr2.send()