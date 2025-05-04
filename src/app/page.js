"use client";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// ===== DATA =====
const projects = [
  {
    id: 1,
    title: "Akụkọ Nke Ndụ",
    description: "A cozy quote generator that displays inspirational quotes from books I've read.",
    image: "/images/akukonkendu.png",
    technologies: ["Java", "React js", "Springboot","MySQL"],
    github: "https://github.com/Luvjen11/Akuko-nke-Ndu",
    live: "https://akuko-nke-ndu.vercel.app",
     details: 'Akụkọ means "story," and Ndụ means "life", in Igbo language. Together, it translates to "The Story of Life"'
  },  
  {
    id: 2,
    title: "MovieMuse",
    description: "A movie library app to save movies and tv series I have watched",
    image: "/images/moviemuse1.png",
    technologies: ["Java", "Spring Boot", "MySQL", "React js"],
    github: "https://github.com/Luvjen11/moviemuse",
    live: "https://moviemusee.vercel.app",
    details: "MovieMuse lets users add reviews to movies. I can save favorites, add movies and categories"
  } 
  // {
  //   id: 3,
  //   title: "Task Management App",
  //   description: "A productivity app for managing tasks and projects",
  //   image: "/images/projects/taskapp.jpg",
  //   technologies: ["React", "Firebase", "Material UI"],
  //   github: "https://github.com/yourusername/taskapp",
  //   live: "https://yourtaskapp.com",
  //   details: "A task management application with features like task creation, categorization, due dates, and progress tracking."
  // }
];

const hobbies = [
  {
    id: 1,
    title: "Playing Flute",
    description: "Music has been part of my story since childhood",
    image: "/images/flute.jpg",
    details:
      "Playing the flute helps me find focus and peace between coding sessions. I've been playing for over 7 years and enjoy classical and contemporary pieces.",
  },
  {
    id: 2,
    title: "Crocheting",
    description: "Creating handmade items with yarn and a hook",
    image: "/images/crochet.jpg",
    details:
      "I find crocheting to be a meditative activity that allows me to create tangible items. I've made everything from flower bouquettes to amigurumi toys.",
  },
  {
    id: 3,
    title: "Illustrating",
    description: "Telling stories through colour, curves, and quotes",
    image: "/images/illustration.png",
    details:
    "I started digital illustration during lockdown, looking for a fun way to share motivational quotes that felt more *me*. What began as a side thing quickly became a way to express myself—mixing cute, clean visuals with meaningful messages. It&apos;s my way of turning thoughts into art people can feel.",
  },
  // {
  //   id: 3,
  //   title: "Learning Igbo",
  //   description: "Connecting with my heritage through language",
  //   image: "/images/hobbies/language.jpg",
  //   details: "I'm currently learning Igbo to connect with my cultural roots. It's a fascinating journey that has given me new perspectives on communication and identity."
  // }
];

const skills = [
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Java", "Springboot", "MySQL", "Firebase"] },
  { category: "Tools", items: ["Git", "VS Code", "Github", "CodePen"] }
];

const learningTopics = [
  {
    id: 1,
    title: "React Hooks",
    description: "Exploring the power of React's useState, useEffect, and custom hooks",
    resources: [
      { name: "React Docs", url: "https://reactjs.org/docs/hooks-intro.html" },
      { name: "Hooks Tutorial", url: "https://www.youtube.com/watch?v=dpw9EHDh2bM" }
    ]
  },
  {
    id: 2,
    title: "Next.js App Router",
    description: "Learning the new paradigms in Next.js 13+ with server components",
    resources: [
      { name: "Next.js Docs", url: "https://nextjs.org/docs" },
      { name: "App Router Tutorial", url: "https://nextjs.org/learn" }
    ]
  },
  {
    id: 3,
    title: "Building a Startup in Public",
    description: "Documenting the messy middle of launching SelfSaga",
    resources: [
      { name: "Indie Hackers", url: "https://www.indiehackers.com/" },
      { name: "Build in Public Mastery", url: "https://buildinpublic.xyz/" }
    ]
  },
  {
    id: 4,
    title: "Learning Igbo Language",
    description: "Connecting with my heritage through language learning",
    resources: [
      { name: "Igbo Language Course", url: "https://www.duolingo.com" },
      { name: "Cultural Context Videos", url: "https://www.youtube.com" }
    ]
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_2gbjkug",
        "template_dj1ii0w",
        formRef.current,
        "YyVxyDggWNVExyUU4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus({ loading: false, success: true, error: false });
          // Reset form
          formRef.current.reset();
          // Clear success message after 5 seconds
          setTimeout(() => {
            setFormStatus({ loading: false, success: false, error: false });
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setFormStatus({ loading: false, success: false, error: true });
        }
      );
  };

  return (
    <main className="bg-pink-50 text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-pink-100 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
            <Image src="/images/profile.png" alt="Profile" fill className="object-cover" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-pink-600">
            Crafting useful things for the web (and having fun while at it)
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            I&apos;m Jennifer Okeke — a full-stack developer with a soft spot for storytelling, culture, and side quests (both in code and in life). 
            I build digital things that feel personal, purposeful, and sometimes a little experimental.
          </p>

    
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/Luvjen11" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jennifer-okeke-24432130b/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="/Jennifer_Okeke_CV.pdf" download className="text-pink-500 hover:text-pink-700" title="Download my CV">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </a>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:space-x-4">
            <Link href="#about" className="text-pink-600 hover:text-pink-800 font-medium">About</Link>
            <Link href="#skills" className="text-pink-600 hover:text-pink-800 font-medium">Skills</Link>
            <Link href="#projects" className="text-pink-600 hover:text-pink-800 font-medium">Projects</Link>
            <Link href="#hobbies" className="text-pink-600 hover:text-pink-800 font-medium">Hobbies</Link>
            <Link href="#selfsaga" className="text-pink-600 hover:text-pink-800 font-medium">SelfSaga</Link>
            <Link href="#learning" className="text-pink-600 hover:text-pink-800 font-medium">Learning</Link>
            <Link href="#contact" className="text-pink-600 hover:text-pink-800 font-medium">Contact</Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="py-16 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-pink-400">Hi, I&apos;m Jennifer Okeke</h2>
          <p className="text-gray-300 mb-6">
            I&apos;m a full stack developer who enjoys building projects that feel good to use and make sense under the hood. 
            I like mixing logic with a bit of art—and I always leave room for learning.
          </p>
          <p className="text-gray-600">
            Outside the laptop life, I&apos;m usually journaling ideas I may or may not finish, learning Igbo, crocheting, or playing my flute (badly, but with feeling) or learning a new hobby.
          </p>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-pink-600">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillCategory, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-pink-600 border-b border-pink-200 pb-2">
                  {skillCategory.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, idx) => (
                    <span key={idx} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="py-16 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-pink-600">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-pink-700">{project.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="bg-pink-100 text-pink-800 px-2 py-0.5 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELFSAGA SECTION ===== */}
      <section id="selfsaga" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-pink-600">SelfSaga Startup</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-medium mb-4 text-pink-700">Building a Startup From Scratch</h3>
            
            <p className="text-gray-700 mb-6">
              SelfSaga is my little rebellion against the hustle-noise and endless scrolling. It&apos;s a platform 
              I&apos;m slowly crafting to help people track their personal growth in a way that feels human and fun.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                <h4 className="text-lg font-medium mb-2 text-pink-600">The Vision</h4>
                <p className="text-gray-600">
                  A digital space where self-growth doesn&apos;t feel like a chore. I want to make it easy for people  
                  to set goals, reflect, experiment, and grow—without the pressure to be perfect.
                </p>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                <h4 className="text-lg font-medium mb-2 text-pink-600">The Challenge</h4>
                <p className="text-gray-600">
                  Turning abstract things like healing, habits, and mindset into something you can actually use. 
                  Plus, learning to build all the tech from scratch as a solo dev.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* ===== HOBBIES SECTION ===== */}
            <section id="hobbies" className="py-16 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-pink-600">Not Just Code</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.id}
                whileHover={{ y: -5 }}
                className="bg-pink-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedHobby(hobby)}
              >
                <div className="relative h-48 w-full">
                  <Image src={hobby.image} alt={hobby.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-pink-700">{hobby.title}</h3>
                  <p className="text-gray-600 text-sm">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LEARNING SECTION ===== */}
      <section id="learning" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-pink-600">Learning Lab</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningTopics.slice(0, 4).map(topic => (
              <div key={topic.id} className="bg-pink-50 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2 text-pink-700">{topic.title}</h3>
                <p className="text-gray-600 mb-3 text-sm">{topic.description}</p>
                <div className="flex flex-wrap gap-2">
                  {topic.resources.map((resource, index) => (
                    <a 
                      key={index}
                      href={resource.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs bg-white text-pink-600 px-2 py-1 rounded-full hover:bg-pink-100"
                    >
                      {resource.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-16 px-4 bg-pink-100">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-pink-600">Let&apos;s Connect</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="user_name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <input 
                  type="email" 
                  name="user_email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <textarea 
                name="message"
                placeholder="Message"
                rows="4" 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
              <button 
                type="submit" 
                disabled={formStatus.loading}
                className={`bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors ${formStatus.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {formStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus.success && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
                  Thank you for your message! I&apos;ll get back to you soon.
                </div>
              )}
              
              {formStatus.error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ===== MODALS ===== */}
      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-2 md:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-pink-700">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="relative h-48 md:h-64 w-full mb-4">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover rounded-lg" />
              </div>
              
              <p className="text-gray-700 mb-4 text-sm md:text-base">{selectedProject.details}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map(tech => (
                  <span key={tech} className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-600 text-white px-3 md:px-4 py-2 rounded-md hover:bg-pink-700 transition-colors text-sm md:text-base"
                >
                  GitHub
                </a>
                <a 
                  href={selectedProject.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-500 text-white px-3 md:px-4 py-2 rounded-md hover:bg-pink-600 transition-colors text-sm md:text-base"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hobby Modal */}
      {selectedHobby && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-2 md:p-4"
          onClick={() => setSelectedHobby(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl md:text-2xl font-semibold text-pink-700">{selectedHobby.title}</h3>
                <button onClick={() => setSelectedHobby(null)} className="p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              
              <div className="relative h-48 md:h-64 w-full mb-4">
                <Image src={selectedHobby.image} alt={selectedHobby.title} fill className="object-cover rounded-lg" />
              </div>
              
              <p className="text-gray-700 text-sm md:text-base">{selectedHobby.details}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}