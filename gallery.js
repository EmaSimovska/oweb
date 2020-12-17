




function start(){

// ***************************************************************

    var like_1 = document.getElementById("like1");
    like_1.addEventListener("click", change_heart1, false);

    var like_2 = document.getElementById("like2");
    like_2.addEventListener("click", change_heart2, false);

    var like_3 = document.getElementById("like3");
    like_3.addEventListener("click", change_heart3, false);

    var like_4 = document.getElementById("like4");
    like_4.addEventListener("click", change_heart4, false);

    var like_5 = document.getElementById("like5");
    like_5.addEventListener("click", change_heart5, false);

    var like_6 = document.getElementById("like6");
    like_6.addEventListener("click", change_heart6, false);

// ****************************************************************

    var comment1 = document.getElementById("b1");
    comment1.addEventListener("click", AddComment1, false);

    var comment2 = document.getElementById("b2");
    comment2.addEventListener("click", AddComment2, false);

    var comment3 = document.getElementById("b3");
    comment3.addEventListener("click", AddComment3, false);

    var comment4 = document.getElementById("b4");
    comment4.addEventListener("click", AddComment4, false);

    var comment5 = document.getElementById("b5");
    comment5.addEventListener("click", AddComment5, false);

    var comment6 = document.getElementById("b6");
    comment6.addEventListener("click", AddComment6, false);

// ****************************************************************





function AddComment1(){

    var kom1 = document.getElementById("text1").value;
    var ime1 = document.getElementById("textime1").value;
    var tabela1 = document.getElementById("novkomentar1");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();

    tabela1.innerHTML += "<div class='celKomentar'><p class=\"novdate\">("+dd+"."+mm+"."+yy+")<br>"+ime1+" says:</p>"+
                         "<p class=\"novkom\">"+kom1+"</p></div>";   

    document.getElementById("text1").value="";
    document.getElementById("textime1").value="";

    
}

function AddComment2(){

    var kom2 = document.getElementById("text2").value;
    var ime2 = document.getElementById("textime2").value;
    var tabela2 = document.getElementById("novkomentar2");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();

    tabela2.innerHTML += "<div class='celKomentar'><p class=\"novdate\">("+dd+"."+mm+"."+yy+")<br>"+ime2+" says:</p>"+
                         "<p class=\"novkom\">"+kom2+"</p></div>";  
                         
    document.getElementById("text2").value="";
    document.getElementById("textime2").value="";
}

function AddComment3(){

    var kom3 = document.getElementById("text3").value;
    var ime3 = document.getElementById("textime3").value;
    var tabela3 = document.getElementById("novkomentar3");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();

    tabela3.innerHTML += "<div class='celKomentar'><p class=\"novdate\">("+dd+"."+mm+"."+yy+")<br>"+ime3+" says:</p>"+
                         "<p class=\"novkom\">"+kom3+"</p></div>"; 
    
    document.getElementById("text3").value="";
    document.getElementById("textime3").value=""; 
}

function AddComment4(){

    var kom4 = document.getElementById("text4").value;
    var ime4 = document.getElementById("textime4").value;
    var tabela4 = document.getElementById("novkomentar4");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();

    tabela4.innerHTML += "<div class='celKomentar'><p class=\"novdate\">("+dd+"."+mm+"."+yy+")<br>"+ime4+" says:</p>"+
                         "<p class=\"novkom\">"+kom4+"</p></div>";   
    
    document.getElementById("text4").value="";
    document.getElementById("textime4").value="";
}

function AddComment5(){

    var kom5 = document.getElementById("text5").value;
    var ime5 = document.getElementById("textime5").value;
    var tabela5 = document.getElementById("novkomentar5");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();

    tabela5.innerHTML += "<div class='celKomentar'><p class=\"novdate\">("+dd+"."+mm+"."+yy+")<br>"+ime5+" says:</p>"+
                         "<p class=\"novkom\">"+kom5+"</p></div>";   
    
    document.getElementById("text5").value="";
    document.getElementById("textime5").value="";
}

function AddComment6(){

    var kom6 = document.getElementById("text6").value;
    var ime6 = document.getElementById("textime6").value;
    var tabela6 = document.getElementById("novkomentar6");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yy = today.getFullYear();

    tabela6.innerHTML += "<div class='celKomentar'><p class=\"novdate\">("+dd+"."+mm+"."+yy+")<br>"+ime6+" says:</p>"+
                         "<p class=\"novkom\">"+kom6+"</p></div>";   
    
    document.getElementById("text6").value="";
    document.getElementById("textime6").value="";
}




    

function change_heart1(){
    like_1.bln = !like_1.bln;

    if(like_1.bln){
        like_1.setAttribute("src", "Sliki/heart-red.png");
        window.alert("Glad you like it!");
    }
    else{
        like_1.setAttribute("src", "Sliki/heart-grey.png");
    }  
}

function change_heart2(){
    like_2.bln = !like_2.bln;

    if(like_2.bln){
        like_2.setAttribute("src", "Sliki/heart-red.png");
        window.alert("Glad you like it!");
    }
    else{
        like_2.setAttribute("src", "Sliki/heart-grey.png");
    }  
}

function change_heart3(){
    like_3.bln = !like_3.bln;

    if(like_3.bln){
        like_3.setAttribute("src", "Sliki/heart-red.png");
        window.alert("Glad you like it!");
    }
    else{
        like_3.setAttribute("src", "Sliki/heart-grey.png");
    }    
}

function change_heart4(){
    like_4.bln = !like_4.bln;

    if(like_4.bln){
        like_4.setAttribute("src", "Sliki/heart-red.png");
        window.alert("Glad you like it!");
    }
    else{
        like_4.setAttribute("src", "Sliki/heart-grey.png");
    }  
}

function change_heart5(){
    like_5.bln = !like_5.bln;

    if(like_5.bln){
        like_5.setAttribute("src", "Sliki/heart-red.png");
        window.alert("Glad you like it!");
    }
    else{
        like_5.setAttribute("src", "Sliki/heart-grey.png");
    }  
}

function change_heart6(){
    like_6.bln = !like_6.bln;

    if(like_6.bln){
        like_6.setAttribute("src", "Sliki/heart-red.png");
        window.alert("Glad you like it!");
    }
    else{
        like_6.setAttribute("src", "Sliki/heart-grey.png");
    }  
}

}

window.addEventListener("load", start, false);