// This file contains the JavaScript code that handles the search functionality. It captures the user input from the form and redirects the user to Google with the search query.

document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = document.getElementById('search-input').value;
        const googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        window.location.href = googleSearchUrl;
    });
});