'use strict';

const PAPERBILL = [5, 10, 20, 50, 100, 200];
const COINS = [0.1, 0.2, 0.5, 1, 2];

const inputCost = document.getElementById('cost');
const inputGetPaid = document.getElementById('getPaid');
const inputGiveChange = document.getElementById('giveChange');
const inputCalculateButton = document.getElementById('calculate');
let paperCount = [0, 0, 0, 0, 0, 0];
let coinCount = [0, 0, 0, 0, 0];
// functions
const calculateChange = () => {
  divideClientAmount();
};

const divideClientAmount = () => {
  const clientMoney = parseInt(inputGetPaid.value);
  const productCost = parseInt(inputCost.value);
  let change = clientMoney - productCost;

  for (let i = PAPERBILL.length - 1; i >= 0; i--) {
    while (change / PAPERBILL[i] >= 1) {
      change = change - PAPERBILL[i];
      console.log(
        ' billete con el que devolvi ' +
          PAPERBILL[i] +
          ' cambio que me queda ' +
          change
      );
      paperCount[i]++;
    }
  }
  for (let i = COINS.length - 1; i >= 0; i--) {
    while (change / COINS[i] >= 1) {
      change = change - COINS[i];
      console.log(
        ' moneda con el que devolvi ' +
          COINS[i] +
          ' cambio que me queda ' +
          change
      );
      coinCount[i]++;
    }
  }

  console.log('Posicion y cantidad de PAPERBILL usados ' + paperCount);
  console.log('Posicion y cantidad de COINS usadas ' + coinCount);
};

// handle functions
const handleGetMoneyInput = () => {
  calculateChange();
};

inputCalculateButton.addEventListener('click', handleGetMoneyInput);
