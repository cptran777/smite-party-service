// This file is a temporary store that will eventually be moved to a database for the service. It contains
// a list of all the gods per each role for now. Refer to README for future iteration updates. 
'use strict'

/********************* SORT BY CLASS ***********************/

let hunter = ['izanami', 'artemis', 'ah muzen cab', 'anhur', 'apollo', 'chiron', 'cupid', 'hou yi', 'jing wei', 'medusa', 'neith', 'rama', 'skadi', 'ullr', 'xbalanque'];
let mage = ['agni', 'ao kuang', 'au puch', 'anubis', 'aphrodite', 'change', 'chronos', 'freya', 'hades', 'he bo', 'hel', 'isis', 'janus', 'kukuku', 'nox', 'nu wa', 'poseidon', 'ra', 'raijin', 'scylla', 'sol', 'vulcan', 'zeus', 'zhong kui'];
let warrior = ['amaterasu', 'bellona', 'chaac', 'erlang shen', 'guan yu', 'hercules', 'odin', 'osiris', 'ravana', 'sun wukong', 'tyr', 'vamana'];
let guardian = ['ares', 'athena', 'bacchus', 'cabrakan', 'fafnir', 'geb', 'khepri', 'kumbakharna', 'sobek', 'sylvanus', 'terra', 'xing tian', 'ymir'];
let assasin = ['arachne', 'awilix', 'bakasura', 'bastet', 'fenrir', 'hun batz', 'kali', 'loki', 'mercury', 'ne zha', 'nemesis', 'ratatoskr', 'serqet', 'susano', 'thanatos', 'thor'];

/******************** SORT INTO ROLES **********************/

let carry = [],
	mid = [],
	solo = [],
	support = [],
	jungler = [];

// Populate carry
hunter.forEach((god) => {
  carry.push({
  	name: god,
  	type: 'physical',
  	class: 'hunter'
  });
});

['freya', 'chronos', 'sol'].forEach((god) => {
  carry.push({
  	name: god,
  	type: 'magical',
  	class: 'mage'
  });
});

['bastet', 'loki'].forEach((god) => {
  carry.push({
  	name: god,
  	type: 'physical',
  	class: 'assassin'
  });
});

// Populate mid
mage.forEach((god) => {
  if (god !== 'ao kuang') {
  	mid.push({
  	  name: god,
  	  type: 'magical',
  	  class: 'mage'
  	})
  }
});

['neith', 'cupid'].forEach((god) => {
  mid.push({
  	name: god,
  	type: 'physical',
  	class: 'hunter'
  });
});

// Populate solo
warrior.forEach((god) => {
  solo.push({
  	name: god,
  	type: 'physical',
  	class: 'warrior'
  });
});

['skadi', 'neith', 'ullr', 'ah muzen cab', 'cupid'].forEach((god) => {
  solo.push({
  	name: god,
  	type: 'physical',
  	class: 'hunter'
  });
});

['hel', 'aphrodite', 'change', 'sol', 'zhong kui'].forEach((god) => {
  solo.push({
  	name: god,
  	type: 'magical',
  	class: 'hunter'
  });
});

// Populate support
guardian.forEach((god) => {
  support.push({
  	name: god,
  	type: 'magical',
  	class: 'guardian'
  });
});

['change', 'aphrodite'].forEach((god) => {
  support.push({
  	name: god,
  	type: 'magical',
  	class: 'mage'
  });
});

support.push({
  name: 'odin',
  type: 'physical',
  class: 'warrior'
});

// Populate jungler
assassin.forEach((god) => {
  jungler.push({
  	name: god,
  	type: 'physical',
  	class: 'assassin'
  });
});

['ao kuang', 'freya'].forEach((god) => {
  jungler.push({
  	name: god,
  	type: 'magical',
  	class: 'mage'
  });
});

['cabrakan', 'kumbakharna', 'bacchus', 'ymir'].forEach((god) => {
  jungler.push({
  	name: god,
  	type: 'magical',
  	class: 'guardian'
  });
});

module.exports = {
  carry,
  support,
  mid,
  jungler,
  solo
};
