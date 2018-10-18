//java script
function calculateTip() {
    //store data of input
    var bill,
        service,
        num;
    var billAmount = document.getElementById("billAmount").value;
    bill = parseFloat(billAmount);
    var serviceQuality = document.getElementById("serviceQuality").value;
    service = parseFloat(serviceQuality);
    var numPeople = document.getElementById("totalPeople").value;
    num = parseInt(numPeople)
    
    //quick validation
     if(billAmount === "" || serviceQuality == 0){
        window.alert("Please insert some values");
        return;
        //This will prevent the function from continuing
    }
    
    //Check to see if input of numpeople empty or 1
    if(numPeople === "" || numPeople <= 1){
        
        num = 1;
        document.getElementById("each").style.display = "none"; 
    }
    else{
        document.getElementById("each").style.display = "block";
    }
    
    var total = (bill * service)/num;
    Math.round(total*100)/100;
    total=total.toFixed(2);
    
    //Display the tip
    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML = total;
}

//hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//clicking the button calls out custom function
document.getElementById("calculate").onclick = function(){ calculateTip(); };