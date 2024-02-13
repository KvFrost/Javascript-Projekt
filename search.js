// Array med søgeord
var searchTerms = ['sko', 'jenas', 'jakker','tøj', 'beauty', 'sport','accessories'];


// Funktion til at skifte søgefeltets tilstand
function toggleSearch() {
    var searchBar = document.getElementById('searchBar');
    if (searchBar.classList.contains('active')) {
        searchBar.classList.remove('active');
    } else {
        searchBar.classList.add('active');
    }
}

// Funktion til at udføre søgning
function search() {
    // Gennemgå hvert søgeord i arrayet
    for (var i = 0; i < searchTerms.length; i++) {
        var searchTerm = searchTerms[i];
        if (searchTerm !== '') {
            console.log('Søger efter: ' + searchTerm);
            // Implementer søgelogikken her
        } else {
            console.log('Indtast venligst et søgeord for felt ' + (i + 1));
        }
    }
  }