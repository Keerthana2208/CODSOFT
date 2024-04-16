function composeEmail(){
    var name=document.getElementByIf("name").value;
    var phone=document.getElementByIf("phone").value;
    var email=document.getElementById("email").value;
    var subject=document.getElementById("subject").value;
    var message=document.getElementById("message").value;
    
    var mailtoLink="mailto:keerthanasuba2003@gmail.com"+
    "?subject=Contact%20Form%20Submission"+
    "&body=Name:%20"+encodeURIComponent(name)+
    "%0D%0APhone:%20"+encodeURIComponent(phone)+
    "%0D%0AEmail:%20"+encodeURIComponent(email)+
    "%0D%0ASubject:%20"+encodeURIComponent(subject)+
    "%0D%0AMessage:%20"+encodeURIComponent(message);
    window.location.href=mailtoLink;
}