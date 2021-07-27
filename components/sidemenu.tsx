import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export function SideMenu_Links(props) {
  // Since the link that the page is currently on needs to light up, a state needs to be given
  // const [activeLink, setActiveLink] = React.useState(0);
  const router = useRouter();
  console.log(router.asPath);

  return (
    <nav className={`${props.textAlignClass}`}>
      <ul className="list-none">
        {props.links.map((link, index) => (
          <li className="text-2xl mb-4 lg:mx-16">
            {/* <Link href={`/tw/${link.linkSrc}`}>
                        <a onClick={() => setActiveLink(index)}
                        className={`hover:text-black hover:font-bold smoothTransition 
                        ${activeLink != index ? "text-white":"text-black font-bold"}`}>{link.linkName}</a>
                        </Link> */}
            {/* <Link href={`/tw/${link.linkSrc}`}>
                        <a className="text-white hover:text-black hover:font-bold smoothTransition">{link.linkName}</a>
                        </Link> */}
            <Link href={`/tw${link.linkSrc}`}>
              <a
                className={`${
                  router.asPath === `/tw${link.linkSrc}`
                    ? "text-black dark:text-white"
                    : "text-white dark:text-black"
                } 
                        hover:text-black dark:hover:text-white smoothTransition`}
              >
                {link.linkName}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function SideMenu() {
  const [menu, setMenu] = React.useState("transform -translate-x-full");
  const [filter, setFilter] = React.useState("opacity-0 z-0");

  return (
    <div>
      <img
        src="/images/HamburgerMenu.png"
        alt="Hamburger Menu"
        className="z-10 w-6 absolute top-7 left-10 lg:hidden"
        onClick={() => {
          setMenu("smoothTransition duration-500 transform translate-x-0");
          setFilter("smoothTransition opacity-1");
        }}
      />
      <section
        className={`w-4/5 z-20 bg-purple-200 dark:bg-red-900 h-full shadow-md fixed ${menu} lg:block lg:transform lg:translate-x-0 lg:w-1/4`}
      >
        <img
          src="/images/Cross.png"
          alt="Kruisje om sidemenu te sluiten"
          className="absolute w-6 top-7 left-10 lg:hidden"
          onClick={() => {
            setMenu(
              "smoothTransition duration-500 transform -translate-x-full"
            );
            setFilter("smoothTransition opacity-0");
          }}
        />
        <img
          src="/images/Badge.png"
          alt="Vuist omhult in vuur met PA erop"
          className="mb-8 mt-16 w-40 mx-auto lg:ml-auto lg:mr-8"
        />
        <SideMenu_Links
          textAlignClass="text-center lg:text-right"
          links={[
            {
              linkName: "Home",
              linkSrc: "",
            },
            {
              linkName: "Over Mij",
              linkSrc: "/overMij",
            },
            {
              linkName: "Portfolio",
              linkSrc: "/portfolio",
            },
            {
              linkName: "Contact",
              linkSrc: "/contact",
            },
          ]}
        ></SideMenu_Links>
      </section>
      <div
        className={`${filter} fixed w-full h-full bg-black bg-opacity-25 lg:hidden`}
        onClick={() => {
          setMenu("smoothTransition duration-500 transform -translate-x-full");
          setFilter("smoothTransition opacity-0");
        }}
      ></div>
    </div>
  );
}
