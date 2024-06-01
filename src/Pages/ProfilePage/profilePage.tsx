import React, { useState } from 'react';
import "./profilePage.css";
import Profile from '../../components/profileForms/profile';
import IntroForm from '../../components/profileForms/introForm';
import ExperienceForm from '../../components/profileForms/experienceForm';
import ProjectForm from '../../components/profileForms/projectForm';
import Skills from '../../components/profileForms/skills';

const ProfilePage: React.FC = () => {
  const [activeTab, setactiveTab] = useState<string>('profile')

  return (
    <div className="homepage">
      <div id="sidebar">
        <ul>
          <li className={activeTab=="profile" ? 'text-green-300':''} onClick={()=>{setactiveTab("profile")}}>Profile</li>
          <li className={activeTab=="intro" ? 'text-green-300':''} onClick={()=>{setactiveTab("intro")}}>Intro</li>
          <li className={activeTab=="experience" ? 'text-green-300':''} onClick={()=>{setactiveTab("experience")}}>Experience</li>
          <li className={activeTab=="projects" ? 'text-green-300':''} onClick={()=>{setactiveTab("projects")}}>Projects</li>
          <li className={activeTab=="skills" ? 'text-green-300':''} onClick={()=>{setactiveTab("skills")}}>Skills</li>
        </ul>
      </div>
      <div id="form">
        {
          activeTab=="profile" ? <Profile/> 
          :
          activeTab=="intro" ? <IntroForm/>
          :
          activeTab=="experience" ? <ExperienceForm/> 
          :
          activeTab=="projects" ? <ProjectForm/>
          :
          activeTab=="skills" ? <Skills/>:''

        }
      </div>
    </div>
  );
};

export default ProfilePage;
