var fullName;
var age;
var job;
var actor;
var color;
var txt_allowed;

fullName = prompt("Як вас звати?");
age = prompt("Скільки вам років?");

if (age >= 18) {
  alert("Ви можете голосувати");
  txt_allowed = 'дозволено';
} else {
  alert("Ви не можете голосувати");
  txt_allowed = 'не дозволено';
}
job = prompt("Ким ви працюєте?");
actor = prompt("Ваш улюблений автор?");
color = prompt("Ваш улюблений колір?");

var txt = alert("Привіт "+fullName+", я бачу вам "+age+", як я бачу вам вже "+txt_allowed+" голосувати. Ви працюєте "+job+". Я теж люблю цей "+color+" колір. "+actor+" те один з моїх улюблених авторів. ");