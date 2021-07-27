import SideMenu from "../../components/sidemenu";

export default function Text() {
  return (
    <div>
      <SideMenu />
      <section className="z-10 w-full lg:w-3/4 float-right p-0 m-0 dark:text-white">
        <section className="bg-white dark:bg-black">
          <article className="px-10 pt-16">
            <h1 className="text-5xl mb-8">Contact me at</h1>
            <h2 className="text-3xl mb-2">My phone number</h2>
            <p className="text-base mb-4">06XXXXXXXXX</p>
            <h2 className="text-3xl mb-2">Or email</h2>
            <p className="text-base mb-4">loveThyUser@gmail.com</p>
          </article>
        </section>
      </section>
    </div>
  );
}
