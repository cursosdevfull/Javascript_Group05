const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";

const ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 15;

const MAX_LIFE = 100;
const MAX_AVAILABLE_LIFE = 3;
const LIFE_AVAILABLE = 3;
const HEALT_VALUE = 20;

const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEALTH = "PLAYER_HEALTH";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

let currentMonsterHealth = MAX_LIFE;
let currentPlayerHealth = MAX_LIFE;
let hasBonusLife = true;
let availableLifes = LIFE_AVAILABLE;

const battleLog = [];

function attackMounsterHandler(mode) {
  const maxDamage = mode == MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const monsterDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= monsterDamage;

  endRound();
}

function attackHandler() {
  attackMounsterHandler(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMounsterHandler(MODE_STRONG_ATTACK);
}

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  const playerWinner = currentMonsterHealth <= 0 && currentPlayerHealth > 0;
  const monsterWinner = currentPlayerHealth <= 0 && currentMonsterHealth > 0;
  const draw = currentMonsterHealth <= 0 && currentPlayerHealth <= 0;

  if (playerWinner) {
    alert("Player won");
    writeToLog(LOG_EVENT_GAME_OVER);
  } else if (monsterWinner) {
    alert("Monster won");
    const playerWinner = currentMonsterHealth <= 0 && currentPlayerHealth > 0;
    const monsterWinner = currentPlayerHealth <= 0 && currentMonsterHealth > 0;
    const draw = currentMonsterHealth <= 0 && currentPlayerHealth <= 0;
  } else if (draw) {
    alert("Draw");
  }

  if (playerWinner || monsterWinner || draw) {
    reset();
  }

  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );
}

function reset() {
  currentMonsterHealth = MAX_LIFE;
  currentPlayerHealth = MAX_LIFE;
  availableLifes = LIFE_AVAILABLE;
  hasBonusLife = true;

  resetGame(MAX_LIFE);
}

function healPlayerHandler() {
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0 || !hasBonusLife)
    return;

  if (availableLifes > 0) {
    availableLifes--;
    updateBonusLife(availableLifes);
  }

  if (availableLifes <= 0) {
    hasBonusLife = false;
    removeBonusLife();
  }

  let healthValue;
  if (currentPlayerHealth >= MAX_LIFE - HEALT_VALUE) {
    healthValue = MAX_LIFE - currentPlayerHealth;
  } else {
    healthValue = HEALT_VALUE;
  }

  currentPlayerHealth += healthValue;

  incrementPlayerHealth(healthValue);
}

function writeToLog(event, value, monsterHealth, playerHealth) {
  let logEntry = {
    event,
    value,
    monsterHealth,
    playerHealth,
  };

  switch (event) {
    case LOG_EVENT_PLAYER_ATTACK:
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_HEALTH:
    case LOG_EVENT_PLAYER_HEALTH:
      logEntry.target = "PLAYER";
      break;
    default:
      logEntry = {};

      battleLog.push(logEntry);
  }
}

function printLogHandler() {
  console.table(battleLog);
}

attackBtn.addEventListener("click", attackHandler.bind(attackHandler));
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
updateBonusLife(LIFE_AVAILABLE);
