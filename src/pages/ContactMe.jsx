import { Header } from '../components/Header.jsx';
import { SecondSection } from '../common/SecondSection.jsx';
import { ProjectCard } from '../common/ProjectCard.jsx';
import { Footer } from '../components/Footer.jsx';

export function ContactMe() {
    return (
    <>
    <Header />
    <main className="md:mx-60 mx-5">
        <SecondSection title='Contact Me' description='Feel free to reach out for any inquiries or collaborations!' subtitle='Lets stay in a touch' />
        <form 
            className='flex flex-col gap-5 items-center justify-center' 
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = {
                    fullname: formData.get('fullname'),
                    phone: formData.get('phone'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                };

                fetch('https://your-backend-endpoint.com/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => {
                    if (response.ok) {
                        alert('Message sent successfully!');
                    } else {
                        alert('Failed to send message.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred while sending the message.');
                });
            }}
        >
            <input className='w-full  border-2 border-blue-1 py-3 px-2 rounded-lg text-text font-second' type="text" name="fullname" placeholder='Fullname' required />
            <input className='w-full  border-2 border-blue-1 py-3 px-2 rounded-lg text-text font-second' type="text" name="phone" placeholder='Phone' required />
            <input className='w-full  border-2 border-blue-1 py-3 px-2 rounded-lg text-text font-second' type="email" name="email" placeholder='Email' required />
            <textarea className='w-full  border-2 border-blue-1 py-3 px-2 rounded-lg text-text font-second' name="message" cols="30" rows="10" placeholder='Message' required></textarea>
            <button className='w-full text-center bg-blue-1 rounded-lg py-3 px-2 font-bold text-white font-second font-subtitulo'>Send</button>
        </form>
    </main>
    <Footer />
    </>
    );
}