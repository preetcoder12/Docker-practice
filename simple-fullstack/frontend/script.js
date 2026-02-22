const API_URL = 'http://localhost:5001/api/items';

const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

// Fetch and display items
async function fetchItems() {
    try {
        const response = await fetch(API_URL);
        const items = await response.json();
        // Sync with local storage
        localStorage.setItem('items', JSON.stringify(items));
        renderItems(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        // Fallback to local storage if server is down
        const savedItems = localStorage.getItem('items');
        if (savedItems) {
            renderItems(JSON.parse(savedItems));
        }
    }
}

// Render items to the DOM
function renderItems(items) {
    itemList.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.text}</span>
            <button class="delete-btn" onclick="deleteItem(${item.id})">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
            </button>
        `;
        itemList.appendChild(li);
    });
}

// Add a new item
async function addItem() {
    const text = itemInput.value.trim();
    if (!text) return;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });

        if (response.ok) {
            itemInput.value = '';
            fetchItems(); // fetchItems will handle the localStorage sync
        }
    } catch (error) {
        console.error('Error adding item:', error);
    }
}

// Make deleteItem available to the global scope since it's used in HTML onclick
window.deleteItem = async function (id) {
    console.log('Deleting item:', id);
    try {
        const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        console.log('Delete response:', response.status);
        fetchItems(); // fetchItems will handle the localStorage sync
    } catch (error) {
        console.error('Error deleting item:', error);
    }
}

// Event listeners
addButton.addEventListener('click', addItem);
itemInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
});

// Initial fetch
fetchItems();
