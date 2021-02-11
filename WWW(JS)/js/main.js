//Так делаются однострочные комментарии
/*
Так делаются многострочные комментарии, как в CSS
 */
//document.write("Hello World!"); document отвечает за весь html блок, DOM
//console.info("Hello World!"); содержит лог, так же как и лог
//console.log("Hello World!");
//console.error("Hello World!") //выводит ошибку, можно детально посмотреть объекты ошибок, красный цвет
/* console.warn("Hello World!") *//*различие между еррором, то что, еррор надо обязательно фиксить, подсвечивается
желтым цветом*/

/*var означает переменную (variable) задается любое значение кроме $% и начинается не с числа, содержит
одно какое-либо значение*/
// var num;
// num = 5;
//const создает константу, которая имеет только одно значение и не может быть перераспределен
/* const num=5;
    num=7;
    console.log("Переменная" + num) Данное выражение выдаст ошибку, т.к пытались задать другое значение
 константе*/
// var num=5;
// num = 7;
// console.log("Переменная:" + num);
// //Типы данных не строгие, можно задать любой тип данных
// var number;
// number = true; //boolean
//  var num_1 = 5.5; //float
// var num_2 = "String";

// // 5 урок Математические действия
// var num_1 = 5;
// var num_2 = 10;
// ver = num_1 - num_2;
// console.log("Вычитание" + (num_1-num_2));
//
// var num_3 = 5;
// //Имеются различные формулы
// num_3 = num_3 +7;
// //Такая же запись, но сокращенно
// num_3 += 7;
//  num_3 -= 7;
// //Если добавлять единицу или отнимать, можно прописать в таком виде
// num_3 ++;
// num_3 --;
//
// console.log("Результат" + num_3);
//
// //Cложение чисел и строк
// //Для того, чтобы из строковых значений сделать число, необходимо прописать перед ней Number(число)
// //При сложении строковых и числовых значений, числовое значение автоматический принимает строковое значение
// var str_1 = Number("12");
// var str_2 = Number("2");
//
// console.log("Результат" + (str_1+str_2));
//
// //Встроенный класс Math. как и console имеет свои методы: Math.min(); Math.max(); Math.sinx(); Math.PI;
// console.log("Math min " + Math.min(2, 4, 10, 6, -8));
// console.log("Math max " + Math.max(2, 4, 10, 6, -8));


//===========6.Условные операторы
/*Операторы условия создается с помощью if ( внутри скобок задается условия) если условие означает
истину, {тогда следует код в фигурных скобках, называется он телом условия}*/
/* В скобках пишется двойное равно, потому что в одном равно мы бы дали значение переменной*/

/* if (number != 5 В данном выражении используется способ "не равно") (number >=5) (number <= 5){
console.log("OK");
 */
//Если оператор имеет только одно тело условия, можно не ставить фигурные скобки
//Else стоит всегда в конце оператора if, не используется без оператора if
/*Else if стоит всегда между if и оператором else, работает если оператор if не дает true, то идет оператор
else if, а затем только else*/
/*Если нужно указать в операторе if(более одного условия, тогда нужно ставить || ) || означает "или" т.е
выполняется или это условие или же другое*/
/*Если нужно указать в операторе if( более одного условия, тогда нужно ставить &&) && означает "и" т.е
должно выполниться как и первое условие, так и другое*/
//ishasHouse==true можно заменить на просто ishasHouse, если же ishasHouse == false, то можно !ishasHouse
var number=15;
var ishasHouse=true;
if(number!=15  &&  ishasHouse){
    console.log("OK");
} else if(number<=10){
    console.log("OK!");
} else if(number >=10){
    console.log(">=10");
} else if(number==15){
    console.log("==15");
} else {
    console.log("Error!")
}

/*Оператор switch case используется когда нужно проверить множество значений в переменной, нельзя использовать
символы ><= в данном операторе, вы проверяете только конкретное значение*/
/*Switch (проверяемое значение)
  case "cлучай, какое значение может содержать":
   после двоеточия ставится действие console.log();
   и под конец пишется break; чтобы перейти на другое условие*/
//Если же ниодин кейс не подошел, можно закончить оператором default: после него можно не ставить break
var stroka="word";
switch (stroka){
    case "4":
        console.log("Peremennaia 4");
        break;
    case "45":
        console.log("Peremennaia 45");
        break;
    case "word":
        console.log("Peremennaia so slovom word");
        break;
    default:
        console.log("Default");
}
/*Тернарная функция, сокращенная if else. If (x<a){ console.log(x+a)} else {console.log(x-a)}*/
/* после знака вопроса "?" идет истина, после знака двоеточия ":" else*/
var x=6, a=8;
var res = x<a ? (x+a):(x-a);
console.log("Результат " + res);

var nomer = 100;
var nomer1 = 500;
var rezultat = nomer>=nomer1? "Viigral nomer 100" : "viigral nomer 50";
console.log(rezultat);
if(nomer>nomer1){
    console.log("Pobeda nomer");
} else{
    console.log("Pobeda nomer1");
}
switch (nomer){
    case 88:
        console.log("88");
        break;
    case 100:
        console.log("100 case");
        break;
    default:
        console.log("Default");
}

//7.Массивы данных. Одномерные и многомерные массивы
//Array массивы, содержат в себе много значений,в отличии от переменной, начиная от цифр до булева
//Так же начинаются с 0 индекса [0], можно переназначить данные массива arr[1] = "word"
//arr.length метод массива, показывающую длину массива, т.е сколько элементов в нем
var arr = [5, 4, "string", -100, 5.7, true];
arr[1] = "word";
console.log(arr.length);

//Многомерные массивы
//Cоздаются из массива, в котором каждый элемент, является массивом и содержит какие-то элементы

var matrix = [
    [5,4] ,["string", -100], [5.7, true]
]
matrix[1][0] = "word";
console.log(matrix);

//8/Цикла в JS. Операторы циклов
//Цикл for (внутри скобок пишется переменная i=0; далее пишется условие i < 10; далее пишется действие i++)
//Удобен для вычисления массиво
// for(var i=100; i>=10; i /=2){
//     console.log(i);
// }
// //Цикл while, отличается от цикла for, тем что условие ставится не в скобках while(j<10){console.log(j) j++}
// //В отличии от for, while можно использовать булевые выражения. var ishascar = true; while(ishascar){}
// var j=1000;
//
// while(j > 10){
//     console.log(j);
//     j -= 100;
// }
// //Цикл do while, всегда выполняется первая итерация цикла. Необходимо использовать когда надо выполнить код
// // а затем выполнить условие
// var x = 0;
// do {
//     console.log(x);
//     x++;
// } while (x < 10);

//Break выводит из цикла, прерывает итерацию
// for (var i = 10; i <= 20; i+=2){
//     if(i > 15)
//         break;
//     console.log(i);
// }
//Continue заставляет цикл вернуться к началу,в  этом примере он скипает числа которые делятся на 2 и выводятся
//только нечетные числа. Пропускает одну определенную итерацию
// for (var i = 10; i <= 20; i++){
//     if(i%2==0)
//         continue;
//     console.log(i);
// }
//
//  var massiv = [2, 5, 6, 8, "strokaasd"];
// for(var i = 0; i < massiv.length; i++){
//
//
//     if(massiv[i]=="strokaasd")
//         continue;
//     massiv[i] *= 2;
//
//     console.log("Элементы массива " +(i +1)+ ":" + massiv[i]);
//
// }


//9.Всплывающие окна
//Всплывающие окна нельзя кастомизировать, чтобы их сделать, нужно отдельно прописать для них стили и добавить
//действие при нажатии которого, будет появляться данное окно
//Alert вызывает окно, которое показывает некоторую информацию
// al = 1;
// do{
//     alert("What a weather");
//     al++;
// }while(al<=1);
// //Confirm, в отличии от alert имеет 2 выбора ответа, отмена и ок, стили различаются в разных браузерах
// //Так же из нее можно получать результать, true или false
// var data=confirm("Are u at home?");
// console.log(data);
// if(data){
//     alert("WP!");
// } else{
//     alert("BG!");
// }
//Prompt всплывающее окно с текстовым полем, возвращает значение которое было написано в поле. Если же выбрать отмена
//то будет верно значение null. Prompt("Пишется вопрос", после скобки заранее подставленное значение)
// var datap = prompt("How old are you?", 27);
// console.log(datap);
// if(datap===""){
//     alert("Нельзя задать строку!")
// }
//
// var persona=null;
// if(confirm("Are u sure?")){
//     persona = prompt("What is your name?");
//     alert("Hello "+ persona);
// } else{
//     alert("You have pressed cancel");
// }

//10. Функции в языке JS
//Функция создается так, function имя функции любое и скобки , в скобках передаются параметры и всегда фигурные скобки
//Чтобы функция работала, ее нужно вызывать info(); сколько раз ее вызовешь, столько раз она будет работать
//Параметры у функции имеет тип undefined - неопределено, поэтому можно задавать туда любые значения
//Параметры у функции могут иметь любое название
//Внутри функции можно создавать условия, циклы, свич кейсы, но нельзя создавать функцию внутри функции
//Для того, чтобы функцию возвратила результат пишем return
function info( word ){
    console.log( word + " Hello");
}
function summa(a,b){
    var res = a + b;
    info(res);
}

summa(5, 10);

// function summamassiva(arr){
//     var sum = 0;
//     for( var i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     console.log(sum);
// }

function summamassiva(arr){
    res = 0;
    for(var i = 0; i < arr.length; i++){
        res += arr[i];
    }
    return res;
}
var array = [5, 10, 20 ];
var result = summamassiva(array);
console.log("Rezultat "+result);

//Так же существуют локальные и глобальные переменные
//Локальная переменная создается внутри функции и действует только внутри нее
//Глобальная переменная создается вне функции и работает как внутри функции, так и вне ее предела

var gnum = 10;

function lnum (){
    var gnum = 20;
    console.log(gnum);
}
lnum();
console.log(gnum);

//11.Обработчики событий
//Проходим действие onclick, нельзя создавать каунтер внутри функции, т.к он постоянно перезаписывается и равняется 0
//Мы передали в эту функцию this, здесь же дадим аттрибуду любое название (el)
//метод innterHTML меняет внутри тега значение, т.е между <button>INNTER HTML(меняет здесь)</button>
//el.onlick, el.name, el.id будут получать информацию из тега
//el.style.background, el.style.color напрямую влияет на css свойства, можно менять стили
//el.style.cssText можно прописать стили как в css, но при этом будут не будут работать другие методы, к примеру
// el.style.background, el.style.color и тд.
var counter = 0;
function onclickButton(el) {
    counter++;
    el.innerHTML = "U have pressed this button " + counter;
    // el.style.background = "red";
    // el.style.color = "blue";
    el.style.cssText = "border: 5px; border-radius: 50%; font-size: 20px; transition: 1s linear;"

    console.log(counter);
}
//el.value получает элементы из инпут поля
function onInput(el){
    if (el.value == "Hello")
        alert("Hi there!");
    console.log(el.value);
}

//12.Управление HTML и обработка форм при помощи JS
//Получаем тег с помощью getElementById и можем работать с данными тега text.id, text.title и т.д
//Можно переназначить уже имеющий аттрибуты тега, text.title = "new title";и значение в теге перезапишется
var text = document.getElementById('text');
text.title = "New title";
console.log(text.title);
//text.style.сolor в этом методе после style используются css теги
text.style.color = "red";
//Если же в значении text.style.background-color идет, то необходимо в js коде прописать с большой буквы вместо
//дефиса, т.е text.style.backgroundColor
text.style.backgroundColor = "blue";
//В теге text.innerHTML = " text <br> new"; работают другие теги
text.innerHTML = "Simple <br> text";
//Если нужно какое-то единственное значение из тега, вместо того, чтобы задавать переменную, нужно
//прописать document.getElementById(text).color = "white" просто поставить точку и обратиться к методу
document.getElementById('text').style.color = "pink";
//Все это время мы получали информацию только из одного объекта по id, для того, чтобы получить информацию из
//class и т.д мы получаем уже массив и перебираем его, даже если он имеет только одно значение
//innerHTML позволяет не только менять значение внутри тега, но так же и получать существующее значение из тега
// var spans = document.getElementsByTagName('span'); здесь получаем массив из названия тега
var spans = document.getElementsByClassName('simple-text');
for (i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}

//Отправка и получение данных
//Создаем name = document.getElementById('name').value; есть такой способ получить значение, а есть покороче
//т.к мы находимся внутри формы в функции, то может обратить к ней таким образом var name = el.name.value;
//AddEventListener добавляет событие, в скобках пишется какое именное событие без on, после запятой выбирается
//фукнция
document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
    el = document.getElementById('main-form');
    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = "";

    if ( name == "" || pass == "" || state == ""){
        fail = "Значения не заполнены";
    } else if (name.length <= 1 || name.length >=50){
        fail = "Неправильное имя";
    } else if (pass != repass){
        fail = "Пароли не совпадают";
    } else if (pass.split("&").length>1){
        fail = "Некорректный пароль";
    }
    if (fail != ""){
        document.getElementById('error').innerHTML = fail;

    } else {
        alert("Все данные введены верно");
        window.location = 'https://itproger.com';
    }
}
//13.Таймеры и интервалы
//Таймеры выполняют код через определенное время
//Интервалы выполняют код через определенное время, но без остановки
//В интервалах первый параметр это название функции, а второй через сколько она будет работать, идет отсчет в
//милисекундах, 1000мс = 1секунде
//clearInterval останавливает интервал
let id = setInterval(my_func, 1000);
let i_counter = 0;
function my_func() {
    i_counter++;
    console.log("Counter + : " + i_counter);
    if (i_counter == 3){
        clearInterval(id);
    }
}
//Можно в интервале сразу создать новую функцию
// setInterval(function (){
//     i_counter++;
//     console.log("Icounter + : " + i_counter);
// }, 1000)
//При создании таймера, setTimeout(указывается функция или ее название, указывается милисекунды)
setTimeout(function (){
    console.log("Timer is working!");
}, 1000)


//16.Создание объектов. Встроенные функции
//Cоздаем объект Дата, у него есть встроенные функции к которым можно обратиться через точку
var date = new Date();

// console.log(date.getFullYear());
//date.getMonth указывает месяц не с 1 числа, а с 0, как с массивами
// console.log(date.getMonth() + 1);
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
//date.set устанавливает время в дате, а date.get получает дату
date.setHours(23);
date.setMinutes(23);
console.log("Time is : " + date.getHours() + " : " + date.getMinutes());
//arr.join отвечает за соединие данных в массиве в строку, в скобках указывается " (символ для добавления)"
let massivarr = [100, 5, 6, 35, 7, 8];
// console.log(massivarr.join(" : "));
//arr.sort() сортирует в массиве значения по убыванию
// console.log(massivarr.sort());
//arr.reverse() меняет местами наоборот значения в  массиве
var mstroka =  massivarr.reverse().join(", ");
console.log(mstroka.split(", "));

//Создание объектов и функции, классов
//Создали класс Person, внутри прописываем construct(внутри скобок пишутся его параметры){ здесь задаем значения
// параметрам this.name = name;} после можно создать функцию, которая обращается к классу
class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }
    info(){
        console.log("Human being: " + this.name + ". " + "Age : " + this.age);
    }
}

let Alex = new Person("Alex", 45, true);
console.log(Alex.name + Alex.age+ Alex.happiness);
Alex.info();
