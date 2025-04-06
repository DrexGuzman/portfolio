import chica from '../assets/chica1.avif'
export function MemberCard({ fullname, description, image }) {

    return (
        <div className="bg-grey-1 p-2 rounded-2xl w-[19.188rem]">
            <div className="w-[18.125rem] h-[10.938rem]  overflow-hidden rounded-xl">
                <img src={image} alt="" />
            </div>
            <div className='py-4 px-2 flex flex-col'>
                <h2 className="font-second font-bold text-texto">{fullname}</h2>
                <p className='font-second font-light text-description text-grey-2 line-clamp-2 my-2'>{description}</p>
                <button className='ease-in duration-150 ring-[0.5px] rounded-md mx-20 ring-blue-1 text-blue-1 font-second font-light text-description py-1 hover:bg-blue-1 hover:text-white hover:font-normal'>More about</button>
            </div>
        </div>
    )
}