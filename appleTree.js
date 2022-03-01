class AppleTree {
  constructor(tree_name, tree_age, tree_height, treeMatureAge, treeHealthStatus, treeLimitAge, treeStopAge) {
    this._name = tree_name;
    this._age = tree_age;
    this._height = tree_height;
    this._fruits = [];
    this._harvested = "";
    this._healthStatus = treeHealthStatus || true;
    this._matureAge = treeMatureAge;
    this._limitAge = treeLimitAge;
    this._stopAge = treeStopAge;
  }

  // Getter

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get harvest() {
    return this._harvested;
  }

  get healthStatus() {
    return this._healthStatus;
  }

  get matureAge() {
    return this._matureAge;
  }

  get limitAge() {
    return this._limitAge;
  }

  get stopAge() {
    return this._stopAge;
  }

  // Setter

  set age(value) {
    return (this._age = value);
  }

  // grow
  grow() {
    let umur = this._age;
    let height = this._height;
    let batasUmur = this._limitAge;

    if (umur <= batasUmur || umur == batasUmur) {
      console.log(`${umur} = Tidak Sehat`)
    } else if (umur >= 16) {
      return height + Math.random() + ' cm';
    }
    this._age++;
  }

  // produce some fruits
  produceFruits() {
    /*
     * jika pohon ini sudah mencapai umur yang matang (mature) atau lebih besar dari umur matangnya, maka pohon akan berbuah
     * buat kelas buah di luar kelas pohon
     * hasil buah akan disimpan di dalam seperti fruit
     */
  }

  // get some fruit
  harvest() {
    /*
     * menentukan jumlah seluruh buah
     */
  }
}

let call = new AppleTree("Orange", 5, 190, 15, "baik", 16, 16);

console.log(call.grow());
