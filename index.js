const inner = document.querySelector('.ul_inner');
const input = document.querySelector('.input')


function addToDoItem(){
    const id = new Date();
    const toDoItem = document.createElement('li')
    toDoItem.className = 'toDoItem';
    toDoItem.innerText = input.value;
    toDoItem.id = `${id}`;
    inner.append(toDoItem);
    const dltButton = document.createElement('button');
    dltButton.type = 'button';
    dltButton.innerText = 'del';
    dltButton.addEventListener('click', function (){
        document.getElementById(`${id}`).remove();
    });
    toDoItem.append(dltButton)
}

document.querySelector('.addToDo').addEventListener('click', addToDoItem);

