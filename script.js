function addCriss(btnId) {
  let mygtukas = document.getElementById(btnId);
  mygtukas.style.border = '10px solid black';
  mygtukas.style.borderRadius = '100%';
  console.log('btnId= ' + btnId);
  mygtukas.classList.add('selected0'); //add class to selected btn
  //need to add class selected0 to xSvg that has the same id
  //so it would fall out of selection list
  let idNr = btnId.charAt(btnId.length - 1);
  console.log('idNr-', idNr);

  let svgMygtukas = document.getElementById('xSvg' + idNr);
  svgMygtukas.classList.add('selected0');

  getUnselectedBtn();
}

//find if selected fuction
function getUnselectedBtn() {
  console.log('===getUnselectedBtn===');

  //make random number for button id
  let rndNumber = getRandomInt(1, 10);

  let rndBtnId;
  rndBtnId = 'mygtukas' + rndNumber;
  console.log('randomBtn-', rndBtnId);

  let mygtukasRastas = false;
  let gaunamasMygtukas;
  let stringToCheck;
  let itirNr = 0;

  while (mygtukasRastas == false) {
    itirNr = itirNr + 1;

    if (itirNr < 20) {
      gaunamasMygtukas = document.getElementById(rndBtnId);
      stringToCheck = String(gaunamasMygtukas.classList);

      if (stringToCheck.indexOf('selected0') > -1) {
        console.log('turi selected0', rndBtnId);
        console.log(
          'indexOf class selected0',
          stringToCheck.indexOf('selected0') > -1
        );
        rndNumber = getRandomInt(1, 10);
        rndBtnId = 'mygtukas' + rndNumber;
      } else {
        console.log('neturi selected0', rndBtnId); //if element has style then this returns false even though the element has the class
        console.log(
          'indexOf class selected0',
          stringToCheck.indexOf('selected0') > -1
        );
        mygtukasRastas = true;
        addX(rndNumber);
      }
    }
    if (itirNr >= 20) {
      console.log('itirNr more than 20');
    }
  }
}

function addX(btndID) {
  setTimeout(() => {
    console.log('xSvg' + btndID);
    let selBtn = document.getElementById('xSvg' + btndID);
    selBtn.classList.add('selected0'); //add class to selected btn
    selBtn.style.display = 'block';
  }, 1000);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

//function for winning conditions
function winningTheGame() {
  //maybe insert arrays with winning conditions?
  //make array with selected0 class as a picture
  //compare that array
}
