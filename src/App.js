// Predefined items for the checklist
const predefinedItems = [
  { name: 'Furniture', quantity: 0 },
  { name: 'Electronics', quantity: 0 },
  { name: 'Clothing', quantity: 0 },
  { name: 'Kitchenware', quantity: 0 },
  { name: 'Important Documents', quantity: 0 },
  { name: 'Jewelry', quantity: 0 },
  { name: 'Personal Items', quantity: 0 },
];

// Memory aid prompts
const memoryAids = [
  "Do you remember your bedroom furniture setup?",
  "What was in your garage or storage area?",
  "Think about items in your living room.",
  "Did you have any outdoor furniture or tools?",
];

// Select DOM elements
const itemForm = document.querySelector('#item-form');
const itemList = document.querySelector('#item-list');
const customItemInput = document.querySelector('#custom-item');
const memoryAidButton = document.querySelector('#memory-aid');

// Function to render items to the checklist
function renderItems(items) {
  itemList.innerHTML = ''; // Clear the list
  items.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'item';
    listItem.innerHTML = `
      <span>${item.name}</span>
      <input type="number" min="0" value="${item.quantity}" data-index="${index}" class="quantity-input" />
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    itemList.appendChild(listItem);
  });
}

// Function to update localStorage
function saveItems(items) {
  localStorage.setItem('inventoryItems', JSON.stringify(items));
}

// Function to load items from localStorage
function loadItems() {
  const storedItems = localStorage.getItem('inventoryItems');
  return storedItems ? JSON.parse(storedItems) : predefinedItems;
}

// Load items and render on page load
const inventoryItems = loadItems();
renderItems(inventoryItems);

// Event listener: Add custom item
itemForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const customItemName = customItemInput.value.trim();
  if (customItemName) {
    inventoryItems.push({ name: customItemName, quantity: 0 });
    customItemInput.value = '';
    renderItems(inventoryItems);
    saveItems(inventoryItems);
  }
});

// Event listener: Update quantity or delete item
itemList.addEventListener('input', (e) => {
  if (e.target.classList.contains('quantity-input')) {
    const index = e.target.dataset.index;
    inventoryItems[index].quantity = parseInt(e.target.value, 10) || 0;
    saveItems(inventoryItems);
  }
});

// Event listener: Delete item
itemList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const index = e.target.dataset.index;
    inventoryItems.splice(index, 1);
    renderItems(inventoryItems);
    saveItems(inventoryItems);
  }
});

// Event listener: Show memory aid
memoryAidButton.addEventListener('click', () => {
  const randomAid = memoryAids[Math.floor(Math.random() * memoryAids.length)];
  alert(randomAid);
});
