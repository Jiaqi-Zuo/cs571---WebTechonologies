let jsonData = 'data.json';
async function fetchJson() {
    const response = await fetch(jsonData);
    let result = await response.json();
    return result;
}
fetchJson().then(
    function(data) {
        let section2 = data["section2"];
	let section3 = data["section3"];
        let section4 = data["section4"];

	let mainContainer = document.getElementById("box");
	for(var i = 0; i < section2.length; i++){
		let cardItem = document.createElement("div");	
		cardItem.classList.add("card");
		var img = new Image();
		img.src = section2[i].image;
		img.setAttribute("width","211");
		img.setAttribute("height","139");
		cardItem.appendChild(img);
		let title = document.createElement("p");
		title.innerText = section2[i].heading;
		cardItem.appendChild(title);
		let content = document.createElement("p");
		content.classList.add("text");
		content.innerText = section2[i].text;
		cardItem.appendChild(content);
		mainContainer.appendChild(cardItem);
	}

	let s3content = document.getElementById("s3content");
	for(var j = 0; j < section3.text.length; j++){
		let content = document.createElement("p");
		content.innerText = section3.text[j];
		s3content.appendChild(content);
	}
	
	var img = new Image();
	img.src = section4[0].image;
	img.setAttribute("width","219");
	img.setAttribute("height","149");
	document.querySelector('#s4img1').appendChild(img);
	document.querySelector('#s4h1').innerText = section4[0].heading;
        document.querySelector('#s4text1').innerHTML = section4[0].text;

	var img = new Image();
	img.src = section4[1].image;
	img.setAttribute("width","219");
	img.setAttribute("height","149");
	document.querySelector('#s4img2').appendChild(img);
	document.querySelector('#rightTitle').innerText = section4[1].heading;
        document.querySelector('#s4text2').innerHTML = section4[1].text;
    }
)