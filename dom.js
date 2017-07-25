// *******************Занятие №12 презентация DOM *******************
// ДЗ
// Задача №1 (DOM)
// Зная структуру html, с помощью изученых методов получить(в консоль):
// 1. head
// 2. body
// 3. все дочернии элементы body и вывести их в консоль
// 4. первый div и все его дочернии узлы
// а) вывести все его дочерние узлы в консоль
// б) вывести в консоль все дочерние кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы

// console.log(document.head)
// console.log(document.body)
// console.log(document.body.children)
// console.log(document.body.firstElementChild.children)
// var nodes = document.body.firstElementChild.children
//     nodes = Array.prototype.slice.call(nodes)


// console.log(childrenBody = nodes.slice(nodes[1], nodes.length - 2));

// Задача №2 (DOM)
// Зоздать функцию которая будет проверять, является ли
// первый элемент родителем второго
// isParent(parent, child)

// function isParent(parent, child) {
//     return parent === child.closest('div')
// }

// isParent(document.body.children[0], document.querySelector('mark'))

// Задача №3 (DOM)
// Получить список всех ссылок которые не находятся в нутри списка  ul

//     function getA(doc){
//         var result = [],
//         doc = Array.prototype.slice.call(doc);
//         console.log(doc);
//         for(var i = 0; i < doc.length; i++){
//             console.dir(doc[i]);
//             if(doc[i].parentElement.localName != 'li'){
                
//             result.push(doc[i]);
//             }
//         }
//         console.log(result);
//         return result;
//     }
// getA(document.body.getElementsByTagName('a'));

// Задача №4 (DOM)
// Задача найти элементы которые находятся перед и после ul
// console.log(document.body.querySelector('ul').previousElementSibling);
// console.log(document.body.querySelector('ul').nextElementSibling);

// Задача №5 (DOM)
// Посчитать количество элементов li в списке
// console.log(document.body.querySelectorAll('ul li').length);

// Задача №1 (ООП)
// Есть класс Planet
// function Planet (name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называтся PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределить метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); //'Planet name is earth. The satellite is moon'


// function Planet (name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name + '.';
//     }
// }

// function PlanetWithSatellite (name, satelliteName){
//     Planet.call(this, name);

//     let getSatelliteName = this.getName;
//         this.getName = function() {
//             return getSatelliteName.call(this) + ' The satellite is ' + satelliteName;
//         }

// }
// var earth = new PlanetWithSatellite('earth', 'moon');

// Задача №2 (ООП)
// Создайте класс "Здание" (пусть у него будет имя, количество этажей, метод
// "получить количество этажей" и метод "установить количество этажей").
// Создайте наследников этого класса:
// класс "Жилой дом" и "Торговый Центр". Используйте функциональное
// наследование
// 
// У жилого дома появится свойство "количество квартир на этаже", а метод
// "получить количество этажей" должен вернуть обьект вида{этажей: 5,
// всегоКвартир: 5 * количествоКвартир}
// 
// У торгового центра появится свойство "количество магазинов на этаже", а
// метод "получить количество этажей" должен вернуть обьект вида {этажи: 3,
// всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

// function Building (name, numberFloors) {
//     this.name = name || '';
//     this.numberFloors = numberFloors || 1;
//     this.setNumberFloor = (num) => this.numberFloors = num;
//     this.getNumberFloor = () => this.numberFloors;
// }

// function House (name, numApartmens) {
//     Building.call(this, name);
    
//     this.numberApartmens = numApartmens;
//     let objApar = this.getNumberFloor;
//     this.getNumberFloor = function () {
//         return {numberFloors: this.numberFloors, numberApartmens: objApar.call(this) * this.numberApartmens};
//     }
// }

// function ShoppingCenter (name, numShop) {
//     Building.call(this, name)
//     this.numShop = numShop;
//     let objShop = this.getNumberFloor;
//     this.getNumberFloor = function () {
//         return {numberFloors: this.numberFloors, numShop: objShop.call(this) * this.numShop};
//     }

// }

// var house = new House('House-19', 5);
// var shoppingCenter = new ShoppingCenter('Target', 20);

// Задача №3 (ООП)
// Создать класс "Мебель" с базовыми свойствами "Имя", "цена" и методом
// "получить информацию" (метод должен вывести имя и цену в объекте). Метод
// должен быть объявлен с помощью прототипов(Func.prototype...).
// Создать два экземпляра класса "Мебель": экземпляр "ОфиснаяМебель" и
// "Мебель для дома". Придумайте им по одному свойству, которое будет
// характерны только для этих экземпляров(например, для офисной мебели-
// наличие компьютерного стола или щредера). Метод "получить информацию"
// должен учитывать и добовление вами нового свойство.
// Задача на переопределение метода у экземпляров класса.

// function Furniture (name, price) {
//     this.name = name || "";
//     this.price = price || 0;
    
// }
// Furniture.prototype.getInfo = function(){
//         return {name: this.name, price: this.price}
//     }

// function OficeFurniture (name, price, pc){
//    Furniture.call(this, name, price);
//    this.pc = pc || 'no';
// }

// OficeFurniture.prototype = Object.create(Furniture.prototype);
// OficeFurniture.prototype.constructor = OficeFurniture;
// OficeFurniture.prototype.getInfo = function (pc) {
//     let originInfo = Furniture.prototype.getInfo.call(this);
//     return  {name: this.name, price: this.price, pc: this.pc};
// }

// function HouseFurniture (name, price, room) {
//     Furniture.call(this, name, price);
//     this.room = room || 'any';
// }

// HouseFurniture.prototype = Object.create(Furniture.prototype)
// HouseFurniture.prototype.constructor = HouseFurniture;
// HouseFurniture.prototype.getInfo = function (room){
//     let originInfo1 = Furniture.prototype.getInfo.call(this);
//     return {name: this.name, price: this.price, room: this.room};
// }

// var ofice = new OficeFurniture('table', 5, 'intel');
// var house = new HouseFurniture('sofa', 25, 'hall');

// Задача №4 (ООП)
// Создать класс "Пользователь" с базовыми свойствами "имя", "дата регистрации" и
// методом "получить информацию" (метод должен вывести имя и дату регистрации в
// виде объекта) Метод должен быть объявлен с помощью прототипов
// (Func.prototype...)
// Создать два наследника класса "Пользователь": класс "Админ" и класс "Гость".
// У класа "Админ" должно быть дополнительное свойство "суперАдмин" (может быть 
// true/fals, должен быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса "Гость" должно быть свойство "срокДействия" (validDate, например - поле
// так же должно быть скрытым), содержащию дату (например одну неделю от
// момента регистрации).
// У классов-наследников метод "получить информацию" должен так же содержать
// информацию о дополнительных свойствах ("суперАдмин" и "срокДействия")

// function User (name) {
//     this.name = name || "";
//     this.date = Date.now() + 604800000
// }

//  User.prototype.getInfo = function(){
//       return {name: this.name, date: this.date}
//     }

// function Admin (name) {
//     User.call(this, name)
//     var nameAdmin = this.name === "Admin" ? true : false;
//     this._superAdmin = nameAdmin
//     this._validDate = new Date(2020, 0, 1)
// }

// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.constructor = Admin;
// Admin.prototype.getInfo = function (validDate, superAdmin) {
//     let originInfo = User.prototype.getInfo.call(this);
//     return  {name: this.name, date: new Date(this.date), valid_date: this._validDate, super_admin: this._superAdmin};
// }
// function Guest (name) {
//     User.call(this, name)
//     var nameAdmin = this.name === "Admin" ? true : false;
//     this._superAdmin = nameAdmin
//     this._validDate = new Date (this.date);
    
// }

// Guest.prototype = Object.create(User.prototype);
// Guest.prototype.constructor = Guest;
// Guest.prototype.getInfo = function () {
//     let originInfo = User.prototype.getInfo.call(this);
//     return  {name: this.name, date: new Date(), valid_date: this._validDate, super_admin: this._superAdmin};
// }

// let user_guest = new Guest('Max');
// let user_admin = new Admin('jan');

// ******************Задачи по ссылке********************
// Задания на функциональное наследование

// 1) Создайте наследника от General, у которого будет parent = false и
// появится новоё свойство child = true. Метод getInfo должен вернуть объект
//  как из оригинальной функции + поле child ({test: .., parent: …, child: ...})

// function General() {
//   this.test = true;
//   this.parent = true;
//   this.getInfo = function () {
//     return {test: this.test, parent: this.parent};
//   }
// }
// function Child(){
//     General.call(this)

//     this.parent = false;
//     this.child = true;
//     var generalGetInfo = this.getInfo;
//     this.getInfo = function () {
//         return {test: this.test, parent: this.parent, child: this.child}
//     }
    
// }
// var childGeneral = new Child();

// 2) Создайте класс Мальчик, который при инициализации принимает имя. 
// У этого класса есть свойство “хороший”=true.
// У класса так же есть метод “получить имя”, который должен вернуть строку вида:
// “Мальчика зовут ” + имя + “. Он ” + <свойство хороший> === true ? “хороший” : “плохой”.
// Далее создайте наследника от Мальчика - ПлохойМальчик. Установите
// свойство “хороший” равным false. Метод “получить имя” должен
// показывать алёрт со строкой из оригинального метода и добавочным
// текстом с новой строки “Не дружите с ним”.
// Подсказка: для перевода на новую строку используйте символ \n

// function Boy (name){
//     this.name = name || '';
//     this.good = true;
//     this.getName = function() {
//         return `Мальчика зовут  ${this.name} Он ${this.good === true ? 'хороший' : 'плохой'}`;
//     }
// }

// function BadBoy (name) {
//     Boy.call(this, name)
//     this.good = false;
//     var parentGetName = this.getName;
//     this.getName = function (name) {
//         return alert (`${parentGetName()}\nНе дружите с ним` ) 
//     }
// }


// var nameBoy = new BadBoy ('Max')

// 3) Создайте класс Fruit, который при инициализации принимает строковые
// аргументы “имя” и “цвет”. У класс есть один метод - “получить
// информацию”, который возвращает информацию о фрукте в виде строки
// “Фрукт” + имя + “цвет“ + цвет (“Фрукт - апельсин, цвет - оранжевый”).
// Создайте наследника от Fruit - SweetFruit. У него появится свойство
// sweetness=true.  Метод “получить информацию” должен вернуть строку
// “Фрукт - апельсин, цвет - оранжевый, сладость - true”. Также добавить
// метод “установить сладость”, который позволит установить sweetness в
// любое значение (например, sweetness = “сладкий”). Метод “получить
// информацию” должен показывать актуальное значение sweetness
// (“Фрукт - апельсин, цвет - оранжевый, сладость - сладкий”)

// function Fruit (name, color){
//     this.name = name;
//     this.color = color;
//     this.getInfo = function() {
//         return `Фрукт - ${this.name}, цвет - ${this.color}`;
//     }
// }

// function SweetFruit (name, color){
//     Fruit.call(this, name, color)
//     this.sweetness = true;
//     var parentGetInfo = this.getInfo
//     this.getSweetness = function(value){
//         return this.sweetness = value;
//     }
//     this.getInfo = function(){
//         return parentGetInfo.call(this) + ', сладость - ' +this.sweetness;
//     }
// }

// fruitsName = new SweetFruit('апельсин', 'оранжевый');

// Задания на прототипное наследование

// 1) Дан класс User. Создать наследника NewUser, у которого метод setNewName
// будет ко всему создавать новое свойство this.changed = “The field ‘name’ was changed!”.

// function User (name, age) {
//   this.name = name || '';
//   this.age = age || 0;
// }

// User.prototype.setNewName = function (name){
//  this.name = name;
// }

// function NewUser (name){
//   User.apply(this, arguments);
// }

// NewUser.prototype = Object.create(User.prototype);
// NewUser.prototype.constructor = NewUser;
// NewUser.prototype.setNewName = function (name) {
//   let originSetNewName = User.prototype.setNewName.call(this);
//   this.name = name;
//   return this.changed = 'The field ' + name + ' was changed!';
// }


// let user_name = new NewUser('David')

// 2) Дан абстрактный класс Module. 
// Разобраться, что он делает и как работает.
// Создать наследника NewModule. Его setGlobalName должен делать всё то
// же самое, что и родительская функция, + устанавливать this.length =
// this.name.length.


// function Module(name) {
//   if (typeof name !== 'string') {
//     throw 'Enter a name!';
//   }
  
//   this.getName = function () {
//     return name;
//   };
// }

// Module.prototype.getPrettyName = function () {
//   let name = this.getName();  
//   name = name.replace(/\s+/, '_');  

//   return 'The module name is ' + name[0].toUpperCase() + name.substr(1);
// };

// Module.prototype.setGlobalName = function (prefix) {
//   let name = this.getName();
//   this.name = prefix ? prefix + '_' + name : name; 
// };

// function NewModule (name){
//   Module.apply(this, arguments);
// };

// NewModule.prototype = Object.create(Module.prototype);
// NewModule.prototype.constructor = NewModule;
// NewModule.prototype.setGlobalName = function (prefix) {
//   let originSetGlobalName = Module.prototype.setGlobalName.call(this)
//   this.length = this.name.length

//   return originSetGlobalName;
// }
// var moduleName = new NewModule('max good')


