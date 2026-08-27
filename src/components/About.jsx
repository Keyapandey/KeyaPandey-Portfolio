function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-[#092328] px-12 py-28 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className="flex items-center h-full">
            <h1
              className="text-7xl font-bold text-[#8BBB92]"
              style={{ fontFamily: "serif" }}
            >
              About Me
            </h1>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-[#F2F4F1]/80 text-xl leading-[1.8] font-light max-w-2xl">
              I'm someone who gets genuinely excited about how things work —
              whether it's a well-designed app, a tricky algorithm, or a good
              cup of coffee.

              I enjoy exploring different areas of development, not because I
              have to, but because figuring things out feels deeply satisfying
              to me.

              I like building things that feel intuitive and purposeful, and
              I'm always looking for the next problem worth solving.
            </p>
          </div>

        </div>

        {/* LINE */}
        <div className="w-full h-[1px] bg-[#8BBB92]/20 my-10"></div>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <div className="bg-[#12544F]/40 rounded-3xl p-8 border-t-4 border-[#2A835F] hover:-translate-y-2 transition duration-300">
            <h2 className="text-[#F2F4F1] text-3xl font-semibold mb-4">
              Frontend
            </h2>

            <p className="text-[#AFC0BC] text-lg leading-relaxed">
              React, Tailwind,
              responsive UI
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#12544F]/40 rounded-3xl p-8 border-t-4 border-[#2A835F] hover:-translate-y-2 transition duration-300">
            <h2 className="text-[#F2F4F1] text-3xl font-semibold mb-4">
              Android
            </h2>

            <p className="text-[#AFC0BC] text-lg leading-relaxed">
              Mobile app development
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#12544F]/40 rounded-3xl p-8 border-t-4 border-[#2A835F] hover:-translate-y-2 transition duration-300">
            <h2 className="text-[#F2F4F1] text-3xl font-semibold mb-4">
              Problem Solving
            </h2>

            <p className="text-[#AFC0BC] text-lg leading-relaxed">
              DSA & logic building
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-[#12544F]/40 rounded-3xl p-8 border-t-4 border-[#2A835F] hover:-translate-y-2 transition duration-300">
            <h2 className="text-[#F2F4F1] text-3xl font-semibold mb-4">
              UI / UX
            </h2>

            <p className="text-[#AFC0BC] text-lg leading-relaxed">
              Minimal, aesthetic design
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;