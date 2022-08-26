

const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
// Delete Event 
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('keyup', filterItems);

// Add Item
function addItem(e) {
    e.preventDefault();
    // Get input value
    let newItem = document.getElementById('item').value;
    // create new li element
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    //create delete button element
    let deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    // Append button to li
    li.appendChild(deleteBtn);
    //Append li to list
    // add textNode with input value
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li)
}

// Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if(confirm('Are you sure want to DELETE?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // Converted to lowercase
    let text = e.target.value.toLowerCase();
    // Getting all the li's
    let items = itemList.getElementsByTagName('li');
    // Convert the HTML input to arrays within the dom
    Array.from(items).forEach(function(item){
       let itemName = item.firstChild.textContent;
       if (itemName.toLowerCase().indexOf(text) != -1) {
         item.style.display = 'block';
       } else {
        item.style.display = 'none';
       }
    });
}