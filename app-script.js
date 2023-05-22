// Using DOMContentLoaded for assigning EventListener to buttons 
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const clearButton = document.getElementById('clearButton');
    const randomButton = document.getElementById('randomButton');
  
    searchButton.addEventListener('click', searchCharacters);
    clearButton.addEventListener('click', clearCharacters);
    randomButton.addEventListener('click', getRandomCharacter);
  });
  
