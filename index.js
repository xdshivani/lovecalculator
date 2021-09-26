function loveper(){

    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    
    if(name==""){
        alert("Enter correct name.");
    }
    else if(name.length<=2){
        alert("Minimum length should be 3");
    }
    else if(! isNaN(name)){
        alert("Numbers not allowed");
    }
    else if(lname==""){
        alert("Enter correct name.");
    }
    else if(lname.length<=2){
        alert("Minimum length should be 3");
    }
    else if(! isNaN(lname)){
        alert("Numbers not allowed");
    }

    else{
        
    var lovedata = Math.random() * 100;
    lovedata = Math.floor(lovedata);
    document.getElementById("lovevalue").value = lovedata + "%";


    }



}