
import ring from '../assets/icons/ring.svg'
import locationImg from '../assets/icons/location.svg'
import phoneImg from '../assets/icons/phone.svg'
import emailImg from '../assets/icons/mail.svg'
import clock from '../assets/icons/clock.svg'
import { IconData } from './IconData'

export function ProfileCard({ image, age, status, location, phone, email }) {

    return (
        <div className="drop-shadow-lg bg-white p-2 rounded-2xl w-[19.188rem] mt-4">
            <div className="w-[18.125rem] h-[12.938rem]  overflow-hidden rounded-xl">
                <img className='object-fit' src={image} alt="" />
            </div>
            <div className='py-4 px-2 flex flex-col'>
                <h2 className="font-second font-bold text-texto mb-2">Personal Information</h2>
                {/* <IconData icon={locationImg} title={`Location: ${location}`}/> */}
                <IconData icon={phoneImg} title={`Phone: ${phone}`} />
                <IconData icon={emailImg} title={`Email: ${email}`} />
            </div>
        </div>
    )
}