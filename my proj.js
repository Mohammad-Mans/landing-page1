
function load(){
let screen = document.getElementById("loading-screen");
let icon = document.getElementById("loading-icon");
let t = (Math.floor(Math.random() * 4) + 2) * 1000;

screen.className="loading";
icon.className="loader";

setTimeout(() => {
    screen.className="hide";
    icon.className="hide";
    submit();
}, t);

}

function submit() {

    let valid, input , statement ;

    valid = (
     validation(document.getElementById("fName").value ,
     document.getElementById("fName") ,
     document.getElementById("fNameVerify"))
    );

    valid =(
     validation(document.getElementById("lName").value ,
     document.getElementById("lName") ,
     document.getElementById("lNameVerify")) && valid
    );

    input = document.getElementById("email");
    statement = document.getElementById("emailVerify");

    if(validation(document.getElementById("email").value , input , statement )){

        if (/@/.test(document.getElementById("email").value)) {
            input.className="valid";
            statement.className="hide";
            
        }else{
            input.className =("invalid");
            statement.innerHTML="The email must contain '@'.";
            statement.className=" isRequired";
            valid = false;
        }

    }else{
        valid = false;
    }

    valid =(
     validation(document.getElementById("description").value ,
     document.getElementById("description") , 
     document.getElementById("descVerify")) && valid
    );

    if (valid) {
        toast();
    }
}

function validation(value,input,y){
    if (value == "") {
        input.className =("invalid");
        y.innerHTML="This field is required.";
        y.className=" isRequired";
        return false;
    }else{
        input.className="valid";
        y.className="hide";
        return true;
    }
}

function toast() {
    var x = document.getElementById("toast");

    if (Math.random() > 0.5) {
        x.innerHTML = "Success.";
        x.className = "show success";
    } else {
        x.innerHTML = "Failed."
        x.className = "show failed";
    }

    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 2000);

}