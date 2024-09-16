<script lang="ts">
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useUserStore = defineStore('user', () => {
    const user = ref(new UserInfo(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null));

    return { user }
})

class UserInfo {
    accessToken: string | null;
    auth: Object | null;
    displayName: string | null;
    email: string | null;
    emailVerified: boolean | null;
    isAnonymous: boolean | null;
    metadata: Object | null;
    phoneNumber: string | null;
    photoURL: string | null;
    proactiveRefresh: Object | null;
    providerData: Array<Object> | null;
    providerId: string | null;
    refreshToken: string | null;
    reloadListerner: null;
    reloadUserInfo: Object | null;
    stsTokenManager: Object | null;
    tenantId: null;
    uid: string | null;

    constructor(
        accessToken: string | null,
        auth: Object | null,
        displayName: string | null,
        email: string | null,
        emailVerified: boolean | null,
        isAnonymous: boolean | null,
        metadata: Object | null,
        phoneNumber: string | null,
        photoURL: string | null,
        proactiveRefresh: Object | null,
        providerData: Array<Object> | null,
        providerId: string | null,
        refreshToken: string | null,
        reloadListerner: null,
        reloadUserInfo: Object | null,
        stsTokenManager: Object | null,
        tenantId: null,
        uid: string | null
    ) {
        this.accessToken = accessToken;
        this.auth = auth;
        this.displayName = displayName;
        this.email = email;
        this.emailVerified = emailVerified;
        this.isAnonymous = isAnonymous;
        this.metadata = metadata;
        this.phoneNumber = phoneNumber;
        this.photoURL = photoURL;
        this.proactiveRefresh = proactiveRefresh;
        this.providerData = providerData;
        this.providerId = providerId;
        this.refreshToken = refreshToken;
        this.reloadListerner = reloadListerner;
        this.reloadUserInfo = reloadUserInfo;
        this.stsTokenManager = stsTokenManager;
        this.tenantId = tenantId;
        this.uid = uid;
    }
}

export default useUserStore
</script>