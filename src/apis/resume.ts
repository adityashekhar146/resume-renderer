import { IProfile } from "../types/profile"

export const getAdiResume = (): IProfile => ({
    personal: { firstName: "Aditya Shekhar", lastName: "Salugu Sai" },
    contactInfo: { 
      email: "adityashekhar146@gmail.com", 
      phone: "+91 80080 47970", 
      city: "Hyderabad, India",
      linkedin: "https://www.linkedin.com/in/aditya-shekhar-salugu-66269129/",
      picture: "https://media.licdn.com/dms/image/C4D03AQEMpuIdkhSN2w/profile-displayphoto-shrink_200_200/0/1604136212161?e=1681344000&v=beta&t=KPqXhuk8XCPXzqKaPQUHvvWcZfbX1nWG5gtEA8iJdR8",
    },
    summary: [
      "**Solutions Architect** | **Full Stack Developer** | **People Leader** | **DevOps Campaigner**",
      "Technology Leader with hand-on experience in delivering cutting edge solutions focusing on solving the REAL business problems with effective, efficient and elegant solutions"
    ],
    experience: [
      {
        title: "Director, Platforms and Channels",
        company: "S&P Global Market Intelligence",
        isCurrentJob: true,
        startDate: new Date(2022, 1, 1),
        location: "Hyderabad, Telangana, India",
        responsibilities: [
          "Lead the greenfield development of a cloud native platform called **Xpressfeed Prime** to refresh the stack for the defacto feed delivery product for the company",
          "Critical in the architecture, design, implementation and delivery of the platform",
          "Donned the role of Principal developer contributing in every part of the stack including technologies like **Java**, **React**, **Spark**, **AWS EKS and Lambda** and **Azure Pipelines**",
        ]
      },
      {
        title: "Associate Director, Product Development",
        company: "S&P Global Market Intelligence",
        isCurrentJob: false,
        endDate: new Date(2022, 3, 1),
        startDate: new Date(2017, 1, 1),
        location: "Hyderabad, Telangana, India",
        responsibilities: [
          "Founding member of the Xpressfeed Prime platform SWAT Team that architected and implemented the proof-of-concept",
          "Led the development and integration of the Omnisearch functionality that acted as the search and discovery engine for the **CapitalIQ Pro** platform",
          "Critical part of the team that architected and built the search ecosystem with low-latency, microservices for searching and indexing with distributed data storage that dealt with huge amounts of structured, semi-structured and unstructured data",
          "Donned the role of Principal developer contributing in every part of the stack from **DurandalJS** based UI through gRPC services and multiple search engines all built for the cloud",
          "Actively developed and contributed to the data indexing using **.NET Core** and **Java** based event driven services and **Python** with NLP capable search services",
          "Extensive work in **Apache Solr** and **Elasticsearch** engines for hosting and searching through huge amounts of data"
        ]
      },
      {
        title: "Lead Sotware Developer, Product Development",
        company: "S&P Global Market Intelligence",
        isCurrentJob: false,
        endDate: new Date(2017, 2, 30),
        startDate: new Date(2015, 3, 1),
        location: "Hyderabad, Telangana, India",
        responsibilities: [
          "Designed and built the report builder capabilities that could export pages on the platform into PDF, Excel and Word documents for the **CapitalIQ Pro** platform from scratch",
          "Built to scale on the AWS cloud using AWS Lambda and EKS to host services",
        ]
      },
      {
        title: "Senior Software Developer, Integrated Desktop Solutions",
        company: "S&P Global Market Intelligence",
        isCurrentJob: false,
        endDate: new Date(2015, 2, 28),
        startDate: new Date(2014, 3, 1),
        location: "Hyderabad, Telangana, India",
        responsibilities: [
          "Critical part of the development team that built and enhanced the core services on the **CapitalIQ** platform",
          "Built out various business critical solutions on the platform around a variety of datasets in the financial data domain",
          "Worked on resolving bottlenecks on the legacy platform by providing solutions that were effective and efficient spanning the entire stack from UI to databases",
        ]
      },
      {
        title: "Software Developer, Integrated Desktop Solutions",
        company: "S&P Global Market Intelligence",
        isCurrentJob: false,
        endDate: new Date(2014, 2, 28),
        startDate: new Date(2013, 2, 22),
        location: "Hyderabad, India",
        responsibilities: [
          "Critical part of the development team that rearchitected the financial audit functionality called Click Throughs on the **CapitalIQ** platform",
          "Was responsible for resolving over 100 bugs with the redesign of the system that was too difficult to fix without the massive refactor undertaken",
          "Worked on every part of the system from database to the middletier and to the UI",
        ]
      },
      {
        title: "Software Developer, Mosaic Platform",
        company: "Flagstone Reinsurance",
        isCurrentJob: false,
        endDate: new Date(2013, 1, 28),
        startDate: new Date(2010, 8, 15),
        location: "Halifax, Nova Scotia, Canada | Hyderabad, India",
        responsibilities: [
          "Contributed as a key developer in multiple products on the Mosaic platform - an inhouse exposure analyzer and risk management platform",
          "Worked on the requirements gathering, design and development of the SDLC delivering business critical systems that were used to determine the risk based on the potential underwriting opportunities and risk management based on the existing portfolio",
          "Actively developed on **ASP.NET and Javascript UI**, **SQL Server**, **Microsoft Business Intelligence including SSIS, SSRS and SSAS**",
        ]
      },
      {
        title: "Systems Engineer",
        company: "Infosys Limited",
        isCurrentJob: false,
        endDate: new Date(2010, 8, 8),
        startDate: new Date(2009, 5, 8),
        location: "Chandigarh, India | Mysore, India",
        responsibilities: [
          "Specialized in Microsoft Sharepoint development and worked on multiple projects in the space",
          "Rated with a perfect 5.0 CGPA during the training and onboarding process excelling at every generic and specialization module as part of the",
          "Actively developed on **ASP.NET and Javascript UI**, **SQL Server**, **Microsoft Business Intelligence including SSIS, SSRS and SSAS**",
        ]
      },
    ],
    education: [
      {
        degree: "Bachelors of Technology, Computer Science and Information Technology",
        institute: "Aurora's Technological Research Institute, JNTU",
        score: "First Class with Distinction (70.2%)",
        startDate: new Date(2005, 8, 1),
        endDate: new Date(2009, 4, 15),
      }
    ],
    languages: [
      { name: "English", fluency: "native" },
      { name: "Hindi", fluency: "expert" },
      { name: "Telugu", fluency: "advanced" },
    ],
    skillGroups: [
      {
        groupName: "Frontend",
        skills: [
          { title: "React", rating: "expert" },
          { title: "Typescript", rating: "expert" },
          { title: "Javascript", rating: "expert" },
          { title: "MaterialUI", rating: "expert" },
          { title: "Redux", rating: "expert" },
          { title: "CSS", rating: "intermediate" },
          { title: "Durandal", rating: "intermediate" },
          { title: "AWS Cloudfront", rating: "intermediate" },
        ]
      },
      {
        groupName: "Middletier",
        skills: [
          { title: "Java", rating: "expert" },
          { title: ".NET", rating: "expert" },
          { title: "Python", rating: "advanced" },
          { title: "Spark", rating: "advanced" },
          { title: "NodeJS", rating: "advanced" },
          { title: "REST API", rating: "expert" },
          { title: "gRPC", rating: "intermediate" },
          { title: "AWS Lambda", rating: "intermediate" },
        ]
      },
      {
        groupName: "Data tier",
        skills: [
          { title: "SQL Server", rating: "expert" },
          { title: "Elasticsearch", rating: "expert" },
          { title: "Apache Solr", rating: "expert" },
          { title: "Delta Lake", rating: "advanced" },
          { title: "Kafka", rating: "intermediate" },
          { title: "DynamoDB", rating: "intermediate" },
        ]
      },
      {
        groupName: "DevOps",
        skills:[
          { title: "Kubernetes", rating: "advanced" },
          { title: "Azure Pipelines", rating: "advanced" },
          { title: "AWS Cloudwatch Dashboards", rating: "intermediate"},
          { title: "Docker", rating: "beginner" },
        ]
      }
    ],
  }
);