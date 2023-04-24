import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaMap, FaPhone, FaEnvelope, FaLinkedin, FaGlobe, FaGithub } from 'react-icons/fa'
import { GITHUB_PROFILE_URL, LINKEDIN_URL } from '../common'
import CTAButtons from './CTAButtons'
import Modale from './Modale'

export const CV = () => {
    const { t } = useTranslation()
    const [open, setOpen] = React.useState(false)

    const PersonalInfo = [
        { icon: <FaMap />, text: t('Montreal, QC') },
        { icon: <FaPhone />, text: '+1 514-966-8481' },
        { icon: <FaEnvelope />, text: ['ant.hakim.stud@gmail.com'] },
        { icon: <FaGlobe />, text: [t('English'), t('French')] },
        { icon: <FaLinkedin />, url: LINKEDIN_URL, text: t('My LinkedIn') },
        { icon: <FaGithub />, url: GITHUB_PROFILE_URL, text: t('My Github') },
    ]

    const Languages = ['ReactJS', 'NodeJS', 'Javascript/HTML/CSS', 'StencilJS', 'SpringBoot', 'Python', 'C#', 'EmberJS', 'PolymerJS', 'Angular']

    const Education = [
        { start: '2016', end: '2020', institution: 'ETS', program: t('Software Engineering') },
        { start: '2015', end: '2016', institution: 'UQAM', program: t('Computer Science (Certificate)') },
        { start: '2011', end: '2014', institution: 'Vanier College', program: t('Computer Science & technology') },
    ]

    const WorkExperiences = [
        {
            start: 'Jan 2022',
            end: 'Present',
            company: 'GoTo (LogMeIn)',
            title: 'Senior Frontend Engineer',
            descriptions: [
                t(`Responsible for building a submodule on a newer platform which helped the transition of 65% of current clients (estimated) from the legacy application`),
                t(`Working closely with UI/UX team to bring a better experience for customers`),
                t(`Responsible for developing our own components when needed add them to the internal library`),
                t(`Using feature branch deployment as part of our testing process`),
                t(`Frequently demo'ing features that I developed in front of clients`)
            ],
            technologies: `ReactJS 17-18, Jest, Jenkins GitHub, Confluence, Bitbucket, Python, REST API, SonarQube`
        },
        {
            start: 'Dec 2020',
            end: 'Jan 2022',
            company: 'Desjardins',
            title: 'Fullstack engineer',
            descriptions: [
                t(`Lead the development and introduced rigorous coding standards of our frontend application in Typescript using StencilJS`),
                t(`Developed new features for Desjardins' applications using the latest trends in tech and architecture;`),
                t(`Successfully set up our continuous integration pipeline from scratch which improved our deployment performance significantly (~5x) using Concourse CI`),
                t(`Successfully setup an API for our backend to accept calls from other internal applications using Spring Boot`),
            ],
            technologies: `Spring Boot, StencilJs, Angular CLI, CloudFoundry, HTML/CSS, ConcourseCI, Jira, Confluence, Bitbucket, Kubernetes, REST API, Liferay`
        },
        {
            start: 'Jan 2019',
            end: 'May 2019',
            company: 'Bell Canada',
            title: 'Fullstack engineer',
            descriptions: [
                t(`Team lead for the entire lifecycle of the project. Created the UX design and the entire base architecture of the app's frontend`),
                t(`Created automated testing (unit and integration testing) for every new feature added`),
                t(`After project completion, switched to the backend team and helped develop and maintain new features in C#`),
                t(`Debug, fixed a complex database system and helped update the backend automated migrations scripts`),
            ],
            technologies: `C# (EF Core 2.1/3.1), EmberJS, MySQL, HTML/CSS, Bootstrap, Jira, Bamboo, Confluence, Bitbucket, Docker, Kubernetes, REST API`
        },
    ]

    const PersonalProjects = [
        {
            name: 'Sadbois',
            title: t('Rest API application'),
            links: [],
            descriptions: [
                t(`Responsible for building a submodule on a newer platform which helped the transition of 65% of current clients (estimated) from the legacy application`),
                t(`Working closely with UI/UX team to bring a better experience for customers`),
                t(`Responsible for developing our own components when needed add them to the internal library`),
                t(`Using feature branch deployment as part of our testing process`),
                t(`Frequently demo'ing features that I developed in front of clients`)
            ],
            technologies: `ReactJS 17-18, Jest, Jenkins GitHub, Confluence, Bitbucket, Python, REST API, SonarQube`
        },
        {
            name: 'Pickside',
            title: t('Rest API application'),
            links: [],
            descriptions: [
                t(`Designed and implemented an online store application from start to finish using React JS and Redux`),
                t(`Use of custom hooks through out the frontend to make use of better implementation design`),
                t(`Successfully developed a REST API backend in with NodeJS`),
                t(`Implemented an Auth0 support for authentication through the backend`),
                t(`Attached a functional mongodb database to my backend with an initializer script that populates collections upon first start`),
            ],
            technologies: `NodeJS, ReactJS/Redux, Typescript, MUI v5, NoSQL, MongoDB, Github, Docker, HTML/CSS, AWS EC2`
        },
        {
            name: 'Portfolio',
            title: t('Web development'),
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
        <Modale
            title={t('My CV')}
            buttonName={t('My CV')}
            open={open}
            handleOpen={() => setOpen(true)}
            handleClose={() => setOpen(false)}
            footerContent={<CTAButtons onClose={() => setOpen(false)} noSave />}
        >
            <div className='flex text-primary w-full gap-11 scroll-smooth max-h-[70vh] overflow-y-scroll scrollbar'>
                <div className="flex flex-col gap-y-10">
                    <div>
                        <span className='h4'>{t('Personal information')}</span>
                        <div className='flex flex-col gap-y-1'>
                            {PersonalInfo.map(({ icon, text, url }, idx) => (
                                <div className='flex items-center gap-4' key={idx}>
                                    <span>{icon}</span>
                                    {!!url ?
                                        <a href={url} target='_blank' rel='noreferrer' className='href link'>
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
                        <span className='h4'>{t('Skillset')}</span>
                        <div className='flex flex-col'>
                            {Languages.map((language, idx) => (
                                <span key={idx}>{language}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <span className='h4'>{t('Education')}</span>
                        <div className='flex flex-col gap-y-4'>
                            {Education.map(({ start, end, institution, program }, idx) => (
                                <div className='flex flex-col items-start' key={idx}>
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
                            <span className='text-[36px]'>{t('Work experience')}</span>
                        </div>
                        <div className='flex flex-col gap-y-10'>
                            {WorkExperiences.map(({ start, end, company, title, descriptions, technologies }, idx) => (
                                <div className='flex flex-col' key={idx}>
                                    <div className='flex flex-col'>
                                        <span className='h3 m-0'>{start} - {end} / {company}</span>
                                        <span className='subtitle mb-3'><i>{title}</i></span>
                                    </div>
                                    <ul>
                                        {descriptions.map((description, innerIdx) => (
                                            <li className='flex gap-x-4' key={innerIdx}>
                                                <span>-</span>
                                                <span>{description}</span>
                                            </li>
                                        ))}
                                        <li className='my-1'>
                                            <span className='font-semibold'>{t('Technologies')}: </span> {technologies}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-6'>
                        <div>
                            <span className='h2'>{t('Personal highlights')}</span>
                        </div>
                        <div className='flex flex-col gap-y-10'>
                            {PersonalProjects.map(({ name, title, descriptions, technologies }, idx) => (
                                <div className='flex flex-col' key={idx}>
                                    <div className='flex flex-col'>
                                        <span className='h3 m-0'>{name}</span>
                                        <span className='subtitle mb-3'><i>{title}</i></span>
                                    </div>
                                    <ul>
                                        {descriptions.map((description, innerIdx) => (
                                            <li className='flex gap-x-4' key={innerIdx}>
                                                <span>-</span>
                                                <span>{description}</span>
                                            </li>
                                        ))}
                                        <li className='my-1'>
                                            <span className='font-semibold'>{t('Technologies')}: </span> {technologies}
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Modale>
    )
}