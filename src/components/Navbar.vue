<template>
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
        data-section-id="header"
        data-header-style="solid"
        data-first-focusable-element=""
        tabindex="-1"
        style="--solidHeaderNavigationColor: hsla(var(--darkAccent-hsl), 1);"
        data-controllers-bound="Header">
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
                    <div v-if="user_state.user" class="text-right">
                        <button type="button" class="login-with-google-btn mr-2" @click="handleLogout">
                            Logout
                        </button>
                    </div>
                    <div v-else class="text-right">
                        <button type="button" class="login-with-google-btn mr-2" @click="handleGoogleLogin">
                            Sign in with Google
                        </button>
                    </div>
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
</template>
<script setup>
import useLogout from '@/composables/useLogout';
import useSignin from '@/composables/useLogin';
import user_state from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { ref } from 'vue'; 
import { auth } from '@/firebase/config'


const { error, logout } = useLogout()
const { login_error, login, isPending, loginGoogle } = useSignin()
const router = useRouter()


// Check if user is logged in. If so, redirect to library page
// I ended up using this listener in Navbar because I wasn't able to redirect after login because of race condition. 
// The router guard always executed before the user was fully logged in.
auth.onAuthStateChanged((_user) => {
    if (user_state.user) {
        console.log('User is logged in. Current user is: ', user_state.user)
    }
})


const handleLogout = async () => {
    try {
        await logout()
        console.log('Logout successful')
        router.push({ name: 'home' })
    } catch (error) {
        console.log(error.value)
    }
}

const handleGoogleLogin = async () => {
    const log_res = await loginGoogle()

    console.log('Login response: ', log_res)
    console.log('Login successful using Google: ', user_state.user)    
    if((log_res === 'success') && user_state.user) {
        console.log('Login successful using Google: ', user_state.user)
        router.push({ name: 'library' })
        console.log('logged in');
    } else {
        console.log('Login failed using Google: ', user_state.user)
    }
    
}

</script>