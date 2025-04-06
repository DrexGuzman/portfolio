import github from '../assets/icons/Github_light.svg';
import LinkedIn from '../assets/icons/linkedin.svg';
import Instagram from '../assets/icons/Instagram_light.svg';

export function SocialMedia() {
    return (
        <div className="flex gap-4 pt-4">
            <h1 className="md:text-subtitulo text-texto font-main font-bold">Social Media:</h1>
            <div className='flex justify-around m-auto md:gap-60 gap-10'>
            <a href="https://github.com/DrexGuzman" target="_blank" rel="noreferrer">
                <img className='md:size-10 size-8' src={github} alt="facebook" />
            </a>
            <a href="https://www.linkedin.com/in/drexler-jes%C3%BAs-guzm%C3%A1n-cruz-2b3498199/" target="_blank" rel="noreferrer">
                <img className='md:size-10 size-8' src={LinkedIn} alt="instagram" />
            </a>
            <a href="https://www.instagram.com/sr_brinquitos/" target="_blank" rel="noreferrer">
                <img className='md:size-10 size-8' src={Instagram} alt="twitter" />
            </a>
            </div>
        </div>
    )
}