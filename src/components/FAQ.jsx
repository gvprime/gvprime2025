import { useState } from 'react';
import { 
  ChevronDown, 
  MessageSquare, 
  Bot, 
  Check, 
  Database, 
  Shield, 
  TrendingUp,
  Users,
  Cloud,
  Lock,
  UserCheck,
  EyeOff,
  Activity,
  Scale,
  HeartPulse,
  ShieldCheck,
  CreditCard,
  Zap,
  Layers,
  Network,
  RefreshCw,
  GitMerge,
  Slack,
  Repeat
} from 'lucide-react';

export default function FAQ() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Answers to common questions about our AI services and solutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* RAG Chatbot FAQs */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center text-cyan-300">
              <MessageSquare className="mr-2 w-5 h-5" />
              RAG Chatbot Questions
            </h3>
            
            <div className="space-y-4">
              {/* Question 1 */}
              <div className="bg-[rgba(30,41,59,0.6)] rounded-lg overflow-hidden border border-[rgba(100,116,139,0.2)]">
                <button 
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-[rgba(30,41,59,0.8)] transition-colors"
                  onClick={() => toggleItem('rag1')}
                >
                  <h4 className="font-medium">What makes RAG chatbots different from regular chatbots?</h4>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeItem === 'rag1' ? 'rotate-180' : ''}`} />
                </button>
                {activeItem === 'rag1' && (
                  <div className="p-5 pt-0">
                    <p className="text-gray-300">RAG (Retrieval-Augmented Generation) chatbots combine the best of retrieval-based and generative AI. They first retrieve relevant information from your knowledge base, then generate responses using that context. This results in more accurate, up-to-date answers compared to standard chatbots that rely solely on their training data.</p>
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="bg-[rgba(30,41,59,0.6)] rounded-lg overflow-hidden border border-[rgba(100,116,139,0.2)]">
                <button 
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-[rgba(30,41,59,0.8)] transition-colors"
                  onClick={() => toggleItem('rag2')}
                >
                  <h4 className="font-medium">How long does it take to implement a custom RAG solution?</h4>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeItem === 'rag2' ? 'rotate-180' : ''}`} />
                </button>
                {activeItem === 'rag2' && (
                  <div className="p-5 pt-0">
                    <p className="text-gray-300">Implementation timelines vary based on complexity, but most projects follow this schedule:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                      <li>2-4 weeks for initial setup and data integration</li>
                      <li>1-2 weeks for model fine-tuning</li>
                      <li>2 weeks for testing and refinement</li>
                    </ul>
                    <p className="mt-2 text-gray-300">We can provide a precise timeline after our initial consultation.</p>
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="bg-[rgba(30,41,59,0.6)] rounded-lg overflow-hidden border border-[rgba(100,116,139,0.2)]">
                <button 
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-[rgba(30,41,59,0.8)] transition-colors"
                  onClick={() => toggleItem('rag3')}
                >
                  <h4 className="font-medium">What types of data can the RAG chatbot use?</h4>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeItem === 'rag3' ? 'rotate-180' : ''}`} />
                </button>
                {activeItem === 'rag3' && (
                  <div className="p-5 pt-0">
                    <p className="text-gray-300">Our RAG chatbots can work with various data formats including:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="flex items-start">
                        <Database className="text-blue-400 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
                        <span className="text-gray-300">PDFs and Word documents</span>
                      </div>
                      <div className="flex items-start">
                        <Shield className="text-blue-400 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
                        <span className="text-gray-300">Databases and spreadsheets</span>
                      </div>
                      <div className="flex items-start">
                        <TrendingUp className="text-blue-400 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
                        <span className="text-gray-300">Web pages and knowledge bases</span>
                      </div>
                      <div className="flex items-start">
                        <Users className="text-blue-400 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
                        <span className="text-gray-300">Chat logs and support tickets</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="bg-[rgba(30,41,59,0.6)] rounded-lg overflow-hidden border border-[rgba(100,116,139,0.2)]">
                <button 
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-[rgba(30,41,59,0.8)] transition-colors"
                  onClick={() => toggleItem('rag4')}
                >
                  <h4 className="font-medium">Can the chatbot integrate with our existing platforms?</h4>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeItem === 'rag4' ? 'rotate-180' : ''}`} />
                </button>
                {activeItem === 'rag4' && (
                  <div className="p-5 pt-0">
                    <p className="text-gray-300">Yes, we specialize in seamless integrations with:</p>
                    <div className="mt-3 space-y-3">
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <Slack className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">Communication Tools</h5>
                          <p className="text-sm text-gray-400">Slack, Microsoft Teams, Discord</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <ShieldCheck className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">CRM Systems</h5>
                          <p className="text-sm text-gray-400">Salesforce, HubSpot, Zendesk</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <Cloud className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">Cloud Storage</h5>
                          <p className="text-sm text-gray-400">Google Drive, Dropbox, SharePoint</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Question 5 */}
              <div className="bg-[rgba(30,41,59,0.6)] rounded-lg overflow-hidden border border-[rgba(100,116,139,0.2)]">
                <button 
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-[rgba(30,41,59,0.8)] transition-colors"
                  onClick={() => toggleItem('rag5')}
                >
                  <h4 className="font-medium">How do you handle data security and privacy?</h4>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeItem === 'rag5' ? 'rotate-180' : ''}`} />
                </button>
                {activeItem === 'rag5' && (
                  <div className="p-5 pt-0">
                    <p className="text-gray-300">We implement multiple security measures:</p>
                    <div className="mt-3 space-y-3">
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <Lock className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">Encryption</h5>
                          <p className="text-sm text-gray-400">All data is encrypted both in transit and at rest</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <UserCheck className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">Access Control</h5>
                          <p className="text-sm text-gray-400">Role-based permissions with multi-factor authentication</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <Shield className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">Compliance</h5>
                          <p className="text-sm text-gray-400">GDPR, HIPAA, and SOC 2 compliant solutions available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* AI Agent FAQs */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center text-purple-300">
              <Bot className="mr-2 w-5 h-5" />
              AI Agent Questions
            </h3>
            
            <div className="space-y-4">
              {/* Question 1 */}
              <div className="bg-[rgba(30,41,59,0.6)] rounded-lg overflow-hidden border border-[rgba(100,116,139,0.2)]">
                <button 
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-[rgba(30,41,59,0.8)] transition-colors"
                  onClick={() => toggleItem('agent1')}
                >
                  <h4 className="font-medium">What business processes can AI agents automate?</h4>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeItem === 'agent1' ? 'rotate-180' : ''}`} />
                </button>
                {activeItem === 'agent1' && (
                  <div className="p-5 pt-0">
                    <p className="text-gray-300">Our AI agents can automate a wide range of processes including:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                      <div className="flex items-start">
                        <Check className="text-green-400 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
                        <span className="text-gray-300">Customer support ticket routing</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="text-green-400 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
                        <span className="text-gray-300">Data processing workflows</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="text-green-400 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
                        <span className="text-gray-300">Inventory management</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="text-green-400 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
                        <span className="text-gray-300">Report generation</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="text-green-400 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
                        <span className="text-gray-300">Data analysis and insights</span>
                      </div>
                      <div className="flex items-start">
                        <Check className="text-green-400 mt-1 mr-2 flex-shrink-0 w-4 h-4" />
                        <span className="text-gray-300">Scheduling and calendar management</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Question 2 */}
              <div className="bg-[rgba(30,41,59,0.6)] rounded-lg overflow-hidden border border-[rgba(100,116,139,0.2)]">
                <button 
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-[rgba(30,41,59,0.8)] transition-colors"
                  onClick={() => toggleItem('agent2')}
                >
                  <h4 className="font-medium">How do you ensure our data remains secure?</h4>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeItem === 'agent2' ? 'rotate-180' : ''}`} />
                </button>
                {activeItem === 'agent2' && (
                  <div className="p-5 pt-0">
                    <p className="text-gray-300">Security is our top priority. We implement multiple layers of protection:</p>
                    <div className="mt-3 space-y-3">
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <Lock className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">Encryption</h5>
                          <p className="text-sm text-gray-400">All data encrypted in transit and at rest</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <Shield className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">Access Controls</h5>
                          <p className="text-sm text-gray-400">Role-based permissions and multi-factor authentication</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <EyeOff className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">Data Isolation</h5>
                          <p className="text-sm text-gray-400">Dedicated environments for each client</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <Activity className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">Monitoring</h5>
                          <p className="text-sm text-gray-400">24/7 security monitoring and alerting</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Question 3 */}
              <div className="bg-[rgba(30,41,59,0.6)] rounded-lg overflow-hidden border border-[rgba(100,116,139,0.2)]">
                <button 
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-[rgba(30,41,59,0.8)] transition-colors"
                  onClick={() => toggleItem('agent3')}
                >
                  <h4 className="font-medium">Can AI agents work with our existing APIs?</h4>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeItem === 'agent3' ? 'rotate-180' : ''}`} />
                </button>
                {activeItem === 'agent3' && (
                  <div className="p-5 pt-0">
                    <p className="text-gray-300">Yes, our AI agents are designed to integrate with:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                      <li>REST APIs</li>
                      <li>GraphQL endpoints</li>
                      <li>SOAP services</li>
                      <li>Webhooks</li>
                      <li>Database connections</li>
                    </ul>
                    <p className="mt-2 text-gray-300">We'll work with your technical team to ensure seamless integration with your existing infrastructure.</p>
                  </div>
                )}
              </div>

              {/* Question 4 */}
              <div className="bg-[rgba(30,41,59,0.6)] rounded-lg overflow-hidden border border-[rgba(100,116,139,0.2)]">
                <button 
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-[rgba(30,41,59,0.8)] transition-colors"
                  onClick={() => toggleItem('agent4')}
                >
                  <h4 className="font-medium">How do you handle compliance requirements?</h4>
                  <ChevronDown className={`w-5 h-5 transition-transform ${activeItem === 'agent4' ? 'rotate-180' : ''}`} />
                </button>
                {activeItem === 'agent4' && (
                  <div className="p-5 pt-0">
                    <p className="text-gray-300">We adhere to strict compliance standards:</p>
                    <div className="mt-3 space-y-3">
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <Scale className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">GDPR</h5>
                          <p className="text-sm text-gray-400">Full compliance with EU data protection regulations</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <HeartPulse className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">HIPAA</h5>
                          <p className="text-sm text-gray-400">Solutions for healthcare data security</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <ShieldCheck className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">SOC 2</h5>
                          <p className="text-sm text-gray-400">Enterprise-grade security controls</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-900/30 rounded-lg p-2 mr-3 flex-shrink-0">
                          <CreditCard className="text-blue-300 w-4 h-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-200">PCI DSS</h5>
                          <p className="text-sm text-gray-400">Secure payment processing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}