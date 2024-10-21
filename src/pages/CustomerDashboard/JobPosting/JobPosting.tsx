import Footer from "@/utils/Footer";
import Header from "@/utils/Header";
import JobPostingForm from "@/utils/JobPostingForm";
import { motion } from "framer-motion";

type Props = {};

function JobPosting({}: Props) {
  return (
    <div className="relaive font-montserrat">
      <div>
        <Header />
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.99 }}
        transition={{ delay: 0.5, ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
      >
        <main
          className="relative px-4 md:px-10 xl:px-28 5xl:px-60 py-11 md:py-14 lg:pt-32 bg-[#6b7177] bg-opacity-15"
          style={{
            background:
              "linear-gradient(90deg, rgba(254,235,229,0.95) 0%, rgba(254,235,221,0.98) 40%, rgba(251,226,195,1) 100%)",
          }}
        >
          <div className="mb-5">
            <h1 className="text-2xl font-semibold">Post a New Job</h1>
          </div>
          <div>
            <JobPostingForm />
          </div>
        </main>
      </motion.div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default JobPosting;
