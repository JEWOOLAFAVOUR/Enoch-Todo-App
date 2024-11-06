// console.log("Enoch is lost")

// let friends = ['enoch', 'favour', 'damola']

// console.log(friends)

// friends.map((data, index) => {
//     // return console.log(data, index)

//     if (data === 'favour') {
//         data = 'king'
//     }
//     console.log(data)
// })


// const calculateData = (a, b) => {
//     return console.log(a + b);
// }

// calculateData(20, 18)

let todos = [
    {
        id: 1,
        todo: "First todo",
        isChecked: false,
    }, {
        id: 2,
        todo: "Second todo",
        isChecked: true,
    },
]

todos.map((data, index) => {
    if (data.id === 1) {
        data.isChecked = true
    }
})

console.log(todos)

