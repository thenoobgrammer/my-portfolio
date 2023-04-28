import React from 'react'
import { I18nContext } from 'react-i18next'
import { useComponentVisibile } from '../hooks'
import { supportedLangs } from '../common/constants'

const LangSwitcher = () => {
    const { i18n } = React.useContext(I18nContext)

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisibile(false)

    const handleClick = (e, value) => {
        i18n.changeLanguage(value)
        setIsComponentVisible(false)
    }

    return (
        <div className="relative flex flex-wrap">
            <button
                className={"text-primary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg"}
                type="button"
                onClick={() => setIsComponentVisible(true)}
            >
                {i18n.language}
            </button>
            <div className="absolute top-11 -left-4 sm:w-6/12 md:w-4/12 px-4" ref={ref}>
                {isComponentVisible &&
                    <div
                        className={"bg-white text-primary text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"}
                        style={{ minWidth: "12rem" }}
                    >
                        {supportedLangs.map((lang, idx) => (
                            <a
                                key={idx}
                                href="/"
                                className={`href text-sm py-2 px-4 font-semibold block w-full uppercase  ${i18n.language === lang ? 'disabled' : ''}`}
                                onClick={e => handleClick(e, lang)}
                            >
                                {lang}
                            </a>
                        ))}
                    </div>
                }
            </div>
        </div >
    )
}

export default LangSwitcher