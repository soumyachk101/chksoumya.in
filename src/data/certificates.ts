export const categories = [
    { id: 'google', label: 'Google' },
    { id: 'ibm', label: 'IBM' },
    { id: 'microsoft', label: 'Microsoft' },
    { id: 'meta', label: 'Meta' },
    { id: 'nvidia', label: 'NVIDIA' },
    { id: 'hackerrank', label: 'HackerRank' },
    { id: 'aws', label: 'AWS' },
    { id: 'universities', label: 'Universities' }
];

// Helper: turn a title into a URL-safe slug
const slugify = (s: string) =>
    s.toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

const allCertificates = [
    // AI & Machine Learning (12)
    { id: slugify("Machine Learning with Python"), title: "Machine Learning with Python", issuer: "IBM", category: "ibm", date: "2025", link: "/certificates/Machine Learning with Python By IBM.pdf" },
    { id: slugify("AI Infrastructure & Operations"), title: "AI Infrastructure & Operations", issuer: "NVIDIA", category: "nvidia", date: "2025", link: "/certificates/AI Infrastructure and Operations Fundamentals By NVIDIA.pdf" },
    { id: slugify("LLM Deployment & Ethical AI"), title: "LLM Deployment & Ethical AI", issuer: "NVIDIA", category: "nvidia", date: "2025", link: "/certificates/NVIDIA LLM Experimentation Deployment and Ethical AI.pdf" },
    { id: slugify("AI Workflow: Model Deployment"), title: "AI Workflow: Model Deployment", issuer: "IBM", category: "ibm", date: "2025", link: "/certificates/AI Workflow Enterprise Model Deployment By IBM.pdf" },
    { id: slugify("AI Python for Beginners"), title: "AI Python for Beginners", issuer: "DeepLearning.AI", category: "universities", date: "2024", link: "/certificates/AI_Python_for_Beginners_By_DeepLearningAI.pdf" },
    { id: slugify("AI Workflow: Business Priorities"), title: "AI Workflow: Business Priorities", issuer: "IBM", category: "ibm", date: "2025", link: "/certificates/AI Workflow Business Priorities and Data by IBM.pdf" },
    { id: slugify("AI Workflow: Data Analysis"), title: "AI Workflow: Data Analysis", issuer: "IBM", category: "ibm", date: "2025", link: "/certificates/AI Workflow_ Data Analysis and Hypothesis Testing By IBM.pdf" },
    { id: slugify("AI Workflow: Feature Engineering"), title: "AI Workflow: Feature Engineering", issuer: "IBM", category: "ibm", date: "2025", link: "/certificates/AI Workflow_ Feature Engineering and Bias Detection By IBM.pdf" },
    { id: slugify("AI Workflow: ML & NLP"), title: "AI Workflow: ML & NLP", issuer: "IBM", category: "ibm", date: "2025", link: "/certificates/AI Workflow_ Machine Learning, Visual Recognition and NLP By IBM.pdf" },
    { id: slugify("Computer Vision Intro"), title: "Computer Vision Intro", issuer: "U. of Colorado", category: "universities", date: "2024", link: "/certificates/Introduction to Computer Vision by University of Colorado.pdf" },
    { id: slugify("Deep Learning for CV"), title: "Deep Learning for CV", issuer: "U. of Colorado", category: "universities", date: "2024", link: "/certificates/Deep Learning for Computer Vision By University Of Colorado Boulder.pdf" },
    { id: slugify("AI & ML Engineering"), title: "AI & ML Engineering", issuer: "Microsoft", category: "microsoft", date: "2025", link: "/certificates/Microsoft AI & ML__Engineering.pdf" },



    // Gen AI (5)
    { id: slugify("Prompt Engineering"), title: "Prompt Engineering", issuer: "Google", category: "google", date: "2025", link: "/certificates/Prompt Engineering By Google.pdf" },
    { id: slugify("Google Prompting Essentials"), title: "Google Prompting Essentials", issuer: "Google", category: "google", date: "2025", link: "/certificates/GooglePromptingEssentials_Badge.pdf" },
    { id: slugify("Design Prompts for Tasks"), title: "Design Prompts for Tasks", issuer: "Google", category: "google", date: "2025", link: "/certificates/Design Prompts for Everyday Work Tasks.pdf" },
    { id: slugify("Use AI as Creative Partner"), title: "Use AI as Creative Partner", issuer: "Google", category: "google", date: "2025", link: "/certificates/Use AI as a Creative or Expert Partner.pdf" },
    { id: slugify("Speed Up Data Analysis"), title: "Speed Up Data Analysis", issuer: "Google", category: "google", date: "2025", link: "/certificates/Speed Up Data Analysis and Presentation Building.pdf" },

    // Cybersecurity (4)
    { id: slugify("Intro to Cybersecurity"), title: "Intro to Cybersecurity", issuer: "IBM", category: "ibm", date: "2024", link: "/certificates/Introduction To Cybersecurity By IBM.pdf" },
    { id: slugify("Cyber Security Fundamentals"), title: "Cyber Security Fundamentals", issuer: "U. of London", category: "universities", date: "2024", link: "/certificates/Cyber Security Fundamentals By University Of London.pdf" },
    { id: slugify("Cybersecurity Essentials"), title: "Cybersecurity Essentials", issuer: "IBM", category: "ibm", date: "2024", link: "/certificates/Introduction to Cybersecurity Essentials by IBM.pdf" },
    { id: slugify("Tools & Cyberattacks"), title: "Tools & Cyberattacks", issuer: "IBM", category: "ibm", date: "2024", link: "/certificates/Introduction to Cybersecurity Tools & Cyberattacks.pdf" },

    // Cloud & IT (6)
    { id: slugify("Developing Solutions AZ-204"), title: "Developing Solutions (AZ-204)", issuer: "Microsoft", category: "microsoft", date: "2024", link: "/certificates/Prepare for AZ-204 Developing Solutions for by Microsoft.pdf" },
    { id: slugify("IT & AWS Cloud"), title: "IT & AWS Cloud", issuer: "AWS", category: "aws", date: "2024", link: "/certificates/Introduction to Information Technology and AWS.pdf" },
    { id: slugify("Intro to IT & AWS"), title: "Intro to IT & AWS", issuer: "AWS", category: "aws", date: "2024", link: "/certificates/Introduction to Information Technology and AWS_Cloud.pdf" },
    { id: slugify("Technical Support Fundamentals"), title: "Technical Support Fundamentals", issuer: "Google", category: "google", date: "2024", link: "/certificates/Technical Support Fundamentals By Google.pdf" },
    { id: slugify("Technical Support Fundamentals II"), title: "Technical Support Fundamentals II", issuer: "Google", category: "google", date: "2024", link: "/certificates/Technical Support Fundamentals By Google (2).pdf" },
    { id: slugify("Git and GitHub"), title: "Git and GitHub", issuer: "IBM", category: "ibm", date: "2024", link: "/certificates/Getting Started with Git and GitHub by IBM.pdf" },



    // Programming (15)
    { id: slugify("Python Full Stack Internship"), title: "Python Full Stack Internship", issuer: "EduSkills", category: "universities", date: "2026", link: "/certificates/Soumya  Chakraborty_Certificate.pdf", isInternship: true },
    { id: slugify("MERN Stack Developer Intern"), title: "MERN Stack Developer Intern", issuer: "Codec Technologies", category: "universities", date: "2026", link: "/certificates/MERN Stack Developer Intern.pdf", isInternship: true },
    { id: slugify("Programming in Python"), title: "Programming in Python", issuer: "Meta", category: "meta", date: "2024", link: "/certificates/Programming in Python By META.pdf" },
    { id: slugify("Programming with JavaScript"), title: "Programming with JavaScript", issuer: "Meta", category: "meta", date: "2024", link: "/certificates/Programming with JavaScript By META.pdf" },
    { id: slugify("Android Mobile App Dev"), title: "Android Mobile App Dev", issuer: "Meta", category: "meta", date: "2024", link: "/certificates/Introduction to Android Mobile Application By META.pdf" },
    { id: slugify("JavaScript Intermediate"), title: "JavaScript (Intermediate)", issuer: "HackerRank", category: "hackerrank", date: "2024", link: "/certificates/JavaScript Intermediate certificate By HackerRank..pdf" },
    { id: slugify("JavaScript Basic"), title: "JavaScript (Basic)", issuer: "HackerRank", category: "hackerrank", date: "2024", link: "/certificates/JavaScript basic certificate By HackerRank..pdf" },
    { id: slugify("Python Basic"), title: "Python (Basic)", issuer: "HackerRank", category: "hackerrank", date: "2024", link: "/certificates/Python basic certificate By HackerRank..pdf" },
    { id: slugify("CSS"), title: "CSS", issuer: "HackerRank", category: "hackerrank", date: "2024", link: "/certificates/CSS certificate By HackerRank..pdf" },
    { id: slugify("SQL Basic"), title: "SQL (Basic)", issuer: "HackerRank", category: "hackerrank", date: "2024", link: "/certificates/SQL basic certificate By HackerRank.pdf" },
    { id: slugify("Programming in C"), title: "Programming in C", issuer: "Duke Univ", category: "universities", date: "2024", link: "/certificates/Programming Fundamental In C By Duke University.pdf" },
    { id: slugify("Programming for Everybody"), title: "Programming for Everybody", issuer: "U. of Michigan", category: "universities", date: "2024", link: "/certificates/Programming for Everybody by University of Michigan.pdf" },
    { id: slugify("Crash Course On Python"), title: "Crash Course On Python", issuer: "Google", category: "google", date: "2024", link: "/certificates/Crash Course On Python By Google.pdf" },
    { id: slugify("Python for Data Science"), title: "Python for Data Science", issuer: "IBM", category: "ibm", date: "2024", link: "/certificates/Python for Data Science, AI & Development By IBM.pdf" },
    { id: slugify("Python Development"), title: "Python Development", issuer: "Microsoft", category: "microsoft", date: "2025", link: "/certificates/Microsoft Python Development.pdf" },



    // Data Analytics (3)
    { id: slugify("Data Analytics Automation"), title: "Data Analytics Automation", issuer: "AICTE", category: "universities", date: "2025", link: "/certificates/Data Analytics Process Automation Virtual Internship By AICTE.pdf", isInternship: true },
    { id: slugify("Data Analytics Lab"), title: "Data Analytics Lab", issuer: "IBM Skill Build", category: "universities", date: "2025", link: "/certificates/Data Analytics & Business Intelligence Lab_ Explore, Analyze & Build Real-World Solutions By IBM Skill Build.pdf", isInternship: true },
    { id: slugify("Intro to Data Analytics"), title: "Intro to Data Analytics", issuer: "Meta", category: "meta", date: "2024", link: "/certificates/Introduction to Data Analytics By META.pdf" },

    // Others
    { id: slugify("English Composition I"), title: "English Composition I", issuer: "Duke Univ", category: "universities", date: "2024", link: "/certificates/English Composition I By Duke University.pdf" },
];

// Slugified title is also the route slug for /certificates/[id]
export const certificates = allCertificates.map(c => ({ ...c, slug: c.id }));

// Backwards-compat: keep the previous export that excluded internships
export const publicCertificates = certificates.filter(c => !c.isInternship);

export const categoryLabel = (id: string) =>
    categories.find(c => c.id === id)?.label ?? id;
