import { useParams } from "react-router-dom";
import { IntroSection } from "../common/IntroSection";
import { SecondSection } from "../common/SecondSection";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function Project({ title, description, image }) {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
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

    const { id } = useParams();
    const projects = [
        {
            id: 1,
            title: "A la Deriva",
            description: "We are four programmer friends, united by passion and creativity. We dream of starting a business from scratch that allows us to work together in technology services.",
            subtitle: "Landing Page",
            image: [
                "../projects/juego/MenuPrincipal.png",
                "../projects/juego/Controles.png",
                "../projects/juego/Historia.png",
                "../projects/juego/Nivel1.png",
                "../projects/juego/Nivel2.png",
                "../projects/juego/Nivel3.png",
                "../projects/juego/Win.png",
            ],
            link: "https://via.placeholder.com/400",
        },
        {
            id: 2,
            title: "Quintana del Rey",
            description: "A robust e-commerce platform designed to provide seamless shopping experiences with integrated payment gateways and user-friendly interfaces.",
            subtitle: "Web Application",
            image: [
                "../projects/juego/MenuPrincipal.png",
                "../projects/juego/Controles.png",
                "../projects/juego/Historia.png",
                "../projects/juego/Nivel1.png",
                "../projects/juego/Nivel2.png",
                "../projects/juego/Nivel3.png",
                "../projects/juego/Win.png",
            ],
            link: "https://via.placeholder.com/400",
        },
        {
            id: 3,
            title: "Vinx",
            description: "A productivity tool to help users organize tasks, set deadlines, and track progress efficiently.",
            subtitle: "Mobile Application",
            image: [
                "../projects/vinx/logo_vinx.jpg",
                "../projects/vinx/actividades diarias.jpg",
                "../projects/vinx/Main-1.jpg",
                "../projects/vinx/Main.jpg",
                "../projects/vinx/Progreso.jpg",
                "../projects/vinx/vinxLogin.jpg",
            ],
            link: "https://via.placeholder.com/400",
        },
        {
            id: 4,
            title: "Marlin",
            description: "A personal portfolio website showcasing projects, skills, and experiences in a visually appealing manner.",
            subtitle: "Website",
            image: [
                "../projects/marlin/Marlin-loading.jpeg",
                "../projects/marlin/main.jpeg",
                "../projects/marlin/categories.jpeg",
                "../projects/marlin/search.jpeg",
                "../projects/marlin/stores.jpeg",
                "../projects/marlin/inventory.jpeg",
            ],
            link: "https://via.placeholder.com/400",
        },
        {
            id: 5,
            title: "Cabinas San Isidro",
            description: "A personal portfolio website showcasing projects, skills, and experiences in a visually appealing manner.",
            subtitle: "Website",
            image: [
                "../projects/csi/landing1.png",
                "../projects/csi/landing2.png",
                "../projects/csi/landing3.png",
                "../projects/csi/landing4.png",
                "../projects/csi/rooms.png",
                "../projects/csi/benefects.png",
                "../projects/csi/aboutus.png",
                "../projects/csi/numbers.png",
                "../projects/csi/contactus.png",
            ],
            link: "https://lively-capybara-7354dc.netlify.app/",
        },
    ];

    const project = projects.find((proj) => proj.id == id);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (project) {
            setIsLoading(false);
        }
    }, [project]);


    return (
        <>
            <Header />
            {/* <IntroSection title='Drexler Jesus Guzmán Cruz' subtitle='Informatic and Multimedia Technology' /> */}
            <div className="md:mx-60 mx-5 overflow-hidden">

                <SecondSection title={project.title} description={project.description} subtitle={project.subtitle} />

                <div className="md:w-[50vw] m-auto">

                    <Slider {...settings} className="">
                        {project.image.map((img, index) => (
                            <div key={index} className="bg-grey-1 rounded-lg drop-shadow-lg">
                                <picture className="p-4 flex justify-center items-center">
                                    <img className="rounded-lg max-h-[50vh]" src={img} alt={`Project image ${index + 1}`} />
                                </picture>
                            </div>
                        ))}
                    </Slider>

                    <div className='my-6 text-center bg-blue-1 rounded-sm px-8 py-3 text-white font-second font-subtitulo'>
                        <a href={project.link} >Visitar Sitio</a>
                    </div>
                </div>

                <SecondSection title="Requirements" description={project.description} />
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    <div>
                        <h2 className="md:text-subtitulo text-texto  font-third underline underline-offset-4 text-blue-2 pt-2">Funtionals</h2>
                        <p className="md:text-texto font-second py-2 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, numquam.</p>
                    </div>
                    <div>
                        <h2 className="md:text-subtitulo text-textofont-third underline underline-offset-4 text-blue-2 pt-2">No Funtional</h2>
                        <p className="md:text-texto font-second py-2 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, numquam.</p>
                    </div>
                    <div>
                        <h2 className="md:text-subtitulo font-third underline underline-offset-4 text-blue-2 pt-2">Technical</h2>
                        <p className="md:text-texto font-second py-2 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, numquam.</p>
                    </div>

                </div>
            </div>

            <Footer />

        </>
    )
}