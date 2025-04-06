
export function SecondSection({ title, description, subtitle }) {

    return (
        <div className="text-center pt-20 pb-10">
            <h1 className="md:text-titulo text-subtitulo font-main font-bold py-4">{title}</h1>
            <p className="md:text-texto font-second py-2">{description}</p>
            <h2 className="md:text-subtitulo text-texto font-third text-blue-2 pt-2">{subtitle}</h2>
        </div>
    )
}