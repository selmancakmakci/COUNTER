let sayacDegeri = 0;

let sayacGostergesi = document.querySelector("#sayac");
let artirmaButonu = document.querySelector("#artirma");
let azaltmaButonu = document.querySelector("#azaltma");
let sifirlamaButonu = document.querySelector("#sifirlama");
let sayacArkaPlan = document.querySelector("#container");
let tebrikMetni = document.querySelector("#tebrikMetni");

const artir = () => {
  sayacDegeri++;
  sayacGostergesi.textContent = sayacDegeri;
  renkGuncelle();
  arkaPlanGuncelle();
};

//const artir  = () => sayacDegeri++;

const azalt = () => {
  sayacDegeri--;
  sayacGostergesi.textContent = sayacDegeri;
  renkGuncelle();
  arkaPlanGuncelle();
};

const sifirla = () => {
  sayacDegeri = 0;
  sayacGostergesi.textContent = sayacDegeri;
  renkGuncelle();
  arkaPlanGuncelle();
};

artirmaButonu.addEventListener("click", artir);
azaltmaButonu.addEventListener("click", azalt);
sifirlamaButonu.addEventListener("click", sifirla);

const renkGuncelle = () => {
  if (sayacDegeri < 0) {
    sayacGostergesi.style.color = "red";
  } else if (sayacDegeri > 0) {
    sayacGostergesi.style.color = "green";
  } else {
    sayacGostergesi.style.color = "black";
  }
};

const arkaPlanGuncelle = () => {
  if (sayacDegeri >= 10) {
    sayacCerceve.style.backgroundColor = "lightblue";
  }

  if (sayacDegeri >= 20) {
    sayacCerceve.style.backgroundColor = "aqua";
  }

  if (sayacDegeri >= 30) {
    sayacCerceve.style.backgroundColor = "aquamarine";
  }

  if (sayacDegeri >= 40) {
    sayacCerceve.style.backgroundColor = "cadetblue";
  }
  if (sayacDegeri >= 50) {
    sayacCerceve.style.backgroundColor = "cyan";
  }

  if (sayacDegeri <= 10) {
    sayacCerceve.style.backgroundColor = "";
  }
};
