    function calculate(){
        
        var arg1 = parseInt(document.getElementById("in1").value, 10);
        var arg2 = parseInt(document.getElementById("in2").value, 10);
        var result;
        var resDisplay;
        var results = [];
        
    
        if (document.getElementById("op1").checked = true) {
            result = arg1 * arg2;
            resDisplay = String(arg1 + " x " + arg2 + " = " + result);
            document.getElementById("result").innerHTML = resDisplay;
            }
    
        else if (document.getElementById("op2").checked = true) {
            result = arg1 / arg2;
            resDisplay = String(arg1 + " \ " + arg2 + " = " + result);
            document.getElementById("result").innerHTML = resDisplay;
            }
    
        else if (document.getElementById("op3").checked = true) {
            result = arg1 + arg2;
            resDisplay = String(arg1 + " + " + arg2 + " = "+ result);
            document.getElementById("result").innerHTML = resDisplay;
            }
    
        else if (document.getElementById("op4").checked = true) {
            result = arg1 - arg2;
            resDisplay = String(arg1 + " - " + arg2 + " = " + result);
            document.getElementById("result").innerHTML = resDisplay;
            }
        
        if (results.length == 10) {
                results.pop;
                results.push(resDisplay);
            }
            else {results.push(resDisplay);
                 }

        for (i=0; i < results.length; i++) {
             document.getElementById("results").innerHTML += "<br />" + results[i];
         }
        
    }


    function clearCalc(){
        document.getElementById("in1").value = "";
        document.getElementById("in2").value = "";
        
        document.getElementById("op1").checked = false;
        document.getElementById("op2").checked = false;
        document.getElementById("op3").checked = false;
        document.getElementById("op4").checked = false;
        
        document.getElementById("result").innerHTML = "";
        document.getElementById("results").innerHTML = "";
    }