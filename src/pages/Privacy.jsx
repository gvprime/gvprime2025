import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <div className="bg-[#020617] text-[#e2e8f0] min-h-screen pt-16">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-[#f8fafc] to-[#06b6d4] bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-8">Last Updated: June 2023</p>
        
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-[rgba(30,41,59,0.6)] rounded-xl p-6 border border-[rgba(100,116,139,0.2)]">
            <p>At GV Prime AI Solutions ("we," "us," or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services.</p>
          </div>
          
          {/* Section 2 */}
          <div className="bg-[rgba(30,41,59,0.6)] rounded-xl p-6 border border-[rgba(100,116,139,0.2)]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#3b82f6]">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Personal Identification:</strong> Name, email address, phone number, job title</li>
              <li><strong>Business Information:</strong> Company name, industry, project details</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
              <li><strong>Usage Data:</strong> How you interact with our website and services</li>
              <li><strong>AI Training Data:</strong> For custom AI solutions, we may process data you provide for model training</li>
            </ul>
          </div>
          
          {/* Section 3 */}
          <div className="bg-[rgba(30,41,59,0.6)] rounded-xl p-6 border border-[rgba(100,116,139,0.2)]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#3b82f6]">2. How We Use Your Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div className="bg-[rgba(30,41,59,0.5)] p-5 rounded border-l-4 border-[#3b82f6]">
                <h3 className="text-base sm:text-lg font-semibold mb-2">Service Delivery</h3>
                <p className="text-xs sm:text-sm">To provide and improve our AI consulting services and solutions</p>
              </div>
              <div className="bg-[rgba(30,41,59,0.5)] p-5 rounded border-l-4 border-[#3b82f6]">
                <h3 className="text-base sm:text-lg font-semibold mb-2">Communication</h3>
                <p className="text-xs sm:text-sm">To respond to inquiries and provide project updates</p>
              </div>
              <div className="bg-[rgba(30,41,59,0.5)] p-5 rounded border-l-4 border-[#3b82f6]">
                <h3 className="text-base sm:text-lg font-semibold mb-2">AI Development</h3>
                <p className="text-xs sm:text-sm">To train and improve our AI models and algorithms</p>
              </div>
            </div>
          </div>
          
          {/* Section 4 */}
          <div className="bg-[rgba(30,41,59,0.6)] rounded-xl p-6 border border-[rgba(100,116,139,0.2)]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#3b82f6]">3. Data Protection</h2>
            <p>We implement industry-standard security measures including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication protocols</li>
              <li>Secure development practices for AI systems</li>
            </ul>
          </div>
          
          {/* Section 5 */}
          <div className="bg-[rgba(30,41,59,0.6)] rounded-xl p-6 border border-[rgba(100,116,139,0.2)]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#3b82f6]">4. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Access, correct, or delete your personal data</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent (where applicable)</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at <a href="mailto:privacy@gvprime.com" className="text-[#3b82f6] hover:underline">privacy@gvprime.com</a>.</p>
          </div>
          
          {/* Section 6 */}
          <div className="bg-[rgba(30,41,59,0.6)] rounded-xl p-6 border border-[rgba(100,116,139,0.2)]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#3b82f6]">5. Changes to This Policy</h2>
            <p>We may update this policy periodically. The updated version will be posted on our website with a new "Last Updated" date.</p>
          </div>
          
          {/* Section 7 */}
          <div className="bg-[rgba(30,41,59,0.6)] rounded-xl p-6 border border-[rgba(100,116,139,0.2)]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#3b82f6]">6. Contact Us</h2>
            <p>For privacy-related inquiries, please contact:</p>
            <address className="mt-4 not-italic">
              GV Prime AI Solutions<br />
              Data Protection Officer<br />
              <a href="mailto:privacy@gvprime.com" className="text-[#3b82f6] hover:underline">privacy@gvprime.com</a><br />
              3rd Flr. Dona Victoria Bldg San Juan 1 Noveleta<br />
              Cavite, 4105 Philippines
            </address>
          </div>
        </div>
      </main>

    </div>
  );
}