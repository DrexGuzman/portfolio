
export function IconData({ icon, title }) {
    return (
        <div className='flex items-center gap-4 mt-2'>
            <img src={icon} alt="" />
            <p className='font-second font-light text-grey-2 line-clamp-2'>{title}</p>
        </div>
    )
}