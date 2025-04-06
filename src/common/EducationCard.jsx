
export function EducationCard({ image, institution, degree, year }) {

    return (
        <div className="flex flex-col items-center gap-4">
        <div className='flex items-center gap-4 mt-2 drop-shadow-lg bg-white rounded-2xl p-2'>
            <img className="object-cover md:w-[10vw] w-[30vw]" src={image} alt="" />
            </div>
        <div className="text-center">
            <p className="text-description font-second">{institution}</p>
            <p className="text-description font-second">{degree}</p>
            <p className="text-description font-second">{year}</p>
        </div>
        </div>
    )
}