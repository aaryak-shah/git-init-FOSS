import { writable } from "svelte/store";

export let projects = [
  {
    title: "Horario",
    repo: "https://github.com/hs2361/horario",
    stack: ["Dart", "Flutter", "Firebase"],
    desc: "Horario is a Class Management and Notes Sharing App for students. Users can add classes to their weekly schedule, along with their timings and the link to join the class. Users can also add assignments to their schedule along with the deadline. Horario will remind the user of their class or assignment using a push notification. Users can upload notes with their group of fellow students. Users can also send requests for notes from their group. Horario organizes notes in a systematic manner, arranged by subject. Users can also search for notes by subject, notes name or file name.",
    pre: "Flutter",
    maintainers: ["hs2361", "kc611", "DebadityaPal"],
  },
  {
    title: "Plagio: An OCR enabled Plagiarism Checker",
    repo: "https://github.com/DebadityaPal/PlagiarismChecker",
    stack: ["JavaScript", "Python", "React", "Django"],
    desc: "It is a ML based project with a website to host it. On the ML side we have a RCNN model with a CTC Loss function to detect handwriting from pages combined with Google Search API to rank instances of plagiarised text. The website is coded in Django and React, contrbutors can contribute both to the model as well as the website .",
    pre: "Basic knowledge about machine learning.",
    maintainers: ["hs2361", "kc611", "DebadityaPal"],
  },
  {
    title: "Image Processing Library",
    repo: "https://github.com/hs2361/k-means-compressor",
    stack: ["C++", "C"],
    desc: "It is an image processing and compression library written in C/C++. It supports basic image editing tools. Image compression is done using K-Means Algorithm. Seam Carving for image resizing has also been implemented. Contributors can implement new algorithms for image processing and increase the coverage of the library as a whole.",
    pre: "C++, STL Algorithms, Data Structures.",
    maintainers: ["hs2361", "DebadityaPal"],
  },
  {
    title: "DSA",
    repo: "https://github.com/4molybdenum2/DSA",
    stack: ["Python", "Java", "C++", "C"],
    desc: "The repository hosts coding problems from platforms like GFG, Leetcode and Codechef. This was created to help assist in studying for Coding Interviews and Competitive Coding. ",
    pre: "",
    maintainers: ["4molybdenum2"],
  },
  {
    title: "Xylo",
    repo: "https://github.com/4molybdenum2/xylo",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL"],
    desc: "This is a travel blog website built for Webkriti, a website designing competition for students of IIIT Gwalior organised by AASF.",
    pre: "",
    maintainers: ["4molybdenum2"],
  },
  {
    title: "Dynamic Gnome Wallpapers",
    repo: "https://github.com/manishprivet/dynamic-gnome-wallpapers",
    stack: ["Bash", "Documentation"],
    desc: "A collection of awesome dynamic wallpapers for Gnome, and easy scripts to install them",
    pre: "Linux/Gnome OS to test wallpapers",
    maintainers: ["manishprivet"],
  },
  {
    title: "Electify",
    repo: "https://github.com/manishprivet/electify",
    stack: ["JavaScript", "TypeScript", "HTML", "CSS", "React", "Next"],
    desc: "Create Private and Anonymous Elections Instantly and Unlimited. No need to Sign UP",
    pre: "AWS DynamoDB",
    maintainers: ["manishprivet"],
  },
  {
    title: "Guru-Jii",
    repo: "https://github.com/Namanl2001/MERN-Gurujii-dev",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    desc: "We have created this platform to help students find the best tuition teachers in their city quite easily. You just have to enter the pin code of your city and we will show you the best teachers in your locality along with their teaching styles and their qualification from which you can select the best teacher for yourself.",
    pre: "",
    maintainers: ["Namanl2001"],
  },
  {
    title: "Generator For Android",
    repo: "https://github.com/manikmmalhotra/generator-android-minks",
    stack: ["JavaScript", "Java", "Kotlin", "Node.js"],
    desc: "It provides a generator to create and maintain a android application based on the latests frameworks and patterns used by the community.",
    pre: "Kotlin, Java, JavaScript, Node, yeoman",
    maintainers: ["manikmmalhotra"],
  },
  //
  {
    title: "Apni Dukan Backend",
    repo: "https://github.com/kunaljain0212/Apni-Dukan-Backend",
    stack: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Documentation",
    ],
    desc: "This is an E-Commerce platform server for local businesses, written in node.js. The platform needs to have a user management system for buyers and admins, including authentication. The users can buy products from various categories by adding them to their cart and paying through a Razorpay payment gateway. The admin needs the ability to create, read, update and delete products, categories, users and orders from the platform.",
    pre: "",
    maintainers: ["kunaljain0212"],
  },
  {
    title: "git-init-FOSS Client",
    repo: "https://github.com/aaryak-shah/git-init-FOSS",
    stack: ["JavaScript", "CSS", "Svelte"],
    desc: "The client application for the git-init-FOSS event. It is a simple website written in Svelte, which displays the list of projects along with their descriptions and maintainers. It also displays the event leaderboard",
    pre: "",
    maintainers: ["aaryak-shah", "hs2361", "kunaljain0212"],
  },
  {
    title: "git-init-FOSS API",
    repo: "https://github.com/kunaljain0212/git-init-FOSS-API",
    stack: ["JavaScript", "Node.js", "Express.js"],
    desc: "The backend for the git-init-FOSS event. It is a simple backend which runs a cron job for fetching and updating scores of students every 1 hour and returns that data to a single endpoint.",
    pre: "",
    maintainers: ["hs2361", "kunaljain0212"],
  },
  {
    title: "CodeBox",
    repo: "https://github.com/nafees87n/codebox",
    stack: ["JavaScript", "HTML", "CSS", "React", "Node.js", "Express.js"],
    desc: "CodeBox is a service that provides a remote environment to run your code in. It consists of a basic API to execute programs on a remote server. Execution occurs in a containerized space. The API supports programming in 3 languages (Python, Javascript and C++), potentially extendable to support more",
    pre: "Docker (Only for Backend)",
    maintainers: ["nafees87n", "aaryak-shah"],
  },
  {
    title: "Nody: Note Everything",
    repo: "https://github.com/manikmmalhotra/Noddy",
    stack: ["Kotlin", "Firebase"],
    desc: "Noddy is an easy-to-use notepad for notes, to-do lists, and more. You can use it anytime and anywhere. Features: Create notes easily, convinient editing and deletion of notes. Customize your notes with color themes. Find the app here: https://play.google.com/store/apps/details?id=com.jerry.noddy",
    pre: "",
    maintainers: ["manikmmalhotra", "rujvinagpure"],
  },
  {
    title: "Vaccimailer",
    repo: "https://github.com/TheNinza/vaccimailer",
    stack: ["JavaScript", "Node.js", "Express.js,"],
    desc: "A NodeJS bot to send you an email when a vaccination is available in your city.",
    pre: "",
    maintainers: ["TheNinza"],
  },
  {
    title: "Codeforces Contest",
    repo: "https://github.com/TheNinza/codeforces-contest",
    stack: ["JavaScript", "Node.js"],
    desc: "A CLI tool which provides you with sample inputs and outputs for a codechef contest.",
    pre: "",
    maintainers: ["TheNinza"],
  },
  {
    title: "DSA-Visualiser",
    repo: "https://github.com/TheNinza/dsa-visualizer",
    stack: ["JavaScript", "HTML", "CSS", "React", "Documentation"],
    desc: "A Data Structures And Algorithm Visualiser.",
    pre: "Material UI",
    maintainers: ["TheNinza", "sahilahmed0707", "harshitsingh85420"],
  },
  {
    title: "VC-Room",
    repo: "https://github.com/TheNinza/vc-room",
    stack: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express.js",
      "Firebase",
      "Documentation",
    ],
    desc: "A video call platform made with React.js + Firebase + WebRTC.",
    pre: "",
    maintainers: ["TheNinza"],
  },
  {
    title: "Spacestagram",
    repo: "https://github.com/nishidhaSri/spacestagram",
    stack: ["JavaScript", "React"],
    desc: 'The main idea behind this project is to build a website for the space junkies out there who can glance at space images all day long. Users can "like", "unlike" or "share" images fetched from NASA\'s API. The images fetched here are randomly chosen from "Astronomy Picture of Day (APOD)". Corresponding date and title are displayed with the image for better context.',
    pre: "",
    maintainers: ["nishidhaSri"],
  },
  {
    title: "Discord Music and Meme bot",
    repo: "https://github.com/hitenSharm/Dicord-Meme-Bot",
    stack: ["JavaScript", "Node.js", "Documentation"],
    desc: "A discord bot which can play music, send memes and gifs, and do a reverse image search.",
    pre: "",
    maintainers: ["hitenSharm"],
  },
  {
    title: "Gsearch",
    repo: "https://github.com/nishidhaSri/gsearch",
    stack: ["JavaScript", "HTML", "CSS", "React"],
    desc: "A space where you can save your favorite GitHub profiles and browse through them.",
    pre: "",
    maintainers: ["nishidhaSri"],
  },
  {
    title: "PathFinder Visualiser",
    repo: "https://github.com/secrashi/Pathfinder-Visualiser",
    stack: ["JavaScript", "HTML", "CSS", "React"],
    desc: "A tool for visualizing various pathfinding algorithms.",
    pre: "Knowledge of shortest path finding algorithms",
    maintainers: ["secrashi"],
  },
  {
    title: "Movie Listing Webapp",
    repo: "https://github.com/Swarnim01/Movie_Listing_Webapp",
    stack: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    desc: "It is a Movie listing webapp which shows trending movies on the home screen (using MovieDB API). It has a feature of adding/removing favourite movies for the registered user (also has login/signup feature).",
    pre: "Should be famaliar with MERN stack.",
    maintainers: ["Swarnim01"],
  },
  {
    title: "Connect Intellect",
    repo: "https://github.com/secrashi/Connect-Intellect",
    stack: ["JavaScript", "HTML", "CSS", "React", "Node.js"],
    desc: "A chat application to Connect the Intellectual minds who use this application to develop this application. In simpler words, in this project we will be developing a chat application with most useful and relevant features from other most used chat applications such as discord, slack etc, and while in development mode, we will use it as a medium of communication to not only get a tested software but also an enriched user experience of the web app.",
    pre: "",
    maintainers: ["secrashi"],
  },
  {
    title: "AASF Website Backend",
    repo: "https://github.com/AASF-IIITM/aasf-website-backend",
    stack: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
    desc: "This server handles the backend operations of AASF, facilitating event management, user operations, attendance marking, uploading of points for event winners and goodie questions winners.",
    pre: "Javascript, Node.js, MongoDB",
    maintainers: ["GunaShekar02"],
  },
];

export const pstringify = () => {
  projects.forEach((p) => {
    p.pstr = p.title + " " + p.desc + " ";
    p.stack.forEach((s) => (p.pstr += s + " "));
    p.maintainers.forEach((m) => (p.pstr += m + " "));
  });
};

export const searchQueryStore = writable("");

export const search = () => {
  let q = "";
  searchQueryStore.subscribe((data) => (q = data.toLowerCase()));
  let keywords = q.split(" ");
  let results = [];
  keywords.forEach((keyword) => {
    if (q == "" || keyword !== "") {
      results = results.concat(
        projects.filter((p) => p.pstr.toLowerCase().includes(keyword))
      );
    }
  });

  let resultSet = new Set();

  results.forEach((r) => {
    resultSet.add(r);
  });
  return Array.from(resultSet);
};
