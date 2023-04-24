import React from 'react'

const CTAButtons = ({ noSave = false, saveLabel = 'Save', closeLabel = 'Close', onSave, onClose }) => {
    return (
        <div className="flex items-center justify-end p-6 rounded-b">
            <button
                className="text-accent background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClose}
            >
                {closeLabel}
            </button>
            {!noSave &&
                <button
                    className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onSave}
                >
                    {saveLabel}
                </button>
            }
        </div>
    )
}

export default CTAButtons