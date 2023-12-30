let i = 1
let names = [ 'im sorry','na pannadhu thappu dha','enna mannichru', 'im not ignoring you intentinally',
'nee sonna mari en action unna apdi feel panna vechadhuku','enna mannichuru da','please','im an idiot ','enna mannichu ethuko',"your'e the best thing in my life ","and im the worst for you,but i'll became the best one for you ", 'so pleaseenna mannichuru da' ];
function nextName(){
    let btn = document.getElementById('btn')
    let result
    if (i==names.length-1){
        i = 0
    }
    result = names[i++] 
    document.getElementById('result').innerText = result;
}
function previousName(){
    let btn = document.getElementById('btn')
    let result
    if (i===0){
        i = names.length
    }
    i=i-1
    result = names[i] 
    document.getElementById('result').innerText = result;
}