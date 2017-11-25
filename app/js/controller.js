const getSourcesHtml = (data) => {
	let sources = data.map((source) => {
		return `<li data-source-id="${source.id}">
                <img
                    data-source-id="${source.id}"
                    alt="${source.name}"
                    class="icon"
                    src="https://icons.better-idea.org/icon?url=${source.url}&amp;size=16..32..48">
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

const CONTROLLER = (() => ({
		getSourcesHtml,
		getNewsHtml
	}))();