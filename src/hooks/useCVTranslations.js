import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin, FaMap, FaPhone } from 'react-icons/fa'
import { GITHUB_PROFILE_URL, LINKEDIN_URL, PORTOFLIO_URL } from '../common'

import { CgWebsite } from 'react-icons/cg'
import React from 'react'
import { useTranslation } from 'react-i18next'

const useCVTranslations = () => {
    const { t } = useTranslation()
    const PersonalInfo = [
        { icon: <FaMap />, text: t('Montreal, QC') },
        { icon: <FaPhone />, text: '+1 514-966-8481' },
        { icon: <FaEnvelope />, text: 'ant.hakim.stud@gmail.com' },
        { icon: <FaGlobe />, text: `${t('English')}, ${t('French')}` },
        { icon: <CgWebsite />, url: PORTOFLIO_URL, text: t('My Website') },
        { icon: <FaLinkedin />, url: LINKEDIN_URL, text: t('My LinkedIn') },
        { icon: <FaGithub />, url: GITHUB_PROFILE_URL, text: t('My Github') },
    ]

    const Languages = [
        'ReactJS',
        'NodeJS',
        'Javascript/HTML/CSS',
        'AWS',
        'StencilJS',
        'SpringBoot',
        'Python',
        'C#',
        'EmberJS',
        'PolymerJS',
        'Angular',
    ]

    const Education = [
        { start: '2016', end: '2020', institution: 'ETS', program: t('Software Engineering') },
        { start: '2015', end: '2016', institution: 'UQAM', program: t('Computer Science (Certificate)') },
        { start: '2011', end: '2014', institution: t('Vanier College'), program: t('Computer Science & technology') },
    ]

    const WorkExperiences = [
        {
            start: 'Jan 2022',
            end: t('Present'),
            company: 'GoTo (LogMeIn)',
            title: t('Senior Frontend Engineer'),
            descriptions: [t(`GoTo.a`), t(`GoTo.b`), t(`GoTo.c`), t(`GoTo.d`)],
            technologies: `ReactJS 18, React testing library, Jest, Jenkins, Git, GitHub, Confluence, Bitbucket, REST API, SonarQube`,
        },
        {
            start: 'Dec 2020',
            end: 'Jan 2022',
            company: 'Desjardins',
            title: t('Fullstack engineer'),
            descriptions: [t(`Desjardins.a`), t(`Desjardins.b`), t(`Desjardins.c`), t(`Desjardins.d`)],
            technologies: `Spring Boot, StencilJs, Angular CLI, CloudFoundry, HTML/CSS, ConcourseCI, Jira, Confluence, Bitbucket, Kubernetes, REST API, Liferay`,
        },
        {
            start: 'Jan 2019',
            end: 'May 2019',
            company: 'Bell Canada',
            title: t('Fullstack engineer'),
            descriptions: [t(`Bell.a`), t(`Bell.b`), t(`Bell.c`), t(`Bell.d`)],
            technologies: `C# (EF Core 2.1/3.1), EmberJS, MySQL, HTML/CSS, Bootstrap, Jira, Bamboo, Confluence, Bitbucket, Docker, Kubernetes, REST API`,
        },
    ]

    const PersonalProjects = [
        {
            name: 'Pickside',
            title: t('Rest API application'),
            repoURL: [t('Pickside.repo')],
            websiteURL: {
                ref: t('Pickside.website'),
                placeholder: t('Pickside.accessWebsite'),
            },
            descriptions: [t(`Pickside.a`), t(`Pickside.b`), t(`Pickside.c`), t(`Pickside.d`)],
            technologies: `NodeJS/Express, React 18/Redux, Google API, Typescript, MongoDB/NoSQL, Github, Docker, AWS (Route 53, Certificate Manager, EC2)`,
        },
        {
            name: 'Portfolio',
            title: t('Web development'),
            repoURL: [t('Portfolio.repo')],
            descriptions: [t(`Portfolio.a`), t(`Portfolio.b`), t(`Portfolio.c`)],
            technologies: `React 18, Tailwind CSS, AWS (Route 53, Certificate Manager, S3)`,
        },
        {
            name: 'Discord',
            title: t('Rest API application'),
            repoURL: [t('Discord.repo')],
            descriptions: [t(`Discord.a`), t(`Discord.b`)],
            technologies: `NodeJS, Express 4, GitHub, Typescript, AWS (EC2)`,
        },
        {
            name: 'Sadbois',
            title: t('Rest API application'),
            repoURL: [t('Sadboiss.repo')],
            descriptions: [t(`Sadboiss.a`), t(`Sadboiss.b`), t(`Sadboiss.c`)],
            technologies: `ReactJS 17, Jest, GitHub, REST API, Typescript 4.8`,
        },
    ]

    return React.useMemo(() => ({ PersonalInfo, Languages, Education, WorkExperiences, PersonalProjects }), [t])
}

export default useCVTranslations