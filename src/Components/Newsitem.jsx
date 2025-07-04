import image from "../assets/news.jpeg";
import "./Newsitem.css";

function Newsitem({ title, description, src, url }) {
  return (
    <div
      className="card bg-dark text-light d-flex flex-column"
      style={{
        width: "335px",
        height: "450px",
      }}
    >
      <div style={{ padding: "0.5rem" }}>
        <img
          src={src || image}
          className="card-img-top"
          alt={title}
          style={{
            height: "180px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title?.slice(0, 50)}</h5>
        <p className="card-text flex-grow-1">
          {description
            ? description.slice(0, 90)
            : "News information not found"}
        </p>
        <a href={url} className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
}

export default Newsitem;
