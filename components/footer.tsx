import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Footer = () => {
  return (
    <footer className="pt-16 bg-accent bg-pattern bg-cover bg-no-repeat bg-blend-multiply">
      <div className="container border-b border-white/40">
        <div className="max-w-137.5 mx-auto flex flex-col text-center">
          <div className="mb-9">
            <h2 className="h2 mb-3">You Event Connection</h2>
            <p>Join our list for exclusive events updates and insider tips.</p>
          </div>
          <form className="relative mb-16 flex items-center">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your email address"
              className="h-15 w-full pl-8 rounded-full bg-white outline-none placeholder:text-primary/80 text-primary text-sm"
            />
            <button
              type="button"
              className="absolute right-1 h-13 w-28.5 btn-secondary rounded-full text-sm uppercase cursor-pointer"
            >
              Join
            </button>
          </form>
          <Socials />
        </div>
      </div>
      <div className="py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo footer />
          <p className="text-sm">Copyright &copy; 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
