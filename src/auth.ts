import { auth, provider as googleProvider, signInWithPopup, onAuthStateChanged } from './firebase';

const authBtn = document.getElementById('auth-btn');
const errorMsg = document.getElementById('error-msg');
const loginSection = document.getElementById('login-section');
const successSection = document.getElementById('success-section');

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
            await signInWithPopup(auth, googleProvider);
            // onAuthStateChanged will handle success
        } catch (error: any) {
            console.error("Login failed", error);
            if (errorMsg) {
                errorMsg.textContent = `Login failed: ${error.message}`;
                errorMsg.style.display = 'block';
            }
        }
    });
}

function showSuccess() {
    if (loginSection) loginSection.style.display = 'none';
    if (successSection) successSection.style.display = 'block';
    
    // Optional: Auto close after a few seconds
    setTimeout(() => {
        window.close();
    }, 2000);
}

