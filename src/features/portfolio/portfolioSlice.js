import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: "Muhammad Talha",
    title: "Frontend Developer",
    location: "Karachi, Pakistan",
    email: "mohammadtalhaqureshi0000@gmail.com",
    phone: "(+92) 300-9206620",
    summary: "Motivated Frontend Developer with a solid background in Information Technology and practical web development training from Saylani Mass IT Training (SMIT) and Hidaya Institute. Skilled in building responsive, user-friendly web applications using React, TypeScript, JavaScript, HTML5/CSS3, and Bootstrap, with foundational state management in Redux Toolkit and Context API."
  },
  skills: {
    coreFrontend: ["React.js", "TypeScript", "JavaScript (ES6+)", "HTML5 / CSS3", "Bootstrap", "Tailwind CSS"],
    stateManagement: ["React Context API", "useReducer Hook", "Redux Toolkit (Basic)"],
    backendDatabase: ["Supabase", "PHP 8", "MySQL", "Relational Modeling"]
  },
  projects: [
    {
      id: 1,
      title: "Expense Tracker",
      description: "Expense tracker built with React, Context API, and useReducer for managing expenses, tracking transactions, and handling application state with dynamic financial summaries.",
      techStack: ["React.js", "React Context API", "React useReducer"],
      category: "React",
      githubUrl: "https://github.com/mohammadtalhaqureshi0000-ship-it/Expense-Tracker.git",
      liveUrl: "https://expense-tracker-five-dun-45.vercel.app"
    },
    {
      id: 2,
      title: "tic_tac_toi_game",
      description: "Interactive Tic Tac Toe game built with HTML, CSS, and JavaScript, featuring responsive design, dynamic game logic, turn-based gameplay, and win/draw detection.",
      techStack: ["JavaScript", "Html", "CSS"],
      category: "JavaScript",
      githubUrl: "https://github.com/mohammadtalhaqureshi0000-ship-it/tic_tac_toi_game.git",
      liveUrl: "https://tic-tac-toe-game-weld-phi.vercel.app"
    },
    {
      id: 3,
      title: "Avengers-Character-Showcase-Project",
      description: "Interactive Avengers character showcase featuring detailed character profiles, video trailers, and a responsive UI designed for an engaging browsing experience.",
      techStack: ["Html", "Css"],
      category: "Other",
      githubUrl: "https://github.com/mohammadtalhaqureshi0000-ship-it/Avengers-Character-Showcase-Project.git",
      liveUrl: "https://avengers-character-showcase-project.vercel.app/"
    },
    { 
      id: 4,
      title: "React Calculator",
      description: "Responsive calculator built with React, featuring interactive operations, dynamic state management, and a clean, user-friendly interface.",
      techStack: ["React.js"],
      category: "React",
      githubUrl: "https://github.com/mohammadtalhaqureshi0000-ship-it/react-calculator.git",
      liveUrl: "https://react-calculator-flame-eight.vercel.app"
    },
    { 
      id: 5,
      title: "To Do Application",
      description: "Responsive To-Do application built with JavaScript, featuring task creation, editing, completion tracking, deletion, and dynamic DOM manipulation with a clean, user-friendly interface.",
      techStack: ["JavaScript","DOM","Html","CSS"],
      category: "JavaScript",
      githubUrl: "https://github.com/mohammadtalhaqureshi0000-ship-it/To-Do-App-Project.git",
      liveUrl: "https://to-do-app-project-ruddy.vercel.app"
    },
    { 
      id: 6,
      title: "Calculator",
      description: "Interactive calculator built with HTML, CSS, and JavaScript, featuring real-time calculations, essential arithmetic operations, and a responsive, user-friendly interface.",
      techStack: ["JavaScript","Html","CSS",],
      category: "JavaScript",
      githubUrl: "https://github.com/mohammadtalhaqureshi0000-ship-it/Calculator-Project.git",
      liveUrl: "https://calculator-project-three-xi.vercel.app"
    }
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
        "Applying clean code practices and modern UI/UX principles to practical projects."
      ]
    },
    {
      id: 2,
      role: "Software & Web Development Training (PHP & MySQL)",
      institution: "Hidaya Institute",
      period: "Feb 2025 - May 2025",
      details: [
        "Learned foundational dynamic web development using PHP 8 (Object-Oriented Programming) and MySQL.",
        "Designed modular client-side layouts using HTML5, CSS3, and reusable code blocks.",
        "Understood relational database structure and simple SQL query techniques."
      ]
    }
  ],
  education: {
    degree: "Bachelor of Science in Information Technology (BSIT)",
    institution: "Shaheed Benazir Bhutto University, Shaheed Benazirabad",
    location: "Nawabshah, Sindh, Pakistan",
    period: "2021 - 2025"
  },
  activeSkillFilter: "All",
  activeProjectCategory: "All",
  activeSection: "home"
};

const portfolioSlice = createSlice({
  name: 'portfolio',
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
    }
  }
});

export const { setSkillFilter, setProjectCategory, setActiveSection } = portfolioSlice.actions;
export default portfolioSlice.reducer;