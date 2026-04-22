import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'hello@ben.dev';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 mb-32 relative z-10 flex flex-col items-center text-center" id="contact">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-neonBlue font-mono mb-4"
      >
        03. What's Next?
      </motion.p>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-white"
      >
        Get In Touch
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 max-w-xl mx-auto mb-10 text-lg"
      >
        Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you! My inbox is always open.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a 
          href={`mailto:${email}`}
          className="px-8 py-4 bg-neonBlue/10 hover:bg-neonBlue/20 text-neonBlue border border-neonBlue rounded-lg font-medium transition-colors flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>
        
        <button 
          onClick={handleCopy}
          className="px-6 py-4 glass-panel glass-panel-hover flex items-center gap-3 text-gray-300"
        >
          {copied ? <CheckCircle2 className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
          {copied ? 'Copied!' : email}
        </button>
      </motion.div>
    </section>
  );
};

export default ContactForm;
