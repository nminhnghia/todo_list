let menu = JSON.parse(localStorage.getItem("menu")) || ["Ăn sáng", "Ăn trưa", "Ăn tối"];

const btn_add = document.querySelector(".add_button")
const modal = document.querySelector(".container_modal")
const btn_cancel_action = document.querySelector(".btn_cancel_action")
btn_add.addEventListener("click", function showModal() {
    if (modal.style.display == "none") {
        modal.style.display = "flex"
    } else {
        modal.style.display = "none"
    }
});

btn_cancel_action.addEventListener("click", function hiddenModal() {
    modal.style.display = "none"
})
const note = document.getElementById("note")
function find() {
    const searchbox = document.getElementById("searchbox")
    const filter = document.getElementById("filter")
    note.innerHTML = ""
    for (let i = 0; i < menu.length; i++) {
        if (menu[i] == searchbox.value) {
		const menuTodoItem = document.createElement("li");
        menuTodoItem.classList.add("menu_toDo_item");

        const wrapTitleTodo = document.createElement("div");
        wrapTitleTodo.classList.add("wrap_titleTodo");

        const checkBoxTodoList = document.createElement("input");
        checkBoxTodoList.type = "checkbox";

        

        const titleTodo = document.createElement("h1");
        titleTodo.innerText = menu[i];

        checkBoxTodoList.addEventListener("change", function checked() {
            if(checkBoxTodoList.checked == true) {
                titleTodo.style = styledTitleTodo
            } else {
                titleTodo.style = styledTitleTodoDefault
            }
        })

        const line = document.createElement("div");
        line.classList.add("line");

        wrapTitleTodo.appendChild(checkBoxTodoList);
        wrapTitleTodo.appendChild(titleTodo);

        menuTodoItem.appendChild(wrapTitleTodo);
        menuTodoItem.appendChild(line);
        menuTodo.appendChild(menuTodoItem);
    } else if (searchbox.value == "") {
        const menuTodoItem = document.createElement("li");
        menuTodoItem.classList.add("menu_toDo_item");

        const wrapTitleTodo = document.createElement("div");
        wrapTitleTodo.classList.add("wrap_titleTodo");

        const checkBoxTodoList = document.createElement("input");
        checkBoxTodoList.type = "checkbox";

        

        const titleTodo = document.createElement("h1");
        titleTodo.innerText = menu[i];

        checkBoxTodoList.addEventListener("change", function checked() {
            if(checkBoxTodoList.checked == true) {
                titleTodo.style = styledTitleTodo
            } else {
                titleTodo.style = styledTitleTodoDefault
            }
        })

        const line = document.createElement("div");
        line.classList.add("line");

        wrapTitleTodo.appendChild(checkBoxTodoList);
        wrapTitleTodo.appendChild(titleTodo);

        menuTodoItem.appendChild(wrapTitleTodo);
        menuTodoItem.appendChild(line);
        menuTodo.appendChild(menuTodoItem);
    }
    
};
}