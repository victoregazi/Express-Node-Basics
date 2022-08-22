const express = require('express');
const friendsController = require('./controller/friends')
const messageController = require('./controller/messages')

const app = express();

app.use(express.json());

app.get('/friends', friendsController.getFriends);

app.get('/friends/:id', friendsController.getFriendsId);
//Post Request...
app.post('/friends', friendsController.postFriends);

app.get('/api/message', messageController.getMessages)

app.post('/api/message', messageController.postMessages)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});