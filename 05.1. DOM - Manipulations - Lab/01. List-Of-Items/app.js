function addItem() {
    const itemList = document.getElementById('items');
    const textInput = document.getElementById('newItemText');

    let textInputValue = textInput.value;
    //ако потребителя въвежда празен стринг,
    if (!textInputValue) {return; }
    const li = document.createElement('li');
    li.innerText = textInputValue;
    itemList.appendChild(li);
    textInput.value = '';
}