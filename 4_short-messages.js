/**
 * Takes an array of objects with message attribute and returns string Array
 * @param {Object[]} messages
 * @return {String[]}
 */
function getShortMessages(messages) {
    return messages.filter(function shortMessage(messageObject) {
        return messageObject.message.length < 50;
    }).map(function stripObject(messageObject) {
        return messageObject.message;
    });
}

module.exports = getShortMessages;
// Ideal case
{
    let myObjs = [{
        'message': 'potato',
    }];
    console.log('Ideal case: ', getShortMessages(myObjs).length === 1);
}

