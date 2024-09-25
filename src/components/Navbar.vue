<template>
    <header
        data-test="header"
        id="header"
        class="header w-full bg-white shadow-5 overflow-hidden sticky top-0"
        style="z-index: 500;"
        tabindex="-1">
        <div class="grid">
            <a href="#page" class="hidden">
                Skip to Content
            </a>
            <!-- Background -->
            <div class="flex col-12 pb-0">
                <!-- Title and nav wrapper -->
                <div class="col-2 md:col-4">
                    <div class="header-title app-header-title mt-2" data-animation-role="header-element">
                        <div class="header-title-logo">
                            <a href="/" data-animation-role="header-element">
                                <img
                                src="/src/assets/images/iCognitionLogo.png?format=1500w"
                                alt="iCognition.ai">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-8 md:col-4 text-center">
                    <!-- Title -->
                    <div class="header-title website-header-title" data-animation-role="header-element">
                        <div class="header-title-logo md:pt-3 xs:pt-3">
                            <a href="/" data-animation-role="header-element">
                                <img
                                src="/src/assets/images/iCognitionLogo.png?format=1500w"
                                alt="iCognition.ai">
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Actions -->
                <div class="col-2 md:col-4 md:flex pr-3 align-items-center justify-content-end">
                    <div class="hidden md:flex website-login-logout">
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
                    </div>
                    <div class="card pl-2 py-4 justify-center md:hidden webite-login-menu">
                        <Button type="button" icon="pi pi-bars" @click="toggleWebsiteMenu" aria-haspopup="true" aria-controls="overlay_menu" />
                        <Menu ref="menu_website" id="overlay_menu" :model="website_menu_items" :popup="true" />
                    </div>
                    <div class="card px-4 py-2 app-profile">
                        <Button icon="pi pi-user" severity="info" @click="toggleAppMenu" rounded aria-haspopup="true" aria-controls="overlay_menu" aria-label="User"/>
                        <Menu ref="menu_app" id="overlay_menu" :model="app_menu_items" :popup="true" />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script lang="ts" setup>
import useLogout from '@/composables/useLogout';
import useSignin from '@/composables/useLogin';
import user_state from '@/composables/getUser';
import Route_Location from '@/components/models/RouteLocation.vue';
import { useRouter } from 'vue-router';
import { onBeforeMount, ref } from 'vue'; 
import { auth } from '@/firebase/config'

const { error, logout } = useLogout()
const { login_error, login, isPending, loginGoogle } = useSignin()
let isError = false;
const menu_app = ref();
const menu_website = ref();
let route_location = Route_Location.HOME as string;
const router = useRouter();


onBeforeMount(async() => {
    try {
        route_location = router.currentRoute.value.name as string;
    } catch (err) {
        isError = true;
        console.log("Error: ", err);
    }
})

const toggleAppMenu = (event) => {
    menu_app.value.toggle(event);
};

const toggleWebsiteMenu = (event) => {
    menu_website.value.toggle(event);
};

// Check if user is logged in. If so, redirect to library page
// I ended up using this listener in Navbar because I wasn't able to redirect after login because of race condition. 
// The router guard always executed before the user was fully logged in.
auth.onAuthStateChanged((_user) => {
    if (user_state.user) {
        console.log('User is logged in. Current user is: ', user_state.user)
        console.log(route_location);
        if (route_location == Route_Location.DOCUMENTS || route_location == Route_Location.PROJECTS) {
            router.push({ name: route_location });
        } else if (route_location == Route_Location.HOME || route_location == undefined) {
            router.push('documents');
        }
    }
});


const handleLogout = async () => {
    try {
        await logout().then(() => {
            router.push('/');
        }).catch(error => {
            console.log(error.value);
        });
    } catch (error) {
        console.log(error.value);
    }
}

const handleGoogleLogin = async () => {
    try {
        await loginGoogle().then(() => {
            console.log('Login successful using Google: ', user_state.user);
        }).catch(error => {
            console.log(error);
        });
    } catch (error) {
        console.log('Login failed using Google: ', user_state.user);
    }
}

const handleAccount = async () => {
    
}

const handleNotifications = async () => {
    
}

const app_menu_items = ref([
    // {
    //     label: ' Notifications',
    //     icon: 'pi pi-envelope',
    //     badge: 2,
    //     command: () => {
    //         handleNotifications();
    //     }
    // },
    // {
    //     label: ' Account',
    //     icon: 'pi pi-cog',
    //     command: () => {
    //         handleAccount();
    //     }
    // },
    {
        label: ' Sign Out',
        icon: 'pi pi-sign-out',
        command: () => {
            handleLogout();
        }
    }
]);

let website_menu_items = ref([
    {
        label: ' Login with Google',
        icon: 'pi pi-google',
        command: () => {
            handleGoogleLogin();
        }
    }
]);

router.afterEach((to, from) => {
    if (to.name == undefined || to.name == 'home') {
        route_location = Route_Location.HOME;
        document.body.classList.remove('route-app');
        document.body.classList.add('route-website');
    } else {
        switch (to.name) {
            case 'projects':
                route_location = Route_Location.PROJECTS;
                break;
            case 'documents':
                route_location = Route_Location.DOCUMENTS;
                break;
            default:
                route_location = Route_Location.APP;
        }
        document.body.classList.remove('route-website');
        document.body.classList.add('route-app');
    }
});
</script>