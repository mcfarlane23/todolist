// CODE EXPLAINED channel
// select the elements 
const clear = document.querySelector(".clear");
const deleteElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Classes names
const Check = "fa-check-circle";
const Uncheck = "fa-circle-thin";
const Line_through = "lineThrough";

// show todays date
const options = { weekday: "long", year: 'numeric', month: "long", day: "numeric" };

const today = new Date(Date.UTC(2019, 05, 20, 3, 0, 0));

HTMLTableDataCellElement.innerHtml = today.toLocaleDateString("en-US", options);

fuction addToDo(toDo) {
    const item = `
    <li class="item">
    <i class="fa fa-circle-thin co" job="complete" id="0"></i>
    <p class="text"> ${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="0"></i>  
    </li>

    `;

    const position = "beforeend";
    list.insertAdjacentElement(position, item);
}
addToDo("drink coffe");