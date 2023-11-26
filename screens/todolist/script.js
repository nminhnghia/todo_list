import { styledTitleTodo, styledTitleTodoDefault } from "../utils/common.js";
let menu = JSON.parse(localStorage.getItem("menu")) || ["Ăn sáng", "Ăn trưa", "Ăn tối"];

const menuTodo = document.getElementById("note");


    for (let i = 0; i < menu.length; i++) {
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
;




