'use strict'
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

  // Map current assignments by role in order to detect team balance:
  let assignments = {
  	carry: null,
  	support: null,
  	mid: null,
  	jungler: null,
  	solo: null
  };

  // Helper function to check for duplicates
  const checkDupes = (selection) => {
  	for (let role in assignments) {
  	  if (assignments[role] && assignments[role].name === selection.name) {
  	  	console.log('dupe detected');
  	  	return true;
  	  }
  	}
  	return false;
  };

  // Helper function to make a selection and make necessary checks
  const makeSelection = (cat, possibleGods, filtered) => {
  	
  	if (cat === 'carry' && !filtered) {
  	  if ((assignments.support && assignments.support.type === 'physical') || (assignments.mid && assignments.mid.class === 'hunter')) {
  	  	possibleGods = possibleGods.filter((god) => {
  	  	  return god.type === 'magical';
  	  	});
  	  }
  	}

  	if (cat === 'support' && !filtered) {
  	  if (assignments.carry) {

        if (assignments.carry.type === 'magical') {
    	  	possibleGods = possibleGods.filter((god) => {
    	  	  return god.type === 'physical';
    	  	});
        }

        if (assignments.carry.type === 'physical') {
          possibleGods = possibleGods.filter((god) => {
            return god.type === 'magical';
          });
        }

  	  }

  	  if (assignments.jungler && assignments.jungler.class === 'guardian') {
  	  	possibleGods = possibleGods.filter((god) => {
  	  	  return god.class !== 'guardian';
  	  	});
  	  }

  	}

  	if (cat === 'mid' && !filtered) {
      
  	  if (assignments.carry && assignments.carry.type === 'magical') {
  	  	possibleGods = possibleGods.filter((god) => {
  	  	  return god.type === 'physical';
  	  	});
  	  }

  	  if (assignments.support && assignments.support.type === 'physical') {
  	  	possibleGods = possibleGods.filter((god) => {
  	  	  return god.type === 'physical';
  	  	});
  	  }

  	}

  	if (cat === 'jungler' && !filtered) {
  	  if (assignments.support && assignments.support.class === 'guardian') {
  	  	possibleGods = possibleGods.filter((god) => {
  	  	  return god.class !== 'guardian';
  	  	});
  	  }

  	  if ((assignments.carry && assignments.carry.class === 'assassin')) {
  	  	possibleGods = possibleGods.filter((god) => {
  	  	  return god.class !== 'assassin';
  	  	});
  	  }

  	  if (assignments.solo && assignments.solo.type === 'magical') {
	  	possibleGods = possibleGods.filter((god) => {
	  	  return god.type === 'physical';
	  	});
  	  }

  	}

  	if (cat === 'solo' && !filtered) {
  	  if (assignments.jungler && assignments.jungler.type === 'magical') {
  	  	if (assignments.jungler.type === 'magical') {
  	  	  possibleGods = possibleGods.filter((god) => {
  	  	  	return god.type === 'physical';
  	  	  });
  	  	}
  	  	if (assignments.jungler.type === 'physical') {
  	  	  possibleGods = possibleGods.filter((god) => {
  	  	  	return god.type === 'magical';
  	  	  });
  	  	}
  	  }

  	}

	let randomSelector = Math.floor(Math.random() * possibleGods.length);
	let selectedGod = possibleGods[randomSelector];
	return checkDupes(selectedGod) ? makeSelection(cat, possibleGods, true) : selectedGod;
  };

  for (let y = 0; y < players.length; y++) {
  	if (gods) {
  	  let possibleGods = gods[roles[y]] || [];
  	  let randomSelector = Math.floor(Math.random() * possibleGods.length);
  	  result[players[y]] = [roles[y], makeSelection(roles[y], gods[roles[y]])];
  	  assignments[roles[y]] = result[players[y]][1];
  	} else {
  	  result[players[y]] = [roles[y], null]
  	}
  }

  return result;

}