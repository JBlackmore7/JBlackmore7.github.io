const headers = {
  companyName: "Company Name",
  workorderType: "Type",
  date: "Date",
  details: "Details",
  jobNumber: "Job Number",
  action: "Select",
};
var localWorkorderRef = [];

async function loadIntoTable(url, table) {
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  const response = await fetch(url);
  const completeOrder = await response.json();
  localWorkorderRef = completeOrder;

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
  for (const row of completeOrder) {
    const rowElement = document.createElement("tr");
    let history = document.createElement("button");
    history.innerHTML = "View";
    history.setAttribute("workorder_id", row.id);
    history.setAttribute("data-modal-target", "#modal");
    let h1 = document.getElementById("modal-title");
    h1.innerHTML = "Work Order #" + row.id;
    Object.keys(headers).forEach((element) => {
      const cellElement = document.createElement("td");
      cellElement.textContent = row[element];
      rowElement.appendChild(cellElement);
      cellElement.appendChild(history);
    });

    tableBody.appendChild(rowElement);
  }

  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll("[data-close-button]");
  const overlay = document.getElementById("overlay");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  function openModal(modal) {
    if (modal == null) return;
    const workorderID = e.currentTarget.getAttribute("workorder_id");
    const workorderRef = localWorkorderRef.find((e) => e.id == workorderID);
    const myHelpfulFunction = (key, value) => (document.getElementById(key).innerHTML += " " + value);
    myHelpfulFunction("companyName", workorderRef.companyName);
    myHelpfulFunction("companyAddress", workorderRef.companyAddress);
    myHelpfulFunction("workSite", workorderRef.worksite);
    myHelpfulFunction("contactName", workorderRef.contactName);
    myHelpfulFunction("contactNumber", workorderRef.contactNumber);
    myHelpfulFunction("contactEmail", workorderRef.contactEmail);
    myHelpfulFunction("orderDetails", workorderRef.details);
    myHelpfulFunction("date", workorderRef.date);
    myHelpfulFunction("createdBy", workorderRef.employeeName);
    myHelpfulFunction("serviceDetails", workorderRef.service.serviceDetails);
    myHelpfulFunction("jobNumber", workorderRef.jobNumber);
    myHelpfulFunction("notes", workorderRef.service.condemnationDetails);
    myHelpfulFunction("truckStock", workorderRef.service.truckStock);
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}

loadIntoTable("http://localhost:3000/completeOrder", document.querySelector("table"));
