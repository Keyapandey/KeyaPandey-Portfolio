import { ExternalLink } from "lucide-react";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen px-12 py-24 bg-[#092328] text-[#F2F4F1]"
    >

      {/* HEADING */}
      <h1 className="text-6xl font-bold text-[#8BBB92] mb-4">
        Projects.
      </h1>

      <p className="text-[#AFC0BC] text-2xl mb-16">
        Things I've built — from mobile apps to websites.
      </p>

      <div className="space-y-8">

        {/* PROJECT 1 */}
        <div className="bg-[#12544F]/25 rounded-3xl p-7 flex items-center justify-between border border-[#8BBB92]/10 hover:border-[#2A835F]/50 transition-all duration-300">

          <div className="flex gap-10 items-start">

            <h1 className="text-6xl font-bold text-[#2A835F]/50">
              01
            </h1>

            <div>

              <h2 className="text-3xl font-bold mb-3">
                SkillDeal
              </h2>

              <p className="text-[#AFC0BC] text-lg max-w-3xl leading-relaxed mb-5">
                A platform where students exchange skills without money through skill-based matching,
                 requests, messaging, profiles, and gamified XP/achievements.
                 Built with React, Node.js, Express, Prisma, PostgreSQL, and JWT.
              </p>

              <div className="flex gap-4 flex-wrap">

                <span className="px-5 py-2 rounded-xl border border-[#2A835F]/60 text-[#8BBB92]">
                  Node.js
                </span>

                <span className="px-5 py-2 rounded-xl border border-[#2A835F]/60 text-[#8BBB92]">
                  Express
                </span>

                <span className="px-5 py-2 rounded-xl border border-[#2A835F]/60 text-[#8BBB92]">
                  React
                </span>

                <span className="px-5 py-2 rounded-xl border border-[#2A835F]/60 text-[#8BBB92]">
                  PostgreSQL
                </span>

              </div>

            </div>

          </div>

            <a
  href="https://github.com/Keyapandey/SkillDeal"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-[#2A835F]/60 px-8 py-4 rounded-2xl flex items-center gap-3 text-2xl hover:bg-[#2A835F] hover:text-[#F2F4F1] transition-all duration-300"
>
  <ExternalLink size={24} />
  View
</a>

          

        </div>


        {/* PROJECT 2 */}
        <div className="bg-[#12544F]/25 rounded-3xl p-7 flex items-center justify-between border border-[#8BBB92]/10 hover:border-[#2A835F]/50 transition-all duration-300">

          <div className="flex gap-10 items-start">

            <h1 className="text-6xl font-bold text-[#2A835F]/50">
              02
            </h1>

            <div>

              <h2 className="text-3xl font-bold mb-3">
                Ace it
              </h2>

              <p className="text-[#AFC0BC] text-lg max-w-3xl leading-relaxed mb-5">
                A productivity-focused Android app featuring mood-based theme
                changes, grouped task management, Pomodoro timer, streak system,
                and smart work reports to track consistency and productivity.
              </p>

              <div className="flex gap-4 flex-wrap">

                <span className="px-5 py-2 rounded-xl border border-[#2A835F]/60 text-[#8BBB92]">
                  XML
                </span>

                <span className="px-5 py-2 rounded-xl border border-[#2A835F]/60 text-[#8BBB92]">
                  Java
                </span>

                <span className="px-5 py-2 rounded-xl border border-[#2A835F]/60 text-[#8BBB92]">
                  Android Studio
                </span>

              </div>

            </div>

          </div>

          <a
  href="https://github.com/Keyapandey/Productivity__App"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-[#2A835F]/60 px-8 py-4 rounded-2xl flex items-center gap-3 text-2xl hover:bg-[#2A835F] hover:text-[#F2F4F1] transition-all duration-300"
>
  <ExternalLink size={24} />
  View
</a>

        </div>


        {/* PROJECT 3 */}
        <div className="bg-[#12544F]/25 rounded-3xl p-7 flex items-center justify-between border border-[#8BBB92]/10 hover:border-[#2A835F]/50 transition-all duration-300">

          <div className="flex gap-10 items-start">

            <h1 className="text-6xl font-bold text-[#2A835F]/50">
              03
            </h1>

            <div>

              <h2 className="text-3xl font-bold mb-3">
                Lunaraa
              </h2>

              <p className="text-[#AFC0BC] text-lg max-w-3xl leading-relaxed mb-5">
                A modern candle business website showcasing aesthetic candle
                collections, product previews, and an easy browsing experience
                for users to explore and purchase handmade candles online.
              </p>

              <div className="flex gap-4 flex-wrap">

                

                <span className="px-5 py-2 rounded-xl border border-[#2A835F]/60 text-[#8BBB92]">
                  Ongoing
                </span>

                

              </div>

            </div>

          </div>


        </div>


        {/* MORE PROJECTS */}
        <div className="text-center pt-10">

          <p className="text-3xl text-[#AFC0BC]">
            More projects in work —
            <span className="text-[#8BBB92]">
              {" "}
              check back soon!
            </span>
          </p>

        </div>

      </div>

    </section>
  );
}

export default Projects;