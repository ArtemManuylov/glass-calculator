//толщина стекла
const selectThickness = document.querySelector('.select-thickness');
//зеркало
const mirror = document.querySelector('#mirror');
//стекло 4мм 
const glass4mm = document.querySelector('#thickness-4mm');
//стекло 5мм
const glass5mm = document.querySelector('#thickness-5mm');
//стекло 6мм
const glass6mm = document.querySelector('#thickness-6mm');
//стекло 8мм
const glass8mm = document.querySelector('#thickness-8mm');
//стекло 10мм
const glass10mm = document.querySelector('#thickness-10mm');
//стекло 12мм
const glass12mm = document.querySelector('#thickness-12mm');
//стекло 15мм
const glass15mm = document.querySelector('#thickness-15mm');
//стекло 12мм
const glass19mm = document.querySelector('#thickness-19mm');






// чекбокс сканирование шаблона
const сheckboxScanning = document.querySelector('#сheckbox-service__scanning');
// чекбокс резки 
const сheckboxCutting = document.querySelector('#сheckbox-service__cutting');
// чекбокс притупления 
const сheckboxProcessing = document.querySelector('#сheckbox-service__processing');
// чекбок вырез
const checkboxCutout = document.querySelector('#cutout');
//чекбок бра
const checkboxBra = document.querySelector('#bra');


// инпут для колличество шаблонов
const inputScanning = document.querySelector('.scanning');
// инпут для колличества п/м
const inputMilling = document.querySelector('.input-milling');
// инпут для колл. углов 
const corner = document.querySelector('.corner');
//инпуты с диаметром оверстий
const inputHoles1 = document.querySelector('#holes5-12');
const inputHoles2 = document.querySelector('#holes14-28');
const inputHoles3 = document.querySelector('#holes30-48');
const inputHoles4 = document.querySelector('#holes50-70');
//инпут вырез 
const cutoutAccessories = document.querySelector('.cutout-accessories');
//инпут бра
const cutoutBra = document.querySelector('.cutout-bra');
//инпут км доставки
const inputDelivery = document.querySelector('.input-delivery');

// радио кнопки резки
const radioProcessing = document.querySelector('.milling-processing');
//селект фацета
const selectFacet = document.querySelector('.width-facet');
//селект доставки
const selectDelivery = document.querySelector('.select-delivery');


//блок с радио кнопками фацет
const boxFacet = document.querySelector('.radio-box__facet');
//блок с диаметром отверстий
const holesBox = document.querySelector('.holes-box');
//блок с обработкой отверстий
const activeHoles = document.querySelector('.active-holes');






// СОБЫТИЯ
selectThickness.addEventListener('input', openThickness);


//открываем  инпут колличества шаблонов
сheckboxScanning.addEventListener('click',()=>{
    if(сheckboxScanning.checked){
        inputScanning.style.display = 'flex';
    }else{
        inputScanning.style.display = 'none';
    };
});
//открываем инпут колличество п/м
сheckboxCutting.addEventListener('click',()=>{
    if(сheckboxCutting.checked){
        inputMilling.style.display = 'flex';
        radioProcessing.style.display = 'block';
    }else{
        inputMilling.style.display = 'none';
        radioProcessing.style.display = 'none';
    };
});
//открываем инпут колл.углов
сheckboxProcessing.addEventListener('click',()=>{
    if(сheckboxProcessing.checked){
        corner.style.display = 'flex';
    }else{
        corner.style.display = 'none';
    };
});
//открываем блок с радио кнопками
selectFacet.addEventListener('click', ()=>{
    if (selectFacet.value != 'ширина фацета'){
        boxFacet.style.display = 'block';
    }else{
        boxFacet.style.display = 'none';
    }
});
// открываем блок с обработкой отверстий
holesBox.addEventListener('input',()=>{
    if(inputHoles1.value || inputHoles2.value || inputHoles3.value || inputHoles4.value !=''){
        activeHoles.style.display = 'block';
    }else{
        activeHoles.style.display = 'none';
    }
});
// открываем инпут чекбокса вырез
checkboxCutout.addEventListener('click',()=>{
    if(checkboxCutout.checked){
        cutoutAccessories.style.display = 'flex';
    }else{
        cutoutAccessories.style.display = 'none';
    }
});
// открываем инпут чекбокса бра
checkboxBra.addEventListener('click',()=>{
    if(checkboxBra.checked){
        cutoutBra.style.display = 'flex';
    }else{
        cutoutBra.style.display = 'none';
    }
});
// открываем инпут км доставки
selectDelivery.addEventListener('input',()=>{
    if(selectDelivery.value == "По межгороду 35 ₽/км"){
        inputDelivery.style.display = "flex";
    }else{
        inputDelivery.style.display = "none";
    }
})



//ФУНКЦИИ
function openThickness(){
    //открыть зеркало 
    let idMirror = mirror.getAttribute('id')
    if(selectThickness.value == idMirror){
        mirror.style.display = "flex";
    }else{
        mirror.style.display = "none";
    };
    //открыть 4мм
    let id4mm = glass4mm.getAttribute('id')
    if(selectThickness.value == id4mm){
        glass4mm.style.display = "flex";
    }else{
        glass4mm.style.display = "none";
    };
    //открыть 5mm
    let id5mm = glass5mm.getAttribute('id')
    if(selectThickness.value == id5mm){
        glass5mm.style.display = "flex";
    }else{
        glass5mm.style.display = "none";
    };
    //открыть 6mm
    let id6mm = glass6mm.getAttribute('id')
    if(selectThickness.value == id6mm){
        glass6mm.style.display = "flex";
    }else{
        glass6mm.style.display = "none";
    };
    //открыть 8mm
    let id8mm = glass8mm.getAttribute('id')
    if(selectThickness.value == id8mm){
        glass8mm.style.display = "flex";
    }else{
        glass8mm.style.display = "none";
    };
    //открыть 10mm
    let id10mm = glass10mm.getAttribute('id')
    if(selectThickness.value == id10mm){
        glass10mm.style.display = "flex";
    }else{
        glass10mm.style.display = "none";
    };
    //открыть 12mm
    let id12mm = glass12mm.getAttribute('id')
    if(selectThickness.value == id12mm){
        glass12mm.style.display = "flex";
    }else{
        glass12mm.style.display = "none";
    };
    //открыть 15mm
    let id15mm = glass15mm.getAttribute('id')
    if(selectThickness.value == id15mm){
        glass15mm.style.display = "flex";
    }else{
        glass15mm.style.display = "none";
    };
    //открыть 19mm
    let id19mm = glass19mm.getAttribute('id')
    if(selectThickness.value == id19mm){
        glass19mm.style.display = "flex";
    }else{
        glass19mm.style.display = "none";
    };
    
}