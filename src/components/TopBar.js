import '../styles/components/TopBar.css';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


export function TopBar() {


    return (
        <div className="topBarContainer">
            <div className="leftContainer">
                
                <a href="/"><img src="netflix-logo.svg" alt="Netflix logo" className="netflixLogo"/></a>
                
                <div className="topBarPagesContainer">
                    <a href="/">Início</a>
                    <a href="/tvshows">Séries</a>
                    <a href="/movies">Filmes</a>
                    <a href="/recentlyadd">Adicionados Recentemente</a>
                    <a href="/mylist">Minha Lista</a>
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
                    <img src="netflix-avatar.png" alt="Avatar"/>
                    <ArrowDropDownIcon className="arrowDropDownIcon" style={{transition: "0.2s"}}/>
                </div>
            </div>

            
        </div>
    )
}  