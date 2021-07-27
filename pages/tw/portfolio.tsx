import SideMenu from "../../components/sidemenu";
import CountDown_ProgressBar from "../../components/countDown_ProgressBar";

export default function Text() {
  return (
    <div>
      <section className="z-10 w-full lg:w-3/4 float-right p-0 m-0 dark:text-white">
        <section className="bg-white dark:bg-black">
          <article className="px-10 pt-16">
            <h1 className="text-5xl mb-8">What I worked on</h1>
            <ul className="text-base list-disc list-inside">
              <li>A tab component</li>
              <li>A side menu component (the one on the left)</li>
              <li>A tic tac toe game</li>
            </ul>
          </article>
          <article className="px-10 pt-16">
            <h2 className="text-3xl mb-2">
              Stay for a while and see the bar below fill up!
            </h2>
            <CountDown_ProgressBar time="10"></CountDown_ProgressBar>
          </article>
          <img
            src="../images/Cat.jpg"
            alt="Kitty"
            className="mt-8 w-full object-cover h-96"
          />
        </section>
      </section>
      <SideMenu />
    </div>
  );
}
