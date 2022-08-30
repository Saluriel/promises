let baseURL = 'https://deckofcardsapi.com/api/deck/'

// #1
async function getOneCard(){
    let res = await $.getJSON(`${baseURL}/new/draw/`)
    let {suit, value} = res.cards[0]
    console.log(`${value}`.toLowerCase() + ' of ' +  `${suit}`.toLowerCase() )
}

// #2
async function drawTwoCards(){
    let firstDraw = await $.getJSON(`${baseURL}/new/draw/`)
    let firstCard = firstDraw.cards[0];
    let deckId = firstDraw.deck_id;
    let secondDraw = await $.getJSON(`${baseURL}/${deckId}/draw/`)
    let secondCard = secondDraw.cards[0];
    console.log(`${firstCard.value.toLowerCase()} of ${firstCard.suit.toLowerCase()}`);
    console.log(`${secondCard.value.toLowerCase()} of ${secondCard.suit.toLowerCase()}`);
}

 
// #3
let deckId = null
let $button = $('button');
let $cardDiv = $('.cardDiv')
$button.hide()

class Deck {
    async newDeck() {
        let res = await $.getJSON(`${baseURL}/new/draw/`)
        deckId = res.deck_id
        $button.show()
    }

    async newCard() {
        let res = await $.getJSON(`${baseURL}/${deckId}/draw/`)
        let cardImg = res.cards[0].image
        let HTML = `<img src="${cardImg}">`
        $cardDiv.append(HTML)
        if (res.remaining === 0) $button.remove();
    }
}

let d = new Deck
d.newDeck()
$button.on('click', d.newCard)