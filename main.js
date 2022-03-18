const randomAdviceBtn = document.getElementById('randomAdviceBtn');
const adviceID = document.getElementById('adviceID');
const adviceContent = document.getElementById('adviceContent');


const getRandomAdvice = async () =>{
    let result = await fetch('https://api.adviceslip.com/advice')
                .then((response)=> {
                    return response.json()})
                .then((jsonresponse)=>{
                    return jsonresponse.slip})

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