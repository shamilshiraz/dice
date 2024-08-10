const result=document.getElementById('result')
var images=[];
function roll(){
    result.textContent= Math.floor(Math.random()*6)+1;

    if(result=1){
        images.push(`<img src="images/${result}.png"> alt=dice`)
    }
}