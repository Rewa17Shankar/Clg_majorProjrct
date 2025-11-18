<<<<<<< HEAD
// // src/api/Api.js
=======
// src/api/Api.js
// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://clg-majorprojrct.onrender.com/api";

async function request(path, opts = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...opts.headers,
    },
    ...opts,
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

export default request; 



>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
// const BASE_URL = "http://localhost:5000/api";
// // const BASE_URL = "https://clg-majorprojrct.onrender.com/api";

// async function request(path, opts = {}) {
<<<<<<< HEAD
//   const res = await fetch(`${BASE_URL}${path}`, {
//     headers: {
//       "Content-Type": "application/json",
//       ...opts.headers,
//     },
//     ...opts,
//   });

//   if (!res.ok) {
//     throw new Error(`API error: ${res.status}`);
//   }

//   return res.json();
// }

// export default request; // 👈 make sure this is there

//updated
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Automatically attach token
API.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsed = JSON.parse(user);
      const token = parsed?.token;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
=======
//   try {
//     const res = await fetch(`${BASE_URL}${path}`, {
//       headers: {
//         "Content-Type": "application/json",
//         ...opts.headers,
//       },
//       ...opts,
//     });

//     // Parse response body
//     const data = await res.json();

//     if (!res.ok) {
//       // Throw the error response from backend
//       throw new Error(data.error || data.message || `API error: ${res.status}`);
//     }

//     return data;
//   } catch (error) {
//     console.error('API Request Error:', error);
//     throw error;
//   }
// }

// export default request;







// const BASE_URL = "http://localhost:5000/api";

// async function request(path, opts = {}) {
//   try {
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
    
//     console.log('🔍 Making API request to:', `${BASE_URL}${path}`);
//     console.log('User from localStorage:', user);
//     console.log('Token exists:', !!user.token);
    
//     const res = await fetch(`${BASE_URL}${path}`, {
//       headers: {
//         "Content-Type": "application/json",
//         ...(user.token && { "Authorization": `Bearer ${user.token}` }),
//         ...opts.headers,
//       },
//       ...opts,
//     });

//     console.log('Response status:', res.status);

//     const data = await res.json();
//     console.log('Response data:', data);

//     if (!res.ok) {
//       throw new Error(data.error || data.message || `API error: ${res.status}`);
//     }

//     return data;
//   } catch (error) {
//     console.error('API Request Error:', error);
//     throw error;
//   }
// }

// export default request;
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
