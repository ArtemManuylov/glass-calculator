// толщина стекла
let thicknessGlass;



// блок с инпутами размера
const inputSize = document.querySelector('.input__size');

// инпуты на ширину и высоту
const inputWidth = document.querySelector('.width');
const inputHeigth = document.querySelector('.height');





//ФУНКЦИИ

//находим значение мнпута толщины стекла
selectThickness.addEventListener('input',()=>{
    thicknessGlass = selectThickness.value;
});

// находим квадратный метр стекла и отображаем его в HTML
let widthGlass;
let heightGlass; 
inputSize.addEventListener('input',()=>{
    widthGlass = inputWidth.value;
    heightGlass = inputHeigth.value;
    let squareMeter = (((widthGlass/1000))*((heightGlass/1000))).toFixed(2);
    let displaySquareMeter = document.querySelector('.display-squareMeter');
    displaySquareMeter.style.border = '#212529 solid 1px';
    displaySquareMeter.style.borderRadius = '10px';
    displaySquareMeter.textContent = squareMeter + ' M²';
});

