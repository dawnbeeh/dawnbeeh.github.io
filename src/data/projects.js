// Import images
import brainCTImg from "../assets/images/BrainCT/brain-ct-segmentation.png"
import mentalLoadImg from "../assets/images/MentalLoad/mental-load-demo.mp4"
import figmaRestaurantImg from "../assets/images/Figma/Figma-restuarant-UI.png"
import bostonMarketplaceImg from "../assets/images/BostonNeighborhood/MarketPlace.png"
import canvasDashboardImg from "../assets/images/CanvasClone/DashBoard.png"
import calWeek from "../assets/images/Calendar/week.png"
import calAdd from "../assets/images/Calendar/add-event.png"
import calTests from "../assets/images/Calendar/tests.png"
import calJar from "../assets/images/Calendar/jar.png"
import calTui from "../assets/images/Calendar/tui.png"
import echoBoardImg from "../assets/images/EchoBoard/architecture.png"
import echoDemoImg from "../assets/images/EchoBoard/demo.png"

const projects = [
  {
    title: "Boston Neighborhood Social Web",
    description: "A social networking web app built with MongoDB, React, Node.js, TypeScript.",
    link: "https://boston-neighborhood.netlify.app",
    image: bostonMarketplaceImg
  },
  {
    title: "Canvas Clone Web App",
    description: "Learning management system clone built with React & TypeScript.",
    link: "http://dawnbeeh-kambaz.netlify.app",
    image: canvasDashboardImg
  },
  {
    title: "Mental-Load Webapp",
    description: "Redesigned client prototype into responsive web and mobile application with automated survey management and reminder system.",
    link: "",
    image: mentalLoadImg
  },
  {
    title: "Restaurant UI&UX Design",
    description: "Designed a modern restaurant website using Figma",
    link: "https://www.figma.com/proto/SjSMznbgZyYBpKo8aaDXHj/Hwang_final?node-id=4007-509&t=Rv98GDHB6CfUdBQG-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4007%3A509",
    image: figmaRestaurantImg
  },
  {
    title: "Brain CT Image Hemorrhage Segmentation",
    description: "AI-powered medical image analysis for detecting and segmenting hemorrhages in brain CT scans using deep learning.",
    link: "",
    image: brainCTImg
  },
  {
    title: "Calendar App (Java, MVC)",
    description: "Object-oriented calendar application following MVC.",
    link: "",
    image: calAdd,
    images: [calAdd, calWeek, calTests, calJar, calTui],
    imageCaptions: [
      "Event Add Dialog",
      "Week View",
      "Results of Over 300 Tests",
      "Executable JAR File Properties",
      "Terminal Command Script (TUI)"
    ],
    useme: "/downloads/calendar/USEME.md"
  },
  {
    title: "EchoBoard Ad Overlay",
    description: "AI-powered meeting platform that injects contextual ads using background recognition.",
    link: "",
    image: echoDemoImg,
    images: [echoDemoImg, echoBoardImg]
  },
  // {
  //   title: "Student Math League",
  //   description: "Placed 2nd in campus competition (AMATYC).",
  //   link: "",
  //   image: ""
  // },
  // {
  //   title: "Advanced Calculator",
  //   description: "Java calculator application with extended functions.",
  //   link: "",
  //   image: ""
  // },
  // {
  //   title: "Banking System (Java)",
  //   description: "Deposit & withdrawal features implemented in Java.",
  //   link: "",
  //   image: ""
  // },
  // {
  //   title: "2D Dodge Game (Unity)",
  //   description: "Endless runner avoiding blocks & collecting items in Unity.",
  //   link: "",
  //   image: ""
  // }
  // {
  //   title: "3D Mini Scene (Unity)",
  //   description: "A simple interactive 3D environment made with Unity.",
  //   link: "",
  //   image: ""
  // },
  // {
  //   title: "Tesla Valuation Analysis",
  //   description: "Projected 6-month price using 5-year financials & market data.",
  //   link: "",
  //   image: ""
  // }
]

export default projects 