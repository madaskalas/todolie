let arrList = [];

function tasklist() {
    let task = document.getElementById("userinput").value;
    let todolist = document.getElementById("todolist");

    document.getElementById("userinput").value = "";
    document.getElementById("container").style.display = "block";

    // Create checkbox element
    let input = document.createElement("input");

    // Assign attributes
    input.type = "checkbox";
    input.name = "checklist";
    input.value = "item";
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
            
            // Push into todo checked items
            arrList.push(task);
            console.log(arrList);

            // Create checkbox element
            let input = document.createElement("input");

            // Assign attributes
            input.type = "checkbox";
            input.name = "checklistdone";
            input.value = "itemdone";
            input.id = "checkiddone";

            // Assign label
            let label = document.createElement("label");
            label.htmlFor = "checkiddone";
            label.id = "labeliddone";

            // Append child
            label.appendChild(document.createTextNode(task));

            donelist.appendChild(input);
            donelist.appendChild(label);

            let br = document.createElement("br");
            donelist.appendChild(br);

            document.getElementById("labelid").style.textDecoration = "line-through";
        }
        else {
            document.getElementById("labelid").style.textDecoration = "none";
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