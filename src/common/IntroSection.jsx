
export function IntroSection({ title, description, subtitle }) {

    return (
        <div className="text-center md:pt-20 pt-10">
            <h1 className="md:text-titulo text-subtitulo font-main font-bold">{title}</h1>
            <p className="md:text-texto text-description font-second">{description}</p>
            <h2 className="md:text-subtitulo text-texto text-texto font-third text-blue-2">{subtitle}</h2>
        </div>
    )
}