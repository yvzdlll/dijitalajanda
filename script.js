// script.js

let currentPage = 1;
const notesData = {};

// Set the initial date and page content
function updatePage() {
    const today = new Date();
    document.getElementById("date").innerText = today.toDateString();
    document.getElementById("notes").value = notesData[currentPage] || "";
}

// Save notes and update to next page
function nextPage() {
    saveNotes();
    currentPage++;
    updatePage();
}

// Save notes and update to previous page
function prevPage() {
    saveNotes();
    if (currentPage > 1) currentPage--;
    updatePage();
}

// Save notes data
function saveNotes() {
    notesData[currentPage] = document.getElementById("notes").value;
}

// Search function
document.getElementById("search").addEventListener("input", function(e) {
    const searchText = e.target.value.toLowerCase();
    for (let page in notesData) {
        if (notesData[page].toLowerCase().includes(searchText)) {
            currentPage = parseInt(page);
            updatePage();
            break;
        }
    }
});

// Initialize the first page
updatePage();
