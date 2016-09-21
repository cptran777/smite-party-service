// This function performs the random assignment for the players by role then by in each role. 
// Players is expected to be an array list, roles is expected to be an array list, and gods
// is expected to be an object where each property is a role and each value is an array of gods
// suitable to that role. 
module.exports = (players, roles, gods) => {
  
  let result = {};
  for (let x = 0; x < players.length; x++) {
  	result[players[x]] = true;
  }

  return result;
}