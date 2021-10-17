setTimeout(function(){ window.scrollTo(0, 0); }, 500);

var world = document.getElementById("boxDiv");
var pauseMenu = document.getElementById("pauseMenu");
var resumeButton = document.getElementById("resumeButton");
var settingsButton = document.getElementById("settingsButton");
var creditsButton = document.getElementById("creditsButton");
var setting1 = document.getElementById("setting1");
var setting2 = document.getElementById("setting2");
var creditsText1 = document.getElementById("creditsText1");
var creditsText2 = document.getElementById("creditsText2");
var creditsText3 = document.getElementById("creditsText3");
var goBackButton = document.getElementById("goBackButton");
var x;
var y;
var isPaused = false;

document.addEventListener("mousemove", runGame);
document.addEventListener("keyup", function(e){ if(e.keyCode === 27) (isPaused) ? resumeGame
  () : pauseGame(); });
  resumeButton.addEventListener("click", resumeGame);
  settingsButton.addEventListener("click", settingsButtonClicked);
  creditsButton.addEventListener("click", creditsButtonClicked);
  goBackButton.addEventListener("click", goBackButtonClicked);

function pauseGame() {
  isPaused = true;
  document.body.style.cursor = "crosshair";
  pauseMenu.style.visibility = "visible";
  showPauseMenu();
}

function resumeGame() {
  isPaused = false;
  document.body.style.cursor = "none";
  pauseMenu.style.visibility = "hidden";
  hidePauseMenu();
  hideSettingsMenu();
  hideCreditsMenu();
}

function settingsButtonClicked() {
  hidePauseMenu();
  showSettingsMenu();
}

function creditsButtonClicked() {
  hidePauseMenu();
  showCreditsMenu();
}

function goBackButtonClicked() {
  hideSettingsMenu();
  hideCreditsMenu();
  showPauseMenu();
}

function showPauseMenu() {
  resumeButton.style.visibility = "visible";
  settingsButton.style.visibility = "visible";
  creditsButton.style.visibility = "visible";
}

function hidePauseMenu() {
  resumeButton.style.visibility = "hidden";
  settingsButton.style.visibility = "hidden";
  creditsButton.style.visibility = "hidden";
}

function showSettingsMenu() {
  setting1.style.visibility = "visible";
  setting2.style.visibility = "visible";
  goBackButton.style.visibility = "visible";
}

function hideSettingsMenu() {
  setting1.style.visibility = "hidden";
  setting2.style.visibility = "hidden";
  goBackButton.style.visibility = "hidden";
}

function showCreditsMenu() {
  creditsText1.style.visibility = "visible";
  creditsText2.style.visibility = "visible";
  creditsText3.style.visibility = "visible";
  goBackButton.style.visibility = "visible";
}

function hideCreditsMenu() {
  creditsText1.style.visibility = "hidden";
  creditsText2.style.visibility = "hidden";
  creditsText3.style.visibility = "hidden";
  goBackButton.style.visibility = "hidden";
}

function runGame(e)
{
  if(!isPaused)
  {
  x = e.clientX;
  y = e.clientY;
  y = -y;
  world.style.transform = "translateZ(600px) rotateX("+y+"deg) rotateY("+x+"deg)";
}
}
