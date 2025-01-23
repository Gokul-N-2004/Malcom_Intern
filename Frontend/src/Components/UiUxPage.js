function UiUxPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-5xl mb-16">
          <span className="text-pink-500">Ui/ux</span> designer
        </h1>

        <div className="bg-[#111111] rounded-lg p-8 space-y-8">
          <section>
            <h2 className="text-pink-500 text-xl mb-2">Tools:</h2>
            <p>Proficient in Figma, Sketch, Adobe XD.</p>
          </section>

          <section>
            <h2 className="text-pink-500 text-xl mb-2">Skills:</h2>
            <p>
              Expertise in wireframing, prototyping, user flows, and
              user-centered design.
            </p>
          </section>

          <section>
            <h2 className="text-pink-500 text-xl mb-2">Collaboration:</h2>
            <p>Ability to work closely with developers and product teams.</p>
          </section>

          <section>
            <h2 className="text-pink-500 text-xl mb-2">Portfolio:</h2>
            <p>
              Must showcase diverse, impactful design projects and hands-on
              experience.
            </p>
          </section>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-200 transition-colors">
            Apply Now
          </button>
          <button className="text-white hover:text-gray-300 transition-colors">
            Back
          </button>
        </div>
      </main>
    </div>
  );
}

export default UiUxPage;
