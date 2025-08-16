import { Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Message</label>
                <textarea 
                  rows="4"
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-900/20 p-2 rounded-lg mr-4">
                  <Mail className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium">Email Us</h4>
                  <a href="mailto:info@gvprime.com" className="text-blue-400 hover:underline">info@gvprime.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-900/20 p-2 rounded-lg mr-4">
                  <MapPin className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium">Our Office</h4>
                  <p className="text-gray-400">3rd Floor, Dona Victoria Bldg<br />San Juan, Noveleta, Cavite</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-900/20 p-2 rounded-lg mr-4">
                  <Clock className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="text-gray-400">Monday - Friday<br />9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}