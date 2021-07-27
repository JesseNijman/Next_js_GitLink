import SideMenu from "../../components/sidemenu";
import CountDown_ProgressBar from "../../components/countDown_ProgressBar";
import Carousel from "../../components/carousel";

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
          <section className="py-16 bg-gray-700">
            <h2 className="text-5xl text-white px-10 mb-8">Carousel</h2>
            <Carousel
              allPictures={[
                {
                  image: "Olifant.jpg",
                  alt_text: "Olifant in het bos",
                  backPos: "50% 10%",
                },
                {
                  image: "Dolphin.jpg",
                  alt_text: "Two Dolphins laughing",
                  backPos: "50% 30%",
                },
                {
                  image: "Owl.jpg",
                  alt_text: "Owl in the snow laughing",
                  backPos: "50% 30%",
                },
                {
                  image: "Tiger.jpg",
                  alt_text: "Tiger looks into the distance",
                  backPos: "50% 20%",
                },
                {
                  image: "Stokstaartjes.jpg",
                  alt_text: "Family of Timon from the Lion King",
                  backPos: "50% 10%",
                },
                {
                  image: "Panda.jpg",
                  alt_text: "Panda in een hangmatje, zo cute!",
                  backPos: "50% 10%",
                },
              ]}
            ></Carousel>
          </section>
        </section>
      </section>
      <SideMenu />
    </div>
  );
}
