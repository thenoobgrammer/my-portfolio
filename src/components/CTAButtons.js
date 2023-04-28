import React from 'react'

const CTAButtons = ({ isSubmit = false, disabled = false, noSave = false, saveLabel = 'Save', closeLabel = 'Close', onSave, onClose }) => {
    return (
        <div className="flex items-center justify-end p-6 rounded-b">
            <button
                className="btn-no-background"
                type="button"
                onClick={onClose}
            >
                {closeLabel}
            </button>
            {!noSave &&
                <button
                    className="btn"
                    type={isSubmit ? 'submit' : 'button'}
                    disabled={disabled}
                    onClick={onSave}
                >
                    {saveLabel}
                </button>
            }
        </div>
    )
}

export default CTAButtons