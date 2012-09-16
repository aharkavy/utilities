function parseUrl(href)
{
    var url = {};
    href.replace(/^([a-z]{3,5}:)(\/\/)([^:\/]+)(:[0-9]+)?(\/[^#?]+)(#[^?]+)?(\?.+)?$/i,
    function(a, prot, slash2, host, port, path, hash, search)
    {
        url.href     = href;
        url.origin   = prot + slash2 + host + (port||'');
        url.protocol = prot;
        url.hostname = host;
        url.host     = host + (port||'');
        url.port     = (port||':').substr(1);
        url.pathname = path||'';
        url.hash     = hash||'';
        url.search   = search||'';
    });
    return url;
};
