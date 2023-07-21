// толщина стекла
let thicknessGlass;
// ширина и высота стекла
let widthGlass;
let heightGlass; 
// название стекла
let nameGlass;
// цена стекла
let priceGlass;
// метр квадратный стекла
let squareMeter;
// переменная для вычисления цены
let priceCulc;
// ценник шаблона;
let templatePrice = 1500;
//PRICE
let basicPrice = 0;



//стоймость стекла
const totalPrice = document.querySelector('.total-price')
// блок с инпутами размера
const inputSize = document.querySelector('.input__size');
// блок с радио кнопками резки
const cuttingRadio = document.querySelector('.cutting-radio');
// инпуты на ширину и высоту
const inputWidth = document.querySelector('.width');
const inputHeigth = document.querySelector('.height');
// селект с названием стекла
const selectName = document.querySelectorAll('.select-name');
// радио кнопка непрямоугольной резки
const notRectangularBtn = document.querySelector('.not-rectangular');
// радио кнопка криволинейной резки
const curvedBtn = document.querySelector('.curved-cutting');





//ФУНКЦИИ

//находим значение мнпута толщины стекла
selectThickness.addEventListener('input',()=>{
    thicknessGlass = selectThickness.value;
});

// находим квадратный метр стекла и отображаем его в HTML
inputSize.addEventListener('input',()=>{
    widthGlass = inputWidth.value;
    heightGlass = inputHeigth.value;
    squareMeter = (((widthGlass/1000))*((heightGlass/1000))).toFixed(2);
    let displaySquareMeter = document.querySelector('.display-squareMeter');
    displaySquareMeter.style.border = '#212529 solid 1px';
    displaySquareMeter.style.borderRadius = '10px';
    displaySquareMeter.textContent = squareMeter + ' M²';
    calcPrice();
});

// накидываем события на все названия 
for (let i = 0 ; i < selectName.length; i++) {
    selectName[i].addEventListener('input', (e)=>{
        let indexGlass = selectName[i].selectedIndex
        // находим цену стекла за квадратный метр и название
        priceGlass = Number(selectName[i].value);
        nameGlass = selectName[i].options[indexGlass].textContent;
        calcPrice();
    });
 };

// вычисляем сумму исходя из цены и квадратного метра стекла
// и отображаем ее
function calcPrice(){
    priceCulc = Number((priceGlass * squareMeter).toFixed(1));
    totalPrice.textContent = priceCulc + ' ₽';
    if(totalPrice.textContent == 'NaN ₽'){
        totalPrice.textContent = 0 + ' ₽';
    }
    basicPrice = priceCulc;
};

//добавление стоймость резки исходя из выбранного типа
cuttingRadio.addEventListener('change', ()=>{
    if(notRectangularBtn.checked){
        let price1 = (priceCulc * 1.1).toFixed(0);
        basicPrice = Number(price1);
        totalPrice.textContent = price1 + ' ₽';
    }else if(curvedBtn.checked){
        let price2 = (priceCulc * 1.3).toFixed(0);
        basicPrice = Number(price2);
        totalPrice.textContent = price2 + ' ₽';
    }else{
        totalPrice.textContent = priceCulc + ' ₽';
        basicPrice = Number(priceCulc);
    };
    if(priceCulc == undefined){
        totalPrice.textContent = 0 + ' ₽';
        basicPrice = 0;
    }
});

// узнаем колличиство шаблонов и добавляем стоймость за шт.
сheckboxScanning.addEventListener('click',()=>{
    if(inputScanning.style.display != 'flex'){
        totalPrice.textContent = basicPrice + ' ₽';
        inputScanning.value = 0;
    }else{
        inputScanning.addEventListener('input',()=>{
            if(basicPrice == 0){
                let scanningPrice = inputScanning.value * templatePrice;
                totalPrice.textContent = scanningPrice + ' ₽';
            }else{
                let scanningPrice = basicPrice + (inputScanning.value * templatePrice);
                totalPrice.textContent = scanningPrice + ' ₽';
            }
    })
    }       
});

