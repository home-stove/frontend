type Props = {};

function CallToAction({}: Props) {
  return (
    <section className="relative font-montserrat">
      <div className="from-[#feebe5] via-[#feebdd] to-[#fde6d1] bg-gradient-to-r py-12 px-4">
        <div className="mb-3">
          <h1 className="text-xl font-bold">
            Join the Bakers' Revolution Today
          </h1>
        </div>
        <div className="mb-6">
          <p className="text-sm">
            Turn your passion into profit. Sign up now and connect with
            customers who appreciate your craft. Your next opportunity is just a
            click away.
          </p>
        </div>
        <div>
          <button className="w-[10.25rem] h-14 bg-[#0c0c0c] flex justify-center items-center gap-2 px-5 py-3 rounded-lg">
            <span className="text-white text-sm font-semibold">
              Get Started
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="2em"
              viewBox="0 0 256 256"
            >
              <path
                fill="white"
                d="M198 64v104a6 6 0 0 1-12 0V78.48L68.24 196.24a6 6 0 0 1-8.48-8.48L177.52 70H88a6 6 0 0 1 0-12h104a6 6 0 0 1 6 6"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;