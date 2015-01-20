// ==UserScript==
// @name        IST Webmail Menu
// @namespace   ist-webmail-menu
// @description Adds much needed menu to IST Webmail
// @include     *://webmail.tecnico.ulisboa.pt/*
// @version     1
// @grant       none
// ==/UserScript==

var com=document.createElement("a");
com.id ="com";
com.text="Comunicação";
com.href='https://fenix.tecnico.ulisboa.pt/messaging';

document.getElementById("taskbar").appendChild (com);

var est=document.createElement("a");
est.id ="est";
est.text="Estudante";
est.href='https://fenix.tecnico.ulisboa.pt/student';

document.getElementById("taskbar").appendChild (est);

var pes=document.createElement("a");
pes.id ="pes";
pes.text="Pessoal";
pes.href='https://fenix.tecnico.ulisboa.pt/personal';

document.getElementById("taskbar").appendChild (pes);

var ges=document.createElement("a");
ges.id ="ges";
ges.text="Gestão de Espaços";
ges.href='https://fenix.tecnico.ulisboa.pt/space-management';

document.getElementById("taskbar").appendChild (ges);