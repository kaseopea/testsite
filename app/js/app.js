// Check if NewsClient is defined on the page
if (!NewsClient) {
	throw new Error(CLIENT_MESSAGES.error.noNewsClientDefined);
}
const ELEMENTS = {
	sourcesContent: document.getElementById('sources'),
	loader: document.getElementById('loader'),
	mainContent: document.getElementById('mainContent')
};

const newsClient = new NewsClient.NewsAPIClient(NEWSAPI_API_KEY);


// Get News Sources
newsClient.getNewsSources().then((data) => {
	// Hide Loader Element
	UTILS.hideElement(ELEMENTS.loader);

	console.log('SOURCES');
	console.log(data);
	console.log('\n');

	ELEMENTS.sourcesContent.innerHTML = UTILS.getSourcesHtml(data);

	// add EventListener for sources click
	ELEMENTS.sourcesContent.addEventListener('click', (ev) => {
		let sourceId = (ev.target.dataset && ev.target.dataset.sourceId) ? ev.target.dataset.sourceId : null;

		// show loader
		UTILS.showElement(ELEMENTS.loader);

		if (sourceId) {
			newsClient.getNewsBySource(sourceId).then((data) => {
				// hide loader
				UTILS.hideElement(ELEMENTS.loader);

				//data should be already in json format
				console.log('NEWS');
				console.log(data);
				console.log('\n');

				ELEMENTS.mainContent.innerHTML = UTILS.getNewsHtml(data);
			})
			.catch((err) => {
				console.warn(err);
			});
		}
	})
})
	.catch((err) => {
		//error handling
	});
