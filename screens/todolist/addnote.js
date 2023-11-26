const styledTitleTodoDefault = `
color: #000;
text-decoration: none;
`
const styledTitleTodo = `
color: #999;
text-decoration: line-through;
`
const menuTodo = document.getElementById("note");

function add_note() {
    const input_note = document.getElementById("input_add_note")
    menu.push(input_note.value)
    localStorage.setItem("menu", JSON.stringify(menu))
    const menuTodoItem = document.createElement("li");
    menuTodoItem.classList.add("menu_toDo_item");

    const wrapTitleTodo = document.createElement("div");
    wrapTitleTodo.classList.add("wrap_titleTodo");

    const checkBoxTodoList = document.createElement("input");
    checkBoxTodoList.type = "checkbox";

    

    const titleTodo = document.createElement("h1");
    titleTodo.innerText = input_note.value

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
    modal.style.display = "none"
}