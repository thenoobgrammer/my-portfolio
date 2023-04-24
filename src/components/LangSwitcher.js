import React from 'react'
import { I18nContext } from 'react-i18next'
import { useComponentVisibile } from '../hooks'

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
                        <a
                            href="#pablo"
                            className={"hreftext-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"}
                            onClick={e => handleClick(e, 'en')}
                        >
                            En
                        </a>
                        <div className="h-0 my-2 border border-solid border-t-0 border-slate-800 opacity-25" />
                        <a
                            href="#pablo"
                            className={"href text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"}
                            onClick={e => handleClick(e, 'fr')}
                        >
                            Fr
                        </a>
                    </div>
                }
            </div>
        </div >
    )
}

export default LangSwitcher