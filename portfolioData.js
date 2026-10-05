/**
 * Portfolio Data Configuration - Ayush Kumar
 * NIT Nagaland · Electrical & Electronics Engineering
 */
const PORTFOLIO_DATA = {
  personal: {
    firstName: "Ayush",
    lastName: "Kumar",
    domain: "ayushkumar.dev",
    tagline: "EMBEDDED SYSTEMS · IOT · BLOCKCHAIN · MACHINE LEARNING",
    headline: "B.Tech EEE student at <strong>NIT Nagaland (CGPA: 9.388)</strong> with a strong passion for intelligent embedded hardware, IoT sensor automation, decentralized blockchain architectures, and predictive machine learning models.",
    roles: ["EMBEDDED SYSTEMS", "IOT DEVELOPER", "BLOCKCHAIN DEV", "ML RESEARCHER", "CIRCUIT DESIGNER"],
    bio: "I'm Ayush Kumar — a B.Tech Electrical & Electronics Engineering student at National Institute of Technology (NIT) Nagaland. I work at the intersection of embedded hardware, microcontrollers, sensor interfacing, decentralized Web3 blockchain protocols, and applied machine learning to build intelligent physical systems.",
    motto: "Engineering precision from silicon to algorithms.",
    location: {
      country: "INDIA",
      city: "Chümoukedima, Nagaland",
      coordinates: "25.7564° N, 93.8184° E",
      timezone: "GMT+5:30",
      transcriptRef: "NITN/24/EEE/9.388"
    },
    heroBadges: [
      { text: "EMBEDDED C++ · PYTHON", color: "cyan" },
      { text: "▲ SIH 2025 SELECTED", color: "green" },
      { text: "⛓ EHR BLOCKCHAIN · IOT", color: "purple" }
    ],
    socialLinks: {
      email: "mailto:ayushkumarnit15@gmail.com",
      phone: "tel:+917643965792",
      github: "https://github.com/Ayush-kumarnit",
      linkedin: "https://linkedin.com",
      twitter: "https://x.com",
      reddit: "https://reddit.com",
      resume: "assets/Ayush_Kumar_Resume.pdf"
    },
    images: {
      profile: "assets/user-profile.jpg?v=2",
      campus: "assets/nit-nagaland.jpg",
      locationCover: "assets/india.jpg"
    }
  },

  academic: {
    institution: "NIT NAGALAND",
    years: "2024 — 2028",
    degree: "Bachelor of Technology (B.Tech)",
    major: "Electrical and Electronics Engineering",
    cpi: "9.388",
    semestersLabel: "1 / 8 SEMS",
    statusNote: "Top Departmental Standing · CGPA: 9.388",
    verificationUrl: "assets/Ayush_Kumar_Resume.pdf",
    trendData: [
      { sem: "Class X", spi: 9.10, cpi: 9.10 },
      { sem: "Class XII", spi: 8.46, cpi: 8.78 },
      { sem: "NITN S1", spi: 9.388, cpi: 9.388 }
    ],
    pillars: [
      { tag: "INNOVATION", color: "#a78bfa", desc: "Engineering smart IoT systems and sensor interfacing from schematic to execution." },
      { tag: "MATHEMATICS", color: "#00d9ff", desc: "1st Rank in college Mathematical Contest — combining theoretical rigor with algorithmic ML." },
      { tag: "SECURITY", color: "#f59e0b", desc: "Building cryptographic blockchain contracts and noise-resistant wireless communication." }
    ],
    educationHistory: [
      {
        institution: "National Institute of Technology, Nagaland",
        degree: "B.Tech in Electrical and Electronics Engineering",
        score: "CGPA: 9.388",
        period: "2024 — 2028",
        color: "#00d9ff",
        notes: "Selected for Smart India Hackathon (SIH) 2025 · 1st Rank College Math Contest"
      },
      {
        institution: "SRKG College, Sitamarhi",
        degree: "Class XII (Senior Secondary, Bihar Board)",
        score: "84.6%",
        period: "2023",
        color: "#f59e0b",
        notes: "Major in Physics, Chemistry, and Mathematics"
      },
      {
        institution: "Bhagirathi Vidyalaya, Haridwar",
        degree: "Class X (Secondary School, CBSE)",
        score: "91.0%",
        period: "2021",
        color: "#4ade80",
        notes: "Distinction in Science and Mathematics"
      }
    ]
  },

  achievements: [
    {
      title: "1st Rank — College Mathematical Contest",
      organization: "NIT Nagaland",
      desc: "Secured top position across engineering departments in advanced mathematical problem-solving."
    },
    {
      title: "Selected for Smart India Hackathon (SIH) 2025",
      organization: "Government of India / AICTE",
      desc: "Qualified for prestigious national innovation hackathon solving real-world technological challenges."
    },
    {
      title: "Winner in Multiple Coding & Technical Competitions",
      organization: "Collegiate Technical Fests",
      desc: "Demonstrated high-speed algorithm design, embedded programming, and technical problem-solving."
    }
  ],

  certifications: [
    {
      name: "Drone Bootcamp",
      issuer: "NIELIT & NIT Nagaland",
      tag: "UAV & ROBOTICS",
      color: "#00d9ff"
    },
    {
      name: "3D Printing Bootcamp",
      issuer: "MSME (Govt. of India)",
      tag: "RAPID PROTOTYPING",
      color: "#f59e0b"
    },
    {
      name: "Energy Conservation & Green Building",
      issuer: "Certified Sustainability Course",
      tag: "ENERGY SYSTEMS",
      color: "#4ade80"
    }
  ],

  projects: [
    {
      id: "meter-theft-detection",
      title: "Smart Energy Meter Theft Detection",
      accent: "#00d9ff",
      summary: "Machine learning-driven energy theft detection system using a Random Forest model to analyze power consumption telemetry and pinpoint illicit tapping or abnormal load deviations.",
      scope: "Random Forest classification model, abnormal load signature detection, power consumption simulation datasets, feature engineering on voltage/current fluctuations, and automated alert telemetry.",
      techStack: ["Python", "Random Forest", "Scikit-learn", "Pandas", "IoT Telemetry", "Data Analysis"],
      githubUrl: "https://github.com/Ayush-kumarnit",
      liveUrl: "assets/Ayush_Kumar_Resume.pdf",
      previewBadge: "AI & SMART GRID METERS"
    },
    {
      id: "ehr-blockchain",
      title: "EHR Using Blockchain Technology",
      accent: "#a78bfa",
      summary: "Decentralized and tamper-proof Electronic Health Record (EHR) management system utilizing blockchain smart contracts to ensure patient data privacy, role-based provider authorization, and cryptographic auditability.",
      scope: "Smart contract-based medical record access control, IPFS decentralized encrypted storage, SHA-256 integrity verification, doctor-patient consent management, and patient-owned medical history sovereignty.",
      techStack: ["Blockchain", "Solidity", "Smart Contracts", "IPFS", "Web3.js", "Python", "SHA-256 Cryptography"],
      githubUrl: "https://github.com/Ayush-kumarnit",
      liveUrl: "assets/Ayush_Kumar_Resume.pdf",
      previewBadge: "BLOCKCHAIN & HEALTHCARE WEB3"
    },
    {
      id: "rc-car",
      title: "Radio Controlled Car",
      accent: "#f59e0b",
      summary: "Custom RF-based wireless vehicle system featuring multi-directional remote control, noise-filtered transmission, and integrated dual H-bridge motor driving.",
      scope: "RF transceiver communication protocol (433MHz), proportional directional motor control, power management circuit, noise filtering, and custom vehicle chassis integration.",
      techStack: ["RF Communication", "Circuit Design", "H-Bridge Drivers", "Microcontroller Interfacing", "FreeCAD"],
      githubUrl: "https://github.com/Ayush-kumarnit",
      liveUrl: "assets/Ayush_Kumar_Resume.pdf",
      previewBadge: "WIRELESS RF & ACTUATION"
    }
  ],

  skillsCategories: [
    {
      name: "Electronics & IoT",
      badge: "6 competencies",
      color: "#00d9ff",
      description: "Hardware interfacing, smart IoT telemetry, microcontrollers, and electrical circuit modeling.",
      skills: [
        "Internet of Things (IoT)",
        "Sensor Interfacing",
        "Circuit Design",
        "Digital Electronics",
        "Microprocessors",
        "Signals & Systems"
      ]
    },
    {
      name: "Blockchain & Web3",
      badge: "5 technologies",
      color: "#a78bfa",
      description: "Decentralized architectures, smart contract logic, distributed IPFS storage, and cryptographic hashing.",
      skills: [
        "Blockchain Architecture",
        "Solidity & Smart Contracts",
        "IPFS Decentralized Storage",
        "Web3.js Integration",
        "SHA-256 Cryptography"
      ]
    },
    {
      name: "Programming",
      badge: "4 languages",
      color: "#f59e0b",
      description: "Core programming languages utilized for embedded systems, algorithms, and computational modeling.",
      skills: [
        "C (Embedded)",
        "C++ (Algorithms)",
        "Python (Data & ML)",
        "MATLAB Scripting"
      ]
    },
    {
      name: "Machine Learning & Data",
      badge: "5 domains",
      color: "#4ade80",
      description: "Supervised classification, predictive modeling, statistical data analysis, and signal processing.",
      skills: [
        "Classification Models",
        "Random Forest",
        "Data Analysis (Pandas/NumPy)",
        "Predictive Modeling",
        "Signal Processing"
      ]
    },
    {
      name: "Tools & Prototyping",
      badge: "6 tools",
      color: "#ec4899",
      description: "Simulation suites, CAD tools, 3D printing, and drone flight telemetry.",
      skills: [
        "MATLAB",
        "Multisim (Circuit Simulation)",
        "FreeCAD (3D Modeling)",
        "MSME 3D Printing",
        "NIELIT Drone Telemetry",
        "Git & Hardware Prototyping"
      ]
    }
  ],

  workflowSteps: [
    { label: "PROBLEM", icon: "lightbulb", color: "#f59e0b", desc: "Identify real-world electrical, IoT or decentralized challenge" },
    { label: "SCHEMATIC", icon: "clipboard", color: "#f97316", desc: "Design circuit topology / smart contract specifications" },
    { label: "SENSORS", icon: "brain", color: "#a78bfa", desc: "Interface sensors (PIR, power meters, RF modules, or IPFS nodes)" },
    { label: "FIRMWARE", icon: "code", color: "#00d9ff", desc: "Write low-level C/C++, Solidity contracts, or Python ML logic" },
    { label: "SIMULATION", icon: "search", color: "#ec4899", desc: "Test edge cases, noise tolerance, and cryptographic validation" },
    { label: "PROTOTYPE", icon: "flask", color: "#f43f5e", desc: "Build physical prototype with 3D printed housing / testnet deploy" },
    { label: "DEPLOY", icon: "book", color: "#ffffff", desc: "Real-world testing, field evaluation & performance telemetry" }
  ],

  faq: [
    {
      q: "What is your educational background and CGPA?",
      a: "I am a B.Tech student in Electrical & Electronics Engineering (EEE) at NIT Nagaland (2024–2028) with an outstanding CGPA of 9.388. Previously, I scored 84.6% in Class XII (Bihar Board) and 91% in Class X (CBSE)."
    },
    {
      q: "What are your primary technical focus areas?",
      a: "Embedded Systems, IoT Sensor Interfacing, Blockchain Smart Contracts (EHR Systems), Circuit Design, and Machine Learning (Random Forest classification models)."
    },
    {
      q: "Can you tell me about the EHR Using Blockchain Technology project?",
      a: "I developed a decentralized Electronic Health Records (EHR) management architecture leveraging blockchain smart contracts, SHA-256 cryptographic hashing, and IPFS decentralized storage. It ensures patient-owned data sovereignty and tamper-proof access authorization for doctors and hospitals."
    },
    {
      q: "Can you tell me about the Smart Energy Meter Theft Detection project?",
      a: "I developed a Random Forest predictive model in Python that detects abnormal electricity usage patterns and power theft signatures from simulated consumption data, providing automated anomaly alerts."
    },
    {
      q: "What certifications and bootcamps have you completed?",
      a: "I have completed a Drone Bootcamp (NIELIT & NIT Nagaland), a 3D Printing Bootcamp (MSME, Govt. of India), and an Energy Conservation & Green Building Certification."
    }
  ],

  visitorStats: {
    totalVisitors: 8490,
    onlineNow: 5,
    avgDuration: "4m 15s",
    countries: [
      { name: "India", count: "6,920", percent: 81 },
      { name: "United States", count: "850", percent: 10 },
      { name: "Germany", count: "340", percent: 4 },
      { name: "United Kingdom", count: "210", percent: 3 },
      { name: "Other Countries", count: "170", percent: 2 }
    ],
    osBreakdown: [
      { os: "Windows", percent: "58%" },
      { os: "Linux", percent: "22%" },
      { os: "Android/iOS", percent: "12%" },
      { os: "macOS", percent: "8%" }
    ]
  }
};
