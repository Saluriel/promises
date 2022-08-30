let favNumber =13;
let baseURL = 'http://numbersapi.com';

// #1
async function getNumberFact() {
    let res = await $.getJSON(`${baseURL}/${favNumber}?json`)
    console.log(res.text)
}



// #2
let numbers = '37,33,14' 
async function getMultipleNumbers() {
    let res = await axios.get(`${baseURL}/${numbers}?json`)
    for(const fact in res.data){
                    const body = document.querySelector('body')
                    const oneFact = res.data[fact]
                    const p = document.createElement('p')
                    p.append(oneFact)
                    body.append(p)
                    
                }
}

// // #3
function putOnPage(oneFact){
    const body = document.querySelector('body')
    const p = document.createElement('p')
    p.append(oneFact)
    body.append(p)
}

async function getFourFacts() {
    let facts = await Promise.all([
        axios.get(`${baseURL}/${favNumber}?json`),
        axios.get(`${baseURL}/${favNumber}?json`),
        axios.get(`${baseURL}/${favNumber}?json`),
        axios.get(`${baseURL}/${favNumber}?json`)
    ]);

    putOnPage(facts[0].data.text)
    putOnPage(facts[1].data.text)
    putOnPage(facts[2].data.text)
    putOnPage(facts[3].data.text)
}