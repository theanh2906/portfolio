import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface SubProject {
  name: string;
  description: string;
}

interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  projects?: SubProject[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    date: "May 2023 – Present",
    title: "Software Engineer II",
    company: "OPSWAT Vietnam",
    description: "Working in the backend team within the Cyber Security domain to implement features for cloud management page. Define project templates and common utilities, propose system improvement ideas, and share knowledge with team members. Participate in CI/CD definition for automation testing and pipeline deployment using TeamCity.",
    skills: ["Spring Boot", "MongoDB", "Kafka Stream", "RabbitMQ", "Amazon SQS", "Redis", "ElasticSearch", "gRPC", "Electron", "Jenkins", "TeamCity"]
  },
  {
    date: "Nov 2021 – May 2023",
    title: "Project Lead",
    company: "Bosch Global Software Technology Vietnam",
    description: "Led a team of 4 to start a migration project from scratch. Collaborated with Indian customers to define optimal solutions while maintaining the existing system. Built project architecture and configured build & deployment pipelines.",
    skills: ["Spring Boot", "Angular", "Spring Security", "JWT", "LDAP", "Oracle", "Tomcat", "Jenkins"]
  },
  {
    date: "May 2020 – Oct 2021",
    title: "Backend Engineer",
    company: "FPT Software",
    description: "Worked across two client projects delivering backend solutions in API management and enterprise content management.",
    projects: [
      {
        name: "UnifiedPost  ·  May 2020 – Feb 2021",
        description: "Developed a console for monitoring and managing APIs using Spring Cloud Gateway and OAuth2."
      },
      {
        name: "R2Integration  ·  Feb 2021 – Oct 2021",
        description: "Developed web applications using Adobe Experience Management (AEM) with Java and Docker."
      }
    ],
    skills: ["Spring Boot", "Spring Cloud Gateway", "PostgreSQL", "Keycloak", "Redis", "OAuth2", "Maven", "AEM", "Java", "Docker"]
  }
];

const TimelineItem: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-12 pb-12 last:pb-0"
    >
      {/* Timeline indicator */}
      <div className="absolute -left-6 top-0 w-3 h-3 bg-neonBlue rounded-full">
        <div className="absolute -inset-2 rounded-full border border-neonBlue/50 animate-pulse" />
      </div>

      {/* Timeline item card */}
      <motion.div
        className="relative rounded-2xl glass-panel p-6 group overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(
              650px circle at center,
              rgba(0, 240, 255, 0.1),
              transparent 80%
            )`,
          }}
        />

        <div className="relative z-10">
          {/* Date and icon */}
          <div className="flex items-start justify-between mb-3">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
              {experience.date}
            </span>
            <Briefcase className="w-5 h-5 text-neonBlue/60" />
          </div>

          {/* Title and company */}
          <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
          <p className="text-sm font-semibold text-neonBlue mb-4 tracking-wide">
            {experience.company}
          </p>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Sub-projects */}
          {experience.projects && experience.projects.length > 0 && (
            <div className="mb-4 space-y-3">
              {experience.projects.map((project, pIdx) => (
                <div key={pIdx} className="pl-3 border-l-2 border-cyberPurple/40">
                  <p className="text-xs font-mono text-cyberPurple mb-1 tracking-wide">
                    {project.name}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Skills tags */}
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-mono text-neonBlue bg-neonBlue/10 rounded border border-neonBlue/20 hover:border-neonBlue/50 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 mb-32 relative z-10" id="experience">
      {/* Section heading */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4"
      >
        <span className="text-neonBlue font-mono text-2xl">03.</span>
        Experience Timeline
        <div className="h-px bg-white/10 flex-grow ml-4 max-w-sm" />
      </motion.h2>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-neonBlue/50 via-neonBlue/20 to-transparent" />

        {/* Timeline items */}
        <div className="space-y-2">
          {experiences.map((experience, idx) => (
            <TimelineItem key={idx} experience={experience} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
