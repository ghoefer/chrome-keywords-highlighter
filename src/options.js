function loadOptions() {
	if ("undefined" != typeof localStorage) {
		document.getElementById("textKeywords").value = localStorage.getItem("keywords");
		document.getElementById("colorColor").value = localStorage.getItem("color");
		document.getElementById("colorBackgroundColor").value = localStorage.getItem("backgroundColor");
	}
}

function saveOptions() {
	if ("undefined" != typeof localStorage) {
		localStorage.setItem("keywords", document.getElementById("textKeywords").value);
		localStorage.setItem("color", document.getElementById("colorColor").value);
		localStorage.setItem("backgroundColor", document.getElementById("colorBackgroundColor").value);
	}
}

document.addEventListener("DOMContentLoaded", function() {
	loadOptions();

	document.getElementById("buttonReset").addEventListener("click", function() {
		loadOptions();
	});

	document.getElementById("buttonSave").addEventListener("click", function() {
		saveOptions();
	});
});
