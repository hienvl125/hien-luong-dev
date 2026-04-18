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
  },
  workedCompanies: [
    {
      name: 'Andpad Vietnam',
      image: 'andpad_logo.png',
      position: 'Backend Engineer',
      startDate: 'Mar 2022',
      endDate: 'Present',
      positionDescription:
        'Contributed to a construction industry solution by developing a workforce management system for on-site operations, serving over 1,000 customers and 500 active users.',
      skills: ['golang', 'grpc', 'postgres', 'redis', 'kubernetes', 'ruby on rails'],
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
    },
    {
      name: 'Golden Owl Consulting Ltd',
      image: 'golden_owl_logo.jpeg',
      position: 'Backend Engineer',
      startDate: 'Jul 2019',
      endDate: 'Dec 2020',
      positionDescription:
        'Delivered software solutions for clients in Australia and Singapore across multiple domains, including event organization platforms, furniture e-commerce systems, and workspace booking applications.',
      skills: ['nodejs', 'ruby on rails', 'postgres', 'mysql', 'redis', 'aws', 'git'],
    },
    {
      name: 'BLOOD INC',
      image: 'default_company_logo.png',
      position: 'Fresher Nodejs Engineer',
      startDate: 'Aug 2018',
      endDate: 'Jun 2019',
      positionDescription:
        'Engineered a blockchain-based real estate game for the Korean market using Node.js and React.js, integrating Google Maps and supporting real-time data processing.',
      skills: ['nodejs', 'mysql', 'mongodb', 'aws', 'git'],
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
