import Link from "next/link";

export const QuestionBottom = () => {
  return (
    <div className="p-40 flex flex-col justify-center items-center gap-10">
      <div className="w-full">
        <div className="flex w-full flex-wrap gap-3 justify-center items-center">
       
          <Link href="/" className="block">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none hover:bg-accent hover:text-accent-foreground has-[>svg]:px-3 h-auto min-w-[100px] flex-shrink-0 rounded-xl border px-4 py-3 shadow-none backdrop-blur-sm transition-none border-gray-200 bg-gray-100"
            >
              <div className="flex items-center gap-3 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#329696"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-laugh"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"></path>
                  <line x1="9" x2="9.01" y1="9" y2="9"></line>
                  <line x1="15" x2="15.01" y1="9" y2="9"></line>
                </svg>
                <span className="text-sm font-medium">Me</span>
              </div>
            </button>
          </Link>

       
          <Link href="/Projects" className="block">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none hover:bg-accent hover:text-accent-foreground has-[>svg]:px-3 h-auto min-w-[100px] flex-shrink-0 rounded-xl border px-4 py-3 shadow-none backdrop-blur-sm transition-none border-gray-200 bg-gray-100"
            >
              <div className="flex items-center gap-3 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3E9858"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-briefcase-business"
                >
                  <path d="M12 12h.01"></path>
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                  <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
                <span className="text-sm font-medium">Projects</span>
              </div>
            </button>
          </Link>

   
          <Link href="/Skills" className="block">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none hover:bg-accent hover:text-accent-foreground has-[>svg]:px-3 h-auto min-w-[100px] flex-shrink-0 rounded-xl border px-4 py-3 shadow-none backdrop-blur-sm transition-none border-gray-200 bg-gray-100"
            >
              <div className="flex items-center gap-3 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#856ED9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layers"
                >
                  <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                  <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                  <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                </svg>
                <span className="text-sm font-medium">Skills</span>
              </div>
            </button>
          </Link>


          <Link href="/Resume" className="block">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none hover:bg-accent hover:text-accent-foreground has-[>svg]:px-3 h-auto min-w-[100px] flex-shrink-0 rounded-xl border px-4 py-3 shadow-none backdrop-blur-sm transition-none border-gray-200 bg-gray-100"
            >
              <div className="flex items-center gap-3 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B95F9D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-file-text"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
                <span className="text-sm font-medium">Resume</span>
              </div>
            </button>
          </Link>


          <Link href="/Contact" className="block">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none hover:bg-accent hover:text-accent-foreground has-[>svg]:px-3 h-auto min-w-[100px] flex-shrink-0 rounded-xl border px-4 py-3 shadow-none backdrop-blur-sm transition-none border-gray-200 bg-gray-100"
            >
              <div className="flex items-center gap-3 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C19433"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-round-search"
                >
                  <circle cx="10" cy="8" r="5"></circle>
                  <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                  <circle cx="18" cy="18" r="3"></circle>
                  <path d="m22 22-1.9-1.9"></path>
                </svg>
                <span className="text-sm font-medium">Contact</span>
              </div>
            </button>
          </Link>
        </div>
      </div>

    
      <div className="w-full flex justify-center">
        <form className="relative w-full max-w-lg">
          <div className="mx-auto flex items-center rounded-full border border-[#E5E5E9] bg-[#ECECF0] py-2 pr-2 pl-6">
            <input
              placeholder="Ask me anything…"
              className="text-md w-full border-none bg-transparent placeholder:text-gray-500 focus:outline-none font-medium"
              type="text"
            />
            <button
              type="submit"
              aria-label="Submit question"
              className="flex items-center justify-center rounded-full bg-[#0171E3] p-2 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right h-6 w-6"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};