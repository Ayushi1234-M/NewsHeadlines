import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function NewsItem() {
  const [data, setData] = useState({ articles: [] , totalResults: 0});

  const[page, setPage]=useState(1);

  const[loading, setLoading]=useState(false);

  const newsData = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=c8041fb785b04416afadcd6f955a019e&page=${page}&pageSize=8`
      );
      console.log(res);
      const d = await res.json();
      setData({ articles: d.articles, totalResults:d.totalResults });
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false);
    }
  };


  useEffect(() => {
    newsData();
  }, [page]);


  function handlePrev(){
    setPage(page-1);
    
  }

  function handleNext(){
    setPage(page+1);
  }


  return (
    <div>

{
  loading &&    <Spinner></Spinner>
}
   
  

  <div className="cards-news">
  {data.articles.map((i, index) => (
    // Check if urlToImage, title, and description are not null
    (i.urlToImage && i.title && i.description && i.urlToImage) && (
      <div key={index} className="card" style={{ width: "18rem" }}>
        <img src={i.urlToImage} className="card-img-top" alt="News" />
        <div className="card-body">
          <h5 className="card-title">{i.title.slice(0,30)}...</h5>
          <p className="card-text">{i.description.slice(0, 88)}...</p>
          <a href={i.url} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    )
  ))}
</div>

<div className="buttons">
<button type="button" class="btn btn-warning" onClick={handlePrev} disabled={page===1}>&larr; Back</button>
<button type="button" class="btn btn-success" onClick={handleNext} disabled={page * 8 >= data.totalResults}>Next &rarr;</button>
</div>


    </div>
  );
}
