export const validation = (value, options) => {
	let result = true;
	if (options.required) {
		result = result && value.trim() !== ""
	}

	if (options.startWithUpperCase) {
		result = result && startWithUpperCase(value)
	}

	if (options.noNumber) {
		result = result && !value.match(/\d/g)
	}

	if (options.minLength) {
		result = result && value.length >= options.minLength
	}

	return result;
}

function startWithUpperCase(val) {
	return !!val.match(/^[A-Z]/g)
}