/*Array med søgeord*/
let searchTerms = ['sko', 'jeans', 'jakker','tøj', 'beauty', 'sport','accessories'];

/*Funktion der åbner og lukker searchbar*/
function toggleSearch() {
    let searchBar = document.getElementById('searchBar');
    if (searchBar.classList.contains('active')) {
        searchBar.classList.remove('active');
    } else {
        searchBar.classList.add('active');
    }
}

/*Funktion der søger efter søgeord fra array */
function search() {
    for (let i = 0; i < searchTerms.length; i++) {
        var searchTerm = searchTerms[i];
        if (searchTerm !== '') {
            console.log('Søger efter: ' + searchTerm);
    }
}
}