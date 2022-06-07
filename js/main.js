document.querySelector('#getQuote').addEventListener('click', apiReq)

async function apiReq() {

    try {
        const res = await fetch('https://bernie-sanders-quotes-api.herokuapp.com/api')
        const data = await res.json()

        console.log(data);
        document.querySelector("#quoteText").textContent = data;
    } catch(error) {
        console.log(error);
    }
    
}