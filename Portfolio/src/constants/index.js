import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "React Js Developer",
      icon: reactjs,
    },
    {
      title: "Javascript",
      icon: javascript,
    },
    {
      title: "Tailwind",
      icon: tailwind,
    },
    {
      title: "Css",
      icon: css,
    },
    {
      title: "Html",
      icon: html,
    },
    {
      title: "C#",
      icon: backend,
    }
    
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
   
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    
    
    
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: reactjs,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        " UI Development: Experience in building functional components and managing state in React.",
        "API Fetching: Knowledge of fetching data from APIs using fetch or axios.",
        "Redux: Basic understanding of state management with Redux for handling global state.",
        "Routing: Familiarity with React Router for setting up navigation in single-page applications",
      ],
    },
    {
      title: "Javscript",
      company_name: "js",
      icon: javascript,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Worked with ES6+ features like promises, async/await, and modules.",
        "Built complex functions using higher-order functions.",
        "Managed DOM manipulation and event handling.",
        "Utilized JavaScript frameworks and libraries like React.js to build dynamic, interactive user interfaces and manage component states effectively.",
      ],
    },
    {
      title: "Tailwind",
      company_name: "Css library",
      icon: tailwind,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Applied utility-first classes for responsive layouts and styling.",
        "Used predefined classes for typography, spacing, and colors.",
        "Implemented custom themes via tailwind.config.js..",
        "Built mobile-friendly designs with responsive breakpoints.",
      ],
    },
    {
      title: "Css",
      company_name: "css",
      icon: css,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Styled web pages using core properties like color, font, and layout.",
        "Worked with flexbox and grid for responsive layouts.",
        "Applied margin, padding, and positioning for element alignment.",
        "Created simple animations and transitions for interactivity.",
      ],
    },
    {
      title: "Html",
      company_name: "html",
      icon: html,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Created structured web pages using semantic tags (<header>, <section>, <footer>).",
        "Implemented forms with input fields, buttons, and validation.",
        "Embedded images, videos, and links.",
        "Used lists and tables for content organization.",
      ],
    },
    {
      title: "C#",
      company_name: "Backend",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Created classes and objects to model real-world entities.",
        "Used inheritance and polymorphism for code reuse and flexibility.",
        "Implemented encapsulation with access modifiers.",
        "Applied abstraction to design clean, modular applications.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "WeatherApp",
      description:
        "A weather app built with React fetches real-time data from a weather API. It displays current weather conditions, including temperature, humidity, and wind speed, using dynamic components. Styled with HTML and CSS, the app features responsive design, allowing users to search for weather by city name.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: "weather.jpg",
      source_code_link: "https://github.com/Tanbir118/WeatherApp",
    },
    {
      name: "Pokemon-App",
      description:
        "A Pokémon web app built with React and a complex API, fetching 1320 Pokémon data. Users can search by name to view attributes like abilities, strength, and other stats. Styled with CSS, it displays detailed information for each Pokémon dynamically using JavaScrip.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "pokemon.jpg",
      source_code_link: "https://github.com/Tanbir118/PokemonWEB",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };