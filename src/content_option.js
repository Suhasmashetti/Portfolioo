import { FaEthereum } from "react-icons/fa";

const logotext = "Suhasmashetty";
const meta = {
    title: "Suhas",
    description: "I’m Suhas  Full stack developer,currently CSE undergrad",
};

const introdata = {
    title: "I’m Suhas",
    animated: {
        first: "I love coding",
        second: "I build websites",
        third: "I love playing FPS games"
    },
    description: "Hii i am a FullStack Developer, Web3 Dev #{Solana,Ethereum}, Valorant Esports player (rank: Immortal) ",
    your_img_url: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I'm a CSE undergrad, full-stack web developer, and ex-Valorant esports player who traded clutching rounds to debugging React apps. I build clean, responsive web apps using modern stacks. With a background in gaming, I bring sharp focus, fast learning, and teamwork into every project. Currently exploring AI and web3",
};

const Waddress = {
    bitcoin: "bc1qrpdmvghq6p0tr6ufd45m4tu44renqlle3p6xat",
    solana: "GE3v86q7SLWy7Z7VCSqrRUbZXVMYiYqo7uxper5ZXvS6",
    ethereum:"0x2EEaA0344F87953F5e913C62F93c9F3254cf9f18"
}

const skills = [
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React", icon: "fab fa-react"},
  { name: "TypeScript", icon: "si si-typescript" }, 
  { name: "HTML", icon: "fab fa-html5" },
  { name: "C", icon: "custom-icons/c-icon.svg" },
  { name: "Java", icon: "fab fa-java" },
  { name: "MongoDB", icon: "custom-icons/mongodb.svg" },
  { name: "PostgreSQL", icon: "custom-icons/postgres.svg" },
  { name: "Nginx", icon: "custom-icons/nginx.svg" },
  { name: "Prisma", icon: "custom-icons/prisma.svg" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "Kubernetes", icon: "custom-icons/kubernetes.svg" },
  { name: "Tailwind", icon: "fab fa-tailwind"}
];


const datablogs = [{
        img: "/assets/blogimages/nginx2.png",
        description: "How nginx works.",
        link: "/blogs/1",
        alte: "nginx picture"
    },
    {
        img: "/assets/blogImages/docker.jpeg",
        description: "Docker Explanation",
        link: "/blogs/2",
    },
];


const dataportfolio = [{
        img: "/assets/projectImages/dapp.png",
        description: "This helps you connect to your wallet, make transactions and make airdrops.",
        link: "https://solanadapppp.vercel.app/",
    },
    {
        img: "/assets/projectImages/tokenlaunchpad.png",
        description: "A kickstarter for a crypto to launch your own coin(few more features will be added in the future).",
        link: "https://token-launchpadxyz.vercel.app/",
    },
    {
        img:"/assets/projectImages/portfolio.png",
        description: "portfolio",
        link: "https://msxyz.vercel.app/"
    },
    {
        img:"/assets/projectImages/apple.png",
        description: "website",
        link: "https://apple-website-xyz.vercel.app/"
    }
];

const contactConfig = {
  YOUR_EMAIL: process.env.REACT_APP_YOUR_EMAIL,
  YOUR_FONE: process.env.REACT_APP_YOUR_FONE,
  description: process.env.REACT_APP_CONTACT_DESCRIPTION,
  YOUR_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  YOUR_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  YOUR_USER_ID: process.env.REACT_APP_EMAILJS_USER_ID,
};


const socialprofils = {
    github: "https://github.com/Suhasmashetti",
    twitter: "https://x.com/supaman696",
};
export {
    meta,
    dataabout,
    Waddress,
    datablogs,
    dataportfolio,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};