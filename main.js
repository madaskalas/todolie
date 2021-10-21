console.log("This works!");

function tasklist() {
    let task = document.getElementById("userinput").value;
    console.log(`User typed: ${task}`);
    let ul = document.createElement("ul");
    document.getElementById("todolist").appendChild(ul);
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = task;
}