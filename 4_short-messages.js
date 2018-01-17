/**
 * Takes an array of objects with message attribute and returns string Array
 * @param {Object[]} messages
 * @return {String[]}
 */
function getShortMessages(messages) {
  const filteredMessages = messages.filter(messageObject => messageObject.message.length < 50);
  const stringArray = filteredMessages.map(messageObject => messageObject.message);
  return stringArray;
}

module.exports = getShortMessages;
// Ideal case
{
  const myObjs = [{
    message: 'potato',
  }, {
    message: 'ssssssssssssddsdsdsdsdsdsdsddddddddddddddsdsdsdsdsdsdss',
  }];
  const result = getShortMessages(myObjs);
  console.log(result);
  const check = result.length === 1 && result[0] === 'potato';
  console.log('Ideal case: ', check);
}

// Empty array
{
  const myObjs = [];
  console.log('Ideal case: ', getShortMessages(myObjs).length === 0);
}

