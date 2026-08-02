const DATA = {
  about: {
    name: "Manam Thulasiram",
    title: "B.Tech CSE (Data Science)",
    summary:
      "Computer Science and Engineering (Data Science) undergraduate with experience in Python, machine learning, deep learning, and data analysis. Skilled in building predictive models, computer vision systems, and data pipelines using TensorFlow, NumPy, and Pandas. Strong foundation in data structures, algorithms, and object-oriented programming. Seeking a Data Science, Machine Learning, or Software Development internship or role to deliver data-driven solutions.",
    location: "Andhra Pradesh, India",
    phone: "+91 6305765060",
    email: "mtr.manam@gmail.com",
    linkedin: "https://www.linkedin.com/in/manam-thulasiram-740b87354/",
    github: "https://github.com/m-thulasiram",
    leetcode: "https://leetcode.com/u/M_Thulasi_ram/",
    hackerrank: "https://www.hackerrank.com/profile/vtu30380",
  },
  education: [
    {
      school: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai",
      degree: "B.Tech – Computer Science and Engineering (Data Science)",
      years: "Expected: 2027",
      coursework: ["Data Structures & Algorithms", "Machine Learning", "DBMS", "OOP", "Deep Learning", "Data Analysis"],
      achievements: [],
    },
    {
      school: "Sri Venkatesa Perumal College of Engineering and Technology",
      degree: "Diploma – Computer Engineering",
      years: "Completed",
      coursework: ["Computer Engineering", "Programming Fundamentals", "Networking"],
      achievements: [],
    },
    {
      school: "ZPHS Arai School",
      degree: "Secondary School Certificate (SSC)",
      years: "Completed",
      coursework: [],
      achievements: [],
    },
  ],
  skills: {
    programming: ["Python", "Java", "JavaScript (Node.js)", "HTML", "CSS"],
    libraries: ["Pandas", "NumPy", "TensorFlow", "Scikit-learn", "Matplotlib"],
    ml: [
      "Supervised Learning", "Deep Learning", "Neural Networks", "Computer Vision",
      "YOLOv8", "Time Series Forecasting", "Regression", "Classification",
    ],
    databases: ["MySQL", "MongoDB"],
    tools: ["GitHub", "Git", "VS Code", "Jupyter Notebook", "Google Colab"],
    concepts: [
      "Data Structures & Algorithms", "OOP", "Exploratory Data Analysis (EDA)",
      "Feature Engineering", "Data Preprocessing", "Statistical Analysis",
    ],
    soft: [
      "Problem Solving", "Analytical Thinking", "Communication", "Creativity",
      "Time Management", "Quick Learning", "Team Collaboration", "Attention to Detail",
    ],
  },
  projects: [
    {
      title: "Deep Learning-Based Crop Yield Prediction Model",
      description:
        "Designed and trained a deep learning neural network to predict crop yield from large-scale agricultural datasets, improving decision-making accuracy for agricultural planning. Executed data preprocessing, cleaning, and feature engineering on raw agricultural data to enhance model input quality and reduce prediction error. Optimized neural network hyperparameters and architecture to achieve measurable improvement in prediction accuracy and model generalization.",
      tech: ["Python", "TensorFlow", "Pandas"],
      role: "Data preprocessing, deep learning model development, hyperparameter tuning, and result analysis.",
      image: "/images/crop.jpg",
      link: "https://github.com/m-thulasiram/Crop-Yield-Prediction",
    },
    {
      title: "Nutrition-Aware Automated Food Detection Using YOLOv8",
      description:
        "Developed a real-time computer vision food detection system using the YOLOv8 object detection framework to identify food items from images with high accuracy. Integrated a nutritional database mapping pipeline to provide automated calorie counts and macronutrient information for each detected food item. Optimized image preprocessing workflows and model hyperparameters, resulting in improved detection speed, accuracy, and inference efficiency.",
      tech: ["Python", "YOLOv8", "Computer Vision"],
      role: "Model development, nutritional database integration, image preprocessing, and performance optimization.",
      image: "/images/nutrivision.png",
      link: "https://github.com/m-thulasiram/nutrivision",
    },
    {
      title: "Manjushree Ladies Tailor – Business Website",
      description:
        "Designed and built a full-featured local business website for Manjushree Ladies Tailor, a ladies' stitching shop in Vashi, Navi Mumbai. Features include a multilingual UI (English, Hindi, Marathi), WhatsApp-integrated enquiry form, Google Maps embed, customer reviews section, dynamic open/closed status, and a fully mobile-responsive layout with a sticky bottom action bar.",
      tech: ["HTML", "CSS", "JavaScript", "WhatsApp API", "Google Maps"],
      role: "Full design and development — UI/UX, multilingual content, WhatsApp form integration, and mobile optimization.",
      image: "https://placehold.co/960x540/F9EEF1/B5405A?text=Manjushree+Ladies+Tailor",
      link: "https://manjushreladiestailor.vercel.app/",
    },
  ],
  internships: [
    {
      company: "IBM SkillsBuild | 1M1B",
      role: "1M1B | AI for Sustainability Virtual Internship",
      duration: "Completed 27 Jul 2026",
      work: "Completed the 1M1B | AI for Sustainability Virtual Internship hosted by IBM SkillsBuild & 1M1B. Gained practical experience in leveraging Artificial Intelligence and Machine Learning models for environmental sustainability, data analysis, and predictive modeling.",
      tools: "Python, Artificial Intelligence, Machine Learning, IBM SkillsBuild",
      certificate: "/images/IBM SkillsBuild Virtual Internship.png",
      credentialId: "PLAN-56138075980A",
      verifyUrl: "https://skills.yourlearning.ibm.com/certificate/PLAN-56138075980A"
    }
  ],
  certifications: [
    {
      title: "1M1B | AI for Sustainability Virtual Internship",
      image: "/images/IBM SkillsBuild Virtual Internship.png",
      issuer: "IBM SkillsBuild",
      badge: "Certified",
      badgeColor: "text-emerald-400",
      category: "course",
      credentialId: "PLAN-56138075980A",
      verifyUrl: "https://skills.yourlearning.ibm.com/certificate/PLAN-56138075980A"
    },

    {
      title: "AWS Certified Machine Learning",
      image: "/images/AWS Certified Machine Learning.png",
      issuer: "AWS",
      badge: "Certified",
      badgeColor: "text-amber-400",
      category: "course",
    },
    {
      title: "Applied ML: Where Ideas Meet Reality",
      image: "/images/Applied ML Where Ideas Meet Reality.png",
      issuer: "Workshop",
      badge: "Certified",
      badgeColor: "text-cyan-400",
      category: "event",
    },
    {
      title: "Big Data",
      image: "/images/Big data.png",
      issuer: "Certification",
      badge: "Certified",
      badgeColor: "text-emerald-400",
      category: "course",
    },
    {
      title: "Data Structures & Algorithms in Python: Sorting Algorithms",
      image: "/images/Data Structures & Algorithms in Python Sorting Algorithms.png",
      issuer: "Certification",
      badge: "Certified",
      badgeColor: "text-blue-400",
      category: "course",
    },
    {
      title: "BIOSPARX 2K26",
      image: "/images/BIOSPARX 2K26.png",
      issuer: "Event",
      badge: "Participated",
      badgeColor: "text-pink-400",
      category: "event",
    },
    {
      title: "Codeathon 4.0",
      image: "/images/Codeathon 4.0.png",
      issuer: "Event",
      badge: "Participated",
      badgeColor: "text-orange-400",
      category: "event",
    },
    {
      title: "EDZIAL 2.0",
      image: "/images/EDZIAL 2.0.png",
      issuer: "Event",
      badge: "Participated",
      badgeColor: "text-yellow-400",
      category: "event",
    },
    {
      title: "TECHYUGAM '26",
      image: "/images/TECHYUGAM '26.png",
      issuer: "Event",
      badge: "Participated",
      badgeColor: "text-red-400",
      category: "event",
    },
  ],
  achievements: [
    "Presented a research paper on 'Precision Dietary Recommendation using YOLOv8 Food Detection and Optimization based Nutritional Planning' at the Third International Conference on Innovations in Cybersecurity and Data Science (ICICDS-2026).",
    "Earned Elite certification in NPTEL Human Computer Interaction course with an outstanding score of 90%.",
    "Successfully completed NPTEL Introduction to Industry 4.0 and Industrial Internet of Things certification.",
    "Completed NPTEL Remote Sensing Essentials certification from IIT Roorkee.",
    "Completed multiple NPTEL certifications from prestigious IIT institutions.",
    "Built strong knowledge in Human Computer Interaction, Industry 4.0, IoT, and Remote Sensing technologies.",
    "Demonstrated consistent learning and technical skill development through NPTEL online certifications.",
    "Passionate about Artificial Intelligence, Data Science, Machine Learning, and emerging technologies.",
    "Active learner dedicated to continuous professional and technical growth.",
  ],
  resume: {
    url: "/images/Thulasiram_s_resume.pdf",
  },
}

export default DATA
