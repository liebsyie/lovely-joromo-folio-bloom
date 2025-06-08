
import { useState } from 'react';
import { Mail, Send, Download, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

declare global {
  interface Window {
    emailjs: any;
  }
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS
      window.emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with actual key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'nightyueliang@gmail.com'
      };

      await window.emailjs.send(
        'service_olx3ks3', // You'll need to replace this
        'template_gu9r3dg', // You'll need to replace this
        templateParams
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Lovely_Joromo_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    {
      name: 'Facebook (Personal)',
      url: 'https://www.facebook.com/lablliiii',
      icon: Facebook,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Facebook (Page)',
      url: 'https://www.facebook.com/61567310477700',
      icon: Facebook,
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lovely.cervioux',
      icon: Instagram,
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg">
            Let's connect and create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-500/20 rounded-lg">
                  <Mail className="text-teal-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-200">
                  Send me a message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-400 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-slate-900 font-semibold py-3 transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={20} />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Resume */}
          <div className="animate-slide-up delay-300 space-y-8">
            {/* Resume Download */}
            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Download className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-200">
                  Resume
                </h3>
              </div>
              <p className="text-slate-400 mb-6">
                Download my resume to learn more about my experience and skills.
              </p>
              <Button
                onClick={downloadResume}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-200 mb-6">
                Connect with me
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 text-slate-300 ${social.color}`}
                  >
                    <social.icon size={20} />
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
