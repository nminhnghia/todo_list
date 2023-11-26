// const students = [
//     {
//         id: "1",
//         task: "Ăn sáng"
//     },
//     {
//         id: "2",
//         task: "Ăn trưa"
//     },
//     {
//         id: "3",
//         task: "Ăn tối"
//     }
// ]

// const studentNews =  students.map(function name(item, index, currentArr) {
//     return {
//         fullName: item.task,
//     }
// })

// students.forEach(function name(item, index, currentArr) {
//     console.log()
// }) 
// console.log(studentNews)

const filter = document.getElementById("filter")
const products = document.getElementById("products")

fetch("items.json")
.then((res) => res.json)
.then((responseJson) => {
    const { data } = responseJson;
    data.filter((value) => Number(value.price) <= 150000)
    for (let i = 0; i < data.length; i++) {
        
    }
})