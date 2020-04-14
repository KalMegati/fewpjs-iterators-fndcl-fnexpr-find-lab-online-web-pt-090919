const testVar = {};

function testFunc() {
  return "hi";
};

function superbowlWin(career) {
  let success = career.find(function(game) { return game.result === "W" });
  return (success ? success.year : undefined );
};