import React, { useState } from "react";
import "./DisplayMarsRoverImage.css";

import turquoiseSea from "../../images/marsTour.jpg";
import frozenMount from "../../images/marsTour.jpg";
import archRock from "../../images/marsTour.jpg";
import sunsetView from "../../images/marsTour.jpg";
import snowyMountain from "../../images/marsTour.jpg";

function DisplayMarsRoverImage() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [camera, setCamera] = useState("FHAZ");
  const [sol, setSol] = useState(100);
  const [searchAttempted, setSearchAttempted] = useState(false);

  const getRandomPhotos = (photos, numPhotos) => {
    const shuffled = photos.sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, numPhotos); // Get sub-array of first n elements after shuffled
  };

  const fetchMarsPhotos = async () => {
    setLoading(true);
    setSearchAttempted(true); // Indicate that a search has been attempted
    try {
      const apiKey = "X9zcVNSCdrV6hWt7i27KJSHpcRKhUAONOHwuGu77"; // Replace with your actual API key
      const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (camera === "MAST") {
        setPhotos(getRandomPhotos(data.photos, 12)); // Only take 12 random photos for Mast Camera
      } else {
        setPhotos(data.photos);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div>
      <div className="container mt-5">
        <h1 className="mb-4 text-center">Mars Rover Images</h1>
        <div className="row mb-3 align-items-end">
          <div className="col-md-4">
            <label htmlFor="solInput" className="form-label">
              Enter Sol (Martian Day):
            </label>
            <input
              type="number"
              className="form-control"
              id="solInput"
              value={sol}
              onChange={(e) => setSol(e.target.value)}
              min="0"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="cameraSelect" className="form-label mt-2">
              Choose Camera:
            </label>
            <select
              id="cameraSelect"
              className="form-select"
              value={camera}
              onChange={(e) => setCamera(e.target.value)}
            >
              <option value="FHAZ">Front Hazard Avoidance Camera</option>
              <option value="RHAZ">Rear Hazard Avoidance Camera</option>
              <option value="MAST">Mast Camera</option>
            </select>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-primary w-100 mt-4"
              onClick={fetchMarsPhotos}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="gallery-container">
        {searchAttempted && photos.length === 0 && !loading && (
          <div className="text-center">
            No photos available for this camera on this sol.
          </div>
        )}
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`gallery-item ${
              hoveredId === photo.id ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredId(photo.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={photo.img_src}
              alt={photo.title}
              className="gallery-img"
            />
            <div className="image-caption">
              <h4>{photo.full_name}</h4>
              <p>{photo.rover.name}</p>
              <p>{photo.earth_datee}</p>
              <p className="description">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayMarsRoverImage;
