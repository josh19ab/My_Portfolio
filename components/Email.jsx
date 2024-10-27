
const Email = () => {
  return (
    <div
      className="fixed md:-right-36 xl:-right-32 hidden md:flex bottom-36 rotate-90 items-center gap-3 font-roboto"
    >
      <a
        href="mailto:jo19abraham@gmail.com"
        target="_blank"
        className="hover:text-blue-500 dark:hover:text-blue-500 text-slate-950 dark:text-slate-200 transition-all p-2"
      >
        jo19abraham@gmail.com
      </a>
      <div className="h-[1px] flex-grow w-40  bg-slate-200 dark:bg-slate-600"></div>
    </div>
  );
}

export default Email
