function getMessages(req, res) {
    res.send('<ul><li>I AM GOOD</li></ul>')
}

function postMessages(req, res) {
    console.log('Successful')
}

module.exports = {
    getMessages: getMessages,
    postMessages: postMessages
}