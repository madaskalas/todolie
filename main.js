let arrList = [];

function tasklist() {
    let task = document.getElementById("userinput").value;
    let todolist = document.querySelector(".todolist");

    document.getElementById("userinput").value = "";
    document.getElementById("container").style.display = "block";

    // Create checkbox element
    let input = document.createElement("input");

    // Assign attributes
    input.type = "checkbox";
    input.name = "checklist";
    input.value = "item";
    input.id = "checkid";
    input.className = "checkclass";

    // Assign label
    let label = document.createElement("label");
    label.htmlFor = "checkid";
    label.id = "labelid";
    label.className = "labelclass";

    // Append child
    label.appendChild(document.createTextNode(task));

    todolist.appendChild(input);
    todolist.appendChild(label);

    let br = document.createElement("br");
    todolist.appendChild(br);

    const cb = document.querySelector(".checkclass");
    cb.onclick = () => {
        const res = cb.checked;
        if (res) {
            document.querySelector(".labelclass").style.textDecoration = "line-through";
            // Push into todo querySelector items
            arrList.push(task);
            console.log(arrList);
        }
        else {
            document.querySelector(".labelclass").style.textDecoration = "none";
        }
    };
}
function storeList() {
    arrList.push(task);
    console.log(arrList);
}
function reset() {
    location.reload();
}