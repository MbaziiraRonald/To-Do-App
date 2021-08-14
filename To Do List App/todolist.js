
let addToDoItemButton = document.getElementById('btnOne');

addToDoItemButton.addEventListener('click', () => { 
    let myInput = document.getElementById('myInput').value;
    let toDoItemList = document.querySelector('#toDoItemList');
    txtNode = document.createTextNode(myInput);
    let toDoItem = document.createElement('li');
        toDoItem.appendChild(txtNode);
        toDoItemList.appendChild(toDoItem);

    let toDoItemDeleteButton = document.createElement('button');
        toDoItemDeleteButton.textContent = 'X';
        toDoItemDeleteButton.className = 'toDoItemDeleteButton';
        toDoItem.appendChild(toDoItemDeleteButton);
        toDoItemDeleteButton.addEventListener('click', () => {
            toDoItemList.remove(li);
        })

    let toDoIsDoneButton = document.createElement('button');
        toDoIsDoneButton.textContent = 'Done';
        toDoIsDoneButton.className = 'toDoIsDoneButton';
        toDoItem.appendChild(toDoIsDoneButton);    
});





