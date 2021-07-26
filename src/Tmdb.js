const apiKey = "45c1ee397cdd7ac2f2c212d37968c37b";
const apiBaseURL = "https://api.themoviedb.org/3";
const apiLanguage = "&language=pt-BR";

async function requestApi(endpoint) {
	let url = await fetch(`${apiBaseURL}${endpoint}`);
	let json = await url.json();
	return json;
}


// eslint-disable-next-line import/no-anonymous-default-export 
export async function getHomeList() {

	return [
		{
			title: "Séries mais vistas",
			slug: "mostSeenTvShow",
			list: await requestApi(`/discover/tv?api_key=${apiKey}${apiLanguage}&with_networks=213`)
		},

		{
			title: "Aclamados pela crítica",
			slug: "criticallyAcclaimed",
			list: await requestApi(`/movie/top_rated?api_key=${apiKey}${apiLanguage}`)
		},

		{
			title: "Em alta",
			slug: "Trending",
			list: await requestApi(`/trending/all/week?api_key=${apiKey}${apiLanguage}`)
		},

		{
			title: "Ação",
			slug: "action",
			list: await requestApi(`/discover/movie?api_key=${apiKey}${apiLanguage}&with_genres=28`)
		},

		{
			title: "Aventura",
			slug: "adventure",
			list: await requestApi(`/discover/movie?api_key=${apiKey}${apiLanguage}&with_genres=12`)
		},

		{
			title: "Comédia",
			slug: "comedy",
			list: await requestApi(`/discover/movie?api_key=${apiKey}${apiLanguage}&with_genres=35`)
		},

		{
			title: "Documentário",
			slug: "Documentary",
			list: await requestApi(`/discover/movie?api_key=${apiKey}${apiLanguage}&with_genres=99`)
		}

	]
}

export async function getFeaturedData(id, type) {
	
	let featuredData = {};

	// if(id) {
	// 	if(type === "movie") {
	// 		featuredData = await requestApi(`/movie/${id}?api_key=${apiKey}${apiLanguage}`)
	// 	} else if(type === "tv") {
	// 		featuredData = await requestApi(`/tv/${id}?api_key=${apiKey}${apiLanguage}`)
	// 	}
	// }

	if(id) {
		switch(type){
			case 'movie':
				featuredData = await requestApi(`/movie/${id}?api_key=${apiKey}${apiLanguage}`)
			break
			case 'tvShow':
				featuredData = await requestApi(`/tv/${id}?api_key=${apiKey}${apiLanguage}`)
			break
			default:
				featuredData = null;
			break 
		}
	}

	return featuredData
}