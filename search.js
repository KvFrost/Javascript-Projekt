var searchTerms = ['sko', 'jenas', 'jakker','tøj', 'beauty', 'sport','accessories'];


function toggleSearch() {
    var searchBar = document.getElementById('searchBar');
    if (searchBar.classList.contains('active')) {
        searchBar.classList.remove('active');
    } else {
        searchBar.classList.add('active');
    }
}

function search() {
    for (var i = 0; i < searchTerms.length; i++) {
        var searchTerm = searchTerms[i];
        if (searchTerm !== '') {
            console.log('Søger efter: ' + searchTerm);
        } else {
            console.log('Indtast venligst et søgeord ' + (i + 1));
        }
    }
  }