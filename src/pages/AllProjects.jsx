import { Header } from '../components/Header.jsx';
import { IntroSection } from '../common/IntroSection.jsx';
import { ProjectCard } from '../common/ProjectCard.jsx';
import { Footer } from '../components/Footer.jsx';
import game from '/projects/juego/MenuPrincipal.png'
import vinx from '/projects/vinx/logo_vinx.jpg'
import marlin from '/projects/marlin/loading.png'
import csi from '/projects/csi/csimain.png'

export function AllProjects() {
    return (
        <>
            <Header />
            <main className='md:mx-60 mx-5 overflow-hidden'>
                <IntroSection title='All the projects' subtitle=' I contributed to throughout the development and deployment phase' />

                <div className='flex flex-wrap'>
                    <ProjectCard id={1} title='A la Deriva' date='21/04/24' description='A project from the Fundamentals of Programming course, which involved creating a video game with a free theme and design style, implementing threads, collisions, commands, and JSON files.' image={game} />
                    {/* <ProjectCard id={2} title='Quintana del Rey' date='21/04/24' description='A website developed in pure HTML and CSS for a fictional Spanish food restaurant. Laragon was used as a local server, and an entity-relationship model was created for the database. Additionally, web scraping was performed to obtain recipe descriptions and images to display on the website.' image={proyect} /> */}
                    <ProjectCard id={3} title='Vinx' date='21/04/24' description='A website similar to a virtual agenda for university courses was developed using React and Tailwind for the frontend and Laravel for the backend. There were two modules: the student module, where students belonged to courses and their assignments were displayed in their calendar within the application, and the teacher module, where teachers could add courses, groups, and assignments for each group.' image={vinx} />
                    <ProjectCard id={4} title='Marlin' date='21/04/24' description='A mobile application for Android designed for local e-commerce in the cantons of Puntarenas, Esparza, and Miramar. It allowed small businesses to have their own virtual store to offer their products. Additionally, delivery drivers could register within the app to promote employment in the province.' image={marlin} />
                    <ProjectCard id={5} title='Cabinas San Isidro' date='05/11/24' description='Web site for a local Cabins equipped for tourist rental in Puntarenas, Costa Rica.' image={csi} />
                </div>
            </main>
            <Footer />
        </>
    )
}