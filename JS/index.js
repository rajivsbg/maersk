var cardColorMap = {
	1: '#6F98A8',
	2: '#2B8EAD',
	3: '#2F454E',
	4: '#2B8EAD',
	5: '#2F454E',
	6: '#BFBFBF',
	7: '#BFBFBF',
	8: '#6F98A8',
	9: '#2F454E'	
}

function createDIV(value, bgColor, className) {
  var div = document.createElement('div');
  if(className) {
	div.className = className; 
  }
  div.textContent= value;
  div.style.background = bgColor;
  return div;
}

function renderCard() {
	for(var key in cardColorMap){
		getCardContainer(key, cardColorMap[key]);
	}
}

function getCardContainer(key, value) {
	var cardContainer = createDIV("","","card-primary");
	var cardPrimaryConatiner = createDIV(key, value, "card");
	var cardSecondaryContainer = createDIV(key, "", "cardInfo");
	cardContainer.appendChild(cardPrimaryConatiner);
	cardContainer.appendChild(cardSecondaryContainer);
	document.getElementById('card-container').appendChild(cardContainer);
}

function shuffleHandler() {
    var list = getRandomList();
	document.getElementById("card-container").innerHTML= "";
	for(var i=0; i < list.length; i++) {
		var key = parseInt(list[i]);
		getCardContainer(key, cardColorMap[key]);
	}
}

function sortHandler() {
	document.getElementById("card-container").innerHTML= "";
	renderCard();
}

function getRandomList() {
	var shuffleArray = [];
	var cardCount = Object.keys(cardColorMap).length;
    while(shuffleArray.length < cardCount) {
		var randomNumber = Math.floor(Math.random() * cardCount) + 1;
		if(shuffleArray.indexOf(randomNumber) === -1) {
			shuffleArray.push(randomNumber);
		}
    }
	return shuffleArray;
}