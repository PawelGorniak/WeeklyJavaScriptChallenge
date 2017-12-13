/*jslint browser:true */
(function() {  
    'use strict';    
    const userNumberPosition = document.getElementById('userNumber'),
    primeNumbersListPosition = document.getElementById('primeNumbers'),
    alertPosition = document.getElementById('alert');
    function parseToInteger(string){
        const int = Number(string, 10);        
        return int;
    }
    function isNotNumber (number){
        const isNAN = Number.isNaN(number);
        return isNAN;
    }
    function isInteger (number, stringValue){
        const isInt = Math.floor(number);        
        return String(isInt) === stringValue || "+" + String(isInt) === stringValue;
    }
    function isRange(number, min, max){
        const isInRange = (number > min && number <= max);
        return isInRange;        
    }
    function findPrime(number){
        let arrPrimes = [];
        let divider, checkNumber;
        for (checkNumber = number - 1 ; checkNumber >= 1; checkNumber--){         
            for (divider = checkNumber - 1; divider >= 1; divider--){        
                const resultDivision = checkNumber % divider;
                if (Math.floor(resultDivision) === 0 && divider > 1) {              
                    break;
                }
                else if (divider == 1) {
                    arrPrimes.unshift(checkNumber);                     
                }
            }
        }
        return arrPrimes;
    }
    function insertArrayToList(array, listPosition){
        array.map( function(item){
            const newItem = document.createElement('li');
            const newTextItem = document.createTextNode(item);
            newItem.appendChild(newTextItem);                    
            listPosition.insertBefore(newItem, listPosition.firstChild);
        });
    }
    userNumberPosition.addEventListener('keyup', function(e){
        const userNumberVal = userNumberPosition.value, userNumberInt = parseToInteger(userNumberVal);
        primeNumbersListPosition.innerHTML = "";          
        if(isNotNumber(userNumberVal) || !isInteger(userNumberInt, userNumberVal) || !isRange(userNumberInt,0,10000)){
            alertPosition.textContent = "Należy podać liczbę naturalną z przedziału [0,10000]";
        }        
        else {
            alertPosition.innerHTML = "";
            primeNumbersListPosition.innerHTML = "";
            const primeNumbers = findPrime(userNumberInt);
            insertArrayToList(primeNumbers, primeNumbersListPosition);            
        }
        
    });   
})();
