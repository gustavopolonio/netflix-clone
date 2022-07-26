import { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { BsPencilFill, BsPerson } from "react-icons/bs"
import { BiHelpCircle } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"

import netflixLogoImg from '../assets/netflix-logo.svg';
import netflixAvatarImg from '../assets/netflix-avatar.png';
import netflixAvatar1Img from '../assets/netflix-avatar1.png';
import netflixAvatar2Img from '../assets/netflix-avatar2.png';
import netflixAvatar3Img from '../assets/netflix-avatar3.png';

import '../styles/components/TopBar.css';

export function TopBar({ notificationData }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function toggleMenuSideBar() {
    isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
  }

  return (
    <div className="topBarContainer">
      <div className="leftContainer">
        <GiHamburgerMenu onClick={() => toggleMenuSideBar()} style={{
          width: '32px',
          height: 'auto'
        }} />

        <nav className={isSidebarOpen ? `menuSidebar open` : `menuSidebar`}>
          <ul className="sidebarTop">
            <div className="userInfo">
              <img src={netflixAvatarImg} alt="Avatar" />
              <div>
                <span>Gustavo Polonio</span>
                <button>Switch profile</button>
              </div>
            </div>
            <li>Account</li>
            <li>Help Center</li>
            <li>Log out Netflix</li>
          </ul>

          <ul className="sidebarBottom">
            <li class="active">Home</li>
            <li>My list</li>
            <li>Thrillers</li>
            <li>For the while family</li>
            <li>Foreigners TV shows and movies</li>
            <li>Reality shows</li>
            <li>LGBTQ stories</li>
            <li>Anime</li>
            <li>Action</li>
            <li>Comedy</li>
            <li>Fantasy</li>
            <li>Science fiction</li>
            <li>Horror</li>
            <li>Stand-up comedy</li>
          </ul>
        </nav>

        <div 
          className={isSidebarOpen ? 'sidebarOverlay' : ''}
          onClick={() => toggleMenuSideBar()}
          style={{
            display: 'none'
          }}
        ></div>

        <a href="/">
          <img src={netflixLogoImg} alt="Netflix logo" className="netflixLogo"/>
        </a>
        
        <div className="topBarPagesContainer">
          <a href="/">Home</a>
          <a href="/tvshows">TV Shows</a>
          <a href="/movies">Movies</a>
          <a href="/recentlyadd">Recently Added</a>
          <a href="/mylist">My List</a>
        </div>
      </div>
        
      <div className="rightContainer">
        <div className="searchContainer">
          <SearchIcon className="searchIcon" style={{transition: "0.2s"}}/>
          <input type="text" placeholder='Buscar'></input>
          <CloseIcon className="closeIcon" style={{transition: "0.2s"}}/>
        </div>

        <div className="notificationsContainer">
          <NotificationsIcon className="notificationIcon"style={{transition: "0.2s"}}/>

          <ArrowDropDownIcon className="notificationsArrowDown" />
          <ul className="notificationsDropDown">
            { notificationData.map(notification => 
              <li key={notification.id} className="notificationItem">
                <img 
                  src={`https://image.tmdb.org/t/p/original${notification.backdrop_path}`} 
                  alt={notification.title} 
                />

                <div className="notificationRightSide">
                  <p>
                    New
                    <br />
                    {notification.title}  
                  </p>
                  <span>1 month ago</span>
                </div>
              </li>
            ) }
          </ul>
        </div>
        
        <div className="avatarContainer">
          <img src={netflixAvatarImg} alt="Avatar"/>
          <ArrowDropDownIcon className="arrowDropDownIcon" style={{transition: "0.2s"}}/>

          <div className="avatarDropDown">
            <ArrowDropDownIcon />

            <ul className="avatarProfilesContainer">
              <li className="avatarProfile">
                <img src={netflixAvatar1Img} alt="Avatar 1" />
                <span>Clarinha</span>
              </li>

              <li className="avatarProfile">
                <img src={netflixAvatar2Img} alt="Avatar 2" />
                <span>Gugs</span>
              </li>

              <li className="avatarProfile">
                <img src={netflixAvatar3Img} alt="Avatar 3" />
                <span>Ronaldo</span>
              </li>

              <div className="manageProfiles">
                <BsPencilFill />
                <span>Manage profiles</span>
              </div>
            </ul>

            <div className="avatarConfigsContainer">
              <div className="accountContainer">
                <BsPerson />
                <span>Account</span>
              </div>

              <div className="helpCenterContainer">
                <BiHelpCircle />
                <span>Help Center</span>
              </div>
            </div>

            <div className="logOutContainer">
              <span>Log out Netflix</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}  