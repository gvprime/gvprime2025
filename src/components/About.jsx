export default function About() {
  return (
    <section id="about" className="section py-20">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            About GV Prime
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-card-bg border border-slate-700 rounded-xl p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-1">
                <div className="bg-slate-900 rounded-lg p-4">
                  <img 
                    src="https://gvprime-assets-2025.s3.us-west-2.amazonaws.com/gvprime-Logo-Flat-2017.png" 
                    className="mx-auto w-40" 
                    alt="GV Prime Logo" 
                  />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">AI Innovation Partners</h3>
              <p className="text-gray-300 mb-4">
                At GV Prime, we combine deep technical expertise with business acumen to deliver transformative AI solutions.
              </p>
              <p className="text-gray-300">
                We take pride in our collaborative approach, working as an extension of your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}