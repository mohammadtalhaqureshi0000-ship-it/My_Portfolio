import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    name: "Muhammad Talha",
    title: "Frontend Developer / React.js Developer",
    location: "Hyderabad, Pakistan",
    email: "mohammadtalhaqureshi0000@gmail.com",
    phone: "(+92) 300-9206620",
    summary:
      "Motivated Frontend Developer and Information Technology graduate with practical web development training from Saylani Mass IT Training (SMIT) and Hidaya Institute. Skilled in building responsive, user-friendly web applications using React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, and Material UI (MUI). Experienced in state management with Redux Toolkit and Context API, integrating Supabase, and deploying applications. Currently expanding skills in backend development to progress toward Full-Stack Development.",
  },
  skills: {
    coreFrontend: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "MUI",
      "Bootstrap",
    ],
    stateManagement: ["Redux Toolkit", "React Context API", "useReducer Hook"],
    backendDatabase: ["Supabase", "PHP 8", "MySQL", "Relational Modeling"],
  },
  projects: [
    {
      id: 1,
      title: "Expense Tracker",
      description:
        "Expense tracker built with React, Context API, and useReducer for managing expenses, tracking transactions, and handling application state with dynamic financial summaries.",
      techStack: ["React.js", "React Context API", "React useReducer"],
      category: "React",
      githubUrl:
        "https://github.com/mohammadtalhaqureshi0000-ship-it/Expense-Tracker.git",
      liveUrl: "https://expense-tracker-five-dun-45.vercel.app",
    },
    {
      id: 2,
      title: "NikaCart",
      description:
        "Anime-inspired e-commerce application built with React.js and Redux Toolkit, featuring product browsing, product details, shopping cart functionality, wishlist management, and a responsive user interface for an engaging online shopping experience.",
      techStack: [
        "React.js",
        "Redux Toolkit",
        "React Router",
        "Tailwind CSS",
        "JavaScript",
      ],
      category: "React",
      githubUrl: "https://github.com/mohammadtalhaqureshi0000-ship-it/NikaCart",
      liveUrl: "https://nika-cart.vercel.app/",
    },

    {
      id: 3,
      title: "tic_tac_toi_game",
      description:
        "Interactive Tic Tac Toe game built with HTML, CSS, and JavaScript, featuring responsive design, dynamic game logic, turn-based gameplay, and win/draw detection.",
      techStack: ["JavaScript", "Html", "CSS"],
      category: "JavaScript",
      githubUrl:
        "https://github.com/mohammadtalhaqureshi0000-ship-it/tic_tac_toi_game.git",
      liveUrl: "https://tic-tac-toe-game-weld-phi.vercel.app",
    },
    {
      id: 4,
      title: "Avengers-Character-Showcase-Project",
      description:
        "Interactive Avengers character showcase featuring detailed character profiles, video trailers, and a responsive UI designed for an engaging browsing experience.",
      techStack: ["Html", "Css"],
      category: "Other",
      githubUrl:
        "https://github.com/mohammadtalhaqureshi0000-ship-it/Avengers-Character-Showcase-Project.git",
      liveUrl: "https://avengers-character-showcase-project.vercel.app/",
    },
    {
      id: 5,
      title: "React Calculator",
      description:
        "Responsive calculator built with React, featuring interactive operations, dynamic state management, and a clean, user-friendly interface.",
      techStack: ["React.js"],
      category: "React",
      githubUrl:
        "https://github.com/mohammadtalhaqureshi0000-ship-it/react-calculator.git",
      liveUrl: "https://react-calculator-flame-eight.vercel.app",
    },
    {
      id: 6,
      title: "To Do Application",
      description:
        "Responsive To-Do application built with JavaScript, featuring task creation, editing, completion tracking, deletion, and dynamic DOM manipulation with a clean, user-friendly interface.",
      techStack: ["JavaScript", "DOM", "Html", "CSS"],
      category: "JavaScript",
      githubUrl:
        "https://github.com/mohammadtalhaqureshi0000-ship-it/To-Do-App-Project.git",
      liveUrl: "https://to-do-app-project-ruddy.vercel.app",
    },
    {
      id: 7,
      title: "Calculator",
      description:
        "Interactive calculator built with HTML, CSS, and JavaScript, featuring real-time calculations, essential arithmetic operations, and a responsive, user-friendly interface.",
      techStack: ["JavaScript", "Html", "CSS"],
      category: "JavaScript",
      githubUrl:
        "https://github.com/mohammadtalhaqureshi0000-ship-it/Calculator-Project.git",
      liveUrl: "https://calculator-project-three-xi.vercel.app",
    },
  ],
  training: [
    {
      id: 1,
      role: "Modern Web & Mobile App Development Trainee",
      institution: "Saylani Mass IT Training (SMIT)",
      period: "Oct 2025 - Present",
      details: [
        "Building responsive, interactive web applications using React, TypeScript, and Bootstrap/Tailwind.",
        "Gaining hands-on experience in global state management using React Context API with useReducer and basic workflows in Redux Toolkit.",
        "Connecting frontend interfaces with Supabase for simple database and authentication features.",
        "Applying clean code practices and modern UI/UX principles to practical projects.",
      ],
    },
    {
      id: 2,
      role: "Software & Web Development Training (PHP & MySQL)",
      institution: "Hidaya Institute",
      period: "Feb 2025 - May 2025",
      details: [
        "Learned foundational dynamic web development using PHP 8 (Object-Oriented Programming) and MySQL.",
        "Designed modular client-side layouts using HTML5, CSS3, and reusable code blocks.",
        "Understood relational database structure and simple SQL query techniques.",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Science in Information Technology (BSIT)",
    institution: "Shaheed Benazir Bhutto University, Shaheed Benazirabad",
    location: "Nawabshah, Sindh, Pakistan",
    period: "2021 - 2025",
  },
  activeSkillFilter: "All",
  activeProjectCategory: "All",
  activeSection: "home",
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setSkillFilter: (state, action) => {
      state.activeSkillFilter = action.payload;
    },
    setProjectCategory: (state, action) => {
      state.activeProjectCategory = action.payload;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setSkillFilter, setProjectCategory, setActiveSection } =
  portfolioSlice.actions;
export default portfolioSlice.reducer;
