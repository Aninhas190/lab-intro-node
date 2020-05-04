class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  load(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }

    return this.items[pos];
  }

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    return Math.max.apply(Math, this.items);
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    return Math.min.apply(Math, this.items);
  }

  sum() {
    if (!this.items.length) {
      return 0;
    }
    return this.items.reduce((acc, value) => acc + value, 0);
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }  
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
