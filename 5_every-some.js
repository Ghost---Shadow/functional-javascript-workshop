/**
 * Checks if all users are in good users and returns a function
 * which returns a boolean
 * @param {Object[]} goodUsers
 * @return {Function}
 */
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(obj1 => goodUsers.some(obj2 => obj1.id === obj2.id));
  };
}

module.exports = checkUsersValid;

// Ideal case
{
  const goodUsers = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  const testAllValid = [
    {
      id: 2,
    },
    {
      id: 1,
    },
  ];
  console.log('Ideal case:\t', checkUsersValid(goodUsers)(testAllValid));
}

// False case
{
  const goodUsers = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  const testAllValid = [
    {
      id: 2,
    },
    {
      id: 1,
    },
    {
      id: 4,
    },
  ];
  const check = checkUsersValid(goodUsers)(testAllValid);
  console.log('False case:\t', check === false);
}
