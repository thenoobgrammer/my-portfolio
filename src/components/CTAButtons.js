import React from 'react'
import { useTranslation } from 'react-i18next'

const CTAButtons = ({ isSubmit = false, disabled = false, noSave = false, saveLabel = 'Save', closeLabel = 'Close', onSave, onClose }) => {
    const { t } = useTranslation()

    return (
        <div className="flex items-center justify-end p-6 rounded-b">
            <button
                className="btn-no-background"
                type="button"
                onClick={onClose}
            >
                {t(closeLabel)}
            </button>
            {!noSave &&
                <button
                    className="btn"
                    type={isSubmit ? 'submit' : 'button'}
                    disabled={disabled}
                    onClick={onSave}
                >
                    {t(saveLabel)}
                </button>
            }
        </div>
    )
}

export default CTAButtons