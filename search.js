function toggleSearch() {
    var searchBar = document.getElementById('searchBar');
    if (searchBar.classList.contains('active')) {
        searchBar.classList.remove('active');
    } else {
        searchBar.classList.add('active');
    }
  }
  
  function search() {
    var searchTerm = document.getElementById('searchInput').value;
    if (searchTerm !== '') {
        console.log('Søger efter: ' + searchTerm);
        // Her kan du implementere søgelogikken, f.eks. vise søgeresultater osv.
    } else {
        console.log('Indtast venligst et søgeord.');
    }
  }
  