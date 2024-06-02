import React, { useEffect, useState } from 'react';
import './profileForm.css';
import { getUser } from '../../ServerApi/api';

interface UserResponse {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface ErrorResponse {
  statusCode: number;
  message: string;
}

type ApiResponse = UserResponse | ErrorResponse;

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserResponse | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleResponse = (res: ApiResponse) => {
    console.log(res);
    
    if ('statusCode' in res) {
      setError(res.message);
    } else {
      setUser(res);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const tokenData = localStorage.getItem('token');
        if (tokenData) {
          const parsedToken = JSON.parse(tokenData);
          if (parsedToken && parsedToken.user && parsedToken.token) {
            const res = await getUser(parsedToken.user.id, parsedToken.token);
            handleResponse(res);
          } else {
            console.error("Invalid token data");
            setError("Invalid token data");
          }
        }
      } catch (error) {
        console.error("Failed to retrieve or parse token from localStorage:", error);
        setError("Failed to retrieve or parse token from localStorage");
      }
    };

    fetchUser();
  }, []);
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div id='profile-wrapper'>
      <div className="userProfile">
        <div className='userImage'>
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQND6lOovzDcBzCIYL-eKPi4n2bQLEWP46g&s'} alt="User Profile"/>
        </div>
        <div className="userDetailCard">
          <h3>{user.firstName} {user.lastName}</h3>
          <h3>{user.email}</h3>
          <h3>{user.phone}</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
