import { Eye, Download } from "lucide-react";

function Resume() {
  return (
    <div
      id="resume"
      className="min-h-screen bg-[#092328] px-12 py-28 flex items-center justify-center"
    >

      <div className="max-w-7xl w-full p-14">

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT SIDE */}
          <div>

            {/* HEADING */}
            <h1 className="text-6xl font-bold text-[#8BBB92] leading-tight">
              My Resume
            </h1>

            {/* TEXT */}
            <p className="mt-8 text-[#AFC0BC] text-2xl leading-relaxed max-w-xl">
              A full overview of my education, technical skills, and Projects. View it online or grab a copy below.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-6 mt-14">

              {/* VIEW */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl border border-[#2A835F]/60 text-[#F2F4F1] text-xl hover:bg-[#2A835F] hover:text-[#F2F4F1] transition duration-300"
              >
                <div className="flex items-center gap-3">
                  <Eye size={22} />

                  <span>
                    View
                  </span>
                </div>
              </a>

              {/* DOWNLOAD */}
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-2xl border border-[#2A835F]/60 text-[#F2F4F1] text-xl hover:bg-[#2A835F] hover:text-[#F2F4F1] transition duration-300"
              >
                <div className="flex items-center gap-3">
                  <Download size={22} />

                  <span>
                    Download
                  </span>
                </div>
              </a>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div>

            {/* SKILLS HEADING */}
            <h2 className="text-[#8BBB92] tracking-widest text-lg mb-8">
              TECHNICAL SKILLS
            </h2>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-2.5">

              {[
                "Python",
                "React",
                "C++",
                "JavaScript",
                "Android Studio",
                "Express",
                "Node.js",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-6 py-3 rounded-2xl border border-[#2A835F]/60 text-[#8BBB92] hover:bg-[#12544F]/60 transition duration-300"
                >
                  {skill}
                </div>
              ))}

            </div>


            {/* EDUCATION CARD */}
            <div className="mt-12 bg-[#12544F]/40 border border-[#8BBB92]/10 rounded-3xl p-10">

              <p className="text-[#AFC0BC] tracking-[0.25em] text-sm mb-6">
                EDUCATION
              </p>

              <h2 className="text-[#F2F4F1] text-3xl font-semibold">
                B.Tech — Computer Science
              </h2>

              <p className="text-[#AFC0BC] mt-3 text-xl">
                2024 – 2028 • MAKAUT
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Resume;