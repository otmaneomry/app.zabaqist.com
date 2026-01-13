# Mock API - Temporary Development Mode

This project includes a temporary mock API system to allow frontend development without requiring the backend to be running.

## Current Status

**Mock API is ACTIVE** ✅
**Authentication is DISABLED** ✅ (No login required!)

The application is currently using a simulated in-memory API instead of making real HTTP requests to the backend.

**SIMPLIFIED MODE**: You can access all quizzes directly without logging in!

## Quick Start

**No login needed!** Just visit:
- http://localhost:3001/quiz/1 - Algèbre
- http://localhost:3001/quiz/2 - Géométrie
- http://localhost:3001/quiz/3 - Fonctions

## Test Credentials (Optional)

Login is **not required**, but if you want to test the auth system:

### Account 1
- **Email:** `test@test.com`
- **Password:** `password`
- **Name:** Test User
- **Country:** Morocco

### Account 2
- **Email:** `demo@demo.com`
- **Password:** `demo123`
- **Name:** Demo User
- **Country:** France

## Features Available in Mock Mode

### Authentication (Optional)
- ⚠️ Login with email/password (NOT required for quizzes)
- ⚠️ Register new users (stored in memory only)
- ⚠️ Session persistence with Zustand
- ⚠️ Forgot password (simulated)

### Quiz System (No Auth Required!)
- ✅ Fetch available quizzes (3 sample quizzes included)
- ✅ Play quizzes with multiple choice questions
- ✅ Submit quiz responses
- ✅ Calculate scores
- ✅ Math equations in questions (using KaTeX)
- ✅ **Direct access - no login needed!**

### Sample Quizzes Included

1. **Algèbre - Niveau 1** (3 questions, 10 min)
   - Solving linear equations
   - Math rendering with LaTeX
   - Access: `/quiz/1`

2. **Géométrie - Triangles** (2 questions, 15 min)
   - Pythagorean theorem
   - Equilateral triangles (multi-select)
   - Access: `/quiz/2`

3. **Fonctions - Introduction** (2 questions, 12 min)
   - Function evaluation
   - Linear function slope
   - Access: `/quiz/3`

## How to Switch to Real API

When your backend is ready, follow these steps:

### Step 1: Update the API Toggle

Open `lib/api.ts` and change:

```typescript
const USE_MOCK_API = true
```

to:

```typescript
const USE_MOCK_API = false
```

### Step 2: Configure Backend URL

Make sure your backend URL is correctly set in `app/env.ts`:

```typescript
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api'
```

Or set the environment variable in `.env.local`:

```bash
NEXT_PUBLIC_API_URL=http://your-backend-url/api
```

### Step 3: Remove Test Credentials UI (Optional)

Remove the test credentials card from:
- `app/signin/page.tsx` (lines 55-66)
- `app/signup/page.tsx` (lines 69-77)

### Step 4: Remove Mock API Files (Optional)

Once fully migrated to real API:

```bash
rm lib/mockApi.ts
rm MOCK_API_README.md
```

## File Structure

```
lib/
├── api.ts           # Main API with toggle between mock/real
└── mockApi.ts       # Mock API implementation (TEMPORARY)
```

## Notes

- Mock data is stored **in memory only** - it will be lost on page refresh (except for Zustand persisted user session)
- New users registered in mock mode won't persist across sessions
- All API calls include a simulated network delay (300-500ms) for realistic testing
- The mock API console logs test credentials when the app starts

## Development Tips

1. **Use test credentials** to quickly login without creating accounts
2. **Register new users** to test the signup flow (they'll be added to memory)
3. **Quiz data** is pre-configured with math equations for testing KaTeX rendering
4. **Check browser console** for mock API status messages

## Need Help?

If you encounter issues:
- Check browser console for error messages
- Verify `USE_MOCK_API = true` in `lib/api.ts`
- Make sure all imports are correct
- Confirm Zustand store is properly configured

---

**Created:** 2026-01-13
**Purpose:** Enable frontend development without backend dependency
**Status:** Temporary - Remove when backend is ready
