let favNumber =13;
let baseURL = 'http://numbersapi.com';

// #1
// $.getJSON(`${baseURL}/${favNumber}?json`, res => {
//     console.log(res.text);
// });

// #2
// let numbers = '37,33,14'
// axios
//     .get(`${baseURL}/${numbers}?json`)
//     .then(res => {
//         for(const fact in res.data){
//             const body = document.querySelector('body')
//             const oneFact = res.data[fact]
//             const p = document.createElement('p')
//             p.append(oneFact)
//             body.append(p)
            
//         }
//     })
//     .catch(err =>{
//         console.log(err)
//     })


// #3
function putOnPage(oneFact){
    const body = document.querySelector('body')
    const p = document.createElement('p')
    p.append(oneFact)
    body.append(p)
}

axios
    .get(`${baseURL}/${favNumber}?json`)
    .then(p1=>{
        const oneFact = p1.data.text
        putOnPage(oneFact)
        return axios.get(`${baseURL}/${favNumber}?json`)
    })
    .then(p2=>{
        const body = document.querySelector('body')
        const oneFact = p2.data.text
        putOnPage(oneFact)
        return axios.get(`${baseURL}/${favNumber}?json`)
    })
    .then(p3=>{
        const body = document.querySelector('body')
        const oneFact = p3.data.text
        putOnPage(oneFact)
        return axios.get(`${baseURL}/${favNumber}?json`)
    })
    .then(p4=>{
        const body = document.querySelector('body')
        const oneFact = p4.data.text
        putOnPage(oneFact)
    })
    .catch(err =>{
        console.log(err)
    })