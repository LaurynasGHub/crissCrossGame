function addCriss(btnId) {
  let mygtukas = document.getElementById(btnId);
  mygtukas.style.border = '10px solid black';
  mygtukas.style.borderRadius = '100%';
  console.log('btnId= ' + btnId);
  mygtukas.classList.add('selected'); //add class to selected btn

  let idNr = btnId.charAt(btnId.length - 1);
  console.log('idNr-', idNr);

  let svgMygtukas = document.getElementById('xSvg' + idNr);
  svgMygtukas.classList.add('selected');

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

      console.log('stringToCheck-', stringToCheck);

      if (stringToCheck.indexOf('selected') > -1) {
        console.log('turi selected', rndBtnId);
        rndNumber = getRandomInt(1, 10);
        rndBtnId = 'mygtukas' + rndNumber;
      } else {
        //if the same id svg is selected btn doesnt get the selected class and shows as false when checked for availability
        console.log('neturi selected', rndBtnId);
        mygtukasRastas = true;
        addX(rndNumber);
      }
    }
    if (itirNr >= 20) {
      console.log('itirNr more than 20');
      mygtukasRastas = true;
    }
  }
}

//function adds X to random selected spot
function addX(btndID) {
  setTimeout(() => {
    console.log('xSvg' + btndID);
    let selBtn = document.getElementById('xSvg' + btndID);
    selBtn.classList.add('selected'); //add class to selected svg
    selBtn.style.display = 'block';
    //add class selected to a button
    selBtn = document.getElementById('mygtukas' + btndID);
    selBtn.classList.add('selected');
  }, 1000);
}

//function gets random number between 2 values
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

//function to check if selected item has selected class
function checkSelected(elementId, elementType) {
  elementToCheck = elementType + elementId;
  console.log('===checkSelected===');
  console.log('elementToCheck-', elementToCheck);

  let checkingElement = document.getElementById(elementToCheck);

  let stringToCheck = String(checkingElement.classList);

  console.log('stringToCheck-', stringToCheck);

  if (stringToCheck.indexOf('selected') > -1) {
    console.log(elementToCheck, 'has a selected class');
    return (checkSelected = true);
  } else {
    console.log(elementToCheck, 'doesnt have a selected class');
    return (checkSelected = false);
  }
}

//function for winning conditions
function winningTheGame() {
  //maybe insert arrays with winning conditions?
  //make array with selected0 class as a picture
  //compare that array
}

//TO DO LIST
//need to fix svg, now it just floats randomly
//winning conditions need to be added
