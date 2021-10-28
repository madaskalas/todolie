// Create empty array
let arrList = [];

// Trigger on button "Add"
function tasklist() {

    // Fetch value of input text
    let task = document.getElementById("userinput").value;

    // Select DIV
    let todolist = document.querySelector(".todolist");

    // Clears text input
    document.getElementById("userinput").value = "";

    // Shows container
    document.getElementById("container").style.display = "block";

    // Create input element
    let input = document.createElement("input");

    let random = Math.floor(Math.random() * 888);
    let randomClass = "cl" + Math.floor(Math.random() * 777);
    // Assign attributes
    input.type = "checkbox";
    input.name = "checklist";
    input.value = task;
    input.id = random;
    // input.className = "checkclass";
    input.className = "checkclass";

    // Create label element
    let label = document.createElement("label");

    // Assign label
    label.htmlFor = "checkid";
    label.id = "labelid";
    label.className = "labelclass";

    // Append childs
    label.appendChild(document.createTextNode(task));
    todolist.appendChild(input);
    todolist.appendChild(label);

    // Create br element
    let br = document.createElement("br");

    // Append child
    todolist.appendChild(br);

    const cb = document.querySelector(".checkclass");
    cb.onclick = () => {
        const res = cb.checked;
        if (res) {
            console.log(`ID: ${input.id} /  Is checked?: ${res}`);
        }
        else {
            console.log(`ID: ${input.id} /  Is checked?: ${res}`);
        }
    }
}

// Reloads the webpage
function reset() {
    location.reload();
}