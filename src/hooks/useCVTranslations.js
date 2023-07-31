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
            descriptions: [t(`GoTo.a`), t(`GoTo.b`), t(`GoTo.c`), t(`GoTo.d`), t(`GoTo.e`), t(`GoTo.f`), t(`GoTo.g`), t(`GoTo.h`)],
            descriptionsHighlighted: [t(`GoToHighlighted.a`), t(`GoToHighlighted.b`), t(`GoToHighlighted.c`), t(`GoToHighlighted.d`), t(`GoToHighlighted.e`), t(`GoToHighlighted.f`), t(`GoToHighlighted.g`), t(`GoToHighlighted.h`)],
            technologies: `ReactJS 18, Redux-Thunk, React testing library, Jest, Jenkins, Git, GitHub, Confluence, Bitbucket, REST API, SonarQube`,
        },
        {
            start: 'Dec 2020',
            end: 'Jan 2022',
            company: 'Desjardins',
            title: t('Fullstack engineer'),
            descriptions: [t(`Desjardins.a`), t(`Desjardins.b`), t(`Desjardins.c`), t(`Desjardins.d`), t(`Desjardins.e`), t(`Desjardins.f`)],
            descriptionsHighlighted: [t(`DesjardinsHighlighted.a`), t(`DesjardinsHighlighted.b`), t(`DesjardinsHighlighted.c`), t(`DesjardinsHighlighted.d`), t(`DesjardinsHighlighted.e`), t(`DesjardinsHighlighted.f`)],
            technologies: `Spring Boot, StencilJs, AngularJS, CloudFoundry, HTML/CSS, ConcourseCI, Jira, Confluence, Bitbucket, REST API, Liferay, SonarQube`,
        },
        {
            start: 'Jan 2019',
            end: 'May 2019',
            company: 'Bell Canada',
            title: t('Fullstack engineer'),
            descriptions: [t(`Bell.a`), t(`Bell.b`), t(`Bell.c`), t(`Bell.d`), t(`Bell.e`)],
            descriptionsHighlighted: [t(`BellHighlighted.a`), t(`BellHighlighted.b`), t(`BellHighlighted.c`), t(`BellHighlighted.d`), t(`BellHighlighted.e`)],
            technologies: `C# (EF Core 2.1/3.1), EmberJS, Ember Octane, MySQL, HTML/CSS, Bootstrap, Jira, Bamboo, Confluence, Bitbucket, Docker, Kubernetes, REST API`,
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
            descriptions: [t(`Pickside.a`), t(`Pickside.b`), t(`Pickside.c`), t(`Pickside.d`), t(`Pickside.e`), t(`Pickside.f`), t(`Pickside.g`), t(`Pickside.h`), t(`Pickside.i`), t(`Pickside.j`), t(`Pickside.k`)],
            descriptionsHighlighted: [t(`PicksideHighlighted.a`), t(`PicksideHighlighted.b`), t(`PicksideHighlighted.c`), t(`PicksideHighlighted.d`), t(`PicksideHighlighted.e`), t(`PicksideHighlighted.f`), t(`PicksideHighlighted.g`), t(`PicksideHighlighted.h`), t(`PicksideHighlighted.i`), t(`PicksideHighlighted.j`), t(`PicksideHighlighted.k`)],
            technologies: `NodeJS/Express, React 18, Redux-Thunk, Google API, Typescript, MongoDB/NoSQL, Github, Docker, AWS (Route 53, Certificate Manager, EC2)`,
        },
        {
            name: 'Portfolio',
            title: t('Web development'),
            repoURL: [t('Portfolio.repo')],
            descriptions: [t(`Portfolio.a`), t(`Portfolio.b`), t(`Portfolio.c`), t(`Portfolio.d`), t(`Portfolio.e`), t(`Portfolio.f`), t(`Portfolio.g`)],
            descriptionsHighlighted: [t(`PortfolioHighlighted.a`), t(`PortfolioHighlighted.b`), t(`PortfolioHighlighted.c`), t(`PortfolioHighlighted.d`), t(`PortfolioHighlighted.e`), t(`PortfolioHighlighted.f`), t(`PortfolioHighlighted.g`)],
            technologies: `React 18, Tailwind CSS, AWS (Route 53, Certificate Manager, S3)`,
        },
        {
            name: 'Discord',
            title: t('Rest API application'),
            repoURL: [t('Discord.repo')],
            descriptions: [t(`Discord.a`), t(`Discord.b`)],
            descriptionsHighlighted: [t(`DiscordHighlighted.a`), t(`DiscordHighlighted.b`)],
            technologies: `NodeJS, Express, GitHub, Typescript, AWS (EC2)`,
        },
        {
            name: 'Sadbois',
            title: t('Rest API application'),
            repoURL: [t('Sadboiss.repo')],
            descriptions: [t(`Sadboiss.a`), t(`Sadboiss.b`), t(`Sadboiss.c`)],
            descriptionsHighlighted: [t(`SadboissHighlighted.a`), t(`SadboissHighlighted.b`), t(`SadboissHighlighted.c`)],
            technologies: `ReactJS, GitHub, REST API, Typescript, Paypal API`,
        },
    ]

    return React.useMemo(() => ({ PersonalInfo, Languages, Education, WorkExperiences, PersonalProjects }), [t])
}

export default useCVTranslations