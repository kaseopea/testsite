class Renderer {
	showElement(element) {
		element.style.display = 'block';
	}
	hideElement(element) {
		element.style.display = 'none';
	}
	setView(element, content) {
		element.innerHTML = content;
	}
	resetView(element) {
		return element.innerHTML = '';
	}
}
const VIEW = (() => ({
	Renderer
}))();
