import { Document, Font, Link, PDFDownloadLink, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { Trans, useTranslation } from 'react-i18next'

import { AiOutlineCloudDownload } from 'react-icons/ai'
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf'
import RobotoBoldItalic from '../assets/fonts/Roboto-BoldItalic.ttf'
import RobotoLight from '../assets/fonts/Roboto-Light.ttf'
import RobotoLightItalic from '../assets/fonts/Roboto-LightItalic.ttf'
import RobotoMedium from '../assets/fonts/Roboto-Medium.ttf'
import RobotoMediumItalic from '../assets/fonts/Roboto-MediumItalic.ttf'
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf'
import Spinner from './Spinner'
import { useCVTranslations } from '../hooks'

Font.register({
    family: 'Roboto',
    fonts: [
        { src: RobotoLight, fontWeight: 'light', fontStyle: 'normal' },
        { src: RobotoLightItalic, fontWeight: 'light', fontStyle: 'italic' },
        { src: RobotoRegular, fontWeight: 'normal', fontStyle: 'normal' },
        { src: RobotoMedium, fontWeight: 'medium', fontStyle: 'normal' },
        { src: RobotoMediumItalic, fontWeight: 'medium', fontStyle: 'italic' },
        { src: RobotoBold, fontWeight: 'bold', fontStyle: 'normal' },
        { src: RobotoBoldItalic, fontWeight: 'bold', fontStyle: 'italic' },
    ],
})

const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontFamily: 'Roboto',
        fontWeight: 'normal'
    },
    personalInfoHeader: {
        fontSize: 15,
        marginBottom: 4,
        fontWeight: 'medium',
    },
    personalInfoView: {
        fontSize: 10,
        rowGap: 2,
    },
    experienceHeader: { fontSize: 15, marginBottom: 4 },
    experienceSubtitle: { fontSize: 10, fontWeight: 'normal', fontStyle: 'italic' },
    experienceDescription: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'start',
        columnGap: 4,
        fontSize: 8,
    },
    sectionTitle: {
        fontSize: 15,
        marginBottom: 4,
        fontWeight: 'medium',
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

    const CV_PDF = () => {
        return (
            <Document pageLayout="oneColumn">
                <Page size="A3" style={styles.page}>
                    <Text style={{ textAlign: 'center', marginBottom: 2 }}>{t('Antoine Hakim')}</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 10 }}>{t('Senior Frontend Engineer')}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 4, height: '100%', width: '100%' }} wrap={false}>
                        <View
                            style={{ width: '30%', rowGap: 10 }}
                        >
                            {/* PERSONAL INFO */}
                            <View style={[styles.flexColumn, styles.personalInfoView, { marginVertical: 4 }]}>
                                <Text style={styles.personalInfoHeader}>{t('Personal information')}</Text>
                                {PersonalInfo.map(({ text, url }, idx) =>
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
                                    <Text style={styles.text} key={idx}>
                                        {language}
                                    </Text>
                                ))}
                            </View>
                            {/* EDUCATION */}
                            <View style={[styles.flexColumn, styles.personalInfoView, { rowGap: 10 }]}>
                                <Text style={styles.personalInfoHeader}>{t('Education')}</Text>
                                {Education.map(({ start, end, institution, program }, idx) => (
                                    <View style={[styles.flexColumn]} key={idx}>
                                        <Text>
                                            {start} - {end} - {institution}
                                        </Text>
                                        <Text style={{ fontSize: 9 }}>{program}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                        <View style={{ width: '70%' }}>
                            {/* WORK EXPERIENCE */}
                            <View style={{ marginVertical: 4 }}>
                                <Text style={[styles.sectionTitle]}>{t('Work experience')}</Text>
                                <View style={[styles.flexColumn]}>
                                    {WorkExperiences.map(({ start, end, company, title, descriptions, technologies }) => (
                                        <>
                                            {/* COMPANY START TO END */}
                                            <View style={[styles.flexColumn, { marginVertical: 6 }]}>
                                                <Text style={styles.experienceHeader}>
                                                    {start} - {end} / {company}
                                                </Text>
                                                {/* JOB TITLE */}
                                                <Text style={styles.experienceSubtitle}>{title}</Text>
                                            </View>
                                            {/* JOB DESCRIPTION */}
                                            <View style={[styles.flexColumn]}>
                                                {descriptions.map((description, innerIdx) => (
                                                    <View style={[styles.experienceDescription, { marginBottom: 3 }]}>
                                                        <Text>-</Text>
                                                        <Text style={{}}>
                                                            {description}
                                                        </Text>
                                                    </View>
                                                ))}
                                            </View>
                                            <Text style={{ marginVertical: 2, fontSize: 8 }}>
                                                <Text style={{ fontWeight: 'bold' }}> {t('Technologies')}:&nbsp;&nbsp;</Text>
                                                {technologies}
                                            </Text>:
                                        </>
                                    ))}
                                </View>
                            </View>
                            {/* PERSONAL HIGHLIGHTS */}
                            <View style={{ marginVertical: 4 }}>
                                <Text style={[styles.sectionTitle]}>{t('Personal highlights')}</Text>
                                <View style={[styles.flexColumn]}>
                                    {PersonalProjects.map(({ name, title, descriptions, repoURL, websiteURL, technologies }, idx) => (
                                        <>
                                            <View style={[styles.flexColumn, { marginVertical: 6 }]}>
                                                <Text style={styles.experienceHeader}>{name}</Text>
                                                <Text style={styles.experienceSubtitle}>{title}</Text>
                                            </View>
                                            <View style={[styles.flexColumn]}>
                                                {descriptions.map((description, innerIdx) => (
                                                    <View style={[styles.experienceDescription, { marginBottom: 3 }]}>
                                                        <Text>-</Text>
                                                        <Text>
                                                            {description}
                                                        </Text>
                                                    </View>
                                                ))}
                                            </View>
                                            <Text style={{ marginVertical: 2, fontSize: 8 }}>
                                                <Text style={{ fontWeight: 'bold' }}> {t('Technologies')}:&nbsp;&nbsp;</Text>
                                                {technologies}
                                            </Text>:
                                        </>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document >
        )
    }
    return (
        <PDFDownloadLink document={<CV_PDF />} fileName={t('CvFilename')}>
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
