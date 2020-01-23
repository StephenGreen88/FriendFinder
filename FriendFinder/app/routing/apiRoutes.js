// Require necessary dependencies
var friendMatch = require('../data/friends');

// API Routes
module.exports = function (app) {
    // GET JSON route to display all possible friends
    app.get('/api/friends', function (req, res) {
        res.json(friendMatch);
    });

    // POST route to handle incoming survey results
    app.post('/api/friends', function (req, res) {
        var newFriend = req.body;
        // For loop for score
        for (var i = 0; i < newFriend.scores.length; i++) {
            if (newFriend.scores[i] == '1 (Yes)') {
                newFriend.scores[i] = 1;
            } else if (newFriend.scores[i] == '3 (No)') {
                newFriend.scores[i] = 3;
            } else {
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        }

        // array for comparison
        var comparisonArray = [];

        // For loop for comparison
        for (var i = o; i < comparisonArray.length; i++) {
            if (comparisonArray[i] < bestFriendNum) {
                bestFriendNum = comparisonArray[i];
                bestFriendI = i;
            }
        }

        // Push new friend 
        friendMatch.push(newFriend);
        // JSON bestFriend to the current friend match array
        res.json(friendMatch[bestFriendI]);

    });
};