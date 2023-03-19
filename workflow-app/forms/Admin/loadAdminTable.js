const headers = {
  companyName: "Company Name",
  workorderType: "Type",
  date: "Date",
  details: "Details",
  action: "Job Number",
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
    if (row.jobNumber == undefined) {
      const rowElement = document.createElement("tr");
      // Create "Job Number Input"
      let jobNumber = document.createElement("input");
      jobNumber.setAttribute("type", "text");
      jobNumber.style.maxWidth = "75%";
      jobNumber.placeholder = "Enter Job Number";
      // Create check mark button
      let checkMark = document.createElement("a");
      checkMark.innerHTML = "&#x2705;";
      checkMark.className = "checkMark";
      checkMark.setAttribute("workorder_id", row.id);
      checkMark.onclick = function (event) {
        let jobNum = event.currentTarget.previousElementSibling;
        if (!jobNum.value) return;
        let wo = localWorkorderRef.find((elem) => elem.id == event.currentTarget.getAttribute("workorder_id"));
        wo.jobNumber = jobNum.value;
        workData.save();
        const submitMessage = document.querySelector("#log");
        submitMessage.classList.add("show");
        window.setTimeout(function () {
          location.reload();
        }, 2000);
        /*fetch("http://localhost:3000/createOrder/" + row.id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(wo),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });*/
      };
      Object.keys(headers).forEach((element) => {
        const cellElement = document.createElement("td");

        cellElement.textContent = row[element];
        rowElement.appendChild(cellElement);
        cellElement.appendChild(jobNumber);
        cellElement.appendChild(checkMark);
      });

      tableBody.appendChild(rowElement);
    }
  }
}
loadIntoTable(workData.data.createOrder, document.querySelector("table"));
