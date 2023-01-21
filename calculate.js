
function getPlayerById(playerId) {
    const selectedPlayers = getTotalSelected();
    if (selectedPlayers < 5 ) {
        const selectPlayer2=document.getElementById(playerId);
        const playername=selectPlayer2.innerText;


        const setPlayerName= document.getElementById('li-container');
        const li =document.createElement('li');
        li.innerText=playername;
        setPlayerName.appendChild(li);


    }

    else{
        alert('You can not selected more than five');
    }
    
}

function getTotalSelected() {

    return document.getElementById('li-container').childElementCount;

}
function disableBtn(element) {
    document.getElementById(element).disabled=true;
    
}

// eventlistener for selecting polayer 

document.getElementById('player-1').addEventListener('click',function () {
    getPlayerById('neymar');
    disableBtn('player-1');
    
})
document.getElementById('player-2').addEventListener('click',function () {
    getPlayerById('messi');
    disableBtn('player-2');
    
})
document.getElementById('player-3').addEventListener('click',function () {
    getPlayerById('mbappe');
    disableBtn('player-3');
    
})
document.getElementById('player-4').addEventListener('click',function () {
    getPlayerById('ramos');
    disableBtn('player-4');
    
})
document.getElementById('player-5').addEventListener('click',function () {
    getPlayerById('renato');
    disableBtn('player-5');
    
})
document.getElementById('player-6').addEventListener('click',function () {
    getPlayerById('macado');
    disableBtn('player-6');
    
})

// eventlistener for calculation
document.getElementById('calculate-expenses').addEventListener('click',function () {

    
    const perPlayer =document.getElementById('per-player-field');
    const perPlayerAmountString = perPlayer.value;
     perPlayer.value= "";
    const perPlayerCost =parseFloat(perPlayerAmountString);

    const selectedPlayer =getTotalSelected();



    const totalCost = (perPlayerCost * selectedPlayer );

    const getPlayerExpeses=document.getElementById("player-expenses");
    getPlayerExpeses.innerText=totalCost;
  
   
    // totalCost=totalCost.innerTexttotalCoster ;


    // const totalCost = 
    // const getPlayerExpense=document.getElementById('player-expenses');
    //
    
})
document.getElementById('total-Cost').addEventListener('click',function () {
    const getPlayerexpenseString= document.getElementById('player-expenses').innerText;
    const PlayerExpense = parseFloat(getPlayerexpenseString);

    // manger
    const getManagerCost=document.getElementById('manager-cost');
    const getManagerCostString=getManagerCost.value;
    getManagerCost.value="";
    const managerExpense=parseFloat(getManagerCostString);

    

    // Coach
    const getCoachCost=document.getElementById('coach-cost');
    const getCoachCostString=getCoachCost.value;
    getCoachCost.value="";
    const coachExpense=parseFloat(getCoachCostString);


// total

const totalExpense =  PlayerExpense + managerExpense + coachExpense;
const getTheTotal= document.getElementById('total-expense');
getTheTotal.innerText=totalExpense;



})