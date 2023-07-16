export;
// Selector CSS $
const $ = (selector, content)=>{
	return (content || document).querySelector(selector);
}

// CSS
const add = (element, ...className) => {
	let getClass = [...className];
	for (var i = getClass.length - 1; i >= 0; i--) {
		element.classList.add(getClass[i]);
	}
}

const toggle = (element, className) => {
	element.classList.toggle(className);
}

const remove = (element, className) => {
	element.classList.remove(className);
	return className
}

const has = (element, className) => {
	const getClassName = element.getAttribute('class');

	if (getClassName) {
		const reg = new RegExp(className, 'g'),
			checkCSS = reg.test(getClassName);
		return checkCSS ? true : false;
	}
	return ''
}

const clean = (array, className)=>{
	for (var i = 0; i < array.length; i++) {
		array[i].classList.remove(className)
	}
}