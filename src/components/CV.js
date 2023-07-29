import { Trans, useTranslation } from 'react-i18next'

import { BiLinkExternal } from 'react-icons/bi'
import React from 'react'
import { useCVTranslations } from '../hooks'

export const CV = React.forwardRef((props, ref) => {
	const { t } = useTranslation()
	const { PersonalInfo, Languages, Education, WorkExperiences, PersonalProjects } = useCVTranslations()

	return (
		<div
			id="CV"
			className="flex flex-col h-full text-[#2C74B3] w-full gap-11 scroll-smooth md:flex-row md:max-h-[70vh] p-4"
			ref={ref}
		>
			<div className="flex flex-col gap-y-10">
				<div>
					<span className="h4">{t('Personal information')}</span>
					<div className="flex flex-col gap-y-1">
						{PersonalInfo.map(({ icon, text, url }, idx) => (
							<div className="flex items-center gap-4" key={idx}>
								<span>{icon}</span>
								{!!url ? (
									<a href={url} target="_blank" rel="noreferrer" className="href link inline-flex items-center gap-x-3">
										<Trans i18nKey={text} />
										<BiLinkExternal size={18} />
									</a>
								) : (
									<Trans i18nKey={text} />
								)}
							</div>
						))}
					</div>
				</div>

				<div>
					<span className="h4">{t('Skillset')}</span>
					<div className="flex flex-col">
						{Languages.map((language, idx) => (
							<span key={idx}>
								<Trans i18nKey={language} />
							</span>
						))}
					</div>
				</div>
				<div>
					<span className="h4">{t('Education')}</span>
					<div className="flex flex-col gap-y-4">
						{Education.map(({ start, end, institution, program }, idx) => (
							<div className="flex flex-col items-start" key={idx}>
								<span>
									{start} - {end} - {institution}
								</span>
								<span>{program}</span>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-y-7">
				<div className="flex flex-col gap-y-6">
					<div>
						<span className="text-[36px]">{t('Work experience')}</span>
					</div>
					<div className="flex flex-col gap-y-10">
						{WorkExperiences.map(({ start, end, company, title, descriptions, technologies }, idx) => (
							<div className="flex flex-col" key={idx}>
								<div className="flex flex-col">
									<span className="h3 m-0">
										{start} - {end} / {company}
									</span>
									<span className="subtitle mb-3">
										<i>{title}</i>
									</span>
								</div>
								<ul>
									{descriptions.map((description, innerIdx) => (
										<li className="flex gap-x-4" key={innerIdx}>
											<span>-</span>
											<span>
												<Trans i18nKey={description} />
											</span>
										</li>
									))}
									<li className="my-1">
										<span className="font-semibold">{t('Technologies')}: </span> {technologies}
									</li>
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-y-6">
					<div>
						<span className="text-[36px]">{t('Personal highlights')}</span>
					</div>
					<div className="flex flex-col gap-y-10">
						{PersonalProjects.map(({ name, title, descriptions, repoURL, websiteURL, technologies }, idx) => (
							<div className="flex flex-col" key={idx}>
								<div className="flex flex-col">
									<span className="h3 m-0">{name}</span>
									<span className="subtitle mb-3">
										<i>{title}</i>
									</span>
									{websiteURL && (
										<a
											href={websiteURL.ref}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center gap-x-3 subtitle font-semibold mb-3 href"
										>
											<i>{t('Click here to go to website')}</i>
											<BiLinkExternal size={18} />
										</a>
									)}
									{repoURL.map((link, idx) => (
										<a
											href={link}
											key={idx}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center gap-x-3 subtitle font-semibold mb-3 href"
										>
											<i>{t('Click here to access repo')}</i>
											<BiLinkExternal size={18} />
										</a>
									))}
								</div>
								<ul>
									{descriptions.map((description, innerIdx) => (
										<li className="flex gap-x-4" key={innerIdx}>
											<span>-</span>
											<span>
												<Trans i18nKey={description} />
											</span>
										</li>
									))}
									<li className="my-1">
										<span className="font-semibold">{t('Technologies')}: </span> {technologies}
									</li>
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
})
