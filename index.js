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

function uuid4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


function addToDoItemWithRandomColor(){
    const color = document.querySelector(`.c${Math.floor(Math.random() * Math.floor(6))}`);
    console.log(color);
    const id = uuid4();

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
    const id = uuid4();

    const toDoItem = document.createElement('li')
    toDoItem.className = 'toDoItem';
    toDoItem.value = input.value;
    toDoItem.id = `${id}`;
    toDoItem.style.backgroundColor = `${color.value}`;
    inner.append(toDoItem);

    const toDoCheckbox = document.createElement('input');
    toDoCheckbox.className = 'toDoCheckbox';
    toDoCheckbox.type = 'checkbox';
    toDoCheckbox.addEventListener('change', checkedBox);
    toDoItem.prepend(toDoCheckbox);
    console.log(color.value);

    const dltButton = document.createElement('button');
    dltButton.type = 'button';
    dltButton.className = 'dltButton';
    dltButton.innerText = 'del';
    dltButton.addEventListener('click', function (){
        document.getElementById(`${id}`).remove();
    });
    toDoItem.append(dltButton)

    function parseElem(){
        let a = {};
        a.tagName = toDoItem.tagName;
        a.className = toDoItem.getAttribute('class');
        a.innerText = toDoItem.getAttribute('innerText');
        a.id = toDoItem.getAttribute('id');
        a.style = toDoItem.getAttribute('style')
        localStorage.setItem(`1`, JSON.stringify(a))

    }
    parseElem();
}

function loadItem(){
    let a;
    a = JSON.parse(localStorage.getItem('1'));
    const toDoItem = document.createElement(a.tagName)
    toDoItem.className = a.className;
    toDoItem.value = a.innerText;
    toDoItem.id = a.id;
    toDoItem.style = a.style;
    inner.append(toDoItem);
    console.log(toDoItem);
    console.log('shift');
}

function checkedBox(){
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
        addToDoItemWithRandomColor();
    }else {
        addToDoItem();
        document.querySelector('.active').checked = false;
        document.querySelector('.active').classList.toggle('active', false);
    }
    // addToStorage()
});

// document.querySelector('.addToDo').addEventListener('click', addToStorage);
//
function clearLocal(){
    localStorage.clear();
}