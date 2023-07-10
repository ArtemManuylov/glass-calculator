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


//стоймость стекла
const totalPrice = document.querySelector('.total-price')


// блок с инпутами размера
const inputSize = document.querySelector('.input__size');

// инпуты на ширину и высоту
const inputWidth = document.querySelector('.width');
const inputHeigth = document.querySelector('.height');

// селект с названием стекла
const selectName = document.querySelectorAll('.select-name');




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


//функция  
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
// и отображаем её
function calcPrice(){
    totalPrice.textContent = ((priceGlass * squareMeter).toFixed(1)) + ' ₽';
    if(totalPrice.textContent == 'NaN ₽'){
        totalPrice.textContent = '0 ₽';
    }
    return
};
calcPrice()