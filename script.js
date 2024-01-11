//sudedam paspaustas value i array kur bus visi X
//tada parenkam random skaiciu is array? isbrauksim ten pvz 1, 3,5 ir tada is 2,4,6,7,8,9 rinks kur det O
//ten ideda O ir ideda i array ta reiksme?

function addCriss(btnId) {
  let mygtukas = document.getElementById(btnId);
  mygtukas.style.border = '10px solid black';
  mygtukas.style.borderRadius = '100%';
  console.log('btnId= ' + btnId);
  mygtukas.classList.add('selectedO'); //add class to selected btn
  getUnselectedBtn();
}

//find if selected fuction
function getUnselectedBtn() {
  console.log('===getUnselectedBtn===');
  let arraySize = 0;
  const selArr = []; //add elements with class selectedO to an array
  //array with all posible values
  const posValArr = [
    'mygtukas1',
    'mygtukas2',
    'mygtukas3',
    'mygtukas4',
    'mygtukas5',
    'mygtukas6',
    'mygtukas7',
    'mygtukas8',
    'mygtukas9',
  ];

  //loop trough all buttons
  var buttons = document.getElementsByTagName('button');

  for (i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    console.log('button id= ' + button.id);
    console.log('class list- ' + button.classList);

    let stringToCheck = String(button.classList);
    // let stringPos = stringToCheck.indexOf('selectedO');
    // console.log('stringPos' + stringPos);

    if (stringToCheck.indexOf('selectedO') > -1) {
      console.log('turi selected0');
      selArr[arraySize] = button.id; //add button id to an array
      arraySize = arraySize + 1;
    }
  }

  // for (i = 0; i < selArr.length; i++) {
  //   console.log('arrray');
  // }

  //subtract selArr from possible arr- find values which
  //are not in an default array, add them to a new array
  //nors siaip gal tiesiog imt random skaicius? butu mygtukas+rnd
  //get by id jei tas button kuri gavom turi class selected tada ok
  //jei nera tos selected class tada ok, jei yra tada ieskom kito
  //tiesiog for loop ir kai randam ko reikia darom continue

  //get random value that is left and add X in that spot
}
