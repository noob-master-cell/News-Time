import React, { Component } from "react";
import imageNull from "./imageNull.jpg";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, newsTime, author, source } =
      this.props;
    return (
      <div>
        <div className="card my-3">
          <span className="badge text-bg-danger">{source}</span>
          <img
            src={!imgUrl ? imageNull : imgUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "16rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 50) : ""}...</h5>
            <p className="card-text">
              {description ? description.slice(0, 80) : "Click on read more"}
              ...
            </p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                By{" "}
                {!author || author.substr(0, 4) === "http"
                  ? "Unknown"
                  : author}{" "}
                on {new Date(newsTime).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
