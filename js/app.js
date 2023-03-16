let add = document.getElementById('add');
let deleteAll = document.getElementById('deleteAll');
let table = document.getElementById("table");

function additem() {
    console.log("Updating...")
    let tit = document.getElementById("title").value;
    let desc = document.getElementById("description").value;
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonarray = [];
        itemsJsonarray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonarray));
    }
    else {
        itemsJsonarraystr = localStorage.getItem('itemsJson');
        itemsJsonarray = JSON.parse(itemsJsonarraystr);
        itemsJsonarray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonarray));

    }
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

    update();

}

function update() {

    if (localStorage.getItem('itemsJson') == null) {

        itemsJsonarray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonarray));
    }
    else {
        itemsJsonarraystr = localStorage.getItem('itemsJson');
        itemsJsonarray = JSON.parse(itemsJsonarraystr);


    }


    //populate table
    let tablebody = document.getElementById('tableBody');
    let str = '';
    itemsJsonarray.forEach((element, index) => {
        str = str + ` <tr>
          <th scope="row">${index + 1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
          </tr>`
    });

    tablebody.innerHTML = str;

}

function deleted(indexitem) {
    itemsJsonarraystr = localStorage.getItem('itemsJson');
    itemsJsonarray = JSON.parse(itemsJsonarraystr);
    itemsJsonarray.splice(indexitem, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonarray));
    update();
}

update();
add.addEventListener("click", additem);
deleteAll.addEventListener("click", () => { localStorage.clear(); update(); });





