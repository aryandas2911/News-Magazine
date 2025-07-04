import { useState } from "react";

function Newsboard() {
  const [articles, setArticles] = useState();

  return (
    <div>
      <h1 className="text-center mt-3">
        Latest <span className="badge bg-danger text-light">NEWS</span>
      </h1>
    </div>
  );
}

export default Newsboard;
