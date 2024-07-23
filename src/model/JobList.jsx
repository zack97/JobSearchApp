const jobList = [
  {
    company: "Apple",
    time: "Just Now",
    position: "Junior UI Designer",
    location: "San Francisco, USA",
    tags: ["Remote", "Freelance"],
    description:
      "We are seeking a Junior UI Designer with a passion for creating intuitive user interfaces. Join our dynamic team at Apple and contribute to innovative design projects.",
    icon: "bx bxl-apple",
  },
  {
    company: "Microsoft",
    time: "Just Now",
    position: "Junior Software Engineer",
    location: "Seattle, USA",
    tags: ["Full Time", "On Site"],
    description:
      "Microsoft is looking for a Junior Software Engineer to develop and maintain software applications. If you have a keen interest in coding and problem-solving, apply now.",
    icon: "bx bxl-microsoft",
  },
  {
    company: "Google",
    time: "Today",
    position: "Junior Data Scientist",
    location: "Mountain View, USA",
    tags: ["Part-Time", "Remote"],
    description:
      "Google is hiring a Junior Data Scientist to analyze large datasets and provide actionable insights. The ideal candidate should be proficient in data analysis tools and techniques.",
    icon: "bx bxl-google",
  },
  {
    company: "Facebook",
    time: "This Week",
    position: "Junior Product Manager",
    location: "Menlo Park, USA",
    tags: ["Freelance", "On Site"],
    description:
      "Join Facebook as a Junior Product Manager. We are looking for someone who can assist in product development and management, ensuring high-quality user experiences.",
    icon: "bx bxl-facebook",
  },
  {
    company: "Amazon",
    time: "Today",
    position: "Junior Cloud Engineer",
    location: "Seattle, USA",
    tags: ["Full Time", "Remote"],
    description:
      "Amazon is looking for a Junior Cloud Engineer to join our AWS team. You will be responsible for supporting cloud infrastructure and services, ensuring optimal performance and security.",
    icon: "bx bxl-amazon",
  },
  {
    company: "Tesla",
    time: "Today",
    position: "Junior Robotics Engineer",
    location: "Palo Alto, USA",
    tags: ["Internship", "On Site"],
    description:
      "Tesla is seeking a Junior Robotics Engineer to work on the development and maintenance of robotic systems. If you are passionate about robotics and automation, join our innovative team.",
    icon: "bx bxs-car",
  },
  {
    company: "Spotify",
    time: "Yesterday",
    position: "Junior Sound Engineer",
    location: "Stockholm, Sweden",
    tags: ["Full Time", "Remote"],
    description:
      "Spotify is seeking a Junior Sound Engineer to assist in creating and maintaining high-quality audio content. If you have a passion for music and sound engineering, apply now.",
    icon: "bx bxl-spotify",
  },
  {
    company: "Alibaba",
    time: "Today",
    position: "Junior Data Analyst",
    location: "Hangzhou, China",
    tags: ["Full Time", "On Site"],
    description:
      "Alibaba is looking for a Junior Data Analyst to help analyze and interpret data to inform business decisions. If you have strong analytical skills, we want you on our team.",
    icon: "bx bxl-alibaba",
  },
  {
    company: "Samsung",
    time: "Just Now",
    position: "Junior Electronics Engineer",
    location: "Seoul, South Korea",
    tags: ["Internship", "On Site"],
    description:
      "Samsung is seeking a Junior Electronics Engineer to work on the design and development of new electronic products. Join our innovative team and be a part of cutting-edge technology.",
    icon: "bx bxl-samsung",
  },
  {
    company: "Netflix",
    time: "Today",
    position: "Junior Content Creator",
    location: "Los Angeles, USA",
    tags: ["Freelance", "Remote"],
    description:
      "Netflix is hiring a Junior Content Creator to produce and curate engaging content for our platform. If you have a knack for storytelling and creativity, we want to hear from you.",
    icon: "bx bxl-netflix",
  },
  {
    company: "Airbnb",
    time: "This Week",
    position: "Junior Marketing Specialist",
    location: "San Francisco, USA",
    tags: ["Full Time", "Remote"],
    description:
      "Airbnb is seeking a Junior Marketing Specialist to help develop and execute marketing strategies. Join our team and help us connect people to unique travel experiences.",
    icon: "bx bxl-airbnb",
  },
  {
    company: "Uber",
    time: "Yesterday",
    position: "Junior Operations Analyst",
    location: "New York, USA",
    tags: ["Full Time", "On Site"],
    description:
      "Uber is looking for a Junior Operations Analyst to optimize our transportation network. If you are detail-oriented and love problem-solving, apply to join our dynamic team.",
    icon: "bx bxl-uber",
  },
  {
    company: "Adobe",
    time: "Today",
    position: "Junior Graphic Designer",
    location: "San Jose, USA",
    tags: ["Internship", "On Site"],
    description:
      "Adobe is seeking a Junior Graphic Designer to assist in creating visually stunning designs for our products. If you have a passion for design and creativity, join our team.",
    icon: "bx bxl-adobe",
  },
  {
    company: "Intel",
    time: "Just Now",
    position: "Junior Hardware Engineer",
    location: "Santa Clara, USA",
    tags: ["Full Time", "Remote"],
    description:
      "Intel is hiring a Junior Hardware Engineer to work on the design and development of computer hardware components. If you have a strong technical background, we want you on our team.",
    icon: "bx bxl-intel",
  },
  {
    company: "IBM",
    time: "Today",
    position: "Junior Cloud Developer",
    location: "Austin, USA",
    tags: ["Full Time", "On Site"],
    description:
      "IBM is looking for a Junior Cloud Developer to join our cloud computing team. If you are passionate about cloud technologies and software development, apply now.",
    icon: "bx bxl-ibm",
  },
  {
    company: "Oracle",
    time: "This Week",
    position: "Junior Database Administrator",
    location: "Redwood City, USA",
    tags: ["Part-Time", "Remote"],
    description:
      "Oracle is seeking a Junior Database Administrator to manage and maintain our database systems. If you have a keen eye for detail and a passion for data, join our team.",
    icon: "bx bxl-oracle",
  },
  {
    company: "Salesforce",
    time: "Yesterday",
    position: "Junior Sales Representative",
    location: "San Francisco, USA",
    tags: ["Full Time", "Remote"],
    description:
      "Salesforce is hiring a Junior Sales Representative to assist in selling our CRM solutions. If you have excellent communication skills and a passion for sales, we want you on our team.",
    icon: "bx bxl-salesforce",
  },
  {
    company: "Twitter",
    time: "Today",
    position: "Junior Social Media Manager",
    location: "San Francisco, USA",
    tags: ["Freelance", "Remote"],
    description:
      "Twitter is looking for a Junior Social Media Manager to help manage our social media presence. If you have a passion for social media and digital marketing, apply now.",
    icon: "bx bxl-twitter",
  },
  {
    company: "LinkedIn",
    time: "Just Now",
    position: "Junior HR Specialist",
    location: "Sunnyvale, USA",
    tags: ["Full Time", "On Site"],
    description:
      "LinkedIn is seeking a Junior HR Specialist to assist in recruiting and onboarding new employees. If you have a passion for HR and people management, join our team.",
    icon: "bx bxl-linkedin",
  },
  {
    company: "Pinterest",
    time: "Today",
    position: "Junior Content Strategist",
    location: "San Francisco, USA",
    tags: ["Part-Time", "Remote"],
    description:
      "Pinterest is hiring a Junior Content Strategist to help develop and implement content strategies. If you have a creative mind and a passion for content, we want to hear from you.",
    icon: "bx bxl-pinterest",
  },
  {
    company: "Slack",
    time: "This Week",
    position: "Junior Software Developer",
    location: "San Francisco, USA",
    tags: ["Full Time", "Remote"],
    description:
      "Slack is looking for a Junior Software Developer to join our development team. If you have a passion for coding and software development, apply now.",
    icon: "bx bxl-slack",
  },
  {
    company: "Snapchat",
    time: "Yesterday",
    position: "Junior Mobile Developer",
    location: "Los Angeles, USA",
    tags: ["Full Time", "On Site"],
    description:
      "Snapchat is hiring a Junior Mobile Developer to work on our mobile application development. If you have experience in mobile development and a passion for technology, join our team.",
    icon: "bx bxl-snapchat",
  },
  {
    company: "eBay",
    time: "Today",
    position: "Junior E-commerce Specialist",
    location: "San Jose, USA",
    tags: ["Freelance", "Remote"],
    description:
      "eBay is looking for a Junior E-commerce Specialist to assist in managing our online marketplace. If you have a passion for e-commerce and digital marketing, apply now.",
    icon: "bx bxl-ebay",
  },
  {
    company: "PayPal",
    time: "Just Now",
    position: "Junior Financial Analyst",
    location: "San Jose, USA",
    tags: ["Full Time", "On Site"],
    description:
      "PayPal is seeking a Junior Financial Analyst to help analyze financial data and inform business decisions. If you have strong analytical skills and a passion for finance, join our team.",
    icon: "bx bxl-paypal",
  },
  {
    company: "Square",
    time: "Today",
    position: "Junior Payment Processor",
    location: "San Francisco, USA",
    tags: ["Part-Time", "Remote"],
    description:
      "Square is hiring a Junior Payment Processor to assist in managing payment transactions. If you have a keen eye for detail and a passion for finance, we want you on our team.",
    icon: "bx bxl-square",
  },
  {
    company: "TikTok",
    time: "This Week",
    position: "Junior Video Editor",
    location: "Los Angeles, USA",
    tags: ["Freelance", "Remote"],
    description:
      "TikTok is looking for a Junior Video Editor to help create and edit engaging video content. If you have a passion for video editing and creativity, apply now.",
    icon: "bx bxl-tiktok",
  },
  {
    company: "Shopify",
    time: "Yesterday",
    position: "Junior Web Developer",
    location: "Ottawa, Canada",
    tags: ["Full Time", "Remote"],
    description:
      "Shopify is hiring a Junior Web Developer to work on our e-commerce platform. If you have experience in web development and a passion for technology, join our team.",
    icon: "bx bxl-shopify",
  },
  {
    company: "Zoom",
    time: "Today",
    position: "Junior Customer Support Specialist",
    location: "San Jose, USA",
    tags: ["Full Time", "On Site"],
    description:
      "Zoom is looking for a Junior Customer Support Specialist to assist in providing support to our users. If you have excellent communication skills and a passion for helping people, apply now.",
    icon: "bx bxl-zoom",
  },
  {
    company: "GitHub",
    time: "Just Now",
    position: "Junior DevOps Engineer",
    location: "San Francisco, USA",
    tags: ["Part-Time", "Remote"],
    description:
      "GitHub is seeking a Junior DevOps Engineer to help manage our infrastructure and deployment processes. If you have experience in DevOps and a passion for automation, join our team.",
    icon: "bx bxl-github",
  },
  {
    company: "Adobe",
    time: "Yesterday",
    position: "Junior UX Researcher",
    location: "San Jose, USA",
    tags: ["Freelance", "Remote"],
    description:
      "Adobe is hiring a Junior UX Researcher to assist in conducting user research and testing. If you have a passion for understanding user behavior and improving user experiences, apply now.",
    icon: "bx bxl-adobe",
  },
  {
    company: "Spotify",
    time: "Today",
    position: "Junior Music Curator",
    location: "New York, USA",
    tags: ["Full Time", "On Site"],
    description:
      "Spotify is looking for a Junior Music Curator to help curate and manage our music playlists. If you have a passion for music and a keen ear for great tunes, join our team.",
    icon: "bx bxl-spotify",
  },
  {
    company: "Samsung",
    time: "This Week",
    position: "Junior Product Designer",
    location: "Seoul, South Korea",
    tags: ["Full Time", "On Site"],
    description:
      "Samsung is hiring a Junior Product Designer to work on the design and development of new products. If you have a strong design sense and a passion for innovation, apply now.",
    icon: "bx bxl-samsung",
  },
  {
    company: "Apple",
    time: "Yesterday",
    position: "Junior Software Tester",
    location: "San Francisco, USA",
    tags: ["Part-Time", "Remote"],
    description:
      "Apple is seeking a Junior Software Tester to help test and validate our software products. If you have a keen eye for detail and a passion for quality assurance, join our team.",
    icon: "bx bxl-apple",
  },
  {
    company: "Microsoft",
    time: "Today",
    position: "Junior Network Administrator",
    location: "Seattle, USA",
    tags: ["Full Time", "On Site"],
    description:
      "Microsoft is looking for a Junior Network Administrator to manage and maintain our network infrastructure. If you have strong technical skills and a passion for networking, apply now.",
    icon: "bx bxl-microsoft",
  },
  {
    company: "Google",
    time: "Just Now",
    position: "Junior Machine Learning Engineer",
    location: "Mountain View, USA",
    tags: ["Full Time", "Remote"],
    description:
      "Google is hiring a Junior Machine Learning Engineer to work on developing machine learning models and algorithms. If you have a strong background in AI and machine learning, join our team.",
    icon: "bx bxl-google",
  },
  {
    company: "Facebook",
    time: "This Week",
    position: "Junior Frontend Developer",
    location: "Menlo Park, USA",
    tags: ["Freelance", "Remote"],
    description:
      "Facebook is looking for a Junior Frontend Developer to assist in building and maintaining our web applications. If you have experience in frontend development and a passion for technology, apply now.",
    icon: "bx bxl-facebook",
  },
  {
    company: "Amazon",
    time: "Today",
    position: "Junior Data Engineer",
    location: "Seattle, USA",
    tags: ["Full Time", "On Site"],
    description:
      "Amazon is seeking a Junior Data Engineer to help design and implement data pipelines and storage solutions. If you have a passion for data engineering and a strong technical background, join our team.",
    icon: "bx bxl-amazon",
  },
  {
    company: "Tesla",
    time: "Yesterday",
    position: "Junior Automation Engineer",
    location: "Palo Alto, USA",
    tags: ["Internship", "On Site"],
    description:
      "Tesla is hiring a Junior Automation Engineer to work on the development and maintenance of automation systems. If you have a passion for robotics and automation, apply now.",
    icon: "bx bxs-car",
  },
  {
    company: "Alibaba",
    time: "Today",
    position: "Junior Cloud Architect",
    location: "Hangzhou, China",
    tags: ["Full Time", "Remote"],
    description:
      "Alibaba is looking for a Junior Cloud Architect to help design and implement cloud infrastructure solutions. If you have a strong background in cloud computing and a passion for technology, join our team.",
    icon: "bx bxl-alibaba",
  },
  {
    company: "Spotify",
    time: "This Week",
    position: "Junior Audio Engineer",
    location: "Stockholm, Sweden",
    tags: ["Part-Time", "On Site"],
    description:
      "Spotify is hiring a Junior Audio Engineer to assist in creating and maintaining high-quality audio content. If you have a passion for music and sound engineering, apply now.",
    icon: "bx bxl-spotify",
  },
  {
    company: "Netflix",
    time: "Yesterday",
    position: "Junior Graphic Designer",
    location: "Los Angeles, USA",
    tags: ["Freelance", "Remote"],
    description:
      "Netflix is seeking a Junior Graphic Designer to assist in creating visually stunning designs for our platform. If you have a passion for design and creativity, join our team.",
    icon: "bx bxl-netflix",
  },
  {
    company: "Adobe",
    time: "Today",
    position: "Junior Web Developer",
    location: "San Jose, USA",
    tags: ["Full Time", "Remote"],
    description:
      "Adobe is hiring a Junior Web Developer to work on our web development projects. If you have experience in web development and a passion for technology, apply now.",
    icon: "bx bxl-adobe",
  },
  {
    company: "Microsoft",
    time: "This Week",
    position: "Junior Game Developer",
    location: "Seattle, USA",
    tags: ["Internship", "On Site"],
    description:
      "Microsoft is looking for a Junior Game Developer to work on developing new game titles. If you have a passion for gaming and game development, join our team.",
    icon: "bx bxl-microsoft",
  },
  {
    company: "Google",
    time: "Yesterday",
    position: "Junior UX Designer",
    location: "Mountain View, USA",
    tags: ["Full Time", "Remote"],
    description:
      "Google is hiring a Junior UX Designer to help design and improve user experiences for our products. If you have a passion for user-centered design and a strong design background, join our team.",
    icon: "bx bxl-google",
  },
  {
    company: "Amazon",
    time: "Today",
    position: "Junior Security Analyst",
    location: "Seattle, USA",
    tags: ["Full Time", "On Site"],
    description:
      "Amazon is seeking a Junior Security Analyst to help identify and mitigate security risks. If you have a strong background in cybersecurity and a passion for protecting data, join our team.",
    icon: "bx bxl-amazon",
  },
  {
    company: "Facebook",
    time: "Just Now",
    position: "Junior Backend Developer",
    location: "Menlo Park, USA",
    tags: ["Freelance", "Remote"],
    description:
      "Facebook is looking for a Junior Backend Developer to assist in building and maintaining our server-side applications. If you have experience in backend development and a passion for technology, apply now.",
    icon: "bx bxl-facebook",
  },
  {
    company: "Tesla",
    time: "This Week",
    position: "Junior Electrical Engineer",
    location: "Palo Alto, USA",
    tags: ["Internship", "On Site"],
    description:
      "Tesla is hiring a Junior Electrical Engineer to work on the development and maintenance of electrical systems. If you have a passion for electrical engineering and a strong technical background, join our team.",
    icon: "bx bxs-car",
  },
  {
    company: "Alibaba",
    time: "Yesterday",
    position: "Junior UX Designer",
    location: "Hangzhou, China",
    tags: ["Full Time", "On Site"],
    description:
      "Alibaba is seeking a Junior UX Designer to help design and improve user experiences for our products. If you have a passion for user-centered design and a strong design background, join our team.",
    icon: "bx bxl-alibaba",
  },
  {
    company: "Spotify",
    time: "Today",
    position: "Junior Software Engineer",
    location: "Stockholm, Sweden",
    tags: ["Full Time", "Remote"],
    description:
      "Spotify is hiring a Junior Software Engineer to work on our software development projects. If you have experience in software development and a passion for technology, apply now.",
    icon: "bx bxl-spotify",
  },
];

export default jobList;
