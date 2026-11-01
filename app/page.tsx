import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      <section className="w-full">
        <HomePage />
      </section>

      <section className="w-full">
        <AboutMe />
      </section>

      <section className="w-full">
        <MyProjects />
      </section>

      <section className="w-full">
        <ContactMe />
      </section>
    </div>
  );
}
