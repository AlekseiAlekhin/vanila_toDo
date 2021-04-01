const inner = document.querySelector('.ul_inner');
const input = document.querySelector('.input');
let objItem = {};
let arrItems = [];
let newList = {};

function func(){
    let radio = document.querySelectorAll('.radio');
    for (let a of radio){
        if(a.checked){
            a.classList.toggle('active', true);
            return;
        }
        a.classList.toggle('active', false);
        console.log(a)
    }
}

function checkedBox(){
    // console.log(this.parentNode)
    let div = document.getElementById(`${this.parentNode.id}`);
    let checkBox = document.querySelectorAll('.toDoCheckbox');
    for (let a of checkBox){
        if(a.checked){
            div.classList.toggle('activeCheckbox', true);
            console.log('active');
            newList.checkedCheckbox = 'checked';
            return
        }
        div.classList.toggle('activeCheckbox', false);
        newList.checkedCheckbox = 0;


        console.log('sad');
    }
}

function uuid4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function addToDoItem(){
    let color;

    if (document.querySelector('.active')){
        color = document.querySelector('.active');
    }else{
        color = document.querySelector(`.c${Math.floor(Math.random() * Math.floor(6))}`);
    }

    const toDoItem = document.createElement('li')
    toDoItem.className = 'toDoItem';
    toDoItem.id = `${uuid4()}`;
    toDoItem.style.backgroundColor = `${color.value}`;
    inner.append(toDoItem);

    const toDoCheckbox = document.createElement('input');
    toDoCheckbox.className = 'toDoCheckbox';
    toDoCheckbox.type = 'checkbox';
    toDoCheckbox.addEventListener('change', checkedBox);
    toDoItem.prepend(toDoCheckbox);
    console.log(color.value);

    const toDoText = document.createElement('output');
    toDoText.className = 'toDoText';
    toDoText.value = input.value;
    toDoItem.append(toDoText);

    newList = {
        idItem: toDoItem.id,
        styleItem: toDoItem.style.backgroundColor,
        valueText: toDoText.value,
        checkedCheckbox: 0,
    }

    arrItems.push(newList)
    localStorage.setItem('1',JSON.stringify(arrItems));
    console.log('newList', localStorage.getItem('1'))

}

function loadItem(){
    if (localStorage.getItem('2') === 'true') {
        let arrItemsNew = JSON.parse(localStorage.getItem('1'))
        arrItemsNew.forEach(function(objItemNew){
            const toDoItem = document.createElement('li')
            toDoItem.className = 'toDoItem';
            toDoItem.id = objItemNew.idItem;
            toDoItem.style.backgroundColor = objItemNew.styleItem;
            inner.append(toDoItem);

            const toDoCheckbox = document.createElement('input');
            toDoCheckbox.className = 'toDoCheckbox';
            toDoCheckbox.type = 'checkbox';
            toDoCheckbox.checked = objItemNew.checkedCheckbox;
            toDoCheckbox.addEventListener('change', checkedBox)
            toDoItem.prepend(toDoCheckbox);

            const toDoText = document.createElement('output');
            toDoText.className = 'toDoText';
            toDoText.value = objItemNew.valueText;
            toDoItem.append(toDoText);})
    }else {
        alert('localStorage was cleared')
    }}


document.querySelector('.addToDo').addEventListener('click', function() {
    if (document.querySelector('.active') !== null){
        localStorage.setItem('2', 'true');
        addToDoItem();
        document.querySelector('.active').checked = false;
        document.querySelector('.active').classList.toggle('active', false)
    }else{
        addToDoItem();
        localStorage.setItem('2', 'true');
    }
})
