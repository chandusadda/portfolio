import ThemeToggle from "../components/ThemeToggle";
import HeaderComp from "../components/Header";
import FooterComp from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HeaderComp />
      <div className="w-full container p-4 mx-auto h-[100vh]">
        <div className="py-20 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center text-gray-800 dark:text-gray-100 font-bold">
            Next Themes + Tailwind Dark Mode
          </h1>
          <p className="italic text-2xl">with app-dir</p>

          <ThemeToggle />
        </div>
      </div>
      <FooterComp />
    </div>
  );
}
