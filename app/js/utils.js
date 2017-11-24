const hideElement = (element) => {
	element.style.display = 'none';
}

const showElement = (element) => {
	element.style.display = 'block';
}

const getSourcesHtml = (data) => {
	let sources = data.map((source) => {
        //https://icons.better-idea.org/icon?url=http://abcnews.go.com&size=70..120..200
		return `<li>
                <img
                    data-source-id="${source.id}"
                    alt="${source.name}"
                    class="icon"
                    src="https://icons.better-idea.org/icon?url=${source.url}&amp;size=32..50..100">
                <a data-source-id="${source.id}">${source.name}</a>
            </li>`;
	});
	return `<ul class="sources-list">${sources.join('')}</ul>`;
}

const getNewsHtml = (data) => {
	let news = data.map((newsOne, index) => {
		return `
    <div class="item-${++index}">
          <a href="${newsOne.url}" target="_blank" class="card">
            <div class="thumb" style="background-image: url(${newsOne.urlToImage});"></div>
            <article>
              <h1>${newsOne.title}</h1>
              <span>${newsOne.author}</span>
            </article>
          </a>
    </div>`;
	});

	return `<div class="news-grid">${news.join('')}</div`;
}

const UTILS = (() => {
	return {
		hideElement,
		showElement,
		getSourcesHtml,
		getNewsHtml
	}
})();
