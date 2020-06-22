function solve() {
    String.prototype.capitalize = function() {
        // When called to ANY string.capitalize() the string will become:
        // The First letter will be capital and the rest - lower Case.
        return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    }
    document.querySelector('button').addEventListener("click", function(){
        let text = document.querySelector('input');
        //if input is empty - break
        if (!text.value) { return; }  
        
        // Now get the first letter Index:
        let firstLetterIndex = text.value[0].toUpperCase().charCodeAt(0) - 65;
        
        // Now lets get the list element on that index:
        let element = document.querySelector('ol').children.item(firstLetterIndex);
        
        // Set the new element as required.
        let list = element.textContent.split(', ');  // First Create the Array,
        list.push(text.value.capitalize());  // Second Add the new item BUT CAPITALIZED,
        list = list.filter(Boolean);  // Just to make sure that there is no empty assholes.
        element.textContent = list.join(', ');  // Add the new text to the Element :)
        
        // Clear the input Field:
        text.value = '';
    });
}