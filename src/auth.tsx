import { render } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { auth, signInWithCredential, GoogleAuthProvider, onAuthStateChanged } from './firebase';

function AuthPage() {
    const [error, setError] = useState<string | null>(null);
    const [signing, setSigning] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) setSuccess(true);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => window.close(), 2000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    const handleSignIn = () => {
        setError(null);
        setSigning(true);

        chrome.identity.getAuthToken({ interactive: true }, async (token: any) => {
            if (chrome.runtime.lastError) {
                setError(chrome.runtime.lastError.message || 'Identity API Error');
                setSigning(false);
                return;
            }
            if (!token) {
                setError('No token retrieved from Google');
                setSigning(false);
                return;
            }
            try {
                const credential = GoogleAuthProvider.credential(null, token as string);
                await signInWithCredential(auth, credential);
            } catch (e: any) {
                setError(`Firebase Sign-In Error: ${e.message}`);
                setSigning(false);
            }
        });
    };

    if (success) {
        return (
            <div class="card">
                <h2 style={{ color: '#4CAF50' }}>Success!</h2>
                <p>You are now signed in. You can close this tab and return to the extension.</p>
            </div>
        );
    }

    return (
        <div class="card">
            <h2>Sign in</h2>
            <p>Sign in to post comments on Idealista listings.</p>
            <button class="auth-btn" onClick={handleSignIn} disabled={signing}>
                {signing ? 'Signing in...' : 'Sign in with Google'}
            </button>
            {error && <p class="error" style={{ display: 'block' }}>{error}</p>}
        </div>
    );
}

render(<AuthPage />, document.getElementById('app')!);
