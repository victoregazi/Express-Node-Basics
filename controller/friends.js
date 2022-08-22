const friends = [
    {
        id: 0,
        name: 'John',
    },
    {
        id: 1,
        name: 'John Smith'
    }
]

function postFriends(req, res) {
    //Validated Request...
    if(!req.body.name) {
       res.status(400).json({
           error: 'missing name xist'
       }); 
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    }
    friends.push(newFriend);
    res.json(newFriend);
};

function getFriendsId(req, res) {
    const id = Number(req.params.id);
    const friend = friends[id];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
           error: 'Not Found friend not exist'
        });
    }
};

function getFriends(req, res) {
    res.send(friends);
};

module.exports = {
   getFriends,
   getFriendsId,
   postFriends,
}