const textArea = document.getElementById('text-area');

textArea.addEventListener('keydown', (event) => {
	if (event.code == 'Enter'){
		event.preventDefault();
		createElements(textArea.value)
		textArea.value = '';
	}
});


/* Create check box */
const createElements = (text) => {
	const target = document.getElementById('check-area-form');
	const div = document.createElement('div');
	div.innerHTML = `<input type="checkbox"><label>${treatText(text)}</label>`;
	target.appendChild(div);
}

/* Treat the text fot the checkbox */
const treatText = (text) => {
	text = text.charAt(0).toUpperCase() + text.slice(1);
	return text.trim();
}