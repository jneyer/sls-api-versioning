'use strict';

var url1="world1";
var url2="world2";

exports.handler = function(event, context, cb) {
    var url = url2
    var query = tryParseJson(event.query);

    if (query && query.v == 1)
    {
        url = url1
    }

    if (query && query.v > 2) {
        cb("[NotFound] Requested resource was not found.");
    }
    else {
        var versionstring = "world/v" + ((query && query.v)?query.v:"2");
        context.succeed({location:url, apiversion:versionstring});
    }

    function tryParseJson(str) {
    try {
        return JSON.parse(str);
    } catch (ex) {
        return null;
    }
}
};
