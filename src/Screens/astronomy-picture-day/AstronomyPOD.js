import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import 'bootstrap/dist/css/bootstrap.min.css';
import './AstronomyPOD.css'; // Import the CSS file here

function AstronomyPOD() {
  const [apod, setApod] = useState(null);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAPOD = async (selectedDate) => {
    setLoading(true);
    const apiKey = 'X9zcVNSCdrV6hWt7i27KJSHpcRKhUAONOHwuGu77';  // Replace with your actual API key
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${selectedDate ? `&date=${selectedDate}` : ''}`;

    try {
      const response = await axios.get(url); // Use Axios to make a GET request
      setApod(response.data); // Set the retrieved data
    } catch (error) {
      setError(error.message); // Handle errors
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPOD();
  }, []);

  const handleDateChange = (event) => {
    setDate(event.target.value);
    fetchAPOD(event.target.value);
  };

  if (loading) return <div className="text-center"><div className="spinner-border text-light" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (error) return <div className="alert alert-danger" role="alert">Error: {error}</div>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Astronomy Picture of the Day</h1>
      <div className="d-flex justify-content-center mb-3">
        <input 
          type="date" 
          className="form-control"
          value={date}
          onChange={handleDateChange}
          max={new Date().toISOString().split('T')[0]}
        />
      </div>
      {apod && (
        <div>
          <h2 className="mb-3" style={{textAlign: 'center'}}>{apod.title}</h2>
          <div className="image-container">
            <img src={apod.url} alt={apod.title} className="img-fluid" />
          </div>
          <p style={{textAlign: 'justify'}}>{apod.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default AstronomyPOD;

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './AstronomyPOD.css'; // Import the CSS file here

// function AstronomyPOD() {
//   const [apod, setApod] = useState(null);
//   const [date, setDate] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchAPOD = async (selectedDate) => {
//     setLoading(true);
//     const apiKey = 'X9zcVNSCdrV6hWt7i27KJSHpcRKhUAONOHwuGu77';  // Replace with your actual API key
//     const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${selectedDate ? `&date=${selectedDate}` : ''}`;

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setApod(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAPOD();
//   }, []);

//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//     fetchAPOD(event.target.value);
//   };

//   if (loading) return <div className="text-center"><div className="spinner-border text-light" role="status"><span className="visually-hidden">Loading...</span></div></div>;
//   if (error) return <div className="alert alert-danger" role="alert">Error: {error}</div>;

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4 text-center">Astronomy Picture of the Day</h1>
//       <div className="d-flex justify-content-center mb-3">
//         <input 
//           type="date" 
//           className="form-control"
//           value={date}
//           onChange={handleDateChange}
//           max={new Date().toISOString().split('T')[0]}
//         />
//       </div>
//       {apod && (
//         <div>
//           <h2 className="mb-3" style={{textAlign: 'center'}}>{apod.title}</h2>
//           <div className="image-container">
//             <img src={apod.url} alt={apod.title} className="img-fluid" />
//           </div>
//           <p style={{textAlign: 'justify'}}>{apod.explanation}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AstronomyPOD;

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function AstronomyPOD() {
//   const [apod, setApod] = useState(null);
//   const [date, setDate] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Handler for fetching APOD data
//   const fetchAPOD = async (selectedDate) => {
//     setLoading(true);
//     const apiKey = 'X9zcVNSCdrV6hWt7i27KJSHpcRKhUAONOHwuGu77';  // Replace with your actual API key
//     const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}${selectedDate ? `&date=${selectedDate}` : ''}`;

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setApod(data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Effect to fetch APOD data on initial render
//   useEffect(() => {
//     fetchAPOD();
//   }, []);

//   // Handle date change
//   const handleDateChange = (event) => {
//     setDate(event.target.value);
//     fetchAPOD(event.target.value);
//   };

//   if (loading) return <div className="text-center"><div className="spinner-border text-light" role="status"><span className="visually-hidden">Loading...</span></div></div>;
//   if (error) return <div className="alert alert-danger" role="alert">Error: {error}</div>;

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4 text-center">Astronomy Picture of the Day</h1>
//       <div className="d-flex justify-content-center mb-3">
//         <input 
//           type="date" 
//           className="form-control"
//           value={date}
//           onChange={handleDateChange}
//           max={new Date().toISOString().split('T')[0]} // Prevent future dates
//         />
//       </div>
//       {apod && (
//         <div>
//           <h2 className="mb-3">{apod.title}</h2>
//           <img src={apod.url} alt={apod.title} className="img-fluid" />
//           <p className="text-muted">{apod.date}</p>
//           <p>{apod.explanation}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AstronomyPOD;
