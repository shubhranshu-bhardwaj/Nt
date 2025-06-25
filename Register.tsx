// import { useState } from "react";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async () => {
//     const payload = {
//       username: name, // maps to `Username` in your .NET model
//       email,
//       password
//     };

//     try {
//       const response = await fetch("http://localhost:5120/api/auth/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(payload)
//       });

//       if (response.ok) {
//         alert("Registration successful!");
//         // Optionally, reset form or navigate to login
//         setName("");
//         setEmail("");
//         setPassword("");
//       } else {
//         const error = await response.json();
//         alert(`Registration failed: ${error.message || "Unknown error"}`);
//       }
//     } catch (err) {
//       console.error("Error during registration:", err);
//       alert("Failed to connect to the server.");
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
//       <h2>Register</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
//       />
//       <button onClick={handleRegister} style={{ padding: "10px 20px" }}>
//         Register
//       </button>
//     </div>
//   );
// };

// export default Register;

import { useState } from "react";
import API from "../api/axios"; // Make sure this path is correct

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const payload = {
      username: name,
      email,
      passwordHash: password, // Maps to PasswordHash property in User model
    };

    try {
      const response = await API.post("/user/register", payload);

      if (response.status === 200) {
        alert("Registration successful!");
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (err: any) {
      console.error("Registration error:", err);
      alert(
        err?.response?.data || "Failed to register. Please try again."
      );
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
      />
      <button onClick={handleRegister} style={{ padding: "10px 20px" }}>
        Register
      </button>
    </div>
  );
};

export default Register;
