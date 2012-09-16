/*
 * paramMap.js
 * URI parameter parsing helper
 * Parses the search section of a url to an object of key/values
 * Supports complex param names (e.g: URL?simple=boring&.strange-and**unusual-4.....'5'!=strangeAndUnusual
 * Example:
 
 *    var params = paramMap(location.search);
 *    if (params.simple) {
 *      // do something boring
 *    }
 *    if (params['strange-and**unusual-4.....\'5\'!']) {
 *      // do something strange and unusual
 *    }
 */

function paramMap(s, o)
{
    s = s||"";
    o = o||{};
    s.replace(/[&?](([._\-]?)([a-z%][a-z0-9._%\-\/\!\*\'\"]*)=([^&]*))/gim,function(a,m,d,p,v)
    {
        o[unescape(p)] = unescape(v);
    });
    return o;
};