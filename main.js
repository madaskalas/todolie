console.log("This works!");

function tasklist() {
    let task = document.getElementById("userinput").value;
    let todolist = document.getElementById("todolist");

    console.log(`User typed: ${task}`);
    document.getElementById("userinput").value = "";
    document.getElementById("container").style.display = "block";

    // Create checkbox element
    let input = document.createElement("input");

    // Assign attributes
    input.type = "checkbox";
    input.name = "checklist";
    input.value = "value";
    input.id = "checkid";

    // Assign label
    let label = document.createElement("label");
    label.htmlFor = "checkid";
    label.id = "labelid";

    // Append child
    label.appendChild(document.createTextNode(task));

    todolist.appendChild(input);
    todolist.appendChild(label);

    let br = document.createElement("br");
    todolist.appendChild(br);

    const cb = document.querySelector("#checkid");
    cb.onclick = () => {
        const res = cb.checked;
        if (res) {
            document.getElementById("labelid").style.textDecoration = "line-through";
        }
        else {
            document.getElementById("labelid").style.textDecoration = "none";
        }
    };
}

function reset() {
    location.reload();
}