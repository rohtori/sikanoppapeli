var nopat = [0];
var c=document.getElementById("nopanpaikka");
var ctx=c.getContext("2d");
var dice1 = new Image(); dice1.src ="dice1.JPG";
var dice2 = new Image(); dice2.src ="dice2.JPG";
var dice3 = new Image(); dice3.src ="dice3.JPG";
var dice4 = new Image(); dice4.src ="dice4.JPG";
var dice5 = new Image(); dice5.src ="dice5.JPG";
var dice6 = new Image(); dice6.src ="dice6.JPG";
var imgobjects=[dice1,dice2,dice3,dice4,dice5,dice6];
var pisteet=0; // heittovuoron pisteet
var pistetaulukko = [0,0];
var vuoro = 0;
var kokopisteet = 0;


function pang() {
  var uusiLuku = Math.floor(Math.random() * 6);
  ctx.drawImage(imgobjects[uusiLuku],0,0);
  pisteet = pisteet  + uusiLuku+1;
  if (uusiLuku==0) {
    pisteet = 0;
    vaihdavuoro();
  }
  refresh();
}

function vaihdavuoro() {
  console.log('vaihdavuoro');
  if (vuoro === 0) {
    pistetaulukko[0] += pisteet;
    vuoro = 1;
  } else {
    pistetaulukko[1] += pisteet;
    vuoro = 0;
  }
  pisteet = 0;
  refresh();

}

function refresh () {
  document.getElementById('pisteet').innerHTML = pisteet;
  document.getElementById('paikka1').innerHTML = pistetaulukko[0];
  document.getElementById('paikka2').innerHTML = pistetaulukko[1];

    if (vuoro == 0){
      document.getElementById('turn').innerHTML = "pelaajan yks vuoro";
}
    else {
      vuoro = 1;
      document.getElementById('turn').innerHTML = "pelaajan kaks vuoro";
  }
  if (pisteet == 100){
    document.getElementById('voittaja').innerHTML="pelaaja voittaa";
  }
}
