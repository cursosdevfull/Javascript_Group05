const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";

const ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 100;

function attackMounsterHandler(mode) {
  const maxDamage = mode == MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  console.log("maxDamage", maxDamage);
  //const mounstroDamage = dealMonsterDamage()
}

function attackHandler() {
  attackMounsterHandler(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMounsterHandler(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {}

function printLogHandler() {}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
