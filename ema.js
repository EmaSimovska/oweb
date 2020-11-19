

function start(){

    var addnew = document.getElementById("NewButton");
    addnew.addEventListener("click", Add_New_Post, false);

    var forma = document.getElementById("submit");
    addnew.addEventListener("click", SurveyRespond, false);
}

function SurveyRespond(){
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var male = document.getElementById("male").value;
    var female = document.getElementById("female").value;
    var email = document.getElementById("email").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var gender;

    if(male==true){
        gender="Male";
    }
    else if(female==true){
        gender="Female";
    }

    var response = document.getElementById("response");
    response.innerHTML += "<p>Zdravo "+first+" "+last+"!</p>"+
    "<p>Ova se tvoite informacii:</p>"+
    "<p>Name: "+first+" "+last+"</p>"+
    "<p>Gender: "+gender+"</p>";

}

function Add_New_Post(){
    var newtitle = document.getElementById("NewTitle").value;
    var newpost = document.getElementById("NewPost").value;

    var rows=document.getElementById("new-blog");
    rows.innerHTML += "<tr><th><br></th></tr>"+
    "<tr class=\"blogtitle\"><th>"+newtitle+"</th></tr>"+
    "<tr class=\"blogpost\"><td>"+newpost+"</td></tr>";

    document.getElementById("NewTitle").value="";
    document.getElementById("NewPost").value="";

    

    // <tr class="blogtitle"><th>newtitle</th></tr>
    // <tr class="blogpost"><td>newpost</td></tr>


}


window.addEventListener("load", start, false);