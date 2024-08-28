window.onload = function() {
    let url = localStorage.getItem('encodedUrl');
    var site = document.getElementById('site');

    url = Ultraviolet.codec.xor.decode(url);
    site.src = '/edu/' + url;
}