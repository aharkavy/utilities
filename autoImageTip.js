
/*
 * autoImageTip.js
 * Javascript helper to reveal image src url's
 * Hooks document mouseover event and displays image elements src url as the title tooltip
 * @param bAlways - bool flag to only display when image title is not already defined
 * Usage (embed):
 *    document.onload = function() { autoImageTip(true); };
 * Usage (bookmarklet):
 *    javascript:(function(bAlways){var show = function(evt) {var elem = evt.srcElement||evt.target;if (elem.tagName === 'IMG' && (bAlways || !elem.title)) {elem.title = elem.src;}};if (window.addEventListener) {document.addEventListener('mouseover', show, false);} else if (window.attachEvent) {document.attachEvent('onmouseover', show);}})(true)
 */

function autoImageTip(bAlways)
{
    var showTip = function(evt) {
        var elem = evt.srcElement||evt.target;
        if (elem.tagName === 'IMG' && (bAlways || !elem.title)) {
            elem.title = elem.src;
        }
    };
    if (window.addEventListener) {
        document.addEventListener('mouseover', showTip, false);
    } else if (window.attachEvent) {
        document.attachEvent('onmouseover', showTip);
    }
}
