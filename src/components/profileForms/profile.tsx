import React, { useEffect, useState } from 'react';
import './profileForm.css';
import { getUser } from '../../ServerApi/api';

interface UserResponse {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserResponse | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const tokenData = localStorage.getItem('token');
        if (tokenData) {
          const parsedToken = JSON.parse(tokenData);
          if (parsedToken && parsedToken.user && parsedToken.token) {
            const res = await getUser(parsedToken.user.id, parsedToken.token);
            setUser(res);
          } else {
            console.error("Invalid token data");
          }
        }
      } catch (error) {
        console.error("Failed to retrieve or parse token from localStorage:", error);
      }
    };
  
    fetchUser();
  }, []);
  
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div id='profile-wrapper'>
      <div className="userProfile">
        <div className='userImage'>
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQND6lOovzDcBzCIYL-eKPi4n2bQLEWP46g&s'} alt="BigCo Inc. logo"/>
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
