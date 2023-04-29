function kthoten(){ 
    let hoten1= document.getElementById("hoten").value;
    let pattern =/^[A-Z]{1}[a-z]{1,10}.*$/;
    if(pattern.test(hoten1)){
        document.getElementById('erhoten').innerHTML="*";
        return true;
    }else {
        document.getElementById('erhoten').innerHTML="Invalid Name";
        return false;
    }
}

function ktemail(){
    let email = document.getElementById('email').value;
    let pattern = /^\w+@gmail.com$/;
        if (pattern.test(email)){
            document.getElementById('eremail').innerHTML="*";
            return true;
        }else
            document.getElementById('eremail').innerHTML="Invalid Email";
            return false;

}

function ktsdt() {
    let sdt1=document.getElementById('sdt').value;
    let pattern= /^\d{10}$/;
        if ( pattern.test(sdt1)){
            document.getElementById('ersdt').innerHTML="*";
            return true;
        }else 
            document.getElementById('ersdt').innerHTML="Invalid Phone";
            return false;
}

function ktdate() {
    let date = document.getElementById('date').value; //String
    date = new Date(date);
    let currentday = new Date();
    
     let tuoi = currentday.getFullYear() - date.getFullYear();
        if(tuoi >= 18){
            document.getElementById('erdate').innerHTML="*";
            return true;
        }else
         document.getElementById('erdate').innerHTML="tuoi phai tren 18";
         return false;
}

function kttk(){
    let tk = document.getElementById('tdn').value;
    if(tk!=null){
        document.getElementById('ertdn').innerHTML="*";
        return true;
    }else
    document.getElementById('ertdn').innerHTML="tk k dc rong";
    return false;
}


