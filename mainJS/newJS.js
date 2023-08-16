//НЕОБХОДИМЫЕ ЭЛЕМЕНТЫ ИЗ DOM

//селект с названием стекла
const selectName = document.querySelectorAll('.select-name');
//блок с инпутами размеров
const inputSize = document.querySelector('.input__size');
//инпуты ширины и высоты
const inputWidth = document.querySelector('.width');
const inputHeight = document.querySelector('.height');
//ценник на экарене
const displayPrice = document.querySelector('.total-price');

//блок с радио кнопками резки
const cuttingRadio = document.querySelector('.cutting-radio');

// радио кнопка непрямоугольной резки
const notRectangularBtn = document.querySelector('.not-rectangular');

// радио кнопка криволинейной резки
const curvedBtn = document.querySelector('.curved-cutting');


// ПЕРЕМЕННЫЕ 

//толщина стекла
let thicknessGlass;

// ценна квадратного метра стекла
let m2Price;

// ширина и высота 
let widthGlass;
let heightGlass;

// колличество кв/м в изделии
let numbersMeters;

// ценна изделия исходя из ка/м
let priceGlass;

// ценна за все услуги
let totalPrice = 0;


// СОБЫТИЯ

//выбор толщины стекла
selectThickness.addEventListener('input',()=>{
    thicknessGlass = selectThickness.value;
});

// обнуление при выборе другого стекла
selectThickness.addEventListener('input',()=>{
    if(displayPrice.textContent != (0 + ' ₽')){
        location.reload ();
    }
});

//выбор типа стекла и ценны, накидываем события на все названия 
for(let i = 0; i < selectName.length; i ++){
    selectName[i].addEventListener('input',()=>{
        m2Price = Number(selectName[i].value);
        // обнуление при выборе другого стекла
        if(displayPrice.textContent != (0 + ' ₽')){
            location.reload ();
        }
    })
};

//узнаем ширину и высоту изделия, колличество и цена кв/м 
inputSize.addEventListener('input',()=>{
    widthGlass = inputWidth.value;
    heightGlass = inputHeight.value;
    //м/кв
    numbersMeters = Number((((widthGlass/1000))*((heightGlass/1000))).toFixed(2));
    //ценна за м/кв
    priceGlass = numbersMeters * m2Price;
    //-----------------------
    totalPrice = priceGlass;
    //-----------------------
    //выводим кол метров на экран
    let displaySquareMeter = document.querySelector('.display-squareMeter');
    displaySquareMeter.style.border = '#212529 solid 1px';
    displaySquareMeter.style.borderRadius = '10px';
    displaySquareMeter.textContent = numbersMeters + ' M²';

    //выводим ценник
        if(displayPrice.textContent == 'NaN ₽'){
            displayPrice.textContent = 0 + ' ₽';
        }else{
            displayScreen();
        }
    
});

//добавление стоймость резки исходя из выбранного типа
cuttingRadio.addEventListener('change',()=>{
    if(notRectangularBtn.checked){
        totalPrice = (priceGlass * 1.1).toFixed(0);
        displayScreen();
    }else if(curvedBtn.checked){
        totalPrice = (priceGlass * 1.3).toFixed(0);
        displayScreen();
    }else{
        totalPrice = priceGlass * 1;
        displayPrice.textContent = totalPrice  + ' ₽';
    }
})



//функция отображение ценны на экране
function displayScreen(){
    displayPrice.textContent = totalPrice  + ' ₽'
}
