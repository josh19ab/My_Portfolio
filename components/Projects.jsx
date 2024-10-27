import Image from "next/image";
import chatapp from "../assets/projects/chat-app.jpg";
import urbankicks from "../assets/projects/urban-kicks.jpg";
import ems from "../assets/projects/ems.jpg";
import StoryBooks from "../assets/projects/StoryBooks.jpg";

const Projects = () => {
  return (
    <section
      className="px-5 xs:px-10 sm:px-12 md:px-24 py-24 mt-4"
      id="projects"
    >
      <div className="flex items-center gap-3 pb-10 pt-2.5">
        <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-200 font-inter">
          Some Things I&apos;ve Built
        </h3>
        <div className="h-px flex-grow max-w-xs bg-blue-100 dark:bg-blue-900"></div>
      </div>
      <div>
        {/* Project 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center md:gap-3 mb-20 relative shadow-lg border dark:border-none md:border-none md:shadow-none rounded overflow-hidden md:overflow-visible">
          {/* left element */}
          <div className="w-full md:w-2/3 lg:w-1/2 z-10 bg-slate-50 dark:bg-slate-900 dark:md:bg-transparent md:bg-transparent py-5 md:mt-5  ">
            <h4 className="font-roboto text-xs pb-1 text-blue-500 px-4">
              Featured Project
            </h4>
            <a
              target="_blank"
              href="https://chat-app-jo-frontend.vercel.app"
              className="text-2xl px-4 text-slate-700 dark:text-slate-300 font-bold"
            >
              Chat-app!
            </a>
            <div className="md:bg-blue-500 dark:md:bg-blue-900 md:my-5 text-slate-700 dark:text-slate-300 md:text-white dark:md:text-slate-100 p-4 rounded md:shadow-lg ">
              <p className=" pb-4">
                This application provides a feature-rich communication platform
                where users can register, invite friends, and engage in{" "}
                <span className="font-bold">
                  private chats and group chats.{" "}
                </span>{" "}
                It combines a user-friendly interface,{" "}
                <span className="font-bold ">Real-time communication</span>{" "}
                technologies, with user status indication and robust backend
                functionality to create an immersive and interactive experience.
                The chat also supports multi-media file sharing.
              </p>
              <p className=" font-semibold pb-4 text-slate-950 dark:text-white">
                {" "}
                The Back-End of this application is hosted on a free server,
                which will spin down with inactivity and can delay requests by
                50 seconds or more.
              </p>
              <div className="">
                <h3 className="text-lg font-semibold">Demo Accounts</h3>
                <ul>
                  <li>
                    <span className="font-medium">Email:</span>{" "}
                    testuser@example.com &nbsp;{" "}
                    <span className="font-medium">Pass:</span> testuser
                  </li>
                  <li>
                    <span className="font-medium">Email:</span> demo@gmail.com
                    &nbsp; <span className="font-medium">Pass:</span> demo123
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap text-xs rounded text-slate-600 dark:text-slate-400 gap-x-8 gap-y-4 font-roboto px-4">
              <span>Vite</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>React Router Dom</span>
              <span>Chakara UI</span>
              <span>Socket.io</span>
              <span>Cloudinary</span>
              <span>Lottie</span>
            </div>
            <div className="flex px-4 mt-6 gap-5 items-center ">
              <a
                href="https://chat-app-jo-frontend.vercel.app"
                target="_blank"
                className="bg-slate-50 dark:bg-slate-700  dark:text-white p-2 rounded-full hover:shadow-lg hover:shadow-blue-300 dark:hover:shadow-blue-800 hover:-translate-y-0.5 transition-all border-slate-300 dark:border-slate-500 border"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
          {/* right element */}
          <div className="w-full h-full md:w-2/3 md:absolute top-0 md:top-auto left-0 md:left-auto md:right-0 flex items-start bg-slate-50 dark:bg-slate-900 dark:md:bg-transparent border-b dark:border-slate-500 md:border-none md:bg-transparent">
            <a
              href="https://chat-app-jo-frontend.vercel.app"
              target="_blank"
              className="h-full"
            >
              <Image
                className="w-full h-full md:h-auto object-cover md:shadow-xl md:rounded-lg"
                src={chatapp}
                alt="Chat App"
              ></Image>
            </a>
          </div>
        </div>
        {/* Project 2 */}
        <div className="flex flex-col md:flex-row items-center md:justify-end md:gap-3 mb-20 relative shadow-lg border dark:border-none md:border-none md:shadow-none rounded overflow-hidden md:overflow-visible">
          {/* left element */}
          <div className="w-full h-full md:w-2/3 md:absolute top-0 md:top-auto left-0 flex items-start bg-slate-50 dark:bg-slate-900 dark:md:bg-transparent border-b dark:border-slate-500 md:border-none md:bg-transparent ">
            <a
              href="https://urbankicks.vercel.app"
              target="_blank"
              className="h-full"
            >
              <Image
                className="w-full h-full md:h-auto object-cover md:shadow-xl md:rounded-lg"
                src={urbankicks}
                alt="urbankicks"
              ></Image>
            </a>
          </div>
          {/* right element */}
          <div className="w-full md:w-2/3 lg:w-1/2 z-10 bg-slate-50 dark:bg-slate-900 dark:md:bg-transparent   md:bg-transparent py-5 md:mt-5">
            <h4 className="font-roboto text-xs pb-1 text-blue-500 px-4 md:text-end">
              Featured Project
            </h4>
            <a
              target="_blank"
              href="https://urbankicks.vercel.app"
              className="text-2xl px-4 text-slate-700 dark:text-slate-300 font-bold md:text-end flex md:justify-end"
            >
              Urban Kicks
            </a>
            <div className="md:bg-blue-500 dark:md:bg-blue-900 md:my-5 text-slate-700 dark:text-slate-300 md:text-white dark:md:text-slate-100 p-4 rounded md:shadow-lg ">
              <p className="pb-4">
                This is an e-commerce site for a local store with product
                listings, shopping cart, secure checkout and order invoice. The
                admin can <span className="font-bold ">add new products</span>{" "}
                ,including relevant details such as product name, description,
                price, and quantity. Admin can also{" "}
                <span className="font-bold "> update or delete </span> any
                product which is no longer available. To enhance the user
                experience, the application enables admins to upload{" "}
                <span className="font-bold "> product images</span> , making it
                easier to visually identify and manage products.
              </p>
              <p className=" font-semibold pb-4 text-slate-950 dark:text-white">
                {" "}
                The Back-End of this application is hosted on a free server,
                which will spin down with inactivity and can delay requests by
                50 seconds or more.
              </p>
              <div className="pb-4">
                <h3 className="text-lg font-semibold">Demo Account</h3>
                <p>
                  <span className="font-medium">Email:</span> test@test.com
                  &nbsp; <span className="font-medium">Pass:</span> Test12345
                </p>
              </div>
            </div>
            <div className="flex flex-wrap md:justify-end text-xs rounded text-slate-600 dark:text-slate-400 gap-x-8 gap-y-4 font-roboto px-4">
              <span>NextJs</span>
              <span>Stapi</span>
              <span>PostgreSQL</span>
              <span>Tailwind CSS</span>
              <span>Clerk</span>
              <span>Stripe</span>
              <span>Resend</span>
              <span>Cloudinary</span>
              <span>HyperUI</span>
            </div>
            <div className="flex px-4 mt-6 gap-5 items-center md:justify-end ">
              <a
                href="https://urbankicks.vercel.app"
                target="_blank"
                className="bg-slate-50 dark:bg-slate-700 dark:text-white p-2 rounded-full hover:shadow-lg hover:shadow-blue-300 dark:hover:shadow-blue-800 hover:-translate-y-0.5 transition-all border-slate-300 dark:border-slate-500 border"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="flex flex-col-reverse md:flex-row items-center md:gap-3 mb-20 relative shadow-lg border dark:border-none md:border-none md:shadow-none rounded overflow-hidden md:overflow-visible">
          {/* left element */}
          <div className="w-full md:w-2/3 lg:w-1/2 z-10 bg-slate-50 dark:bg-slate-900 dark:md:bg-transparent md:bg-transparent py-5 md:mt-5  ">
            <h4 className="font-roboto text-xs pb-1 text-blue-500 px-4">
              Featured Project
            </h4>
            <a
              target="_blank"
              href="https://theems.netlify.app"
              className="text-2xl px-4 text-slate-700 dark:text-slate-300 font-bold"
            >
              EMS
            </a>
            <div className="md:bg-blue-500 dark:md:bg-blue-900 md:my-5 text-slate-700 dark:text-slate-300 md:text-white dark:md:text-slate-100 p-4 rounded md:shadow-lg ">
              <p className=" pb-4">
                This application provides an efficient solution for managers to
                manage their employees. The application allows users to{" "}
                <span className="font-bold ">add new employees</span> to their
                respective departments, including relevant details such as name,
                email, department, and salary. Users can also{" "}
                <span className="font-bold "> update or delete </span> any
                employee. To enhance the user experience, the application has a{" "}
                <span className="font-bold "> beautiful dashboard</span>, making
                it easier to visually identify and manage employees.
              </p>
              <div className="">
                <h3 className="text-lg font-semibold">Demo Accounts</h3>
                <ul>
                  <li>
                    <span className="font-medium">Email:</span> testuser &nbsp;{" "}
                    <span className="font-medium">Pass:</span> testpassword
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-wrap text-xs rounded text-slate-600 dark:text-slate-400 gap-x-8 gap-y-4 font-roboto px-4">
              <span>React</span>
              <span>Flask</span>
              <span>SQLite</span>
              <span>PythonAnywhere</span>
              <span>Font Awesome</span>
              <span>BootStrap</span>
              <span>HeadlessUI</span>
            </div>
            <div className="flex px-4 mt-6 gap-5 items-center ">
              <a
                href="https://theems.netlify.app"
                target="_blank"
                className="bg-slate-50 dark:bg-slate-700  dark:text-white p-2 rounded-full hover:shadow-lg hover:shadow-blue-300 dark:hover:shadow-blue-800 hover:-translate-y-0.5 transition-all border-slate-300 dark:border-slate-500 border"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
          {/* right element */}
          <div className="w-full h-full md:w-2/3 md:absolute top-0 md:top-auto left-0 md:left-auto md:right-0 flex items-start bg-slate-50 dark:bg-slate-900 dark:md:bg-transparent border-b dark:border-slate-500 md:border-none md:bg-transparent">
            <a
              href="https://theems.netlify.app"
              target="_blank"
              className="h-full"
            >
              <Image
                className="w-full h-full md:h-auto object-cover md:shadow-xl md:rounded-lg"
                src={ems}
                alt="ems"
              ></Image>
            </a>
          </div>
        </div>
        {/* Proeject 4 */}
        <div className="flex flex-col md:flex-row items-center md:justify-end md:gap-3 mb-20 relative shadow-lg border dark:border-none md:border-none md:shadow-none rounded overflow-hidden md:overflow-visible">
          {/* left element */}
          <div className="w-full h-full md:w-2/3 md:absolute top-0 md:top-auto left-0 flex items-start bg-slate-50 dark:bg-slate-900 dark:md:bg-transparent border-b dark:border-slate-500 md:border-none md:bg-transparent ">
            <a
              href="https://story-book-omega.vercel.app"
              target="_blank"
              className="h-full"
            >
              <Image
                className="w-full h-full md:h-auto object-cover md:shadow-xl md:rounded-lg"
                src={StoryBooks}
                alt="storybooks"
              ></Image>
            </a>
          </div>
          {/* right element */}
          <div className="w-full md:w-2/3 lg:w-1/2 z-10 bg-slate-50 dark:bg-slate-900 dark:md:bg-transparent   md:bg-transparent py-5 md:mt-5">
            <h4 className="font-roboto text-xs pb-1 text-blue-500 px-4 md:text-end">
              Featured Project
            </h4>
            <a
              target="_blank"
              href="https://story-book-omega.vercel.app"
              className="text-2xl px-4 text-slate-700 dark:text-slate-300 font-bold md:text-end flex md:justify-end"
            >
              Story Books
            </a>
            <div className="md:bg-blue-500 dark:md:bg-blue-900 md:my-5 text-slate-700 dark:text-slate-300 md:text-white dark:md:text-slate-100 p-4 rounded md:shadow-lg ">
              <p className="pb-4">
                Every person has their own story to tell. This application
                allows users to write their stories digitally. The application
                allows users to write{" "}
                <span className="font-bold ">public and private</span> stories
                and add it to their collection. Users can also{" "}
                <span className="font-bold "> update or delete </span> any story
                which they have written. There is a public story dashboard where
                we can see all public stories and their authors. Users can also
                see the stories of a single author.{" "}
              </p>
              <div className="pb-4">
                {/* <h3 className="text-lg font-semibold">Demo Account</h3>
                <p>
                  <span className="font-medium">Email:</span> test1@test.com
                  &nbsp; <span className="font-medium">Pass:</span> test123
                </p> */}
              </div>
            </div>
            <div className="flex flex-wrap md:justify-end text-xs rounded text-slate-600 dark:text-slate-400 gap-x-8 gap-y-4 font-roboto px-4">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>PassportJS</span>
              <span>GoogleOAuth</span>
              <span>Handlebars</span>
              <span>Font Awesome</span>
              <span>Lucide React</span>
            </div>
            <div className="flex px-4 mt-6 gap-5 items-center md:justify-end ">
              <a
                href="https://story-book-omega.vercel.app"
                target="_blank"
                className="bg-slate-50 dark:bg-slate-700 dark:text-white p-2 rounded-full hover:shadow-lg hover:shadow-blue-300 dark:hover:shadow-blue-800 hover:-translate-y-0.5 transition-all border-slate-300 dark:border-slate-500 border"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
