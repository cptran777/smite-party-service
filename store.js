// This file is a temporary store that will eventually be moved to a database for the service. It contains
// a list of all the gods per each role for now. Refer to README for future iteration updates. 
'use strict'

/********************* SORT BY CLASS ***********************/

let hunter = ['izanami', 'artemis', 'ah muzen cab', 'anhur', 'apollo', 'chiron', 'cupid', 'hou yi', 'jing wei', 'medusa', 'neith', 'rama', 'skadi', 'ullr', 'xbalanque'];
let mage = ['agni', 'ao kuang', 'au puch', 'anubis', 'aphrodite', 'change', 'chronos', 'freya', 'hades', 'he bo', 'hel', 'isis', 'janus', 'kukulkan', 'nox', 'nu wa', 'poseidon', 'ra', 'raijin', 'scylla', 'sol', 'vulcan', 'zeus', 'zhong kui'];
let warrior = ['amaterasu', 'bellona', 'chaac', 'erlang shen', 'guan yu', 'hercules', 'odin', 'osiris', 'ravana', 'sun wukong', 'tyr', 'vamana'];
let guardian = ['ares', 'athena', 'bacchus', 'cabrakan', 'fafnir', 'geb', 'khepri', 'kumbakharna', 'sobek', 'sylvanus', 'terra', 'xing tian', 'ymir'];
let assassin = ['arachne', 'awilix', 'bakasura', 'bastet', 'fenrir', 'hun batz', 'kali', 'loki', 'mercury', 'ne zha', 'nemesis', 'ratatoskr', 'serqet', 'susano', 'thanatos', 'thor'];

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

['hel', 'aphrodite', 'change', 'sol', 'chronos', 'zhong kui'].forEach((god) => {
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

/******************** SORT INTO IMAGES *********************/

let thumbnails = {
  izanami: null,
  agni: null,
  'ah muzen cab': null,
  'ah puch': null,
  amaterasu: null,
  anhur: null,
  anubis: null,
  'ao kuang': null,
  aphrodite: null,
  apollo: null,
  arachne: null,
  ares: null,
  artemis: null,
  athena: null,
  awilix: null,
  bacchus: null,
  bakasura: null,
  bastet: null,
  bellona: null,
  cabrakan: null,
  chaac: null,
  change: null,
  chiron: null,
  chronos: null,
  cupid: null,
  'erlang shen': null,
  fafnir: null,
  fenrir: null,
  freya: null,
  geb: null,
  'guan yu': null,
  hades: null,
  'he bo': null,
  hel: null,
  hercules: null,
  'hou yi': null,
  'hun batz': null,
  isis: null,
  janus: null,
  'jing wei': null,
  kali: null,
  khepri: null,
  kukulkan: null,
  kumbakharna: null,
  loki: null,
  medusa: null,
  mercury: null,
  'ne zha': null,
  neith: null,
  nemesis: null,
  nox: null,
  'nu wa': null,
  odin: null,
  osiris: null,
  poseidon: null,
  ra: null,
  raijin: null,
  rama: null,
  ratatoskr: null,
  ravana: null,
  scylla: null,
  serqet: null,
  skadi: null,
  sobek: null,
  sol: null,
  'sun wukong': null,
  susano: null,
  sylvanus: null,
  terra: null,
  thanatos: null,
  thor: null,
  tyr: null,
  ullr: null,
  vamana: null,
  vulcan: null,
  xbalanque: null,
  'xing tian': null,
  ymir: null,
  zeus: null,
  'zhong kui': null
};

module.exports = {
  sortByRoles: {
    carry,
    support,
    mid,
    jungler,
    solo
  },
  images: {
    thumbnails
  }
};
