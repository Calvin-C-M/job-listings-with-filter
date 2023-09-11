import { Jobs } from '@/interface/Jobs'
import Image from 'next/image'

export default function JobCard(props:Jobs) {
    return (
        <section className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:shadow-desaturate-dark-cyan shadow-desaturate-dark-cyan hover:border-4 hover:border-white hover:border-l-desaturate-dark-cyan flex items-center justify-between transition-all duration-100">
            <section className='flex items-center justify-center gap-3'>
                <Image 
                    src={props.logo}
                    alt={props.company + " Logo"}
                    width={100}
                    height={100}
                    className="rounded-full"
                />
                <section className="flex flex-col gap-2 text-white">
                    <section className="flex items-center gap-3 font-semibold">
                        <span className='text-desaturate-dark-cyan'>{props.company}</span>
                        {
                            (props.new) && 
                            <span className="font-bold bg-desaturate-dark-cyan pt-1 px-2 rounded-full">NEW!</span>
                        }
                        {
                            (props.featured) &&
                            <span className="font-bold bg-black pt-1 px-2 rounded-full">FEATURED</span>                            
                        }
                    </section>
                    <h2 className="text-black font-bold text-xl">{props.position}</h2>
                    <section className="text-dark-gray-cyan flex items-center justify-center gap-3">
                        <span>{props.postedAt}</span>
                        <span>•</span>
                        <span>{props.contract}</span>
                        <span>•</span>
                        <span>{props.location}</span>
                    </section>
                </section>
            </section>
            <section className='flex items-center justify-end gap-3'>
                <span className="font-semibold text-desaturate-dark-cyan bg-light-gray-cyan-2 pt-1 px-2 rounded-md">{props.role}</span>
                <span className="font-semibold text-desaturate-dark-cyan bg-light-gray-cyan-2 pt-1 px-2 rounded-md">{props.level}</span>
                {
                    props.languages.map((language, index) => (
                        <span key={index} className="font-semibold text-desaturate-dark-cyan bg-light-gray-cyan-2 pt-1 px-2 rounded-md">{language}</span>
                    ))
                }
                {
                    props.tools.map((tool, index) => (
                        <span key={index} className="font-semibold text-desaturate-dark-cyan bg-light-gray-cyan-2 pt-1 px-2 rounded-md">{tool}</span>
                    ))
                }
            </section>
        </section>
    )
}