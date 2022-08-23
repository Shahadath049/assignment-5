

document.getElementById('calculate-btn').addEventListener('click',function(){

  const playerPrice =   document.getElementById('player-price');
  const playerPriceString = playerPrice.value;
  const playerPriceValue = parseInt(playerPriceString);
  
  if(isNaN (playerPriceValue)){
    alert("Please Enter a Valid Data")
    return;
  }

    let parents = document.querySelectorAll(".item");
    let parentsLength = parents.length;

    const perPlayer = (parentsLength)* playerPriceValue;

    const playerCost = document.getElementById('total-player-cost'); 
    playerCost.innerText = perPlayer;
    playerPrice.value = '';


})
document.getElementById('total-btn').addEventListener('click',function(){
    const manager = document.getElementById('manager-price');
    const managerStrng = manager.value;
    const managerprice = parseInt(managerStrng);
    manager.value = '';
    if(isNaN (managerprice)){
        alert("Please Enter a Valid Data")
        return;
      }

    const coach = document.getElementById('coach-price');
    const coachString = coach.value;
    const coachPrice = parseInt(coachString);
    coach.value = '';
    if(isNaN (coachPrice)){
        alert("Please Enter a Valid Data")
        return;
      }

    const playerCost = document.getElementById('total-player-cost');
    const playerCostString = playerCost.innerText;
    const playerCostValue = parseInt(playerCostString); 

    const total = managerprice + coachPrice+ playerCostValue;
    console.log(total);

    const finalExpense = document.getElementById('team-expense');
    finalExpense.innerText = total

    
})
