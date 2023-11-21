//Практика
//Создание элементов из массива на JavaScript
//464
// №1 Модифицируйте мой код так, чтобы по клику на абзац к его содержимому прибавлялась единица.
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
// 		parent.appendChild(p);
//         p.addEventListener('click', function(){
//             p.textContent+=1;
//         })
// }

//Практика на создание списков ul на JavaScript
//465
//  №1 Дан ul:
//  <ul id="elem"></ul>
//  Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// let ul = document.querySelector("#elem");
// let arr = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
// for(elem of arr){
// let li = document.createElement('li');
// 	li.textContent = elem;
// 		ul.appendChild(li);
// }

// let arr = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
// let ul = document.querySelector('#elem');
// arr.forEach(function(element) {
//   let li = document.createElement('li');
//   li.textContent = element;
//   ul.appendChild(li);
// });
// №2 Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.
// let ul = document.querySelector("#elem");
// let arr = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
// for(elem of arr){
// let li = document.createElement('li');
// 	li.textContent = elem;
// 		ul.appendChild(li);
// }
// ul.addEventListener("click", (event) => {
// 	let clickedItem = event.target; 
// 	let text = clickedItem.textContent; 
// 	alert(text);
//   });

// let arr = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
// let ul = document.querySelector('#elem');
// arr.forEach(function(element) {
//   let li = document.createElement('li');
//   li.textContent = element;
//   ul.appendChild(li);
// });
// ul.addEventListener("click", (event) => {
//   let clickedItem = event.target; 
//   let text = clickedItem.textContent; 
//   alert(text);
// });
// №3 Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.
// let ul = document.querySelector("#elem");
// let arr = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
// for(elem of arr){
// let li = document.createElement('li');
// 	li.textContent = elem;
// 		ul.appendChild(li); 
// li.addEventListener("click", ()=> {
//     li.textContent += "!";
//   });
// }
// №4 Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
// let ul = document.querySelector("#elem");
// let arr = ['Элемент 1', 'Элемент 2', 'Элемент 3'];
// for(elem of arr){
// let li = document.createElement('li');
// 	li.textContent = elem;
// 		ul.appendChild(li); 
// li.addEventListener("click",function func() {
//     li.textContent += "!";
// 	this.removeEventListener('click', func);
// });}

//Создание HTML таблиц на JavaScript
//466
// №1 Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
// let table = document.querySelector('#table');
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 		for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
// 		table.appendChild(tr);
// }
// №2 Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
// 		for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
// 		table.appendChild(tr);
// }
// №3 Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
// 		for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 		td.textContent='x'
// 	}
// 		table.appendChild(tr);
// }
// №4 Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
// let button = document.querySelector('#createTable');
// let str = document.querySelector("#str");
// let kol = document.querySelector("#kol");
// let table = document.querySelector("#table");
// button.addEventListener('click', function(){
//   for(let i = 0; i < str.value; i++) {
//     let tr = document.createElement("tr");
//     for(let j = 0; j < kol.value; j++) {
//           let td = document.createElement("td");
// 		  td.textContent="x";
// 		  tr.appendChild(td);
//             }
//     table.appendChild(tr);
//   }
// })

//Последовательное заполнение HTML таблиц
//467
// №1 Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.
// let table = document.querySelector('#table');
// let k = 1;
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 			td.textContent = k; 
// 		k++; 
// 		tr.appendChild(td);
// 	}
// 		table.appendChild(tr);
// }
// №2 Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.
// let table = document.querySelector('#table');
// let k = 2;
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 			td.textContent = k; 
// 		k+=2; 
// 		tr.appendChild(td);
// 	}
// 		table.appendChild(tr);
// }

// Создание HTML таблицы из массива на JavaScript
//468
// №1 Дан массив:
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem;
// 		tr.appendChild(td);
// 	}
// 		table.appendChild(tr);
// }
// №2 Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem**2;
// 		tr.appendChild(td);
// 	}
// 		table.appendChild(tr);
// }

// Создание HTML таблицы из массива объектов
// 469
// №1 Дан следующий массив с работниками:
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// Выведите элементы этого массива в виде HTML таблицы.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('#table');
// for (let employee of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employee.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employee.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = employee.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }
// №2 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let employee of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employee.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employee.age;
// 	tr.appendChild(td2);
	// td2.addEventListener('click', function(){
	// 	td2.textContent++;
	// })
// 	let td3 = document.createElement('td');
// 	td3.textContent = employee.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }
// №3 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let employee of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employee.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employee.age;
// 	tr.appendChild(td2);
// 	td2.addEventListener('click', function(){
// 		td2.textContent++;
// 	})
// 	let td3 = document.createElement('td');
// 	td3.textContent = employee.salary;
// 	tr.appendChild(td3);
// 	td3.addEventListener('click', function(){
// 		td3.textContent*=1.1;
// 	})
// 	table.appendChild(tr);
// }

// Добавление рядов и колонок в HTML таблицу
//  470
// Добавление рядов
// №1 Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.
// let table = document.querySelector('#table');
// let button = document.querySelector('#createCell');
// button.addEventListener('click', ()=>{
// 	let tr = document.createElement('tr');
// 	tr.textContent='+ ряд'
// table.appendChild(tr);
// })
// Добавление колонок
// №2 Дана таблица размером 2 на 2:
// <table id="table">
// 	<tr>
// 		<td></td>
// 		<td></td>
// 	</tr>
// 	<tr>
// 		<td></td>
// 		<td></td>
// 	</tr>
// </table>
// td {
// 	width: 50px;
// 	height: 50px;
// 	border: 1px solid black;
// }
// Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.
// let table = document.querySelector('#table');
// let button = document.querySelector('#createCellAndColumn');
// button.addEventListener('click', () => {
// let newRow = document.createElement('tr');
// let numCols = table.rows.length > 0 ? table.rows[0].cells.length : 0;
// for (let i = 0; i < numCols; i++) {
// let td = document.createElement('td');
// td.textContent = '';
// newRow.appendChild(td);
// }
// table.appendChild(newRow);
// let rows = table.querySelectorAll('tr');
// for (let row of rows) {
// let td = document.createElement('td');
// td.textContent = '';
// row.appendChild(td);
// }
// });

// let table = document.querySelector('#table');
// let button = document.querySelector('#createCellAndColumn');
// button.addEventListener('click', function(){
// let trs =document.querySelectorAll('#table tr');
// let trr = document.createElement('tr');
// for(let tr of trs){
// let td = document.createElement('td');
// tr.appendChild(td);
// }
// for (let i=0; i<=trs.length; i++){
// let td = document.createElement('td');
// trr.appendChild(td);
// }
// table.appendChild(trr)
// });

// let table = document.querySelector('#table');
// let button = document.querySelector('#createCellAndColumn');
// let count=1;
// button.addEventListener('click', () => {
// 	++count;
// let newTr = document.createElement('tr');
// for (let i = 0; i < count; i++) {
// let td = document.createElement('td');
// td.textContent = '';
// newTr.appendChild(td);
// }
// table.appendChild(newTr);
// let trs = table.querySelectorAll('tr');
// for (let tr of trs) {
// let td = document.createElement('td');
// td.textContent = '';
// tr.appendChild(td);
// }
// });

// Изменение ячеек HTML таблицы на JavaScript
//471
// №1 Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
// let table = document.querySelector('#table');
// let button = document.querySelector('#IncreaseByTwoTimes');
// let tds = document.querySelectorAll('#table td');
// button.addEventListener('click', () => {
// for (let td of tds) {
// 	td.textContent = td.textContent*2;
// }
// })

// Самоудаление новых элементов на JavaScript
// 472
// №1 Дан следующий код:
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
// <input type="submit" id="button">
// Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент.
// Сделайте так, чтобы любая li удалялась по клику на нее.
// Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
// let parent = document.querySelector('#parent');
// let button = document.querySelector('#button');
// button.addEventListener('click', () => {
// 	let li = document.createElement('li');
// 	li.textContent = parent.childElementCount + 1;
// 		parent.appendChild(li);
// })
// parent.addEventListener('click', (event) => {
// if (event.target.tagName === 'LI') {
// event.target.remove();
// }
// });

// Ссылка на удаление элемента на JavaScript
// 473
// №1 Самостоятельно, не подсматривая в мой код, решите описанную задачу.
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
// remove.addEventListener('click', function() {
// 	elem.remove();
// });

// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
// remove.addEventListener('click', function(event) {
// 	elem.remove();
// 	event.preventDefault(); // отменяем переход по ссылке
// });

// Создание ссылок для удаление элементов на JavaScript
//474
// №1 Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
// let elems = document.querySelectorAll('#parent li');
// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }
// №2 Дана HTML таблица.
// Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.
// let table = document.querySelector('#table');
// let trs = table.querySelectorAll('tr');    
//         for (let tr of trs)
// {
//         let newTd=document.createElement('td');
//         let remove = document.createElement('a');
// 		remove.href = '';
// 		remove.textContent = 'Удалить';
// 		newTd.appendChild(remove);
//             tr.appendChild(newTd);
//             remove.addEventListener('click', function(event){
//                 tr.remove();
// 				event.preventDefault();
//             });
//   }

// Редактирование отдельного элемента на JavaScript
//475
// №1 Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.value = elem.textContent; 
// input.addEventListener('input', function() {
// 	elem.textContent = input.value;
// });
// Появление инпута
// №2 Самостоятельно, не подсматривая в мой код, решите описанную задачу.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		this.remove();
// 	});
// 		elem.parentElement.appendChild(input);
// });

// Прячем текст при редактировании элемента на JavaScript
//476
// №1 Самостоятельно, не подсматривая в мой код, решите описанную задачу.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
// 	elem.textContent = '';
// 	elem.appendChild(input);
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func);
// 	});
// 	elem.removeEventListener('click', func);
// });

// Редактирование в группе элементов на JavaScript
//477
// №1 Дан тег ul.
// Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредактировать текст этой li.
// let elems = document.querySelectorAll('li');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
// 			elem.textContent = '';
// 		elem.appendChild(input);
// 				input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
// 				elem.removeEventListener('click', func);
// 	});
// }
// №2 Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.
// let elems = document.querySelectorAll('td');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
// 			elem.textContent = '';
// 		elem.appendChild(input);
// 				input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
// 				elem.removeEventListener('click', func);
// 	});
// }

// Одновременное редактирование и удаление элементов
//478
// №1 Дан следующий HTML код:
// <div id="parent">
// 	<p><span>text1</span></p>
// 	<p><span>text2</span></p>
// 	<p><span>text3</span></p>
// </div>
// Добавьте ссылку на удаление в конец каждого абзаца.
// Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.
// let spans = document.querySelectorAll('#parent span');
// for (let span of spans) {
//   let remove = document.createElement('a');
//   		remove.href = '';
//   		remove.textContent = 'Удалить';
//   remove.addEventListener('click', function(event) {
//     event.preventDefault();
//     span.parentNode.remove();
//   });
//   span.parentNode.appendChild(remove);
// 	span.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = span.textContent;
// 			span.textContent = '';
// 		span.appendChild(input);
// 				input.addEventListener('blur', function() {
// 			span.textContent = this.value;
// 			span.addEventListener('click', func);
// 		});
// span.removeEventListener('click', func);
// 	});
// }

// №2 Пусть теперь изначально тегов span нет:
// <div id="parent">
// 	<p>text1</p>
// 	<p>text2</p>
// 	<p>text3</p>
// </div>
// Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.
// let ps = document.querySelectorAll("#parent p");
// for (let p of ps){
// p.innerHTML ='<span>' + p.innerHTML + '</span>';
// }
// let spans = document.querySelectorAll('#parent p span')
// for (let span of spans) {
// span.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = span.textContent;
// 	span.textContent = '';
// 	span.appendChild(input);
// 	input.addEventListener('blur', function() {
// 		span.textContent = this.value;
// 		span.addEventListener('click', func);
// 		let remove = document.createElement('a');
// 		remove.href = '';
//   		remove.textContent = 'Удалить';
// 		remove.addEventListener('click', function(event) {
// 			event.preventDefault();
// 			span.parentNode.remove();
//   });
//   span.parentNode.appendChild(remove);
// 			});
// 			span.removeEventListener('click', func);

// 		});
// }

// Стилизация элементов на JavaScript
//479
// №1 Дан следующий HTML код:
// <p>text1</p>
// <p>text2</p>
// <p>text3</p>
// Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).
// let ps = document.querySelectorAll("p");
// for (let p of ps){
// p.innerHTML ='<span>' + p.innerHTML + '</span>';
// let crossedOut = document.createElement('a');
// crossedOut.href = '';
// crossedOut.textContent = 'crossed out';
// p.appendChild(crossedOut)
// let spans = document.querySelectorAll('span')
// for (let span of spans) {
// 	crossedOut.addEventListener('click', function(event) {
// 		event.preventDefault();
//       span.classList.add('crossedOut')
//     })
//   }
// }
// №2 Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).
// let ps = document.querySelectorAll("p");
// for (let p of ps){
// p.innerHTML ='<span>' + p.innerHTML + '</span>';
// let crossedOut = document.createElement('a');
// crossedOut.href = '';
// crossedOut.textContent = 'crossed out';
// p.appendChild(crossedOut)
// let spans = document.querySelectorAll('span')
// for (let span of spans) {
// 	crossedOut.addEventListener('click', function(event) {
// 		event.preventDefault();
//       span.classList.add('crossedOut')
// crossedOut.remove();
// });
// }
// }
// №3 Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой.
// По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.
// let table = document.querySelector('#table');
// let trs = table.querySelectorAll('tr');
// for (let tr of trs) {
//         let newTd = document.createElement('td');
//         let backgrounColor = document.createElement('a');
// 		backgrounColor.href = '';
// 		backgrounColor.textContent = 'покрасить в зелёный';
// 		newTd.appendChild(backgrounColor);
//             tr.appendChild(newTd);
//             backgrounColor.addEventListener('click', function(event){
// 				event.preventDefault()
//     tr.classList.add('colored')
//   });
// }
// №4 Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие.
// let table = document.querySelector('#table');
// let trs = table.querySelectorAll('tr');
// for (let tr of trs) {
//         let newTd = document.createElement('td');
//         let backgrounColor = document.createElement('a');
// 		backgrounColor.href = '';
// 		backgrounColor.textContent = 'покрасить в зелёный';
// 		newTd.appendChild(backgrounColor);
//             tr.appendChild(newTd);
//             backgrounColor.addEventListener('click', function(event){
// 				event.preventDefault()
// 				    tr.classList.toggle('colored')
//   });
// }

// Кнопки для скрытия и показа элемента на JavaScript
// 480
// №1 Модифицируйте мой код так, чтобы была только одна кнопка.
// Пусть по первому клику на эту кнопку элемент показывается, а по второму - скрывается.
// let elem = document.querySelector('#elem');
// let showOrHide = document.querySelector('#showAndHide');
// showOrHide.addEventListener('click', function() {
// if (elem.classList.contains('hidden')) {
// elem.classList.remove('hidden');
// } else {
// elem.classList.add('hidden');
// }
// });

// Много элементов с кнопками показа на JavaScript
// 481
// Первый способ
// №1 Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }
// Второй способ
// №2 Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');
// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	});
// }
// Третий способ
// №3 Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		this.previousElementSibling.classList.toggle('hidden');
// 	});
// }

// Активация элементов на JavaScript
// 482
// №1 Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.
// let lis = document.querySelectorAll('#parent li');
// for (let li of lis) {
// 	li.addEventListener('click', function() {
// 		this.classList.add('active');
// 	});
// }
// №2 Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.
// let lis = document.querySelectorAll('#parent li');
// for (let li of lis) {
// li.addEventListener('click', function() {
// if (this.classList.contains('active')) {
// this.classList.remove('active');
// } else {
// this.classList.add('active');
// }
// });
// }

// Чередование стилей активации на JavaScript
// 483
// №1 Разберите мой код, а затем самостоятельно повторите решение этой задачи.
// let tds = document.querySelectorAll('#table td');
// let color = 'color1';
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (color == 'color1') {
// 			color = 'color2'
// 		} else {
// 			color = 'color1'
// 		}
// 				this.classList.add(color);
// 	});
// }
// Чередование многих цветов из массива
// №2 Расскажите, как работает приведенный мною код.
// let tds = document.querySelectorAll('#table td');
// let i = 0;
// let colors = ['color11', 'color12', 'color13'];
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.classList.add(colors[i]);
// 		i++;
// 		if (i == colors.length) {
// 			i = 0;
// 		}
// 	});
// }

// 484
// Практика на изменение элементов на JavaScript
// №1 Дан массив. Выведите его элементы в виде списка ul.
// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
// let ul = document.querySelector('ul');
// 	for (let elem of arr) {
// 		let li = document.createElement('li');
// 		li.textContent = elem;
// 		ul.appendChild(li);
// }
// №2 Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.
// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
// let ul = document.querySelector('ul');
// 	for (let elem of arr) {
// 		let li = document.createElement('li');
// 		li.textContent = elem;
// 		ul.appendChild(li);
// 		li.addEventListener('click', function() {
// 			let input = document.createElement('input');
// 			input.value = li.textContent;
// 			li.appendChild(input);
// 			input.addEventListener('blur', function() {
// 				li.textContent = input.value;
// 			});
// 		});
// 	}

// №3 Модифицируйте предыдущую задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul.
// Сделайте так, чтобы новые li также можно было редактировать.
		// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
		// let ul = document.querySelector('ul');
		// let input = document.querySelector('input');
		// let addButton = document.querySelector('#button');
		// 	for (let elem of arr) {
		// let li = document.createElement('li');
		// li.textContent = elem;
		// ul.appendChild(li);
		// li.addEventListener('click', function() {
		// let editInput = document.createElement('input');
		// editInput.value = li.textContent;
		// li.textContent = '';
		// li.appendChild(editInput);
		// editInput.addEventListener('blur', function() {
		// li.textContent = editInput.value;
		// });
		// });
		// }
		// addButton.addEventListener('click', function() {
		// let newElem = input.value;
		// let li = document.createElement('li');
		// li.textContent = newElem;
		// ul.appendChild(li);
		// input.value = '';
		// li.addEventListener('click', function() {
		// let editInput = document.createElement('input');
		// editInput.value = li.textContent;
		// li.textContent = '';
		// li.appendChild(editInput);
		// editInput.addEventListener('blur', function() {
		// li.textContent = editInput.value;
		// });
		// });
		// });

// №4 Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.
// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
// let ul = document.querySelector('ul');
// let input = document.querySelector('input');
// let addButton = document.querySelector('#button');
// function createLiElement(elem) {
//   let li = document.createElement('li');
//   li.textContent = elem;
//   let deleteLink = document.createElement('a');
//   deleteLink.href = '#';
//   deleteLink.textContent = 'удалить';
//   deleteLink.addEventListener('click', function() {
//     li.remove();
//   });
//   li.appendChild(deleteLink);
//   li.addEventListener('click', function() {
//     let editInput = document.createElement('input');
//     editInput.value = li.firstChild.textContent;
//     li.firstChild.textContent = '';
//     li.firstChild.appendChild(editInput);
//     editInput.addEventListener('blur', function() {
//       li.firstChild.textContent = editInput.value;
//     });
//   });
//   return li;
// }
// for (let elem of arr) {
//   let li = createLiElement(elem);
//   ul.appendChild(li);
// }
// addButton.addEventListener('click', function() {
//   let newElem = input.value;
//   let li = createLiElement(newElem);
//   ul.appendChild(li);
//   input.value = '';
// });

// №5 Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.
// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
// let ul = document.querySelector('ul');
// let input = document.querySelector('input');
// let addButton = document.querySelector('#button');
// function createLiElement(elem) {
//   let li = document.createElement('li');
//   li.textContent = elem;
//   let crossedOut = document.createElement('a');
//   crossedOut.href = '';
//   crossedOut.textContent = 'перечеркнуть';
//   crossedOut.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	li.classList.add('crossedOut')
//   });
//   li.appendChild(crossedOut);
//   li.addEventListener('click', function() {
//     let editInput = document.createElement('input');
//     editInput.value = li.firstChild.textContent;
//     li.firstChild.textContent = '';
//     li.firstChild.appendChild(editInput);
//     editInput.addEventListener('blur', function() {
//       li.firstChild.textContent = editInput.value;
//     });
//   });
//   return li;
// }
// for (let elem of arr) {
//   let li = createLiElement(elem);
//   ul.appendChild(li);
// }
// addButton.addEventListener('click', function() {
//   let newElem = input.value;
//   let li = createLiElement(newElem);
//   ul.appendChild(li);
//   input.value = '';
// });

// Массив объектов и таблица
// №6 Дан следующий массив с работниками:
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// Выведите этих работников в HTML таблице.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('table');
// for (let employee of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employee.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employee.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = employee.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// }
// №7 Добавьте ячейкам созданной таблицы возможность редактирования.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('table');
// for (let employee of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employee.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employee.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = employee.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// 	td1.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = td1.textContent;
// 	td1.appendChild(input);
// 	input.addEventListener('blur', function() {
// 		td1.textContent = input.value;
// 	})
// })
// 	td2.addEventListener('click', function() {
// 		let input = document.createElement('input');
// 		input.value = td2.textContent;
// 		td2.appendChild(input);
// 		input.addEventListener('blur', function() {
// 			td2.textContent = input.value;
// 		})
// 	})
// 		td3.addEventListener('click', function() {
// 			let input = document.createElement('input');
// 			input.value = td3.textContent;
// 			td3.appendChild(input);
// 			input.addEventListener('blur', function() {
// 				td3.textContent = input.value;
// 			})
// 		})
// 	}
// №8 Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.querySelector('table');
// for (let employee of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employee.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employee.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = employee.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// 	td1.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = td1.textContent;
// 	td1.appendChild(input);
// 	input.addEventListener('blur', function() {
// 		td1.textContent = input.value;
// 	})
// })
// 	td2.addEventListener('click', function() {
// 		let input = document.createElement('input');
// 		input.value = td2.textContent;
// 		td2.appendChild(input);
// 		input.addEventListener('blur', function() {
// 			td2.textContent = input.value;
// 		})
// 	})
// 		td3.addEventListener('click', function() {
// 			let input = document.createElement('input');
// 			input.value = td3.textContent;
// 			td3.appendChild(input);
// 			input.addEventListener('blur', function() {
// 				td3.textContent = input.value;
// 			})
// 		})
//         let newTd=document.createElement('td');
//         let remove = document.createElement('a');
// 		remove.href = '';
// 		remove.textContent = 'Удалить';
// 		newTd.appendChild(remove);
//             tr.appendChild(newTd);
//             remove.addEventListener('click', function(event){
//                 tr.remove();
// 				event.preventDefault();
//             });
// 		}
// №9 Сделайте под таблицей 3 инпута и кнопку для добавление нового работника.
// Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу.
// Реализуйте редактирование ячеек для вновь добавленных работников.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let addButton2 = document.querySelector('#button2');
// let table = document.querySelector('table');
// let nameInput = document.querySelector('#nameInput');
// let ageInput = document.querySelector('#ageInput');
// let salaryInput = document.querySelector('#salaryInput');
// for (let employee of employees) {
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = employee.name;
// 	tr.appendChild(td1);
// 	let td2 = document.createElement('td');
// 	td2.textContent = employee.age;
// 	tr.appendChild(td2);
// 	let td3 = document.createElement('td');
// 	td3.textContent = employee.salary;
// 	tr.appendChild(td3);
// 	table.appendChild(tr);
// 	td1.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = td1.textContent;
// 	td1.appendChild(input);
// 	input.addEventListener('blur', function() {
// 		td1.textContent = input.value;
// 	})
// })
// 	td2.addEventListener('click', function() {
// 		let input = document.createElement('input');
// 		input.value = td2.textContent;
// 		td2.appendChild(input);
// 		input.addEventListener('blur', function() {
// 			td2.textContent = input.value;
// 		})
// 	})
// 		td3.addEventListener('click', function() {
// 			let input = document.createElement('input');
// 			input.value = td3.textContent;
// 			td3.appendChild(input);
// 			input.addEventListener('blur', function() {
// 				td3.textContent = input.value;
// 			})
// 		})
//         let newTd=document.createElement('td');
//         let remove = document.createElement('a');
// 		remove.href = '';
// 		remove.textContent = 'Удалить';
// 		newTd.appendChild(remove);
//             tr.appendChild(newTd);
//             remove.addEventListener('click', function(event){
//                 tr.remove();
// 				event.preventDefault();
//             });
// 		}
// 			function addEmployee() {
// 			let name = nameInput.value;
// 			let age = parseInt(ageInput.value);
// 			let salary = parseInt(salaryInput.value);
// 			let newEmployee = {name, age, salary};
// 			employees.push(newEmployee);
// 			let tr = document.createElement('tr');
// 			let td1 = document.createElement('td');
// 			td1.textContent = newEmployee.name;
// 			tr.appendChild(td1);
// 			let td2 = document.createElement('td');
// 			td2.textContent = newEmployee.age;
// 			tr.appendChild(td2);
// 			let td3 = document.createElement('td');
// 			td3.textContent = newEmployee.salary;
// 			tr.appendChild(td3);
// 			let deleteBtn = document.createElement('button');
// 			deleteBtn.textContent = 'удалить';
// 			tr.appendChild(deleteBtn);
// 			table.appendChild(tr);
// 				td1.addEventListener('click', function() {
// 				let input = document.createElement('input');
// 				input.value = td1.textContent;
// 				td1.textContent = '';
// 				td1.appendChild(input);
// 				input.addEventListener('blur', function() {
// 					td1.textContent = input.value;
// 				});
// 			});			
// 			td2.addEventListener('click', function() {
// 				let input = document.createElement('input');
// 				input.value = td2.textContent;
// 				td2.textContent = '';
// 				td2.appendChild(input);
// 				input.addEventListener('blur', function() {
// 					td2.textContent = input.value;
// 				});
// 			});
// 				td3.addEventListener('click', function() {
// 				let input = document.createElement('input');
// 				input.value = td3.textContent;
// 				td3.textContent = '';
// 				td3.appendChild(input);
// 				input.addEventListener('blur', function() {
// 					td3.textContent = input.value;
// 				});
// 			});
// 			deleteBtn.addEventListener('click', function() {
// 				let index = employees.indexOf(newEmployee);
// 				employees.splice(index, 1);
// 				tr.remove();
// 			});
// 			}
// 			addButton2.addEventListener('click', addEmployee);

// Массив объектов и список
// №10 Дан следующий массив с работниками:
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// Выведите на экран каждого работника в своем теге li тега ul.
// let employees = [
// 		{name: 'employee1', age: 30, salary: 400},
// 		{name: 'employee2', age: 31, salary: 500},
// 		{name: 'employee3', age: 32, salary: 600},
// 	];
// 	let ul = document.querySelector('#ul2');
// 	for (let employee of employees) {
// 		let li = document.createElement('li');
// 		li.textContent = `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`;
// 		ul.appendChild(li);
// 	}
// №11 Сделайте так, чтобы по клику на имя, возраст или зарплату работника появлялся инпут для редактирования этого поля.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let ul = document.querySelector('#ul2');
// for (let employee of employees) {
// 	let li = document.createElement('li');
// 	li.textContent = `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`;
// 	li.addEventListener('click', function() {
// 		let input = document.createElement('input');
// 		input.value = employee.name;
// 		li.textContent = '';
// 		li.appendChild(input);
// 		input.focus();
// 		input.addEventListener('blur', function() {
// 			employee.name = input.value;
// 			li.textContent = `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`;
// 		});
// 	});
// 	ul.appendChild(li);
// }
// №12 Добавьте в конец каждого тега li ссылку на удаление этого li из списка.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let ul = document.querySelector('#ul2');
// for (let employee of employees) {
// 	let li = document.createElement('li');
// 	li.textContent = `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`;
// 	li.addEventListener('click', function() {
// 		let input = document.createElement('input');
// 		input.value = employee.name;
// 		li.textContent = '';
// 		li.appendChild(input);
// 		input.focus();
// 		input.addEventListener('blur', function() {
// 			employee.name = input.value;
// 			li.textContent = `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`;
// 		});
// 	});
// 	ul.appendChild(li);
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	li.appendChild(remove);
// 	remove.addEventListener('click', function(event) {
// 		li.remove();
// 		event.preventDefault();
// 	});
// }
// №13 Под списком сделайте форму для добавления нового работника.
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let ul = document.querySelector('#ul2');
// for (let employee of employees) {
// 	let li = document.createElement('li');
// 	li.textContent = `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`;
// 	li.addEventListener('click', function() {
// 		let input = document.createElement('input');
// 		input.value = employee.name;
// 		li.textContent = '';
// 		li.appendChild(input);
// 		input.focus();
// 		input.addEventListener('blur', function() {
// 			employee.name = input.value;
// 			li.textContent = `Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary}`;
// 		});
// 	});
// 	ul.appendChild(li);
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	li.appendChild(remove);
// 	remove.addEventListener('click', function(event) {
// 		li.remove();
// 		event.preventDefault();
// 	});
// }
// function addEmployee() {
//   let nameInput = document.querySelector('#nameInput');
//   let ageInput = document.querySelector('#ageInput');
//   let salaryInput = document.querySelector('#salaryInput');
//   let newEmployee = {
//     name: nameInput.value,
//     age: parseInt(ageInput.value),
//     salary: parseInt(salaryInput.value)
//   };
//   let li = document.createElement('li');
//   li.textContent = `Name: ${newEmployee.name}, Age: ${newEmployee.age}, Salary: ${newEmployee.salary}`;
//   li.addEventListener('click', function() {
//     let input = document.createElement('input');
//     input.value = newEmployee.name;
//     li.textContent = '';
//     li.appendChild(input);
//     input.focus();
//     input.addEventListener('blur', function() {
//       newEmployee.name = input.value;
//       li.textContent = `Name: ${newEmployee.name}, Age: ${newEmployee.age}, Salary: ${newEmployee.salary}`;
//     });
//   });
//   ul.appendChild(li);
//   let remove = document.createElement('a');
//   remove.href = '#';
//   remove.textContent = 'remove';
//   li.appendChild(remove);
//   remove.addEventListener('click', function(event) {
//     li.remove();
//     event.preventDefault();
//   });
//   nameInput.value = '';
//   ageInput.value = '';
//   salaryInput.value = '';
// }
// let form = document.createElement('form');
// let nameLabel = document.createElement('label');
// nameLabel.textContent = 'Name: ';
// let nameInput = document.createElement('input');
// nameInput.id = 'nameInput';
// nameLabel.appendChild(nameInput);
// form.appendChild(nameLabel);
// let ageLabel = document.createElement('label');
// ageLabel.textContent = 'Age: ';
// let ageInput = document.createElement('input');
// ageInput.id = 'ageInput';
// ageLabel.appendChild(ageInput);
// form.appendChild(ageLabel);
// let salaryLabel = document.createElement('label');
// salaryLabel.textContent = 'Salary: ';
// let salaryInput = document.createElement('input');
// salaryInput.id = 'salaryInput';
// salaryLabel.appendChild(salaryInput);
// form.appendChild(salaryLabel);
// let addButton = document.createElement('button');
// addButton.textContent = 'Add Employee';
// addButton.addEventListener('click', function(event) {
//   event.preventDefault();
//   addEmployee();
// });
// form.appendChild(addButton);
// document.body.appendChild(form);