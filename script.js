    var johnMass = "50kg";
   	var johnHeight = "1.75m";
   	var johnBmical =parseInt(johnMass) / Math.pow((parseFloat(johnHeight)), 2);
   	var johnBMI= johnBmical.toFixed(2) + "kg/m2";
    
    var victorMass = "60kg";    
    var victorHeight = "1.75m";
    var victorBmical =(parseInt(victorMass) / Math.pow((parseFloat(victorHeight)), 2));
    var victorBMI = victorBmical.toFixed(2) + "kg/m2";
    
    if (victorBmical > johnBmical){
        final = "Is Victor's BMI higher than John's? True"
    } else{
        final = "Is Victor's BMI higher than John's? False"
    }
    
    
    console.log(johnBMI)
    console.log(victorBMI)
    console.log( final )