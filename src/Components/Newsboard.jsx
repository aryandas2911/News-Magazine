import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

function Newsboard({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_APP_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h1 className="text-center mt-3 mb-4">
        Latest <span className="badge bg-danger text-light">NEWS</span>
      </h1>

      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ gap: "1rem" }}
      >
        {articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Newsboard;
