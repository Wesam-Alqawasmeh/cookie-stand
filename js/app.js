'use strict';

let sales = document.getElementById('sales');

let storeForm = document.getElementById('storeForm');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function salesData(name, minCust, maxCust, avg) {


    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avg = avg;
    this.cookiesSales = [];
    this.total = 0;

}

salesData.prototype.getCookies = function () {
    for (let i = 0; i < hours.length; i++) {
        let randAvg = Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg);
        this.cookiesSales.push(randAvg);
        this.total += randAvg;
    }
}


salesData.prototype.render = function () {
    let trElement = document.createElement('tr');
    sales.appendChild(trElement);

    let thElement = document.createElement('th');
    thElement.textContent = this.name;
    trElement.appendChild(thElement);

    for (let i = 0; i < hours.length; i++) {
        let tdElement = document.createElement('td');
        tdElement.textContent = this.cookiesSales[i];
        trElement.appendChild(tdElement);
    }

    let tdElement = document.createElement('td');
    tdElement.textContent = this.total;
    trElement.appendChild(tdElement);

}


let seattle = new salesData('Seattle', 23, 65, 3.6);
let tokyo = new salesData('Tokyo', 3, 24, 1.2);
let dubai = new salesData('Dubai', 11, 38, 3.7);
let paris = new salesData('Paris', 20, 38, 2.3);
let lima = new salesData('Lima', 2, 16, 4.6);


let array = [seattle, tokyo, dubai, paris, lima];




function tableHeader() {
    let trElement = document.createElement('tr');
    sales.appendChild(trElement);

    hours.unshift('');
    hours.push('D.total');
    for (let i = 0; i < hours.length; i++) {
        let thElement = document.createElement('th');
        thElement.textContent = hours[i];
        trElement.appendChild(thElement);
    }
    hours.shift();
    hours.pop();
}

function tableFooter() {
    let trElement = document.createElement('tr');
    sales.appendChild(trElement);

    let thElement1 = document.createElement('th');
    thElement1.textContent = '';
    trElement.appendChild(thElement1);

    for (let i = 0; i < hours.length; i++) {

        let hourlyTotal = 0;
        for (let j = 0; j < array.length; j++) {
            hourlyTotal += array[j].cookiesSales[i];
        }


        let thElement = document.createElement('th');
        thElement.textContent = hourlyTotal;
        trElement.appendChild(thElement);
    }

    let finalTotal = 0;
    for (let j = 0; j < array.length; j++) {
        finalTotal += array[j].total
    }

    let thElement = document.createElement('th');
    thElement.textContent = finalTotal;
    trElement.appendChild(thElement);
}

// ****************** new store form ***************

storeForm.addEventListener('submit', submitHandle);

function submitHandle(event) {

    event.preventDefault();

    let strName = event.target.name.value;
    let minCustomer = event.target.minCustomres.value;
    let maxCustomer = event.target.maxCustomers.value;
    let avgCookie = event.target.avgCookies.value;

    let newStore = new salesData(strName, minCustomer, maxCustomer, avgCookie);

    newStore.getCookies();
    newStore.render();
    storeForm.reset();

}

// ****************** calling functions ******************

tableHeader();

for (let i = 0; i < array.length; i++) {
    array[i].getCookies();
    array[i].render();
}


tableFooter();



// // ********************* Seattle ***********************************

// let seattle = {
//     name: 'Seattle',
//     minCust: 23,
//     maxCust: 63,
//     avg: 6.3,
//     cookiesSales: [],
//     total: 0,
//     getCookies: function(){
//         for (let i = 0; i<hours.length; i++){
//             let randAvg = Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg);
//             this.cookiesSales.push(randAvg);
//             this.total += randAvg;
//         }

//     },

//     render: function (){
//         const h2Element = document.createElement('h2');
//         h2Element.textContent = this.name;
//         sales.appendChild(h2Element);

//         const ulElement = document.createElement('ul');
//         sales.appendChild(ulElement);

//         for (let i = 0; i<hours.length; i++){
//             const liElement = document.createElement('li');
//             liElement.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
//             ulElement.appendChild(liElement);
//         }

//     }
// };

// seattle.getCookies();
// seattle.render();
// console.log(seattle.cookiesSales);

// // *************************** Tokyo ******************************


// let tokyo = {
//     name: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avg: 1.2,
//     cookiesSales: [],
//     total: 0,
//     getCookies: function(){
//         for (let i = 0; i<hours.length; i++){
//             let randAvg = Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg);
//             this.cookiesSales.push(randAvg);
//             this.total += randAvg;
//         }

//     },

//     render: function (){
//         const h2Element = document.createElement('h2');
//         h2Element.textContent = this.name;
//         sales.appendChild(h2Element);

//         const ulElement = document.createElement('ul');
//         sales.appendChild(ulElement);

//         for (let i = 0; i<hours.length; i++){
//             const liElement = document.createElement('li');
//             liElement.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
//             ulElement.appendChild(liElement);
//         }

//     }
// };

// tokyo.getCookies();
// tokyo.render();
// console.log(tokyo.cookiesSales);

// // *********************** Dubai *******************

// let dubai = {
//     name: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avg: 3.7,
//     cookiesSales: [],
//     total: 0,
//     getCookies: function(){
//         for (let i = 0; i<hours.length; i++){
//             let randAvg = Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg);
//             this.cookiesSales.push(randAvg);
//             this.total += randAvg;
//         }

//     },

//     render: function (){
//         const h2Element = document.createElement('h2');
//         h2Element.textContent = this.name;
//         sales.appendChild(h2Element);

//         const ulElement = document.createElement('ul');
//         sales.appendChild(ulElement);

//         for (let i = 0; i<hours.length; i++){
//             const liElement = document.createElement('li');
//             liElement.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
//             ulElement.appendChild(liElement);
//         }

//     }
// };

// dubai.getCookies();
// dubai.render();
// console.log(dubai.cookiesSales);

// // ********************************** Paris *****************************

// let paris = {
//     name: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avg: 2.3,
//     cookiesSales: [],
//     total: 0,
//     getCookies: function(){
//         for (let i = 0; i<hours.length; i++){
//             let randAvg = Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg);
//             this.cookiesSales.push(randAvg);
//             this.total += randAvg;
//         }

//     },

//     render: function (){
//         const h2Element = document.createElement('h2');
//         h2Element.textContent = this.name;
//         sales.appendChild(h2Element);

//         const ulElement = document.createElement('ul');
//         sales.appendChild(ulElement);

//         for (let i = 0; i<hours.length; i++){
//             const liElement = document.createElement('li');
//             liElement.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
//             ulElement.appendChild(liElement);
//         }

//     }
// };

// paris.getCookies();
// paris.render();
// console.log(paris.cookiesSales);

// // **************************** Lima *************************

// let lima = {
//     name: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avg: 4.6,
//     cookiesSales: [],
//     total: 0,
//     getCookies: function(){
//         for (let i = 0; i<hours.length; i++){
//             let randAvg = Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg);
//             this.cookiesSales.push(randAvg);
//             this.total += randAvg;
//         }

//     },

//     render: function (){
//         const h2Element = document.createElement('h2');
//         h2Element.textContent = this.name;
//         sales.appendChild(h2Element);

//         const ulElement = document.createElement('ul');
//         sales.appendChild(ulElement);

//         for (let i = 0; i<hours.length; i++){
//             const liElement = document.createElement('li');
//             liElement.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
//             ulElement.appendChild(liElement);
//         }

//     }
// };

// lima.getCookies();
// lima.render();
// console.log(lima.cookiesSales);



