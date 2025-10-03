import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <header className="absolute left-0 right-0 z-10">
      <div className="container h-full py-4 xl:py-6 border-b border-white/10">
        <nav className="h-full flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <button type="button" className="btn btn-tertiary">
              Sign in
            </button>
            <button type="button" className="btn btn-accent">
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
