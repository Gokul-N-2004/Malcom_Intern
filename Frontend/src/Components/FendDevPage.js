function FendDevPage() {
  const requirements = [
    {
      title: "Frontend Languages & Frameworks:",
      skills: "HTML5, CSS3, JavaScript, TypeScript",
    },
    {
      title: "Frameworks & Libraries:",
      skills: "React.js, Angular, or Vue.js",
    },
    {
      title: "UI/UX Design:",
      skills: "Figma or Adobe XD",
    },
    {
      title: "State Management:",
      skills: "Redux, Context API, or Vuex",
    },
    {
      title: "Version Control & Collaboration:",
      skills: "Git, GitHub, or GitLab",
    },
    {
      title: "Responsive Design:",
      skills: "CSS frameworks (Bootstrap, TailwindCSS)",
    },
    {
      title: "Testing Tools:",
      skills: "Jest, Mocha, or Cypress",
    },
    {
      title: "Browser Tools:",
      skills: "Chrome DevTools",
    },
    {
      title: "API Integration:",
      skills: "RESTful APIs and GraphQL",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <main className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-mono mb-12">
          <span className="text-pink-500">Frontend</span> Developer
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

export default FendDevPage;
