# Chrome Web Store Listing — Idealista Chat & Comments

## Store Description

Discuss prices, neighborhoods, and more with other users directly on Idealista listing pages.

**How it works:**
1. Navigate to any property listing on idealista.pt, idealista.com, or idealista.it
2. Click the extension icon in your toolbar
3. Sign in with your Google account
4. Post comments, reply to others, like comments, and tag topics (Price, Noise, Security, Accesses)
5. Choose to post anonymously if you prefer

**Features:**
- Comment threads with nested replies on any Idealista listing page
- Topic tags to categorize discussions (Price, Noise, Security, Accesses)
- Like system to surface helpful comments
- Anonymous posting option
- Available in English, Portuguese, Spanish, and Italian
- Automatic language detection based on your browser

**Note:** This extension only activates on Idealista property detail pages (e.g. idealista.pt/imovel/..., idealista.com/inmueble/..., idealista.it/immobile/...). Open any property listing page and click the extension to get started.

---

## Notes to Reviewer

**How to test this extension:**

1. Install the extension
2. Navigate to an Idealista property listing page. You can find one by:
   - Going to https://www.idealista.pt
   - Searching for any location (e.g. "Lisboa")
   - Clicking on any property result — the URL should contain `/imovel/` followed by a number
3. Click the extension icon in the Chrome toolbar
4. You should see the listing ID and title detected in the header
5. Sign in with Google to post a comment
6. You can also test on idealista.com (Spanish listings, URL contains `/inmueble/`) or idealista.it (Italian listings, URL contains `/immobile/`)

**If not on a listing page:** The extension shows a guidance screen with an "Open Idealista" button that takes you to idealista.pt where you can navigate to any listing.

**Permissions used:**
- `activeTab` — to read the current listing page URL and title
- `storage` — to save language preferences
- `scripting` — to inject the content script on listing pages
- `identity` — for Google sign-in authentication
