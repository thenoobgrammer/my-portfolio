
import { FaMap, FaPhone, FaEnvelope, FaLinkedin, FaGlobe, FaGithub } from 'react-icons/fa'
import { GITHUB_PROFILE_URL, LINKEDIN_URL } from '../common'

export const CV = () => {
    const PersonalInfo = [
        { icon: <FaMap />, text: 'Montreal, QC' },
        { icon: <FaPhone />, text: '+1 514-966-8481' },
        { icon: <FaEnvelope />, text: ['ant.hakim.stud@gmail.com'] },
        { icon: <FaLinkedin />, text: LINKEDIN_URL, isUrl: true },
        { icon: <FaGlobe />, text: ['English, French'] },
        { icon: <FaGithub />, text: GITHUB_PROFILE_URL, isUrl: true },
    ]

    const Languages = ['ReactJS', 'NodeJS', 'Javascript/HTML/CSS', 'StencilJS', 'SpringBoot', 'Python', 'C#', 'EmberJS', 'PolymerJS', 'Angular']

    const Education = [
        { start: '2016', end: '2020', institution: 'ETS', program: 'Software Engineering' },
        { start: '2015', end: '2016', institution: 'UQAM', program: 'Computer Science (Certificate)' },
        { start: '2011', end: '2014', institution: 'Vanier College', program: 'Computer Science & technology' },
    ]

    const WorkExperiences = [
        {
            start: 'Jan 2022',
            end: 'Present',
            company: 'GoTo (LogMeIn)',
            title: 'Senior Frontend Engineer',
            descriptions: [
                `Responsible for building a submodule on a newer platform which helped the transition of 65% of current clients (estimated) from the legacy application`,
                `Working closely with UI/UX team to bring a better experience for customers`,
                `Responsible for developing our own components when needed add them to the internal library`,
                `Using feature branch deployment as part of our testing process`,
                `Frequently demo'ing features that I developed in front of clients`
            ],
            technologies: `ReactJS 17-18, Jest, Jenkins GitHub, Confluence, Bitbucket, Python, REST API, SonarQube`
        },
        {
            start: 'Dec 2020',
            end: 'Jan 2022',
            company: 'Desjardins',
            title: 'Fullstack engineer',
            descriptions: [
                `Lead the development and introduced rigorous coding standards of our frontend application in Typescript using StencilJS`,
                `Developed new features for Desjardins' applications using the latest trends in tech and architecture;`,
                `Successfully set up our continuous integration pipeline from scratch which improved our deployment performance significantly (~5x) using Concourse CI`,
                `Successfully setup an API for our backend to accept calls from other internal applications using Spring Boot`,
            ],
            technologies: `Spring Boot, StencilJs, Angular CLI, CloudFoundry, HTML/CSS, ConcourseCI, Jira, Confluence, Bitbucket, Kubernetes, REST API, Liferay`
        },
        {
            start: 'Jan 2019',
            end: 'May 2019',
            company: 'Bell Canada',
            title: 'Fullstack engineer',
            descriptions: [
                `Team lead for the entire lifecycle of the project. Created the UX design and the entire base architecture of the app's frontend`,
                `Created automated testing (unit and integration testing) for every new feature added`,
                `After project completion, switched to the backend team and helped develop and maintain new features in C#`,
                `Debug, fixed a complex database system and helped update the backend automated migrations scripts`,
            ],
            technologies: `C# (EF Core 2.1/3.1), EmberJS, MySQL, HTML/CSS, Bootstrap, Jira, Bamboo, Confluence, Bitbucket, Docker, Kubernetes, REST API`
        },
    ]

    const PersonalProjects = [
        {
            name: 'Sadbois',
            title: 'Rest API application',
            links: [],
            descriptions: [
                `Responsible for building a submodule on a newer platform which helped the transition of 65% of current clients (estimated) from the legacy application`,
                `Working closely with UI/UX team to bring a better experience for customers`,
                `Responsible for developing our own components when needed add them to the internal library`,
                `Using feature branch deployment as part of our testing process`,
                `Frequently demo'ing features that I developed in front of clients`
            ],
            technologies: `ReactJS 17-18, Jest, Jenkins GitHub, Confluence, Bitbucket, Python, REST API, SonarQube`
        },
        {
            name: 'Pickside',
            title: 'Rest API application',
            links: [],
            descriptions: [
                `Designed and implemented an online store application from start to finish using React JS and Redux`,
                `Use of custom hooks through out the frontend to make use of better implementation design`,
                `Successfully developed a REST API backend in with NodeJS`,
                `Implemented an Auth0 support for authentication through the backend`,
                `Attached a functional mongodb database to my backend with an initializer script that populates collections upon first start`,
            ],
            technologies: `NodeJS, ReactJS/Redux, Typescript, MUI v5, NoSQL, MongoDB, Github, Docker, HTML/CSS, AWS EC2`
        },
        {
            name: 'Portfolio',
            title: 'Web development',
            links: [],
            descriptions: [
                ``,
                ``,
                ``,
            ],
            technologies: `C# (EF Core 2.1/3.1), EmberJS, MySQL, HTML/CSS, Bootstrap, Jira, Bamboo, Confluence, Bitbucket, Docker, Kubernetes, REST API`
        },
    ]

    return (
        <div className='flex text-primary max-w-6xl gap-11 scroll-smooth'>
            <div className="flex flex-col gap-y-10">
                <div className=''>
                    <span className='h3 m-0'>Personal information</span>
                    <div className='flex flex-col gap-y-1'>
                        {PersonalInfo.map(({ icon, text, isUrl }, idx) => (
                            <div className='flex items-center gap-4'>
                                <span>{icon}</span>
                                {isUrl ?
                                    <a href={text}>
                                        {text}
                                    </a>
                                    :
                                    <span>{text}</span>
                                }
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <span className='h3 m-0'>Skillset</span>
                    <div className='flex flex-col'>
                        {Languages.map((language, idx) => (
                            <span>{language}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <span className='h3 m-0'>Education</span>
                    <div className='flex flex-col gap-y-4'>
                        {Education.map(({ start, end, institution, program }, idx) => (
                            <div className='flex flex-col items-start'>
                                <span>{start} - {end} - {institution}</span>
                                <span>{program}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-7">
                <div className='flex flex-col gap-y-6'>
                    <div>
                        <span className='h2'>Work experience</span>
                    </div>
                    <div className='flex flex-col gap-y-10'>
                        {WorkExperiences.map(({ start, end, company, title, descriptions, technologies }, idx) => (
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <span className='h3 m-0'>{start} - {end} / {company}</span>
                                    <span className='h4'><i>{title}</i></span>
                                </div>
                                <ul>
                                    {descriptions.map((description) => (
                                        <li>
                                            {description}
                                        </li>
                                    ))}
                                    <li className='my-1'>
                                        <span className='font-semibold'>Technologies: </span> {technologies}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-y-6'>
                    <div>
                        <span className='h2'>Personal highlights</span>
                    </div>
                    <div className='flex flex-col gap-y-10'>
                        {PersonalProjects.map(({ name, title, descriptions, technologies }, idx) => (
                            <div className='flex flex-col'>
                                <div className='flex flex-col'>
                                    <span className='h3 m-0'>{name}</span>
                                    <span className='h4'><i>{title}</i></span>
                                </div>
                                <ul>
                                    {descriptions.map((description) => (
                                        <li>
                                            {description}
                                        </li>
                                    ))}
                                    <li className='my-1'>
                                        <span className='font-semibold'>Technologies: </span> {technologies}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}