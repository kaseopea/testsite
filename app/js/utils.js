const hideElement = (element) => {
	element.style.display = 'none';
}

const showElement = (element) => {
	element.style.display = 'block';
}

const getSourcesHtml = (data) => {
	let sources = data.map((source) => {
		return `<li><a data-source-id="${source.id}">${source.name}</a></li>`;
	});
	return `<ul>${sources.join('')}</ul>`;
}

const getNewsHtml = (data) => {
	let news = data.map((newsOne) => {
		return `<div>
			<img src="${newsOne.urlToImage}" />
			<h3>${newsOne.title}</h3></div>`;
	});

	return news.join('');
}

const UTILS = (() => {
	return {
		hideElement,
		showElement,
		getSourcesHtml,
		getNewsHtml
	}
})();
