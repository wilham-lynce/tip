function calculateTip() {
    
    //Saving the data of the inputs
    var billAmount =document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
   
    //Quick validation
    if(billAmount==="" || serviceQuality == 0){
        window.alert("Please enter some values!");
        return; // this will prevent the function from continuing
    }
    //Calculatioons
    var total = parseFloat(billAmount)*parseFloat(serviceQuality);

    var total_bill = parseFloat(total)+parseFloat(billAmount);
    
    //Display the tip!
    document.getElementById("total_amount_paid").style.display = "block";
    document.getElementById("total_bill").innerHTML = total_bill;
    //Display total amount paid
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;    
    }
    
    
    
    //Hide the tip amount on load
    document.getElementById("totalTip").style.display ="none";
    document.getElementById("total_amount_paid").style.display = "none";
    
    //Clicking the button calls our custom function
    document.getElementById("calculate").onclick= function(){calculateTip();};




    // bootstrap
    