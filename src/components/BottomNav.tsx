import Link from "next/link";

export const BottomNav = () => {
  return (
    <div className="z-10 mt-4 flex w-full flex-col items-center justify-center md:px-0">
      <form className="relative w-full max-w-lg">
        <div className="mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-2.5 pr-2 pl-6 backdrop-blur-lg transition-all focus-within:border-primary dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600 dark:focus-within:border-primary">
          <input
            placeholder="Ask me anything…"
            className="w-full border-none bg-transparent text-base text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
            type="text"
          />
          <button
            type="submit"
            disabled
            aria-label="Submit question"
            className="flex items-center justify-center rounded-full bg-primary p-2.5 text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>

      <div className="mt-4 flex w-full max-w-3xl flex-col justify-center gap-3 sm:flex-row sm:flex-wrap md:px-0">
        <button className="inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-border bg-white/30 p-4 text-sm font-medium shadow-none backdrop-blur-lg transition-colors hover:border-primary hover:bg-border/30 hover:text-accent-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:h-8 sm:w-32 sm:p-12 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
          <div className="flex items-center justify-center gap-3 text-gray-700 sm:flex-col sm:gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
              <line x1="9" x2="9.01" y1="9" y2="9" />
              <line x1="15" x2="15.01" y1="9" y2="9" />
            </svg>
            <span className="text-sm font-medium">Me</span>
          </div>
        </button>

        <Link
          href="/Projects"
          className="inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-border bg-white/30 p-4 text-sm font-medium shadow-none backdrop-blur-lg transition-colors hover:border-primary hover:bg-border/30 hover:text-accent-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:h-8 sm:w-32 sm:p-12 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
        >
          <div className="flex items-center justify-center gap-3 text-gray-700 sm:flex-col sm:gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>

            <span className="text-sm font-medium">Projects</span>
          </div>
        </Link>

        <button className="inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-border bg-white/30 p-4 text-sm font-medium shadow-none backdrop-blur-lg transition-colors hover:border-primary hover:bg-border/30 hover:text-accent-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:h-8 sm:w-32 sm:p-12 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
          <div className="flex items-center justify-center gap-3 text-gray-700 sm:flex-col sm:gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
            </svg>
            <span className="text-sm font-medium">Skills</span>
          </div>
        </button>

        <button className="inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-border bg-white/30 p-4 text-sm font-medium shadow-none backdrop-blur-lg transition-colors hover:border-primary hover:bg-border/30 hover:text-accent-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:h-8 sm:w-32 sm:p-12 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
          <div className="flex items-center justify-center gap-3 text-gray-700 sm:flex-col sm:gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <circle cx="10" cy="8" r="5" />
              <path d="M2 21a8 8 0 0 1 10.434-7.62" />
              <circle cx="18" cy="18" r="3" />
              <path d="m22 22-1.9-1.9" />
            </svg>
            <span className="text-sm font-medium">Contact</span>
          </div>
        </button>

        <button className="inline-flex h-14 w-full cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-border bg-white/30 p-4 text-sm font-medium shadow-none backdrop-blur-lg transition-colors hover:border-primary hover:bg-border/30 hover:text-accent-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:h-8 sm:w-32 sm:p-12 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
          <div className="flex items-center justify-center gap-3 text-gray-700 sm:flex-col sm:gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
              <path d="M14 2v5a1 1 0 0 0 1 1h5" />
              <path d="M10 9H8" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
            </svg>
            <span className="text-sm font-medium">Resume</span>
          </div>
        </button>
      </div>
    </div>
  );
};
