<template>
  <div id="siteWrapper" class="clearfix site-wrapper">
    <div id="floatingCart" class="floating-cart hidden">
      <a href="/cart" class="icon icon--stroke icon--fill icon--cart sqs-custom-cart">
        <span class="Cart-inner">
          <svg class="icon icon--cart" width="144" height="125" viewBox="0 0 144 125">
            <path d="M4.69551 0.000432948C2.10179 0.000432948 0 2.09856 0 4.68769C0 7.27686 2.10183 9.37496 4.69551 9.37496H23.43C31.2022 28.5892 38.8567 47.8378 46.5654 67.089L39.4737 84.129C38.8799 85.5493 39.0464 87.2634 39.905 88.5418C40.7622 89.8216 42.2856 90.6283 43.8271 90.6232H122.088C124.568 90.658 126.85 88.4129 126.85 85.9359C126.85 83.4589 124.569 81.214 122.088 81.2487H50.8702L54.9305 71.5802L130.306 65.5745C132.279 65.4199 134.064 63.8849 134.512 61.9608L143.903 21.337C144.518 18.6009 142.114 15.6147 139.306 15.624H36.0522L30.9654 2.92939C30.2682 1.21146 28.4698 0 26.612 0L4.69551 0.000432948ZM39.8152 24.9999H133.385L126.097 56.5426L54.7339 62.2067L39.8152 24.9999ZM59.4777 93.75C50.8885 93.75 43.8252 100.801 43.8252 109.375C43.8252 117.949 50.8885 125 59.4777 125C68.0669 125 75.1301 117.949 75.1301 109.375C75.1301 100.801 68.0669 93.75 59.4777 93.75ZM106.433 93.75C97.8436 93.75 90.7803 100.801 90.7803 109.375C90.7803 117.949 97.8436 125 106.433 125C115.022 125 122.085 117.949 122.085 109.375C122.085 100.801 115.022 93.75 106.433 93.75ZM59.4777 103.125C62.9906 103.125 65.7378 105.867 65.7378 109.374C65.7378 112.88 62.9905 115.623 59.4777 115.623C55.9647 115.623 53.2175 112.88 53.2175 109.374C53.2175 105.867 55.9649 103.125 59.4777 103.125ZM106.433 103.125C109.946 103.125 112.693 105.867 112.693 109.374C112.693 112.88 109.946 115.623 106.433 115.623C102.92 115.623 100.173 112.88 100.173 109.374C100.173 105.867 102.92 103.125 106.433 103.125Z"></path>
          </svg>
          <div class="legacy-cart icon-cart-quantity">
            <span class="sqs-cart-quantity">0</span>
          </div>
        </span>
      </a>
    </div>
    <header
      data-test="header"
      id="header"
      class="header theme-col--primary shrink"
      data-section-theme=""
      data-controller="Header"
      data-current-styles="{
        &quot;layout&quot;: &quot;brandingCenter&quot;,
        &quot;action&quot;: {
        &quot;buttonText&quot;: &quot;Get Started&quot;,
        &quot;newWindow&quot;: false
        },
        &quot;showSocial&quot;: false,
        &quot;socialOptions&quot;: {
        &quot;socialBorderShape&quot;: &quot;none&quot;,
        &quot;socialBorderStyle&quot;: &quot;outline&quot;,
        &quot;socialBorderThickness&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 1.0
        }
        },
        &quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
        &quot;cartStyle&quot;: &quot;text&quot;,
        &quot;cartText&quot;: &quot;Cart&quot;,
        &quot;showEmptyCartState&quot;: false,
        &quot;cartOptions&quot;: {
        &quot;iconType&quot;: &quot;stroke-9&quot;,
        &quot;cartBorderShape&quot;: &quot;none&quot;,
        &quot;cartBorderStyle&quot;: &quot;outline&quot;,
        &quot;cartBorderThickness&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 1.0
        }
        },
        &quot;showButton&quot;: false,
        &quot;showCart&quot;: false,
        &quot;showAccountLogin&quot;: false,
        &quot;headerStyle&quot;: &quot;solid&quot;,
        &quot;languagePicker&quot;: {
        &quot;enabled&quot;: false,
        &quot;iconEnabled&quot;: false,
        &quot;iconType&quot;: &quot;globe&quot;,
        &quot;flagShape&quot;: &quot;shiny&quot;,
        &quot;languageFlags&quot;: [ ]
        },
        &quot;mobileOptions&quot;: {
        &quot;layout&quot;: &quot;logoCenterNavLeft&quot;,
        &quot;menuIcon&quot;: &quot;doubleLineHamburger&quot;,
        &quot;menuIconOptions&quot;: {
        &quot;style&quot;: &quot;doubleLineHamburger&quot;,
        &quot;thickness&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 5.0
        }
        }
        },
        &quot;dynamicOptions&quot;: {
        &quot;border&quot;: {
        &quot;enabled&quot;: false,
        &quot;position&quot;: &quot;allSides&quot;,
        &quot;thickness&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 4.0
        }
        }
        },
        &quot;solidOptions&quot;: {
        &quot;headerOpacity&quot;: {
        &quot;unit&quot;: &quot;%&quot;,
        &quot;value&quot;: 100.0
        },
        &quot;border&quot;: {
        &quot;enabled&quot;: false,
        &quot;position&quot;: &quot;allSides&quot;,
        &quot;thickness&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 4.0
        }
        },
        &quot;dropShadow&quot;: {
        &quot;enabled&quot;: true,
        &quot;blur&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 4.0
        },
        &quot;spread&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 2.0
        },
        &quot;distance&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 2.0
        }
        },
        &quot;blurBackground&quot;: {
        &quot;enabled&quot;: false,
        &quot;blurRadius&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 12.0
        }
        },
        &quot;navigationColor&quot;: {
        &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
        &quot;sitePaletteColor&quot;: {
        &quot;colorName&quot;: &quot;darkAccent&quot;,
        &quot;alphaModifier&quot;: 1.0
        }
        }
        },
        &quot;gradientOptions&quot;: {
        &quot;gradientType&quot;: &quot;faded&quot;,
        &quot;headerOpacity&quot;: {
        &quot;unit&quot;: &quot;%&quot;,
        &quot;value&quot;: 90.0
        },
        &quot;border&quot;: {
        &quot;enabled&quot;: false,
        &quot;position&quot;: &quot;allSides&quot;,
        &quot;thickness&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 4.0
        }
        },
        &quot;dropShadow&quot;: {
        &quot;enabled&quot;: false,
        &quot;blur&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 30.0
        },
        &quot;spread&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 0.0
        },
        &quot;distance&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 0.0
        }
        },
        &quot;blurBackground&quot;: {
        &quot;enabled&quot;: false,
        &quot;blurRadius&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 12.0
        }
        }
        },
        &quot;dropShadowOptions&quot;: {
        &quot;enabled&quot;: true,
        &quot;blur&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 4.0
        },
        &quot;spread&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 2.0
        },
        &quot;distance&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 2.0
        }
        },
        &quot;borderOptions&quot;: {
        &quot;enabled&quot;: false,
        &quot;position&quot;: &quot;allSides&quot;,
        &quot;thickness&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 4.0
        }
        },
        &quot;showPromotedElement&quot;: false,
        &quot;buttonVariant&quot;: &quot;primary&quot;,
        &quot;blurBackground&quot;: {
        &quot;enabled&quot;: false,
        &quot;blurRadius&quot;: {
        &quot;unit&quot;: &quot;px&quot;,
        &quot;value&quot;: 12.0
        }
        },
        &quot;headerOpacity&quot;: {
        &quot;unit&quot;: &quot;%&quot;,
        &quot;value&quot;: 100.0
        }
        }"
      data-section-id="header"
      data-header-style="solid"
      data-language-picker="{
        &quot;enabled&quot;: false,
        &quot;iconEnabled&quot;: false,
        &quot;iconType&quot;: &quot;globe&quot;,
        &quot;flagShape&quot;: &quot;shiny&quot;,
        &quot;languageFlags&quot;: [ ]
        }"
      data-first-focusable-element=""
      tabindex="-1"
      style="--solidHeaderNavigationColor: hsla(var(--darkAccent-hsl), 1);"
      data-controllers-bound="Header">
      <div class="sqs-announcement-bar-dropzone"></div>
      <div class="header-announcement-bar-wrapper">
        <a href="#page" class="header-skip-link sqs-button-element--primary">
          Skip to Content
        </a>

        <div
          class="header-border"
          data-header-style="solid"
          data-header-usability-enabled="true"
          data-header-border="false"
          data-test="header-border"
          style="border-width: 0px !important;">
        </div>
        <div
          class="header-dropshadow"
          data-header-style="solid"
          data-header-usability-enabled="true"
          data-header-dropshadow="true"
          data-test="header-dropshadow"
          style="box-shadow: 0px 2px 4px 2px;">
        </div>
        <div>
          <div
            class="header-background-solid"
            data-header-style="solid"
            data-test="header-background-solid"
            style="opacity: calc(100 * .01)">
          </div>
        </div>
        <div
          class="header-inner container--fluid header-mobile-layout-logo-center-nav-left header-layout-branding-center"
          style="padding: 0;"
          data-test="header-inner">
        
          <!-- Background -->
          <div class="header-background theme-bg--primary"></div>
          <div class="header-display-desktop" data-content-field="site-title">
        
            <!-- Social -->
                
            <!-- Title and nav wrapper -->
            <div class="header-title-nav-wrapper">
      
              <!-- Nav -->
              <div class="header-nav">
                <div class="header-nav-wrapper">
                  <nav class="header-nav-list"></nav>
                </div>
              </div>
            
              <!-- Title -->
              <div class="header-title" data-animation-role="header-element">
                <div class="header-title-logo">
                  <a href="/" data-animation-role="header-element">
                    <img
                      elementtiming="nbf-header-logo-desktop"
                      src="/src/assets/images/iCognitionLogo.png?format=1500w"
                      alt="iCognition.ai"
                      style="display:block"
                      fetchpriority="high"
                      loading="eager"
                      decoding="async"
                      data-loader="raw">
                  </a>
                </div>
              </div>
            </div>
      
            <!-- Actions -->
            <div class="header-actions header-actions--right">
              <div class="showOnMobile">
            </div>
            <div class="showOnDesktop"></div>
          </div>


            <!-- Burger -->
            <div
              class="header-burger menu-overlay-does-not-have-visible-non-navigation-items no-actions"
              data-animation-role="header-element">
              <button class="header-burger-btn burger hide-burger" data-test="header-burger">
                <span class="js-header-burger-open-title visually-hidden">Open Menu</span>
                <span hidden="" class="js-header-burger-close-title visually-hidden">Close Menu</span>
                <div class="burger-box">
                  <div class="burger-inner header-menu-icon-doubleLineHamburger">
                    <div class="top-bun"></div>
                    <div class="patty"></div>
                    <div class="bottom-bun"></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div class="header-display-mobile" data-content-field="site-title">
            <!-- Social -->

            <!-- Burger -->
            <div
              class="header-burger menu-overlay-does-not-have-visible-non-navigation-items no-actions"
              data-animation-role="header-element">
              <button class="header-burger-btn burger hide-burger no-nav-links" data-test="header-burger">
                <span class="js-header-burger-open-title visually-hidden">Open Menu</span>
                <span hidden="" class="js-header-burger-close-title visually-hidden">Close Menu</span>
                <div class="burger-box">
                  <div class="burger-inner header-menu-icon-doubleLineHamburger">
                    <div class="top-bun"></div>
                    <div class="patty"></div>
                    <div class="bottom-bun"></div>
                  </div>
                </div>
              </button>
            </div>

            
            <!-- Title and nav wrapper -->
            <div class="header-title-nav-wrapper">    
              <!-- Nav -->
              <div class="header-nav">
                <div class="header-nav-wrapper">
                  <nav class="header-nav-list"></nav>
                </div>
              </div>

              <!-- Title -->
              <div class="header-title" data-animation-role="header-element">                    
                <div class="header-title-logo">
                  <a href="/" data-animation-role="header-element">
                    <img
                      elementtiming="nbf-header-logo-desktop"
                      src="/src/assets/images/iCognitionLogo.png?format=1500w"
                      alt="iCognition.ai"
                      style="display:block"
                      fetchpriority="high"
                      loading="eager"
                      decoding="async"
                      data-loader="raw">
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Actions -->
            <div class="header-actions header-actions--right">
              <div class="showOnMobile"></div>
              <div class="showOnDesktop"></div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- (Mobile) Menu Navigation -->
      <div
        class="header-menu header-menu--folder-list"
        data-section-theme=""
        data-current-styles="{
          &quot;layout&quot;: &quot;brandingCenter&quot;,
          &quot;action&quot;: {
          &quot;buttonText&quot;: &quot;Get Started&quot;,
          &quot;newWindow&quot;: false
          },
          &quot;showSocial&quot;: false,
          &quot;socialOptions&quot;: {
          &quot;socialBorderShape&quot;: &quot;none&quot;,
          &quot;socialBorderStyle&quot;: &quot;outline&quot;,
          &quot;socialBorderThickness&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 1.0
          }
          },
          &quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
          &quot;cartStyle&quot;: &quot;text&quot;,
          &quot;cartText&quot;: &quot;Cart&quot;,
          &quot;showEmptyCartState&quot;: false,
          &quot;cartOptions&quot;: {
          &quot;iconType&quot;: &quot;stroke-9&quot;,
          &quot;cartBorderShape&quot;: &quot;none&quot;,
          &quot;cartBorderStyle&quot;: &quot;outline&quot;,
          &quot;cartBorderThickness&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 1.0
          }
          },
          &quot;showButton&quot;: false,
          &quot;showCart&quot;: false,
          &quot;showAccountLogin&quot;: false,
          &quot;headerStyle&quot;: &quot;solid&quot;,
          &quot;languagePicker&quot;: {
          &quot;enabled&quot;: false,
          &quot;iconEnabled&quot;: false,
          &quot;iconType&quot;: &quot;globe&quot;,
          &quot;flagShape&quot;: &quot;shiny&quot;,
          &quot;languageFlags&quot;: [ ]
          },
          &quot;mobileOptions&quot;: {
          &quot;layout&quot;: &quot;logoCenterNavLeft&quot;,
          &quot;menuIcon&quot;: &quot;doubleLineHamburger&quot;,
          &quot;menuIconOptions&quot;: {
          &quot;style&quot;: &quot;doubleLineHamburger&quot;,
          &quot;thickness&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 5.0
          }
          }
          },
          &quot;dynamicOptions&quot;: {
          &quot;border&quot;: {
          &quot;enabled&quot;: false,
          &quot;position&quot;: &quot;allSides&quot;,
          &quot;thickness&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 4.0
          }
          }
          },
          &quot;solidOptions&quot;: {
          &quot;headerOpacity&quot;: {
          &quot;unit&quot;: &quot;%&quot;,
          &quot;value&quot;: 100.0
          },
          &quot;border&quot;: {
          &quot;enabled&quot;: false,
          &quot;position&quot;: &quot;allSides&quot;,
          &quot;thickness&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 4.0
          }
          },
          &quot;dropShadow&quot;: {
          &quot;enabled&quot;: true,
          &quot;blur&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 4.0
          },
          &quot;spread&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 2.0
          },
          &quot;distance&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 2.0
          }
          },
          &quot;blurBackground&quot;: {
          &quot;enabled&quot;: false,
          &quot;blurRadius&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 12.0
          }
          },
          &quot;navigationColor&quot;: {
          &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
          &quot;sitePaletteColor&quot;: {
          &quot;colorName&quot;: &quot;darkAccent&quot;,
          &quot;alphaModifier&quot;: 1.0
          }
          }
          },
          &quot;gradientOptions&quot;: {
          &quot;gradientType&quot;: &quot;faded&quot;,
          &quot;headerOpacity&quot;: {
          &quot;unit&quot;: &quot;%&quot;,
          &quot;value&quot;: 90.0
          },
          &quot;border&quot;: {
          &quot;enabled&quot;: false,
          &quot;position&quot;: &quot;allSides&quot;,
          &quot;thickness&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 4.0
          }
          },
          &quot;dropShadow&quot;: {
          &quot;enabled&quot;: false,
          &quot;blur&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 30.0
          },
          &quot;spread&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 0.0
          },
          &quot;distance&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 0.0
          }
          },
          &quot;blurBackground&quot;: {
          &quot;enabled&quot;: false,
          &quot;blurRadius&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 12.0
          }
          }
          },
          &quot;dropShadowOptions&quot;: {
          &quot;enabled&quot;: true,
          &quot;blur&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 4.0
          },
          &quot;spread&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 2.0
          },
          &quot;distance&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 2.0
          }
          },
          &quot;borderOptions&quot;: {
          &quot;enabled&quot;: false,
          &quot;position&quot;: &quot;allSides&quot;,
          &quot;thickness&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 4.0
          }
          },
          &quot;showPromotedElement&quot;: false,
          &quot;buttonVariant&quot;: &quot;primary&quot;,
          &quot;blurBackground&quot;: {
          &quot;enabled&quot;: false,
          &quot;blurRadius&quot;: {
          &quot;unit&quot;: &quot;px&quot;,
          &quot;value&quot;: 12.0
          }
          },
          &quot;headerOpacity&quot;: {
          &quot;unit&quot;: &quot;%&quot;,
          &quot;value&quot;: 100.0
          }
          }"
        data-section-id="overlay-nav"
        data-show-account-login="false"
        data-test="header-menu"
        style="padding-top: 96.3594px;">
        <div class="header-menu-bg theme-bg--primary"></div>
        <div class="header-menu-nav">
          <nav class="header-menu-nav-list">
            
            <div data-folder="root" class="header-menu-nav-folder header-menu-nav-folder--active">
              <div class="header-menu-nav-folder-content">
                <!-- Menu Navigation -->
                <div class="header-menu-nav-wrapper"></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <main id="page" class="container" role="main">
      <article class="sections" id="sections" data-page-sections="6696b4200fbc563f12894073">
        <section
          data-test="page-section"
          data-section-theme="white"
          class="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle white"
          data-section-id="6696c8c1a7557406acde92fb"
          data-controller="SectionWrapperController"
          data-current-styles="{
            &quot;imageOverlayOpacity&quot;: 0.15,
            &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
            &quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
            &quot;customSectionHeight&quot;: 1,
            &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
            &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
            &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
            &quot;customContentWidth&quot;: 50,
            &quot;backgroundColor&quot;: &quot;&quot;,
            &quot;sectionTheme&quot;: &quot;white&quot;,
            &quot;sectionAnimation&quot;: &quot;none&quot;,
            &quot;backgroundMode&quot;: &quot;image&quot;
            }"
          data-current-context="{
            &quot;video&quot;: {
            &quot;playbackSpeed&quot;: 0.5,
            &quot;filter&quot;: 1,
            &quot;filterStrength&quot;: 0,
            &quot;zoom&quot;: 0,
            &quot;videoSourceProvider&quot;: &quot;none&quot;
            },
            &quot;backgroundImageId&quot;: null,
            &quot;backgroundMediaEffect&quot;: {
            &quot;type&quot;: &quot;none&quot;
            },
            &quot;divider&quot;: {
            &quot;enabled&quot;: false
            },
            &quot;typeName&quot;: &quot;products&quot;
            }"
          data-animation="none"
          data-fluid-engine-section=""
          style="min-height: 1vh;"
          data-controllers-bound="SectionWrapperController">
          <div class="section-border">
            <div class="section-background"></div>
          </div>
          <div class="content-wrapper" style="padding-top: calc(1vmax / 10); padding-bottom: calc(1vmax / 10);">
            <div class="content">
              <div data-fluid-engine="true">
                <div class="fluid-engine fe-6696c8c206391b6dfb91b6b9">
                  <div class="fe-block fe-block-yui_3_17_2_1_1721230615972_4449" style="mix-blend-mode: normal;">
                    <div class="sqs-block html-block sqs-block-html"
                      data-blend-mode="NORMAL"
                      data-block-type="2"
                      data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}"
                      id="block-yui_3_17_2_1_1721230615972_4449">
                      <div class="sqs-block-content">
                        <div class="sqs-html-content">
                          <h2 style="white-space:pre-wrap;">For people with dyslexia, iCognition changes the rules of the game.</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="fe-block fe-block-yui_3_17_2_1_1721230615972_6835" style="mix-blend-mode: normal;">
                    <div class="sqs-block html-block sqs-block-html"
                      data-blend-mode="NORMAL"
                      data-block-type="2"
                      data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}"
                      id="block-yui_3_17_2_1_1721230615972_6835">
                      <div class="sqs-block-content">
                        <div class="sqs-html-content">
                          <h4 style="white-space:pre-wrap;">
                            <span class="sqsrte-text-color--black">Advance your studies and career with an AI assistant designed to supercharge dyslexic thinking.&nbsp;</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>    
                  <div class="fe-block fe-block-yui_3_17_2_1_1721221134537_7315">
                    <div class="sqs-block video-block sqs-block-video" data-block-json="{&quot;blockAnimation&quot;:&quot;none&quot;,&quot;layout&quot;:&quot;caption-hidden&quot;,&quot;overlay&quot;:true,&quot;description&quot;:{},&quot;isOldBlock&quot;:false,&quot;customThumb&quot;:&quot;66991eeb28792c5ab74dd933&quot;,&quot;html&quot;:&quot;<iframe width=\&quot;200\&quot; height=\&quot;113\&quot; src=\&quot;https://www.youtube.com/embed/fsoXJmnV_Ns?feature=oembed\&quot; frameborder=\&quot;0\&quot; allow=\&quot;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\&quot; referrerpolicy=\&quot;strict-origin-when-cross-origin\&quot; allowfullscreen title=\&quot;Incognition.ai explains video - website\&quot;></iframe>&quot;,&quot;url&quot;:&quot;https://youtu.be/fsoXJmnV_Ns&quot;,&quot;width&quot;:200,&quot;height&quot;:113,&quot;providerName&quot;:&quot;YouTube&quot;,&quot;thumbnailUrl&quot;:&quot;https://i.ytimg.com/vi/fsoXJmnV_Ns/hqdefault.jpg&quot;,&quot;resolvedBy&quot;:&quot;youtube&quot;}" data-block-type="32" id="block-yui_3_17_2_1_1721221134537_7315">
                      <div class="sqs-block-content" id="yui_3_17_2_1_1721660773787_67">
                        <div class="intrinsic" style="max-width:100%">
                          <div class="embed-block-wrapper " style="padding-bottom:56.5%;">
                            <div class="sqs-video-wrapper video-none" data-provider-name="YouTube" data-html="<iframe width=&quot;200&quot; height=&quot;113&quot; src=&quot;https://www.youtube.com/embed/fsoXJmnV_Ns?feature=oembed&quot; frameborder=&quot;0&quot; allow=&quot;accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share&quot; referrerpolicy=&quot;strict-origin-when-cross-origin&quot; allowfullscreen title=&quot;Incognition.ai explains video - website&quot;></iframe>" id="yui_3_17_2_1_1721660773787_74">
                              <div class="intrinsic">
                                <div class="intrinsic-inner" style="padding-bottom: 56.5%;">
                                  <div class="sqs-video-overlay" style="opacity: 1;" id="yui_3_17_2_1_1721660773787_96">
                                    <img data-src="/src/assets/images/videosplash.png" data-load="false" data-image-focal-point="0.5,0.5" class="loaded" data-image-dimensions="100x57" data-parent-ratio="1.8" style="font-size: 0px; left: 0px; top: -1.15px; width: 100%; height: 100%; position: relative;" data-image-resolution="750w" src="/src/assets//images/videosplash.png">
                                    <div class="sqs-video-opaque"></div>
                                    <div class="sqs-video-icon" tabindex="0" role="button" aria-label="Play"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-test="page-section"
          data-section-theme="dark"
          class="page-section has-section-divider full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle dark"
          data-section-id="6697e5cc4ae716153c113f31"
          data-controller="SectionWrapperController"
          data-current-styles="{
            &quot;imageOverlayOpacity&quot;: 0.15,
            &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
            &quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
            &quot;customSectionHeight&quot;: 12,
            &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
            &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
            &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
            &quot;customContentWidth&quot;: 50,
            &quot;sectionTheme&quot;: &quot;dark&quot;,
            &quot;sectionAnimation&quot;: &quot;none&quot;,
            &quot;backgroundMode&quot;: &quot;image&quot;
            }"
          data-current-context="{
            &quot;video&quot;: {
            &quot;playbackSpeed&quot;: 0.5,
            &quot;filter&quot;: 1,
            &quot;filterStrength&quot;: 0,
            &quot;zoom&quot;: 0,
            &quot;videoSourceProvider&quot;: &quot;none&quot;
            },
            &quot;backgroundImageId&quot;: null,
            &quot;backgroundMediaEffect&quot;: {
            &quot;type&quot;: &quot;none&quot;
            },
            &quot;divider&quot;: {
            &quot;enabled&quot;: true,
            &quot;type&quot;: &quot;none&quot;,
            &quot;width&quot;: {
            &quot;unit&quot;: &quot;vw&quot;,
            &quot;value&quot;: 100.0
            },
            &quot;height&quot;: {
            &quot;unit&quot;: &quot;vw&quot;,
            &quot;value&quot;: 6.0
            },
            &quot;isFlipX&quot;: false,
            &quot;isFlipY&quot;: false,
            &quot;offset&quot;: {
            &quot;unit&quot;: &quot;px&quot;,
            &quot;value&quot;: 0.0
            },
            &quot;stroke&quot;: {
            &quot;style&quot;: &quot;solid&quot;,
            &quot;color&quot;: {
            &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
            &quot;sitePaletteColor&quot;: {
            &quot;colorName&quot;: &quot;darkAccent&quot;,
            &quot;alphaModifier&quot;: 1.0
            }
            },
            &quot;thickness&quot;: {
            &quot;unit&quot;: &quot;px&quot;,
            &quot;value&quot;: 6.0
            },
            &quot;dashLength&quot;: {
            &quot;unit&quot;: &quot;px&quot;,
            &quot;value&quot;: 5.0
            },
            &quot;gapLength&quot;: {
            &quot;unit&quot;: &quot;px&quot;,
            &quot;value&quot;: 15.0
            },
            &quot;linecap&quot;: &quot;square&quot;
            }
            },
            &quot;typeName&quot;: &quot;products&quot;
            }"
          data-animation="none"
          data-fluid-engine-section=""
          style="min-height: 12vh;"
          data-controllers-bound="SectionWrapperController">
          <div class="section-border"
            data-controller="SectionDivider"
            style="clip-path: url(#section-divider-6697e5cc4ae716153c113f31);"
            data-controllers-bound="SectionDivider">
            <div class="section-background"></div>
          </div>
          <div class="content-wrapper" style="padding-top: calc(12vmax / 10); padding-bottom: calc(12vmax / 10);">
            <div class="content">
              <div data-fluid-engine="true">
                <div class="fluid-engine fe-6697e5cc4ae716153c113f30">
                  <div class="fe-block fe-block-a4a6d59e74d727ab0781" style="mix-blend-mode: normal;">
                    <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-a4a6d59e74d727ab0781">
                      <div class="sqs-block-content">
                        <div class="sqs-html-content">
                          <p class="sqsrte-large" style="white-space:pre-wrap;">Interested in early access or more information? Add your email to the waitlist!  </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="fe-block fe-block-7948b30c6a44353ace23" style="mix-blend-mode: normal;">
                    <div class="sqs-block form-block sqs-block-form" data-blend-mode="NORMAL" data-block-type="9" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-7948b30c6a44353ace23">
                      <div class="sqs-block-content">  
                        <div id="form-submission-html-6697e5cc4ae716153c113f2c" class="sqs-form-block-submission-html" data-submission-html=""></div>
                        <div class="form-wrapper">
                          <form autocomplete="on" class="react-form-contents" novalidate="" data-success-redirect="">
                            <div tabindex="-1"></div>
                            <div class="field-list">
                              <div class="form-item field email required" id="email-yui_3_17_2_1_1553888888520_3745" data-dynamic-strings="">
                                <label for="email-yui_3_17_2_1_1553888888520_3745-field" class="title YIT5R1OYB39qtHybAVXQ">
                                  <div class="mEd53xaVzyllOCP9i6UA">
                                    <div class="HZaN3pKtOB3UmeTg6_qU">
                                      <span>Email</span>
                                      <span class="description required">(required)</span>
                                    </div>
                                  </div>
                                </label>
                                <input aria-invalid="false" aria-required="true" autocomplete="email" class="hdiMwtVxRuvC7dBgScTh" id="email-yui_3_17_2_1_1553888888520_3745-field" placeholder="email@company.com" type="email" value="">
                                <span class="wpLzMraNq4rN2cAsOLyQ form-input-effects" aria-hidden="true">
                                  <span class="form-input-effects-border"></span>
                                  <span class="form-input-effects-highlight form-field-highlight-single-trace"></span>
                                </span>
                                <div class="option">
                                  <label class="AxMlQPmJs69_7pr1bLwT">
                                    <input class="vnLLkKq87liyzPxn4wMB" name="email-yui_3_17_2_1_1553888888520_3745-field" type="checkbox" value="Sign up for news and updates">
                                    <span data-dynamic-strings="true">Sign up for news and updates</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div class="form-button-wrapper form-button-wrapper--align-left">
                              <button type="submit" class="button sqs-system-button sqs-editable-button form-submit-button sqs-button-element--primary none ACgz1Ajag8FwXHpitNSi" @click="handleSendClick">
                                <span class="form-submit-button-label">Send</span>
                                <span class="jW4cbWRZSXiS4yI7Zsby form-submit-button-state" aria-label="Send">
                                  <span aria-hidden="true">Send</span>
                                  <span aria-hidden="true">
                                    <span></span>
                                  </span>
                                  <span aria-hidden="true">
                                    <span></span>
                                  </span>
                                </span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div class="section-divider-display" style="--stroke-thickness: 6px; --stroke-dasharray: 0; --stroke-linecap: square; --section-divider-stroke-color: hsla(var(--darkAccent-hsl),1);">
            <div class="section-divider-block"></div>
            <svg class="section-divider-svg-clip" style="display: none;">
              <clipPath id="section-divider-6697e5cc4ae716153c113f31" clipPathUnits="objectBoundingBox">
                <path class="section-divider-clip" d="M0,0"></path>
              </clipPath>
            </svg>
            <svg class="section-divider-svg-stroke" viewBox="0 0 1 1" preserveAspectRatio="none">
              <path class="section-divider-stroke" d="M-100,0.5 L-100,1.5 M0,1 L1,1" vector-effect="non-scaling-stroke"></path>
            </svg>
          </div>
        </section>
        <section
          data-test="page-section"
          data-section-theme="light"
          class="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle light"
          data-section-id="6696b4200fbc563f128940d1"
          data-controller="SectionWrapperController"
          data-current-styles="{
            &quot;imageOverlayOpacity&quot;: 0.15,
            &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
            &quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
            &quot;customSectionHeight&quot;: 0,
            &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
            &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
            &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
            &quot;customContentWidth&quot;: 50,
            &quot;backgroundColor&quot;: &quot;&quot;,
            &quot;sectionTheme&quot;: &quot;light&quot;,
            &quot;sectionAnimation&quot;: &quot;none&quot;,
            &quot;backgroundMode&quot;: &quot;image&quot;
            }"
          data-current-context="{
            &quot;video&quot;: {
            &quot;playbackSpeed&quot;: 0.5,
            &quot;filter&quot;: 1,
            &quot;filterStrength&quot;: 0,
            &quot;zoom&quot;: 0,
            &quot;videoSourceProvider&quot;: &quot;none&quot;
            },
            &quot;backgroundImageId&quot;: null,
            &quot;backgroundMediaEffect&quot;: {
            &quot;type&quot;: &quot;none&quot;
            },
            &quot;divider&quot;: {
            &quot;enabled&quot;: false,
            &quot;type&quot;: &quot;none&quot;,
            &quot;width&quot;: {
            &quot;unit&quot;: &quot;vw&quot;,
            &quot;value&quot;: 100.0
            },
            &quot;height&quot;: {
            &quot;unit&quot;: &quot;vw&quot;,
            &quot;value&quot;: 6.0
            },
            &quot;isFlipX&quot;: false,
            &quot;isFlipY&quot;: false,
            &quot;offset&quot;: {
            &quot;unit&quot;: &quot;px&quot;,
            &quot;value&quot;: 0.0
            },
            &quot;stroke&quot;: {
            &quot;style&quot;: &quot;solid&quot;,
            &quot;color&quot;: {
            &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
            &quot;sitePaletteColor&quot;: {
            &quot;colorName&quot;: &quot;darkAccent&quot;,
            &quot;alphaModifier&quot;: 1.0
            }
            },
            &quot;thickness&quot;: {
            &quot;unit&quot;: &quot;px&quot;,
            &quot;value&quot;: 6.0
            },
            &quot;dashLength&quot;: {
            &quot;unit&quot;: &quot;px&quot;,
            &quot;value&quot;: 5.0
            },
            &quot;gapLength&quot;: {
            &quot;unit&quot;: &quot;px&quot;,
            &quot;value&quot;: 15.0
            },
            &quot;linecap&quot;: &quot;square&quot;
            }
            },
            &quot;typeName&quot;: &quot;products&quot;
            }"
          data-animation="none"
          data-fluid-engine-section=""
          data-controllers-bound="SectionWrapperController">
          <div class="section-border">
            <div class="section-background">
            </div>
          </div>
          <div class="content-wrapper" style="padding-top: calc(0vmax / 10); padding-bottom: calc(0vmax / 10);">
            <div class="content">
              <div data-fluid-engine="true">
                <div class="fluid-engine fe-6696b4200fbc563f128940d0">
                  <div class="fe-block fe-block-yui_3_17_2_1_1721221134537_13704" style="mix-blend-mode: normal;">
                    <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1721221134537_13704">
                      <div class="sqs-block-content">
                        <div class="sqs-html-content">
                          <h2 style="text-align:center;white-space:pre-wrap;"><span class="sqsrte-text-color--black">How does it work?</span></h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          data-test="page-section"
          data-section-theme="light"
          class="page-section has-section-divider user-items-list-section full-bleed-section light"
          data-section-id="6697c8c522272f5ce17e5a14"
          data-controller="SectionWrapperController"
          data-current-styles="{
            &quot;imageFocalPoint&quot;: {
            &quot;x&quot;: 0.5,
            &quot;y&quot;: 0.5
            },
            &quot;imageOverlayOpacity&quot;: 0.3,
            &quot;backgroundColor&quot;: &quot;white&quot;,
            &quot;sectionTheme&quot;: &quot;light&quot;,
            &quot;imageEffect&quot;: &quot;none&quot;,
            &quot;backgroundMode&quot;: &quot;image&quot;,
            &quot;backgroundImage&quot;: null
            }"
          data-current-context="{
            &quot;video&quot;: {
            &quot;filter&quot;: 1,
            &quot;videoFallbackContentItem&quot;: null,
            &quot;nativeVideoContentItem&quot;: null,
            &quot;videoSourceProvider&quot;: &quot;none&quot;
            },
            &quot;backgroundImageId&quot;: null,
            &quot;backgroundMediaEffect&quot;: {
            &quot;type&quot;: &quot;none&quot;
            },
            &quot;divider&quot;: {
            &quot;enabled&quot;: true,
            &quot;type&quot;: &quot;none&quot;,
            &quot;width&quot;: {
            &quot;value&quot;: 100,
            &quot;unit&quot;: &quot;vw&quot;
            },
            &quot;height&quot;: {
            &quot;value&quot;: 6,
            &quot;unit&quot;: &quot;vw&quot;
            },
            &quot;isFlipX&quot;: false,
            &quot;isFlipY&quot;: false,
            &quot;offset&quot;: {
            &quot;value&quot;: 0,
            &quot;unit&quot;: &quot;px&quot;
            },
            &quot;stroke&quot;: {
            &quot;style&quot;: &quot;solid&quot;,
            &quot;color&quot;: {
            &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
            &quot;sitePaletteColor&quot;: {
            &quot;colorName&quot;: &quot;darkAccent&quot;,
            &quot;alphaModifier&quot;: 1
            }
            },
            &quot;thickness&quot;: {
            &quot;value&quot;: 6,
            &quot;unit&quot;: &quot;px&quot;
            },
            &quot;dashLength&quot;: {
            &quot;value&quot;: 5,
            &quot;unit&quot;: &quot;px&quot;
            },
            &quot;gapLength&quot;: {
            &quot;value&quot;: 15,
            &quot;unit&quot;: &quot;px&quot;
            },
            &quot;linecap&quot;: &quot;square&quot;
            }
            },
            &quot;typeName&quot;: &quot;products&quot;
            }"
          data-animation=""
          data-json-schema-section=""
          data-controllers-bound="SectionWrapperController"
          data-active="true">
          <div class="section-border" data-controller="SectionDivider" style="clip-path: url(#section-divider-6697c8c522272f5ce17e5a14);" data-controllers-bound="SectionDivider">
            <div class="section-background"> 
            </div>
          </div>
          <div class="content-wrapper" style="">
            <div class="content">
              <div class="user-items-list" style="min-height: 100px; padding-top: 0vmax; padding-bottom: 3.3vmax;" data-card-theme="" data-section-id="user-items-list" data-section-title-enabled="false" data-space-below-section-title-value="70" data-space-below-section-title-unit="px" data-layout-width="inset">
                <ul class="user-items-list-item-container user-items-list-simple"
                  style="grid-gap: 60px 60px;"
                  data-controller="UserItemsListSimple"
                  data-num-columns="3"
                  data-content-order="media-first"
                  data-alignment-vertical="top"
                  data-section-id="6697c8c522272f5ce17e5a14"
                  data-current-context="{
                    &quot;userItems&quot;: [ {
                    &quot;title&quot;: &quot;Build your personal library&quot;,
                    &quot;description&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>Begin by selecting web pages, PDFs, and other documents that interest you. When you add them to your library, iCognition gets to work building your personal knowledge base.   <\/p>&quot;,
                    &quot;button&quot;: {
                    &quot;buttonText&quot;: &quot;Make It&quot;,
                    &quot;buttonLink&quot;: &quot;#&quot;
                    },
                    &quot;imageId&quot;: &quot;6697cbb3b4ba8b0a3140c953&quot;,
                    &quot;image&quot;: {
                    &quot;id&quot;: &quot;6697cbb3b4ba8b0a3140c953&quot;,
                    &quot;recordType&quot;: 2,
                    &quot;addedOn&quot;: 1721224115332,
                    &quot;updatedOn&quot;: 1721224115449,
                    &quot;workflowState&quot;: 1,
                    &quot;publishOn&quot;: 1721224115332,
                    &quot;authorId&quot;: &quot;66966791afa917252f85eb5e&quot;,
                    &quot;systemDataId&quot;: &quot;343fb76d-ec04-4ccd-a43a-942e5b7d0ba3&quot;,
                    &quot;systemDataVariants&quot;: &quot;1766x1070,100w,300w,500w,750w,1000w,1500w&quot;,
                    &quot;systemDataSourceType&quot;: &quot;PNG&quot;,
                    &quot;filename&quot;: &quot;illus1 new.png&quot;,
                    &quot;mediaFocalPoint&quot;: {
                    &quot;x&quot;: 0.5,
                    &quot;y&quot;: 0.5,
                    &quot;source&quot;: 3
                    },
                    &quot;colorData&quot;: {
                    &quot;topLeftAverage&quot;: &quot;f6f6f6&quot;,
                    &quot;topRightAverage&quot;: &quot;f8f8f8&quot;,
                    &quot;bottomLeftAverage&quot;: &quot;f9f9f9&quot;,
                    &quot;bottomRightAverage&quot;: &quot;fafafa&quot;,
                    &quot;centerAverage&quot;: &quot;fafafa&quot;,
                    &quot;suggestedBgColor&quot;: &quot;dfdbd9&quot;
                    },
                    &quot;urlId&quot;: &quot;vmj83alwf59zz5p33w00ou7z3wndxl&quot;,
                    &quot;title&quot;: &quot;&quot;,
                    &quot;body&quot;: null,
                    &quot;likeCount&quot;: 0,
                    &quot;commentCount&quot;: 0,
                    &quot;publicCommentCount&quot;: 0,
                    &quot;commentState&quot;: 2,
                    &quot;unsaved&quot;: false,
                    &quot;author&quot;: {
                    &quot;id&quot;: &quot;66966791afa917252f85eb5e&quot;,
                    &quot;displayName&quot;: &quot;Eli icognition&quot;,
                    &quot;firstName&quot;: &quot;Eli&quot;,
                    &quot;lastName&quot;: &quot;icognition&quot;,
                    &quot;bio&quot;: &quot;&quot;
                    },
                    &quot;assetUrl&quot;: &quot;/src/assets/images/illus1.png&quot;,
                    &quot;contentType&quot;: &quot;image/png&quot;,
                    &quot;items&quot;: [ ],
                    &quot;pushedServices&quot;: { },
                    &quot;pendingPushedServices&quot;: { },
                    &quot;originalSize&quot;: &quot;1766x1070&quot;,
                    &quot;recordTypeLabel&quot;: &quot;image&quot;
                    }
                    }, {
                    &quot;title&quot;: &quot;Read less and understand more&quot;,
                    &quot;description&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>iCognition summarizes the text and puts the essentials into easy-to-read bullet points that also have integrated audio controls<\/p>&quot;,
                    &quot;button&quot;: {
                    &quot;buttonText&quot;: &quot;Make It&quot;
                    },
                    &quot;imageId&quot;: &quot;6697c8c522272f5ce17e5a13&quot;,
                    &quot;image&quot;: {
                    &quot;id&quot;: &quot;6697c8c522272f5ce17e5a13&quot;,
                    &quot;recordType&quot;: 2,
                    &quot;addedOn&quot;: 1721162395827,
                    &quot;updatedOn&quot;: 1721162395894,
                    &quot;starred&quot;: false,
                    &quot;passthrough&quot;: false,
                    &quot;workflowState&quot;: 1,
                    &quot;publishOn&quot;: 1721162395827,
                    &quot;authorId&quot;: &quot;66966791afa917252f85eb5e&quot;,
                    &quot;systemDataId&quot;: &quot;78b3c147-85be-4de0-a7ea-96dea9d5ace3&quot;,
                    &quot;systemDataVariants&quot;: &quot;1766x1070,100w,300w,500w,750w,1000w,1500w&quot;,
                    &quot;systemDataSourceType&quot;: &quot;PNG&quot;,
                    &quot;filename&quot;: &quot;illus3.png&quot;,
                    &quot;mediaFocalPoint&quot;: {
                    &quot;x&quot;: 0.5,
                    &quot;y&quot;: 0.5,
                    &quot;source&quot;: 3
                    },
                    &quot;colorData&quot;: {
                    &quot;topLeftAverage&quot;: &quot;f7f7f7&quot;,
                    &quot;topRightAverage&quot;: &quot;f8f8f8&quot;,
                    &quot;bottomLeftAverage&quot;: &quot;f8f8f8&quot;,
                    &quot;bottomRightAverage&quot;: &quot;fafafa&quot;,
                    &quot;centerAverage&quot;: &quot;f2f2f2&quot;,
                    &quot;suggestedBgColor&quot;: &quot;e7e7e7&quot;
                    },
                    &quot;urlId&quot;: &quot;k39yoihr1bbxgqjni3ys4t7lp6uicu-p3k58-8x5tp-ft6h2&quot;,
                    &quot;title&quot;: &quot;&quot;,
                    &quot;body&quot;: null,
                    &quot;likeCount&quot;: 0,
                    &quot;commentCount&quot;: 0,
                    &quot;publicCommentCount&quot;: 0,
                    &quot;commentState&quot;: 2,
                    &quot;unsaved&quot;: false,
                    &quot;author&quot;: {
                    &quot;id&quot;: &quot;66966791afa917252f85eb5e&quot;,
                    &quot;displayName&quot;: &quot;Eli icognition&quot;,
                    &quot;firstName&quot;: &quot;Eli&quot;,
                    &quot;lastName&quot;: &quot;icognition&quot;,
                    &quot;bio&quot;: &quot;&quot;
                    },
                    &quot;assetUrl&quot;: &quot;/src/assets/images/illus3.png&quot;,
                    &quot;contentType&quot;: &quot;image/png&quot;,
                    &quot;items&quot;: [ ],
                    &quot;pushedServices&quot;: { },
                    &quot;pendingPushedServices&quot;: { },
                    &quot;originalSize&quot;: &quot;1766x1070&quot;,
                    &quot;recordTypeLabel&quot;: &quot;image&quot;
                    }
                    }, {
                    &quot;title&quot;: &quot;Supercharge dyslexic thinking&quot;,
                    &quot;description&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>iCognition empowers big-picture thinking by connecting articles to the big picture. <\/p>&quot;,
                    &quot;button&quot;: {
                    &quot;buttonText&quot;: &quot;Click Here&quot;,
                    &quot;buttonLink&quot;: &quot;/&quot;
                    },
                    &quot;imageId&quot;: &quot;6697cbf899e0275a701da818&quot;,
                    &quot;image&quot;: {
                    &quot;id&quot;: &quot;6697cbf899e0275a701da818&quot;,
                    &quot;recordType&quot;: 2,
                    &quot;addedOn&quot;: 1721224184555,
                    &quot;updatedOn&quot;: 1721224184655,
                    &quot;workflowState&quot;: 1,
                    &quot;publishOn&quot;: 1721224184555,
                    &quot;authorId&quot;: &quot;66966791afa917252f85eb5e&quot;,
                    &quot;systemDataId&quot;: &quot;ff793ff3-afbe-42b8-8007-67b21e2bc54c&quot;,
                    &quot;systemDataVariants&quot;: &quot;1766x1070,100w,300w,500w,750w,1000w,1500w&quot;,
                    &quot;systemDataSourceType&quot;: &quot;PNG&quot;,
                    &quot;filename&quot;: &quot;illus5.png&quot;,
                    &quot;mediaFocalPoint&quot;: {
                    &quot;x&quot;: 0.5,
                    &quot;y&quot;: 0.5,
                    &quot;source&quot;: 3
                    },
                    &quot;colorData&quot;: {
                    &quot;topLeftAverage&quot;: &quot;f6f6f6&quot;,
                    &quot;topRightAverage&quot;: &quot;f8f8f8&quot;,
                    &quot;bottomLeftAverage&quot;: &quot;f9f9f9&quot;,
                    &quot;bottomRightAverage&quot;: &quot;fafafa&quot;,
                    &quot;centerAverage&quot;: &quot;fafafa&quot;,
                    &quot;suggestedBgColor&quot;: &quot;deddd9&quot;
                    },
                    &quot;urlId&quot;: &quot;ua87vko7hziynltd1c0s7ahygmih25&quot;,
                    &quot;title&quot;: &quot;&quot;,
                    &quot;body&quot;: null,
                    &quot;likeCount&quot;: 0,
                    &quot;commentCount&quot;: 0,
                    &quot;publicCommentCount&quot;: 0,
                    &quot;commentState&quot;: 2,
                    &quot;unsaved&quot;: false,
                    &quot;author&quot;: {
                    &quot;id&quot;: &quot;66966791afa917252f85eb5e&quot;,
                    &quot;displayName&quot;: &quot;Eli icognition&quot;,
                    &quot;firstName&quot;: &quot;Eli&quot;,
                    &quot;lastName&quot;: &quot;icognition&quot;,
                    &quot;bio&quot;: &quot;&quot;
                    },
                    &quot;assetUrl&quot;: &quot;/src/assets/images/illus5.png&quot;,
                    &quot;contentType&quot;: &quot;image/png&quot;,
                    &quot;items&quot;: [ ],
                    &quot;pushedServices&quot;: { },
                    &quot;pendingPushedServices&quot;: { },
                    &quot;originalSize&quot;: &quot;1766x1070&quot;,
                    &quot;recordTypeLabel&quot;: &quot;image&quot;
                    }
                    }, {
                    &quot;title&quot;: &quot;Peace of Mind&quot;,
                    &quot;description&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>iCognition auto-categorizes your personal library based on information from its content. The AI-powered search feature makes it easy to find information when you need it. iCognition is designed to organize information in a way that makes it accessible for people with dyslexia.<\/p>&quot;,
                    &quot;button&quot;: {
                    &quot;buttonText&quot;: &quot;Click Here&quot;,
                    &quot;buttonLink&quot;: &quot;/&quot;
                    },
                    &quot;imageId&quot;: &quot;6697cc5ffc41740a082c1d02&quot;,
                    &quot;image&quot;: {
                    &quot;id&quot;: &quot;6697cc5ffc41740a082c1d02&quot;,
                    &quot;recordType&quot;: 2,
                    &quot;addedOn&quot;: 1721224287185,
                    &quot;updatedOn&quot;: 1721224287259,
                    &quot;workflowState&quot;: 1,
                    &quot;publishOn&quot;: 1721224287185,
                    &quot;authorId&quot;: &quot;66966791afa917252f85eb5e&quot;,
                    &quot;systemDataId&quot;: &quot;4ab91aa3-d5d4-41a1-bae0-14a29a2773d2&quot;,
                    &quot;systemDataVariants&quot;: &quot;1768x1070,100w,300w,500w,750w,1000w,1500w&quot;,
                    &quot;systemDataSourceType&quot;: &quot;PNG&quot;,
                    &quot;filename&quot;: &quot;illus4.png&quot;,
                    &quot;mediaFocalPoint&quot;: {
                    &quot;x&quot;: 0.5,
                    &quot;y&quot;: 0.5,
                    &quot;source&quot;: 3
                    },
                    &quot;colorData&quot;: {
                    &quot;topLeftAverage&quot;: &quot;f6f6f6&quot;,
                    &quot;topRightAverage&quot;: &quot;f6f6f6&quot;,
                    &quot;bottomLeftAverage&quot;: &quot;f8f8f8&quot;,
                    &quot;bottomRightAverage&quot;: &quot;f8f8f8&quot;,
                    &quot;centerAverage&quot;: &quot;f8f8f8&quot;,
                    &quot;suggestedBgColor&quot;: &quot;cacaca&quot;
                    },
                    &quot;urlId&quot;: &quot;1dvxdufs1jg8rywtvnu34cjjwpn1lo&quot;,
                    &quot;title&quot;: &quot;&quot;,
                    &quot;body&quot;: null,
                    &quot;likeCount&quot;: 0,
                    &quot;commentCount&quot;: 0,
                    &quot;publicCommentCount&quot;: 0,
                    &quot;commentState&quot;: 2,
                    &quot;unsaved&quot;: false,
                    &quot;author&quot;: {
                    &quot;id&quot;: &quot;66966791afa917252f85eb5e&quot;,
                    &quot;displayName&quot;: &quot;Eli icognition&quot;,
                    &quot;firstName&quot;: &quot;Eli&quot;,
                    &quot;lastName&quot;: &quot;icognition&quot;,
                    &quot;bio&quot;: &quot;&quot;
                    },
                    &quot;assetUrl&quot;: &quot;/src/assets/images/illus4.png&quot;,
                    &quot;contentType&quot;: &quot;image/png&quot;,
                    &quot;items&quot;: [ ],
                    &quot;pushedServices&quot;: { },
                    &quot;pendingPushedServices&quot;: { },
                    &quot;originalSize&quot;: &quot;1768x1070&quot;,
                    &quot;recordTypeLabel&quot;: &quot;image&quot;
                    }
                    }, {
                    &quot;title&quot;: &quot;Study Buddy&quot;,
                    &quot;description&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>iCognition is also your study buddy, allowing you to use Generative AI to ask questions based on the documents in your library. <\/p>&quot;,
                    &quot;button&quot;: {
                    &quot;buttonText&quot;: &quot;Make It&quot;
                    },
                    &quot;imageId&quot;: &quot;6697c8c522272f5ce17e5a0f&quot;,
                    &quot;image&quot;: {
                    &quot;id&quot;: &quot;6697c8c522272f5ce17e5a0f&quot;,
                    &quot;recordType&quot;: 2,
                    &quot;addedOn&quot;: 1721162144834,
                    &quot;updatedOn&quot;: 1721162144910,
                    &quot;starred&quot;: false,
                    &quot;passthrough&quot;: false,
                    &quot;workflowState&quot;: 1,
                    &quot;publishOn&quot;: 1721162144834,
                    &quot;authorId&quot;: &quot;66966791afa917252f85eb5e&quot;,
                    &quot;systemDataId&quot;: &quot;a3d3e558-2c96-4eba-b61d-8802ab35a3a0&quot;,
                    &quot;systemDataVariants&quot;: &quot;1766x1070,100w,300w,500w,750w,1000w,1500w&quot;,
                    &quot;systemDataSourceType&quot;: &quot;PNG&quot;,
                    &quot;filename&quot;: &quot;illus2.png&quot;,
                    &quot;mediaFocalPoint&quot;: {
                    &quot;x&quot;: 0.5,
                    &quot;y&quot;: 0.5,
                    &quot;source&quot;: 3
                    },
                    &quot;colorData&quot;: {
                    &quot;topLeftAverage&quot;: &quot;cbd1d5&quot;,
                    &quot;topRightAverage&quot;: &quot;f8f8f8&quot;,
                    &quot;bottomLeftAverage&quot;: &quot;f8f8f8&quot;,
                    &quot;bottomRightAverage&quot;: &quot;e8e9e9&quot;,
                    &quot;centerAverage&quot;: &quot;fafafa&quot;,
                    &quot;suggestedBgColor&quot;: &quot;d6d6d6&quot;
                    },
                    &quot;urlId&quot;: &quot;l05eb2yrdmfm2vryczmrs604k4q6xo-s455y-dn9gb-9khn9&quot;,
                    &quot;title&quot;: &quot;&quot;,
                    &quot;body&quot;: null,
                    &quot;likeCount&quot;: 0,
                    &quot;commentCount&quot;: 0,
                    &quot;publicCommentCount&quot;: 0,
                    &quot;commentState&quot;: 2,
                    &quot;unsaved&quot;: false,
                    &quot;author&quot;: {
                    &quot;id&quot;: &quot;66966791afa917252f85eb5e&quot;,
                    &quot;displayName&quot;: &quot;Eli icognition&quot;,
                    &quot;firstName&quot;: &quot;Eli&quot;,
                    &quot;lastName&quot;: &quot;icognition&quot;,
                    &quot;bio&quot;: &quot;&quot;
                    },
                    &quot;assetUrl&quot;: &quot;/src/assets/images/illus2.png&quot;,
                    &quot;contentType&quot;: &quot;image/png&quot;,
                    &quot;items&quot;: [ ],
                    &quot;pushedServices&quot;: { },
                    &quot;pendingPushedServices&quot;: { },
                    &quot;originalSize&quot;: &quot;1766x1070&quot;,
                    &quot;recordTypeLabel&quot;: &quot;image&quot;
                    }
                    } ],
                    &quot;styles&quot;: {
                    &quot;imageFocalPoint&quot;: {
                    &quot;x&quot;: 0.5,
                    &quot;y&quot;: 0.5
                    },
                    &quot;imageOverlayOpacity&quot;: 0.3,
                    &quot;backgroundColor&quot;: &quot;white&quot;,
                    &quot;sectionTheme&quot;: &quot;light&quot;,
                    &quot;imageEffect&quot;: &quot;none&quot;,
                    &quot;backgroundMode&quot;: &quot;image&quot;,
                    &quot;backgroundImage&quot;: null
                    },
                    &quot;video&quot;: {
                    &quot;filter&quot;: 1,
                    &quot;videoFallbackContentItem&quot;: null,
                    &quot;nativeVideoContentItem&quot;: null,
                    &quot;videoSourceProvider&quot;: &quot;none&quot;
                    },
                    &quot;backgroundImageFocalPoint&quot;: null,
                    &quot;backgroundImageId&quot;: null,
                    &quot;options&quot;: {
                    &quot;maxColumns&quot;: 3,
                    &quot;isCardEnabled&quot;: false,
                    &quot;isMediaEnabled&quot;: true,
                    &quot;isTitleEnabled&quot;: true,
                    &quot;isBodyEnabled&quot;: true,
                    &quot;isButtonEnabled&quot;: false,
                    &quot;mediaAspectRatio&quot;: &quot;original&quot;,
                    &quot;layoutWidth&quot;: &quot;inset&quot;,
                    &quot;mediaWidth&quot;: {
                    &quot;value&quot;: 100,
                    &quot;unit&quot;: &quot;%&quot;
                    },
                    &quot;mediaAlignment&quot;: &quot;left&quot;,
                    &quot;contentWidth&quot;: {
                    &quot;value&quot;: 100,
                    &quot;unit&quot;: &quot;%&quot;
                    },
                    &quot;titleAlignment&quot;: &quot;left&quot;,
                    &quot;bodyAlignment&quot;: &quot;left&quot;,
                    &quot;buttonAlignment&quot;: &quot;left&quot;,
                    &quot;titlePlacement&quot;: &quot;center&quot;,
                    &quot;bodyPlacement&quot;: &quot;center&quot;,
                    &quot;buttonPlacement&quot;: &quot;center&quot;,
                    &quot;cardVerticalAlignment&quot;: &quot;top&quot;,
                    &quot;contentOrder&quot;: &quot;media-first&quot;,
                    &quot;verticalPaddingTop&quot;: {
                    &quot;value&quot;: 3.3,
                    &quot;unit&quot;: &quot;vmax&quot;
                    },
                    &quot;verticalPaddingBottom&quot;: {
                    &quot;value&quot;: 3.3,
                    &quot;unit&quot;: &quot;vmax&quot;
                    },
                    &quot;spaceBetweenColumns&quot;: {
                    &quot;value&quot;: 60,
                    &quot;unit&quot;: &quot;px&quot;
                    },
                    &quot;spaceBetweenRows&quot;: {
                    &quot;value&quot;: 60,
                    &quot;unit&quot;: &quot;px&quot;
                    },
                    &quot;spaceBetweenContentAndMedia&quot;: {
                    &quot;value&quot;: 6,
                    &quot;unit&quot;: &quot;%&quot;
                    },
                    &quot;spaceBelowTitle&quot;: {
                    &quot;value&quot;: 5,
                    &quot;unit&quot;: &quot;%&quot;
                    },
                    &quot;spaceBelowBody&quot;: {
                    &quot;value&quot;: 6,
                    &quot;unit&quot;: &quot;%&quot;
                    },
                    &quot;cardPaddingTop&quot;: {
                    &quot;value&quot;: 20,
                    &quot;unit&quot;: &quot;px&quot;
                    },
                    &quot;cardPaddingRight&quot;: {
                    &quot;value&quot;: 20,
                    &quot;unit&quot;: &quot;px&quot;
                    },
                    &quot;cardPaddingBottom&quot;: {
                    &quot;value&quot;: 20,
                    &quot;unit&quot;: &quot;px&quot;
                    },
                    &quot;cardPaddingLeft&quot;: {
                    &quot;value&quot;: 20,
                    &quot;unit&quot;: &quot;px&quot;
                    },
                    &quot;titleFontSize&quot;: &quot;heading-2&quot;,
                    &quot;bodyFontSize&quot;: &quot;paragraph-2&quot;,
                    &quot;buttonFontSize&quot;: &quot;button-medium&quot;,
                    &quot;customOptions&quot;: {
                    &quot;customTitleFontSize&quot;: {
                    &quot;value&quot;: 1.6,
                    &quot;unit&quot;: &quot;rem&quot;
                    },
                    &quot;customBodyFontSize&quot;: {
                    &quot;value&quot;: 1,
                    &quot;unit&quot;: &quot;rem&quot;
                    },
                    &quot;customButtonFontSize&quot;: {
                    &quot;value&quot;: 0.9,
                    &quot;unit&quot;: &quot;rem&quot;
                    }
                    }
                    },
                    &quot;layout&quot;: &quot;simple&quot;,
                    &quot;isSectionTitleEnabled&quot;: false,
                    &quot;sectionTitle&quot;: &quot;<p class=\&quot;\&quot; style=\&quot;white-space:pre-wrap;\&quot;>Our Services<\/p>&quot;,
                    &quot;spaceBelowSectionTitle&quot;: {
                    &quot;value&quot;: 70,
                    &quot;unit&quot;: &quot;px&quot;
                    },
                    &quot;sectionTitleAlignment&quot;: &quot;left&quot;,
                    &quot;isSectionButtonEnabled&quot;: false,
                    &quot;sectionButton&quot;: {
                    &quot;buttonText&quot;: &quot;Make It&quot;,
                    &quot;buttonLink&quot;: &quot;#&quot;,
                    &quot;buttonNewWindow&quot;: false
                    },
                    &quot;sectionButtonSize&quot;: &quot;large&quot;,
                    &quot;sectionButtonAlignment&quot;: &quot;left&quot;,
                    &quot;spaceAboveSectionButton&quot;: {
                    &quot;value&quot;: 70,
                    &quot;unit&quot;: &quot;px&quot;
                    }
                    }" 
                  data-media-alignment="left" 
                  data-title-alignment="left"
                  data-body-alignment="left"
                  data-button-alignment="left"
                  data-title-placement="center"
                  data-body-placement="center"
                  data-button-placement="center"
                  data-layout-width="inset"
                  data-title-font-unit="rem"
                  data-description-font-unit="rem"
                  data-button-font-unit="rem"
                  data-space-between-rows="60px"
                  data-space-between-columns="60px"
                  data-vertical-padding-top-value="3.3"
                  data-vertical-padding-bottom-value="3.3"
                  data-vertical-padding-top-unit="vmax"
                  data-vertical-padding-bottom-unit="vmax"
                  data-controllers-bound="UserItemsListSimple">
                  <li class="list-item" style="" data-is-card-enabled="false">
                    <div class="list-item-media" style="margin-bottom: 6%; width: 100%;">
                      <div class="list-item-media-inner" data-aspect-ratio="original" data-animation-role="image">
                        <img alt="" data-src="/src/assets/images/illus1.png" data-image="/src/assets/images/illus1.png" data-image-dimensions="1766x1070" data-image-focal-point="0.5,0.5" data-load="false" elementtiming="nbf-list-simple" src="/src/assets/images/illus1.png" width="1766" height="1070" sizes="(max-width: 575px) calc((100vw - 0px) / 1), (max-width: 767px) calc((100vw - 60px) / 2), (max-width: 1099px) calc((100vw - 120px) / 3), (max-width: 1199px) calc((100vw - 120px) / 3), calc((100vw - 120px) / 3)" class="list-image" style="display:block;object-position: 50% 50%;" srcset="/src/assets/images/illus1.png?format=100w 100w, /src/assets/images/illus1.png?format=300w 300w, /src/assets/images/illus1.png?format=500w 500w, /src/assets/images/illus1.png?format=750w 750w, /src/assets/images/illus1.png?format=1000w 1000w, /src/assets/images/illus1.png?format=1500w 1500w, /src/assets/images/illus1.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
                      </div>
                    </div>
                    <div class="list-item-content">
                      <div class="list-item-content__text-wrapper">
                        <h2 class="list-item-content__title" style="max-width: 100%;">Build your personal library</h2>
                        <div class="list-item-content__description" style="margin-top: 5%; max-width: 100%;">
                          <p class="" style="white-space:pre-wrap;">Begin by selecting web pages, PDFs, and other documents that interest you. When you add them to your library, iCognition gets to work building your personal knowledge base.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-item" style="" data-is-card-enabled="false">
                    <div class="list-item-media" style="margin-bottom: 6%; width: 100%;">
                      <div class="list-item-media-inner" data-aspect-ratio="original" data-animation-role="image">
                        <img alt="" data-src="/src/assets/images/illus3.png" data-image="/src/assets/images/illus3.png" data-image-dimensions="1766x1070" data-image-focal-point="0.5,0.5" data-load="false" elementtiming="nbf-list-simple" src="/src/assets/images/illus3.png" width="1766" height="1070" sizes="(max-width: 575px) calc((100vw - 0px) / 1), (max-width: 767px) calc((100vw - 60px) / 2), (max-width: 1099px) calc((100vw - 120px) / 3), (max-width: 1199px) calc((100vw - 120px) / 3), calc((100vw - 120px) / 3)" class="list-image" style="display:block;object-position: 50% 50%;" srcset="/src/assets/images/illus3.png?format=100w 100w, /src/assets/images/illus3.png?format=300w 300w, /src/assets/images/illus3.png?format=500w 500w, /src/assets/images/illus3.png?format=750w 750w, /src/assets/images/illus3.png?format=1000w 1000w, /src/assets/images/illus3.png?format=1500w 1500w, /src/assets/images/illus3.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
                      </div>
                    </div>
                    <div class="list-item-content">
                      <div class="list-item-content__text-wrapper">
                        <h2 class="list-item-content__title" style="max-width: 100%;">Read less and understand more</h2>
                        <div class="list-item-content__description" style="margin-top: 5%; max-width: 100%;">
                          <p class="" style="white-space:pre-wrap;">iCognition summarizes the text and puts the essentials into easy-to-read bullet points that also have integrated audio controls</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-item" style="" data-is-card-enabled="false">
                    <div class="list-item-media" style="margin-bottom: 6%; width: 100%;">
                      <div class="list-item-media-inner" data-aspect-ratio="original" data-animation-role="image">
                        <img alt="" data-src="/src/assets/images/illus5.png" data-image="/src/assets/images/illus5.png" data-image-dimensions="1766x1070" data-image-focal-point="0.5,0.5" data-load="false" elementtiming="nbf-list-simple" src="/src/assets/images/illus5.png" width="1766" height="1070" sizes="(max-width: 575px) calc((100vw - 0px) / 1), (max-width: 767px) calc((100vw - 60px) / 2), (max-width: 1099px) calc((100vw - 120px) / 3), (max-width: 1199px) calc((100vw - 120px) / 3), calc((100vw - 120px) / 3)" class="list-image" style="display:block;object-position: 50% 50%;" srcset="/src/assets/images/illus5.png?format=100w 100w, /src/assets/images/illus5.png?format=300w 300w, /src/assets/images/illus5.png?format=500w 500w, /src/assets/images/illus5.png?format=750w 750w, /src/assets/images/illus5.png?format=1000w 1000w, /src/assets/images/illus5.png?format=1500w 1500w, /src/assets/images/illus5.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
                      </div>
                    </div>
                    <div class="list-item-content">
                      <div class="list-item-content__text-wrapper">
                        <h2 class="list-item-content__title" style="max-width: 100%;">Supercharge dyslexic thinking</h2>
                        <div class="list-item-content__description" style="margin-top: 5%;max-width: 100%;">
                          <p class="" style="white-space:pre-wrap;">iCognition empowers big-picture thinking by connecting articles to the big picture. </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-item" style="" data-is-card-enabled="false">
                    <div class="list-item-media" style="margin-bottom: 6%;width: 100%;">
                      <div class="list-item-media-inner" data-aspect-ratio="original" data-animation-role="image">
                        <img alt="" data-src="/src/assets/images/illus4.png" data-image="/src/assets/images/illus4.png" data-image-dimensions="1768x1070" data-image-focal-point="0.5,0.5" data-load="false" elementtiming="nbf-list-simple" src="/src/assets/images/illus4.png" width="1768" height="1070" sizes="(max-width: 575px) calc((100vw - 0px) / 1), (max-width: 767px) calc((100vw - 60px) / 2), (max-width: 1099px) calc((100vw - 120px) / 3), (max-width: 1199px) calc((100vw - 120px) / 3), calc((100vw - 120px) / 3)" class="list-image" style="display:block;object-position: 50% 50%;" srcset="/src/assets/images/illus4.png?format=100w 100w, /src/assets/images/illus4.png?format=300w 300w, /src/assets/images/illus4.png?format=500w 500w, /src/assets/images/illus4.png?format=750w 750w, /src/assets/images/illus4.png?format=1000w 1000w, /src/assets/images/illus4.png?format=1500w 1500w, /src/assets/images/illus4.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
                      </div>
                    </div>
                    <div class="list-item-content">
                      <div class="list-item-content__text-wrapper">
                        <h2 class="list-item-content__title" style="max-width: 100%;">Peace of Mind</h2>
                        <div class="list-item-content__description" style="margin-top: 5%;max-width: 100%;">
                          <p class="" style="white-space:pre-wrap;">iCognition auto-categorizes your personal library based on information from its content. The AI-powered search feature makes it easy to find information when you need it. iCognition is designed to organize information in a way that makes it accessible for people with dyslexia.</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-item" style="" data-is-card-enabled="false">
                    <div class="list-item-media" style="margin-bottom: 6%;width: 100%;">
                      <div class="list-item-media-inner" data-aspect-ratio="original" data-animation-role="image">
                        <img alt="" data-src="/src/assets/images/illus2.png" data-image="/src/assets/images/illus2.png" data-image-dimensions="1766x1070" data-image-focal-point="0.5,0.5" data-load="false" elementtiming="nbf-list-simple" src="/src/assets/images/illus2.png" width="1766" height="1070" sizes="(max-width: 575px) calc((100vw - 0px) / 1), (max-width: 767px) calc((100vw - 60px) / 2), (max-width: 1099px) calc((100vw - 120px) / 3), (max-width: 1199px) calc((100vw - 120px) / 3), calc((100vw - 120px) / 3)" class="list-image" style="display:block;object-position: 50% 50%;" srcset="/src/assets/images/illus2.png?format=100w 100w, /src/assets/images/illus2.png?format=300w 300w, /src/assets/images/illus2.png?format=500w 500w, /src/assets/images/illus2.png?format=750w 750w, /src/assets/images/illus2.png?format=1000w 1000w, /src/assets/images/illus2.png?format=1500w 1500w, /src/assets/images/illus2.png?format=2500w 2500w" loading="lazy" decoding="async" data-loader="sqs">
                      </div>
                    </div>
                    <div class="list-item-content">
                      <div class="list-item-content__text-wrapper">
                        <h2 class="list-item-content__title" style="max-width: 100%;">Study Buddy</h2>
                        <div class="list-item-content__description" style="margin-top: 5%; max-width: 100%;">
                          <p class="" style="white-space:pre-wrap;">iCognition is also your study buddy, allowing you to use Generative AI to ask questions based on the documents in your library. </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="section-divider-display" style="--stroke-thickness: 6px; --stroke-dasharray: 0; --stroke-linecap: square; --section-divider-stroke-color: hsla(var(--darkAccent-hsl),1);">
            <div class="section-divider-block"></div>
            <svg class="section-divider-svg-clip" style="display: none;">
              <clipPath id="section-divider-6697c8c522272f5ce17e5a14" clipPathUnits="objectBoundingBox">
                <path class="section-divider-clip" d="M0,0"></path>
              </clipPath>
            </svg>
            <svg class="section-divider-svg-stroke" viewBox="0 0 1 1" preserveAspectRatio="none">
              <path class="section-divider-stroke" d="M-100,0.5 L-100,1.5 M0,1 L1,1" vector-effect="non-scaling-stroke"></path>
            </svg>
          </div>
        </section>
        <section
          data-test="page-section"
          data-section-theme="black-bold"
          class="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle black-bold"
          data-section-id="6697ccb22cf289348166d708"
          data-controller="SectionWrapperController"
          data-current-styles="{
            &quot;imageOverlayOpacity&quot;: 0.15,
            &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
            &quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
            &quot;customSectionHeight&quot;: 1,
            &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
            &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
            &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
            &quot;customContentWidth&quot;: 50,
            &quot;backgroundColor&quot;: &quot;&quot;,
            &quot;sectionTheme&quot;: &quot;black-bold&quot;,
            &quot;sectionAnimation&quot;: &quot;none&quot;,
            &quot;backgroundMode&quot;: &quot;image&quot;
            }"
          data-current-context="{
            &quot;video&quot;: {
            &quot;playbackSpeed&quot;: 0.5,
            &quot;filter&quot;: 1,
            &quot;filterStrength&quot;: 0,
            &quot;zoom&quot;: 0,
            &quot;videoSourceProvider&quot;: &quot;none&quot;
            },
            &quot;backgroundImageId&quot;: null,
            &quot;backgroundMediaEffect&quot;: {
            &quot;type&quot;: &quot;none&quot;
            },
            &quot;divider&quot;: {
            &quot;enabled&quot;: false,
            &quot;type&quot;: &quot;none&quot;,
            &quot;width&quot;: {
            &quot;unit&quot;: &quot;vw&quot;,
            &quot;value&quot;: 100.0
            },
            &quot;height&quot;: {
            &quot;unit&quot;: &quot;vw&quot;,
            &quot;value&quot;: 6.0
            },
            &quot;isFlipX&quot;: false,
            &quot;isFlipY&quot;: false,
            &quot;offset&quot;: {
            &quot;unit&quot;: &quot;px&quot;,
            &quot;value&quot;: 0.0
            },
            &quot;stroke&quot;: {
            &quot;style&quot;: &quot;solid&quot;,
            &quot;color&quot;: {
            &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
            &quot;sitePaletteColor&quot;: {
            &quot;colorName&quot;: &quot;darkAccent&quot;,
            &quot;alphaModifier&quot;: 1.0
            }
            },
            &quot;thickness&quot;: {
            &quot;unit&quot;: &quot;px&quot;,
            &quot;value&quot;: 6.0
            },
            &quot;dashLength&quot;: {
            &quot;unit&quot;: &quot;px&quot;,
            &quot;value&quot;: 5.0
            },
            &quot;gapLength&quot;: {
            &quot;unit&quot;: &quot;px&quot;,
            &quot;value&quot;: 15.0
            },
            &quot;linecap&quot;: &quot;square&quot;
            }
            },
            &quot;typeName&quot;: &quot;products&quot;
            }"
          data-animation="none"
          data-fluid-engine-section=""
          style="min-height: 1vh;"
          data-controllers-bound="SectionWrapperController"
          data-active="true">
          <div class="section-border">
            <div class="section-background">
            </div>
          </div>
          <div class="content-wrapper" style="padding-top: calc(1vmax / 10); padding-bottom: calc(1vmax / 10);">
            <div class="content">
              <div data-fluid-engine="true">
                <div class="fluid-engine fe-6697ccb203aacd1a3ad6f80f">
                  <div class="fe-block fe-block-yui_3_17_2_1_1721221134537_28898" style="mix-blend-mode: normal;">
                    <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1721221134537_28898">
                      <div class="sqs-block-content">
                        <div class="sqs-html-content">
                          <h3 style="text-align:center;white-space:pre-wrap;">Transform tedious text into bright insight with iCognition – the ultimate super-boost for dyslexic learners!&nbsp;</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </article>
    </main>
  
    <footer class="sections" id="footer-sections" data-footer-sections="">
      <section
        data-test="page-section"
        data-section-theme="white-bold"
        class="page-section full-bleed-section layout-engine-section background-width--full-bleed section-height--custom content-width--wide horizontal-alignment--center vertical-alignment--middle white-bold"
        data-section-id="6697f2b956e3c6049e9cae5b"
        data-controller="SectionWrapperController"
        data-current-styles="{
          &quot;imageOverlayOpacity&quot;: 0.15,
          &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
          &quot;sectionHeight&quot;: &quot;section-height--custom&quot;,
          &quot;customSectionHeight&quot;: 1,
          &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
          &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
          &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
          &quot;customContentWidth&quot;: 50,
          &quot;backgroundColor&quot;: &quot;&quot;,
          &quot;sectionTheme&quot;: &quot;white-bold&quot;,
          &quot;sectionAnimation&quot;: &quot;none&quot;,
          &quot;backgroundMode&quot;: &quot;image&quot;
          }"
        data-current-context="{
          &quot;video&quot;: {
          &quot;playbackSpeed&quot;: 0.5,
          &quot;filter&quot;: 1,
          &quot;filterStrength&quot;: 0,
          &quot;zoom&quot;: 0,
          &quot;videoSourceProvider&quot;: &quot;none&quot;
          },
          &quot;backgroundImageId&quot;: null,
          &quot;backgroundMediaEffect&quot;: {
          &quot;type&quot;: &quot;none&quot;
          },
          &quot;divider&quot;: {
          &quot;enabled&quot;: false
          },
          &quot;typeName&quot;: &quot;products&quot;
          }" 
        data-animation="none"
        data-fluid-engine-section=""
        style="min-height: 1vh;"
        data-controllers-bound="SectionWrapperController"
        data-active="true">
        <div class="section-border">
          <div class="section-background">
          </div>
        </div>
        <div class="content-wrapper" style="padding-top: calc(1vmax / 10); padding-bottom: calc(1vmax / 10);">
          <div class="content">
            <div data-fluid-engine="true">
              <div class="fluid-engine fe-6697f2b956e3c6049e9cae6b">
                <div class="fe-block fe-block-yui_3_17_2_1_1721230615972_22109" style="mix-blend-mode: normal;">
                  <div class="sqs-block html-block sqs-block-html" data-blend-mode="NORMAL" data-block-type="2" data-border-radii="{&quot;topLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;topRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomLeft&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0},&quot;bottomRight&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;value&quot;:0.0}}" id="block-yui_3_17_2_1_1721230615972_22109">
                    <div class="sqs-block-content">

                      <div class="sqs-html-content">
                        <p style="text-align:center;white-space:pre-wrap;" class="">©2024 iCognition LLC</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  </div>
    
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none" data-usage="social-icons-svg">
    <symbol id="instagram-unauth-icon" viewBox="0 0 64 64">
      <path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z"></path>
    </symbol>
    <symbol id="instagram-unauth-mask" viewBox="0 0 64 64">
      <path d="M43.693,23.153c-0.272-0.7-0.597-1.2-1.122-1.725c-0.525-0.525-1.025-0.85-1.725-1.122c-0.529-0.205-1.323-0.45-2.785-0.517c-1.582-0.072-2.056-0.087-6.061-0.087s-4.48,0.015-6.061,0.087c-1.462,0.067-2.257,0.311-2.785,0.517c-0.7,0.272-1.2,0.597-1.725,1.122c-0.525,0.525-0.85,1.025-1.122,1.725c-0.205,0.529-0.45,1.323-0.516,2.785c-0.072,1.582-0.087,2.056-0.087,6.061s0.015,4.48,0.087,6.061c0.067,1.462,0.311,2.257,0.516,2.785c0.272,0.7,0.597,1.2,1.122,1.725s1.025,0.85,1.725,1.122c0.529,0.205,1.323,0.45,2.785,0.516c1.581,0.072,2.056,0.087,6.061,0.087s4.48-0.015,6.061-0.087c1.462-0.067,2.257-0.311,2.785-0.516c0.7-0.272,1.2-0.597,1.725-1.122s0.85-1.025,1.122-1.725c0.205-0.529,0.45-1.323,0.516-2.785c0.072-1.582,0.087-2.056,0.087-6.061s-0.015-4.48-0.087-6.061C44.143,24.476,43.899,23.682,43.693,23.153z M32,39.703c-4.254,0-7.703-3.449-7.703-7.703s3.449-7.703,7.703-7.703s7.703,3.449,7.703,7.703S36.254,39.703,32,39.703z M40.007,25.793c-0.994,0-1.8-0.806-1.8-1.8c0-0.994,0.806-1.8,1.8-1.8c0.994,0,1.8,0.806,1.8,1.8C41.807,24.987,41.001,25.793,40.007,25.793z M0,0v64h64V0H0z M46.91,38.184c-0.073,1.597-0.326,2.687-0.697,3.641c-0.383,0.986-0.896,1.823-1.73,2.657c-0.834,0.834-1.67,1.347-2.657,1.73c-0.954,0.371-2.044,0.624-3.641,0.697C36.585,46.983,36.074,47,32,47s-4.585-0.017-6.184-0.09c-1.597-0.073-2.687-0.326-3.641-0.697c-0.986-0.383-1.823-0.896-2.657-1.73c-0.834-0.834-1.347-1.67-1.73-2.657c-0.371-0.954-0.624-2.044-0.697-3.641C17.017,36.585,17,36.074,17,32c0-4.074,0.017-4.585,0.09-6.185c0.073-1.597,0.326-2.687,0.697-3.641c0.383-0.986,0.896-1.823,1.73-2.657c0.834-0.834,1.67-1.347,2.657-1.73c0.954-0.371,2.045-0.624,3.641-0.697C27.415,17.017,27.926,17,32,17s4.585,0.017,6.184,0.09c1.597,0.073,2.687,0.326,3.641,0.697c0.986,0.383,1.823,0.896,2.657,1.73c0.834,0.834,1.347,1.67,1.73,2.657c0.371,0.954,0.624,2.044,0.697,3.641C46.983,27.415,47,27.926,47,32C47,36.074,46.983,36.585,46.91,38.184z M32,27c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S34.761,27,32,27z"></path></symbol><symbol id="x-formerly-twitter-unauth-icon" viewBox="0 0 64 64"><g class="svg-icon"><path d="M34.426 29.9327L43.9189 18.5H41.6694L33.4267 28.4268L26.8432 18.5H19.25L29.2055 33.5111L19.25 45.5H21.4997L30.2042 35.0169L37.1568 45.5H44.75L34.426 29.9327ZM22.3102 20.2546H25.7656L41.6704 43.8252H38.2151L22.3102 20.2546Z"></path></g></symbol><symbol id="x-formerly-twitter-unauth-mask" viewBox="0 0 64 64"><g class="svg-mask"><path d="M38.2151 43.8252H41.6704L25.7656 20.2546H22.3102L38.2151 43.8252Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H64V64H0V0ZM43.9189 18.5L34.426 29.9327L44.75 45.5H37.1568L30.2042 35.0169L21.4997 45.5H19.25L29.2055 33.5111L19.25 18.5H26.8432L33.4267 28.4268L41.6694 18.5H43.9189Z"></path></g></symbol><symbol id="facebook-unauth-icon" viewBox="0 0 64 64"><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"></path></symbol><symbol id="facebook-unauth-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z"></path>
    </symbol>
  </svg>

  <div id="yui3-css-stamp" style="position: absolute !important; visibility: hidden !important"></div>
  
  <div>
    <div class="grecaptcha-badge" data-style="bottomright" style="width: 256px; height: 60px; display: block; transition: right 0.3s ease 0s; position: fixed; bottom: 14px; right: -186px; box-shadow: gray 0px 0px 5px; border-radius: 2px; overflow: hidden;">
      <div class="grecaptcha-logo">
        <iframe title="reCAPTCHA" width="256" height="60" role="presentation" name="a-8z8aaqwo0y8t" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/enterprise/anchor?ar=1&amp;k=6LdDFQwjAAAAAPigEvvPgEVbb7QBm-TkVJdDTlAv&amp;co=aHR0cHM6Ly9pY29nbml0aW9uLmFpOjQ0Mw..&amp;hl=en&amp;v=rKbTvxTxwcw5VqzrtN-ICwWt&amp;size=invisible&amp;cb=kv6mpjy27fbg"></iframe>
      </div>
      <div class="grecaptcha-error"></div>
      <textarea id="g-recaptcha-response-100000" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
    </div>
    <iframe style="display: none;"></iframe>
  </div>
  <!-- <div class="grid hero-background m-0">
    <div class="xs:col-12 lg:col-6">
      <div class="flex flex-column justify-content-center p-1 m-1">
        <div class="text-lg line-height-3 w-10 m-2 p-2">
          <h1 class="flex">iCognition - AI Assistant</h1>
          <p class="">
            iCognition is an AI assistant designed to empower individuals by helping them comprehend information. It is tailored to leverage the strengths of the mind, such as big-picture thinking and compensating for short-term memory issues.
          </p>
            <h5 class="text-lg">How does it work?</h5>
            <ul class="list-disc">
              <li>iCognition utilizes AI algorithms to analyze information and present it in a way that is easily understood. It helps users identify the main idea and key points of the information and enables them to interact with the content, ask questions, and get answers.</li>
              <li>It facilitates easy recall of information by creating a searchable and categorized library from every page read, using AI technology.</li>
            </ul>
            <p></p>
          <p class="">
            iCognition assists students and professionals in comprehending information more quickly, staying organized, and making more informed decisions. The application is currently in development.
          </p>
        </div>
      </div>
    </div>
    <div class="xs:col-12 lg:col-6">
      <div class="flex justify-content-center p-2 m-5">
        <img  class="max-w-full h-full" src="@/assets/images/icognition_library_2.png.jpeg" alt="iCognition.ai">
      </div>
    </div>
  </div>   -->
</template>

<style>

.fe-6697e5cc4ae716153c113f30 {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(9,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
}

@media (min-width: 768px) {
  .background-width--inset .fe-6697e5cc4ae716153c113f30 {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-6697e5cc4ae716153c113f30 {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(5,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-a4a6d59e74d727ab0781 {
    grid-area: 1/2/5/10;
    z-index: 0;

    @media (max-width: 767px) {
      
    }
  }

  .fe-block-a4a6d59e74d727ab0781 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-a4a6d59e74d727ab0781 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-a4a6d59e74d727ab0781 {
      grid-area: 1/4/5/13;
      z-index: 0;

      
    }

    .fe-block-a4a6d59e74d727ab0781 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-a4a6d59e74d727ab0781 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-7948b30c6a44353ace23 {
    grid-area: 5/2/10/10;
    z-index: 2;

    @media (max-width: 767px) {
      
    }
  }

  .fe-block-7948b30c6a44353ace23 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-7948b30c6a44353ace23 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-7948b30c6a44353ace23 {
      grid-area: 1/14/6/24;
      z-index: 2;

      
    }

    .fe-block-7948b30c6a44353ace23 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-7948b30c6a44353ace23 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

</style>

<style>

.fe-6696c8c206391b6dfb91b6b9 {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(18,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
}

@media (min-width: 768px) {
  .background-width--inset .fe-6696c8c206391b6dfb91b6b9 {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-6696c8c206391b6dfb91b6b9 {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(9,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-yui_3_17_2_1_1721230615972_4449 {
    grid-area: 2/2/8/10;
    z-index: 4;

    @media (max-width: 767px) {
      
        
      
    }
  }

  .fe-block-yui_3_17_2_1_1721230615972_4449 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-yui_3_17_2_1_1721230615972_4449 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-yui_3_17_2_1_1721230615972_4449 {
      grid-area: 2/4/8/13;
      z-index: 4;

      
        
      
    }

    .fe-block-yui_3_17_2_1_1721230615972_4449 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-yui_3_17_2_1_1721230615972_4449 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-yui_3_17_2_1_1721230615972_6835 {
    grid-area: 8/2/11/10;
    z-index: 5;

    @media (max-width: 767px) {
      
        
      
    }
  }

  .fe-block-yui_3_17_2_1_1721230615972_6835 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-yui_3_17_2_1_1721230615972_6835 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-yui_3_17_2_1_1721230615972_6835 {
      grid-area: 6/4/11/13;
      z-index: 5;

      
        
      
    }

    .fe-block-yui_3_17_2_1_1721230615972_6835 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-yui_3_17_2_1_1721230615972_6835 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-yui_3_17_2_1_1721221134537_7315 {
    grid-area: 11/2/18/10;
    z-index: 3;

    @media (max-width: 767px) {
      
        
      
    }
  }

  .fe-block-yui_3_17_2_1_1721221134537_7315 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-yui_3_17_2_1_1721221134537_7315 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-yui_3_17_2_1_1721221134537_7315 {
      grid-area: 2/14/11/25;
      z-index: 3;

      
        
      
    }

    .fe-block-yui_3_17_2_1_1721221134537_7315 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-yui_3_17_2_1_1721221134537_7315 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

</style>

<style>
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    .header-blur-background {
      -webkit-backdrop-filter: blur(12px);
      backdrop-filter: blur(12px);
    }
  }
</style>
<style>
  .top-bun, 
  .patty, 
  .bottom-bun {
    height: 5px;
  }
</style>

<style>
  .fe-6697f2b956e3c6049e9cae6b {
    --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

    display: grid;
    position: relative;
    grid-area: 1/1/-1/-1;
    grid-template-rows: repeat(3,minmax(24px, auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(8, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
    row-gap: 11.0px;
    column-gap: 11.0px;
  }

  @media (min-width: 768px) {
    .background-width--inset .fe-6697f2b956e3c6049e9cae6b {
      --inset-padding: calc(var(--sqs-site-gutter) * 2);
    }

    .fe-6697f2b956e3c6049e9cae6b {
      --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
      --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
      --inset-padding: 0vw;

      --row-height-scaling-factor: 0.0215;
      --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

      grid-template-rows: repeat(3,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
      grid-template-columns:
        minmax(var(--grid-gutter), 1fr)
        repeat(24, minmax(0, var(--cell-max-width)))
        minmax(var(--grid-gutter), 1fr);
    }
  }

  .fe-block-yui_3_17_2_1_1721230615972_22109 {
    grid-area: 2/2/4/10;
    z-index: 1;

    @media (max-width: 767px) {

    }
  }

  .fe-block-yui_3_17_2_1_1721230615972_22109 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-yui_3_17_2_1_1721230615972_22109 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-yui_3_17_2_1_1721230615972_22109 {
      grid-area: 2/11/3/17;
      z-index: 1;

      
        
      
    }

    .fe-block-yui_3_17_2_1_1721230615972_22109 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-yui_3_17_2_1_1721230615972_22109 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

</style>

<style>
  .fe-6697ccb203aacd1a3ad6f80f {
    --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

    display: grid;
    position: relative;
    grid-area: 1/1/-1/-1;
    grid-template-rows: repeat(8,minmax(24px, auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(8, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
    row-gap: 11.0px;
    column-gap: 11.0px;
  }

  @media (min-width: 768px) {
    .background-width--inset .fe-6697ccb203aacd1a3ad6f80f {
      --inset-padding: calc(var(--sqs-site-gutter) * 2);
    }

    .fe-6697ccb203aacd1a3ad6f80f {
      --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
      --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
      --inset-padding: 0vw;

      --row-height-scaling-factor: 0.0215;
      --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

      grid-template-rows: repeat(4,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
      grid-template-columns:
        minmax(var(--grid-gutter), 1fr)
        repeat(24, minmax(0, var(--cell-max-width)))
        minmax(var(--grid-gutter), 1fr);
    }
  }

  .fe-block-yui_3_17_2_1_1721221134537_28898 {
    grid-area: 2/2/8/10;
    z-index: 1;

    @media (max-width: 767px) {

    }
  }

  .fe-block-yui_3_17_2_1_1721221134537_28898 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-yui_3_17_2_1_1721221134537_28898 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-yui_3_17_2_1_1721221134537_28898 {
      grid-area: 2/4/4/24;
      z-index: 1;
    }

    .fe-block-yui_3_17_2_1_1721221134537_28898 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-yui_3_17_2_1_1721221134537_28898 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

</style>

<style>
  .has-section-divider[data-section-id="6697c8c522272f5ce17e5a14"] {
    padding-bottom: var(--divider-height);
    z-index: var(--z-index);
  }

  .has-section-divider[data-section-id="6697c8c522272f5ce17e5a14"] .background-pause-button {
    bottom: calc(14px + var(--divider-height));
  }

  .has-section-divider[data-section-id="6697c8c522272f5ce17e5a14"] .section-divider-svg-clip {
    display: none;
  }

  .has-section-divider[data-section-id="6697c8c522272f5ce17e5a14"].background-width--inset:not(.content-collection):not(.gallery-section):not(.user-items-list-section) {
    padding-bottom: calc(var(--sqs-site-gutter) + var(--divider-height));
  }

  .has-section-divider[data-section-id="6697c8c522272f5ce17e5a14"].background-width--inset:not(.content-collection):not(.gallery-section):not(.user-items-list-section) .section-background {
    bottom: calc(var(--sqs-site-gutter) + var(--divider-height));
  }

  .has-section-divider[data-section-id="6697c8c522272f5ce17e5a14"] .section-divider-block {
    height: var(--divider-height);
  }
</style>

<style data-section-divider-style="">
  [data-section-id="6697c8c522272f5ce17e5a14"] { 
    --divider-height: 0px; 
    --z-index: 3;
  }

  [data-section-id="6697ccb22cf289348166d708"] {
    --previous-section-divider-offset: 0px;
  }
</style>

<style>
  .user-items-list-item-container[data-section-id="6697c8c522272f5ce17e5a14"] .list-item-content__title {
    font-size: 1.6rem;
  }
  .user-items-list-item-container[data-section-id="6697c8c522272f5ce17e5a14"] .list-item-content__description {
    font-size: 1rem;
  }
  .user-items-list-item-container[data-section-id="6697c8c522272f5ce17e5a14"] .list-item-content__button {
    font-size: 0.9rem;
  }

  @supports (--test-custom-property: true) {
    .user-items-list-item-container[data-section-id="6697c8c522272f5ce17e5a14"] {
      --title-font-size-value: 1.6;
      --body-font-size-value: 1;
      --button-font-size-value: 0.9;
    }
  }
</style>

<style>
  .fe-6696b4200fbc563f128940d0 {
    --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

    display: grid;
    position: relative;
    grid-area: 1/1/-1/-1;
    grid-template-rows: repeat(3,minmax(24px, auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(8, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
    row-gap: 11.0px;
    column-gap: 11.0px;
  }

  @media (min-width: 768px) {
    .background-width--inset .fe-6696b4200fbc563f128940d0 {
      --inset-padding: calc(var(--sqs-site-gutter) * 2);
    }

    .fe-6696b4200fbc563f128940d0 {
      --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
      --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
      --inset-padding: 0vw;

      --row-height-scaling-factor: 0.0215;
      --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

      grid-template-rows: repeat(3,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
      grid-template-columns:
        minmax(var(--grid-gutter), 1fr)
        repeat(24, minmax(0, var(--cell-max-width)))
        minmax(var(--grid-gutter), 1fr);
    }
  }


  .fe-block-yui_3_17_2_1_1721221134537_13704 {
    grid-area: 2/2/4/10;
    z-index: 5;

    @media (max-width: 767px) {
      
        
      
    }
  }

  .fe-block-yui_3_17_2_1_1721221134537_13704 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-yui_3_17_2_1_1721221134537_13704 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-yui_3_17_2_1_1721221134537_13704 {
      grid-area: 2/5/4/23;
      z-index: 5;
    }

    .fe-block-yui_3_17_2_1_1721221134537_13704 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-yui_3_17_2_1_1721221134537_13704 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

</style>

<style>
  .has-section-divider[data-section-id="6697e5cc4ae716153c113f31"] {
    padding-bottom: var(--divider-height);
    z-index: var(--z-index);
  }

  .has-section-divider[data-section-id="6697e5cc4ae716153c113f31"] .background-pause-button {
    bottom: calc(14px + var(--divider-height));
  }

  .has-section-divider[data-section-id="6697e5cc4ae716153c113f31"] .section-divider-svg-clip {
    display: none;
  }

  .has-section-divider[data-section-id="6697e5cc4ae716153c113f31"].background-width--inset:not(.content-collection):not(.gallery-section):not(.user-items-list-section) {
    padding-bottom: calc(var(--sqs-site-gutter) + var(--divider-height));
  }

  .has-section-divider[data-section-id="6697e5cc4ae716153c113f31"].background-width--inset:not(.content-collection):not(.gallery-section):not(.user-items-list-section) .section-background {
    bottom: calc(var(--sqs-site-gutter) + var(--divider-height));
  }

  .has-section-divider[data-section-id="6697e5cc4ae716153c113f31"] .section-divider-block {
    height: var(--divider-height);
  }
</style>
  
<style data-section-divider-style="">
  [data-section-id="6697e5cc4ae716153c113f31"] { 
    --divider-height: 0px; 
    --z-index: 5;
  }

  [data-section-id="6696b4200fbc563f128940d1"] {
    --previous-section-divider-offset: 0px;
  }
</style>

<style>
  .top-bun, 
  .patty, 
  .bottom-bun {
    height: 5px;
  }
</style>


<!-- <script type="text/javascript" async="" charset="utf-8" src="https://www.gstatic.com/recaptcha/releases/rKbTvxTxwcw5VqzrtN-ICwWt/recaptcha__en.js" crossorigin="anonymous" integrity="sha384-1qCnjZ4tqdtwUnG8/biz1OfJ7vkM3jnPZ0W0wIcDu+NDwZyQHqHpscJVB8ezdlTM"></script> -->
<!-- <script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/extract-css-runtime-0bf461f6eb21bfb32439-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-extract_css_runtime');</script>
<script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/extract-css-runtime-0bf461f6eb21bfb32439-min.en-US.js" defer=""></script>
<script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/extract-css-moment-js-vendor-6f117db4eb7fd4392375-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-extract_css_moment_js_vendor');</script>
<script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/extract-css-moment-js-vendor-6f117db4eb7fd4392375-min.en-US.js" defer="">
</script><script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/cldr-resource-pack-15305921bb94c505cd92-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-cldr_resource_pack');</script>
<script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/cldr-resource-pack-15305921bb94c505cd92-min.en-US.js" defer=""></script>
<script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/common-vendors-stable-0f51b06fac4ba1f7c845-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-common_vendors_stable');</script>
<script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/common-vendors-stable-0f51b06fac4ba1f7c845-min.en-US.js" defer=""></script>
<script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/common-vendors-fa44ea4258bc102e15e6-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-common_vendors');</script>
<script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/common-vendors-fa44ea4258bc102e15e6-min.en-US.js" defer=""></script>
<script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/common-7eeaf0d114c6eedbda30-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-common');</script>
<script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/common-7eeaf0d114c6eedbda30-min.en-US.js" defer=""></script>
<script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//assets.squarespace.com/universal/scripts-compressed/user-account-core-ab6f2e960ac7d010803d-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-user_account_core');</script>
<script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/user-account-core-ab6f2e960ac7d010803d-min.en-US.js" defer=""></script>
<script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].css = ["//assets.squarespace.com/universal/styles-compressed/user-account-core-e84acd73aa5ee3fcd4ad-min.en-US.css"]; })(SQUARESPACE_ROLLUPS, 'squarespace-user_account_core');</script>
<script crossorigin="anonymous" src="//assets.squarespace.com/universal/scripts-compressed/performance-7c5a1be54b087e14e57b-min.en-US.js" defer=""></script>
<script data-name="static-context">Static = window.Static || {}; Static.SQUARESPACE_CONTEXT = {"betaFeatureFlags":["crm_product_contacts_use_mfe","commerce_etsy_product_import","nested_categories","hideable_header_footer","toggle_preview_new_shortcut","i18n_beta_website_locales","supports_versioned_template_assets","hideable_header_footer_for_courses","customer_accounts_email_verification","crm_redesign_phase_1","pdp_description_add_to_cart_tweaks","hideable_header_footer_for_memberareas","commerce_subscription_renewal_notifications","visitor_react_forms","marketing_landing_page","member_areas_feature","scripts_defer","accounting_orders_sync","hideable_header_footer_for_videos","campaigns_import_discounts","rewrite_transactional_email_from_address","override_block_styles","commerce_etsy_shipping_import","enable_css_variable_tweaks","is_feature_gate_refresh_enabled","new_stacked_index","commerce_paywall_renewal_notifications","gdpr_cookie_banner","collection_typename_switching","campaigns_discount_section_in_automations","emit_donation_events_to_census","campaigns_thumbnail_layout","pages_panel_v3_search_bar","campaigns_new_image_layout_picker","campaigns_discount_section_in_blasts","background_art_onboarding","hide_header_footer_beta","pdp_subs_otp_visitor_site","pdp_subs_otp_buttons","donations_refresh","themes","fluid_engine","donations_refresh_in_circle_labs","nested_categories_migration_enabled","commerce_order_status_access","unify_edit_mode_p2","commerce_site_visitor_metrics","commerce_clearpay","fluid_engine_clean_up_grid_contextual_change","campaigns_global_uc_ab","customer_account_creation_recaptcha","send_local_pickup_ready_email"],"videoAssetsFeatureFlags":["mux-data-video-collection","mux-data-course-collection"],"facebookAppId":"314192535267336","facebookApiVersion":"v6.0","rollups":{"squarespace-announcement-bar":{"js":"//assets.squarespace.com/universal/scripts-compressed/announcement-bar-3312060c9a7329a8fa7d-min.en-US.js"},"squarespace-audio-player":{"css":"//assets.squarespace.com/universal/styles-compressed/audio-player-9fb16b1675c0ff315dae-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/audio-player-859c0e1608740f52232b-min.en-US.js"},"squarespace-blog-collection-list":{"css":"//assets.squarespace.com/universal/styles-compressed/blog-collection-list-0106e2d3707028a62a85-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/blog-collection-list-f179daf3c110a4b83377-min.en-US.js"},"squarespace-calendar-block-renderer":{"css":"//assets.squarespace.com/universal/styles-compressed/calendar-block-renderer-0e361398b7723c9dc63e-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/calendar-block-renderer-09aee617730e2e34aac4-min.en-US.js"},"squarespace-chartjs-helpers":{"css":"//assets.squarespace.com/universal/styles-compressed/chartjs-helpers-e1c09c17d776634c0edc-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/chartjs-helpers-165a5004bc0d6bfa2b43-min.en-US.js"},"squarespace-comments":{"css":"//assets.squarespace.com/universal/styles-compressed/comments-24b74a0326eae0cd5049-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/comments-02cc3212a83991669e33-min.en-US.js"},"squarespace-custom-css-popup":{"css":"//assets.squarespace.com/universal/styles-compressed/custom-css-popup-75139f89deb816b1fc85-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/custom-css-popup-11837ce6f1cba5fb367a-min.en-US.js"},"squarespace-dialog":{"css":"//assets.squarespace.com/universal/styles-compressed/dialog-9d700c234a9adaf513f4-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/dialog-9ca4cbc2f36f41d7190f-min.en-US.js"},"squarespace-events-collection":{"css":"//assets.squarespace.com/universal/styles-compressed/events-collection-0e361398b7723c9dc63e-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/events-collection-ee772bc5b95710a4eed2-min.en-US.js"},"squarespace-form-rendering-utils":{"js":"//assets.squarespace.com/universal/scripts-compressed/form-rendering-utils-8fb37fb1e3ddbf992355-min.en-US.js"},"squarespace-forms":{"css":"//assets.squarespace.com/universal/styles-compressed/forms-8d93ba2c12ff0765b64c-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/forms-2bade91a1c7bd6eeba7b-min.en-US.js"},"squarespace-gallery-collection-list":{"css":"//assets.squarespace.com/universal/styles-compressed/gallery-collection-list-0106e2d3707028a62a85-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/gallery-collection-list-98da2f72755541dab245-min.en-US.js"},"squarespace-image-zoom":{"css":"//assets.squarespace.com/universal/styles-compressed/image-zoom-0106e2d3707028a62a85-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/image-zoom-80da18540c2c91f06baf-min.en-US.js"},"squarespace-pinterest":{"css":"//assets.squarespace.com/universal/styles-compressed/pinterest-0106e2d3707028a62a85-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/pinterest-053e7fcc184e9d7813fb-min.en-US.js"},"squarespace-popup-overlay":{"css":"//assets.squarespace.com/universal/styles-compressed/popup-overlay-b2bf7df4402e207cd72c-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/popup-overlay-9e54cfcf65093ec15eb2-min.en-US.js"},"squarespace-product-quick-view":{"css":"//assets.squarespace.com/universal/styles-compressed/product-quick-view-4aec27f1bd826750e9db-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/product-quick-view-6d6978ce76bbb5e8c6d3-min.en-US.js"},"squarespace-products-collection-item-v2":{"css":"//assets.squarespace.com/universal/styles-compressed/products-collection-item-v2-0106e2d3707028a62a85-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/products-collection-item-v2-d76e0cec0cbd95d2fdfd-min.en-US.js"},"squarespace-products-collection-list-v2":{"css":"//assets.squarespace.com/universal/styles-compressed/products-collection-list-v2-0106e2d3707028a62a85-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/products-collection-list-v2-be13450cfd6ff4aa937e-min.en-US.js"},"squarespace-search-page":{"css":"//assets.squarespace.com/universal/styles-compressed/search-page-dcc0462e30efbd6dc562-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/search-page-e88b3ccde3acb03d18d7-min.en-US.js"},"squarespace-search-preview":{"js":"//assets.squarespace.com/universal/scripts-compressed/search-preview-e25902e3ef89d4ffdf93-min.en-US.js"},"squarespace-simple-liking":{"css":"//assets.squarespace.com/universal/styles-compressed/simple-liking-a9eb87c1b73b199ce387-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/simple-liking-3c5936ee7186988153f2-min.en-US.js"},"squarespace-social-buttons":{"css":"//assets.squarespace.com/universal/styles-compressed/social-buttons-98ee3a678d356d849b76-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/social-buttons-f85bf6ec5d258419a9ea-min.en-US.js"},"squarespace-tourdates":{"css":"//assets.squarespace.com/universal/styles-compressed/tourdates-0106e2d3707028a62a85-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/tourdates-684107e68736b0d605a4-min.en-US.js"},"squarespace-website-overlays-manager":{"css":"//assets.squarespace.com/universal/styles-compressed/website-overlays-manager-6dfb472f441e39d78b13-min.en-US.css","js":"//assets.squarespace.com/universal/scripts-compressed/website-overlays-manager-e9d85b6c4126cab02c16-min.en-US.js"}},"pageType":2,"website":{"id":"6696b4180e291a237c3082c8","identifier":"poodle-cyan-5kje","websiteType":1,"contentModifiedOn":1721222297403,"cloneable":false,"hasBeenCloneable":false,"siteStatus":{},"language":"en-US","timeZone":"America/New_York","machineTimeZoneOffset":-14400000,"timeZoneOffset":-14400000,"timeZoneAbbr":"EDT","siteTitle":"iCognition.ai","fullSiteTitle":"iCognition.ai","siteDescription":"","logoImageId":"6696b4ea7b470720952f2fa9","shareButtonOptions":{"3":true,"8":true,"1":true,"2":true,"4":true,"6":true,"7":true},"logoImageUrl":"//images.squarespace-cdn.com/content/v1/6696b4180e291a237c3082c8/140fc9c9-444d-4e99-8227-4c638618bced/iCognitionLogo.png","authenticUrl":"https://icognition.ai","internalUrl":"https://poodle-cyan-5kje.squarespace.com","baseUrl":"https://icognition.ai","primaryDomain":"icognition.ai","sslSetting":3,"isHstsEnabled":true,"socialAccounts":[{"serviceId":64,"addedOn":1721152536920,"profileUrl":"https://www.instagram.com/squarespace/","iconEnabled":true,"serviceName":"instagram-unauth"},{"serviceId":85,"addedOn":1721152536923,"profileUrl":"https://x.com/squarespace","iconEnabled":true,"serviceName":"x-formerly-twitter-unauth"},{"serviceId":60,"addedOn":1721152537099,"profileUrl":"https://www.facebook.com/squarespace/","iconEnabled":true,"serviceName":"facebook-unauth"}],"typekitId":"","statsMigrated":false,"imageMetadataProcessingEnabled":false,"screenshotId":"e9d9df3050eeaf53c53b0f9e796717bb7c89306ae6d2e2032ffcd5306fa8dfb5","captchaSettings":{"enabledForDonations":false},"showOwnerLogin":false},"websiteSettings":{"id":"6696b4180e291a237c3082cc","websiteId":"6696b4180e291a237c3082c8","subjects":[],"country":"US","state":"MA","simpleLikingEnabled":true,"mobileInfoBarSettings":{"isContactEmailEnabled":false,"isContactPhoneNumberEnabled":false,"isLocationEnabled":false,"isBusinessHoursEnabled":false},"commentLikesAllowed":true,"commentAnonAllowed":true,"commentThreaded":true,"commentApprovalRequired":false,"commentAvatarsOn":true,"commentSortType":2,"commentFlagThreshold":0,"commentFlagsAllowed":true,"commentEnableByDefault":true,"commentDisableAfterDaysDefault":0,"disqusShortname":"","commentsEnabled":false,"storeSettings":{"returnPolicy":null,"termsOfService":null,"privacyPolicy":null,"expressCheckout":false,"continueShoppingLinkUrl":"/","useLightCart":false,"showNoteField":false,"shippingCountryDefaultValue":"US","billToShippingDefaultValue":false,"showShippingPhoneNumber":true,"isShippingPhoneRequired":false,"showBillingPhoneNumber":true,"isBillingPhoneRequired":false,"currenciesSupported":["USD","CAD","GBP","AUD","EUR","CHF","NOK","SEK","DKK","NZD","SGD","MXN","HKD","CZK","ILS","MYR","RUB","PHP","PLN","THB","BRL","ARS","COP","IDR","INR","JPY","ZAR"],"defaultCurrency":"USD","selectedCurrency":"USD","measurementStandard":1,"showCustomCheckoutForm":false,"checkoutPageMarketingOptInEnabled":true,"enableMailingListOptInByDefault":false,"sameAsRetailLocation":false,"merchandisingSettings":{"scarcityEnabledOnProductItems":false,"scarcityEnabledOnProductBlocks":false,"scarcityMessageType":"DEFAULT_SCARCITY_MESSAGE","scarcityThreshold":10,"multipleQuantityAllowedForServices":true,"restockNotificationsEnabled":false,"restockNotificationsSuccessText":"","restockNotificationsMailingListSignUpEnabled":false,"relatedProductsEnabled":false,"relatedProductsOrdering":"random","soldOutVariantsDropdownDisabled":false,"productComposerOptedIn":false,"productComposerABTestOptedOut":false,"productReviewsEnabled":false},"minimumOrderSubtotalEnabled":false,"minimumOrderSubtotal":{"currency":"USD","value":"0.00"},"isLive":false,"multipleQuantityAllowedForServices":true},"useEscapeKeyToLogin":false,"ssBadgeType":1,"ssBadgePosition":4,"ssBadgeVisibility":1,"ssBadgeDevices":1,"pinterestOverlayOptions":{"mode":"disabled"},"ampEnabled":false,"userAccountsSettings":{"loginAllowed":true,"signupAllowed":true}},"cookieSettings":{"isCookieBannerEnabled":false,"isRestrictiveCookiePolicyEnabled":false,"isRestrictiveCookiePolicyAbsolute":false,"cookieBannerText":"","cookieBannerTheme":"","cookieBannerVariant":"","cookieBannerPosition":"","cookieBannerCtaVariant":"","cookieBannerCtaText":"","cookieBannerAcceptType":"OPT_IN","cookieBannerOptOutCtaText":"","cookieBannerHasOptOut":false,"cookieBannerHasManageCookies":true,"cookieBannerManageCookiesLabel":"","cookieBannerSavedPreferencesText":"","cookieBannerSavedPreferencesLayout":"PILL"},"websiteCloneable":false,"collection":{"title":"Home","id":"6696b4200fbc563f12894074","fullUrl":"/","type":10,"permissionType":1},"subscribed":false,"appDomain":"squarespace.com","templateTweakable":true,"tweakJSON":{"form-use-theme-colors":"true","header-logo-height":"58px","header-mobile-logo-max-height":"50px","header-vert-padding":"1vw","header-width":"Inset","maxPageWidth":"1400px","pagePadding":"4vw","tweak-blog-alternating-side-by-side-image-aspect-ratio":"1:1 Square","tweak-blog-alternating-side-by-side-image-spacing":"6%","tweak-blog-alternating-side-by-side-meta-spacing":"20px","tweak-blog-alternating-side-by-side-primary-meta":"Categories","tweak-blog-alternating-side-by-side-read-more-spacing":"20px","tweak-blog-alternating-side-by-side-secondary-meta":"Date","tweak-blog-basic-grid-columns":"3","tweak-blog-basic-grid-image-aspect-ratio":"3:2 Standard","tweak-blog-basic-grid-image-spacing":"35px","tweak-blog-basic-grid-meta-spacing":"25px","tweak-blog-basic-grid-primary-meta":"Categories","tweak-blog-basic-grid-read-more-spacing":"20px","tweak-blog-basic-grid-secondary-meta":"Date","tweak-blog-item-custom-width":"50","tweak-blog-item-show-author-profile":"false","tweak-blog-item-width":"Medium","tweak-blog-masonry-columns":"2","tweak-blog-masonry-horizontal-spacing":"30px","tweak-blog-masonry-image-spacing":"20px","tweak-blog-masonry-meta-spacing":"20px","tweak-blog-masonry-primary-meta":"Categories","tweak-blog-masonry-read-more-spacing":"20px","tweak-blog-masonry-secondary-meta":"Date","tweak-blog-masonry-vertical-spacing":"30px","tweak-blog-side-by-side-image-aspect-ratio":"1:1 Square","tweak-blog-side-by-side-image-spacing":"6%","tweak-blog-side-by-side-meta-spacing":"20px","tweak-blog-side-by-side-primary-meta":"Categories","tweak-blog-side-by-side-read-more-spacing":"20px","tweak-blog-side-by-side-secondary-meta":"Date","tweak-blog-single-column-image-spacing":"50px","tweak-blog-single-column-meta-spacing":"30px","tweak-blog-single-column-primary-meta":"Categories","tweak-blog-single-column-read-more-spacing":"15px","tweak-blog-single-column-secondary-meta":"Date","tweak-events-stacked-show-thumbnails":"true","tweak-events-stacked-thumbnail-size":"3:2 Standard","tweak-fixed-header":"true","tweak-fixed-header-style":"Scroll Back","tweak-global-animations-animation-curve":"ease","tweak-global-animations-animation-delay":"0.1s","tweak-global-animations-animation-duration":"0.1s","tweak-global-animations-animation-style":"fade","tweak-global-animations-animation-type":"none","tweak-global-animations-complexity-level":"detailed","tweak-global-animations-enabled":"false","tweak-portfolio-grid-basic-custom-height":"50","tweak-portfolio-grid-overlay-custom-height":"50","tweak-portfolio-hover-follow-acceleration":"10%","tweak-portfolio-hover-follow-animation-duration":"Fast","tweak-portfolio-hover-follow-animation-type":"Fade","tweak-portfolio-hover-follow-delimiter":"Bullet","tweak-portfolio-hover-follow-front":"false","tweak-portfolio-hover-follow-layout":"Inline","tweak-portfolio-hover-follow-size":"50","tweak-portfolio-hover-follow-text-spacing-x":"1.5","tweak-portfolio-hover-follow-text-spacing-y":"1.5","tweak-portfolio-hover-static-animation-duration":"Fast","tweak-portfolio-hover-static-animation-type":"Fade","tweak-portfolio-hover-static-delimiter":"Hyphen","tweak-portfolio-hover-static-front":"true","tweak-portfolio-hover-static-layout":"Inline","tweak-portfolio-hover-static-size":"50","tweak-portfolio-hover-static-text-spacing-x":"1.5","tweak-portfolio-hover-static-text-spacing-y":"1.5","tweak-portfolio-index-background-animation-duration":"Medium","tweak-portfolio-index-background-animation-type":"Fade","tweak-portfolio-index-background-custom-height":"50","tweak-portfolio-index-background-delimiter":"None","tweak-portfolio-index-background-height":"Large","tweak-portfolio-index-background-horizontal-alignment":"Center","tweak-portfolio-index-background-link-format":"Stacked","tweak-portfolio-index-background-persist":"false","tweak-portfolio-index-background-vertical-alignment":"Middle","tweak-portfolio-index-background-width":"Full","tweak-product-basic-item-click-action":"None","tweak-product-basic-item-gallery-aspect-ratio":"3:4 Three-Four (Vertical)","tweak-product-basic-item-gallery-design":"Slideshow","tweak-product-basic-item-gallery-width":"50%","tweak-product-basic-item-hover-action":"None","tweak-product-basic-item-image-spacing":"2vw","tweak-product-basic-item-image-zoom-factor":"2","tweak-product-basic-item-product-variant-display":"Dropdown","tweak-product-basic-item-thumbnail-placement":"Side","tweak-product-basic-item-variant-picker-layout":"Dropdowns","tweak-products-add-to-cart-button":"false","tweak-products-columns":"2","tweak-products-gutter-column":"2vw","tweak-products-gutter-row":"5vw","tweak-products-header-text-alignment":"Middle","tweak-products-image-aspect-ratio":"1:1 Square","tweak-products-image-text-spacing":"1.5vw","tweak-products-mobile-columns":"1","tweak-products-text-alignment":"Left","tweak-products-width":"Full","tweak-transparent-header":"false"},"templateId":"5c5a519771c10ba3470d8101","templateVersion":"7.1","pageFeatures":[1,2,4],"gmRenderKey":"QUl6YVN5Q0JUUk9xNkx1dkZfSUUxcjQ2LVQ0QWVUU1YtMGQ3bXk4","templateScriptsRootUrl":"https://static1.squarespace.com/static/vta/5c5a519771c10ba3470d8101/scripts/","impersonatedSession":false,"demoCollections":[{"collectionId":"6581fd2e9a7c875e912e097f","deleted":true},{"collectionId":"6581fd2f9a7c875e912e0b3f","deleted":true},{"collectionId":"6581fd2f9a7c875e912e0b9d","deleted":true},{"collectionId":"6581fd2f9a7c875e912e0c06","deleted":true},{"collectionId":"6581fd2f9a7c875e912e0c17","deleted":true},{"collectionId":"6583607550ab220f893cb072","deleted":true},{"collectionId":"6584646636a22e1f5b865b5f","deleted":true}],"tzData":{"zones":[[-300,"US","E%sT",null]],"rules":{"US":[[1967,2006,null,"Oct","lastSun","2:00","0","S"],[1987,2006,null,"Apr","Sun>=1","2:00","1:00","D"],[2007,"max",null,"Mar","Sun>=8","2:00","1:00","D"],[2007,"max",null,"Nov","Sun>=1","2:00","0","S"]]}},"showAnnouncementBar":false,"recaptchaEnterpriseContext":{"recaptchaEnterpriseSiteKey":"6LdDFQwjAAAAAPigEvvPgEVbb7QBm-TkVJdDTlAv"},"i18nContext":{"timeZoneData":{"id":"America/New_York","name":"Eastern Time"}},"env":"PRODUCTION"};</script>
<script type="application/ld+json">{"url":"https://icognition.ai","name":"iCognition.ai","description":"","image":"//images.squarespace-cdn.com/content/v1/6696b4180e291a237c3082c8/140fc9c9-444d-4e99-8227-4c638618bced/iCognitionLogo.png","@context":"http://schema.org","@type":"WebSite"}</script>
<link rel="stylesheet" type="text/css" href="https://static1.squarespace.com/static/versioned-site-css/6696b4180e291a237c3082c8/18/5c5a519771c10ba3470d8101/6696b4180e291a237c3082d2/1543/site.css">
<script>Static.COOKIE_BANNER_CAPABLE = true;</script> -->
<!-- End of Squarespace Headers -->

<script type="text/javascript">
  const firstSection = document.querySelector('.page-section');
  const header = document.querySelector('.header');
  const mobileOverlayNav = document.querySelector('.header-menu');
  const sectionBackground = firstSection ? firstSection.querySelector('.section-background') : null;
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  const firstSectionHasBackground = firstSection ? firstSection.className.indexOf('has-background') >= 0 : false;
  const isFirstSectionInset = firstSection ? firstSection.className.indexOf('background-width--inset') >= 0 : false;
  const isLayoutEngineSection = firstSection ? firstSection.className.indexOf('layout-engine-section') >= 0 : false;

  if (firstSection) {
    firstSection.style.paddingTop = headerHeight + 'px';
  }
  if (sectionBackground && isLayoutEngineSection) {
    if (isFirstSectionInset) {
      sectionBackground.style.top = headerHeight + 'px';
    } else {
      sectionBackground.style.top = '';
    }
  }

  const handleSendClick = async () => {
    try {
        console.log('Logout successful')
    } catch (error) {
        console.log(error.value)
    }
}
  //# sourceURL=headerPositioning.js
</script>
