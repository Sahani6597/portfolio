import React from 'react'
import { FaCloud, FaTools, FaNetworkWired, FaCode, FaDatabase } from 'react-icons/fa'

function Tech() {
  const skillCategories = [
    {
      icon: <FaCloud className='text-2xl' />,
      title: "Cloud Platforms",
      skills: [
        "Microsoft Azure: App Service, AKS, ACR, Azure Storage, Application Gateway, Microsoft Entra ID, Virtual Network, Azure Monitor, Key Vault",
        "Amazon Web Services: EC2, S3, IAM, VPC, Lambda, CloudFormation, RDS, CloudWatch, Route 53"
      ],
      bgColor: "bg-gradient-to-br from-gray-700 to-gray-800"
    },
    {
      icon: <FaTools className='text-2xl' />,
      title: "DevOps Tools",
      skills: [
        "Containerization: Docker, Kubernetes, Helm, Podman",
        "CI/CD: GitHub Actions, Jenkins, GitLab CI, Azure DevOps",
        "Infrastructure as Code: Terraform, Ansible, CloudFormation",
        "Version Control: Git, GitHub, GitLab, Bitbucket"
      ],
      bgColor: "bg-gradient-to-br from-gray-600 to-gray-700"
    },
    {
      icon: <FaNetworkWired className='text-2xl' />,
      title: "Networking & Systems",
      skills: [
        "Network Protocols: TCP/IP, HTTP/HTTPS, DNS, DHCP, VPN, Load Balancing",
        "Operating Systems: Linux (Ubuntu, CentOS, RHEL), Windows Server",
        "Security: SSL/TLS, Firewalls, WAF, OAuth, JWT, System Hardening"
      ],
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900"
    },
    {
      icon: <FaCode className='text-2xl' />,
      title: "Programming & Scripting",
      skills: [
        "Languages: Python, JavaScript, TypeScript, Bash, PowerShell, Go",
        "Frameworks: Node.js, Express.js, FastAPI, Flask",
        "Build Tools: Maven, Gradle, npm, yarn, pip"
      ],
      bgColor: "bg-gradient-to-br from-gray-700 to-gray-800"
    },
    {
      icon: <FaCode className='text-2xl' />,
      title: "Web Development",
      skills: [
        "Frontend: React.js, Next.js, Vue.js, HTML5, CSS3, Tailwind CSS",
        "Backend: Node.js, Express.js, REST APIs, GraphQL",
        "Full Stack: MERN Stack, JAMstack"
      ],
      bgColor: "bg-gradient-to-br from-gray-600 to-gray-700"
    },
    {
      icon: <FaDatabase className='text-2xl' />,
      title: "Databases & Storage",
      skills: [
        "SQL: MySQL, PostgreSQL, SQL Server",
        "NoSQL: MongoDB, Redis, DynamoDB",
        "Data Tools: Elasticsearch, Kibana, Prometheus"
      ],
      bgColor: "bg-gradient-to-br from-gray-800 to-gray-900"
    }
  ]

  return (
    <>
      <h1 className='text-center text-white poppins-bold md:text-5xl text-4xl md:mt-16 mt-8 mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-10'>
        {skillCategories.map((category, index) => (
          <div className='glass rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-105 hover:-translate-y-2 relative group hover:shadow-gray-400/30' key={index}>
            {/* Enhanced geometric border with glow */}
            <div className='absolute inset-0 rounded-2xl border-2 border-gray-400/30 group-hover:border-gray-300/80 group-hover:shadow-lg group-hover:shadow-gray-400/20 transition-all duration-300'></div>
            <div className='absolute top-4 right-4 w-6 h-6 bg-gray-400/20 rotate-45 group-hover:bg-gray-300/60 group-hover:shadow-md group-hover:shadow-gray-300/50 transition-all duration-300'></div>
            <div className='absolute bottom-4 left-4 w-4 h-4 bg-gray-500/20 clip-triangle group-hover:bg-gray-400/60 group-hover:shadow-md group-hover:shadow-gray-400/50 transition-all duration-300'></div>
            {/* Subtle glow effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-gray-400/5 via-transparent to-gray-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl'></div>
            
            <div className={`${category.bgColor} py-6 px-6 flex items-center relative overflow-hidden group-hover:shadow-inner group-hover:shadow-gray-400/20`}>
              <div className='absolute inset-0 bg-gradient-to-r from-white/10 to-transparent group-hover:from-white/20 group-hover:to-gray-300/10 transition-all duration-300'></div>
              {/* Highlight accent */}
              <div className='absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <div className='relative z-10 text-gray-300 mr-4 group-hover:text-white transition-colors duration-300 group-hover:scale-110'>{category.icon}</div>
              <h2 className='relative z-10 text-2xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300'>{category.title}</h2>
              {/* Floating highlight */}
              <div className='absolute top-2 right-2 w-2 h-2 bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300'></div>
            </div>
            <div className='p-6 bg-white/5 relative'>
              {/* Highlight overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-gray-400/10 via-transparent to-gray-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
              
              <ul className='text-gray-200 space-y-4 relative z-10'>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className='text-sm leading-relaxed flex items-start group/item hover:bg-white/10 p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/20'>
                    <span className='text-gray-300 mr-3 mt-1 group-hover/item:text-white transition-colors duration-300'>▸</span>
                    <span className='group-hover/item:text-white transition-colors duration-300 font-medium'>{skill}</span>
                    {/* Subtle glow effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-lg'></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Tech