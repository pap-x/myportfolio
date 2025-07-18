export const projects = [
  {
    title: "Lexavision",
    description:
      "A web app built with React that allows translating text from uploaded or mobile-captured images. This is achieved by a two-step process and different API services. The first step is performing OCR on the image using the Optiic API in order to generate the text and the next step is translating the text using the DeepL API. The app provides automatic language identification both for OCR and translation.",
    image: "./images/lexavision.png",
    tags: ["React"],
    source: "https://github.com/pap-x/lexavision",
    visit: "https://pap-x.github.io/lexavision/",
    id: 0,
  },
  {
    title: "Traqify",
    description:
      "A full-stack application based on the MEAN stack with Socket.IO that allows the live tracking of products and the optimization of transportations inside a manufacturing line. The application runs on tablets in each station and forklifts. The station workers and forklift drivers can scan the QR code on each product-pallet in order to get information about its contents and update its location. The forklift drivers are notified in real-time when a product is ready for transport, while the supervisor can easily oversee the production progress. The main challenges were the integration of the current MRP system in MSSQL with the application and the usability maximization for tech-illiterate workers. After incorporating the application into the production process a 20% decrease in production time was observed. ",
    video: "https://www.youtube.com/embed/Oi8LX3UotWA",
    tags: ["Angular", "MSSQL", "Express", "Socket.io"],
    source: "https://github.com/pap-x/traqify",
    id: 1,
  },
  {
    title: "BACCHUS",
    description:
      "A full-stack application based on the MEAN stack with Firebase real time database for supervising and task planning in a vineyard. Using web services through APIs, the user can receive weather forecasts or supervise the robots on the field in real-time through Google Maps satellite images. A big challenge for Google Maps integration was increasing the resolution of the vineyard area which has been achieved through drone imaging and tile integration into the Google Maps API. The interface provides 3D visualization of the robot and its surroundings in real-time, as well as a live video feed from the robots’ cameras. After the inspection of a particular area of the vineyard is complete, the user can visualize the inspection results stored in the realtime cloud database through heatmaps and receive information about grape maturation status and yield estimates according to the preferred maturation levels.",
    video:
      "https://drive.google.com/file/d/1BCYCEXEi0Q7Q145d4SlRbEwe5SExrQ_f/preview",
    tags: ["Angular", "Express", "Firebase", "Google Maps"],
    id: 2,
  },
  {
    title: "SmartSurg",
    description:
      "A full-stack application based on Angular for the front-end and a Java knowledge-base Jersey REST API for the back-end. The application allows the creation, editing and validation of surgical protocol for robotic surgeries. The surgeon can easily create a protocol before a surgery with the help of the knowledge-base that provides semantics for each step of the process. The protocol is then validated while the surgery takes place and can be reviewed later in order to prevent errors or assist the teaching process of new robotic-assisted surgeons. A user study involving orthopedic surgeons in mock-up surgeries took place and the application achieved high usability ratings.",
    video:
      "https://drive.google.com/file/d/1W00c8KVqNk8f5a48PlmxzHhoiMFeW5f1/preview",
    tags: ["Angular", "Jersey"],
    source: "https://github.com/pap-x/smartsurg",
    id: 3,
  },
  {
    title: "Badger",
    description:
      "A pure JS interface for supervision of underground/overground robots that identify underground pipes. The user can select the scanning area on the map, the entry and exit points of the robot while receiving live 3D feed from its cameras and the underground radar. The main challenge was providing the ability to work offline as the robots normally operate in remote locations, requiring the migration from Google Maps to OpenStreetMaps and using local network architectures for communication.",
    video: "https://www.youtube.com/embed/BNacCvPgpA4",
    tags: ["Javascript", "OpenStreetMaps"],
    id: 4,
  },
  {
    title: "Sarafun",
    description:
      "A full-stack application based on the LAMP stack and jQuery that allows the teaching of assembly tasks to robots through computer vision. The application handled 3D simulation, live video streaming and real-time communication with the robot. The main challenge was providing an easy to use interface for non-experts in order to successfully teach an assembly task to the robot. A user study was conducted that validated the effectiveness of the teaching method and two scientific papers were published as a result.",
    video:
      "https://drive.google.com/file/d/157FMFTgMQVl9v_k1yt5le4Y2RwlLmD0r/preview",
    tags: ["jQuery", "PHP", "MySQL"],
    id: 5,
  },
  {
    title: "Collaborate",
    description:
      "A full-stack application based on the MERN stack that allows the collaborative teaching of assembly tasks for industrial robots. The application provides the user with easy to use tools for teaching, either through computer vision or guiding the robot in order to complete the assembly. The main challenges were the configuration of the application to work with multiple types of assemblies spanning from LCD TVs to car parts and multiple types of devices (desktop to mobile)",
    video:
      "https://drive.google.com/file/d/1mTJOYsU4ohHiy2Q1BaKDHzFBSfr6X5i6/preview",
    tags: ["React", "Express", "MySQL"],
    id: 6,
  },
  {
    title: "BreatheSafe",
    description:
      "An android app that provides air quality forecasts (PM2.5, PM10, CO, NO2, etc.) based on the user’s location data. The user selects an appropriate health condition from a list including asthma, allergies, heart/lung condition etc. and receives tips on how to protect her/himself according to the guidelines of U.S. Environmental Protection Agency. Additionally, a 4-day forecast is provided so the user can plan accordingly. ",
    video:
      "https://drive.google.com/file/d/1Wl3ewlEceWOm1jTuLU7wczn0i7I3Xops/preview",
    tags: ["Android"],
    source: "https://github.com/pap-x/BreathSafe",
    id: 7,
  },
  {
    title: "Teaching by Simulation",
    description:
      "A full-stack application based on the MEAN stack and python scripts, allowing the teaching of assemblies to robots in a 3D simulated environment through the browser. The user uploads 3D models of the parts and can move them in the 3D space in order to demonstrate the assembly to the system. The assembly is then performed by the robot in simulation and the user can verify its success before exporting the robotic trajectories to a json file. ",
    video:
      "https://drive.google.com/file/d/13pZFC7mTYEvzkSX0FFcxbXecyGgloEgz/preview",
    tags: ["Angular", "Node.JS", "Python"],
    source: "https://github.com/pap-x/teach-by-simulation",
    id: 8,
  },
];

export const TimeLineData = [
  { year: 2015, text: "Diploma of Electrical & Computer Engineering" },
  { year: 2016, text: "Research Assistant at CERTH" },
  { year: 2018, text: "Full Stack Developer at ITI" },
  { year: 2021, text: "Senior Full Stack Developer at ITI" },
  { year: 2022, text: "Master in Technologies of Interactive Systems" },
  { year: 2023, text: "Senior Frontend Engineer at Nostos Genomics" },
];
