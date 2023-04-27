import React from 'react'
import config from '../../tailwind.config'

const useScreenSize = () => {
    const [screenSize, setScreenSize] = React.useState({})

    const getNumber = (value) => Number.parseInt(value.replace('px', ''))

    const isMobile = React.useMemo(() => {
        const { md } = config.theme.screens
        const { width } = screenSize
        return width <= getNumber(md)
    }, [screenSize])

    React.useEffect(() => {
        function handleResize() {
            // Set window width/height to state
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return isMobile
}

export default useScreenSize