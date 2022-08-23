

document.getElementById('calculate-btn').addEventListener('click',function(){

  const playerPrice =   document.getElementById('player-price');
  const playerPriceString = playerPrice.value;
  const playerPriceValue = parseInt(playerPriceString);

    // let parents = document.querySelectorAll(".item");
    // let parentsLength = parents.length;

    const perPlayer = 5* playerPriceValue;

    const playerCost = document.getElementById('total-player-cost'); 
    playerCost.innerText = perPlayer;


})
document.getElementById('total-btn').addEventListener('click',function(){
    const manager = document.getElementById('manager-price');
    const managerStrng = manager.value;
    const managerprice = parseInt(managerStrng);


    const coach = document.getElementById('coach-price');
    const coachString = coach.value;
    const coachPrice = parseInt(coachString);

    const playerCost = document.getElementById('total-player-cost');
    const playerCostString = playerCost.innerText;
    const playerCostValue = parseInt(playerCostString); 

    const total = managerprice + coachPrice+ playerCostValue;
    console.log(total);

    const finalExpense = document.getElementById('team-expense');
    finalExpense.innerText = total

    
})
