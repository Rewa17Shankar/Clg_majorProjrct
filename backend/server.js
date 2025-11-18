// import express from "express";
// import dotenv from "dotenv";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import departmentRoutes from "./routes/HR/departmentRoutes.js";
// import designationRoutes from "./routes/HR/designationRoutes.js";
// import attendanceRoutes from "./routes/attendanceRoutes.js";
// import shiftRoutes from "./routes/HR/shiftRoutes.js";
// import leaveRoutes from "./routes/HR/leaveRoutes.js";
// import recruitmentRoutes from "./routes/HR/recruitmentRoutes.js";
// import payrollRoutes from "./routes/HR/payrollRoutes.js";
// import resignationRoutes from "./routes/HR/resignationRoutes.js";
// import employeeRoutes from "./routes/HR/employeeRoutes.js";
// import teamRoutes from "./routes/MANAGER/teamRoutes.js";
// import performanceRoutes from "./routes/MANAGER/performanceRoutes.js";
<<<<<<< HEAD
// // import goalRoutes from "./routes/goalRoutes.js";
// import goalsTasksRoutes from "./routes/MANAGER/goalsTasksRoutes.js";
// import assetsRoutes from "./routes/MANAGER/assets.js";
// // import assetsRoutes from "./routes/assetsRoutes.js";
=======
// import goalsTasksRoutes from "./routes/MANAGER/goalsTasksRoutes.js";
// import assetsRoutes from "./routes/MANAGER/assets.js";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
// import announcementsRoutes from "./routes/MANAGER/announcementsRoutes.js";
// import feedbackGrievanceRoutes from "./routes/MANAGER/feedbackGrievanceRoutes.js";
// import meetingsRoutes from "./routes/MANAGER/meetingsRoutes.js";
// import trainingRoutes from "./routes/MANAGER/trainingRoutes.js";
// import skillsRoutes from "./routes/MANAGER/skillsRoutes.js";
<<<<<<< HEAD
// import cors from "cors";
=======
// // import aiRoutes from "./routes/AI/aiRoutes.js";
// import cors from "cors";

>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
// dotenv.config();

// const app = express();

<<<<<<< HEAD
// app.use(cors({
//   origin: 'https://clg-major-projrct.vercel.app', 
//   credentials: true // if you need cookies
// }));
// // app.use(cors());
=======
// // ✅ FIXED: Allow both localhost and production
// const allowedOrigins = [
//   'http://localhost:5173',
//   'http://localhost:5174',
//   'http://localhost:3000',
//   'https://clg-major-projrct.vercel.app'
// ];

// app.use(cors({
//   origin: function(origin, callback) {
//     // Allow requests with no origin (mobile apps, Postman, etc.)
//     if (!origin) return callback(null, true);
    
//     if (allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
// }));

>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/departments", departmentRoutes);
// app.use("/api/designations", designationRoutes);
// app.use("/api/attendance", attendanceRoutes);
// app.use("/api/shifts", shiftRoutes);
// app.use("/api/leaves", leaveRoutes);
// app.use("/api/recruitment", recruitmentRoutes);
// app.use("/api/payroll", payrollRoutes);
// app.use("/api/resignations", resignationRoutes);
// app.use("/api/employees", employeeRoutes);
// app.use("/api/performance", performanceRoutes);
<<<<<<< HEAD
// // app.use("/api/goals", goalRoutes);
// app.use("/api/assets", assetsRoutes);
// app.use("/api/teams", teamRoutes);
// // app.use("/api/assets", assetsRoutes);
=======
// app.use("/api/assets", assetsRoutes);
// app.use("/api/teams", teamRoutes);
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
// app.use("/api/announcements", announcementsRoutes);
// app.use("/api/feedback-grievance", feedbackGrievanceRoutes);
// app.use("/api/meetings", meetingsRoutes);
// app.use("/api/goals-tasks", goalsTasksRoutes);
// app.use("/api/trainings", trainingRoutes);
// app.use("/api/skills", skillsRoutes);
<<<<<<< HEAD
=======
// // app.use("/api/ai", aiRoutes);

>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
// // Default route
// app.get("/", (req, res) => {
//   res.send("HRMS Backend Running...");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
<<<<<<< HEAD
//   console.log(`Server running on port ${PORT}`);import express from "express";
=======
//   console.log(`Server running on port ${PORT}`);
// });



// // server.js
// import express from "express";
// import dotenv from "dotenv";
// import crypto from "crypto";
// import cors from "cors";

// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import departmentRoutes from "./routes/HR/departmentRoutes.js";
// import designationRoutes from "./routes/HR/designationRoutes.js";
// import attendanceRoutes from "./routes/attendanceRoutes.js";
// import shiftRoutes from "./routes/HR/shiftRoutes.js";
// import leaveRoutes from "./routes/HR/leaveRoutes.js";
// import recruitmentRoutes from "./routes/HR/recruitmentRoutes.js";
// import payrollRoutes from "./routes/HR/payrollRoutes.js";
// import resignationRoutes from "./routes/HR/resignationRoutes.js";
// import employeeRoutes from "./routes/HR/employeeRoutes.js";
// import teamRoutes from "./routes/MANAGER/teamRoutes.js";
// import performanceRoutes from "./routes/MANAGER/performanceRoutes.js";
// import goalsTasksRoutes from "./routes/MANAGER/goalsTasksRoutes.js";
// import assetsRoutes from "./routes/MANAGER/assets.js";
// import announcementsRoutes from "./routes/MANAGER/announcementsRoutes.js";
// import feedbackGrievanceRoutes from "./routes/MANAGER/feedbackGrievanceRoutes.js";
// import meetingsRoutes from "./routes/MANAGER/meetingsRoutes.js";
// import trainingRoutes from "./routes/MANAGER/trainingRoutes.js";
// import skillsRoutes from "./routes/MANAGER/skillsRoutes.js";
// // import aiRoutes from "./routes/AI/aiRoutes.js";

// dotenv.config();

// const app = express();

// // ------ CORS / Allowed origins ------
// // --- CORS (safer, with helpful logging) ---
// // --- CORS: permissive in development, strict in production ---
// const allowedOrigins = [
//   "http://localhost:5173",
//   "http://localhost:5174",
//   "http://localhost:3000",
//   "https://clg-major-projrct.vercel.app",
//   "https://gateway-neon.vercel.app",
//   "https://gateway-git-main-yug-bothras-projects.vercel.app",
//   "https://gateway-8q8qwrsyp-yug-bothras-projects.vercel.app"
// ];

// app.use((req, res, next) => {
//   const origin = req.headers.origin;
//   if (origin) console.log("Incoming request origin:", origin);
//   next();
// });

// app.use((req, res, next) => {
//   // In production keep strict whitelist
//   if (process.env.NODE_ENV === "production") {
//     // Use CORS middleware with whitelist check in production
//     return cors({
//       origin: (origin, callback) => {
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.includes(origin)) return callback(null, true);
//         return callback(new Error("Not allowed by CORS"));
//       },
//       credentials: true,
//       methods: ["GET","POST","PUT","DELETE","PATCH","OPTIONS"],
//       allowedHeaders: ["Content-Type","Authorization"]
//     })(req, res, next);
//   }

//   // In development allow everything (avoids origin headaches)
//   return cors({
//     origin: true,
//     credentials: true,
//     methods: ["GET","POST","PUT","DELETE","PATCH","OPTIONS"],
//     allowedHeaders: ["Content-Type","Authorization"]
//   })(req, res, next);
// });



// // ------ Body parsers ------
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // for PayU form POSTs

// // ------ Simple request logger (temporary, helpful) ------
// app.use((req, res, next) => {
//   console.log(new Date().toISOString(), req.method, req.originalUrl);
//   next();
// });

// // ------ Helper: generate PayU hash (sha512) ------
// function generateHash({ key, txnid, amount, productinfo, firstname, email, salt }) {
//   // key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|salt
//   // udf fields left empty
//   const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
//   return crypto.createHash("sha512").update(hashString).digest("hex");
// }

// // ------ Payment route: initiate payment, return action + params ------
// app.post("/api/payment", (req, res) => {
//   try {
//     const { amount, productinfo, firstname, email, phone } = req.body;

//     if (!amount || !productinfo || !firstname || !email || !phone) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const key = process.env.PAYU_KEY;
//     const salt = process.env.PAYU_SALT;
//     const baseUrl = process.env.PAYU_BASE_URL || "https://sandboxsecure.payu.in/_payment";

//     if (!key || !salt) {
//       return res.status(500).json({ error: "PAYU_KEY or PAYU_SALT not configured in environment" });
//     }

//     // Create a unique txnid
//     const txnid = "txn" + Date.now();

//     // (Optional) TODO: persist transaction to DB here with status 'initiated' and txnid

//     const hash = generateHash({ key, txnid, amount, productinfo, firstname, email, salt });

//     // Backend callback (where PayU will POST result) - point to your backend endpoint
//     const callbackUrl = process.env.NODE_ENV === "production"
//       // Replace with your production backend domain (API host)
//       ? "https://clg-major-projrct.vercel.app/api/payu-callback"
//       : "http://localhost:5000/api/payu-callback";

//     const response = {
//       action: baseUrl,
//       params: {
//         key,
//         txnid,
//         amount,
//         productinfo,
//         firstname,
//         email,
//         phone,
//         surl: callbackUrl,
//         furl: callbackUrl,
//         hash
//       }
//     };

//     return res.json(response);
//   } catch (error) {
//     console.error("Payment API error:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// });

// /**
//  * PayU callback route
//  * PayU will POST form data here (surl/furl). We verify the hash server-side and then redirect the user
//  * to the frontend GET route (role-select / payment-failed).
//  */
// app.post("/api/payu-callback", (req, res) => {
//   try {
//     const body = req.body;

//     const {
//       status,
//       firstname,
//       email,
//       txnid,
//       amount,
//       productinfo,
//       key,
//       hash: response_hash,
//       additionalCharges
//     } = body;

//     const udf1 = body.udf1 || "";
//     const udf2 = body.udf2 || "";
//     const udf3 = body.udf3 || "";
//     const udf4 = body.udf4 || "";
//     const udf5 = body.udf5 || "";

//     const salt = process.env.PAYU_SALT;
//     if (!salt) {
//       console.error("PAYU_SALT missing in env");
//       return res.status(500).send("Server misconfigured");
//     }

//     // Reverse hash sequence per PayU docs:
//     // if additionalCharges present: additionalCharges|salt|status|udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key
//     // else: salt|status|udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key
//     let hashSequence;
//     if (additionalCharges) {
//       hashSequence = `${additionalCharges}|${salt}|${status}|${udf5}|${udf4}|${udf3}|${udf2}|${udf1}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
//     } else {
//       hashSequence = `${salt}|${status}|${udf5}|${udf4}|${udf3}|${udf2}|${udf1}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
//     }

//     const calculatedHash = crypto.createHash("sha512").update(hashSequence).digest("hex");

//     // Frontend GET routes to redirect to after verification
//     const successUrl = process.env.NODE_ENV === "production"
//       ? "https://clg-major-projrct.vercel.app/role-select"
//       : "http://localhost:5173/role-select";

//     const failureUrl = process.env.NODE_ENV === "production"
//       ? "https://clg-major-projrct.vercel.app/payment-failed"
//       : "http://localhost:5173/payment-failed";

//     // Verify
//     if (!response_hash || calculatedHash !== String(response_hash)) {
//       console.warn("PayU hash mismatch", { calculatedHash, response_hash });
//       // Optional: update DB transaction status = 'hash_mismatch'
//       return res.redirect(failureUrl);
//     }

//     // Hash matches - check status
//     if (status && String(status).toLowerCase().includes("success")) {
//       // Optional: update DB transaction status = 'success' using txnid
//       return res.redirect(successUrl);
//     } else {
//       // Optional: update DB transaction status = 'failed' using txnid
//       return res.redirect(failureUrl);
//     }
//   } catch (err) {
//     console.error("PayU callback error", err);
//     return res.status(500).send("Server error");
//   }
// });

// // --- Mount existing routes (keep these after payment routes) ---
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/departments", departmentRoutes);
// app.use("/api/designations", designationRoutes);
// app.use("/api/attendance", attendanceRoutes);
// app.use("/api/shifts", shiftRoutes);
// app.use("/api/leaves", leaveRoutes);
// app.use("/api/recruitment", recruitmentRoutes);
// app.use("/api/payroll", payrollRoutes);
// app.use("/api/resignations", resignationRoutes);
// app.use("/api/employees", employeeRoutes);
// app.use("/api/performance", performanceRoutes);
// app.use("/api/assets", assetsRoutes);
// app.use("/api/teams", teamRoutes);
// app.use("/api/announcements", announcementsRoutes);
// app.use("/api/feedback-grievance", feedbackGrievanceRoutes);
// app.use("/api/meetings", meetingsRoutes);
// app.use("/api/goals-tasks", goalsTasksRoutes);
// app.use("/api/trainings", trainingRoutes);
// app.use("/api/skills", skillsRoutes);
// // app.use("/api/ai", aiRoutes);

// // Default route
// app.get("/", (req, res) => {
//   res.send("HRMS Backend Running...");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5


import express from "express";
import dotenv from "dotenv";
<<<<<<< HEAD
import cors from "cors";

dotenv.config();
const app = express();

// ================================
// Middleware
// ================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allowed Origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "https://clg-major-projrct.vercel.app",
];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.includes(origin)) callback(null, true);
//       else callback(new Error("Not allowed by CORS"));
//     },
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      "https://clg-major-projrct.vercel.app",
    ],
    methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true   
  })
);

// ================================
// Import Routes
// ================================

// Auth & User
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// HR MODULE
=======
import crypto from "crypto";
import cors from "cors";

// ---- Import all your module routes ----
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
import departmentRoutes from "./routes/HR/departmentRoutes.js";
import designationRoutes from "./routes/HR/designationRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import shiftRoutes from "./routes/HR/shiftRoutes.js";
import leaveRoutes from "./routes/HR/leaveRoutes.js";
import recruitmentRoutes from "./routes/HR/recruitmentRoutes.js";
import payrollRoutes from "./routes/HR/payrollRoutes.js";
import resignationRoutes from "./routes/HR/resignationRoutes.js";
<<<<<<< HEAD
import employeeHRRoutes from "./routes/HR/employeeRoutes.js";

// MANAGER MODULE
=======
import employeeRoutes from "./routes/HR/employeeRoutes.js";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
import teamRoutes from "./routes/MANAGER/teamRoutes.js";
import performanceRoutes from "./routes/MANAGER/performanceRoutes.js";
import goalsTasksRoutes from "./routes/MANAGER/goalsTasksRoutes.js";
import assetsRoutes from "./routes/MANAGER/assets.js";
import announcementsRoutes from "./routes/MANAGER/announcementsRoutes.js";
import feedbackGrievanceRoutes from "./routes/MANAGER/feedbackGrievanceRoutes.js";
import meetingsRoutes from "./routes/MANAGER/meetingsRoutes.js";
import trainingRoutes from "./routes/MANAGER/trainingRoutes.js";
import skillsRoutes from "./routes/MANAGER/skillsRoutes.js";
<<<<<<< HEAD
import managerSubmissionRoutes from "./routes/MANAGER/taskSubmissionsRoutes.js";
import assetRequestRoutes from "./routes/MANAGER/assetRequestRoutes.js";

// EMPLOYEE MODULE
import employeeRoutes from "./routes/Employee/employeeRoutes.js";
import taskRoutes from "./routes/Employee/taskRoutes.js";
import employeeAssetRoutes from "./routes/Employee/assetRoutes.js"; 
import employeeManagerRoutes from "./routes/Employee/managerRoutes.js";//fo manager list in asset
import employeeAnnouncementsRoutes from "./routes/Employee/employeeAnnouncementsRoutes.js";
import employeeTrainingRoutes from "./routes/Employee/trainingRoutes.js";
import employeeDesignationRoutes from "./routes/Employee/designationRoutes.js";
import employeeMeetingRoutes from "./routes/Employee/meetingRoutes.js";




// ================================
// Route Mapping
// ================================

// Auth
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// HR
=======
// import aiRoutes from "./routes/AI/aiRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- CORS config ---
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  "https://clg-major-projrct.vercel.app",
  "https://gateway-neon.vercel.app",
  "https://gateway-git-main-yug-bothras-projects.vercel.app",
  "https://gateway-8q8qwrsyp-yug-bothras-projects.vercel.app"
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) console.log("Incoming request origin:", origin);
  next();
});

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") {
    return cors({
      origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        return callback(new Error("Not allowed by CORS"));
      },
      credentials: true,
      methods: ["GET","POST","PUT","DELETE","PATCH","OPTIONS"],
      allowedHeaders: ["Content-Type","Authorization"]
    })(req, res, next);
  }
  return cors({
    origin: true,
    credentials: true,
    methods: ["GET","POST","PUT","DELETE","PATCH","OPTIONS"],
    allowedHeaders: ["Content-Type","Authorization"]
  })(req, res, next);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Needed for PayU POST payloads

// ---- Request logging (optional) ----
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.originalUrl);
  next();
});

// ---- PayU helper: hash ----
function generateHash({ key, txnid, amount, productinfo, firstname, email, salt }) {
  // key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|salt
  return crypto.createHash("sha512")
    .update(`${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`)
    .digest("hex");
}

// ---- Payment Initiation ----
app.post("/api/payment", (req, res) => {
  try {
    const { amount, productinfo, firstname, email, phone } = req.body;
    if (!amount || !productinfo || !firstname || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const key = process.env.PAYU_KEY;
    const salt = process.env.PAYU_SALT;
    const baseUrl = process.env.PAYU_BASE_URL || "https://sandboxsecure.payu.in/_payment";
    if (!key || !salt) {
      return res.status(500).json({ error: "PAYU_KEY or PAYU_SALT not configured in environment" });
    }
    const txnid = "txn" + Date.now();
    const hash = generateHash({ key, txnid, amount, productinfo, firstname, email, salt });
    // --- Point PayU result POSTs to actual frontend SPA routes
    const FRONTEND_URL = process.env.NODE_ENV === "production"
      ? "https://clg-major-projrct.vercel.app"
      : "http://localhost:5173"; // <- YOUR local SPA for testing
    const response = {
      action: baseUrl,
      params: {
        key,
        txnid,
        amount,
        productinfo,
        firstname,
        email,
        phone,
        surl: `${FRONTEND_URL}/success`,       // <-- redirect to /success after payment
        furl: `${FRONTEND_URL}/payment-failed`,// <-- redirect to /payment-failed on failure
        hash,
      }
    };
    return res.json(response);
  } catch (error) {
    console.error("Payment API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// ---- If you want backend PayU callback for audit/logging ----
app.post("/api/payu-callback", (req, res) => {
  try {
    const body = req.body;
    const {
      status,
      firstname, email, txnid, amount, productinfo, key, hash: response_hash, additionalCharges
    } = body;
    const udf1 = body.udf1 || "";
    const udf2 = body.udf2 || "";
    const udf3 = body.udf3 || "";
    const udf4 = body.udf4 || "";
    const udf5 = body.udf5 || "";
    const salt = process.env.PAYU_SALT;
    if (!salt) {
      console.error("PAYU_SALT missing in env");
      return res.status(500).send("Server misconfigured");
    }
    // Construct hash for verification as per PayU docs
    let hashSequence;
    if (additionalCharges) {
      hashSequence = `${additionalCharges}|${salt}|${status}|${udf5}|${udf4}|${udf3}|${udf2}|${udf1}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
    } else {
      hashSequence = `${salt}|${status}|${udf5}|${udf4}|${udf3}|${udf2}|${udf1}|${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
    }
    const calculatedHash = crypto.createHash("sha512").update(hashSequence).digest("hex");
    // Frontend SPA payment result routes
    const successUrl = process.env.NODE_ENV === "production"
      ? "https://clg-major-projrct.vercel.app/success"
      : "http://localhost:5173/success";
    const failureUrl = process.env.NODE_ENV === "production"
      ? "https://clg-major-projrct.vercel.app/payment-failed"
      : "http://localhost:5173/payment-failed";
    // Verify hash and result
    if (!response_hash || calculatedHash !== String(response_hash)) {
      console.warn("PayU hash mismatch", { calculatedHash, response_hash });
      return res.redirect(failureUrl);
    }
    if (status && String(status).toLowerCase().includes("success")) {
      return res.redirect(successUrl);
    } else {
      return res.redirect(failureUrl);
    }
  } catch (err) {
    console.error("PayU callback error", err);
    return res.status(500).send("Server error");
  }
});

// ---- HRMS: Mount all imported feature routes ----
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
app.use("/api/departments", departmentRoutes);
app.use("/api/designations", designationRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/shifts", shiftRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/recruitment", recruitmentRoutes);
<<<<<<< HEAD
app.use("/api/hr/payroll", payrollRoutes);
app.use("/api/hr/employees", employeeHRRoutes);
app.use("/api/resignations", resignationRoutes);

// MANAGER
app.use("/api/performance", performanceRoutes);
app.use("/api/assets", assetsRoutes);
app.use("/api/teams", teamRoutes);
=======
app.use("/api/payroll", payrollRoutes);
app.use("/api/resignations", resignationRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/performance", performanceRoutes);
app.use("/api/assets", assetsRoutes);
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
app.use("/api/announcements", announcementsRoutes);
app.use("/api/feedback-grievance", feedbackGrievanceRoutes);
app.use("/api/meetings", meetingsRoutes);
app.use("/api/goals-tasks", goalsTasksRoutes);
app.use("/api/trainings", trainingRoutes);
app.use("/api/skills", skillsRoutes);
<<<<<<< HEAD
app.use("/api/manager/submissions", managerSubmissionRoutes);
app.use("/api/manager/asset-requests", assetRequestRoutes);

// EMPLOYEE
app.use("/api/employee", employeeRoutes);        // profile, attendance, leaves, payroll etc
app.use("/api/employee/tasks", taskRoutes);  
app.use("/api/employee-assets", employeeAssetRoutes);    
app.use("/api/employee/managers", employeeManagerRoutes);
app.use("/api/employee/announcements", employeeAnnouncementsRoutes);
app.use("/api/employee/trainings", employeeTrainingRoutes);
app.use("/api/employee/designation", employeeDesignationRoutes);
app.use("/api/employee/meetings", employeeMeetingRoutes);



// Default Route
app.get("/", (req, res) => {
  res.send("🚀 HRMS Backend Running Successfully!");
});

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

export default app;
=======
// app.use("/api/ai", aiRoutes);

// ---- Default root route for health ----
app.get("/", (req, res) => {
  res.send("HRMS Backend Running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
