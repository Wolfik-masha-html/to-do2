const list = document.querySelector(".list");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
console.log(input)

let tasks=[]



const todoHandler = () => {
    if(input.value.trim()!==""){
        const dataText = input.value
        const randomNumber = Math.round(Math.random() * 1000 )
        const task = {
            id:randomNumber,
            text:dataText,
            completed:false
        }
        tasks.push(task)
        input.value =""
    }
   console.log(tasks);
}


btn.addEventListener("click",(event)=>{
    event.preventDefault()
    todoHandler()
    renderTodo(tasks)
})


function renderTodo(items) {
    const marcup = items.
    map ((item)=>{
        return `<li>
        <input type="checkbox" ${item.completed}>
      <p>id: ${item.id}</p>
      <p> ${item.text}</p>
      <button>Delete</button>
      <button oneclick="removetodo${item.id}">Delete</button>
      </li>`;
    }
)
.join("")
console.log(marcup);
list.innerHTML = marcup
}

function removetodo(id) {
const filteredtasks = tasks.filter((item)=>item.id!==id)
tasks = filteredtasks
}