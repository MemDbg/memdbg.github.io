import { BunJs, Docker, Figma, Framer, Git, JavaScript, MongoDB, NextJs, NodeJs, Python, RadixUI, React, Redis, Redux, ShadcnUI, TailwindCSS, TypeScript } from "developer-icons";
import type { Experience, Project } from "./types";

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Acticles",
    href: "/articles",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];


export const EXPERIENCES: Experience[] = [
  {
    company: "Simplamo Enterprise JSC",
    companyLogo: "/images/companies/simplamo.png",
    positions: [
      {
        id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
        title: "Senior Frontend Developer",
        year: "10.2022 - present",
        employmentType: "Full-time",
        icon: "code",
        description:
          "- Build and maintain the [Zalo Mini App](https://zalo.me/s/1736112917405511258/) for Simplamo, ensuring seamless integration and performance.\n- Develop and maintain core features for Simplamo, driving its functionality and user experience.\n- Maintain UI/UX consistency and ensure adherence to standards across all implementations for Simplamo.\n- Ensured robust frontend technical solutions for both web and mobile platforms, aligning with project requirements and industry standards.\n- Analyzed and clarified technical implementation capabilities, providing guidance on feasible and optimal solutions.",
        skills: [
          "TypeScript",
          "Next.js",
          "React Native",
          "MobX",
          "MobX-State-Tree",
          "Tailwind CSS",
          "Zalo Mini App",
          "Agile",
          "Teamwork",
          "Research",
          "Problem-solving",
        ],
        expanded: true,
      },
      {
        id: "cedd7adb-4118-4085-9983-ae00530b49e2",
        title: "UI Design Lead",
        year: "10.2022 - present",
        employmentType: "Full-time",
        icon: "design",
        description:
          "- Maintain UI/UX consistency and ensure adherence to high-quality standards across all design implementations.\n- Designed intuitive and user-focused interfaces for features specified by the Product Team, aligning with business goals and user needs.\n- Defined and established the UI design style for Simplamo's features, ensuring a cohesive and visually appealing user interface.",
        skills: ["Creativity", "UI/UX Design", "Figma"],
      },
    ],
    current: true,
  },
  {
    company: "Quaric Co., Ltd.",
    companyLogo: "/images/companies/quaric.png",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Software Engineer",
        year: "03.2024 - present",
        employmentType: "Part-time",
        icon: "code",
        description:
          "In-house Project: [Quaric Website](https://quaric.com)\n- Integrated the [VNPAY-QR](https://vnpay.vn) payment gateway, enabling seamless and secure transactions.\n- Registered the e-commerce website with the Ministry of Industry and Trade ([online.gov.vn](http://online.gov.vn/Home/WebDetails/115855)) to ensure compliance with regulatory requirements.\n- Developed an online ordering feature, streamlining the purchasing process for users.\n\nIn-house Project: [ZaDark](https://zadark.com)\n- Create and maintain ZaDark.com using Docusaurus, incorporating Google AdSense for monetization and analytics.\n- Develop and maintain the ZaDark extension for Zalo Web across Chrome, Safari, Edge, and Firefox.\n",
        skills: [
          "Next.js",
          "Strapi",
          "Auth0",
          "VNPAY-QR",
          "Docker",
          "NGINX",
          "Google Cloud",
          "Docusaurus",
          "Extension",
          "UX/UI Design",
          "UX Writing",
          "Research",
          "Project Management",
        ],
        expanded: true,
      },
      {
        id: "7586afb2-40e8-49c4-8983-2254c9446540",
        title: "Product Designer",
        year: "03.2024 - present",
        employmentType: "Part-time",
        icon: "design",
        description:
          "- Designing UI/UX for Quaric Website, ensuring a seamless user experience and modern interface.\n- Developing the Design System to standardize the interface and optimize the design-to-development workflow.\n- Completed Quaric's brand design, including logo, identity system, and brand guidelines.",
        skills: ["UI/UX Design", "Design System", "Brand Design", "Figma"],
        expanded: true,
      },
      {
        id: "991692c4-7d02-4666-8d31-933c4831768d",
        title: "Founder / Director",
        year: "03.2024 - present",
        employmentType: "Part-time",
        description:
          "- Lead and manage the company's strategy.\n- Oversee technical teams and product development.\n- Manage relationships with customers and partners.",
        skills: ["Business Ownership", "Business Law", "Business Tax"],
      },
    ],
    current: true,
  },
  {
    company: "Tung Tung JSC",
    companyLogo: "/images/companies/tungtung.png",
    positions: [
      {
        id: "3e831244-8d8c-41e2-b2ce-7f3946956afd",
        title: "Web Developer",
        year: "2020-2022",
        employmentType: "Full-time",
        description:
          "- Designed and developed a scalable design system, promoting consistency and efficiency across the application.\n- Collaborated with the Backend Team to integrate APIs seamlessly into the website, enhancing functionality and performance.",
        icon: "code",
        skills: [
          "React",
          "Redux",
          "Storybook",
          "Lerna",
          "Agile",
          "Teamwork",
          "Research",
        ],
      },
      {
        id: "13bd34c3-db84-4fad-8132-a6c89a42957e",
        title: "Mobile Developer",
        year: "2019-2020",
        employmentType: "Full-time",
        description:
          "- Rebuilt the mobile application using React Native, implementing the new design to enhance user experience and performance.\n- Integrated the [MoMo](https://momo.vn) payment gateway and App Store in-app purchase, enabling seamless and secure payment options.\n- Optimized the application deployment process for staging and production environments, ensuring efficient and reliable rollouts.\n- Published the mobile application on both the App Store and Google Play Store, reaching a wider audience and ensuring compliance with platform standards.",
        icon: "code",
        skills: [
          "React Native",
          "Redux",
          "MoMo Payment API",
          "App Store",
          "Google Play Store",
          "Agile",
          "Teamwork",
          "Research",
        ],
        expanded: true,
      },
      {
        id: "73151add-7adf-4035-a237-b5803ceb5478",
        title: "UI/UX Designer",
        year: "2018-2019",
        employmentType: "Full-time",
        description:
          '- Redesigned and enhanced the interface of the "Online Quiz Platform" for both web and mobile applications, creating a more modern and visually appealing design.\n- Improved the user experience (UX) by addressing usability issues, streamlining navigation, and ensuring an intuitive user journey.',
        icon: "design",
        skills: ["UI/UX Design", "Sketch"],
      },
    ],
  },
  {
    company: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Web Developer",
        year: "2018-2020",
        employmentType: "Part-time",
        description:
          "- Developed a website for order placement, order management, and tracking delivery progress on a map for drivers.\n- Developed an e-commerce website for a company specializing in bird's nest products.\n- Developed a map to display information about monitoring stations.\n- Designed and developed a Landing Page interface for WordPress, allowing clients to modify content according to their needs.",
        icon: "code",
        skills: [
          "Laravel",
          "React",
          "Express.js",
          "Socket.IO",
          "MongoDB",
          "Firebase",
          "Docker",
          "NGINX",
        ],
      },
      {
        id: "0eecdfcb-028d-41f4-93e9-1269ba7eff7e",
        title: "Graphic & UI/UX Designer",
        year: "2018-2019",
        employmentType: "Part-time",
        description:
          "Designed logos, posters, advertising banners, and user interfaces.",
        icon: "design",
        skills: [
          "Creativity",
          "UI/UX Design",
          "Graphic Design",
          "Sketch",
          "Adobe Photoshop",
          "Adobe Illustrator",
        ],
      },
    ],
  },
  {
    company: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "University of Science - VNUHCM",
        year: "08.2018 - present",
        icon: "education",
        description:
          "- Currently studying for a Bachelor's degree in Information Systems.\n- Language Proficiency: B1 English Level (Intermediate).\n- Achieved several awards, including:\n  - Bronze Medal | 10th Design, Manufacturing, and Application Award 2022 (organized by Ho Chi Minh City Youth Union)\n  - Second Prize | Business Startup Competition 2019 (organized by UEL-VNUHCM)",
        skills: [
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Ly Tu Trong High School for the Gifted - Can Tho City",
        year: "08.2015 - 06.2018",
        icon: "school",
        description:
          "- Student of the Specialized Computer Science Program.\n- Granted direct admission to university due to achieving Third Prize at the national level.\n- [Achieved numerous awards](https://baocantho.com.vn/nguyen-chanh-dai-17-tuoi-va-19-giai-thuong-a97348.html) at city and national levels, including:\n  - [Third Prize](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm) | National Science and Engineering Fair 2018 (ViSEF)\n  - First Prize | Science and Engineering Fair - Can Tho City 2018\n  - Creativity Award | Binh Duong Hackathon 2017\n  - Consolation Prize | National Youth and Children's Creativity Contest 2016\n  - [First Prize](https://www.youtube.com/watch?v=OYgugvjqU4A) | Youth and Children's Creativity Contest - Can Tho City 2016\n  - Third Prize | National Young Informatics Contest 2016\n- Achieved the title of Outstanding Student from Grade 10-12.\n- Developed a feature using Node.js and Pandoc to recognize multiple-choice questions from .docx files and upload them to an [online quiz platform](https://youtu.be/QjR99wdmTyo) I created.\n- Developed websites based on Laravel framework.\n- Built websites with PHP and MySQL, following the MVC architecture.",
        skills: [
          "Algorithms",
          "C++",
          "PHP",
          "MySQL",
          "Laravel",
          "Node.js",
          "Pandoc",
          "Self-learning",
        ],
      },
      {
        id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
        title: "Thuan Hung Secondary School",
        year: "08.2011 - 06.2015",
        icon: "school",
        description:
          "- Achieved numerous awards at city and national levels:\n  - Consolation Prize | National Young Informatics Contest 2015\n  - Consolation Prize | National Young Informatics Contest 2014\n  - First Prize | Young Informatics Contest - Can Tho City 2014\n- Achieved the title of Outstanding Student from Grade 6-9.\n- Developed websites using the open-source NukeViet CMS.",
        skills: [
          "Pascal",
          "NukeViet",
          "HTML",
          "CSS",
          "JavaScript",
          "Self-learning",
        ],
      },
    ],
  },
];

export const profileInfo = {
  firstName: "Louai",
  lastName: "Boumediene",
  displayName: "Louai Boumediene",
  username: "louai",
  gender: "male",
  bio: "Creating with code, driven by passion.",
  flipSentences: ["Software Engineer", "Technical writer", "Frontend Engineer"],
  address: "Algiers, Algiria",
  phoneNumber: "+2130782645561", // E.164 format
  email: "boumedienelouai2@gmail.com",
  website: "https://louai.dev",
  dateOfBirth: "2004-06-19", // YYYY-MM-DD
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Senior Frontend Developer / UI Design Lead",
      company: "Simplamo",
      website: "https://simplamo.com?ref=IN-926722",
    },
    {
      title: "Founder / Director",
      company: "Quaric",
      website: "https://quaric.com",
    },
  ],
  about: `
Louai Boumediene
Software Developer & UI/UX Designer  

About Me  
I am a passionate software developer and UI/UX designer dedicated to crafting high-performance, user-centric software solutions with intuitive and engaging designs.  

With 5+ years of experience in web development, I specialize in building high-quality web and mobile applications using:  
- Next.js, React, and TypeScript  
- Modern front-end technologies  
- Scalable and performant architectures  

Experience & Interests  
Beyond my full-time work, I enjoy:  
- Exploring new technologies  
- Turning ideas into reality through personal projects  

Notable Project: ZaDark (https://zadark.com)  
ZaDark is a powerful browser extension that enhances the Zalo experience on PC and Web.  
- Launched in 2022  
- 80,000+ downloads on SourceForge (https://sourceforge.net/projects/zadark)  
- 10,000+ peak active users on the Chrome Web Store (https://chromewebstore.google.com/detail/llfhpkkeljlgnjgkholeppfnepmjppob)  

Let’s Connect!  
I’m always open to collaboration and new opportunities. Feel free to reach out!
`,
  avatar: "/images/chanhdai-avatar.jpeg",
  ogImage: "/images/chanhdai-og-image.png",
  keywords:
    "ncdai, nguyenchanhdai, nguyen chanh dai, chanhdai, chanh dai, iamncdai, quaric, zadark, nguyễn chánh đại, chánh đại",
  dateCreated: "2025-03-15", // YYYY-MM-DD
};



export const TECH_STACK = [
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: TypeScript,
  },
  {
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: JavaScript,
  },
  {
    title: "Python",
    href: "https://www.python.org/",
    icon: Python,
  },
  {
    title: "Node.js",
    href: "https://nodejs.org/",
    icon: NodeJs,
  },
  {
    title: "Bun",
    href: "https://bun.sh/",
    icon: BunJs,
  },
  {
    title: "React",
    href: "https://react.dev/",
    icon: React,
  },
  {
    title: "Next.js",
    href: "https://nextjs.org/",
    icon: NextJs,
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: TailwindCSS,
  },
  {
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    icon: ShadcnUI,
  },
  {
    title: "Radix UI",
    href: "https://www.radix-ui.com/",
    icon: RadixUI,
  },
  {
    title: "Motion",
    href: "https://motion.dev/",
    icon: Framer,
  },
  {
    title: "Redux",
    href: "https://redux.js.org/",
    icon: Redux,
  },
  {
    title: "Git",
    href: "https://git-scm.com/",
    icon: Git,
  },
  {
    title: "Docker",
    href: "https://www.docker.com/",
    icon: Docker,
  },
  {
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    icon: MongoDB,
  },
  {
    title: "Redis",
    href: "https://redis.io/",
    icon: Redis,
  },
  {
    title: "Figma",
    href: "https://www.figma.com/",
    icon: Figma,
  },
];

export const PROJECTS: Project[] = [
  {
    id: "quaric-website",
    title: "Quaric Website",
    time: "03.2024 - present",
    link: "https://quaric.com",
    tags: [
      "Company Project",
      "Next.js 15",
      "Tailwind CSS v3",
      "shadcn/ui",
      "Strapi 5",
      "VNPAY-QR",
      "Docker",
      "Docker Compose",
      "NGINX",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    time: "10.2023 - present",
    link: "https://github.com/ncdai/chanhdai.com",
    tags: [
      "Open Source",
      "Next.js 15",
      "Tailwind CSS v4",
      "Radix UI",
      "Motion",
      "shadcn/ui",
      "Vercel",
    ],
    description:
      "chanhdai.com is my portfolio website, showcasing my work and experience as a Software Developer & UI/UX Designer.\n- Elegant & Minimalistic UI: Clean and modern design\n- Dark Mode: Supports light and dark themes for a better user experience\n- vCard Integration: Digital business card with contact details\n- SEO Optimization: JSON-LD schema, sitemap, robots\n- Email Protection: Obfuscation to prevent spam\n- [Next.js 15](https://nextjs.org/): Latest React framework for optimized performance and scalability\n- [Tailwind CSS v4](https://tailwindcss.com/): Modern utility-first CSS framework for styling\n\nBlog Features:\n- MDX & Markdown support\n- [Syntax Highlighting](https://chanhdai.com/blog/writing-effect-inspired-by-apple) for better readability\n - [RSS Feed](https://chanhdai.com/rss) for easy content distribution\n- Dynamic OG Images for rich previews",
  },
  {
    id: "zadark",
    title: "ZaDark – Zalo Dark Mode",
    time: "01.2022 - present",
    link: "https://zadark.com",
    tags: [
      "Pet Project",
      "Open Source",
      "Browser Extension",
      "CLI",
      "Docusaurus 3",
    ],
    description:
      "ZaDark brings Dark Mode to Zalo's Web and PC interfaces, designed to help reduce eye strain during extended use. Since its launch in January 2022, ZaDark has garnered over 80,000 downloads on SourceForge and has more than 10,000 active users using the extension distributed through the Chrome Web Store.\n- Bronze Medal | 10th Design, Manufacturing, and Application Award 2022 (organized by Ho Chi Minh City Youth Union)\n- Community Choice award by SourceForge\n- Favorite award by SourceForge\n- Rising Star award by SourceForge",
  },
  {
    id: "qabox",
    title: "QABox",
    time: "07.2023",
    link: "https://github.com/ncdai/qabox",
    tags: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- Course: Distributed Applications - FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/qabox",
  },
  {
    id: "taskbox",
    title: "TaskBox",
    time: "07.2023",
    link: "https://github.com/ncdai/taskbox",
    tags: [
      "University Project",
      "PHP",
      "MySQL",
      "MVC",
      "Docker",
      "Docker Compose",
    ],
    description:
      "- Course: Distributed Applications - FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/taskbox",
  },
  {
    id: "dai-chat",
    title: "DaiChat App",
    time: "07.2020",
    link: "https://www.youtube.com/watch?v=H5U3J_W1low",
    tags: ["University Project", "Java", "Java Swing", "Java Networking"],
    description:
      "- Course: Java Application Programming - FIT@HCMUS\n- Requirement: Developed a real-time chat application using Java technologies\n- Project Score: 10/10\n- Source Code:\n  - Server: https://github.com/ncdai/ltudjava-summer2020-chatapp_server\n  - Client: https://github.com/ncdai/ltudjava-summer2020-chatapp_client",
  },
  {
    id: "qlsv-app",
    title: "QLSV App",
    time: "06.2020",
    link: "https://www.youtube.com/watch?v=tG9SZEBrwog",
    tags: ["University Project", "Java", "Java Swing", "Hibernate", "MySQL"],
    description:
      "- Course: Java Application Programming - FIT@HCMUS\n- Requirement: Built a student management system with role-based functionalities using Java technologies\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/ltudjava-summer2020-hibernate",
  },
  {
    id: "penphy",
    title: "Penphy - Self Development Social Network",
    time: "01.2019 - 08.2019",
    link: "https://www.youtube.com/watch?v=EdU7rUO-UA4",
    tags: ["Startup Project", "JavaScript", "React Native"],
    description:
      "Second Prize | Business Startup Competition 2019 (organized by UEL-VNUHCM)",
  },
  {
    id: "unlimitedstudy",
    title: "UnlimitedStudy",
    time: "01.2017 - 08.2018",
    link: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
    tags: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
    ],
    description:
      "UnlimitedStudy is a website that provides teaching and learning support tools for teachers and students.\n- Third Prize | National Science and Engineering Fair 2018 (ViSEF)\n- First Prize | Science and Engineering Fair - Can Tho City 2018\n- Third Prize | National Young Informatics Contest 2018\n- Second Prize | Youth and Children's Creativity Contest - Can Tho City 2018\n- Third Prize | Young Informatics Contest - Can Tho City 2018",
  },
  {
    id: "dmessage",
    title: "DMessage",
    time: "05.2017",
    link: "https://github.com/ncdai/DMessage",
    tags: [
      "Self-learning Project",
      "Pet Project",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Mongoose ODM",
    ],
    description:
      "A Messenger clone built to practice real-time communication using Socket.IO. This project showcases my self-learning journey in implementing WebSockets for instant messaging.",
  },
  {
    id: "study-english",
    title: "Study English",
    time: "11.2016 - 12.2017",
    link: "https://www.youtube.com/watch?v=OYgugvjqU4A",
    tags: [
      "National Competition",
      "Creative Software",
      "PHP",
      "Laravel 4",
      "MySQL",
    ],
    description:
      "Study English is a website that provides free English learning tools for high school students. The product operates on the Internet, is programmed using Laravel, and can be accessed by any browser. A special feature of the website is its multi-platform design with responsive technology, making it compatible with mobile devices running operating systems such as Android, iOS, Windows Phone, etc. The product offers functions such as Angle, Learn Vocabulary, Quiz, Practice Listening, Library, and IVsearch.\n- Consolation Prize | National Youth and Children's Creativity Contest 2016\n- First Prize | Youth and Children's Creativity Contest - Can Tho City 2016\n- Consolation Prize | Young Informatics Contest - Can Tho City 2016",
  },
];