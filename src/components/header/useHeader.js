import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../helpers/helpers";

export const useHeader = (headerTopRef,headerRef,mobileMenuRef,posts,setPosts,setSearchResult) => {
    const headerScrollTopFirstDistance = headerTopRef?.current?.clientHeight ?? 0;
    const headerScrollTopSecondDistance = headerRef?.current?.clientHeight ?? 0;
    const [openMenu,setOpenMenu] = useState(false)
    const [isShowSearch,setisShowSearch] = useState(false)
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [isScrolled, setIsScrolled] = useState(false);
    const [headerScrollDistance, setHeaderScrollDistance] = useState(0);
    const handleToggleMenu = () => {
        setOpenMenu(!openMenu)
        document.body.classList.toggle('hidden')
    } 
    const handleCloseMenu = () => {
        setOpenMenu(false)
        document.body.classList.remove('hidden')
    }      
    const handleShowSearch = () => {
        setisShowSearch(!isShowSearch)
    }

    function searchItems(query) {
        const results = [];
        const searchTerm = query.toLowerCase();
      
        posts.forEach(item => {
          const titleLower = item.title.toLowerCase();
          const tagsLower = item.tags.toLowerCase();
      
          if (
            titleLower.includes(searchTerm) || 
            tagsLower.includes(searchTerm) 
          ) {
            results.push(item);
          }
        });
        setSearchResult(results)
        return results;
      }
    useEffect(() => {
        setSearchResult(posts)
    },[posts])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsScrollingUp(currentScrollPos < prevScrollPos);
            setPrevScrollPos(currentScrollPos);

            if (currentScrollPos > 200) {
                setHeaderScrollDistance(headerScrollTopSecondDistance);
                setIsScrolled(true);
                if (isScrollingUp) {
                    setHeaderScrollDistance(headerScrollTopFirstDistance);
                }
            } else if (currentScrollPos > 0  ) {
                setIsScrolled(true);
                setHeaderScrollDistance(headerScrollTopFirstDistance);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, headerScrollTopFirstDistance, headerScrollTopSecondDistance, isScrollingUp]);

    useOutsideClick(mobileMenuRef, handleCloseMenu);


    return {
        isScrolled,
        headerScrollDistance,
        isScrollingUp,
        handleShowSearch,
        isShowSearch,
        searchItems,
        handleToggleMenu,
        openMenu
    };
};
