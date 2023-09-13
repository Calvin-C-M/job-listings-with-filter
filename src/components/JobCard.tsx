"use client"
import { Jobs } from '@/interface/Jobs'
import Image from 'next/image'
import JobTags from './JobTags'
import { useState } from 'react'

export default function JobCard({
    job,
    filterHandler,
}: {
    job: Jobs,
    filterHandler: any
}) {
    const [isHovering, setIsHovering] = useState(false)

    return (
        <section onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-desaturate-dark-cyan shadow-desaturate-dark-cyan border-4 border-white hover:border-l-desaturate-dark-cyan hover:cursor-pointer flex items-center justify-between transition-all duration-100">
            <section className='flex items-center justify-center gap-3'>
                <Image 
                    src={job.logo}
                    alt={job.company + " Logo"}
                    width={100}
                    height={100}
                    className="rounded-full"
                />
                <section className="flex flex-col gap-2 text-white">
                    <section className="flex items-center gap-3 font-semibold">
                        <span className='text-desaturate-dark-cyan'>{job.company}</span>
                        {
                            (job.new) && 
                            <span className="font-bold bg-desaturate-dark-cyan pt-1 px-2 rounded-full">NEW!</span>
                        }
                        {
                            (job.featured) &&
                            <span className="font-bold bg-black pt-1 px-2 rounded-full">FEATURED</span>                            
                        }
                    </section>
                    <h2 className={(isHovering ? "text-desaturate-dark-cyan" : "text-black") + " font-bold text-xl transition-all duration-100"}>{job.position}</h2>
                    <section className="text-dark-gray-cyan flex items-center justify-center gap-3">
                        <span>{job.postedAt}</span>
                        <span>•</span>
                        <span>{job.contract}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                    </section>
                </section>
            </section>
            <section className='flex items-center justify-end gap-3'>
                <JobTags onClick={filterHandler}>{job.role}</JobTags>
                <JobTags onClick={filterHandler}>{job.level}</JobTags>
                {
                    job.languages.map((language, index) => (
                        <JobTags onClick={filterHandler}>{language}</JobTags>
                    ))
                }
                {
                    job.tools.map((tool, index) => (
                        <JobTags onClick={filterHandler}>{tool}</JobTags>
                    ))
                }
            </section>
        </section>
    )
}