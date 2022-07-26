import React, { useEffect, useState } from 'react';
import { getHomeList, getFeaturedData, getNotificationData } from './Tmdb';

import { MovieRow } from './components/MovieRow';
import { FeaturedMovie } from './components/FeaturedMovie';
import { TopBar } from './components/TopBar';
import { Footer } from './components/Footer';

// eslint-disable-next-line import/no-anonymous-default-export 
export default () => {
  
	const [infoList, setInfoList] = useState([]);
	const [featuredInfo, setFeaturedInfo] = useState(null);
	const [notificationInfo, setNotificationInfo] = useState(null);

	useEffect(() => {
		async function loadAllLists() {
			let allLists = await getHomeList();
			setInfoList(allLists);

			let mostSeenTvShow = allLists.filter(i => i.slug === "mostSeenTvShow");
			let lengthMostSeenTvShow = mostSeenTvShow[0].list.results.length;
			let randomNumber = Math.floor(Math.random() * (lengthMostSeenTvShow - 1) )
			let featuredTvShow = mostSeenTvShow[0].list.results[randomNumber];

			let featureData = await getFeaturedData(featuredTvShow.id, "tvShow");
			setFeaturedInfo(featureData);

			let notificationData = await getNotificationData()
			setNotificationInfo(notificationData)
		}

		loadAllLists();
	}, []);


	return (
		<div className="pageHome">
			
			{ notificationInfo && 
				<TopBar notificationData={ notificationInfo } />
			}

			{ featuredInfo && 
				<FeaturedMovie featuredData={ featuredInfo } />
			}

			<section className="filmLists">
				{infoList.map((item, key) => 
					<MovieRow key={key} title={item.title} list={item.list}/>
				)}
			</section>

			<Footer />

			{ featuredInfo <= 0 &&
				<div className="loading">
					<img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="Loading"/>
				</div>
			}
 
		</div>

  );
}

