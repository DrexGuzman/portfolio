import { IntroSection } from '../common/IntroSection'
import { SecondSection } from '../common/SecondSection'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ProfileCard } from '../common/ProfileCard'
import { Skills } from '../common/Skills'
import { SocialMedia } from '../common/SocialMedia'
import Drex from '../assets/Drex.jpg'
import { EducationCard } from '../common/EducationCard'
import ccsp from '../assets/CCCSP Negro_web.png'
import tec from '../assets/TEC.jpg'
import tecnosalud from '../assets/Tecnosalud.png'
import ucr from '../assets/UCR.png'
import { ProjectCard } from '../common/ProjectCard'
import proyect from '/projects/juego/MenuPrincipal.png'
import vinx from '/projects/vinx/logo_vinx.jpg'
import marlin from '/projects/marlin/loading.png'
import csi from '/projects/csi/csimain.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useEffect } from "react";



export function Index() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <Header />

            <main className='md:mx-60 mx-5 overflow-hidden'>
                <IntroSection title='Drexler Jesus Guzmán Cruz' subtitle='Informatic and Multimedia Technology' />
                <h2 className="text-center md:text-subtitulo text-texto font-third text-blue-2 pb-10">(University of Costa Rica)</h2>

                <div className='md:flex md:justify-center md:gap-20 flex flex-col md:flex-row items-center'>
                    <ProfileCard image={Drex} age='30' status='single' location='Puntarenas, El Roble' phone='+(506)8486 8704' email='d.jesusgc95@gmail.com' />

                    <div className='h-full w-full m-auto gap-4'>
                        <Skills />
                        <SocialMedia />
                    </div>
                </div>

                {/* Section about degrees */}
                <SecondSection title='My Education' description='My academic training has provided me with a strong foundation in web design programming and equipped me with the skills and knowledge necessary to excel in my professional career.' subtitle='Education' />
                <div className='flex flex-wrap justify-center gap-10'>
                    <EducationCard image={ccsp} institution='scientific High School of Costa Rica' degree='Secondary Education Diploma' year='2012' />
                    <EducationCard image={tec} institution='Costa Rica Institute of Technology' degree='Advance Bachelor´s Degree in Agricultural Engineering' year='2020' />
                    <EducationCard image={tecnosalud} institution='Tecnosalud' degree='Electroencephalography Technician' year='2021' />
                    <EducationCard image={ucr} institution='University of Costa Rica' degree='Bachelor´s Informatic and Multimedia Technology' year='Currently' />
                </div>

                {/* Section about certifications */}
                <SecondSection title='My certifications' description='I have also taken additional courses in networking, cibersecurity, Ethical Hacking and cloud to further enhance my expertise.' subtitle='Certifications' />
                <div className='flex flex-wrap justify-center gap-10'>
                    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="85ad294d-0ccc-4e95-9bc1-9a2a6b3857f4" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="b3e491dd-54df-4066-b013-95f1661baa43" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="b1678260-d131-4e4d-81e5-661ac31e8261" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="7bab7fd2-c568-4e28-842e-c42ac65426de" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="bb2aad20-f3be-4fd0-bf89-23ae505744f3" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                </div>

                {/* Section about projects */}
                <SecondSection title='What have I done?' description='I am a passionate programmer who loves creativity and challenges. I have worked on university, personal, and professional projects, always seeking to learn and grow.' subtitle='Projects' />
                <Slider {...settings} className="px-4 flex justify-center gap-10 mb-5">
                    <ProjectCard id={1} title='A la Deriva' date='21/04/24' description='A project from the Fundamentals of Programming course, which involved creating a video game with a free theme and design style, implementing threads, collisions, commands, and JSON files.' image={proyect} />
                    {/* <ProjectCard id={2} title='Quintana del Rey' date='21/04/24' description='A website developed in pure HTML and CSS for a fictional Spanish food restaurant. Laragon was used as a local server, and an entity-relationship model was created for the database. Additionally, web scraping was performed to obtain recipe descriptions and images to display on the website.' image={proyect} /> */}
                    <ProjectCard id={3} title='Vinx' date='21/04/24' description='A website similar to a virtual agenda for university courses was developed using React and Tailwind for the frontend and Laravel for the backend. There were two modules: the student module, where students belonged to courses and their assignments were displayed in their calendar within the application, and the teacher module, where teachers could add courses, groups, and assignments for each group.' image={vinx} />
                    <ProjectCard id={4} title='Marlin' date='21/04/24' description='A mobile application for Android designed for local e-commerce in the cantons of Puntarenas, Esparza, and Miramar. It allowed small businesses to have their own virtual store to offer their products. Additionally, delivery drivers could register within the app to promote employment in the province.' image={marlin} />
                    <ProjectCard id={5} title='Cabinas San Isidro' date='05/11/24' description='Web site for a local Cabins equipped for tourist rental in Puntarenas, Costa Rica.' image={csi} />
                </Slider>

            </main>

            <Footer />
        </>
    )
}