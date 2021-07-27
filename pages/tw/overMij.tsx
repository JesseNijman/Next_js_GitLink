import SideMenu from "../../components/sidemenu";

export default function Text() {
  return (
    <div>
      <SideMenu />
      <section className="z-10 w-full lg:w-3/4 float-right p-0 m-0 dark:text-white bg-white dark:bg-black">
        <section className="pb-20">
          <article className="px-10 pt-16">
            <h1 className="text-5xl mb-8">Once upon a time...</h1>
            <p className="text-base">
              A dude came into a bar and ordered tea. What an asshole!
            </p>
          </article>
        </section>
        <section className="bg-gray-300 dark:bg-purple-900 pb-20">
          <article className="px-10 pt-16">
            <h1 className="text-5xl mb-8">Hobbies</h1>
            <p className="text-base">Kickboxing</p>
          </article>
        </section>
        <section className="pb-20">
          <article className="px-10 pt-16">
            <h1 className="text-5xl mb-8">Shows</h1>
            <p className="text-base">Lucifer</p>
          </article>
        </section>
        <section className="bg-gray-300 dark:bg-purple-900 pb-20">
          <article className="px-10 pt-16">
            <h1 className="text-5xl mb-8">Favorite Pokémon</h1>
            <p className="text-base">Infernape</p>
          </article>
        </section>
      </section>
    </div>
  );
}
