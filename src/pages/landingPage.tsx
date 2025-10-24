import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";



function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      {/* Features Section */}
      <section className="max-w-1440 mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2 text-primary">Track Easily</h3>
          <p>Monitor ticket statuses effortlessly with real-time updates and intuitive visuals.</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2 text-primary">Collaborate</h3>
          <p>Manage and resolve tickets together with your team using a simple interface.</p>
        </div>
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-2 text-primary">Analyze</h3>
          <p>Gain insights into performance with clear summaries and ticket analytics.</p>
        </div>
      </section>
        {/* Call to Action Section */}
      <Footer />
    </div>
  );
}

export default LandingPage;