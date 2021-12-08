function setCookie(name, value, days, path, domain, secure){

    if(!navigator.cookieEnabled) return; //sprawdzamy czy cookies są aktywne

    var e = encodeURIComponent; // podmienia znaki specjalne na cyfrę, liczbę - nie możemy mieć w ciągu session średnika, on ma być na końcu

    var cookie = e(name) + "="  + e(value); // 'firstName=Jan'

    if(typeof days === "number"){
        var date = new Date();

        date.setTime(date.getTime()+days * 1000 * 60 *60 * 24); //ustawiamy aktualny czas w milisekundach 

        cookie += "; expires="+date.toGMTString(); //date.toGMTString ustawia datę w formacie Fri, 18 Mar 2022 19:39:36 GMT'
    }

    if(path){
        cookie +="; path="+path; //dodanie do ciągu ścieżki
    }

    if(domain){
        cookie +="; domain="+domain; //dodanie do ciągu domeny
    }

    if(secure){
        cookie +="; secure;"; //dodanie do ciągu secure
    }

    
    

    //return cookie;

    document.cookie = cookie;

}

// przy próbie wywołania setCookie("firstName", "josh$", 100, "/", ".localhost"); nie przpisze ciasteczek z powodu ".localhost" ponieważ aby 
// to zadziałało poprawnie powinniśmy mieć zapis z conajmniej dwoma kropkami ".localhost.pl"