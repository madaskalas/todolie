// Create empty array
let arrList = [];
let arrListDone = [];

// Trigger on button "Add"
function tasklist() {

    // Fetch value of input text
    let task = document.getElementById("userinput").value;

    // Select DIV
    let todolist = document.querySelector(".todolist");

    // Clears text input
    document.getElementById("userinput").value = "";

    // Shows container
    document.getElementById("containertodo").style.display = "block";

    // Create input element
    let input = document.createElement("input");

    // Generates a random number
    let random = Math.floor(Math.random() * 1000);
    let randomlabel = Math.floor(Math.random() * 1001 + 1000);

    // Assign attributes
    input.type = "checkbox";
    input.name = "checklist";
    input.value = task;
    input.id = random;
    input.className = "checkclass";

    // Create label element
    let label = document.createElement("label");

    // Assign label
    label.htmlFor = random;
    label.id = randomlabel;
    label.className = "labelclass";

    // Append childs
    label.appendChild(document.createTextNode(task));
    todolist.appendChild(input);
    todolist.appendChild(label);

    // Create br element
    let br = document.createElement("br");

    // Append child
    todolist.appendChild(br);

    // Push to array
    arrList.push(task);
    console.log(arrList);

    let t1 = document.querySelectorAll(".checkclass");
    let t2 = document.querySelectorAll(".labelclass");
    console.log(t1);
    console.log(t2);

    for (let i = 0; i <= arrList.length - 1; i++) {
        t1[i].onclick = () => {
            if (t1[i].checked) {
                console.log(`Checked ${i}: ${t1[i].value}`);
                t2[i].style.textDecoration = "line-through";
                t2[i].style.backgroundColor = "lightgreen";
                // document.getElementById(random).style.display = "none";
                // document.getElementById(randomlabel).style.display = "none";
            }
            else {
                console.log(`Not Checked ${i}: ${t1[i].value}`);
                t2[i].style.textDecoration = "none";
                t2[i].style.backgroundColor = "lightgray";
            }
        }
    }
}

// Reloads the webpage
function reset() {
    location.reload();
}


