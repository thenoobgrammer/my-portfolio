import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaMap, FaPhone, FaEnvelope, FaLinkedin, FaGlobe, FaGithub } from 'react-icons/fa'
import { GITHUB_PROFILE_URL, LINKEDIN_URL } from '../common'

export const CV = () => {
    const { t } = useTranslation()

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
            technologies: `ReactJS 18, React testing library, Jest, Jenkins, Git, GitHub, Confluence, Bitbucket, REST API, SonarQube`
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
            links: [t('Portfolio.repo')],
            descriptions: [
                t(`Portfolio.a`),
                t(`Portfolio.b`),
                t(`Portfolio.c`),
            ],
            technologies: `React 18, Tailwind CSS, AWS S3, Cloudfront, Route 53, Certificate Manager`
        },
        {
            name: 'Pickside',
            title: t('Rest API application'),
            links: [t('Pickside.repo')],
            descriptions: [
                t(`Pickside.a`),
                t(`Pickside.b`),
                t(`Pickside.c`),
                t(`Pickside.d`),
            ],
            technologies: `NodeJS, ReactJS/Redux, Typescript, MUI v5, MongoDB/NoSQL, Github, Docker, AWS EC2`
        },
        {
            name: 'Discord',
            title: t('Rest API application'),
            links: [t('Discord.repo')],
            descriptions: [
                t(`Discord.a`),
                t(`Discord.b`),
            ],
            technologies: `NodeJS, Express 4, GitHub, Typescript 4.8`
        },
        {
            name: 'Sadbois',
            title: t('Rest API application'),
            links: [t('Sadboiss.repo')],
            descriptions: [
                t(`Sadboiss.a`),
                t(`Sadboiss.b`),
                t(`Sadboiss.c`),
            ],
            technologies: `ReactJS 17, Jest, GitHub, REST API, Typescript 4.8`
        },


    ]

    return (
        <div className='flex flex-col h-full text-primary w-full gap-11 scroll-smooth md:flex-row md:max-h-[70vh] p-4'>
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
                        {PersonalProjects.map(({ name, title, descriptions, links, technologies }, idx) => (
                            <div className='flex flex-col' key={idx}>
                                <div className='flex flex-col'>
                                    <span className='h3 m-0'>{name}</span>
                                    <span className='subtitle mb-3'><i>{title}</i></span>
                                    {links.map((link, idx) => (
                                        <a href={link} key={idx} className='subtitle font-semibold mb-3 href'>
                                            <i>{t('Click here to access')}</i>
                                        </a>
                                    ))}
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