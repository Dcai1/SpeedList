import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About This Website",
  description:
    "Started alone as just a passion project, this is a website application that stores any items you create, inside a database. Delete, edit, create, and send your shopping list with ease.",
};

export default function About() {
  return (
    <main className="flex flex-col min-h-[100vh] p-10 mx-auto text-center overflow-auto bg-white">
      <div className="p-6 overflow-auto mx-auto my-auto text-center transition-all duration-1000 bg-gray-200 border-4 border-gray-300 shadow-lg max-h-[100vh] hover:scale-103 rounded-3xl shadow-gray-800">
        <h1 className="p-10 mx-auto mb-6 text-2xl font-bold text-center transition-all bg-gray-400 rounded-full shadow-2xl sm:text-3xl lg:text-4xl hover:scale-120 w-fit shadow-gray-500">
          About This Website
        </h1>

        <div className="p-6 space-y-1 text-xl text-black border shadow-xl sm:text-2xl text-shadow-lg text-shadow-red-300 rounded-xl shadow-gray-300">
          <p>
            This is a website application that stores any shopping items you
            create, inside a database. You can delete, edit, create, and even
            copy a formatted version of the list to your clipboard, so you can
            send it to anyone (Like your family members!)
          </p>
          <p className="p-6">
            <b>
              I started it alone as a passion project, and because I became
              tired of writing my shopping list on blank paper. Oh well!
            </b>
          </p>

          <p className="p-3 mx-auto mt-6 font-bold transition-all duration-1000 bg-yellow-200 border-4 shadow-2xl rounded-xl w-fit hover:bg-green-400 hover:scale-110">
            This project was built using Next.js, React, TypeScript, Tailwind,
            and Prisma.
          </p>
        </div>
      </div>
    </main>
  );
}
