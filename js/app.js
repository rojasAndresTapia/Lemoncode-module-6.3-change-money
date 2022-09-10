'use strict';

const PAPERBILL = [5, 10, 20, 50, 100, 200];
const COINS = [0.1, 0.2, 0.5, 1, 2];

const inputCost = document.getElementById('cost');
const inputGetPaid = document.getElementById('getPaid');
const inputGiveChange = document.getElementById('giveChange');
const inputCalculateButton = document.getElementById('calculate');
const paperBillsChange = document.getElementById('paperBill');
const coinChange = document.getElementById('coinBill');

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
      paperCount[i]++;
    }
  }
  for (let i = COINS.length - 1; i >= 0; i--) {
    while (change / COINS[i] >= 1) {
      change = change - COINS[i];
      coinCount[i]++;
    }
  }

  for (let j = 0; j < paperCount.length; j++) {
    if (paperCount[j] !== 0) {
      paperBillsChange.innerHTML +=
        ' ' + PAPERBILL[j] + ' Euros' + ' x ' + paperCount[j] + ', ';
    } else {
      console.log('nada');
    }
  }

  for (let k = 0; k < coinCount.length; k++) {
    if (coinCount[k] !== 0) {
      coinChange.innerHTML +=
        ' ' + COINS[k] + ' Centimos' + ' x ' + coinCount[k] + ', ';
    } else {
      console.log('nada');
    }
  }
};

// handle functions
const handleGetMoneyInput = () => {
  calculateChange();
};

inputCalculateButton.addEventListener('click', handleGetMoneyInput);
