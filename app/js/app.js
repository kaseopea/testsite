// Check if NewsClient is defined on the page
if (!NewsClient) {
	throw new Error(CLIENT_MESSAGES.error.noNewsClientDefined);
}
const ELEMENTS = {
	sourcesContent: document.getElementById('sources-content'),
	loader: document.getElementById('loader'),
	mainContent: document.getElementById('mainContent')
};

const newsClient = new NewsClient.NewsAPIClient(NEWSAPI_API_KEY);


// Get News Sources
newsClient.getNewsSources().then((data) => {
	// Hide Loader Element
	UTILS.hideElement(ELEMENTS.loader);

	ELEMENTS.sourcesContent.innerHTML = UTILS.getSourcesHtml(data);

	//load random news

	// add EventListener for sources click
	ELEMENTS.sourcesContent.addEventListener('click', (ev) => {
		let sourceId = (ev.target.dataset && ev.target.dataset.sourceId) ? ev.target.dataset.sourceId : null;

		if (sourceId) {
            ELEMENTS.mainContent.innerHTML = '';
		    UTILS.showElement(ELEMENTS.loader);

			newsClient.getNewsBySource(sourceId).then((data) => {
				// hide loader
				UTILS.hideElement(ELEMENTS.loader);

				ELEMENTS.mainContent.innerHTML = UTILS.getNewsHtml(data);
			})
			.catch((err) => {
				// show UI error message - no news loaded for source
				console.warn(err);
			});
		}
	})
})
	.catch((err) => {
		// show UI error message - no sources loaded
	});
