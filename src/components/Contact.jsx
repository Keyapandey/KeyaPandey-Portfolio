function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#092328] flex items-center justify-center px-12 py-24"
    >
      <div className="max-w-5xl w-full text-center">

        {/* HEADING */}
        <h1 className="text-7xl font-bold text-[#8BBB92] mb-8">
          Let’s connect
        </h1>

        {/* TEXT */}
        <p className="text-[#AFC0BC] text-3xl leading-relaxed max-w-4xl mx-auto mb-16">
          Have a project, opportunity, or interesting idea?  
        </p>

        {/* EMAIL */}
        <a
          href="mailto:pandeykeya95@gmail.com"
          className="inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-[#12544F]/40 border border-[#2A835F]/50 text-[#8BBB92] text-2xl hover:bg-[#2A835F] hover:text-[#F2F4F1] hover:shadow-[0_0_25px_rgba(42,131,95,0.25)] transition-all duration-300"
        >
          pandeykeya95@gmail.com
        </a>

        {/* SOCIAL BUTTONS */}
        <div className="flex justify-center gap-8 mt-8">

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/keya-pandey-715b40347/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-2xl bg-[#12544F]/30 border border-[#8BBB92]/20 text-[#AFC0BC] text-2xl hover:border-[#2A835F] hover:text-[#8BBB92] hover:bg-[#12544F]/50 transition-all duration-300"
          >
            LinkedIn
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Keyapandey"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-2xl bg-[#12544F]/30 border border-[#8BBB92]/20 text-[#AFC0BC] text-2xl hover:border-[#2A835F] hover:text-[#8BBB92] hover:bg-[#12544F]/50 transition-all duration-300"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;