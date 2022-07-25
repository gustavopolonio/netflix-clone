import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { BsPencilFill, BsPerson } from "react-icons/bs"
import { BiHelpCircle } from "react-icons/bi"

import netflixLogoImg from '../assets/netflix-logo.svg';
import netflixAvatarImg from '../assets/netflix-avatar.png';
import netflixAvatar1Img from '../assets/netflix-avatar1.png';
import netflixAvatar2Img from '../assets/netflix-avatar2.png';
import netflixAvatar3Img from '../assets/netflix-avatar3.png';

import '../styles/components/TopBar.css';


export function TopBar() {

  return (
    <div className="topBarContainer">
      <div className="leftContainer">
          
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
          <input type="text" ></input>
          <CloseIcon className="closeIcon" style={{transition: "0.2s"}}/>
        </div>

        <NotificationsIcon className="notificationIcon"style={{transition: "0.2s"}}/>
        
        <div className="avatarContainer">
          <img src={netflixAvatarImg} alt="Avatar"/>
          <ArrowDropDownIcon className="arrowDropDownIcon" style={{transition: "0.2s"}}/>

          <div className="avatarDropDown">
            <ArrowDropDownIcon />

            <ul className="avatarProfilesContainer">
              <li className="avatarProfile">
                <img src={netflixAvatar1Img} alt="Avatar 1" />
                <span>Cris</span>
              </li>

              <li className="avatarProfile">
                <img src={netflixAvatar2Img} alt="Avatar 2" />
                <span>Leo/Alê</span>
              </li>

              <li className="avatarProfile">
                <img src={netflixAvatar3Img} alt="Avatar 3" />
                <span>Lucas</span>
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