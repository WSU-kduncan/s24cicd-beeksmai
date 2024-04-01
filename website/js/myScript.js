const LBSelement = document.getElementById("KGtoLBS"); //Creates an element for eventListener
const KGelement = document.getElementById("LBStoKG"); //Creates an element for eventListener

LBSelement.addEventListener("click", convertToPounds); //Runs convertToPounds when the 'Kilogram to Pounds' button is pressed
KGelement.addEventListener("click", convertToKilogams); //Runs convertToKilograms when the 'Pounds to Kilograms' button is pressed

function convertToPounds() {
    var weightInKG = document.getElementById('weightInput').value; //Gets value entered in the textbox
    var weightInLBS = weightInKG * 2.2 //Converts
    displayResult(weightInLBS.toFixed(2) + " lbs"); //Displays result
}

function convertToKilogams(){
    var weightInLBS = document.getElementById('weightInput').value;//Gets value entered in the textbox
    var weightInKG = weightInLBS * 0.4536 //Converts
    displayResult(weightInKG.toFixed(2) + " kg"); //Displays result
}

function displayResult(result){
    document.getElementById("result").innerHTML = "Result: " + result;
}