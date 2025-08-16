import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mgvzppdb");

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Status Message */}
              {state.succeeded ? (
                <div id="form-status" className="p-3 mb-5 bg-green-900/20 border border-green-800 rounded-lg text-green-400 text-sm">
                  Thank you! Your message has been sent.
                </div>
              ) : null}

              {/* Name Field */}
              <div className="mb-5">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-400"
                />
              </div>

              {/* Service Dropdown */}
              <div className="mb-5">
                <label htmlFor="service" className="block text-sm font-medium mb-2 text-gray-300">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="AI Consulting">AI Consulting</option>
                  <option value="RAG Chatbots">RAG Chatbots</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-white transition-colors flex items-center justify-center"
              >
                <span>Send Message</span>
                <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-900/20 p-2 rounded-lg mr-4">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">Email Us</h4>
                  <a href="mailto:info@gvprime.com" className="text-blue-400 hover:underline">info@gvprime.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-900/20 p-2 rounded-lg mr-4">
                  <MapPin className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">Our Office</h4>
                  <p className="text-gray-400">3rd Floor, Dona Victoria Bldg<br />San Juan, Noveleta, Cavite</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-900/20 p-2 rounded-lg mr-4">
                  <Clock className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-300">Working Hours</h4>
                  <p className="text-gray-400">Monday - Friday<br />9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}