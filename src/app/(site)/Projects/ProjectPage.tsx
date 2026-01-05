import React from "react";

export const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <div className="relative h-screen overflow-hidden">
        <div className="absolute top-6 right-8 z-50 flex flex-col-reverse items-center justify-center gap-1 md:flex-row">
          <div className="cursor-pointer rounded-2xl px-3 py-1.5 hover:bg-secondary/50">
            {/* icon */}
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
              className="h-8"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
        </div>

        {/* fixed top gradient header */}
        <div
          className="fixed left-0 right-0 top-0 z-40"
          style={{
            background:
              "linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.95) 30%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          <div className="pb-0 pt-6 transition-all duration-300 ease-in-out">
            <div className="flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full transition-all duration-300">
                <div className="relative cursor-pointer">
                  <img
                    alt="Avatar"
                    width={200}
                    height={200}
                    className="z-[100] h-full w-full rounded-3xl object-contain"
                    src="https://knspqvprnlziflcqinul.supabase.co/storage/v1/object/public/portfolio-assets/6d35181d-3f0b-4b87-b2aa-a20cd6075723/avatar/avatar_1766718270411.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* body */}
        <div className="container mx-auto flex h-full max-w-3xl flex-col">
          <div
            className="flex-1 overflow-y-auto px-2"
            style={{ paddingTop: 100 }}
          >
            <div className="pb-4">
              <div className="flex h-full w-full flex-col px-4">
                <div className="custom-scrollbar flex h-full w-full flex-col overflow-y-auto">
                  <div className="mb-4 w-full">
                    <div className="w-full overflow-hidden rounded-lg">
                      <div className="h-full w-full pt-8">
                        <h2 className="mx-auto max-w-7xl font-sans text-xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl">
                          My Projects
                        </h2>

                       
                      </div>
                    </div>
                  </div>

                  {/* chat message block نمونه */}
                  <div className="w-full">
                    <div className="w-full break-words whitespace-pre-wrap rounded-lg py-2 text-secondary-foreground">
                      <div className="prose w-full dark:prose-invert">
                        <p className="break-words whitespace-pre-wrap">
                          You can check out all my projects above! Each one
                          reflects my passion for UI engineering and showcases
                          different skills I've developed over the years.
                        </p>
                        <p className="break-words whitespace-pre-wrap">
                          Is there a specific project or technology you're
                          curious about?
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-4" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
