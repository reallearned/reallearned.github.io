window.onload = function() {
    let url = localStorage.getItem('encodedUrl');
    var site = document.getElementById('site');
    site.src = '/edu/' + url;
}