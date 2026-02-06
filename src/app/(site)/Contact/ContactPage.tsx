export const ContactPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-3xl bg-accent px-6 py-8 sm:px-10 sm:py-12">
        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Contact Me
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">Mala Kalhor</p>
        </div>

        {/* Info */}
        <div className="space-y-5 text-sm sm:text-base">
          {/* Email */}
          <div className="flex items-center gap-3 break-all">
            <span className="text-muted-foreground">Email</span>
            <a
              href="mailto:Mahlakalhor82@gmail.com"
              className="text-blue-500 hover:underline"
            >
              Mahlakalhor82@gmail.com
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">Location</span>
            <span>Tehran</span>
          </div>

          {/* Socials */}
          <div className="pt-4 flex gap-6 justify-center sm:justify-start">
            <a
              href="https://linkedin.com/in/YOUR_ID"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/YOUR_ID"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
