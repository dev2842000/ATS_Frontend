const Login = async (email, password) => {
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
    }
}

const Register = async (email, password, phone, firstName, lastName) => {
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
    }
}

export { Login, Register };
