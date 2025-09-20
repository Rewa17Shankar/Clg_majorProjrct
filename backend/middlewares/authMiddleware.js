// // import jwt from "jsonwebtoken";

// // const JWT_SECRET = process.env.JWT_SECRET || "mysecret";

// // // ✅ Verify JWT
// // export const authMiddleware = (req, res, next) => {
// //   const token = req.headers["authorization"]?.split(" ")[1];
// //   if (!token) return res.status(401).json({ error: "No token provided" });

// //   try {
// //     const decoded = jwt.verify(token, JWT_SECRET);
// //     req.user = decoded;
// //     next();
// //   } catch (err) {
// //     res.status(401).json({ error: "Invalid token" });
// //   }
// // };



// import jwt from "jsonwebtoken";

// const JWT_SECRET = process.env.JWT_SECRET;
// if (!JWT_SECRET) {
//   throw new Error("❌ JWT_SECRET is not defined in environment variables");
// }

// export const authMiddleware = (req, res, next) => {
//   try {
//     const authHeader = req.headers["authorization"];

//     // ✅ Check if Authorization header exists and starts with Bearer
//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//       return res.status(401).json({ error: "Unauthorized: No token provided" });
//     }

//     const token = authHeader.split(" ")[1];

//     // ✅ Verify token
//     const decoded = jwt.verify(token, JWT_SECRET);

//     // ✅ Attach decoded user data to request
//     req.user = decoded;

//     next();
//   } catch (err) {
//     return res.status(401).json({
//       error:
//         err.name === "TokenExpiredError"
//           ? "Unauthorized: Token expired"
//           : "Unauthorized: Invalid token",
//     });
//   }
// };


import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // 👈 decoded must contain { id: userId }
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
