interface LoginResponse {
    token?: string;
    statusCode:number;
    message:string;
    user?: {
      id: string;
      email: string;
    };
  }
  
  interface RegisterResponse {
    statusCode:number;
    message: string;
    id?: string;
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
  }
  
  const Login = async (email: string, password: string): Promise<LoginResponse> => {
      try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        
        if (response.status === 401) {
            return {
                statusCode: 401,
                message: "Unauthorized. Please check your email and password."
            };
        }
    
        if (!response.ok) {
            const errorData = await response.json();
            return {
                statusCode: response.status,
                message: errorData.message || "An error occurred"
            };
        }
    
        const data: LoginResponse = await response.json();
        return data;
      } catch (error) {
          console.error("Error:", error);
          throw error;
      }
  }
  
  const Register = async (email: string, password: string, phone: string, firstName: string, lastName: string): Promise<RegisterResponse> => {
      try {
          const response = await fetch("http://localhost:3000/register", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({ email, password, phone, firstName, lastName })
          });
          if (response.status === 401) {
            return {
                statusCode: 401,
                message: "Unauthorized. Please check your email and password."
            };
        }
    
        if (!response.ok) {
            const errorData = await response.json();
            return {
                statusCode: response.status,
                message: errorData.message || "An error occurred"
            };
        }
    
        const data: LoginResponse = await response.json();
        return data;
      } catch (error) {
          console.error("Error:", error);
          throw error;
      }
  }
  
  const getUser = async (): Promise<RegisterResponse> => {
    try {
        const response = await fetch("http://localhost:3000/getUsers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (response.status === 401) {
          return {
              statusCode: 401,
              message: "Unauthorized. Please check your email and password."
          };
      }
  
      
      if (!response.ok) {
          const errorData = await response.json();
          return {
              statusCode: response.status,
              message: errorData.message || "An error occurred"
          };
      }
  
      const data: LoginResponse = await response.json();
      return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

  export { Login, Register, getUser };
  