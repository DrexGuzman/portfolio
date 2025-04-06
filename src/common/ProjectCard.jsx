

export function ProjectCard({ title, date, description, image, id}) {



    return (
        <div className="drop-shadow-xl bg-white p-2 pt-3 rounded-2xl md:w-[26.25rem] flex justify-center items-center flex-col m-4">
            <div className="md:w-[24.625rem] md:h-[14rem] bg-cover overflow-hidden rounded-xl ">
            <img src={image} alt="" />
            </div>
            <div className='py-4 flex flex-col'>
                <div className="flex px-4 md:px-0 justify-between items-center">
                <h2 className="font-second font-bold text-texto">{title}</h2>
                <p className="font-second font-light text-description text-grey-2">{date}</p>
                </div>
                <p className=' px-4 md:px-0  font-second font-light text-description text-grey-2 line-clamp-3 my-2'>{description}</p>
                <a href={`/project/${id}`} className='text-center ease-in duration-150 ring-[0.5px] rounded-md md:mx-32 mx-4 ring-blue-1 text-blue-1 font-second font-light text-description py-1 hover:bg-blue-1 hover:text-white hover:font-normal'>More about</a>
            </div>
        </div>
    )
}