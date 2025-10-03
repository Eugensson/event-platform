import Link from "next/link";
import Image from "next/image";

export const DownloadApp = () => {
  return (
    <section className="mb-16 p-10 xl:p-20 w-full md:h-91 flex items-center justify-center bg-accent rounded-2xl bg-pattern bg-cover bg-no-repeat bg-blend-multiply">
      <div className="flex flex-col xl:flex-row items-center gap-6">
        <div className="flex-1 text-center xl:text-left">
          <h2 className="h2 mb-4">Expirience Events In Your Pocket Today</h2>
          <p className="max-w-102.5 mx-auto xl:mx-0">
            Download our App and get instant access to upcoming events and
            tailored recommendations.
          </p>
        </div>
        <div className="flex-1 flex flex-col md:flex-row items-center justify-end gap-4">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-48 h-16"
          >
            <Image
              fill
              className="object-contain"
              alt="Download app in App Store"
              src="/assets/download/app-store.svg"
              aria-label="Link to download app in App Store"
            />
          </Link>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-54 h-16"
          >
            <Image
              fill
              className="object-contain"
              src="/assets/download/google-play.svg"
              alt="Download app in Google Play Market"
              aria-label="Link to download app in Google Play Market"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
