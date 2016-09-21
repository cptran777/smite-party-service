// This function performs the random assignment for the players by role then by in each role. 
// Players is expected to be an array list, roles is expected to be an array list, and gods
// is expected to be an object where each property is a role and each value is an array of gods
// suitable to that role. 
module.exports = (players, roles, gods) => {
  
  let result = {};

  players = players || [];
  roles = roles || [];

  // Use Fisher Yates shuffle algorithm on roles to randomize
  for (let x = roles.length - 1; x > 0; x--) {
  	
  	let idx = Math.floor(Math.random() * (x + 1));
  	let holder = roles[x];
  	roles[x] = roles[idx];
  	roles[idx] = holder;

  }

  for (let y = 0; y < players.length; y++) {
  	if (gods) {
  	  let possibleGods = gods[roles[y]];
  	  let randomSelector = Math.floor(Math.random() * possibleGods.length);
  	  result[players[y]] = [roles[y], possibleGods[randomSelector]];
  	} else {
  	  result[players[y]] = [roles[y], null]
  	}
  }

  return result;

}