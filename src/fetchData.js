export default (data) => {
	if (self.fetch) {
		const headers = new Headers({
			"Content-Type": "application/json"
		});

		const init = {
			method: 'POST',
			headers: headers,
			mode: 'cors',
			body: JSON.stringify(data)
		};

		const request = new Request('http://localhost:1080/login', init);


		return fetch(request)
			.then((response) => response)
			.then((response) => response.json())
			.catch((error) => error);
	} else {
		return 'error';
	}
}