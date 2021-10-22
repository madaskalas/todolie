console.log("This works!");

function tasklist() {
    let task = document.getElementById("userinput").value;
    console.log(`User typed: ${task}`);
    /*
    let ul = document.createElement("ul");
    document.getElementById("todolist").appendChild(ul);
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = task;
    */
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

    // Append child
    label.appendChild(document.createTextNode("Test Node"));

    todolist.appendChild(input);
    todolist.appendChild(label);

}
function reset() {
    location.reload();
}