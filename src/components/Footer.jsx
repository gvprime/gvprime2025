import { 
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#ai-consulting" className="hover:text-white transition-colors">AI Solutions</a></li>
              <li><a href="/#journey" className="hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="/cloud-services" className="hover:text-white transition-colors">Cloud Services</a></li>
              <li><a href="#ai-consulting" className="hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/whitepapers" className="hover:text-white transition-colors">Whitepapers</a></li>
              <li><a href="/webinars" className="hover:text-white transition-colors">Webinars</a></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-slate-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - With Privacy Link */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} GV Prime. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}