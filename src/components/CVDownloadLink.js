import { Document, Font, Link, PDFDownloadLink, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { Trans, useTranslation } from 'react-i18next'

import { AiOutlineCloudDownload } from 'react-icons/ai'
import Spinner from './Spinner'
import { useCVTranslations } from '../hooks'

Font.register({
	family: 'Roboto',
	fonts: [
		{ src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
			fontWeight: 400,
		},
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf',
			fontWeight: 500,
		},
		{ src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 600 },
		{ src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
	],
	src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
})

const styles = StyleSheet.create({
	experienceHeader: { fontSize: 12, marginBottom: 4 },
	experienceSubtitle: { fontStyle: 'italic', fontSize: 10, marginBottom: 4 },
	experienceDescription: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'start',
		columnGap: 4,
		fontSize: 8,
	},
	personalInfoHeader: {
		fontSize: 12,
		marginBottom: 4,
	},
	personalInfoView: {
		fontSize: 10,
		rowGap: 2,
	},
	sectionTitle: {
		fontSize: 15,
		marginBottom: 4,
	},
	flexColumn: {
		display: 'flex',
		flexDirection: 'column',
	},
	flexRow: {
		display: 'flex',
		flexDirection: 'row',
	},
})

const CV_PDFDownloadLink = () => {
	const { PersonalInfo, Languages, Education, WorkExperiences, PersonalProjects } = useCVTranslations()
	const { t } = useTranslation()
	const view = true

	const CV_PDF = () => {
		return (
			<Document pageLayout="oneColumn">
				<Page size="A4" style={{ padding: 20 }}>
					<View style={{ display: 'flex', flexDirection: 'row', gap: 4, height: '100%', width: '100%' }} wrap={false}>
						<View
							style={{
								display: 'flex',
								flexDirection: 'column',
								width: '30%',
								rowGap: 10,
							}}
						>
							{/* PERSONAL INFO */}
							<View style={[styles.flexColumn, styles.personalInfoView]}>
								<Text style={styles.personalInfoHeader}>{t('Personal information')}</Text>
								{PersonalInfo.map(({ icon, text, url }, idx) =>
									!!url ? (
										<Link src={url}>
											<Trans i18nKey={text} />
										</Link>
									) : (
										<Text style={styles.text}>
											<Trans i18nKey={text} />
										</Text>
									),
								)}
							</View>
							{/* LANGUAGES */}
							<View style={[styles.flexColumn, styles.personalInfoView]}>
								<Text style={styles.personalInfoHeader}>{t('Skillset')}</Text>
								{Languages.map((language, idx) => (
									<Text style={styles.text}>
										<Trans i18nKey={language} />
									</Text>
								))}
							</View>
							{/* EDUCATION */}
							<View style={[styles.flexColumn, styles.personalInfoView, { rowGap: 10 }]}>
								<Text style={styles.personalInfoHeader}>{t('Education')}</Text>
								{Education.map(({ start, end, institution, program }, idx) => (
									<View style={[styles.flexColumn]}>
										<Text>
											{start} - {end} - {institution}
										</Text>
										<Text style={{ fontSize: 9 }}>{program}</Text>
									</View>
								))}
							</View>
						</View>
						<View style={{ width: '70%', rowGap: 20 }}>
							{/* WORK EXPERIENCE */}
							<View style={{ rowGap: 4 }}>
								<Text style={[styles.sectionTitle]}>{t('Work experience')}</Text>
								<View style={[styles.flexColumn, { rowGap: 2 }]}>
									{WorkExperiences.map(({ start, end, company, title, descriptions, technologies }) => (
										<>
											<View style={[styles.flexColumn, { marginTop: 4 }]}>
												<Text style={styles.experienceHeader}>
													{start} - {end} / {company}
												</Text>
												<Text style={styles.experienceSubtitle}>{title}</Text>
											</View>
											<View style={[styles.flexColumn, { rowGap: 4 }]}>
												{descriptions.map((description, innerIdx) => (
													<View style={styles.experienceDescription}>
														<Text>-</Text>
														<Text>
															<Trans i18nKey={description} />
														</Text>
													</View>
												))}
											</View>
											<Text style={styles.experienceDescription}>
												{t('Technologies')}: &nbsp; {technologies}
											</Text>
										</>
									))}
								</View>
							</View>
							{/* PERSONAL HIGHLIGHTS */}
							<View style={{ rowGap: 4 }}>
								<Text style={[styles.sectionTitle]}>{t('Personal highlights')}</Text>
								<View style={[styles.flexColumn, { rowGap: 2 }]}>
									{PersonalProjects.map(({ name, title, descriptions, repoURL, websiteURL, technologies }, idx) => (
										<>
											<View style={[styles.flexColumn, { marginTop: 4 }]}>
												<Text style={styles.experienceHeader}>{name}</Text>
												<Text style={styles.experienceSubtitle}>{title}</Text>
											</View>
											<View style={[styles.flexColumn, { rowGap: 4 }]}>
												{descriptions.map((description, innerIdx) => (
													<View style={styles.experienceDescription}>
														<Text>-</Text>
														<Text>
															<Trans i18nKey={description} />
														</Text>
													</View>
												))}
											</View>
											<Text style={styles.experienceDescription}>
												{t('Technologies')}: &nbsp; {technologies}
											</Text>
										</>
									))}
								</View>
							</View>
						</View>
					</View>
				</Page>
			</Document>
		)
	}
	return view ? (
		<CV_PDF />
	) : (
		<PDFDownloadLink document={<CV_PDF />} fileName={t('CV_update_to_date')}>
			{({ loading }) =>
				loading ? (
					<Spinner />
				) : (
					<div className="flex items-center gap-x-4 hover:text-primary/60">
						{t('Download')}
						<AiOutlineCloudDownload size={25} />
					</div>
				)
			}
		</PDFDownloadLink>
	)
}

export default CV_PDFDownloadLink
