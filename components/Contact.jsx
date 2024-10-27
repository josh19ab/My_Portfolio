const Contact = () => {
  return (
    <section
      className="px-5 xs:px-10 sm:px-12 md:px-24 pt-24 pb-48 "
      id="contact"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-5xl font-extrabold dark:text-slate-300 mb-5">
          Get In Touch
        </h2>
        <p className="text-center lg:w-1/2 mb-8 text-slate-700 dark:text-slate-400">
          I love connecting with people who share my passion for development. If
          you have any inquiries or just want to say hi, hit the button below to
          send me an email!{" "}
        </p>
        <div className="flex gap-y-4 gap-x-8 flex-wrap justify-center">
          <a
            target="_blank"
            href="mailto:jo19abraham@gmail.com"
            className="flex items-center gap-2 border border-blue-300 dark:text-slate-200 text-sm sm:text-base px-6 py-2.5 sm:px-10 sm:py-4 font-roboto rounded hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all hover:-translate-y-1"
          >
            {" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>{" "}
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
