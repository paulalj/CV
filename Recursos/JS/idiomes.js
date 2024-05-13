const idioma_cat = './Recursos/JSON/cat.json';
const idioma_cast = './Recursos/JSON/cast.json';
const idioma_eng = './Recursos/JSON/eng.json';

const error_cat = 'Error al carregar l\'arxiu JSON:';
const error_cast = 'Error al cargar el archivo JSON:';
const error_eng = 'Error to load the JSON file:';


//En el script.js es crida a aquesta funció depenent de l'idioma utilitzat i aquesta funció és l'encarregada de decidir quin JSON es llegeix depepent de l'idioma
function json_cat(){
    llegir(idioma_cat, error_cat);
}

function json_cast(){
    llegir(idioma_cast, error_cast);
}

function json_eng(){
    llegir(idioma_eng, error_eng);
}

function llegir(idioma, error_msg) {
    //Carreguem el JSON de català
    fetch(idioma)
        .then(response => response.json())
        .then(data => {
            //Obtenim l'element on insertarem el contingut
            //nav
            const sobremi = document.getElementById('sobremi');
            const formacad = document.getElementById('formacad');
            const coneix = document.getElementById('coneix');
            const explab = document.getElementById('explab');
            const portf = document.getElementById('portf');
            const contact = document.getElementById('contact');
            //estudis
            const h2_formacad = document.getElementById('h2_formacad');
            const h3_grau = document.getElementById('h3_grau');
            const h4_grau = document.getElementById('h4_grau');
            const uni = document.getElementById('uni');
            const ciutat = document.getElementById('ciutat');
            const h3_batx = document.getElementById('h3_batx');
            const h4_batx = document.getElementById('h4_batx');
            const insti = document.getElementById('insti');
            const ciutat_insti = document.getElementById('ciutat_insti');
            //coneixements
            const h2_coneix = document.getElementById('h2_coneix');
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
            //exp. laboral
            const h2_explab = document.getElementById('h2_explab');
            const h3_steam = document.getElementById('h3_steam');
            const h4_steam = document.getElementById('h4_steam');
            const h4_steam_dates = document.getElementById('h4_steam_dates');
            const funcions_steam = document.getElementById('funcions_steam');
            const func1_steam = document.getElementById('func1_steam');
            const func2_steam = document.getElementById('func2_steam');
            const func3_steam = document.getElementById('func3_steam');
            const h3_tv3 = document.getElementById('h3_tv3');
            const h4_tv3 = document.getElementById('h4_tv3');
            const h4_tv3_dates = document.getElementById('h4_tv3_dates');
            const funcions_tv3 = document.getElementById('funcions_tv3');
            const func1_tv3 = document.getElementById('func1_tv3');
            const func2_tv3 = document.getElementById('func2_tv3');
            const func3_tv3 = document.getElementById('func3_tv3');
            const func4_tv3 = document.getElementById('func4_tv3');
            //portfoli
            const h2_portfoli = document.getElementById('h2_portfoli');
            const tfg = document.getElementById('tfg');
            const kafka = document.getElementById('kafka');
            const calc = document.getElementById('calc');
            const buscaP = document.getElementById('buscaP');
            //aptituds
            const h2_apt = document.getElementById('h2_apt');
            const apt1 = document.getElementById('apt1');
            //idiomes
            const h2_idi = document.getElementById('h2_idi');
            const cat_tit = document.getElementById('cat_tit');
            const cat = document.getElementById('cat_idi');
            const cast_tit = document.getElementById('cast_tit');
            const cast = document.getElementById('cast_idi');
            const eng_tit = document.getElementById('eng_tit');
            const eng = document.getElementById('eng_idi');
            //formulari
            const h2_form = document.getElementById('h2_form');
            const nom = document.getElementById('nom');
            const email = document.getElementById('email');
            const assumpte = document.getElementById('assumpte');
            const missatge = document.getElementById('missatge');
            const enviar = document.getElementById('submit');
            //aside
            const down_cv = document.getElementById('down_pdf');

            //Generem contingut basat en el JSON
            const nav = data.nav[0];
            const estudis = data.estudis[0];
            const coneixements = data.coneixements[0];
            const exp_lab = data.exp_lab[0];
            const portfoli = data.portfoli[0];
            const aptituds = data.aptituds[0];
            const idiomes = data.idiomes[0];
            const formulari = data.formulari[0];
            const cv_pdf = data.cv[0];


            //Contingut del nav
            sobremi.innerHTML = `${nav.sobremi}`;
            formacad.innerHTML = `${nav.formacad}`;
            coneix.innerHTML = `${nav.coneixements}`;
            explab.innerHTML = `${nav.explab}`;
            portf.innerHTML = `${nav.portfoli}`;
            contact.innerHTML = `${nav.contacte}`;
            //Contingut dels estudis
            h2_formacad.innerHTML = `${estudis.h2}`;
            h3_grau.innerHTML = `${estudis.h3_grau}`;
            h4_grau.innerHTML = `${estudis.h4_grau}`;
            uni.innerHTML = `${estudis.uni}`;
            ciutat.innerHTML = `${estudis.ciutat}`;
            h3_batx.innerHTML = `${estudis.h3_batx}`;
            h4_batx.innerHTML = `${estudis.h4_batx}`;
            insti.innerHTML = `${estudis.insti}`;
            ciutat_insti.innerHTML = `${estudis.ciutat_insti}`;
            //Contingut dels coneixements
            h2_coneix.innerHTML = `${coneixements.h2}`;
            cmm.innerHTML = `${coneixements.cmm}`;
            chash.innerHTML = `${coneixements.chash}`;
            css.innerHTML = `${coneixements.css}`;
            html.innerHTML = `${coneixements.html}`;
            js.innerHTML = `${coneixements.js}`;
            python.innerHTML = `${coneixements.python}`;
            sql.innerHTML = `${coneixements.sql}`;
            matlab.innerHTML = `${coneixements.matlab}`;
            java.innerHTML = `${coneixements.java}`;
            h3_dp.innerHTML = `${coneixements.h3_dp}`;
            unity.innerHTML = `${coneixements.unity}`;
            //Contingut de l'experiència laboral
            h2_explab.innerHTML = `${exp_lab.h2}`;
            h3_steam.innerHTML = `${exp_lab.h3_steam}`;
            h4_steam.innerHTML = `${exp_lab.h4_steam}`;
            h4_steam_dates.innerHTML = `${exp_lab.h4_steam_dates}`;
            funcions_steam.innerHTML = `${exp_lab.funcions_steam}`;
            func1_steam.innerHTML = `${exp_lab.func1_steam}`;
            func2_steam.innerHTML = `${exp_lab.func2_steam}`;
            func3_steam.innerHTML = `${exp_lab.func3_steam}`;
            h3_tv3.innerHTML = `${exp_lab.h3_tv3}`;
            h4_tv3.innerHTML = `${exp_lab.h4_tv3}`;
            h4_tv3_dates.innerHTML = `${exp_lab.h4_tv3_dates}`;
            funcions_tv3.innerHTML = `${exp_lab.funcions_tv3}`;
            func1_tv3.innerHTML = `${exp_lab.func1_tv3}`;
            func2_tv3.innerHTML = `${exp_lab.func2_tv3}`;
            func3_tv3.innerHTML = `${exp_lab.func3_tv3}`;
            func4_tv3.innerHTML = `${exp_lab.func4_tv3}`;
            //Contingut del portfoli
            h2_portfoli.innerHTML = `${portfoli.h2}`;
            tfg.innerHTML = `${portfoli.tfg}`;
            kafka.innerHTML = `${portfoli.kafka}`;
            calc.innerHTML = `${portfoli.calc}`;
            buscaP.innerHTML = `${portfoli.buscaP}`;
            //Contingut de les aptituds
            h2_apt.innerHTML = `${aptituds.h2}`;
            apt1.innerHTML = `${aptituds.apt1}`;
            //Contingut dels idiomes
            h2_idi.innerHTML = `${idiomes.h2}`;
            cat_tit.innerHTML = `${idiomes.cat_tit}`;
            cat.innerHTML = `${idiomes.cat}`;
            cast_tit.innerHTML = `${idiomes.cast_tit}`;
            cast.innerHTML = `${idiomes.cast}`;
            eng_tit.innerHTML = `${idiomes.eng_tit}`;
            eng.innerHTML = `${idiomes.eng}`;
            //Contingut del formulari
            h2_form.innerHTML = `${formulari.h2}`;
            nom.placeholder = `${formulari.nom}`;
            email.placeholder = `${formulari.mail}`;
            assumpte.placeholder = `${formulari.assumpte}`;
            missatge.placeholder = `${formulari.missatge}`;
            enviar.value = `${formulari.enviar}`;
            //Contingut del aside
            down_cv.innerHTML = `${cv_pdf.cv_pdf}`;
        })
        .catch(error => console.error(error_msg, error));
}

