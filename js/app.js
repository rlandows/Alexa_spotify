
var song_uri = ['7qiZfU4dY1lWllzX7mPBI3', '17cy40GIhqCU5aQzlSI5EX', '6AeQlMyRzvSl1nkFztZyKl']

var request = require('request');
var i = 0;
var json_list = [];
while (i < song_uri.length) {




var response = request({
    method: 'GET',
    uri: 'https://api.spotify.com/v1/tracks/' + song_uri[i]
}, function(error, response, body) {
    //* workaround for issue with this particular apiUrl
    var firstChar = body.substring(0, 1);
    var firstCharCode = body.charCodeAt(0);
    if (firstCharCode == 65279) {
        console.log('First character "' + firstChar + '" (character code: ' + firstCharCode + ') is invalid so removing it.');
        body = body.substring(1);
    }
        
        var parsedJson = JSON.parse(body).preview_url;
        var titleJson = JSON.parse(body).name;
    
        json_list.push({title:titleJson, url: parsedJson});
 
        console.log(json_list);
//    console.log('parsedJson: ', parsedJson);
    
    });
    i++;
//    if (i === json_list.length - 1) {
//    return json_list;
//    };
};

console.log(json_list);
console.log(i);
