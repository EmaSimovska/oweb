

function start(){

    var addnew = document.getElementById("NewButton");
    addnew.addEventListener("click", Add_New_Post, false);

    var sortbutton = document.getElementById("SortButton");
    sortbutton.addEventListener("click", sortBlog, false);
}


function Add_New_Post(){
    var newtitle = document.getElementById("NewTitle").value;
    var newpost = document.getElementById("NewPost").value;

    var rows=document.getElementById("new-blog");
    rows.innerHTML += "<tr><td><br></td></tr>"+
    "<tr class=\"blogtitle\"><td>"+newtitle+"</td></tr>"+
    "<tr class=\"blogpost\"><td>"+newpost+"</td></tr>";

    document.getElementById("NewTitle").value="";
    document.getElementById("NewPost").value="";

}


function sortBlog(){

    var table, rowss, switching, i, x, y, shouldSwitch;
    table = document.getElementById("new-blog");
    switching = true;

    while (switching) {

        switching = false;
        rowss = table.rows;
        // gi izminuvame site redici bez prvata, se dodeka ne dojdeme do 
        // dve koi ne se sortirani dobro
        for (i = 0; i < (rowss.length - 2); i+=3){
            shouldSwitch = false;
            var j=i+3;
            x = rowss[i].getElementsByTagName("TD")[0];
            y = rowss[j].getElementsByTagName("TD")[0];
            // sporedba po ascii
            if (x.innerHTML.toString().toLowerCase() > y.innerHTML.toString().toLowerCase()){
                shouldSwitch = true;
                break;
            }
        }

        // koga ke najdeme dve nesortirani, im gi zamenuvame mestata
        if (shouldSwitch){
            var temp_title = rowss[i].getElementsByTagName("TD")[0].innerHTML;
            var temp_post = rowss[i+1].getElementsByTagName("TD")[0].innerHTML;

            rowss[i].getElementsByTagName("TD")[0].innerHTML = rowss[j].getElementsByTagName("TD")[0].innerHTML;
            rowss[i+1].getElementsByTagName("TD")[0].innerHTML = rowss[j+1].getElementsByTagName("TD")[0].innerHTML;

            rowss[j].getElementsByTagName("TD")[0].innerHTML = temp_title;
            rowss[j+1].getElementsByTagName("TD")[0].innerHTML = temp_post;

            // rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

window.addEventListener("load", start, false);



