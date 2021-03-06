import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { BiInfoCircle } from "react-icons/bi"

import '../styles/components/FeaturedMovie.css';

export function FeaturedMovie({ featuredData }) {
	let title = featuredData.name;
	let voteAverage = Math.round(featuredData.vote_average * 100) / 100;
	let releaseDate = featuredData.first_air_date;
	let numberOfSeasons = featuredData.number_of_seasons;
	let description = featuredData.overview;
	let genres = featuredData.genres;

	let newDate = new Date(releaseDate)
	let fullYear = newDate.getFullYear()

	let countGenres = genres.length;


	return (
		<section className="featuredMovieContainer" style={{
			backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredData.backdrop_path})`,
			backgroundPosition: 'top',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat'
		}}>
			<div className="uiX">
				<div className="uiY">
					<div className="featuredMovieDataContainer">
						<h2>
							{title}
						</h2>

						<div className="subTitleContainer">
							<div className="voteAverage">
								<strong> {voteAverage} points</strong>
							</div>

							<div className="releaseDate">
								<strong>{fullYear}</strong>
							</div>

							<div className="numberOfSeasonms">
								<strong>
									{numberOfSeasons} Season{numberOfSeasons === 1 ? "" : "s"}
								</strong>
							</div>
						</div>

						<div className="descriptionContainer">
							{description.length < 186
								?
									<p>{description}</p>
								:
									<p>{description.substring(0, 186)}...</p>
							}
						</div>

						<div className="buttonsContainer">
							<button className="playButton">
								<PlayArrowIcon style={{paddingRight:"0.2rem", fontSize: "1.8rem"}}/>
								<span>Play</span>
							</button>

							<button className="moreInfoButton">
								<BiInfoCircle style={{paddingRight: "0.2rem", fontSize: "1.8rem"}} />
								<span>More infos</span>
							</button>

						</div>

						<div className="genres">
							<strong>Genre{countGenres > 1 ? "s" : ""}: </strong>

							{genres.map((item, key) => 
								<div className="genresName" key={key}>
									<span>{item.name}{key !== countGenres - 1 ? "," : "."}</span>
								</div>
							)} 
						</div>

					</div>	
				</div>
			</div>
		</section>
	)
}

