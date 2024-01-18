// Define the custom <my-include> element
class MyIncludeElement extends HTMLElement {
	connectedCallback() {
		const rel = this.getAttribute("rel");

		// Fetch the content of the specified HTML file and replace the current element
		fetch(rel)
			.then((response) => response.text())
			.then((data) =>
				this.replaceWith(
					...new DOMParser().parseFromString(data, "text/html").body.childNodes
				)
			)
			.catch((error) => console.error(`Error fetching ${rel}:`, error));
	}
}

// Define the custom element tag with a hyphenated name
customElements.define("my-include", MyIncludeElement);
