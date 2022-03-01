'use strict'

class Tree {
    constructor ( treeMatureAge,treeLimitAge, treeStopAge) {
        this._age = 0;
        this._height = 0;
        this._fruits = [];
        this._harvested = "";
        this._healthStatus = true;
        this._matureAge = treeMatureAge;
        this._limitAge = treeLimitAge;
        this._stopAge = treeStopAge;
    }
    // Getter
    get age () {
        return this._age;
    }

    get height () {
        return this._age;
    }

    get fruits () {
        return this._fruits;
    }

    get harvested () {
        return this._harvested;
    }

    get healthy () {
        return this._healthStatus;
    }

    get mature() {
        return this._matureAge;
    }

    get limit() {
        return this._limitAge;
    }

    get stopAge() {
        return this._treeStopAge;
    }

    // grow

    grow () {
        this.age++;

        let addingHeight = 0;
        if (this.age > this.limitAge) {
            this.height += addingHeight;
            return addingHeight = Math.round(Math.random() * 100) / 100 ;
        };

        if (this.age < this.stopAge) {
            return healthStatus = false;
        };

        return this;
    };

    produceFruits() {
        if (this.age >= this.matureAge) {
            let fruitsTotal = Math.round(Math.random() * 100);
            for (let i = 1; i <= fruitsTotal; i++) {
                this.fruits.push(i);
            };
        };
    };

    harvest() {

    };
};

class Fruits{
    constructor (num) {  
        this.quality = setQuality(num);
    }
    
    setQuality(num) {

        if (this.quality <= num) {
            return Math.random() + "Good";
        }  
        if (this.quality >= num) {
            return Math.random() + "Bad";
        }
        
    }
}

