class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class List {
  constructor() {
    this.head = null
  }
  addNext(node) {
    if (!this.head) {
      this.head = node
      return
    }
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const list = new List()
list.addNext(node1)
list.addNext(node2)
list.addNext(node3)
list.addNext(node4)
console.log(JSON.stringify(list, null, 2))
