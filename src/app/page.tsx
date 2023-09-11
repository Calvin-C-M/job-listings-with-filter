import JobCard from "@/components/JobCard"
import { JobList } from "@/static/JobList"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-32 bg-light-gray-cyan-1">
      <header className='bg-header-desktop absolute top-0 left-0 right-0 h-32 bg-desaturate-dark-cyan'></header>
      <section className="mt-52 flex flex-col gap-5 w-full">
        {
          JobList.map((job, index) => (
            <JobCard 
              key={index}  
              company={job.company}
              logo={job.logo}
              new={job.new}
              featured={job.featured}
              position={job.position}
              role={job.role}
              level={job.level}
              postedAt={job.postedAt}
              contract={job.contract}
              location={job.location}
              languages={job.languages}
              tools={job.tools}
            />
          ))
        }
      </section>
    </main>
  )
}
