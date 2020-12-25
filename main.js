function calculate(){

    //accept the input
    var billAmount = document.getElementById("billAmount").value;

    var tipPercentage = document.getElementById("tipPercentage").value;

    var noOfPeople = document.getElementById("noOfPeople").value;

    //check the input
    if(billAmount <0 || billAmount ==="" ){
        alert("Please enter valid bill amount");
    }else if(tipPercentage <0 || tipPercentage ===""){
        alert("Please enter valid % Tip ");
    }else if(noOfPeople <0 || noOfPeople===""){
        alert("Please enter valid No. of people ");
    }
    else{
        var tip= (billAmount *tipPercentage)/100
        var tipForEach = tip/noOfPeople;
        var output="Tip Amount is "+ tipForEach +" ₹ each";
        
        document.getElementById("output").innerText=output;
       
    }

    

}