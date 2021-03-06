// This file is a temporary store that will eventually be moved to a database for the service. It contains
// a list of all the gods per each role for now. Refer to README for future iteration updates. 
'use strict'

/********************* SORT BY CLASS ***********************/

const hunter = ['izanami', 'artemis', 'ah muzen cab', 'anhur', 'apollo', 'chiron', 'cupid', 'hou yi', 'jing wei', 'medusa', 'neith', 'rama', 'skadi', 'ullr', 'xbalanque'];
const mage = ['agni', 'ao kuang', 'au puch', 'anubis', 'aphrodite', 'change', 'chronos', 'freya', 'hades', 'he bo', 'hel', 'isis', 'janus', 'kukulkan', 'nox', 'nu wa', 'poseidon', 'ra', 'raijin', 'scylla', 'sol', 'vulcan', 'zeus', 'zhong kui'];
const warrior = ['amaterasu', 'bellona', 'chaac', 'erlang shen', 'guan yu', 'hercules', 'odin', 'osiris', 'ravana', 'sun wukong', 'tyr', 'vamana'];
const guardian = ['ares', 'athena', 'bacchus', 'cabrakan', 'fafnir', 'geb', 'khepri', 'kumbhakarna', 'sobek', 'sylvanus', 'terra', 'xing tian', 'ymir'];
const assassin = ['arachne', 'awilix', 'bakasura', 'bastet', 'fenrir', 'hun batz', 'kali', 'loki', 'mercury', 'ne zha', 'nemesis', 'ratatoskr', 'serqet', 'susano', 'thanatos', 'thor'];

/******************** SORT INTO IMAGES *********************/
let thumbnails = {};

hunter.concat(mage).concat(warrior).concat(guardian).concat(assassin).forEach((god) => {

  let nameQuery = '';

  for (let x = 0; x < god.length; x++) {
    if (god[x] === ' ') {
      nameQuery += '%20';
    } else {
      nameQuery += god[x];
    }
  }

  thumbnails[god] = 'https://smitepartyservice.herokuapp.com/images?name=' + nameQuery;

});

/******************* CREATE GOD OBJECTS ********************/

let gods = {
  hunters: [],
  mages: [],
  warriors: [],
  guardians: [],
  assassins: []
};

hunter.forEach((god) => {
  gods.hunters.push({
    name: god,
    type: 'phyiscal',
    class: 'hunter',
    images: {
      thumbnail: thumbnails[god]
    }
  });
});

mage.forEach((god) => {
  gods.mages.push({
    name: god,
    type: 'magical',
    class: 'mage',
    images: {
      thumbnail: thumbnails[god]
    }
  });
});

warrior.forEach((god) => {
  gods.warriors.push({
    name: god,
    type: 'physical',
    class: 'warrior',
    images: {
      thumbnail: thumbnails[god]
    }
  });
});

guardian.forEach((god) => {
  gods.guardians.push({
    name: god,
    type: 'magical',
    class: 'guardian',
    images: {
      thumbnail: thumbnails[god]
    }
  });
});

assassin.forEach((god) => {
  gods.assassins.push({
    name: god,
    type: 'physical',
    class: 'assassin',
    images: {
      thumbnail: thumbnails[god]
    }
  });
});


/******************** SORT INTO ROLES **********************/

let carry = [],
	mid = [],
	solo = [],
	support = [],
	jungler = [];

const populateRole = (role, list) => {
  list.forEach((god) => {
    role.push(god);
  });
}

const createSubList = (godClass, subList) => {
  return godClass.filter((god) => {
    return subList.indexOf(god.name) > -1;
  });
}

// Populate carry
const carryMages = createSubList(gods.mages, ['freya', 'chronos', 'sol']);
const carryAssassins = createSubList(gods.assassins, ['bastet', 'loki']);

populateRole(carry, 
  gods.hunters.concat(carryMages)
              .concat(carryAssassins));

// Populate mid
const midHunters = createSubList(gods.hunters, ['neith', 'cupid']);

populateRole(mid, 
  gods.mages.filter((god) => {
    return god.name !== 'ao kuang';
  }).concat(midHunters));

// Populate solo
const soloHunters = createSubList(gods.hunters, ['skadi', 'neith', 'ullr', 'ah muzen cab', 'cupid']);
const soloMages = createSubList(gods.mages, ['hel', 'aphrodite', 'change', 'sol', 'chronos', 'zhong kui']);

populateRole(solo,
  gods.warriors.concat(soloHunters)
               .concat(soloMages));

// Populate support
const supportMages = createSubList(gods.mages, ['change', 'aphrodite']);
const supportWarriors = createSubList(gods.warriors, ['odin']);

populateRole(support, 
  gods.guardians.concat(supportMages)
                .concat(supportWarriors));

// Populate jungler
const junglerMages = createSubList(gods.mages, ['ao kuang', 'freya']);
const junglerGuardians = createSubList(gods.guardians, ['cabrakan', 'kumbakharna', 'bacchus', 'ymir']);
const junglerWarriors = createSubList(gods.warriors, ['amaterasu', 'odin', 'tyr']);

populateRole(jungler,
  gods.assassins.concat(junglerMages)
                .concat(junglerGuardians)
                .concat(junglerWarriors));

module.exports = {
  sortByRoles: {
    carry,
    support,
    mid,
    jungler,
    solo
  }
};
