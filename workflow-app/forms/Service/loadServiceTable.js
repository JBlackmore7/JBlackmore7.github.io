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
  //const createOrder = await response.json();
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
    if (row.jobNumber != undefined) {
      const rowElement = document.createElement("tr");
      let serviceWork = document.createElement("a");
      serviceWork.innerHTML = "Start";
      serviceWork.setAttribute("class", "historyButton");
      serviceWork.setAttribute("workorder_id", row.id);
      serviceWork.href = "serviceForm.html?workorder_id=" + row.id;
      Object.keys(headers).forEach((element) => {
        const cellElement = document.createElement("td");
        cellElement.textContent = row[element];
        rowElement.appendChild(cellElement);
        cellElement.appendChild(serviceWork);
      });

      tableBody.appendChild(rowElement);
    }
  }
}

loadIntoTable(workData.data.createOrder, document.querySelector("table"));
