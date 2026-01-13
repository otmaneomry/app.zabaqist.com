# Debugging Guide - Quiz Page Empty Issue

**Issue**: `/quiz/1` returns empty page

---

## 🔍 Step-by-Step Debugging

### Step 1: Test the Mock API First

Visit the test page I created:
```
http://localhost:3001/test-quiz
```

**Actions:**
1. Click the "Tester l'API Mock" button
2. Check if quizzes appear
3. Look for any error messages

**Expected Result:**
- Should show 3 quizzes (IDs: 1, 2, 3)
- Each quiz should have title, questions count, and duration

**If it fails here:** The mock API has an issue

---

### Step 2: Check Browser Console

Open your browser's Developer Tools (F12) and check the Console tab when visiting `/quiz/1`.

**Look for these log messages:**
```
🔍 Loading quiz with ID: 1
📦 API Response: {...}
📚 Available quizzes: [...]
🎯 Found quiz: {...}
✅ Quiz set successfully
🎮 Rendering QuizPlayer with quiz: Algèbre - Niveau 1
```

**Common Issues:**

#### Issue A: "Quiz not found"
```
❌ Quiz not found for ID: 1
```
**Solution:** Check if the quiz IDs in mock data match (should be 1, 2, 3)

#### Issue B: API Error
```
💥 Error loading quiz: Non autorisé
```
**Solution:** The mock API still has auth checks. Verify `lib/mockApi.ts` lines 258-264

#### Issue C: No logs at all
**Solution:** The page isn't rendering. Check for React/Next.js errors

---

### Step 3: Verify Mock API Data Structure

Run this command to check the mock API file:
```bash
grep -A 5 "const mockQuizzes" lib/mockApi.ts
```

**Expected output should show:**
```typescript
const mockQuizzes = [
  {
    id: 1,
    title: "Algèbre - Niveau 1",
    duration_minutes: 10,
```

**If different:** The data structure doesn't match what we updated

---

### Step 4: Check for Build Errors

Sometimes Next.js caches old code. Try:

```bash
# Stop the dev server (Ctrl+C)

# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

Then visit `/quiz/1` again.

---

### Step 5: Verify File Changes Were Saved

Check these files were properly updated:

#### File 1: `lib/mockApi.ts` line 261-264
Should NOT have this:
```typescript
if (!token) {
  throw new Error("Non autorisé")
}
```

Should have this:
```typescript
// Auth not required for simplified app
return { quizzes: mockQuizzes }
```

#### File 2: `app/quiz/[quizId]/page.tsx` line 35
Should have:
```typescript
const response = await quizApi.fetchAll(null)
```

NOT:
```typescript
const response = await quizApi.fetchAll(user.token)
```

---

## 🛠️ Quick Fixes

### Fix 1: Force Refresh Mock API

Edit `lib/mockApi.ts` and add at the very bottom:
```typescript
console.log('🔧 Mock API Loaded - Quizzes:', mockQuizzes.length)
```

Refresh the page. If you see this log, the mock API is loaded.

### Fix 2: Bypass API and Use Static Data

Temporarily edit `app/quiz/[quizId]/page.tsx`:

Replace the `loadQuizData` function with:
```typescript
const loadQuizData = async () => {
  try {
    setLoading(true)

    // TEMPORARY: Hardcoded quiz for testing
    const quiz = {
      id: 1,
      title: "Test Quiz",
      duration_minutes: 10,
      questions: [
        {
          id: 1,
          text: "Test question?",
          type: "multiple_choice",
          points: 10,
          allow_multiple: false,
          responses: [
            { id: 1, text: "Answer 1", correct_answer: 1 },
            { id: 2, text: "Answer 2", correct_answer: 0 },
          ]
        }
      ]
    }

    setQuiz(quiz)
    console.log('✅ Hardcoded quiz set')
  } catch (err: any) {
    console.error('💥 Error:', err)
    setError(err.message)
  } finally {
    setLoading(false)
  }
}
```

If this works, the issue is with the API call, not the rendering.

---

## 📊 What to Report

If the issue persists, please provide:

1. **Browser console logs** when visiting `/quiz/1`
2. **Test page results** from `/test-quiz`
3. **Terminal output** when running `npm run dev`
4. **Any error messages** you see

---

## ✅ Success Checklist

After debugging, you should see:

- [ ] Test page (`/test-quiz`) shows 3 quizzes
- [ ] Console shows all log messages (🔍 📦 📚 🎯 ✅ 🎮)
- [ ] Quiz page shows "Chargement du quiz..." briefly
- [ ] Quiz renders with questions
- [ ] No error messages in console

---

## 🚀 Expected Behavior

When working correctly:

1. Visit `/quiz/1`
2. See loading spinner for ~300ms
3. Quiz appears with:
   - Title: "Algèbre - Niveau 1"
   - Countdown timer (10:00)
   - First question displayed
   - Navigation buttons at bottom

---

**Created**: 2026-01-13
**Purpose**: Help debug empty quiz page issue
