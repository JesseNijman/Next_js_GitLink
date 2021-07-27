import SideMenu from "../../components/sidemenu";
import Link from "next/link";

export default function MakeUp() {
  return (
    <section className="m-0 p-0">
      <SideMenu></SideMenu>

      <section className="w-full lg:w-3/4 float-right p-0 m-0 dark:text-white z-10">
        <section className="bg-gray-100 dark:bg-purple-900 pt-16">
          <article className="text-center bg-purple-200 py-16 dark:text-white lg:mx-10">
            <h1 className="text-5xl">Tailwind shenanigans</h1>
            <p className="px-20 pt-10">
              Welcome to this webpage styled with Tailwind!
            </p>
          </article>

          <div className="flex flex-row items-start content-center flex-wrap mx-10 justify-center">
            <article className="spinCircle hover:bg-green-300 w-1/5 hover:text-white dark:text-black">
              <h1 className="text-base">Has a hover</h1>
            </article>

            <article className="spinCircle smoothTransition hover:bg-green-300 w-1/5 dark:text-black">
              <h1 className="text-base">Hover with transition</h1>
            </article>

            <article
              className="spinCircle smoothTransition hover:bg-green-300 
    dark:hover:bg-blue-200 w-1/5 dark:bg-gray-500"
            >
              <h1 className="text-base dark:text-white">Hover and Dark Mode</h1>
            </article>
          </div>

          <section className="mt-16 pt-16 bg-white dark:bg-black">
            <article className="px-10">
              <h1 className="text-5xl mb-8">This is the start of everything</h1>
              <p className="text-base">
                Welcome to the one and only page of this website with a submenu.
                Please look at the cat below. Isn't it cute!?
              </p>
              {/* <img src="./images/Cat.jpg" alt="A cat resting it's head on a table while looking into the camera"
            className="mx-0 mt-8 w-full" /> */}
            </article>
            <img
              src="./images/Cat.jpg"
              alt="A cat resting it's head on a table while looking into the camera"
              className="mx-0 mt-8 w-full"
            />

            <p className="text-base px-10 py-16">
              How could anyone say no to a face like that?
            </p>
          </section>
        </section>
      </section>
    </section>
  );
}
