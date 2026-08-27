function BeyondCode() {
  return (
    <section
      id="beyond-code"
      className="min-h-screen bg-[#092328] px-12 py-28 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full">

        {/* HEADING */}
        <div className="mb-16">
          <p className="text-[#8BBB92] tracking-[0.3em] text-sm mb-4">
            OUTSIDE THE CODE
          </p>

          <h1
            className="text-7xl font-bold text-[#8BBB92]"
            style={{ fontFamily: "serif" }}
          >
            Beyond Code
          </h1>

          <p className="text-[#AFC0BC] text-xl mt-6 max-w-2xl leading-relaxed">
            Things I enjoy when I'm not coding.
          </p>
        </div>

        {/* HOBBIES */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#12544F]/40 border border-[#2A835F]/30 rounded-3xl p-8 hover:-translate-y-2 hover:border-[#2A835F] transition-all duration-300">
            <h2 className="text-[#F2F4F1] text-3xl font-semibold mb-4">
              Swimming
            </h2>

            <p className="text-[#AFC0BC] text-lg leading-relaxed">
              Enjoy Swimming as a way to stay active and unwind.
            </p>
          </div>

          <div className="bg-[#12544F]/40 border border-[#2A835F]/30 rounded-3xl p-8 hover:-translate-y-2 hover:border-[#2A835F] transition-all duration-300">
            <h2 className="text-[#F2F4F1] text-3xl font-semibold mb-4">
              Star gazing
            </h2>

            <p className="text-[#AFC0BC] text-lg leading-relaxed">
              Fascinated by the night sky and enjoy observing stars and constellations.
            </p>
          </div>

          <div className="bg-[#12544F]/40 border border-[#2A835F]/30 rounded-3xl p-8 hover:-translate-y-2 hover:border-[#2A835F] transition-all duration-300">
            <h2 className="text-[#F2F4F1] text-3xl font-semibold mb-4">
              Coffee Brewing
            </h2>

            <p className="text-[#AFC0BC] text-lg leading-relaxed">
              Enjoy experimenting with different brewing methods and making different coffees.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default BeyondCode;