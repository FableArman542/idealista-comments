import { User } from 'firebase/auth';
import { auth, signOut } from '../firebase';

interface AuthBarProps {
    user: User | null;
}

export function AuthBar({ user }: AuthBarProps) {
    const handleSignIn = () => {
        chrome.tabs.create({ url: chrome.runtime.getURL('src/auth.html') });
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Sign Out Error:", error);
        }
    };

    return (
        <div class="user-bar">
            <div id="auth-container" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {!user ? (
                    <div id="sign-in-view">
                        <button id="google-signin-btn" class="btn-google" onClick={handleSignIn}>
                            Sign in with Google
                        </button>
                    </div>
                ) : (
                    <div id="user-info-view" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            {user.photoURL && (
                                <img
                                    id="user-avatar"
                                    src={user.photoURL}
                                    alt=""
                                    style={{ width: '24px', height: '24px', borderRadius: '50%' }}
                                />
                            )}
                            <span id="user-display-name">{user.displayName || user.email || 'User'}</span>
                        </div>
                        <button id="sign-out-btn" class="btn-small" onClick={handleSignOut}>Sign Out</button>
                    </div>
                )}
            </div>
        </div>
    );
}
