"use strict";
var formulario = document.getElementById("formulario");
var rut = document.getElementById("rut");
var numero = document.getElementById("numero");
var mail = document.getElementById("mail");
var acudiente = document.getElementById("acudientes");
var fnac = document.getElementById("fnac");
var direcc = document.getElementById("direccion");
var curso = document.getElementById("curso");
var datos = {
    d_rut: rut.value,
    d_numero: numero.value,
    d_mail: mail.value,
    d_acudiente: acudiente.value,
    d_fnac: fnac.value,
    d_direcc: direcc.value,
    d_curso: curso.value
};
var editbutton = document.getElementById("editar");
editbutton.addEventListener("click", editarDatos);
var addcurso = document.getElementById("addCurso");
addcurso.addEventListener("click", function () {
    var asignatura = document.getElementById("newAsignatura");
    var objetivo = document.getElementById("newObjetivo");
    var nota = document.getElementById("newNota");
    asignatura.removeAttribute('readonly');
    objetivo.removeAttribute('readonly');
    nota.removeAttribute('readonly');
    agregarNuevoCurso();
});
var actButton = document.getElementById("actualizar");
actButton.addEventListener("click", actualizarDatos);
function editarDatos() {
    editbutton.setAttribute('disabled', true);
    actButton.removeAttribute('disabled');
    habilitarCampos();
}
function habilitarCampos() {
    var rut = document.getElementById("rut");
    rut.removeAttribute('readonly');
    var numero = document.getElementById("numero");
    numero.removeAttribute('readonly');
    var mail = document.getElementById("mail");
    mail.removeAttribute('readonly');
    var acudiente = document.getElementById("acudientes");
    acudiente.removeAttribute('readonly');
    var fnac = document.getElementById("fnac");
    fnac.removeAttribute('readonly');
    var direcc = document.getElementById("direccion");
    direcc.removeAttribute('readonly');
    var curso = document.getElementById("curso");
    curso.removeAttribute('readonly');
    var addcurso = document.getElementById("addCurso");
    addcurso.removeAttribute('disabled');
    //eliminar cursos
    /*
    let i:number;
    for(i=0; i < ul.children.length; i++){
        let dltButton:any=document.getElementById(`dlt${i}`);
        dltButton.removeAttribute('disabled');
        dltButton.addEventListener("click",function(){
            let asignaturas:any=document.getElementById("asignaturas");
            let objetivos:any=document.getElementById("objetivos");
            let notas:any=document.getElementById("notas");
            let dbuttons:any=document.getElementById("deleteButtons");
            
            asignaturas.removeChild(asignaturas.childNodes[i-1]);
            objetivos.removeChild(objetivos.childNodes[i-1]);
            notas.removeChild(notas.childNodes[i-1]);
            dbuttons.removeChild(dbuttons.childNodes[i-1]);
        });
    }
    */
}
function agregarNuevoCurso() {
    //inputs
    var agregarButton = document.getElementById("agregar");
    agregarButton.removeAttribute('disabled');
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var asignatura = document.getElementById("newAsignatura");
    var objetivo = document.getElementById("newObjetivo");
    var nota = document.getElementById("newNota");
    agregarButton.addEventListener("click", function () {
        tr.appendChild(td1).textContent = "" + asignatura.value;
        tr.appendChild(td2).textContent = "" + objetivo.value;
        tr.appendChild(td3).textContent = "" + nota.value;
        tr.appendChild(td4).innerHTML = "<button type=\"button\" class=\"material-icons delete\">delete</button>";
        var tbody = document.getElementById("tbody");
        tbody.appendChild(tr);
        asignatura.setAttribute('readonly', true);
        objetivo.setAttribute('readonly', true);
        nota.setAttribute('readonly', true);
        agregarButton.setAttribute('disabled', true);
    });
}
function actualizarDatos() {
    var rut = document.getElementById("rut");
    if (formatoRut(rut.value)) {
        editbutton.removeAttribute('disabled');
        actButton.setAttribute('disabled', true);
        addcurso.setAttribute('disabled', true);
        rut.setAttribute('readonly', true);
        var numero_1 = document.getElementById("numero");
        numero_1.setAttribute('readonly', true);
        var mail_1 = document.getElementById("mail");
        mail_1.setAttribute('readonly', true);
        var acudiente_1 = document.getElementById("acudientes");
        acudiente_1.setAttribute('readonly', true);
        var fnac_1 = document.getElementById("fnac");
        fnac_1.setAttribute('readonly', true);
        var direcc_1 = document.getElementById("direccion");
        direcc_1.setAttribute('readonly', true);
        var curso_1 = document.getElementById("curso");
        curso_1.setAttribute('readonly', true);
        //llenar objeto
        datos = {
            d_rut: rut.value,
            d_numero: numero_1.value,
            d_mail: mail_1.value,
            d_acudiente: acudiente_1.value,
            d_fnac: fnac_1.value,
            d_direcc: direcc_1.value,
            d_curso: curso_1.value
        };
    }
}
function formatoRut(rut) {
    var i;
    var tam = rut.length;
    var dver = (rut.charAt(tam - 1)).toUpperCase();
    if (rut.length == 9 || rut.length == 10) {
        if (dver == "K" || dver == "k" || (dver >= "0" && dver <= "9")) {
            if (rut.charAt(tam - 2) == '-') {
                for (i = 0; i < tam - 2; i++) {
                    if (rut.charAt(i) < "0" || rut.charAt(i) > "9") {
                        return false;
                    }
                }
                return true;
            }
        }
    }
    return false;
}
