function loadInfoUser(){
   let tr =  document.createElement("tr");
    tr.innerHTML +=
    "<td>" +  localStorage.getItem("name")  + "</td> "+
    "<td>" +  localStorage.getItem("email") + "</td> "+
    "<td>" +  localStorage.getItem("sdt1")  + "</td> "+
    "<td>" +  localStorage.getItem("date")  + "</td> "+
    "<td>" +  localStorage.getItem("tk")    + "</td> "+
    "<td>" +  localStorage.getItem("pass")  + "</td>";

    document.getElementById("tableInfoUser").append(tr);
}
loadInfoUser();