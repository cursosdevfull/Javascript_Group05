const attackBtn = document.getElementById("attack-btn");
const strongAttackBtn = document.getElementById("strong-attack-btn");
const healBtn = document.getElementById("heal-btn");
const logBtn = document.getElementById("log-btn");

const mounsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");
const bonusLifeEl = document.getElementById("bonus-life");

function dealMonsterDamage(maxDamage) {
  const dealDamage = Math.random() * maxDamage;
  mounsterHealthBar.value = +mounsterHealthBar.value - dealDamage;
  return dealDamage;
  // return Math.random()*maxDamage
}

function dealPlayerDamage(maxDamage) {
  const dealDamage = Math.random() * maxDamage;
  playerHealthBar.value = +playerHealthBar.value - dealDamage;
  return dealDamage;
}

function resetGame(value) {
  mounsterHealthBar.value = value;
  playerHealthBar.value = value;
}

function updateBonusLife(lifes) {
  if (lifes <= 0) return;
  bonusLifeEl.textContent = lifes;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function incrementPlayerHealth(value) {
  playerHealthBar.value += value;
}
