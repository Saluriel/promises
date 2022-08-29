let baseURL = 'https://deckofcardsapi.com/api/deck/'

// #1
// $.getJSON(`${baseURL}/new/draw/`)
//     .then(res=>{
//        let { suit, value} = res.cards[0]
//        console.log(`${value}`.toLowerCase() + ' of ' +  `${suit}`.toLowerCase() )
//     })
//     .catch(err=>{
//         console.log(err)
//     })

// #2
// let firstCard = null;
// $.getJSON(`${baseURL}/new/draw/`)
//     .then(res=>{
//         firstCard = res.cards[0];
//         let deckId = res.deck_id;
//         return $.getJSON(`${baseURL}/${deckId}/draw/`);
//     })
//     .then(res => {
//         let secondCard = res.cards[0];
//         [firstCard, secondCard].forEach(function(card) {
//             console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`);
//         });
//         });
 
// #3
let deckId = null;
let $button = $('button');
let $cardDiv = $('.cardDiv')
$button.hide()

$.getJSON(`${baseURL}/new/draw/`)
    .then(res => {
        deckId = res.deck_id;
        $button.show()
    })

$button.on('click', function(){
    $.getJSON(`${baseURL}/${deckId}/draw/`)
        .then(res => {
            let cardImg = res.cards[0].image
            let HTML = `<img src="${cardImg}">`
            $cardDiv.append(HTML)
            if (res.remaining === 0) $button.remove();
        })
        
})