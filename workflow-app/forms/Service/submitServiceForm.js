let createOrder;

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  const urlSearchParams = new URLSearchParams(window.location.search);
  const workorder_id = urlSearchParams.get("workorder_id");

  /*fetch("http://localhost:3000/createOrder/" + workorder_id)
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      createOrder = data;
    })
    .catch((error) => {
      console.error("Error:", error);
    });*/

  let workOrder = workData.data.createOrder.find(({ id }) => id == workorder_id);

  let serviceTitle = document.getElementById("serviceTitle");
  serviceTitle.innerHTML = "Work Order# " + workorder_id + " - " + workOrder.companyName;

  const form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();

    const serviceData = new FormData(e.target);

    let object = {};
    object.serviceDetails = serviceData.get("serviceDetails");
    object.truckStock = serviceData.get("truckStock");
    object.condemnationDetails = serviceData.get("condemnationDetails");

    let q = serviceData.getAll("quantity");
    let pn = serviceData.getAll("partNumber");
    let pd = serviceData.getAll("partDescription");

    let arr = [];
    for (var i = 0; i < q.length; i++) {
      arr[i] = { quantity: q[i], partNumber: pn[i], partDescription: pd[i] };
    }
    object.parts = arr;
    workOrder.service = object;
    workData.completeOrder(workOrder);
    const submitMessage = document.querySelector("#log");
    submitMessage.classList.add("show");
    window.setTimeout(function () {
      history.back();
    }, 2000);
    //workData.deleteOrder(workOrder);

    /*let json = JSON.stringify(createOrder);
    console.log(json);

    fetch("http://localhost:3000/completeOrder/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json,
    });

    fetch("http://localhost:3000/createOrder/" + workorder_id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });*/
  }
});

function addRows() {
  var table = document.getElementById("materials");
  var rowCount = table.rows.length;
  var cellCount = table.rows[0].cells.length;
  var row = table.insertRow(rowCount);
  for (var i = 0; i < cellCount; i++) {
    var cell = "cell" + i;
    cell = row.insertCell(i);

    var copyCell = document.getElementById("col" + i).innerHTML;
    cell.innerHTML = copyCell;
  }
}
function deleteRows() {
  var table = document.getElementById("materials");
  var rowCount = table.rows.length;
  if (rowCount > "2") {
    var row = table.deleteRow(rowCount - 1);
    rowCount--;
  } else {
    alert("There should be at least one row");
  }
}
