class AppleTree {
    constructor(tree_name, tree_age, tree_height, treeMatureAge, treeHealthStatus, treeLimitAge, treeStopAge) {
        this._name = tree_name;
        this._age = tree_age;
        this._height = tree_height;
        this._fruits = [];
        this._harvested = '';
        this._healthStatus = treeHealthStatus || true;
        this._matureAge = treeMatureAge;
        this._limitAge = treeLimitAge;
        this._stopAge = treeStopAge;
    }
}

// Getter

get _name() {
    return this._name;
}

get _age() {
    return this._age;
}