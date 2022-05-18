const tasks = {
    "wash-car": {
        name:"Wash Car",
        price:10
        },
    "mow-lawn": {
        name:"Mow Lawn",
        price:20
        },
    "pull-weeds": {
        name:"Pull Weeds",
        price:30
        }
}

let tasksDone = []
let priceList = []

const taskListEl = document.getElementById("task-list")
const priceListEl = document.getElementById("price-list")
const customBtns = document.getElementsByClassName("task-btn")
const acceptText = document.getElementById("we-accept-text")
const totalAmount = document.getElementById("total-amount")
const invoiceBtn = document.getElementById("invoice-btn")

invoiceBtn.addEventListener("click", () => location.reload())

for (let i=0; i<customBtns.length; i++) {
    customBtns[i].addEventListener("click", function(){
        let taskId = customBtns[i].id
        if (!tasksDone.includes(tasks[taskId].name)) {
            tasksDone.push(tasks[taskId].name)
            priceList.push(tasks[taskId].price)
            acceptText.style.visibility = "visible"
            renderTaskList()
        }
    })
}

function renderTaskList() {
    taskListEl.textContent = ""
    priceListEl.textContent = ""
    for (let i = 0; i < tasksDone.length;i++) {
        if (tasksDone[i]) {
            let newTask = document.createElement("li")
            newTask.textContent = tasksDone[i]

            let removeBtn = document.createElement("button")
            removeBtn.textContent = "Remove"
            removeBtn.onclick = function() {
                tasksDone.splice(i, 1)
                priceList.splice(i, 1)
                renderTaskList()}
                
            taskListEl.append(removeBtn)
            taskListEl.append(newTask)

            let newPrice = document.createElement("li")
            newPrice.innerHTML = `<p><span class="dollar-sign">$ </span>${priceList[i]}</p>`
            priceListEl.append(newPrice)



        }
    }

    let totalPrice = priceList.reduce(function(previousVal, currentVal) {return previousVal + currentVal})
    totalAmount.textContent = "$ " + totalPrice
    totalAmount.style.color = "#4A4E74"
}
