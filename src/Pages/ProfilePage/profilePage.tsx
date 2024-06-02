import React, { useState } from 'react';
import "./profilePage.css";
import Profile from '../../components/profileForms/profile';
import IntroForm from '../../components/profileForms/introForm';
import ExperienceForm from '../../components/profileForms/experienceForm';
import ProjectForm from '../../components/profileForms/projectForm';
import Skills from '../../components/profileForms/skills';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('profile');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="profile-homepage">
      <div className={`cursor-pointer hamburger ${sidebarOpen ? 'open' : ''}`} onClick={() => toggleSidebar()}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="sidebar" className={sidebarOpen ? 'open' : ''} onClick={() => toggleSidebar()}>
        <ul>
          <li className={activeTab === "profile" ? 'text-green-300' : ''} onClick={() => { setActiveTab("profile"); setSidebarOpen(false); }}>Profile</li>
          <li className={activeTab === "intro" ? 'text-green-300' : ''} onClick={() => { setActiveTab("intro"); setSidebarOpen(false); }}>Intro</li>
          <li className={activeTab === "experience" ? 'text-green-300' : ''} onClick={() => { setActiveTab("experience"); setSidebarOpen(false); }}>Experience</li>
          <li className={activeTab === "projects" ? 'text-green-300' : ''} onClick={() => { setActiveTab("projects"); setSidebarOpen(false); }}>Projects</li>
          <li className={activeTab === "skills" ? 'text-green-300' : ''} onClick={() => { setActiveTab("skills"); setSidebarOpen(false); }}>Skills</li>
        </ul>
      </div>
      <div id="form" onClick={() => sidebarOpen ? toggleSidebar():""}>
        {
          activeTab === "profile" ? <Profile /> 
          : activeTab === "intro" ? <IntroForm />
          : activeTab === "experience" ? <ExperienceForm /> 
          : activeTab === "projects" ? <ProjectForm />
          : activeTab === "skills" ? <Skills /> : ''
        }
      </div>
    </div>
  );
};

export default ProfilePage;
