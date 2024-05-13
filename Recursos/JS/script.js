//Variables globals per saber en quin idioma estem llegint la web
var cat = false;
var cast = false;
var eng = false;

//Variable global per saber quans cops s'ha clicat la imatge Easter Egg
var count = 0;
let imatge = '<img src=\"./Recursos/Imatges/Ou_0.PNG\">'; //Inicialitzem la imatge de l'Easter Egg amb la primera
let imatge_inicial = document.getElementById('EasterEggImatgeInicial');

//Variable global per canviar la imatge del mode dia/nit
let imatge_mdn = '<img src=\"./Recursos/Imatges/moon.png\">';
let imatge_mdn_inicial = document.getElementById('img_mdn');

//Guardem alguns elements del document
const cartes = document.querySelectorAll('.carta');
const text_aptituds = document.getElementById('text_aptituds');
const text_idiomes = document.getElementById('text_idiomes');

const header = document.getElementById('header');

const cv = document.getElementById('cv');

const nit_dia_div = document.getElementById('mode_nit');

const cmm = document.getElementById('cmm');
const chash = document.getElementById('chash');
const css = document.getElementById('css');
const html = document.getElementById('html');
const js = document.getElementById('js');
const python = document.getElementById('python');
const sql = document.getElementById('sql');
const matlab = document.getElementById('matlab');
const java = document.getElementById('java');
const h3_dp = document.getElementById('h3_dp');
const unity = document.getElementById('unity');

const ss1 = document.getElementById('ss1');
const ss2 = document.getElementById('ss2');
const ss3 = document.getElementById('ss3');
const ss4 = document.getElementById('ss4');
const ss5 = document.getElementById('ss5');

// Accedim al css
var estil = window.getComputedStyle(document.documentElement);

//Guardem els colors del mode dia
var color_clar_dia = estil.getPropertyValue('--color_clar_dia');
var color_fosc_dia = estil.getPropertyValue('--color_fosc_dia');
var cartes_color_dia = estil.getPropertyValue('--cartes_dia');
var fons_dia = estil.getPropertyValue('--fons_dia');
var lletra_dia = estil.getPropertyValue('--lletra_dia');

//Guardem els colors del mode nit
var color_clar_nit = estil.getPropertyValue('--color_clar_nit');
var color_fosc_nit = estil.getPropertyValue('--color_fosc_nit');
var cartes_nit = estil.getPropertyValue('--cartes_nit');
var fons_nit = estil.getPropertyValue('--fons_nit');
var lletra_nit = estil.getPropertyValue('--lletra_nit');

//Definim el booleà que ens dirà si estem en mode dia o nit
var activat = true;

//Definim el booleà que ens dirà si tenim activat o no el menú
var activat_menu = true;

//Constants per validar el nom, el correu i els camps de text utilitzant Regex
const nomRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,40}$/;
const mailRegex = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
const assumpteRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,\-_@']{2,40}$/;
const missatgeRegex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,\-_@']{2,140}$/;

//Agafem els valors introduits per l'usuari en qualsevol dels 3 idiomes que hagi escollit
const nomInput = document.getElementById('nom');
const mailInput = document.getElementById('email');
const assumpteInput = document.getElementById('assumpte');
const missatgeInput = document.getElementById('missatge');

//Agafem el div que mostrarà l'error
const nomError = document.getElementById('errorNom');
const mailError = document.getElementById('errorMail');
const assumpteError = document.getElementById('errorAssum');
const missatgeError = document.getElementById('errorMissatge');

//Creem les variables per la data i la mostrem per pantalla
const data_index = document.getElementById('data');
var data = new Date();
data_index.innerHTML = data.getDate()+'/'+(data.getMonth()+1)+'/'+data.getFullYear()+', '+data.getHours()+':'+data.getMinutes();

//Cridem a aquesta funció perquè el CV que aparegui per defecte sigui l'anglès
CV_eng();


//Funció per activar el currículum en català. Definim la mida del header i fem apareixer i desparèixer els blocs corresponents
function CV_cat() {
    cat = true;
    json_cat();
}


//Funció per activar el currículum en castellà. Definim la mida del header i fem apareixer i desparèixer els blocs corresponents
function CV_cast() {
    cast = true;
    json_cast();
}

//Funció per activar el currículum en anglès. Definim la mida del header i fem apareixer i desparèixer els blocs corresponents
function CV_eng() {
    eng = true;
    json_eng();
}

//Funció per alternar entre el mode nit i el mode dia
function mode_nit() {
    activat = !activat; //Quan premem el botó passa d'estar activat a desactivat
    if (activat == false) {
        //Canviar a mode nit canviant els colors
        document.documentElement.style.setProperty('--color_clar', color_clar_nit);
        document.documentElement.style.setProperty('--color_fosc', color_fosc_nit);
        document.documentElement.style.setProperty('--cartes', cartes_nit);
        document.documentElement.style.setProperty('--fons', fons_nit);
        document.documentElement.style.setProperty('--lletra', lletra_nit);
        //Canviem a la imatge del sol per tornar al mode dia
        imatge_mdn_inicial.style.display = 'none';
        imatge_mdn = '<img src=\"./Recursos/Imatges/sun.png\">';
        document.querySelector('#dianitImatge').innerHTML = imatge_mdn;
    }
    else {
        //Tornar a mode dia canviant els colors de nou
        document.documentElement.style.setProperty('--color_clar', color_clar_dia);
        document.documentElement.style.setProperty('--color_fosc', color_fosc_dia);
        document.documentElement.style.setProperty('--cartes', cartes_color_dia);
        document.documentElement.style.setProperty('--fons', fons_dia);
        document.documentElement.style.setProperty('--lletra', lletra_dia);
        //Canviem a la imatge de la lluna per tornar al mode nit
        imatge_mdn_inicial.style.display = 'none';
        imatge_mdn = '<img src=\"./Recursos/Imatges/moon.png\">';
        document.querySelector('#dianitImatge').innerHTML = imatge_mdn;
    }
}

//Iterem sobre carta per passar per totes les que tenim
cartes.forEach(carta => {
    // Fem que aparegui el text quan passem per sobre amb el ratolí
    carta.addEventListener('mouseenter', () => {
        text_aptituds.style.display = 'block';
        text_idiomes.style.display = 'block';
    });

    // Fem que desaparegui el text quan sortim amb el ratolí
    carta.addEventListener('mouseleave', () => {
        text_aptituds.style.display = 'none';
        text_idiomes.style.display = 'none';
    });
});

//Funció per imprimir l'error en pantalla
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

//Funció per validar el nom segons el Regex utilitzat
function validarNom() {
    //Comprovem que estigui dintre dels paràmetres Regex proposats en qualsevol dels 3 idiomes
    if (nomRegex.test(nomInput.value)) {
        //Amaguem el bloc del missatge d'error
        nomError.style.display = 'none';
    } else {
        //Cridem a la funció que imprimeix l'error amb un missatge diferent depenent de l'idioma utilitzat
        if (cat === true) {
            printError("errorNom", "Introdueix un nom vàlid");
        }
        else if (cast === true) {
            printError("errorNom", "Introduzca un nombre válido");
        }
        else if (eng === true) {
            printError("errorNom", "Introduce a valid name");
        }
        nomError.style.display = 'block';

    }
}

//Funció per validar el correu seguint el Regex
function validarMail() {
    if (mailRegex.test(mailInput.value)) {
        mailError.style.display = 'none';
    } else {
        if (cat === true) {
            printError("errorMail", "Introdueix un correu vàlid");
        }
        else if (cast === true) {
            printError("errorMail", "Introduzca un correo válido");
        }
        else if (eng === true) {
            printError("errorMail", "Introduce a valid e-mail");
        }
        mailError.style.display = 'block';
    }
}

//Funció per validar l'assumpte seguit el Regex
function validarAssumpte() {
    if (assumpteRegex.test(assumpteInput.value)) {
        assumpteError.style.display = 'none';
    } else {
        if (cat === true) {
            printError("errorAssum", "Introdueix un assumpte vàlid");
        }
        else if (cast === true) {
            printError("errorAssum", "Introduzca un asunto válido");
        }
        else if (eng === true) {
            printError("errorAssum", "Introduce a valid subject");
        }
        assumpteError.style.display = 'block';
    }
}

//Funció per validar el missatge seguint el Regex
function validarMissatge() {
    if (missatgeRegex.test(missatgeInput.value)) {
        missatgeError.style.display = 'none';
    } else {
        if (cat === true) {
            printError("errorMissatge", "Introdueix un missatge vàlid");
        }
        else if (cast === true) {
            printError("errorMissatge", "Introduzca un mensaje válido");
        }
        else if (eng === true) {
            printError("errorMissatge", "Introduce a valid message");
        }
        missatgeError.style.display = 'block';
    }
}

//Funció per canviar les imatges quan es clica
function EasterEgg() {
    imatge_inicial.style.display = 'none';
    count++;
    let nomfoto = 'Ou_' + count + '.PNG';
    if (count <= 3) {
        imatge = '<img src=\"./Recursos/Imatges/' + nomfoto + '\">';
        document.querySelector('#EasterEggImatge').innerHTML = imatge;
    } else {
        imatge = '<img src=\"./Recursos/Imatges/Ou_3.PNG\">';
        document.querySelector('#EasterEggImatge').innerHTML = imatge;
    }

}

//Creem les funcions per fer aparèixer el nom quan es passa per sobre
function apareix_nom_cmm(){
    cmm.style.display = 'block';
}
function apareix_nom_chash(){
    chash.style.display = 'block';
}
function apareix_nom_css(){
    css.style.display = 'block';
}
function apareix_nom_html(){
    html.style.display = 'block';
}
function apareix_nom_js(){
    js.style.display = 'block';
}
function apareix_nom_pyt(){
    python.style.display = 'block';
}
function apareix_nom_sql(){
    sql.style.display = 'block';
}
function apareix_nom_mat(){
    matlab.style.display = 'block';
}
function apareix_nom_java(){
    java.style.display = 'block';
}
function apareix_nom_dp(){
    h3_dp.style.display = 'block';
}
function apareix_nom_unit(){
    unity.style.display = 'block';
}
function apareix_nom_ss1(){
    ss1.style.display = 'block';
}
function apareix_nom_ss2(){
    ss2.style.display = 'block';
}
function apareix_nom_ss3(){
    ss3.style.display = 'block';
}
function apareix_nom_ss4(){
    ss4.style.display = 'block';
}
function apareix_nom_ss5(){
    ss5.style.display = 'block';
}


//Creem la funció per fer desaparèixer el nom quan es passa per sobre
function desapareix_nom(){
    cmm.style.display = 'none';
    chash.style.display = 'none';
    css.style.display = 'none';
    html.style.display = 'none';
    js.style.display = 'none';
    python.style.display = 'none';
    sql.style.display = 'none';
    matlab.style.display = 'none';
    java.style.display = 'none';
    h3_dp.style.display = 'none';
    unity.style.display = 'none';
    ss1.style.display = 'none';
    ss2.style.display = 'none';
    ss3.style.display = 'none';
    ss4.style.display = 'none';
    ss5.style.display = 'none';
}

//CARROUSSEL
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Funció per fer aparèixer i desaparèixer el menú hamburguesa
document.getElementById("menuIcono").addEventListener("click", function () {
    var esq = document.getElementById("esq");
    var dreta = document.getElementById("dreta");
    if (esq.style.display === "none" || esq.style.display === "") {
        esq.style.display = "block";
        dreta.style.display = "block";
    } else {
        esq.style.display = "none";
        dreta.style.display = "none";
    }
});