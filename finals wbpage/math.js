


document.getElementById("sqrt").onclick = function() {
    const input = document.getElementById("input").value;
    let sqrt = Math.sqrt(input);
    document.getElementById("answer").innerText = "(" + sqrt +")²";
};

document.getElementById("round").onclick = function() {
    const input = document.getElementById("input").value;
    let round = Math.round(input);
    document.getElementById("answer").innerText = "(" + round +")";
};

document.getElementById("random").onclick = function() {
    const input = document.getElementById("input").value;
    let random = Math.ceil(Math.random() * input);
    document.getElementById("answer").innerText = "(" + random +")";
};


document.getElementById("absolute").onclick = function() {
    const input = document.getElementById("input").value;
    let absolute = Math.abs(input);
    document.getElementById("answer").innerText = "(" + absolute +")";
};

let btn = document.querySelector('.button button')



btn.addEventListener('click', ()=>{
    input.value = ""
    answer.innerText = ""
})




const toggle = document.getElementById('checkbox');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    if(this.classList.toggle('checkbox1')){
        body.style.background = "white";
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = '#212121';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});


