import Image from "next/image";

export function ConferenceRegistrationFormHeader() {
  return (
    <header className="text-center mb-10 max-w-4xl mx-auto">
      <Image
        className="w-auto h-6 mx-auto md:h-auto"
        aria-hidden
        src="/assets/images/logo-full.svg"
        alt="Coding Conf Logo"
        width={0}
        height={0}
      />

      <h1 className="text-2xl font-bold mt-8 mb-4 text-neutral-0 md:text-6xl">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className="text-neutral-300 text-balance md:text-xl">
        Secure your spot at next year’s biggest coding conference.
      </p>
    </header>
  );
}
