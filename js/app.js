'use strict';

const sales = document.getElementById('sales');

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// ********************* Seattle ***********************************

let seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 63,
    avg: 6.3,
    cookiesSales: [],
    total: 0,
    getCookies: function(){
        for (let i = 0; i<hours.length; i++){
            let randAvg = Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg);
            this.cookiesSales.push(randAvg);
            this.total += randAvg;
        }
        
    },

    render: function (){
        const h2Element = document.createElement('h2');
        h2Element.textContent = this.name;
        sales.appendChild(h2Element);

        const ulElement = document.createElement('ul');
        sales.appendChild(ulElement);

        for (let i = 0; i<hours.length; i++){
            const liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
            ulElement.appendChild(liElement);
        }

    }
};

seattle.getCookies();
seattle.render();
console.log(seattle.cookiesSales);

// *************************** Tokyo ******************************


let tokyo = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avg: 1.2,
    cookiesSales: [],
    total: 0,
    getCookies: function(){
        for (let i = 0; i<hours.length; i++){
            let randAvg = Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg);
            this.cookiesSales.push(randAvg);
            this.total += randAvg;
        }
        
    },

    render: function (){
        const h2Element = document.createElement('h2');
        h2Element.textContent = this.name;
        sales.appendChild(h2Element);

        const ulElement = document.createElement('ul');
        sales.appendChild(ulElement);

        for (let i = 0; i<hours.length; i++){
            const liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
            ulElement.appendChild(liElement);
        }

    }
};

tokyo.getCookies();
tokyo.render();
console.log(tokyo.cookiesSales);

// *********************** Dubai *******************

let dubai = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avg: 3.7,
    cookiesSales: [],
    total: 0,
    getCookies: function(){
        for (let i = 0; i<hours.length; i++){
            let randAvg = Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg);
            this.cookiesSales.push(randAvg);
            this.total += randAvg;
        }
        
    },

    render: function (){
        const h2Element = document.createElement('h2');
        h2Element.textContent = this.name;
        sales.appendChild(h2Element);

        const ulElement = document.createElement('ul');
        sales.appendChild(ulElement);

        for (let i = 0; i<hours.length; i++){
            const liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
            ulElement.appendChild(liElement);
        }

    }
};

dubai.getCookies();
dubai.render();
console.log(dubai.cookiesSales);

// ********************************** Paris *****************************

let paris = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avg: 2.3,
    cookiesSales: [],
    total: 0,
    getCookies: function(){
        for (let i = 0; i<hours.length; i++){
            let randAvg = Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg);
            this.cookiesSales.push(randAvg);
            this.total += randAvg;
        }
        
    },

    render: function (){
        const h2Element = document.createElement('h2');
        h2Element.textContent = this.name;
        sales.appendChild(h2Element);

        const ulElement = document.createElement('ul');
        sales.appendChild(ulElement);

        for (let i = 0; i<hours.length; i++){
            const liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
            ulElement.appendChild(liElement);
        }

    }
};

paris.getCookies();
paris.render();
console.log(paris.cookiesSales);

// **************************** Lima *************************

let lima = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avg: 4.6,
    cookiesSales: [],
    total: 0,
    getCookies: function(){
        for (let i = 0; i<hours.length; i++){
            let randAvg = Math.ceil(randomNumber(this.minCust, this.maxCust) * this.avg);
            this.cookiesSales.push(randAvg);
            this.total += randAvg;
        }
        
    },

    render: function (){
        const h2Element = document.createElement('h2');
        h2Element.textContent = this.name;
        sales.appendChild(h2Element);

        const ulElement = document.createElement('ul');
        sales.appendChild(ulElement);

        for (let i = 0; i<hours.length; i++){
            const liElement = document.createElement('li');
            liElement.textContent = `${hours[i]}: ${this.cookiesSales[i]} cookies`;
            ulElement.appendChild(liElement);
        }

    }
};

lima.getCookies();
lima.render();
console.log(lima.cookiesSales);



