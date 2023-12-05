"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AboutUsIntro = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="text-rose-500 w-full flex items-center flex-col"
    >
      <div className="m-auto">
        <h1 className="text-center text-4xl mb-2 font-bold">Welcome to Kas</h1>
        <p className="font-bold text-2xl mb-12">
          Discover beauty, experience excellence.
        </p>
      </div>

      <div className="text-center">
        <h2 className="font-bold text-4xl mb-8">Our Story</h2>
        <p className="w-3/5 m-auto mb-8 text-xl">
          Founded in Taichung, Taiwan, our journey began when Kat attended a
          prestigious nail school, specializing in Japanese nail practice and
          design for professionals. After successfully completing her training,
          Kat embarked on the path to excellence by opening her own salon.
          Operating a fully functional business, the salon quickly gained
          recognition for its commitment to precision and artistic flair.
        </p>
        <p className="w-3/5 m-auto text-xl">
          In pursuit of expanding our reach and sharing our passion for
          exquisite nail art, the salon transitioned to the vibrant city of
          London. With a dedication to providing the best in nail care, we
          exclusively use Japanese and Korean products of the highest quality.
          This commitment ensures the utmost in nail health and safety for our
          valued clients.
        </p>
      </div>

      <div className="mt-48 w-full bg-rose-400 text-rose-100 pb-24">
        <h2 className="text-center pt-12 text-4xl">Meet The Team</h2>
        <div className="pl-12 mt-12 w-full flex ">
          <div className="p-8 w-1/2 h-96 flex justify-center">
            <div className="bg-blue-100 w-2/4 h-full"></div>
          </div>
          <div className="w-1/2 p-8">
            <h1 className="font-bold text-xl">
              Kat - Lead Nail Designer and Artist
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full py-20 flex flex-col items-center">
        <h2 className="text-center text-4xl mb-8">Contact Us</h2>
        <Link href={"https://instagram.com/kasldnail"} target="_blank" className="w-10 text-center">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-10"
          >
            <title>Instagram</title>
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutUsIntro;
