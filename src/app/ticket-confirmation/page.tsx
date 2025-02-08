import Image from "next/image";

type TicketConfirmationProps = {
  searchParams: Promise<{
    "avatar-url": string;
    fullname: string;
    email: string;
    "github-username": string;
  }>;
};

export default async function TicketConfirmation({
  searchParams,
}: TicketConfirmationProps) {
  const {
    "avatar-url": avatarUrl,
    fullname,
    email,
    "github-username": githubUsername,
  } = await searchParams;

  const fullNameArr = fullname.trim().split(" ");

  return (
    <section>
      <article >
        <header className="text-center mb-10 max-w-5xl mx-auto md:mb-20">
          <Image
            className="w-auto h-6 mx-auto md:h-auto"
            aria-hidden
            src="/assets/images/logo-full.svg"
            alt="Coding Conf Logo"
            width={0}
            height={0}
          />

          <h2 className="text-3xl font-bold mt-8 mb-4 text-neutral-0 md:text-6xl">
            Congrats,
            {fullNameArr.map((name, i) => (
              <span className="gradient-text">&nbsp; {name}</span>
            ))}
            ! Your ticket is ready.
          </h2>
          <p className="text-neutral-300 text-balance md:text-xl ">
            We've emailed your ticket to <span className="text-orange-500">{email}</span> and will send
            updates in the run up to the event.
          </p>
        </header>
        <div className="relative max-w-fit mx-auto">
          <Image
            className="w-auto h-auto"
            aria-hidden="true"
            src="/assets/images/pattern-ticket.svg"
            alt="Ticket pattern"
            width={0}
            height={0}
          />
          <div className="absolute inset-0 grid grid-cols-[1fr_auto]">
            <div className="p-4 flex flex-col justify-between md:p-8">
              <div className="flex gap-3 items-start md:gap-5">
                <Image
                  className="size-8 md:size-auto"
                  aria-hidden
                  src="/assets/images/logo-mark.svg"
                  alt="Coding Conf Logo"
                  width={0}
                  height={0}
                />
                <div className="text-neutral-0">
                  <h2 className="text-2xl font-extrabold md:text-5xl">Coding Conf</h2>
                  <span className="text-sm text-neutral-300 md:text-lg">
                    Jan 31, 2025 / Austin, TX
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-[auto_auto] max-w-max gap-4">
                <Image
                  className="size-12 self-end rounded-md md:size-20 md:rounded-lg"
                  aria-hidden
                  src={avatarUrl}
                  alt="Coding Conf Logo"
                  width={0}
                  height={0}
                />
                <div>
                  <h2 className="text-lg text-balance text-neutral-0 font-medium md:text-3xl">
                    {fullname}
                  </h2>
                  <span className="inline-flex gap-1 text-neutral-300 md:text-xl items-center">
                    <Image
                      className="size-5 md:size-10"
                      aria-hidden="true"
                      src="/assets/images/icon-github.svg"
                      alt="Github icon"
                      width={0}
                      height={0}
                    />
                    @{githubUsername}
                  </span>
                </div>
              </div>
            </div>
            <span className="text-neutral-500 [writing-mode:vertical-lr] text-center px-4 text-2xl font-medium md:px-8 md:text-3xl">
              #01609
            </span>
          </div>
        </div>
      </article>
    </section>
  );
}
