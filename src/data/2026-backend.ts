import type { Porfoilio } from "../model";

const portfolio: Porfoilio = {
  basicProfile: {
    name: 'Hien Luong',
    title: 'Backend Software Engineer',
    description:
      'Passionate about building high-performance, scalable systems and microservices architectures. I thrive at the intersection of clean code and pragmatic engineering — turning complex distributed problems into reliable, maintainable solutions.',
    email: 'hienviluong125@gmail.com',
    avatar: 'avatar.jpg',
    githubLink: 'https://github.com/hienvl125',
    linkedinLink: 'https://www.linkedin.com/in/hien-luong-49913517b/',
    yearOfExperience: 7,
    phone: '+84 344963363'
  },
  workedCompanies: [
    {
      name: 'Andpad Vietnam',
      image: 'andpad_logo.png',
      position: 'Backend Engineer',
      startDate: 'Mar 2022',
      endDate: 'Present',
      positionDescription:
        'Contributed to a construction industry solution by developing a workforce management system for on-site operations, serving over 3,000+ customers and 1,000+ active users.',
      skills: ['golang', 'grpc', 'postgres', 'redis', 'kubernetes', 'ruby on rails'],
      resumeVersion: {
        companyOverview: 'SaaS Platform for the Construction Industry',
        techstack: [
          'Golang',
          'Ruby on Rails',
          'MySQL',
          'AWS',
          'Redis',
          'Kubernetes'
        ],
        jobDescriptions: [
          "Developed modules for managing construction workers' schedules across different project stages.",
          "Optimized the legacy codebase and SQL queries as the platform scaled to 3,000+ customers and 1,000+ active users.",
          "Contributed to business roadmap discussions, team processes, and improvements to engineering operations.",
          "Developed and maintained backend and frontend services using Golang, MySQL, and Kubernetes.",
        ]
      }
    },
    {
      name: 'Nobee',
      image: 'nobee_logo.jpeg',
      position: 'Backend Engineer',
      startDate: 'May 2021',
      endDate: 'Feb 2022',
      positionDescription:
        'Designed and implemented a real estate platform for the U.S. market, supporting property rentals as well as buying and selling workflows.',
      skills: ['nodejs', 'ruby on rails', 'postgres', 'mysql', 'redis', 'aws', 'git'],
      resumeVersion: {
        companyOverview: 'U.S. Rental Marketplace Startup',
        techstack: [
          'Ruby on Rails', 'Node.js', 'React.js', 'PostgreSQL', 'AWS'
        ],
        jobDescriptions: [
          "Developed a rental marketplace for landlords, renters, and real estate agencies in the U.S. market.",
          "Built modules that allowed agencies and landlords to create and manage rental property listings.",
          "Optimized the legacy codebase, SQL queries, and frontend performance to improve application speed and user experience.",
          "Developed and maintained the application using Ruby on Rails, React.js, and PostgreSQL.",
        ]
      }
    },
    {
      name: 'Freelancer',
      image: 'default_company_logo.png',
      position: 'Fullstack Engineer',
      startDate: 'Dec 2020',
      endDate: 'Apr 2021',
      positionDescription:
        'Built an online platform enabling product sales and virtual workshops, with seamless integration into Shopify for e-commerce operations.',
      skills: ['nodejs', 'ruby on rails', 'postgres', 'mysql', 'redis', 'aws', 'git'],
      resumeVersion: {
        companyOverview: 'Livestream E-commerce Website',
        techstack: [
          'Ruby on Rails',
          'PostgreSQL',
          'Twilio',
          'Shopify API',
        ],
        jobDescriptions: [
          "Built a multi-category livestream shopping application using Twilio.",
          "Integrated the Shopify API, allowing viewers to browse and purchase products directly during livestreams.",
          "Developed and maintained the application using Ruby on Rails, React.js, and PostgreSQL.",
        ]
      }
    },
    {
      name: 'Golden Owl Consulting Ltd',
      image: 'golden_owl_logo.jpeg',
      position: 'Fullstack Engineer',
      startDate: 'Jul 2019',
      endDate: 'Dec 2020',
      positionDescription:
        'Delivered software solutions for clients in Australia and Singapore across multiple domains, including event organization platforms, furniture e-commerce systems, and workspace booking applications.',
      skills: ['nodejs', 'ruby on rails', 'postgres', 'mysql', 'redis', 'aws', 'git'],
      resumeVersion: {
        companyOverview: 'Software outsourcing company serving the Australian and Southeast Asian markets',
        techstack: [
          'Ruby on Rails',
          'Node.js',
          'React.js',
          'PostgreSQL',
          'Twilio',
          'Redis',
        ],
        jobDescriptions: [
          "Developed event management modules, including event hosting, reward points, and booking features.",
          "Integrated livestreaming using Twilio, including real-time interaction features such as question voting and viewer reactions.",
          "Developed customization features that allowed users to configure layouts, colors, and themes for their events.",
          "Developed and maintained the application using Ruby on Rails, React.js, and PostgreSQL.",
        ]
      }
    },
    {
      name: 'BLOOD INC',
      image: 'default_company_logo.png',
      position: 'Fresher Javascript Engineer',
      startDate: 'Aug 2018',
      endDate: 'Jun 2019',
      positionDescription:
        'Engineered a blockchain-based real estate game for the Korean market using Node.js and React.js, integrating Google Maps and supporting real-time data processing.',
      skills: ['nodejs', 'mysql', 'mongodb', 'aws', 'git'],
      resumeVersion: {
        companyOverview: 'Blockchain-based real estate game for the Korean market',
        techstack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Google Maps API'],
        jobDescriptions: [
          "Built a React.js SPA using Google Maps API, allowing users to purchase virtual land displayed in a grid-based layout.",
          "Developed mini-games such as Rock Paper Scissors, farming, and lottery games that allowed users to earn BLOOD COIN, the company's cryptocurrency.",
          "Integrated payment, deposit, and withdrawal features with BLOOD WALLET, another product in the company's ecosystem.",
          "Developed and maintained backend APIs using Node.js, Express.js, MongoDB, and Redis.",
        ]
      }
    },
  ],
  education: {
    universityName: 'VNUHCM - University of Science',
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    fromYear: 2016,
    toYear: 2021,
    description:
      'Focused on algorithms, distributed systems, and software engineering principles. Graduated with honors.',
  },
  techSkillSets: [
    {
      name: 'Languages',
      skills: ['golang', 'ruby', 'typescript', 'nodejs'],
    },
    {
      name: 'Databases',
      skills: ['mysql', 'postgres', 'redis', 'mongodb'],
    },
    {
      name: 'Frameworks & Tools',
      skills: ['ruby on rails', 'gin', 'grpc', 'restapi', 'git'],
    },
    {
      name: 'Infrastructure & Cloud',
      skills: ['docker', 'kubernetes', 'linux', 'aws'],
    },
  ],
}

export default portfolio;
