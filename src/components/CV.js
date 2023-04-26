import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaMap, FaPhone, FaEnvelope, FaLinkedin, FaGlobe, FaGithub } from 'react-icons/fa'
import { GITHUB_PROFILE_URL, LINKEDIN_URL } from '../common'

export const CV = () => {
    const { t } = useTranslation()
    const [open, setOpen] = React.useState(false)

    const PersonalInfo = [
        { icon: <FaMap />, text: t('Montreal, QC') },
        { icon: <FaPhone />, text: '+1 514-966-8481' },
        { icon: <FaEnvelope />, text: 'ant.hakim.stud@gmail.com' },
        { icon: <FaGlobe />, text: `${t('English')}, ${t('French')}` },
        { icon: <FaLinkedin />, url: LINKEDIN_URL, text: t('My LinkedIn') },
        { icon: <FaGithub />, url: GITHUB_PROFILE_URL, text: t('My Github') },
    ]

    const Languages = ['ReactJS', 'NodeJS', 'Javascript/HTML/CSS', 'AWS', 'StencilJS', 'SpringBoot', 'Python', 'C#', 'EmberJS', 'PolymerJS', 'Angular']

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
            title: t('Senior Frontend Engineer'),
            descriptions: [
                t(`GoTo.a`),
                t(`GoTo.b`),
                t(`GoTo.c`),
                t(`GoTo.d`),
            ],
            technologies: `ReactJS 17-18, Jest, Jenkins GitHub, Confluence, Bitbucket, Python, REST API, SonarQube`
        },
        {
            start: 'Dec 2020',
            end: 'Jan 2022',
            company: 'Desjardins',
            title: t('Fullstack engineer'),
            descriptions: [
                t(`Desjardins.a`),
                t(`Desjardins.b`),
                t(`Desjardins.c`),
                t(`Desjardins.d`),
            ],
            technologies: `Spring Boot, StencilJs, Angular CLI, CloudFoundry, HTML/CSS, ConcourseCI, Jira, Confluence, Bitbucket, Kubernetes, REST API, Liferay`
        },
        {
            start: 'Jan 2019',
            end: 'May 2019',
            company: 'Bell Canada',
            title: t('Fullstack engineer'),
            descriptions: [
                t(`Bell.a`),
                t(`Bell.b`),
                t(`Bell.c`),
                t(`Bell.d`),
            ],
            technologies: `C# (EF Core 2.1/3.1), EmberJS, MySQL, HTML/CSS, Bootstrap, Jira, Bamboo, Confluence, Bitbucket, Docker, Kubernetes, REST API`
        },
    ]

    const PersonalProjects = [
        {
            name: 'Portfolio',
            title: t('Web development'),
            links: [],
            descriptions: [
                t(`Portfolio.a`),
                t(`Portfolio.b`),
                t(`Portfolio.c`),
            ],
            technologies: `ReactJS, Tailwind CSS, AWS S3, Cloudfront, Route 53, Certificate Manager`
        },
        {
            name: 'Pickside',
            title: t('Rest API application'),
            links: [],
            descriptions: [
                t(`Pickside.a`),
                t(`Pickside.b`),
                t(`Pickside.c`),
                t(`Pickside.d`),
                t(`Pickside.e`),
            ],
            technologies: `NodeJS, ReactJS/Redux, Typescript, MUI v5, MongoDB/NoSQL,, Github, Docker, HTML/CSS, AWS EC2`
        },
        {
            name: 'Discord',
            title: t('Rest API application'),
            links: [],
            descriptions: [
                t(`Discord.a`),
                t(`Discord.b`),
            ],
            technologies: `ReactJS 17-18, Jest, Jenkins GitHub, REST API`
        },
        {
            name: 'Sadbois',
            title: t('Rest API application'),
            links: [],
            descriptions: [
                t(`Sadbois.a`),
                t(`Sadbois.b`),
                t(`Sadbois.c`),
            ],
            technologies: `ReactJS 17-18, Jest, Jenkins GitHub, REST API`
        },


    ]

    return (
        <div className='flex xs:flex-col md:flex-row  text-primary w-full gap-11 scroll-smooth max-h-[70vh] overflow-y-scroll scrollbar'>
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
                        <span className='text-[36px]'>{t('Personal highlights')}</span>
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
    )
}