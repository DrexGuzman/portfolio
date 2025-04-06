
export function CommentCard({ user, date, comment, image }) {

    return (
        <div className="bg-grey-1 p-2 pt-3 rounded-2xl w-[26.25rem]">
            <div className="flex justify-around">
                <div className="rounded-full size-14 overflow-hidden">
                    <img className="object-cover w-full h-full" src={image} alt="" />
                </div>
                <div>
                    <div className="flex gap-x-5">
                        {/* informacion del usuario */}
                        <div className="flex gap-x-2 items-end">
                            <h1 className="font-bold font-second text-texto">{user}</h1>
                            <h1 className="font-light font-second text-description">Recomienda a</h1>
                            <h1 className="font-bold font-second text-texto">2GAF</h1>
                        </div>
                        {/* 3 puntos azules para mas opciones */}
                        <div className="gap-y-1 flex flex-col relative" name='btnGroup'>
                            <div className="size-2 bg-blue-2 rounded-full"></div>
                            <div className="size-2 bg-blue-2 rounded-full"></div>
                            <div className="size-2 bg-blue-2 rounded-full"></div>
                        </div>
                    </div>
                    <p className="font-light font-second text-description text-gray-600">{date}</p>
                </div>
            </div>
            {/* Comentario */}
            <p className="font-light font-second text-texto line-clamp-2">{comment}</p>
        </div>

    )
}