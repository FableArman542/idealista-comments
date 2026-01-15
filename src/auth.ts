import { auth, signInWithCredential, GoogleAuthProvider, onAuthStateChanged } from './firebase';

const authBtn = document.getElementById('auth-btn');
const errorMsg = document.getElementById('error-msg');
const loginSection = document.getElementById('login-section');
const successSection = document.getElementById('success-section');
const debugInfo = document.getElementById('debug-info');
const extIdSpan = document.getElementById('ext-id');
const redirectUriSpan = document.getElementById('redirect-uri');

// Show debug info
if (debugInfo && extIdSpan && redirectUriSpan) {
    debugInfo.style.display = 'block';
    const extId = chrome.runtime.id;
    extIdSpan.textContent = extId;
    redirectUriSpan.textContent = `https://${extId}.chromiumapp.org/`;
}

// Check initial state
onAuthStateChanged(auth, (user) => {
    if (user) {
        showSuccess();
    }
});

if (authBtn) {
    authBtn.addEventListener('click', async () => {
        try {
            if (errorMsg) errorMsg.style.display = 'none';
            if (authBtn) authBtn.innerText = "Signing in...";
            if (authBtn) (authBtn as HTMLButtonElement).disabled = true;
            
            // MV3 Compliant Auth Flow
            chrome.identity.getAuthToken({ interactive: true }, async function(token: any) {
                if (chrome.runtime.lastError) {
                    handleError(chrome.runtime.lastError.message || "Identity API Error");
                    return;
                }
                if (!token) {
                    handleError("No token retrieved from Google");
                    return;
                }
                
                try {
                    const credential = GoogleAuthProvider.credential(null, token as string);
                    await signInWithCredential(auth, credential);
                    // onAuthStateChanged will handle success
                } catch (firebaseError: any) {
                    handleError(`Firebase Sign-In Error: ${firebaseError.message}`);
                }
            });
            
        } catch (error: any) {
            handleError(`Unexpected Error: ${error.message}`);
        }
    });
}

function handleError(msg: string) {
    console.error(msg);
    if (errorMsg) {
        errorMsg.textContent = msg;
        errorMsg.style.display = 'block';
    }
    if (authBtn) {
        authBtn.innerText = "Sign in with Google";
        (authBtn as HTMLButtonElement).disabled = false;
    }
}

function showSuccess() {
    if (loginSection) loginSection.style.display = 'none';
    if (successSection) successSection.style.display = 'block';
    
    // Optional: Auto close after a few seconds
    setTimeout(() => {
        window.close();
    }, 2000);
}
