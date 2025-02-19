
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years of experience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Technical genius behind our innovation",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    },
    {
      name: "Mike Johnson",
      role: "Head of Design",
      bio: "Creating beautiful experiences",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-400">
          We're a team of passionate individuals dedicated to creating amazing experiences
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel p-8 rounded-xl mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            To revolutionize the way people work and create by providing cutting-edge solutions
            that empower teams to achieve their full potential. We believe in innovation,
            collaboration, and the power of technology to transform businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl text-center hover-scale"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-400 mb-2">{member.role}</p>
              <p className="text-gray-300 mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-panel p-8 rounded-xl text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-gray-400 mb-6">
            We're always looking for talented individuals to join our team
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-white text-background hover:bg-gray-200 transition-colors duration-200">
              View Careers
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-white/20 hover:bg-white/5 transition-colors duration-200"
            >
              <Github className="mr-2" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
