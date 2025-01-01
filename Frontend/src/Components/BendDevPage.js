function BendDevPage() {
  const requirements = [
    {
      title: "Backend Languages:",
      skills: "Node.js, Python (Django/Flask), or Java (Spring Boot)",
    },
    {
      title: "Database Management:",
      skills: "MySQL, PostgreSQL, MongoDB, or Redis",
    },
    {
      title: "API Development:",
      skills: "RESTful APIs or GraphQL",
    },
    {
      title: "Authentication & Security:",
      skills: "OAuth, JWT, SSL/TLS encryption",
    },
    {
      title: "Cloud Platforms:",
      skills: "AWS, GCP, or Azure (Bonus: Docker, Kubernetes)",
    },
    {
      title: "Real-time Communication:",
      skills: "WebSocket programming",
    },
    {
      title: "Payment Integration:",
      skills: "Stripe, PayPal, or Razorpay",
    },
    {
      title: "Version Control & Collaboration:",
      skills: "Git, GitHub, or GitLab",
    },
    {
      title: "Problem Solving:",
      skills:
        "Handling concurrency, scalability, and microservices architecture",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-mono mb-12">
          <span className="text-pink-500">Backend</span> Developer
        </h1>

        <div className="bg-zinc-900 rounded-lg p-8 mb-8">
          {requirements.map((req, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-pink-500 mb-2">{req.title}</h2>
              <p className="text-gray-200">{req.skills}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button className="bg-white text-black px-8 py-2 rounded hover:bg-gray-200 transition-colors">
            Apply Now
          </button>
          <a href="#" className="text-gray-400 hover:text-white">
            Back
          </a>
        </div>
      </main>
    </div>
  );
}

export default BendDevPage;
