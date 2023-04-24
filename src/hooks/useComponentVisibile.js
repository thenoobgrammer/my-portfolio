import React from 'react'

const useComponentVisible = (initialIsVisible) => {
    const [isComponentVisible, setIsComponentVisible] = React.useState(initialIsVisible)
    const ref = React.useRef(null)

    const handleHideDropdown = (event) => {
        if (event.key === "Escape") {
            setIsComponentVisible(false);
        }
    }

    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        }
    })

    return { ref, isComponentVisible, setIsComponentVisible }
}

export default useComponentVisible