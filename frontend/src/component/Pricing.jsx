<<<<<<< HEAD
import { Check } from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('individual');
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const individualPlans = [
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
          <path d="M12 8v8M8 12h8" strokeWidth="1.5"/>
        </svg>
      ),
      name: 'Free',
      subtitle: 'Meet OnBoard-X',
      price: '$0',
      period: '',
      buttonText: 'Use OnBoard-X for free',
      buttonStyle: 'secondary',
      features: [
        'Up to 10 employees',
        'Basic attendance tracking',
        'Leave management',
        'Employee directory',
        'Email support'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
          <path d="M12 6v12M6 12l6-6 6 6" strokeWidth="1.5"/>
        </svg>
      ),
      name: 'Pro',
      subtitle: 'Research, code, and organize',
      price: billingPeriod === 'monthly' ? '$149' : '$129',
      period: billingPeriod === 'monthly' ? '/month billed monthly' : '/month billed annually',
      buttonText: 'Get Pro plan',
      buttonStyle: 'primary',
      popular: false,
      features: [
        'Everything in Free and:',
        'Up to 200 employees',
        'Advanced attendance & shifts',
        'Payroll automation',
        'Performance reviews',
        'Custom workflows',
        'API access',
        'Priority support'
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
          <path d="M8 12h8M12 8v8" strokeWidth="1.5"/>
          <path d="M16 8l-8 8M8 8l8 8" strokeWidth="1.5"/>
        </svg>
      ),
      name: 'Max',
      subtitle: 'Higher limits, priority access',
      price: 'From $299',
      period: '/month billed monthly',
      buttonText: 'Get Max plan',
      buttonStyle: 'secondary',
      highlight: true,
      features: [
        'Everything in Pro, plus:',
        'Choose 5x or 20x more usage than Pro*',
        'Higher output limits for all tasks',
        'Early access to advanced features',
        'Priority access at high traffic times',
        'Dedicated account manager'
=======
// import { Check } from 'lucide-react';
// import { useState } from 'react';

// export default function Pricing() {
//   const [activeTab, setActiveTab] = useState('individual');
//   const [billingPeriod, setBillingPeriod] = useState('monthly');

//   const individualPlans = [
//     {
//       icon: (
//         <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
//           <path d="M12 8v8M8 12h8" strokeWidth="1.5"/>
//         </svg>
//       ),
//       name: 'Free',
//       subtitle: 'Meet OnBoard-X',
//       price: '$0',
//       period: '',
//       buttonText: 'Use OnBoard-X for free',
//       buttonStyle: 'secondary',
//       features: [
//         'Up to 10 employees',
//         'Basic attendance tracking',
//         'Leave management',
//         'Employee directory',
//         'Email support'
//       ]
//     },
//     {
//       icon: (
//         <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
//           <path d="M12 6v12M6 12l6-6 6 6" strokeWidth="1.5"/>
//         </svg>
//       ),
//       name: 'Pro',
//       subtitle: 'Research, code, and organize',
//       price: billingPeriod === 'monthly' ? '$149' : '$129',
//       period: billingPeriod === 'monthly' ? '/month billed monthly' : '/month billed annually',
//       buttonText: 'Get Pro plan',
//       buttonStyle: 'primary',
//       popular: false,
//       features: [
//         'Everything in Free and:',
//         'Up to 200 employees',
//         'Advanced attendance & shifts',
//         'Payroll automation',
//         'Performance reviews',
//         'Custom workflows',
//         'API access',
//         'Priority support'
//       ]
//     },
//     {
//       icon: (
//         <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//           <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
//           <path d="M8 12h8M12 8v8" strokeWidth="1.5"/>
//           <path d="M16 8l-8 8M8 8l8 8" strokeWidth="1.5"/>
//         </svg>
//       ),
//       name: 'Max',
//       subtitle: 'Higher limits, priority access',
//       price: 'From $299',
//       period: '/month billed monthly',
//       buttonText: 'Get Max plan',
//       buttonStyle: 'secondary',
//       highlight: true,
//       features: [
//         'Everything in Pro, plus:',
//         'Choose 5x or 20x more usage than Pro*',
//         'Higher output limits for all tasks',
//         'Early access to advanced features',
//         'Priority access at high traffic times',
//         'Dedicated account manager'
//       ]
//     }
//   ];

//   const teamPlans = [
//     {
//       name: 'Team',
//       subtitle: 'For collaboration across organizations',
//       buttonText: 'Get a Team plan',
//       buttonStyle: 'secondary',
//       seats: [
//         { name: 'Standard seat', price: '$25', description: 'Chat, projects, and more', details: 'Per person / month with annual subscription discount. $30 if billed monthly. Minimum 5 members.' },
//         { name: 'Premium seat', price: '$150', description: 'Includes Premium Features', details: 'Per person / month. Minimum 5 members.' }
//       ],
//       features: [
//         'Everything in Pro*, plus:',
//         'More usage',
//         'Central billing and administration',
//         'Early access to collaboration features',
//         'Premium features available with premium seat'
//       ]
//     },
//     {
//       name: 'Enterprise',
//       subtitle: 'For businesses operating at scale',
//       buttonText: 'Contact sales',
//       buttonStyle: 'primary',
//       features: [
//         'Everything in Team, plus:',
//         'More usage',
//         'Enhanced context window',
//         'Single sign-on (SSO) and domain capture',
//         'Role-based access with fine grained permissioning',
//         'System for Cross-domain Identity Management (SCIM)',
//         'Audit logs',
//         'Google Docs cataloging',
//         'Premium features available with premium seat',
//         'Compliance API for observability and monitoring'
//       ]
//     }
//   ];

//   return (
//     <section id="pricing" className="relative py-20 bg-slate-950 overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAyMTIsIDI1NSwgMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

//       <div className="container mx-auto px-6 relative z-10 max-w-7xl">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
//             Plans that grow with you
//           </h2>

//           {/* Tabs */}
//           <div className="inline-flex gap-2 p-1 bg-slate-900/50 rounded-lg border border-slate-800">
//             <button
//               onClick={() => setActiveTab('individual')}
//               className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
//                 activeTab === 'individual'
//                   ? 'bg-slate-800 text-white'
//                   : 'text-gray-400 hover:text-white'
//               }`}
//             >
//               Individual
//             </button>
//             <button
//               onClick={() => setActiveTab('team')}
//               className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
//                 activeTab === 'team'
//                   ? 'bg-slate-800 text-white'
//                   : 'text-gray-400 hover:text-white'
//               }`}
//             >
//               Team & Enterprise
//             </button>
//           </div>
//         </div>

//         {/* Individual Plans */}
//         {activeTab === 'individual' && (
//           <div>
//             {/* Billing Toggle */}
//             <div className="flex justify-end mb-8">
//               <div className="inline-flex gap-2 p-1 bg-slate-900/50 rounded-lg border border-slate-800">
//                 <button
//                   onClick={() => setBillingPeriod('monthly')}
//                   className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
//                     billingPeriod === 'monthly'
//                       ? 'bg-slate-800 text-white'
//                       : 'text-gray-400 hover:text-white'
//                   }`}
//                 >
//                   Monthly
//                 </button>
//                 <button
//                   onClick={() => setBillingPeriod('yearly')}
//                   className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
//                     billingPeriod === 'yearly'
//                       ? 'bg-slate-800 text-white'
//                       : 'text-gray-400 hover:text-white'
//                   }`}
//                 >
//                   Yearly <span className="text-cyan-400 text-xs ml-1">Save 17%</span>
//                 </button>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {individualPlans.map((plan, index) => (
//                 <div
//                   key={index}
//                   className={`relative p-8 rounded-2xl border transition-all duration-300 ${
//                     plan.highlight
//                       ? 'bg-slate-900/70 border-cyan-500/50 hover:border-cyan-500'
//                       : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
//                   }`}
//                 >
//                   {/* Icon */}
//                   <div className="text-gray-400 mb-6">{plan.icon}</div>

//                   {/* Name & Subtitle */}
//                   <div className="mb-6">
//                     <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
//                     {plan.highlight && (
//                       <p className="text-cyan-400 text-sm font-medium">{plan.subtitle}</p>
//                     )}
//                     {!plan.highlight && (
//                       <p className="text-gray-400 text-sm">{plan.subtitle}</p>
//                     )}
//                   </div>

//                   {/* Price */}
//                   <div className="mb-6">
//                     <div className="flex items-baseline gap-1 mb-1">
//                       <span className="text-4xl font-bold text-white">{plan.price}</span>
//                     </div>
//                     <p className="text-gray-400 text-sm">{plan.period}</p>
//                   </div>

//                   {/* Button */}
//                   <button
//                     className={`w-full py-3 rounded-lg font-medium transition-all duration-200 mb-8 ${
//                       plan.buttonStyle === 'primary'
//                         ? 'bg-white text-slate-900 hover:bg-gray-100'
//                         : 'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700'
//                     }`}
//                   >
//                     {plan.buttonText}
//                   </button>

//                   {/* Features */}
//                   <ul className="space-y-3">
//                     {plan.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start gap-3">
//                         <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
//                         <span className="text-gray-300 text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Team & Enterprise Plans */}
//         {activeTab === 'team' && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {teamPlans.map((plan, index) => (
//               <div
//                 key={index}
//                 className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300"
//               >
//                 {/* Header */}
//                 <div className="mb-8">
//                   <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
//                   <p className="text-gray-400 text-sm mb-6">{plan.subtitle}</p>
                  
//                   <button
//                     className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
//                       plan.buttonStyle === 'primary'
//                         ? 'bg-white text-slate-900 hover:bg-gray-100'
//                         : 'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700'
//                     }`}
//                   >
//                     {plan.buttonText}
//                   </button>
//                 </div>

//                 {/* Seats (for Team plan) */}
//                 {plan.seats && (
//                   <div className="mb-8 space-y-4">
//                     {plan.seats.map((seat, idx) => (
//                       <div key={idx} className="p-4 bg-slate-800/50 rounded-lg">
//                         <div className="flex items-baseline gap-2 mb-1">
//                           <span className="text-lg font-bold text-white">{seat.name}</span>
//                           <span className="text-2xl font-bold text-white ml-auto">{seat.price}</span>
//                         </div>
//                         <p className="text-gray-400 text-xs mb-2">{seat.description}</p>
//                         <p className="text-gray-500 text-xs">{seat.details}</p>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Features */}
//                 <ul className="space-y-3">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start gap-3">
//                       <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
//                       <span className="text-gray-300 text-sm">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Footer Note */}
//         <div className="mt-8 text-center">
//           <p className="text-gray-500 text-xs">
//             *Usage limits apply. Prices shown don't include applicable tax.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { Check } from "lucide-react";
// import { useState } from "react";

// /**
//  * Pricing component with 3 options:
//  *  - Free
//  *  - Less than 100 users  -> amount: 4999.00
//  *  - More than 100 users  -> amount: 14999.00
//  *
//  * Integration:
//  *  - Calls POST /api/payment with { amount, productinfo, firstname, email, phone }
//  *  - Backend returns: { action, params } (same shape produced by your server)
//  *  - This component builds a hidden form and auto-submits it to action with params
//  *
//  * Notes:
//  *  - Update amounts or currency as needed.
//  *  - For production you might want to show a loader + server-side activation for "free".
//  */

// export default function Pricing() {
//   const [activeTab, setActiveTab] = useState("individual");
//   const [billingPeriod] = useState("monthly"); // kept for compatibility if you want toggles
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [buyer, setBuyer] = useState({
//     firstname: "",
//     email: "",
//     phone: ""
//   });

//   // Tier definitions — adjust amounts as needed
//   const tiers = [
//     {
//       id: "free",
//       name: "Free",
//       subtitle: "Get started with OnBoard-X",
//       amount: "0.00",
//       priceLabel: "Free",
//       buttonText: "Activate Free Plan",
//       features: [
//         "Up to 10 employees",
//         "Basic attendance tracking",
//         "Leave management",
//         "Employee directory",
//         "Email support"
//       ]
//     },
//     {
//       id: "small",
//       name: "Small (<100 users)",
//       subtitle: "Best for small businesses",
//       amount: "4999.00", // INR / or currency unit you use — change if needed
//       priceLabel: "₹4,999 / month",
//       buttonText: "Buy Small Plan",
//       features: [
//         "Up to 100 employees",
//         "Advanced attendance & shifts",
//         "Leave & payroll automation",
//         "Email & chat support"
//       ]
//     },
//     {
//       id: "large",
//       name: "Large (>100 users)",
//       subtitle: "Scale ready",
//       amount: "14999.00",
//       priceLabel: "₹14,999 / month",
//       buttonText: "Buy Large Plan",
//       features: [
//         "Unlimited employees",
//         "Priority payroll processing",
//         "Performance & analytics",
//         "Dedicated account manager"
//       ]
//     }
//   ];

//   // Basic client-side validation
//   function validateBuyer() {
//     const { firstname, email, phone } = buyer;
//     if (!firstname || !email || !phone) {
//       setError("Please enter name, email and phone.");
//       return false;
//     }
//     // very simple email/phone checks
//     if (!/^\S+@\S+\.\S+$/.test(email)) {
//       setError("Please enter a valid email address.");
//       return false;
//     }
//     if (!/^[0-9+\-()\s]{7,20}$/.test(phone)) {
//       setError("Please enter a valid phone number.");
//       return false;
//     }
//     setError("");
//     return true;
//   }

//   // Build and submit a form to action (PayU) with returned params
//   function submitFormToGateway(actionUrl, params) {
//     const form = document.createElement("form");
//     form.method = "POST";
//     form.action = actionUrl;
//     form.style.display = "none";

//     Object.keys(params).forEach((key) => {
//       const input = document.createElement("input");
//       input.type = "hidden";
//       input.name = key;
//       input.value = params[key];
//       form.appendChild(input);
//     });

//     document.body.appendChild(form);
//     form.submit();
//     // form will navigate away; no cleanup necessary here but we try to remove
//     setTimeout(() => form.remove(), 2000);
//   }

//   // Handle plan purchase
//   async function handlePurchase(plan) {
//     // Free plan flow: no PayU submission (replace with your activation endpoint if available)
//     if (plan.id === "free") {
//       // If you have a server endpoint to activate free accounts, call it here.
//       // Example:
//       // await fetch('/api/activate-free', { method: 'POST', body: JSON.stringify(buyer) })
//       alert("Free plan activated. You can start using OnBoard-X.");
//       return;
//     }

//     if (!validateBuyer()) return;

//     setLoading(true);
//     setError("");

//     try {
//       // Build the productinfo string — keep concise
//       const productinfo = `${plan.name} plan - ${plan.subtitle}`;

//       const payload = {
//         amount: plan.amount,
//         productinfo,
//         firstname: buyer.firstname,
//         email: buyer.email,
//         phone: buyer.phone
//       };

//       // call your backend
//       const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
//       const res = await fetch(`${API_BASE}/api/payment`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload)
//       });

//       if (!res.ok) {
//         const text = await res.text();
//         throw new Error(text || "Payment initiation failed");
//       }

//       const data = await res.json();
//       // Expect { action, params }
//       if (!data || !data.action || !data.params) {
//         throw new Error("Invalid payment response from server.");
//       }

//       // Auto-submit to PayU (or sandbox) with returned params
//       submitFormToGateway(data.action, data.params);
//     } catch (err) {
//       console.error("Payment error:", err);
//       setError(err.message || "Could not initiate payment. Try again.");
//       setLoading(false);
//     }
//   }

//   return (
//     <section id="pricing" className="relative py-20 bg-slate-950 overflow-hidden">
//       <div className="container mx-auto px-6 relative z-10 max-w-5xl">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Plans that grow with you
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Choose a plan based on how many employees you need to manage. Payments processed securely via PayU.
//           </p>
//         </div>

//         {/* Buyer info */}
//         <div className="bg-slate-900/50 p-6 rounded-xl mb-8 border border-slate-800">
//           <h4 className="text-white font-semibold mb-3">Your details</h4>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <input
//               value={buyer.firstname}
//               onChange={(e) => setBuyer((s) => ({ ...s, firstname: e.target.value }))}
//               placeholder="Full name"
//               className="p-3 rounded-md bg-slate-800 border border-slate-700 placeholder-gray-400 text-white"
//             />
//             <input
//               value={buyer.email}
//               onChange={(e) => setBuyer((s) => ({ ...s, email: e.target.value }))}
//               placeholder="Email"
//               className="p-3 rounded-md bg-slate-800 border border-slate-700 placeholder-gray-400 text-white"
//             />
//             <input
//               value={buyer.phone}
//               onChange={(e) => setBuyer((s) => ({ ...s, phone: e.target.value }))}
//               placeholder="Phone"
//               className="p-3 rounded-md bg-slate-800 border border-slate-700 placeholder-gray-400 text-white"
//             />
//           </div>
//         </div>

//         {/* Plans grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//           {tiers.map((plan) => (
//             <div
//               key={plan.id}
//               className={`p-6 rounded-2xl border transition-all duration-200 ${
//                 plan.id === "large"
//                   ? "bg-slate-900/70 border-cyan-500/40 hover:border-cyan-400"
//                   : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
//               }`}
//             >
//               <div className="mb-4">
//                 <h3 className="text-xl font-bold text-white">{plan.name}</h3>
//                 <p className="text-gray-400 text-sm">{plan.subtitle}</p>
//               </div>

//               <div className="mb-6">
//                 <div className="text-3xl font-bold text-white">{plan.priceLabel}</div>
//               </div>

//               <button
//                 onClick={() => handlePurchase(plan)}
//                 disabled={loading}
//                 className={`w-full py-3 rounded-lg font-medium transition-all duration-200 mb-6 ${
//                   plan.id === "small" || plan.id === "large"
//                     ? "bg-white text-slate-900 hover:bg-gray-100"
//                     : "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700"
//                 }`}
//               >
//                 {loading ? "Processing..." : plan.buttonText}
//               </button>

//               <ul className="space-y-3">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-3">
//                     <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-300 text-sm">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {error && (
//           <div className="text-red-400 text-sm mb-4">
//             {error}
//           </div>
//         )}

//         <p className="text-gray-500 text-xs text-center">
//           * Prices shown are a sample. Taxes and gateway charges may apply.
//         </p>
//       </div>
//     </section>
//   );
// }













// frontend: Pricing.jsx
import React, { useState } from "react";
import { Check } from "lucide-react";

export default function Pricing() {
  // State for buyer info
  const [buyer, setBuyer] = useState({
    firstname: "",
    email: "",
    phone: ""
  });

  // Loading state for payment processing
  const [loading, setLoading] = useState(false);

  // Error message state
  const [error, setError] = useState("");

  // Define tiers (plans)
  const tiers = [
    {
      id: "free",
      name: "Free",
      subtitle: "Get started with OnBoard-X",
      amount: "0.00",
      priceLabel: "Free",
      buttonText: "Activate Free Plan",
      features: [
        "Up to 10 employees",
        "Basic attendance tracking",
        "Leave management",
        "Employee directory",
        "Email support"
      ]
    },
    {
      id: "small",
      name: "Small (<100 users)",
      subtitle: "Best for small businesses",
      amount: "4999.00",
      priceLabel: "₹4,999 / month",
      buttonText: "Buy Small Plan",
      features: [
        "Up to 100 employees",
        "Advanced attendance & shifts",
        "Leave & payroll automation",
        "Email & chat support"
      ]
    },
    {
      id: "large",
      name: "Large (>100 users)",
      subtitle: "Scale ready",
      amount: "14999.00",
      priceLabel: "₹14,999 / month",
      buttonText: "Buy Large Plan",
      features: [
        "Unlimited employees",
        "Priority payroll processing",
        "Performance & analytics",
        "Dedicated account manager"
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
      ]
    }
  ];

<<<<<<< HEAD
  const teamPlans = [
    {
      name: 'Team',
      subtitle: 'For collaboration across organizations',
      buttonText: 'Get a Team plan',
      buttonStyle: 'secondary',
      seats: [
        { name: 'Standard seat', price: '$25', description: 'Chat, projects, and more', details: 'Per person / month with annual subscription discount. $30 if billed monthly. Minimum 5 members.' },
        { name: 'Premium seat', price: '$150', description: 'Includes Premium Features', details: 'Per person / month. Minimum 5 members.' }
      ],
      features: [
        'Everything in Pro*, plus:',
        'More usage',
        'Central billing and administration',
        'Early access to collaboration features',
        'Premium features available with premium seat'
      ]
    },
    {
      name: 'Enterprise',
      subtitle: 'For businesses operating at scale',
      buttonText: 'Contact sales',
      buttonStyle: 'primary',
      features: [
        'Everything in Team, plus:',
        'More usage',
        'Enhanced context window',
        'Single sign-on (SSO) and domain capture',
        'Role-based access with fine grained permissioning',
        'System for Cross-domain Identity Management (SCIM)',
        'Audit logs',
        'Google Docs cataloging',
        'Premium features available with premium seat',
        'Compliance API for observability and monitoring'
      ]
    }
  ];

  return (
    <section id="pricing" className="relative py-20 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAyMTIsIDI1NSwgMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Plans that grow with you
          </h2>

          {/* Tabs */}
          <div className="inline-flex gap-2 p-1 bg-slate-900/50 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'individual'
                  ? 'bg-slate-800 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Individual
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'team'
                  ? 'bg-slate-800 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Team & Enterprise
            </button>
          </div>
        </div>

        {/* Individual Plans */}
        {activeTab === 'individual' && (
          <div>
            {/* Billing Toggle */}
            <div className="flex justify-end mb-8">
              <div className="inline-flex gap-2 p-1 bg-slate-900/50 rounded-lg border border-slate-800">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    billingPeriod === 'monthly'
                      ? 'bg-slate-800 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    billingPeriod === 'yearly'
                      ? 'bg-slate-800 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Yearly <span className="text-cyan-400 text-xs ml-1">Save 17%</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {individualPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-slate-900/70 border-cyan-500/50 hover:border-cyan-500'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Icon */}
                  <div className="text-gray-400 mb-6">{plan.icon}</div>

                  {/* Name & Subtitle */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                    {plan.highlight && (
                      <p className="text-cyan-400 text-sm font-medium">{plan.subtitle}</p>
                    )}
                    {!plan.highlight && (
                      <p className="text-gray-400 text-sm">{plan.subtitle}</p>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.period}</p>
                  </div>

                  {/* Button */}
                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-200 mb-8 ${
                      plan.buttonStyle === 'primary'
                        ? 'bg-white text-slate-900 hover:bg-gray-100'
                        : 'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {plan.buttonText}
                  </button>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team & Enterprise Plans */}
        {activeTab === 'team' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamPlans.map((plan, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.subtitle}</p>
                  
                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                      plan.buttonStyle === 'primary'
                        ? 'bg-white text-slate-900 hover:bg-gray-100'
                        : 'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>

                {/* Seats (for Team plan) */}
                {plan.seats && (
                  <div className="mb-8 space-y-4">
                    {plan.seats.map((seat, idx) => (
                      <div key={idx} className="p-4 bg-slate-800/50 rounded-lg">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="text-lg font-bold text-white">{seat.name}</span>
                          <span className="text-2xl font-bold text-white ml-auto">{seat.price}</span>
                        </div>
                        <p className="text-gray-400 text-xs mb-2">{seat.description}</p>
                        <p className="text-gray-500 text-xs">{seat.details}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            *Usage limits apply. Prices shown don't include applicable tax.
          </p>
        </div>
=======
  // Buyer form validation
  function validateBuyer() {
    const { firstname, email, phone } = buyer;
    if (!firstname || !email || !phone) {
      setError("Please enter name, email and phone.");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!/^[0-9+\-()\s]{7,20}$/.test(phone)) {
      setError("Please enter a valid phone number.");
      return false;
    }
    setError("");
    return true;
  }

  // Payment handler
  async function handlePurchase(plan) {
    if (plan.id === "free") {
      alert("Free plan activated. You can start using OnBoard-X.");
      return;
    }

    if (!validateBuyer()) return;

    setLoading(true);
    setError("");

    try {
      const productinfo = `${plan.name} plan - ${plan.subtitle}`;
      const payload = {
        amount: plan.amount,
        productinfo,
        firstname: buyer.firstname,
        email: buyer.email,
        phone: buyer.phone
      };

      const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000" || "https://clg-majorprojrct.onrender.com";
      const res = await fetch(`${API_BASE}/api/payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Payment initiation failed");
      }

      const data = await res.json();
      if (!data || !data.action || !data.params) {
        throw new Error("Invalid payment response from server.");
      }

      // Submit form to PayU gateway
      const form = document.createElement("form");
      form.method = "POST";
      form.action = data.action;
      form.style.display = "none";

      Object.keys(data.params).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = data.params[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      setLoading(false);
    } catch (err) {
      console.error("Payment error:", err);
      setError(err.message || "Could not initiate payment. Try again.");
      setLoading(false);
    }
  }

  return (
    <section id="pricing" className="relative py-20 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plans that grow with you
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose a plan based on how many employees you need to manage. Payments processed securely via PayU.
          </p>
        </div>

        {/* Buyer info */}
        <div className="bg-slate-900/50 p-6 rounded-xl mb-8 border border-slate-800">
          <h4 className="text-white font-semibold mb-3">Your details</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              value={buyer.firstname}
              onChange={(e) => setBuyer(s => ({ ...s, firstname: e.target.value }))}
              placeholder="Full name"
              className="p-3 rounded-md bg-slate-800 border border-slate-700 placeholder-gray-400 text-white"
            />
            <input
              value={buyer.email}
              onChange={(e) => setBuyer(s => ({ ...s, email: e.target.value }))}
              placeholder="Email"
              className="p-3 rounded-md bg-slate-800 border border-slate-700 placeholder-gray-400 text-white"
            />
            <input
              value={buyer.phone}
              onChange={(e) => setBuyer(s => ({ ...s, phone: e.target.value }))}
              placeholder="Phone"
              className="p-3 rounded-md bg-slate-800 border border-slate-700 placeholder-gray-400 text-white"
            />
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {tiers.map(plan => (
            <div
              key={plan.id}
              className={`p-6 rounded-2xl border transition-all duration-200 ${
                plan.id === "large"
                  ? "bg-slate-900/70 border-cyan-500/40 hover:border-cyan-400"
                  : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-white">{plan.priceLabel}</div>
              </div>

              <button
                onClick={() => handlePurchase(plan)}
                disabled={loading}
                className={`w-full py-3 rounded-lg font-medium transition-all duration-200 mb-6 ${
                  plan.id === "small" || plan.id === "large"
                    ? "bg-white text-slate-900 hover:bg-gray-100"
                    : "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700"
                }`}
              >
                {loading ? "Processing..." : plan.buttonText}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {error && (
          <div className="text-red-400 text-sm mb-4">
            {error}
          </div>
        )}

        <p className="text-gray-500 text-xs text-center">
          * Prices shown are a sample. Taxes and gateway charges may apply.
        </p>
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
      </div>
    </section>
  );
}
