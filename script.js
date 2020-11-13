const milesInput = document.getElementById('milesInput');
const kmInput = document.getElementById('kmInput');
const meterInput = document.getElementById('meterInput');
const yardInput = document.getElementById('yardInput');
const footInput = document.getElementById('footInput');
const inchInput = document.getElementById('inchInput');
const cmInput = document.getElementById('cmInput');
const mmInput = document.getElementById('mmInput');
const microMInput = document.getElementById('microMInput');
const nmInput = document.getElementById('nmInput');


//miles to others
function milesToOthers(miles){
	const milesValue = parseFloat(miles);

	kmInput.value = milesValue * 1.609;
	meterInput.value = milesValue * 1609;
	yardInput.value = milesValue * 1760;
	footInput.value = milesValue * 5280;
	inchInput.value = milesValue * 63360;
	cmInput.value = milesValue * 160934;
	mmInput.value = milesValue * 1.609e+6;
	microMInput.value = milesValue * 1.609e+9;
	nmInput.value = milesValue * 1.609e+12;
}

//kilometers To Others
function kmToOthers(km){
	const kmValue = parseFloat(km);
	milesInput.value = kmValue / 1.609;
	meterInput.value = kmValue * 1000;
	yardInput.value = kmValue * 1094;
	footInput.value = kmValue * 3281;
	inchInput.value = kmValue * 39370;
	cmInput.value = kmValue * 100000;
	mmInput.value = kmValue * 1e+6;
	microMInput.value = kmValue * 1e+9;
	nmInput.value = kmValue * 1e+12;
}

//meter To Others
function meterToOthers(meter){
	const meterValue = parseFloat(meter);
	milesInput.value = meterValue / 1609;
	kmInput.value = meterValue / 1000;
	yardInput.value = meterValue * 1.094;
	footInput.value = meterValue * 3.281;
	inchInput.value = meterValue * 39.37;
	cmInput.value = meterValue * 100;
	mmInput.value = meterValue * 1000;
	microMInput.value = meterValue * 1e+6;
	nmInput.value = meterValue * 1e+9;
}

//yard To Others
function yardToOthers(yard){
	const yardValue = parseFloat(yard);
	milesInput.value = yardValue / 1760;
	kmInput.value = yardValue / 1094;
	meterInput.value = yardValue / 1.094;
	footInput.value = yardValue * 3;
	inchInput.value = yardValue * 36;
	cmInput.value = yardValue * 91.44;
	mmInput.value = yardValue * 914;
	microMInput.value = yardValue * 914400;
	nmInput.value = yardValue * 9.144e+8
}

// To Others
function footToOthers(foot){
	const footValue = parseFloat(foot);
	milesInput.value = footValue / 5280;
	kmInput.value = footValue / 3281;
	meterInput.value = footValue / 3.281;
	yardInput.value = footValue / 3;
	inchInput.value = footValue * 12; 
	cmInput.value = footValue *  30.48;
	mmInput.value = footValue * 305;
	microMInput.value = footValue * 304800;
	nmInput.value = footValue * 3.048e+8;
}

//inch To Others
function inchToOthers(inch){
	const inchValue = parseFloat(inch);
	milesInput.value = inchValue / 63360;
	kmInput.value = inchValue / 39370;
	meterInput.value = inchValue / 39.37;
	yardInput.value = inchValue / 36;
	footInput.value = inchValue / 12;
	cmInput.value = inchValue * 2.54;
	mmInput.value = inchValue * 25.4;
	microMInput.value = inchValue * 25400;
	nmInput.value = inchValue * 2.54e+7;
}

//centimeter To Others
function cmToOthers(cm){
	const cmValue = parseFloat(cm);
	milesInput.value = cmValue / 160934;
	kmInput.value = cmValue / 100000;
	meterInput.value = cmValue / 100;
	yardInput.value = cmValue / 91.44;
	footInput.value = cmValue / 30.48;
	inchInput.value = cmValue / 2.54;
	mmInput.value = cmValue * 10;
	microMInput.value = cmValue * 10000;
	nmInput.value = cmValue * 1e+7;
}

//millimetres To Others
function mmToOthers(mm){
	const mmValue = parseFloat(mm);
	milesInput.value = mmValue / 1.609e+6;
	kmInput.value = mmValue / 1e+6;
	meterInput.value = mmValue / 1000;
	yardInput.value = mmValue / 914;
	footInput.value = mmValue / 305;
	inchInput.value = mmValue / 25.4;
	cmInput.value = mmValue / 10;
	microMInput.value = mmValue * 1000;
	nmInput.value = mmValue * 1e+6;
}

//micrometers To Others
function microMToOthers(microM){
	const microMValue = parseFloat(microM);
	milesInput.value = microMValue / 1.609e+9;
	kmInput.value = microMValue / 1e+9;
	meterInput.value = microMValue / 1e+6;
	yardInput.value = microMValue / 914400;
	footInput.value = microMValue / 304800;
	inchInput.value = microMValue / 25400;
	cmInput.value = microMValue / 10000
	mmInput.value = microMValue / 1000;
	nmInput.value = microMValue * 1000;
}

//nanometers To Others
function nmToOthers(nm){
	const nmValue = parseFloat(nm);
	milesInput.value = nmValue / 1.609e+12;
	kmInput.value = nmValue / 1e+12;
	meterInput.value = nmValue / 1e+9;
	yardInput.value = nmValue / 9.144e+8;
	footInput.value = nmValue / 3.048e+8;
	inchInput.value = nmValue / 2.54e+7;
	cmInput.value = nmValue / 1e+7;
	mmInput.value = nmValue / 1e+6;
	microMInput.value = nmValue / 1000;
}