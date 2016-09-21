// This function performs the random assignment for the players by role then by in each role. 
// Players is expected to be an array list, roles is expected to be an array list, and gods
// is expected to be an object where each property is a role and each value is an array of gods
// suitable to that role. 
module.exports = (players, roles, gods) => {
  
  let result = {};

  // Use Fisher Yates shuffle algorithm on roles to randomize
  for (let x = roles.length - 1; x > 0; x--) {
  	
  	let idx = Math.floor(Math.random() * (x + 1));
  	console.log('log idx', idx);
  	let holder = roles[x];
  	roles[x] = roles[idx];
  	roles[idx] = holder;

  }

  for (let y = 0; y < players.length; y++) {
  	result[players[y]] = roles[y];
  }

  return result;

}