import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        if (document.querySelector(".mainHeader")) {
            if (document.querySelector(".mainHeader").classList.contains("headerAnimation")) {
                document.querySelector(".mainHeader").classList.remove("headerAnimation")
                document.querySelector(".footer").classList.remove("headerAnimation")
                setTimeout(() => {
                    document.querySelector(".mainHeader").classList.add("headerAnimation")
                    document.querySelector(".footer").classList.add("headerAnimation")
                }, 1)
            } else {
                document.querySelector(".mainHeader").classList.add("headerAnimation")
            }
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        })
    }, [pathname])
    return null;
};

export default ScrollToTop;