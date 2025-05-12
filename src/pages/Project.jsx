import { useParams } from "react-router-dom";
import { IntroSection } from "../common/IntroSection";
import { SecondSection } from "../common/SecondSection";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectsFile from "../assets/projects.json";


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
    const project = projectsFile.find((proj) => proj.id == id);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (project) {
            setIsLoading(false);
        }
    }, [project]);


    return (
        <>
            <Header />
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

                <SecondSection title="Requirements" description="For the development of this project, a series of essential requirements were established to guide its planning and execution, with the goal of ensuring the feasibility, efficiency, and quality of the final product." />
                <div className="grid md:grid-cols-3 gap-10 text-center">
                    <div>
                        <h2 className="md:text-subtitulo text-texto  font-third underline underline-offset-4 text-blue-2 pt-2">Funtionals</h2>
                        <p className="md:text-texto font-second py-2 text-start whitespace-pre-line">{project.funtionals}</p>
                    </div>
                    <div>
                        <h2 className="md:text-subtitulo text-textofont-third underline underline-offset-4 text-blue-2 pt-2">No Funtional</h2>
                        <p className="md:text-texto font-second py-2 text-start whitespace-pre-line">{project.noFuntionals}</p>
                    </div>
                    <div>
                        <h2 className="md:text-subtitulo font-third underline underline-offset-4 text-blue-2 pt-2">Technical</h2>
                        <p className="md:text-texto font-second py-2 text-start whitespace-pre-line">{project.technical}</p>
                    </div>

                </div>
            </div>

            <Footer />

        </>
    )
}