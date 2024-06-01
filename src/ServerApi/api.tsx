// src/ServerApi/api.tsx

interface LoginResponse {
    token: string;
    user: {
      id: string;
      email: string;
      // add other user properties if needed
    };
  }
  
  interface RegisterResponse {
    success: boolean;
    message: string;
    user?: {
      id: string;
      email: string;
      // add other user properties if needed
    };
  }
  
  const Login = async (email: string, password: string): Promise<LoginResponse> => {
      try {
          const response = await fetch("https://ats-backend-7.onrender.com/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({ email, password })
          });
          
          const data = await response.json();
          return data;
      } catch (error) {
          console.error("Error:", error);
          throw error;
      }
  }
  
  const Register = async (email: string, password: string, phone: string, firstName: string, lastName: string): Promise<RegisterResponse> => {
      try {
          const response = await fetch("https://ats-backend-7.onrender.com/register", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({ email, password, phone, firstName, lastName })
          });
          
          const data = await response.json();
          return data;
      } catch (error) {
          console.error("Error:", error);
          throw error;
      }
  }
  
  export { Login, Register };
  