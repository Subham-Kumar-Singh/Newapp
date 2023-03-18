import React, { useState, useEffect } from "react";
import axios from "axios";
import getContent from "./Content";

function Data_fetch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=sports&apikey=ad07050197494943b1c37676780b2fb9"
      )
      .then((response) => {
        // console.log(response.data.articles);
        setData(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(data[0].author);
  return (
    <div>
      {/* <div>khbhjwfkwhebdwjeefbwhjb</div> */}
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="card">
              <div className="card-img">
                {item.urlToImage ? (
                  <img
                    src={item.urlToImage}
                    alt="Some alt text"
                    className="card-img"
                    width={280}
                    height={280}
                  />
                ) : (
                  <img
                    className="card-img"
                    width={280}
                    height={280}
                    src="https://cdn.searchenginejournal.com/wp-content/uploads/2023/01/software-suites-63c69a81ad507-sej.jpg"
                    alt="Some alt text"
                  />
                )}
              </div>
              <div className="item-restcontent">
                <h2 className="item-p">{(item.title).substr(0,50)}</h2>
                <p className="item-p">Published At: {item.publishedAt}</p>
                {item.author ? (
                  <p className="item-p">Author: {item.author}</p>
                ) : (
                  <p className="item-p">Author: Sources</p>
                )}
                {item.author ? (
                  <p className="desc">{(item.description).substr(0,150)}</p>
                ) : (
                  <p className="item-p">
                    Learn to estimate ROI & make smart business decisions.
                    Download the on-demand webinar to discover how to allocate
                    budget & select the best SEO keywords. The post How To
                    Predict Your SEO Success: A 5-Step Formula To Help You Win
                    appeared first on Search Engine…
                  </p>
                )}

                {/* {getContent(item.content)} */}
                <div className="item-btn">
                  <button className="url-btn">
                    <a href={item.url}>Read More</a>
                  </button>
                </div>
              </div>

              {/* <p><button>Add to Cart</button></p> */}
            </div>
            {/* <div>
              <div>{item.author}</div>
              <div>{item.title}</div>
              <p></p>
              
              <div></div>
            </div> */}
          </div>
        );
      })}
    </div>
  );
}
export default Data_fetch;
