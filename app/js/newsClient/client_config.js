const API_URLS = {
	sources: {
		url: 'https://newsapi.org/v2/sources?language=ru',
		params: {
			language: 'ru'
		}
	},
	news: {
		url: 'https://newsapi.org/v2/top-headlines'
	}
};

const CLIENT_MESSAGES = {
	error: {
		noNewsClientDefined: 'NewsClient lib is not loaded('
	}
};
