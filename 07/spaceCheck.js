var el = document.getElementById('spaceText');
var text = el.innerText === undefined ? el.textContent : el.innerText;

show(text.length);

var result = /^\s*$/.test(text);

show(result);
