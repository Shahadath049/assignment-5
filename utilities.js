function selectPlayerById ( nameId,btnId){
    const addSelected = document.getElementById('list-container')
    const name = document.getElementById(nameId)
    const li = document.createElement('li');
    
    li.innerText = name.innerText;
    li.classList.add('item');
    addSelected.appendChild(li);

    const btnName = document.getElementById(btnId);
    btnName.setAttribute('disabled',true);

    const parent = document.getElementById('list-container');
    let childNodes = parent.childNodes;
    if(childNodes.length === 7){
        alert('You Cannot add more than 5 players');
        
    }
    

 }