// https://rollbar.com/guides/javascript/how-to-throw-exceptions-in-javascript/

// essa função instancia um Objeto error do js. 
export default function RequestException(message) {
	// instancia o Objeto com uma mensagem personalizada
	const error = new Error(message);
	return error;
}

RequestException.prototype = Object.create(Error.prototype);