// AnimatedImageCard.js
import React, { useState } from "react";
import "./DisplayNasaImages.css";


function DisplayNasaImages() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  const fetchImages = async () => {
    setLoading(true);
    setSearchAttempted(true);
    try {
      const apiKey = "X9zcVNSCdrV6hWt7i27KJSHpcRKhUAONOHwuGu77"; // Replace with your actual API key
      const url = `https://images-api.nasa.gov/search?q=${encodeURIComponent(
        query
      )}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setImages(data.collection.items);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="alternating-cards-container">
      <h1 className="mb-4 text-center">
        Search and Explore NASA related Articles
      </h1>
      <div className="row mb-3 align-items-end">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Enter search term"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary w-100 mb-3" onClick={fetchImages}>
            Search
          </button>
        </div>
      </div>
      {loading && <div className="text-center"><div className="spinner-border text-light" role="status"><span className="visually-hidden">Loading...</span></div></div>}
      {error && <div className="alert alert-danger" role="alert">Error: {error}</div>}
      {searchAttempted && images.length === 0 && !loading && (
        <div className="text-center">No images found for this query.</div>
      )}

      {images.map((card, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={index} className="alternating-card">
            {isEven ? (
              <>
                <div className="image-side">
                  <img
                    src={card.links[0].href}
                    alt={card.data[0].title}
                    className="alternating-img"
                  />
                </div>
                <div className="content-side">
                  <span className="category">category</span>
                  <h2>{card.data[0].title}</h2>
                  <p>{card.data[0].description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="content-side">
                  <span className="category">{card.category}</span>
                  <h2>{card.data[0].title}</h2>
                  <p>{card.data[0].description}</p>
                  {/* <a href="#" className="cta">{card.cta}</a> */}
                </div>
                <div className="image-side">
                  <img
                    src={card.links[0].href}
                    alt={card.data[0].title}
                    className="alternating-img"
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default DisplayNasaImages;
