// A set of javascript functions that saves a .txt file to a cache
// Note that files are cached in local storage for the purposes of this exercise
// Code is uploaded to the following gitHub repository: 


// id; id portion of the file, as a string
// description; description portion of the file, as a string
// doc; file object, which is needed to correctly cache the file
var id = '“id”: 2019,'
var description = '“message”: “Telstra 2019 Graduate Program”'
var doc;

// Function that sends the POST request to save the document to the cache
function cacheDocument() {
	var documentSaver = new XMLHttpRequest();
	
	// Creates .txt document to store in cache
	createDoc(id, description, doc);
	
	//Opens the POST request, parses the javascript object into a string, 
	//sends the string thorough to the cache, then closes the POST request
	documentSaver.open("POST", true);
	var cache = localStorage.setItem("doc", JSON.stringify(cast))
	documentSaver.send(cache);
	
	//Timer that clears the cache if more than 30 seconds have passed.
	setTimeout(clearCache, 3000);
}


// Function that sends the GET request to retrieve the file, returns a 404 error if the file is not found
// If the file is found, prints it out.
function getDocument(){
	var documentGetter = new XMLHttpRequest();
	documentGetter.open("GET", "doc.txt" true);
	
	documentGetter.onreadystatechange = function() {
		if (this.readyState == 4 && this.status = 404)
			documentGetter.responseText.print;
		else
			localStorage.getItem("doc").print;		
	}
	documentGetter.send();
}

// Function that creates the document to be saved to the cache, encodes it as a .txt type
function createDoc (id, description, doc){
	doc = document.createElement('a');
	doc.setAttribute('href', 'data:text/plain;charset=utf-8', encodeURIComponent(id + text));
}

//Function that clears the cache of all data
function clearCache (){
	localStorage.clear();
}
