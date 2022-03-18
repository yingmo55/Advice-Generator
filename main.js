const randomAdviceBtn = document.getElementById('randomAdviceBtn');
const adviceID = document.getElementById('adviceID');
const adviceContent = document.getElementById('adviceContent');


const getRandomAdvice = async () =>{
    let result = await fetch('https://api.adviceslip.com/advice')
                .then((response)=> {
                    console.log('it loaded', Date.now())
                    return response.json()})
                .then((jsonresponse)=>{
                    console.log('it loaded again!', Date.now())
                    return jsonresponse.slip})

    console.log('This should load last!', Date.now())
    adviceID.innerHTML = result.id;
    adviceContent.innerHTML = result.advice;
}

// To allow the 
randomAdviceBtn.addEventListener('click', ()=>{
    randomAdviceBtn.disabled = true;
    setTimeout(()=>{
        randomAdviceBtn.disabled = false;
    }, 1500)
})