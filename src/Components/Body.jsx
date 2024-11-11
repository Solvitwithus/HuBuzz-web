
import { useEffect } from "react";
import { useState } from "react";
import Newsitem from "./Newsitem";

function NewsBoard  ({category})  {
    const [article,setArticle] = useState([])
    useEffect (()=>{
        let url = `
https://newsapi.org/v2/everything?q=tesla&from=2024-09-29&sortBy=publishedAt&apiKey=f01df4d6783644a39fdff92fa3430384`
        fetch(url).then(response=>response.json()).then(data=> setArticle(data.articles))
    },[category])
  return (
    <section>
      
        {article.map((news,index)=>{
return<Newsitem key={index} title = {news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </section>
  )
}

export default NewsBoard;
