const inner = document.querySelector('.ul_inner');
const input = document.querySelector('.input');

function func(){
    let radio = document.querySelectorAll('.radio');
    for (let a of radio){
        if(a.checked){
            a.classList.toggle('active', true);
            console.log(a)
            return;
        }
        a.classList.toggle('active', false);
        console.log(a)
    }
}



function addToDoItemWithRandomColor(){
    const color = document.querySelector(`.c${Math.floor(Math.random() * Math.floor(6))}`);
    console.log(color);
    const id = new Date();
    // const toDoInner = document.createElement('div')
    // toDoInner.className = 'toDoInner';
    // // toDoInner.id = `${id}`;
    // inner.append(toDoInner);

    const toDoItem = document.createElement('li')
    toDoItem.className = 'toDoItem';
    toDoItem.innerText = input.value;
    toDoItem.id = `${id}`;
    toDoItem.style.backgroundColor = `${color.value}`;
    inner.append(toDoItem);

    const toDoCheckbox = document.createElement('input');
    toDoCheckbox.className = 'toDoCheckbox';
    toDoCheckbox.type = 'checkbox';
    toDoCheckbox.id = `${id}`;
    toDoCheckbox.addEventListener('click', checkedBox);
    toDoItem.prepend(toDoCheckbox);

    const dltButton = document.createElement('button');
    dltButton.type = 'button';
    dltButton.innerText = 'del';
    dltButton.id = `${id}`;
    dltButton.addEventListener('click', function (){
        document.getElementById(`${id}`).remove();
    });
    toDoItem.append(dltButton)
}


function addToDoItem(){
    const color = document.querySelector('.active');
    const id = new Date();
    // const toDoInner = document.createElement('div')
    // toDoInner.className = 'toDoInner';
    // // toDoInner.id = `${id}`;
    // // toDoInner.style.backgroundColor = `${color.value}`
    // inner.append(toDoInner);

    const toDoItem = document.createElement('li')
    toDoItem.className = 'toDoItem';
    toDoItem.innerText = input.value;
    toDoItem.id = `${id}`;
    toDoItem.style.backgroundColor = `${color.value}`;
    inner.append(toDoItem);

    const toDoCheckbox = document.createElement('input');
    toDoCheckbox.className = 'toDoCheckbox';
    toDoCheckbox.type = 'checkbox';
    // toDoCheckbox.style.backgroundColor = `${color.value}`;
    toDoCheckbox.addEventListener('change', checkedBox);
    toDoItem.prepend(toDoCheckbox);
    console.log(color.value);

    const dltButton = document.createElement('button');
    dltButton.type = 'button';
    dltButton.innerText = 'del';
    dltButton.addEventListener('click', function (){
        document.getElementById(`${id}`).remove();
    });
    toDoItem.append(dltButton)
}

function checkedBox(){
    // const parent =
    console.log(this.parentNode)
    let div = document.getElementById(`${this.parentNode.id}`);
    let checkBox = document.querySelectorAll('.toDoCheckbox');
    for (let a of checkBox){
        if(a.checked){
            div.classList.toggle('activeCheckbox', true);
            console.log('active');
            return
        }
        div.classList.toggle('activeCheckbox', false);
        console.log('sad');
    }
}

document.querySelector('.addToDo').addEventListener('click', function(){
    const color = document.querySelector('.active');
    if(color === null){
        addToDoItemWithRandomColor()
    }else {
        addToDoItem();
        document.querySelector('.active').checked = false;
        document.querySelector('.active').classList.toggle('active', false);
    }
});


