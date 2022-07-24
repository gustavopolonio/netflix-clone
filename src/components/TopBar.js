import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import netflixLogoImg from '../assets/netflix-logo.svg';
import netflixAvatarImg from '../assets/netflix-avatar.png';

import '../styles/components/TopBar.css';


export function TopBar() {

  return (
    <div className="topBarContainer">
      <div className="leftContainer">
          
        <a href="/">
          <img src={netflixLogoImg} alt="Netflix logo" className="netflixLogo"/>
        </a>
        
        <div className="topBarPagesContainer">
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
        </div>
      </div>

    </div>
  )
}  