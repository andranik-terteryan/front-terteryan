import React, { useRef } from 'react'
import styles from './header.module.scss'
import Logo from '../../assets/images/global/logotype.svg'
import SearchIcon from '../../svg/SearchIcon'
import { useHeader } from './useHeader'
import CloseIcon from '../../svg/CloseIcon'
const Header = ({posts,setPosts,setSearchResult}) => {
  const headerTopRef = useRef(null)
  const headerRef = useRef(null)
  const headerBottomRef = useRef(null)

  const {openMenu,handleToggleMenu,searchItems,isScrolled,headerScrollDistance,handleShowSearch,isShowSearch} = useHeader(headerTopRef,headerRef,headerBottomRef,posts,setPosts,setSearchResult)
  return (
      <header ref={headerRef} className={`${styles['app-header']} ${styles[openMenu ? 'mobile--open' : '']}`} style={{ transform: `translateY(${isScrolled ? -headerScrollDistance + 'px' : '0'})` }}>
          <div className={`${styles['app-header__top']}`} ref={headerTopRef} >
            <div className="container" >
              <div className={styles['main-panel']}>
                <div className={styles['hamburger']} onClick={() => handleToggleMenu()} >
                  <div className={styles['hamburger__item']} >

                  </div>
                </div>
                <div className={styles['app-header__brand']} >
                      <img src={Logo} alt="" />
                  </div>
                  <div className={styles['app-header__search']} >
                    <div onClick={() => handleShowSearch()} className={styles['app-header__search-icon']} >
                        {!isShowSearch ? <SearchIcon /> : <CloseIcon fill='#929292  ' />}
                    </div>
                    <div className={`${styles['input-overlay']} ${styles[isShowSearch ? 'open' : '']}`} >
                      <input onInput={(e) => searchItems(e.target.value)} type="text" />
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className={`${styles['app-header__bottom']} ${styles[openMenu ? 'open' : '']}`} ref={headerBottomRef} >
          {
              openMenu && (
                <div className={styles['mobile-header']} >
                <div className="container">
                <div className={styles['mobile-header__contant']} >
                   <div onClick={() => handleToggleMenu()} className={styles['close-icon']} >
                      <CloseIcon fill="#000" />
                    </div>
                    <div className={styles['app-header__brand']} >
                            <img src={Logo} alt="" />
                    </div>
                    </div>
                </div>
                </div>

              )
            }
            <div className="container">
              <div  className={`${styles['main-panel']} ${styles['main-panel--center']}`}>
                  <nav className={styles['header-navigation']}>
                      <ul className={styles['header-navigation__list']} >
                          <li className={styles['header-navigation__item']} >
                              <a href="#" className={`${styles['header-navigation__link']}  ${styles['header-navigation__link--has-children']}`} >
                                Demos
                              </a>
                          </li>
                          <li className={`${styles['header-navigation__item']}`} >
                              <a href="#" className={`${styles['header-navigation__link']}  ${styles['header-navigation__link--has-children']}`} >
                                Post
                              </a>
                              <div className={styles['sub-menu']}>
                                <ul className={styles['sub-menu__content']} >
                                    <li className={styles['sub-menu__item']} >
                                        <a href="#" className={styles['sub-menu__link']} >
                                          <span>  
                                            Post Header
                                          </span>
                                        </a>
                                    </li>
                                    
                                    <li className={styles['sub-menu__item']} >
                                        <a href="#" className={styles['sub-menu__link']} >
                                          <span>
                                            Post Layout
                                          </span>
                                        </a>
                                    </li>
                                    
                                    <li className={styles['sub-menu__item']} >
                                        <a href="#" className={styles['sub-menu__link']} >
                                          <span>
                                            Share Buttons
                                          </span>
                                        </a>
                                    </li>
                                    
                                    <li className={styles['sub-menu__item']} >
                                        <a href="#" className={styles['sub-menu__link']} >
                                          <span>
                                            Gallery Post
                                          </span>
                                        </a>
                                    </li>
                                    
                                    <li className={styles['sub-menu__item']} >
                                        <a href="#" className={styles['sub-menu__link']} >
                                          <span>
                                            Video Post
                                          </span>
                                        </a>
                                    </li>
                                </ul>
                              </div>
                          
                          </li>
                          <li className={styles['header-navigation__item']} >
                              <a href="#" className={`${styles['header-navigation__link']}  ${styles['header-navigation__link--has-children']}`} >
                                Features
                              </a>
                          </li>
                          <li className={styles['header-navigation__item']} >
                              <a href="#" className={`${styles['header-navigation__link']}  ${styles['header-navigation__link--has-children']}`} >
                                Categories
                              </a>
                          </li>
                          <li className={styles['header-navigation__item']} >
                              <a href="#" className={`${styles['header-navigation__link']}  ${styles['header-navigation__link--has-children']}`} >
                                Shop
                              </a>
                          </li>
                          <li className={styles['header-navigation__item']} >
                              <a href="#" className={styles['header-navigation__link']} >
                                Buy Now
                              </a>
                          </li>
                      </ul>
                  </nav>
              </div>
            </div>
          </div>
      </header>
  )
}

export default Header