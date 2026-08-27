function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#092328] px-12 pt-28 pb-12 flex items-center"
    >
      <div className="max-w-7xl w-full mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* HELLO */}
            <p className="hello-animation text-[#8BBB92] tracking-[0.3em] text-sm mb-3">
              HELLO, I'M
            </p>

            {/* NAME */}
            <h1
  className="text-7xl md:text-8xl font-bold leading-[1.1]"
  style={{ fontFamily: "serif" }}
>
              <span className="name-animation keya-animation block text-[#F2F4F1]">
                Keya
              </span>

              <span className="name-animation pandey-animation block text-[#8BBB92]">
                Pandey.
              </span>
            </h1>

            {/* LINE */}
            <div className="w-32 h-[3px] bg-[#2A835F] mt-8 mb-7"></div>

            {/* DESCRIPTION */}
            <p className="text-[#F2F4F1]/75 text-lg leading-[1.7] max-w-2xl">
              A CSE undergraduate turning curiosity into code. I enjoy
              building things that feel intuitive, purposeful, and a little
              different — from responsive web interfaces to Android
              applications.
            </p>

          </div>


          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-[#2A835F]/20 blur-3xl scale-110"></div>

              <div className="relative w-[350px] h-[350px] rounded-full p-1 bg-[#2A835F]">

                <img
                  src="/Keya.png.png"
                  alt="Keya Pandey"
                  className="w-full h-full rounded-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;