// ContactPage
import React from "react";
import { Mail, Phone, MapPin } from "react-feather";
import SectionHeader from "../components/SectionHeader";
import ContactInfo from "../components/ContactInfo";
import SocialLink from "../components/SocialLink";
import Button from "../components/Button";
import { useForm } from "../hooks/useForm";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const ContactPage: React.FC = () => {
  const { formData, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Get In"
          subtitle="Ready to bring your ideas to life? Let's discuss your next project!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo
              icon={<Mail className="w-6 h-6 text-white" />}
              title="Email"
              info="oludoyeolumide@gmail.com"
            />
            <ContactInfo
              icon={<Phone className="w-6 h-6 text-white" />}
              title="Phone"
              info="08148678129"
            />
            <ContactInfo
              icon={<MapPin className="w-6 h-6 text-white" />}
              title="Location"
              info="Nigeria"
            />
            <div className="flex space-x-4 mt-8 text-white">
              <SocialLink
                icon={<SiGithub className="w-6 h-6" />}
                href="https://github.com/Oludoye17"
              />
              <SocialLink
                icon={<SiLinkedin className="w-6 h-6" />}
                href="https://www.linkedin.com/in/oludoye-olumide"
              />
              <SocialLink
                icon={<FaXTwitter className="w-6 h-6" />}
                href="https://x.com/OlumideOludoye"
              />
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 space-y-6 border border-gray-700">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>

            <Button variant="primary" onClick={handleSubmit}>
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
