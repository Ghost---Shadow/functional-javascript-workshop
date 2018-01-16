/**
 * Takes an array of objects with message attribute and returns string Array
 * @param {Object[]} messages
 * @return {String[]}
 */
function getShortMessages(messages) {
    let filteredMessages = messages.filter(function isShort(messageObject) {
        return messageObject.message.length < 50;
    });
    let stringArray = filteredMessages.map(function stripObject(messageObject) {
        return messageObject.message;
    });
    return stringArray;
}

module.exports = getShortMessages;
// Ideal case
{
    let myObjs = [{
        'message': 'potato',
    }, {
        'message': 'ssssssssssssddsdsdsdsdsdsdsddddddddddddddsdsdsdsdsdsdss',
    }];
    let result = getShortMessages(myObjs);
    console.log(result);
    let check = result.length === 1 && result[0] === 'potato';
    console.log('Ideal case: ', check);
}

// Empty array
{
    let myObjs = [];
    console.log('Ideal case: ', getShortMessages(myObjs).length === 0);
}

