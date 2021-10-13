let formulario:any = document.getElementById("formulario");

let rut:any=document.getElementById("rut");
let numero:any=document.getElementById("numero");
let mail:any=document.getElementById("mail");
let acudiente:any=document.getElementById("acudientes");
let fnac:any=document.getElementById("fnac");
let direcc:any=document.getElementById("direccion");
let curso:any=document.getElementById("curso");

let datos = {
    d_rut: rut.value,
    d_numero: numero.value,
    d_mail: mail.value,
    d_acudiente: acudiente.value,
    d_fnac: fnac.value,
    d_direcc: direcc.value,
    d_curso: curso.value
};

let editbutton:any = document.getElementById("editar");
editbutton.addEventListener("click",editarDatos);

let addcurso:any=document.getElementById("addCurso");
addcurso.addEventListener("click",function(){
    let asignatura:any = document.getElementById("newAsignatura");
    let objetivo:any = document.getElementById("newObjetivo");
    let nota:any = document.getElementById("newNota");

    asignatura.removeAttribute('readonly');
    objetivo.removeAttribute('readonly');
    nota.removeAttribute('readonly');
    agregarNuevoCurso();
});

let actButton:any = document.getElementById("actualizar");
actButton.addEventListener("click",actualizarDatos);

function editarDatos(){
    editbutton.setAttribute('disabled',true);
    actButton.removeAttribute('disabled');
    habilitarCampos();
}

function habilitarCampos(){
    let rut:any=document.getElementById("rut");
    rut.removeAttribute('readonly');
    let numero:any=document.getElementById("numero");
    numero.removeAttribute('readonly');
    let mail:any=document.getElementById("mail");
    mail.removeAttribute('readonly');
    let acudiente:any=document.getElementById("acudientes");
    acudiente.removeAttribute('readonly');
    let fnac:any=document.getElementById("fnac");
    fnac.removeAttribute('readonly');
    let direcc:any=document.getElementById("direccion");
    direcc.removeAttribute('readonly');
    let curso:any=document.getElementById("curso");
    curso.removeAttribute('readonly');
    let addcurso:any=document.getElementById("addCurso");
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

function agregarNuevoCurso(){
    //inputs

    let agregarButton:any = document.getElementById("agregar");
    agregarButton.removeAttribute('disabled');

        let tr:any = document.createElement("tr");
        let td1:any = document.createElement("td");
        let td2:any = document.createElement("td");
        let td3:any = document.createElement("td");
        let td4:any = document.createElement("td");

        let asignatura:any = document.getElementById("newAsignatura");
        let objetivo:any = document.getElementById("newObjetivo");
        let nota:any = document.getElementById("newNota");        

    agregarButton.addEventListener("click",function(){

        tr.appendChild(td1).textContent=`${asignatura.value}`;
        tr.appendChild(td2).textContent=`${objetivo.value}`;
        tr.appendChild(td3).textContent=`${nota.value}`;
        tr.appendChild(td4).innerHTML=`<button type="button" class="material-icons delete">delete</button>`;
        
        let tbody:any=document.getElementById("tbody");

        tbody.appendChild(tr);

        asignatura.setAttribute('readonly',true);
        objetivo.setAttribute('readonly',true);
        nota.setAttribute('readonly',true);
        agregarButton.setAttribute('disabled',true);
    });
    
}

function actualizarDatos(){

    let rut:any=document.getElementById("rut");
    if(formatoRut(rut.value)){
        editbutton.removeAttribute('disabled');
        actButton.setAttribute('disabled',true);
        addcurso.setAttribute('disabled',true);
    
        rut.setAttribute('readonly',true);
        let numero:any=document.getElementById("numero");
        numero.setAttribute('readonly',true);
        let mail:any=document.getElementById("mail");
        mail.setAttribute('readonly',true);
        let acudiente:any=document.getElementById("acudientes");
        acudiente.setAttribute('readonly',true);
        let fnac:any=document.getElementById("fnac");
        fnac.setAttribute('readonly',true);
        let direcc:any=document.getElementById("direccion");
        direcc.setAttribute('readonly',true);
        let curso:any=document.getElementById("curso");
        curso.setAttribute('readonly',true);

        //llenar objeto
        datos = {
            d_rut: rut.value,
            d_numero: numero.value,
            d_mail: mail.value,
            d_acudiente: acudiente.value,
            d_fnac: fnac.value,
            d_direcc: direcc.value,
            d_curso: curso.value
        };
        
    }

    

}

function formatoRut(rut:string){
    let i:number;
    let tam:number=rut.length;
    let dver:string=(rut.charAt(tam-1)).toUpperCase();

    if(rut.length == 9 || rut.length == 10){
        if(dver=="K" || dver=="k" || (dver>="0" && dver<="9")){
            if(rut.charAt(tam-2)=='-'){
                for(i=0; i < tam-2; i++){
                    if(rut.charAt(i)<"0" || rut.charAt(i)>"9"){
                        return false;
                    }
                }
                return true;
            }
        }
    }
    return false;
}

