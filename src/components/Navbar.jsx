function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6">

      <div className="flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-3xl font-bold text-[#F2F4F1]">
          Portfolio
        </h1>

        {/* NAVBAR */}
        <div className="border border-[#2A835F]/40 rounded-full px-10 py-4 bg-[#092328]/70 backdrop-blur-md shadow-[0_0_25px_rgba(42,131,95,0.12)]">

          <ul className="flex gap-10 text-lg text-[#F2F4F1]">

            {["Home", "About", "Resume", "Projects", "Contact"].map((item) => (

              <li key={item}>

                <a
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-full transition duration-300 hover:text-[#8BBB92] hover:bg-[#12544F]/60 hover:shadow-[0_0_20px_rgba(42,131,95,0.25)]"
                >
                  {item}
                </a>

              </li>

            ))}

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;