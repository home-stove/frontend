import Footer from "@/utils/Footer"
import Header from "@/utils/Header"
import JobPostingForm from "@/utils/JobPostingForm"

type Props = {}

function JobPosting({}: Props) {
  return (
    <div className="relaive font-montserrat">
        <div>
            <Header />
        </div>
        <main className="relative px-4 md:px-12 lg:px-28 5xl:px-80 py-11 lg:pt-32 bg-[#6b7177] bg-opacity-15">
            <div className="mb-5">
                <h1 className="text-2xl font-semibold">Post a New Job</h1>
            </div>
            <div>
                <JobPostingForm />
            </div>
        </main>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default JobPosting