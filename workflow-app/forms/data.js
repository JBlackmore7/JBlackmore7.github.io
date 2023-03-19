const nav = `<header class="navHeader">
      <a class="navTitle" href="/index.html">Work Flow</a>
      <nav>
        <div class="dropdown" hidden>
          <img src="/images/navbar-1.1s-200px.png" class="dropbtn" onclick="dropdown()" />
          <div class="dropdown-content" id="myDropdown">
            <a class="navAnchor" href="/forms/Create/createForm.html"
              >Create Order<span class="navPic"><img src="/images/create.png" /></span
            ></a>
            <a class="navAnchor" href="/forms/Admin/admin.html"
              >Admin Input<span class="navPic"><img src="/images/admin.png" /></span
            ></a>
            <a class="navAnchor" href="/forms/Service/service.html"
              >Service<span class="navPic"><img src="/images/service.png" /></span
            ></a>
            <a class="navAnchor" href="/forms/History/history.html"
              >History<span class="navPic"><img src="/images/history.png" /></span
            ></a>
          </div>
        </div>
        <ul class="navLinks">
          <li class="navList">
            <a class="navAnchor" href="/forms/History/history.html"
              >History<span class="navPic"><img src="/images/history.png" /></span
            ></a>
          </li>
          <li class="navList">
            <a class="navAnchor" href="/forms/Service/service.html"
              >Service<span class="navPic"><img src="/images/service.png" /></span
            ></a>
          </li>
          <li class="navList">
            <a class="navAnchor" href="/forms/Admin/admin.html"
              >Admin Input<span class="navPic"><img src="/images/admin.png" /></span
            ></a>
          </li>
          <li class="navList">
            <a class="navAnchor" href="/forms/Create/createForm.html"
              >Create Order<span class="navPic"><img src="/images/create.png" /></span
            ></a>
          </li>
        </ul>
      </nav>
    </header>`;

document.body.insertAdjacentHTML("afterbegin", nav);

const starterData = {
  createOrder: [
    {
      contactName: "Marte Øvretveit",
      companyName: "Source Shipping",
      contactNumber: "2503170172",
      companyAddress: "1652 102nd Avenue, Kelowna, BC V1Y 1P5",
      contactEmail: "MarteOvretveit@sourceshipping.com",
      workSite: "N/A",
      details:
        "(2) 25DK+ life rafts and (50) immersion suits for annual service.  Needs equipment back by end of June.",
      workorderType: "Service",
      employeeName: "Dr. Jan Itor",
      date: "2022-06-10",
      id: 18,
    },
    {
      contactName: "Frank Schuster",
      companyName: "Osgoode Fire Department",
      contactNumber: "6138267365",
      companyAddress: "766 Hamilton Street, Osgoode Station, ON K0A 2W0",
      contactEmail: "FrankSchuster@armyspy.com",
      workSite: "N/A",
      details:
        "The fire department is looking for 12 new SCBA's that comply with the new NFPA regulations.  Contact with quote. ",
      workorderType: "Supply",
      employeeName: "Dr. Jan Itor",
      date: "2022-06-14",
      id: 31,
    },
    {
      contactName: "Hannad Ramzi Botros",
      companyName: "A+ Electronics",
      contactNumber: "2504721010",
      companyAddress: "1665 Burdett Avenue, Victoria, BC V8N 2A4",
      contactEmail: "HannadRamziBotros@jourrapide.com",
      workSite: "N/A",
      details: "(3) 5lb CO2 Extinguishers for hydro-static testing and recharge",
      workorderType: "Service",
      employeeName: "Dr. Jan Itor",
      date: "2022-06-10",
      id: 19,
    },
    {
      contactName: "Hillard Batz",
      companyName: "Parade of Shoes",
      contactNumber: "7804309860",
      companyAddress: "1109 James Mowatt Trail SW, Edmonton, AB T6W 1S4",
      contactEmail: "HBatz@gmail.com",
      workSite: "Tampa Tailor",
      details: "Fire Alarm, Emergency Lights, and Fire Extinguisher annual inspection.",
      workorderType: "Inspection",
      employeeName: "Dr. Jan Itor",
      date: "2022-06-09",
      id: 22,
      jobNumber: "56972",
    },
    {
      contactName: "Antonio H. Ellison",
      companyName: "Matrix Design",
      contactNumber: "8075473940",
      companyAddress: "14321 Nelson Street, Keewatin, ON P0X 1C0",
      contactEmail: "AntonioHEllison@rhyta.com",
      workSite: "International Pulse",
      details:
        "Client requested a new sprinkler system be installed in their International Plus location. Will need to send a technician and designer to scope out job.",
      workorderType: "New Installation",
      employeeName: "Dr. Jan Itor",
      date: "2022-06-09",
      id: 25,
      jobNumber: "56974",
    },
    {
      contactName: "Sebastian Turner",
      companyName: "CSK Auto",
      contactNumber: "6044444026",
      companyAddress: "2920 James Street, Burnaby, BC V5G 1J9",
      contactEmail: "SebastianTurner@rhyta.com",
      workSite: "N/A",
      details: "(4) 10lb ABC Extinguishers for 6-year inspection + recharge",
      workorderType: "Service",
      employeeName: "Dr. Jan Itor",
      date: "2022-06-09",
      id: 24,
      jobNumber: "56968",
    },
    {
      contactName: "Marie C. Hicks",
      companyName: "Kessel Food Market",
      contactNumber: "5146070983",
      companyAddress: "4878 rue Levy, Montreal, QC H3C 5K4",
      contactEmail: "MarieCHicks@teleworm.us",
      workSite: "Kessel Food Market",
      details: "Kitchen fire suppression system annual inspection",
      workorderType: "Inspection",
      employeeName: "Dr. Jan Itor",
      date: "2022-06-15",
      id: 61,
      jobNumber: "61184",
    },
  ],
  completeOrder: [
    {
      contactName: "Darth Sidious",
      companyName: "Galatic Empire",
      contactNumber: "6666660666",
      companyAddress: "Top Floor, Death Star, Universe",
      contactEmail: "PapaSheev@empire.gov",
      workSite: "Garbage Compactor 3263827",
      details: "Dianoga extraction from compactor",
      workorderType: "Inspection",
      employeeName: "Jackar Bowmani",
      date: "2022-05-15",
      id: 3,
      jobNumber: "84576",
      service: {
        serviceDetails:
          "Arrived on site and determined the scope of the job.  The dianoga had grown to 10 meters in length.  Lured the dianoga from its home with bait, stunned it, and placed it in a mobile holding cell.",
        truckStock: "CDA514",
        condemnationDetails: "none",
        parts: [
          {
            quantity: "4",
            partNumber: "1011678",
            partDescription: "Stun Charges",
          },
          {
            quantity: "1",
            partNumber: "1055082",
            partDescription: "Mobile Holding Cell",
          },
          {
            quantity: "16",
            partNumber: "Labour",
            partDescription: "12 hour shift plus 4 hours of travel",
          },
        ],
      },
    },
    {
      contactName: "Luke Skywalker",
      companyName: "Jedi Order",
      contactNumber: "2033263827",
      companyAddress: "Jedi Temple, Senate District, Coruscant",
      contactEmail: "RedFive@rebelalliance.com",
      workSite: "Fighter Hangar",
      details: "Broken S-foils on four T-65B X-wing starfighters need repair",
      workorderType: "Service",
      employeeName: "Jackar Bowmani",
      date: "2022-06-06",
      id: 1,
      jobNumber: "32895",
      service: {
        serviceDetails:
          "One of the fighters foils was stuck in attack formation.  We ran a repair tool on their main computer that solved the issue.  The other 3 fighters foils were damaged beyond repair.  Installed new foils and performed commissioning testing.  No issues.",
        truckStock: "Service Shop",
        condemnationDetails:
          "6 full sets of foils were condemned due to damage from laser cannon fire.  Old foils were kept by client.",
        parts: [
          {
            quantity: "6",
            partNumber: "1087522",
            partDescription: "S-foil wings",
          },
          {
            quantity: "3",
            partNumber: "1041785",
            partDescription: "15ft hydraulic lines",
          },
          {
            quantity: "3",
            partNumber: "1023795",
            partDescription: "Rebuild Kits",
          },
          {
            quantity: "1",
            partNumber: "diag",
            partDescription: "Diagnostic Tool",
          },
          {
            quantity: "80",
            partNumber: "Labour",
            partDescription: "full weeks labour for two techs",
          },
        ],
      },
    },
    {
      contactName: "Han Solo",
      companyName: "Jabba's Criminal Empire",
      contactNumber: "1-800-CALL-HAN",
      companyAddress: "Cockpit, Millennium Falcon, Universe",
      contactEmail: "IShotFirst@solo.com",
      workSite: "Millennium Falcon",
      details:
        "Client needs a stock SSP05 hyperdrive sourced immediately.  Client denied installation and said, 'Just get me the damn hyperdrive -- Chewie and I will modify it ourselves.'",
      workorderType: "Supply",
      employeeName: "Jackar Bowmani",
      date: "2022-06-09",
      id: 4,
      jobNumber: "93572",
      service: {
        serviceDetails: "One new SSP05 hyperdrive - 11,000 Imperial Credits",
        truckStock: "JJN018",
        condemnationDetails: "N/A",
        parts: [
          {
            quantity: "1",
            partNumber: "SSP05",
            partDescription: "Class 2.0 hyperdrive",
          },
          {
            quantity: "1",
            partNumber: "MISC",
            partDescription: "Expedited Shipping Fee - 800IC",
          },
        ],
      },
    },
    {
      contactName: "Darth Vader",
      companyName: "Galactic Empire",
      contactNumber: "9722531090",
      companyAddress: "Bacta Tank, Executive Office, The Executor, Universe",
      contactEmail: "LukesFather@empire.gov",
      workSite: "N/A",
      details: `I was honestly terrified taking the order... he just kept yelling "BRING ME CAN O' BEE" and then disconnected. I guess we'll send someone to Naboo with a can to collect some bees.`,
      workorderType: "Supply",
      employeeName: "Jackar Bowmani",
      date: "2022-06-09",
      id: 5,
      jobNumber: "67421",
      service: {
        serviceDetails:
          "Went to Naboo, collected a dozen bees, placed them in a protein mash can, and poked a few holes in it.  Decided against a personal delivery so I sent them express via a transport ship... worth the extra cost.",
        truckStock: "N/A",
        condemnationDetails: "none",
        parts: [
          {
            quantity: "1",
            partNumber: "MISC",
            partDescription: "Protein Mash",
          },
          {
            quantity: "8",
            partNumber: "Labour",
            partDescription: "5 hours of travel and the rest on the 'job'.",
          },
        ],
      },
    },
    {
      contactName: "Leia Organa",
      companyName: "Alliance High Command",
      contactNumber: "2035458123",
      companyAddress: "Great Temple, Yavin 4 (shhh!)",
      contactEmail: "princess@rebelalliance.com",
      workSite: "Rebel Base",
      details: "Client wants to order a dozen new MG-100 StarFortress SF-17 bombers.  Contact with quote.",
      workorderType: "Supply",
      employeeName: "Jackar Bowmani",
      date: "2022-06-08",
      id: 2,
      jobNumber: "13487",
      service: {
        serviceDetails:
          "MG-100 StarFortress SF-17 bombers - 175,000 Imperial Credits each.  Total cost is 2.1 million IC.",
        truckStock: "N/A",
        condemnationDetails: "none",
        parts: [
          {
            quantity: "12",
            partNumber: "MG-100",
            partDescription: "MG-100 StarFortress SF-17 Bomber",
          },
        ],
      },
    },
  ],
};
class WorkorderData {
  constructor() {
    this.data = {};
    this.init();
  }

  init() {
    const storageExists = localStorage.getItem("workorder_data");
    if (!storageExists) {
      localStorage.setItem("workorder_data", JSON.stringify(starterData));
      this.data = starterData;
    } else {
      this.data = JSON.parse(storageExists);
    }
  }

  save() {
    localStorage.setItem("workorder_data", JSON.stringify(this.data));
  }

  nextIndex(collection) {
    let lastIndex = 0;
    collection.forEach((element) => {
      lastIndex = element.id > lastIndex ? element.id : lastIndex;
    });

    return ++lastIndex;
  }

  createOrder(orderData) {
    orderData.id = this.nextIndex(this.data.createOrder);
    this.data.createOrder.push(orderData);
    this.save();
  }

  completeOrder(finishedOrder) {
    this.data.completeOrder.push(finishedOrder);
    let workorder_id = finishedOrder.id;
    let index = this.data.createOrder.findIndex((object) => {
      return object.id === workorder_id;
    });
    if (index > -1) {
      this.data.createOrder.splice(index, 1);
    }
    this.save();
  }
}
const workData = new WorkorderData();
