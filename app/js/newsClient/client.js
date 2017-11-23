class NewsAPIClient {
	constructor(apiKey) {
		this.apikey = apiKey;
	}

	getNewsSources() {
		return new Promise((resolve, reject) => {
			// todo: generate correct ulr with params
			fetch(`${API_URLS.sources.url}&${this.apiKeyParam()}`)
			.then((response) => response.json())
			.then((data) => resolve(data.sources))
			.catch((err) => reject(err.message));
		});
	}
	getNewsBySource(sourceId) {
		return new Promise((resolve, reject) => {
			// todo: generate correct ulr with params
			fetch(`${API_URLS.news.url}?sources=${sourceId}${this.apiKeyParam()}`)
			.then((response) => response.json())
			.then((data) => resolve(data.articles))
			.catch((err) => reject(err.message));
		});
	}

	/* UTILS */
	apiKeyParam() {
		return `&apiKey=${this.apikey}`;
	}
}
const NewsClient = (() => ({NewsAPIClient}))();
