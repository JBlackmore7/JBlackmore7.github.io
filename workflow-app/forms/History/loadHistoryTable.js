const headers = {
  companyName: "Company Name",
  workorderType: "Type",
  date: "Date",
  details: "Details",
  jobNumber: "Job Number",
  action: "Select",
};
var localWorkorderRef = [];

async function loadIntoTable(data, table) {
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  //const response = await fetch(url);
  //const completeOrder = await response.json();
  localWorkorderRef = data;

  // Clear the table
  tableHead.innerHTML = "<tr></tr>";
  tableBody.innerHTML = "";

  // Populate the headers
  Object.values(headers).forEach((element) => {
    const headerElement = document.createElement("th");

    headerElement.textContent = element;
    tableHead.querySelector("tr").appendChild(headerElement);
  });

  // Populate the rows
  for (const row of data) {
    const rowElement = document.createElement("tr");
    let history = document.createElement("button");
    history.innerHTML = "View";
    history.setAttribute("workorder_id", row.id);
    history.setAttribute("class", "historyButton");
    history.addEventListener("click", openModal);
    Object.keys(headers).forEach((element) => {
      const cellElement = document.createElement("td");
      cellElement.textContent = row[element];
      rowElement.appendChild(cellElement);
      cellElement.appendChild(history);
    });

    tableBody.appendChild(rowElement);
  }

  const overlay = document.getElementById("overlay");

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  function openModal(event) {
    modal.classList.add("active");
    overlay.classList.add("active");

    const workorderID = event.currentTarget.getAttribute("workorder_id");
    let h1 = document.getElementById("modal-title");
    h1.innerHTML = "Work Order #" + workorderID;
    h1.style.fontSize = "28px";
    h1.style.fontWeight = "550";
    const workorderRef = localWorkorderRef.find((event) => event.id == workorderID);

    const loadPartsTable = (key, value) => (document.querySelector(`#${key} .modalValue`).innerHTML = value);

    loadPartsTable("companyName", workorderRef.companyName);
    loadPartsTable("companyAddress", workorderRef.companyAddress);
    loadPartsTable("workSite", workorderRef.workSite);
    loadPartsTable("contactName", workorderRef.contactName);
    loadPartsTable("contactNumber", workorderRef.contactNumber);
    loadPartsTable("contactEmail", workorderRef.contactEmail);
    loadPartsTable("orderDetails", workorderRef.details);
    loadPartsTable("date", workorderRef.date);
    loadPartsTable("createdBy", workorderRef.employeeName);
    loadPartsTable("serviceDetails", workorderRef.service.serviceDetails);
    loadPartsTable("jobNumber", workorderRef.jobNumber);
    loadPartsTable("notes", workorderRef.service.condemnationDetails);
    loadPartsTable("truckStock", workorderRef.service.truckStock);

    const parts = workorderRef.service.parts;
    var table = document.getElementById("materialsTable");
    var tr = "";
    parts.forEach((x) => {
      tr += "<tr>";
      tr += "<td>" + x.quantity + "</td>" + "<td>" + x.partNumber + "</td>" + "<td>" + x.partDescription + "</td>";
      tr += "</tr>";
    });
    table.innerHTML += tr;
  }
}

loadIntoTable(workData.data.completeOrder, document.querySelector("table"));
