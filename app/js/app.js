// Check if NewsClient is defined on the page
if (!NewsClient) {
	throw new Error(CLIENT_MESSAGES.error.noNewsClientDefined);
}

const ELEMENTS = {
	sourcesContent: document.getElementById('sources-content'),
	loader: document.getElementById('loader'),
	mainContent: document.getElementById('main-content'),
	errorMessage: document.getElementById('error-message')
};

const newsClient = new NewsClient.NewsAPIClient(NEWSAPI_API_KEY);
const appView = new VIEW.Renderer();


// Load default random news
let query = DEFAULT_KEYWORS[Math.floor(Math.random() * DEFAULT_KEYWORS.length)];
newsClient.getNewsByParam('q', query).then((data) => {
	appView.hideElement(ELEMENTS.loader);
	appView.setView(ELEMENTS.mainContent, CONTROLLER.getNewsHtml(data));
})
.catch((err) => {
	appView.hideElement(ELEMENTS.loader);
	appView.showElement(ELEMENTS.errorMessage);
	appView.setView(ELEMENTS.errorMessage, CLIENT_MESSAGES.error.noNewsLoaded);
});

// Get News Sources
newsClient.getNewsSources().then((data) => {
	// Hide Loader Element
	appView.hideElement(ELEMENTS.loader);
	appView.setView(ELEMENTS.sourcesContent, CONTROLLER.getSourcesHtml(data));

	// add EventListener for sources click
	ELEMENTS.sourcesContent.addEventListener('click', (ev) => {
		let sourceId = (ev.target.dataset && ev.target.dataset.sourceId) ? ev.target.dataset.sourceId : null;

		if (sourceId) {
			appView.resetView(ELEMENTS.mainContent);
		    appView.showElement(ELEMENTS.loader);

			newsClient.getNewsByParam('sources', sourceId).then((data) => {
				appView.hideElement(ELEMENTS.loader);
				appView.setView(ELEMENTS.mainContent, CONTROLLER.getNewsHtml(data));
			})
			.catch((err) => {
				appView.hideElement(ELEMENTS.loader);
				appView.showElement(ELEMENTS.errorMessage);
				appView.setView(ELEMENTS.errorMessage, CLIENT_MESSAGES.error.noNewsLoaded);
			});
		}
	})
})
	.catch((err) => {
		appView.hideElement(ELEMENTS.loader);
		appView.showElement(ELEMENTS.errorMessage);
		appView.setView(ELEMENTS.errorMessage, CLIENT_MESSAGES.error.noSourcesLoaded);
	});
