import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsTranslate } from "react-icons/bs";
import { MdOutlinePermMedia } from "react-icons/md";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="px-4 py-20 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">About Unbound Protocol</h1>
        <div className="w-24 border-gray-800 border-dashed border-b mx-auto mb-8"></div>
        <h2 className="text-3xl font-semibold mb-6">
          Unleash Creation, Unlimited Possibilities
        </h2>
        <blockquote className="text-xl italic border-l-4 border-gray-800 border-dashed pl-4 py-2 max-w-2xl mx-auto">
          {'"Release Your Creation to the World"'}
        </blockquote>
      </section>

      <section className="bg-gray-800 text-white bg-opacity-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <p className="text-xl leading-relaxed text-center">
            Unbound Protocol is dedicated to{" "}
            <strong>transcending language and media boundaries</strong> to
            empower global creators through blockchain collaboration. We believe
            every creation deserves to be seen by the world, regardless of its
            original language or form.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          The Challenge and Opportunity
        </h2>
        <p className="text-xl mb-8">
          The global content ecosystem suffers from language isolation,
          preventing creative works from reaching their full potential value:
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-gray-800 text-gray-200 bg-opacity-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-white mb-2">200M+</p>
            <p className="text-lg">
              Content creators worldwide seeking broader audiences
            </p>
          </div>
          <div className="bg-gray-800 text-gray-200 bg-opacity-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-white mb-2">76%</p>
            <p className="text-lg">
              Consumers prefer content in their native language
            </p>
          </div>
          <div className="bg-gray-800 text-gray-200 bg-opacity-50 p-6 rounded-lg text-center">
            <p className="text-4xl font-bold text-white mb-2">Only 3%</p>
            <p className="text-lg">
              Creative works are translated into other languages
            </p>
          </div>
        </div>
        <p className="text-xl">
          This means most excellent creations never reach their potential
          audience, while readers worldwide miss out on incredible content.
          Unbound Protocol was born to solve this problem.
        </p>
      </section>

      <section className="bg-gray-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {"Unbound Protocol's Unique Value"}
          </h2>
          <p className="text-xl mb-12 text-center">
            {`We've built a revolutionary platform on the Soneium blockchain with three core features:`}
          </p>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-gray-400 rounded-full p-6 inline-block">
                  <BsTranslate className="size-16" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-4">
                  1. AI-Powered Translation
                </h3>
                <p className="text-lg leading-relaxed">
                  Creators simply upload their work in any language, and our
                  technology swiftly translates it into multiple languages to
                  begin selling immediately. This means your work can launch to
                  global markets simultaneously, without waiting for traditional
                  translation processes.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-gray-400 rounded-full p-6 inline-block">
                  <AiOutlineDollarCircle className="size-16" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-4">
                  2. Tokenized Copyright
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  {`Through blockchain technology, we've implemented copyright tokenization:`}
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg pl-4">
                  <li>
                    Providing creators with initial capital to focus on creation
                  </li>
                  <li>
                    Fairly distributing sales revenue to translators, local
                    promoters, and investors
                  </li>
                  <li>
                    Establishing a transparent and traceable copyright
                    management system
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/4 flex justify-center">
                <div className="bg-gray-400 rounded-full p-6 inline-block">
                  <MdOutlinePermMedia className="size-16" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-4">
                  3. Cross-Media Transformation
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  Your creation is no longer limited to a single form. At
                  Unbound Protocol, works can be transformed into multiple
                  media:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg pl-4">
                  <li>Novels into comics</li>
                  <li>Text content into audiobooks or radio dramas</li>
                  <li>Stories developed into animations or visual novels</li>
                </ul>
                <p className="text-lg mt-4">
                  Each transformation opens new audience groups and revenue
                  streams for creators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Vision</h2>
        <p className="text-xl leading-relaxed mb-8">
          We believe creativity should have no boundaries. Unbound Protocol is
          building a truly globalized creative marketplace where every creator
          can receive the recognition and rewards they deserve, while every
          reader can access amazing content from around the world.
        </p>
        <p className="text-xl leading-relaxed">
          {`Whether you're a writer, translator, illustrator, investor, or content
          enthusiast, Unbound Protocol offers you the opportunity to participate
          in the global creative economy.`}
        </p>
      </section>
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Our Roadmap
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-400"></div>

            <div className="relative z-10 mb-16">
              <div className="flex items-center flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-gray-200 rounded-lg p-6 inline-block shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      2025 Q2 (Current)
                    </h3>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>MVP Completion</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-500 rounded-full h-8 w-8 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-white h-3 w-3 rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
              </div>
            </div>

            <div className="relative z-10 mb-16">
              <div className="flex items-center flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                <div className="bg-gray-500 rounded-full h-8 w-8 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-white h-3 w-3 rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-gray-200 rounded-lg p-6 inline-block shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      2025 Q3
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Book Marketplace Launch</li>
                      <li>Major Languages Automatic Translation Support</li>
                      <li>
                        Contracted Novel Copyright Tokenization and Public Sales
                      </li>
                      <li>Beta Mobile App Release</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mb-16">
              <div className="flex items-center flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-gray-200 rounded-lg p-6 inline-block shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      2025 Q4
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Self-service Copyright Tokenization</li>
                      <li>All Languages Automatic Translation Support</li>
                      <li>Translator Interface Launch</li>
                      <li>Official Mobile App Release</li>
                      <li>Recommendation System Launch</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-500 rounded-full h-8 w-8 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-white h-3 w-3 rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
              </div>
            </div>
            <div className="relative z-10 mb-16">
              <div className="flex items-center flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                <div className="bg-gray-500 rounded-full h-8 w-8 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-white h-3 w-3 rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-gray-200 rounded-lg p-6 inline-block shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      2026 Q1-Q2
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Automatic Revenue Distribution System</li>
                      <li>On-chain Interoperability</li>
                      <li>On-chain DRM</li>
                      <li>Comics Support</li>
                      <li>Creator Studio Interface</li>
                      <li>Creator/Translator Specialized App Release</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-gray-200 rounded-lg p-6 inline-block shadow-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      2027
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Novel-to-Comic Conversion Support</li>
                      <li>Establishment of Regional Legal Entities</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-500 rounded-full h-8 w-8 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="bg-white h-3 w-3 rounded-full"></div>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center text-white">
            <p className="text-xl">
              {`Our roadmap is designed to progressively expand Unbound Protocol's
              capabilities while ensuring a robust and user-friendly ecosystem
              for creators worldwide.`}
            </p>
            {/* <a
              href="#"
              className="mt-6 inline-block px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold transition-colors duration-300"
            >
              Learn More About Our Development
            </a> */}
          </div>
        </div>
      </section>
      <footer className="py-10 text-center">
        <p className="italic">
          Unbound Protocol - Unleashing Infinite Creative Possibilities on the
          Soneium Blockchain
        </p>
      </footer>
    </div>
  );
}
