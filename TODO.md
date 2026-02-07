# Zabaqist - TODO List & Roadmap
**Prioritized Development Tasks**

**Last Updated:** February 7, 2026
**Current Status:** MVP Complete - Frontend Ready
**Next Phase:** Feature Enhancement → Content Expansion → Backend Integration

---

## 📊 Priority Levels

- 🔴 **CRITICAL** - Blocks production use, must fix
- 🟠 **HIGH** - Significantly impacts user experience
- 🟡 **MEDIUM** - Important but not blocking
- 🟢 **LOW** - Nice to have, future enhancement
- 🔵 **BACKEND** - Requires backend API (Phase 4)

---

## 🎯 Phase 1: Student Experience Enhancement (Weeks 1-2)

### 🟠 HIGH - Student Input & Interaction

#### 1. LaTeX Math Input for Students
**Status:** ❌ Not Implemented
**Priority:** 🟠 HIGH
**Estimated Time:** 3-4 days
**Depends On:** Nothing

**Current Problem:**
- Students type plain text for homework answers
- Cannot write mathematical formulas properly
- No live preview of their math input

**Solution:**
```bash
npm install react-mathquill mathquill
```

**Implementation:**
```tsx
// components/input/MathInput.tsx
import { addStyles, EditableMathField } from 'react-mathquill'

export function MathInput({ value, onChange, placeholder }) {
  useEffect(() => {
    addStyles() // Load MathQuill CSS
  }, [])

  return (
    <div>
      <EditableMathField
        latex={value}
        onChange={(mathField) => onChange(mathField.latex())}
      />
      <div className="preview">
        <Text size="sm" c="dimmed">Preview:</Text>
        <MathContent content={`$${value}$`} />
      </div>
    </div>
  )
}
```

**Files to Modify:**
- [ ] Create `components/input/MathInput.tsx`
- [ ] Update `components/learning/DevoirAssignment.tsx` - Replace TextInput with MathInput
- [ ] Update `components/learning/ExerciseWithSolution.tsx` - Add student answer input
- [ ] Add CSS for MathQuill styling

**Acceptance Criteria:**
- [ ] Students can type math formulas using LaTeX
- [ ] Live preview shows formatted equation
- [ ] Works in homework assignments
- [ ] Works in exercise inputs
- [ ] Mobile-friendly (virtual keyboard friendly)

---

#### 2. Exercise Answer Validation
**Status:** ❌ Not Implemented
**Priority:** 🟠 HIGH
**Estimated Time:** 2-3 days
**Depends On:** Task #1 (MathInput)

**Current Problem:**
- Students see solution immediately
- No way to check if their answer is correct
- No "try first" approach
- No scoring for exercises

**Solution:**
```tsx
interface ExerciseWithSolution {
  // Add new props:
  correctAnswer?: string           // LaTeX format
  maxAttempts?: number             // Default: 3
  showSolutionAfter?: number       // Show after N attempts
  onAttemptSubmit?: (answer: string, isCorrect: boolean) => void
  points?: number                  // For scoring
}
```

**Implementation Flow:**
1. Student enters answer in MathInput
2. Click "Vérifier" (Check) button
3. Compare answer with correctAnswer (normalize LaTeX)
4. Show feedback: ✅ Correct or ❌ Try again (with hint)
5. After maxAttempts, show solution
6. Track attempts in progress system

**Files to Modify:**
- [ ] Update `components/learning/ExerciseWithSolution.tsx`
  - [ ] Add answer input field (MathInput)
  - [ ] Add "Vérifier" button
  - [ ] Add answer validation logic
  - [ ] Add attempt counter
  - [ ] Show/hide solution based on attempts
  - [ ] Add feedback UI (correct/incorrect)
- [ ] Create `lib/mathValidation.ts`
  - [ ] LaTeX normalization (remove spaces, etc.)
  - [ ] Answer comparison logic
  - [ ] Support for equivalent answers (e.g., 2/4 = 1/2)
- [ ] Update `lib/progressTracking.ts`
  - [ ] Track exercise attempts
  - [ ] Track correct/incorrect answers
  - [ ] Calculate exercise scores

**Acceptance Criteria:**
- [ ] Students can enter answers before seeing solution
- [ ] System validates answers correctly
- [ ] Feedback is clear (correct/incorrect/try again)
- [ ] Hints appear after wrong attempts
- [ ] Solution unlocks after 3 attempts or on request
- [ ] Progress tracks correct vs incorrect answers

---

#### 3. File Upload for Homework
**Status:** ❌ Not Implemented
**Priority:** 🟡 MEDIUM
**Estimated Time:** 1 day
**Depends On:** Nothing

**Current Problem:**
- Students can only type text answers
- Cannot upload hand-written work
- Cannot upload graphs or diagrams
- No way to submit PDF solutions

**Solution:**
```bash
# Already included in Mantine
import { FileInput } from '@mantine/core'
```

**Implementation:**
```tsx
// In DevoirAssignment
<FileInput
  label="Joindre un fichier (optionnel)"
  placeholder="PDF, Image, ou document"
  accept="image/*,application/pdf,.doc,.docx"
  multiple
  icon={<IconPaperclip />}
  onChange={(files) => handleFileUpload(files)}
/>
```

**Storage Strategy (Frontend):**
```typescript
// Convert to base64 for localStorage
const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })
}

// Store in homework answers
interface HomeworkAnswer {
  questionId: number
  textAnswer: string
  files?: Array<{
    name: string
    type: string
    size: number
    data: string  // base64
  }>
}
```

**Files to Modify:**
- [ ] Update `components/learning/DevoirAssignment.tsx`
  - [ ] Add FileInput component per question
  - [ ] Add file handling logic
  - [ ] Store files in component state
  - [ ] Show uploaded files list with preview
  - [ ] Add "Remove file" functionality
- [ ] Create `lib/fileHandling.ts`
  - [ ] File to base64 conversion
  - [ ] File size validation (max 5MB per file)
  - [ ] File type validation
  - [ ] Image preview generation
- [ ] Update homework submission to include files

**Acceptance Criteria:**
- [ ] Students can upload images (JPG, PNG)
- [ ] Students can upload PDFs
- [ ] File size limited to 5MB per file
- [ ] Preview uploaded files before submission
- [ ] Can remove uploaded files
- [ ] Files persist in localStorage
- [ ] Total upload size limited to 20MB

---

### 🟡 MEDIUM - Enhanced Interactions

#### 4. Save/Export GeoGebra Work
**Status:** ❌ Not Implemented
**Priority:** 🟡 MEDIUM
**Estimated Time:** 1-2 days
**Depends On:** Nothing

**Current Problem:**
- Students' GeoGebra work is lost on refresh
- Cannot save graph explorations
- Cannot export graphs as images

**Solution:**
```typescript
// Save state to localStorage
const saveGeoGebraState = (api: any, courseId: string) => {
  const base64 = api.getBase64()
  localStorage.setItem(`geogebra-${courseId}`, base64)
}

// Load state from localStorage
const loadGeoGebraState = (api: any, courseId: string) => {
  const base64 = localStorage.getItem(`geogebra-${courseId}`)
  if (base64) {
    api.setBase64(base64)
  }
}

// Export as PNG
const exportGeoGebraPNG = (api: any, filename: string) => {
  api.getPNGBase64(1.0, true, 72, (base64) => {
    const link = document.createElement('a')
    link.href = base64
    link.download = `${filename}.png`
    link.click()
  })
}
```

**Files to Modify:**
- [ ] Update `components/math/GeogebraViewer.tsx`
  - [ ] Add "Sauvegarder" button
  - [ ] Add "Charger" button
  - [ ] Add "Exporter PNG" button
  - [ ] Implement save/load logic
  - [ ] Implement export logic
- [ ] Update course pages with GeoGebra
  - [ ] Auto-save every 30 seconds
  - [ ] Auto-load on mount
  - [ ] Add UI for saved states

**Acceptance Criteria:**
- [ ] GeoGebra state saves to localStorage
- [ ] State persists across page refreshes
- [ ] Can export graph as PNG image
- [ ] Can clear saved state
- [ ] Auto-save works seamlessly
- [ ] Export filename includes course name

---

#### 5. Bookmarks & Notes System
**Status:** ❌ Not Implemented
**Priority:** 🟡 MEDIUM
**Estimated Time:** 2-3 days
**Depends On:** Nothing

**Current Problem:**
- Students cannot mark important sections
- Cannot take personal notes
- Cannot save favorite exercises
- No way to return to specific content

**Solution:**
```typescript
interface Bookmark {
  id: string
  courseId: string
  tabId: string
  section: string
  note?: string
  timestamp: Date
}

interface Note {
  id: string
  courseId: string
  content: string
  linkedTo?: {
    type: 'tab' | 'exercise' | 'homework'
    id: string
  }
  timestamp: Date
}
```

**Implementation:**
```tsx
// Bookmark button
<ActionIcon
  onClick={() => addBookmark(courseId, tabId, section)}
  title="Ajouter un signet"
>
  <IconBookmark />
</ActionIcon>

// Notes modal
<Modal opened={notesOpen} onClose={closeNotes}>
  <Textarea
    label="Note personnelle"
    value={note}
    onChange={(e) => setNote(e.target.value)}
    minRows={4}
  />
  <Button onClick={saveNote}>Sauvegarder</Button>
</Modal>
```

**Files to Create:**
- [ ] Create `lib/bookmarks.ts`
  - [ ] addBookmark()
  - [ ] removeBookmark()
  - [ ] getBookmarks()
  - [ ] getBookmarksByCourse()
- [ ] Create `lib/notes.ts`
  - [ ] addNote()
  - [ ] updateNote()
  - [ ] deleteNote()
  - [ ] getNotes()
- [ ] Create `components/learning/BookmarkButton.tsx`
- [ ] Create `components/learning/NotesModal.tsx`
- [ ] Create `components/learning/BookmarksList.tsx`
- [ ] Create `components/learning/NotesList.tsx`

**Files to Modify:**
- [ ] Update course pages to include bookmark buttons
- [ ] Add "Mes Signets" tab to user profile
- [ ] Add "Mes Notes" tab to user profile

**Acceptance Criteria:**
- [ ] Students can bookmark sections
- [ ] Students can write notes
- [ ] Bookmarks show in sidebar/profile
- [ ] Can click bookmark to jump to section
- [ ] Notes support basic formatting
- [ ] Can edit/delete bookmarks and notes

---

## 🎯 Phase 2: Content & UI Improvements (Weeks 3-4)

### 🟠 HIGH - More Educational Content

#### 6. Create Additional Courses
**Status:** ❌ Not Implemented
**Priority:** 🟠 HIGH
**Estimated Time:** 1 week per course (4-5 weeks total)
**Depends On:** Nothing

**Current Problem:**
- Only 1 demo course (Fonctions Logarithmiques)
- Need more content to prove scalability
- Need diverse math topics

**Courses to Create:**

**Priority Order:**

1. **Algèbre - Équations du Second Degré** (Week 1)
   - [ ] 6 tabs structure
   - [ ] Introduction (définition, forme générale)
   - [ ] Méthodes de résolution (factorisation, formule)
   - [ ] Discriminant et nature des solutions
   - [ ] GeoGebra: parabole interactive
   - [ ] 4 exercices progressifs
   - [ ] Devoir (5 questions)

2. **Géométrie - Trigonométrie** (Week 2)
   - [ ] 6 tabs structure
   - [ ] Introduction (cercle trigonométrique)
   - [ ] Formules fondamentales (sin, cos, tan)
   - [ ] Relations trigonométriques
   - [ ] GeoGebra: cercle trigonométrique interactif
   - [ ] 4 exercices
   - [ ] Devoir (5 questions)

3. **Analyse - Limites et Continuité** (Week 3)
   - [ ] 6 tabs structure
   - [ ] Introduction (notion de limite)
   - [ ] Calcul de limites
   - [ ] Formes indéterminées
   - [ ] GeoGebra: visualisation de limites
   - [ ] 4 exercices
   - [ ] Devoir (5 questions)

4. **Probabilités - Bases** (Week 4)
   - [ ] 6 tabs structure
   - [ ] Introduction (événements, expériences)
   - [ ] Calcul de probabilités
   - [ ] Probabilités conditionnelles
   - [ ] Diagrammes interactifs
   - [ ] 4 exercices
   - [ ] Devoir (5 questions)

5. **Statistiques - Descriptive** (Week 5)
   - [ ] 6 tabs structure
   - [ ] Introduction (population, échantillon)
   - [ ] Mesures de tendance centrale
   - [ ] Mesures de dispersion
   - [ ] Graphiques interactifs (histogrammes)
   - [ ] 4 exercices
   - [ ] Devoir (5 questions)

**Template to Use:**
- Copy `app/courses/fonctions-logarithmiques/page.tsx`
- Rename and adapt content
- Ensure same structure: 6 tabs, progress tracking
- Add course-specific GeoGebra visualizations
- Create 4 exercises with solutions
- Create 1 homework assignment

**Acceptance Criteria per Course:**
- [ ] All 6 tabs implemented
- [ ] 30+ LaTeX equations
- [ ] 1 GeoGebra interactive
- [ ] 4 exercises with hints and solutions
- [ ] 1 homework with 5 questions
- [ ] Progress tracking works
- [ ] All math renders correctly

---

#### 7. Quiz Content Expansion
**Status:** ⚠️ Partial (3 quizzes exist)
**Priority:** 🟡 MEDIUM
**Estimated Time:** 3-4 days
**Depends On:** Nothing

**Current Status:**
- 3 sample quizzes
- Need more variety
- Need different difficulty levels

**Quizzes to Add:**

- [ ] **Algèbre - Équations (Facile)** - 5 questions, 10 min
- [ ] **Algèbre - Équations (Difficile)** - 5 questions, 15 min
- [ ] **Géométrie - Pythagore** - 4 questions, 12 min
- [ ] **Fonctions - Dérivées (Facile)** - 5 questions, 10 min
- [ ] **Fonctions - Dérivées (Difficile)** - 6 questions, 15 min
- [ ] **Trigonométrie - Formules** - 5 questions, 10 min
- [ ] **Probabilités - Calculs** - 4 questions, 12 min
- [ ] **Statistiques - Moyenne/Médiane** - 4 questions, 10 min
- [ ] **Quiz Mixte - Bac Blanc 1** - 10 questions, 30 min
- [ ] **Quiz Mixte - Bac Blanc 2** - 10 questions, 30 min

**Files to Modify:**
- [ ] Update `lib/mockApi.ts` - Add 10 new quizzes
- [ ] Create quiz content with LaTeX
- [ ] Ensure varied difficulty

**Acceptance Criteria:**
- [ ] Total of 13 quizzes (currently 3 + 10 new)
- [ ] Mix of difficulty levels
- [ ] All topics covered
- [ ] LaTeX in questions works
- [ ] 2 comprehensive "Bac Blanc" quizzes

---

### 🟡 MEDIUM - UI/UX Polish

#### 8. Mobile Responsive Optimization
**Status:** ⚠️ Partial (works but not optimized)
**Priority:** 🟡 MEDIUM
**Estimated Time:** 3-4 days
**Depends On:** Nothing

**Current Problem:**
- Tabs cramped on mobile
- GeoGebra too large for small screens
- Touch controls not optimized
- Exercises hard to read on mobile

**Tasks:**
- [ ] **Course Tabs** - Make tabs scrollable horizontally on mobile
  ```tsx
  <Tabs.List>
    <ScrollArea type="auto" offsetScrollbars>
      {/* tabs */}
    </ScrollArea>
  </Tabs.List>
  ```
- [ ] **GeoGebra** - Responsive sizing
  ```tsx
  const isMobile = useMediaQuery('(max-width: 768px)')
  <GeogebraViewer
    width={isMobile ? 350 : 800}
    height={isMobile ? 350 : 600}
  />
  ```
- [ ] **Exercises** - Better spacing on mobile
- [ ] **Homework** - Stack labels on mobile
- [ ] **Quiz** - Larger touch targets
- [ ] **Progress Bar** - Responsive width
- [ ] **Math Equations** - Font size adjustments

**Files to Modify:**
- [ ] `app/courses/*/page.tsx` - Add responsive breakpoints
- [ ] `components/math/GeogebraViewer.tsx` - Responsive sizing
- [ ] `components/learning/ExerciseWithSolution.tsx` - Mobile layout
- [ ] `components/learning/DevoirAssignment.tsx` - Mobile layout
- [ ] `components/quiz/QuizPlayer.tsx` - Touch-friendly
- [ ] `tailwind.config.ts` - Add mobile-first utilities

**Acceptance Criteria:**
- [ ] All pages work on mobile (375px width)
- [ ] Tabs scrollable on mobile
- [ ] GeoGebra fits screen
- [ ] Touch targets at least 44px
- [ ] Text readable without zooming
- [ ] No horizontal scrolling issues

---

#### 9. Loading States & Skeletons
**Status:** ❌ Not Implemented
**Priority:** 🟡 MEDIUM
**Estimated Time:** 1-2 days
**Depends On:** Nothing

**Current Problem:**
- No loading indicators
- Sudden content appearance
- Poor perceived performance

**Solution:**
```tsx
import { Skeleton } from '@mantine/core'

{loading ? (
  <Stack gap="md">
    <Skeleton height={30} />
    <Skeleton height={100} />
    <Skeleton height={200} />
  </Stack>
) : (
  <ActualContent />
)}
```

**Files to Modify:**
- [ ] `app/quiz/[quizId]/page.tsx` - Add quiz loading skeleton
- [ ] `app/courses/*/page.tsx` - Add course loading skeleton
- [ ] `components/quiz/QuizPlayer.tsx` - Add question loading state
- [ ] `components/math/GeogebraViewer.tsx` - Add GeoGebra loading indicator

**Acceptance Criteria:**
- [ ] Quiz pages show skeleton while loading
- [ ] Course pages show skeleton while loading
- [ ] GeoGebra shows "Chargement..." message
- [ ] Smooth transitions from skeleton to content

---

#### 10. Error Boundaries & Error Pages
**Status:** ❌ Not Implemented
**Priority:** 🟡 MEDIUM
**Estimated Time:** 1 day
**Depends On:** Nothing

**Current Problem:**
- No error handling for crashes
- No 404 page
- No error recovery UI

**Solution:**
```tsx
// app/error.tsx
'use client'
export default function Error({ error, reset }) {
  return (
    <Container>
      <Title>Oups! Une erreur s'est produite</Title>
      <Text>{error.message}</Text>
      <Button onClick={reset}>Réessayer</Button>
    </Container>
  )
}

// app/not-found.tsx
export default function NotFound() {
  return (
    <Container>
      <Title>Page non trouvée</Title>
      <Link href="/">Retour à l'accueil</Link>
    </Container>
  )
}
```

**Files to Create:**
- [ ] `app/error.tsx` - Global error boundary
- [ ] `app/not-found.tsx` - 404 page
- [ ] `app/quiz/error.tsx` - Quiz-specific errors
- [ ] `app/courses/error.tsx` - Course-specific errors

**Acceptance Criteria:**
- [ ] Crashes show friendly error page
- [ ] 404 shows helpful message
- [ ] Can retry/recover from errors
- [ ] Errors logged to console
- [ ] Error pages match design system

---

## 🎯 Phase 3: Advanced Features (Weeks 5-7)

### 🟢 LOW - Enhanced Learning

#### 11. Video Explanations Embed
**Status:** ❌ Not Implemented
**Priority:** 🟢 LOW
**Estimated Time:** 2 days
**Depends On:** Nothing

**Current Problem:**
- Some students prefer video learning
- No multimedia content
- Only text-based explanations

**Solution:**
```tsx
// components/learning/VideoPlayer.tsx
import { AspectRatio } from '@mantine/core'

export function VideoPlayer({
  url,          // YouTube/Vimeo URL
  title,
  description
}) {
  return (
    <Card>
      <AspectRatio ratio={16/9}>
        <iframe
          src={url}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope"
          allowFullScreen
        />
      </AspectRatio>
      {description && <Text mt="sm">{description}</Text>}
    </Card>
  )
}
```

**Implementation:**
- [ ] Create `components/learning/VideoPlayer.tsx`
- [ ] Add video tab to courses (optional 7th tab)
- [ ] Support YouTube embeds
- [ ] Support Vimeo embeds
- [ ] Add video timestamps/chapters
- [ ] Track video progress

**Files to Modify:**
- [ ] Course pages - Add optional video tabs
- [ ] Add video URLs to course data
- [ ] Update progress tracking for video completion

**Acceptance Criteria:**
- [ ] YouTube videos embed correctly
- [ ] Vimeo videos embed correctly
- [ ] Responsive on mobile
- [ ] Can pause/play/seek
- [ ] Progress tracked when video finished

---

#### 12. Practice Problem Generator
**Status:** ❌ Not Implemented
**Priority:** 🟢 LOW
**Estimated Time:** 5-7 days
**Depends On:** Nothing (but complex)

**Current Problem:**
- Fixed exercises only
- Students can't practice variations
- No adaptive practice

**Solution:**
```typescript
// lib/problemGenerator.ts
interface ProblemTemplate {
  type: 'equation' | 'derivative' | 'limit' | 'geometry'
  difficulty: 'facile' | 'moyen' | 'difficile'
  generate: () => {
    question: string
    solution: string
    steps: Step[]
  }
}

// Example: Linear equation generator
const linearEquationGenerator: ProblemTemplate = {
  type: 'equation',
  difficulty: 'facile',
  generate: () => {
    const a = randomInt(1, 10)
    const b = randomInt(1, 20)
    const c = randomInt(1, 30)
    const x = (c - b) / a

    return {
      question: `$${a}x + ${b} = ${c}$`,
      solution: `$x = ${x}$`,
      steps: [
        // Generated steps
      ]
    }
  }
}
```

**Files to Create:**
- [ ] `lib/problemGenerator.ts` - Core generator
- [ ] `lib/generators/linearEquations.ts`
- [ ] `lib/generators/quadraticEquations.ts`
- [ ] `lib/generators/derivatives.ts`
- [ ] `lib/generators/limits.ts`
- [ ] `components/learning/PracticeMode.tsx`

**Acceptance Criteria:**
- [ ] Generate random linear equations
- [ ] Generate random quadratic equations
- [ ] Generate random derivative problems
- [ ] Solutions always correct
- [ ] Each problem has step-by-step solution
- [ ] Difficulty scales appropriately
- [ ] "Pratique" mode in courses

---

#### 13. Printable Worksheets (PDF Export)
**Status:** ❌ Not Implemented
**Priority:** 🟢 LOW
**Estimated Time:** 2-3 days
**Depends On:** Nothing

**Current Problem:**
- Students can't print exercises
- No offline study materials
- Teachers can't print assignments

**Solution:**
```bash
npm install jspdf html2canvas
```

```tsx
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const exportToPDF = async (elementId: string, filename: string) => {
  const element = document.getElementById(elementId)
  const canvas = await html2canvas(element)
  const imgData = canvas.toDataURL('image/png')

  const pdf = new jsPDF('p', 'mm', 'a4')
  const imgWidth = 210
  const imgHeight = (canvas.height * imgWidth) / canvas.width

  pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
  pdf.save(`${filename}.pdf`)
}
```

**Files to Create:**
- [ ] `lib/pdfExport.ts` - PDF generation utilities
- [ ] `components/learning/ExportButton.tsx`

**Files to Modify:**
- [ ] Add export buttons to:
  - [ ] Exercises tab
  - [ ] Homework assignments
  - [ ] Quiz results
  - [ ] Full course content

**Acceptance Criteria:**
- [ ] Can export exercises as PDF
- [ ] Can export homework as PDF
- [ ] Can export quiz results as PDF
- [ ] Math equations render in PDF
- [ ] Page breaks work correctly
- [ ] PDF includes course branding

---

#### 14. Accessibility Features
**Status:** ❌ Not Implemented
**Priority:** 🟢 LOW
**Estimated Time:** 3-4 days
**Depends On:** Nothing

**Current Problem:**
- No screen reader support
- No keyboard navigation
- No high contrast mode
- Not accessible to students with disabilities

**Tasks:**
- [ ] **Keyboard Navigation**
  - [ ] Tab order logical
  - [ ] Focus indicators visible
  - [ ] Shortcuts for common actions (Space = select answer)
  - [ ] Escape closes modals

- [ ] **Screen Reader Support**
  - [ ] ARIA labels on interactive elements
  - [ ] Alt text on images
  - [ ] MathML for equations (KaTeX supports this)
  - [ ] Announce quiz timer

- [ ] **Visual Accessibility**
  - [ ] High contrast mode toggle
  - [ ] Font size controls (A- A A+)
  - [ ] Reduced motion option
  - [ ] Color-blind friendly colors

- [ ] **Content Accessibility**
  - [ ] Captions for videos (when added)
  - [ ] Transcripts for audio
  - [ ] Alternative text descriptions

**Files to Modify:**
- [ ] All interactive components - Add ARIA labels
- [ ] `app/layout.tsx` - Add accessibility settings
- [ ] Create `components/accessibility/FontSizeControl.tsx`
- [ ] Create `components/accessibility/ContrastToggle.tsx`
- [ ] CSS - Add high contrast theme

**Acceptance Criteria:**
- [ ] WCAG 2.1 AA compliant
- [ ] Works with screen readers (NVDA, JAWS)
- [ ] All features keyboard accessible
- [ ] High contrast mode available
- [ ] Font size adjustable

---

## 🎯 Phase 4: Backend Integration (Weeks 8-11)

### 🔵 BACKEND - Data Persistence

#### 15. Backend API Setup
**Status:** ❌ Not Implemented
**Priority:** 🔵 BACKEND
**Estimated Time:** 1 week
**Depends On:** Technology stack decision

**Decision Required:**
- [ ] Choose: Laravel vs Node.js/Express vs Next.js API Routes
- [ ] Choose: PostgreSQL vs MySQL vs MongoDB
- [ ] Choose: Hosting (Vercel + Supabase? / DigitalOcean? / AWS?)

**Recommended:** Laravel + PostgreSQL + DigitalOcean

**Tasks:**
- [ ] Set up Laravel 11 project
- [ ] Configure PostgreSQL database
- [ ] Set up authentication (Laravel Sanctum)
- [ ] Configure CORS for Next.js frontend
- [ ] Set up API routes structure
- [ ] Configure environment variables
- [ ] Set up database migrations
- [ ] Deploy to staging server

**Deliverable:**
- Working API at `https://api.zabaqist.ma`
- Health check endpoint
- Authentication working
- Database connected

---

#### 16. Database Schema Design
**Status:** ❌ Not Implemented
**Priority:** 🔵 BACKEND
**Estimated Time:** 2-3 days
**Depends On:** Task #15 (Backend Setup)

**Tables Required:**

```sql
-- Users
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  country VARCHAR(100),
  avatar_url VARCHAR(500),
  role ENUM('student', 'teacher', 'admin') DEFAULT 'student',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Courses
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  topics TEXT[], -- Array of topics
  difficulty VARCHAR(50),
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

-- User Course Progress
CREATE TABLE course_progress (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  course_id INT REFERENCES courses(id) ON DELETE CASCADE,
  completed_tabs TEXT[], -- JSON array
  exercises_attempted INT[],
  exercises_completed INT[],
  homework_started BOOLEAN DEFAULT false,
  homework_completed BOOLEAN DEFAULT false,
  time_spent INT DEFAULT 0, -- seconds
  completion_percentage INT DEFAULT 0,
  last_visited_tab VARCHAR(100),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- Quizzes
CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  duration_minutes INT,
  difficulty VARCHAR(50),
  questions JSONB, -- Store questions as JSON
  created_at TIMESTAMP DEFAULT NOW()
);

-- Quiz Attempts
CREATE TABLE quiz_attempts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  quiz_id INT REFERENCES quizzes(id) ON DELETE CASCADE,
  answers JSONB, -- User answers
  score INT,
  total_points INT,
  time_taken INT, -- seconds
  completed_at TIMESTAMP DEFAULT NOW()
);

-- Homework Submissions
CREATE TABLE homework_submissions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  course_id INT REFERENCES courses(id) ON DELETE CASCADE,
  answers JSONB, -- Text answers + file references
  files TEXT[], -- Array of file URLs
  status ENUM('submitted', 'graded') DEFAULT 'submitted',
  score INT,
  feedback TEXT,
  submitted_at TIMESTAMP DEFAULT NOW(),
  graded_at TIMESTAMP,
  graded_by INT REFERENCES users(id)
);

-- Bookmarks
CREATE TABLE bookmarks (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  course_id INT REFERENCES courses(id) ON DELETE CASCADE,
  tab_id VARCHAR(100),
  section VARCHAR(255),
  note TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Notes
CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  course_id INT REFERENCES courses(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  linked_type VARCHAR(50), -- 'tab', 'exercise', 'homework'
  linked_id VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Exercise Attempts (for validation tracking)
CREATE TABLE exercise_attempts (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  course_id INT REFERENCES courses(id) ON DELETE CASCADE,
  exercise_number INT,
  answer TEXT,
  is_correct BOOLEAN,
  attempts INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Tasks:**
- [ ] Create migration files
- [ ] Add indexes for performance
- [ ] Add foreign key constraints
- [ ] Seed initial data (courses, quizzes)
- [ ] Test relationships

---

#### 17. Authentication API
**Status:** ❌ Not Implemented
**Priority:** 🔵 BACKEND
**Estimated Time:** 2 days
**Depends On:** Task #16 (Database)

**Endpoints to Create:**

```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
POST   /api/auth/refresh
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
```

**Tasks:**
- [ ] Implement registration with validation
- [ ] Implement login with JWT tokens
- [ ] Implement token refresh
- [ ] Implement password reset flow
- [ ] Add email verification (optional)
- [ ] Add rate limiting
- [ ] Update frontend to use real API

---

#### 18. Progress Sync API
**Status:** ❌ Not Implemented
**Priority:** 🔵 BACKEND
**Estimated Time:** 2 days
**Depends On:** Task #17 (Auth API)

**Endpoints to Create:**

```
GET    /api/progress/:courseId
POST   /api/progress/:courseId/sync
PUT    /api/progress/:courseId/tab
PUT    /api/progress/:courseId/exercise
PUT    /api/progress/:courseId/homework
```

**Tasks:**
- [ ] Implement progress retrieval
- [ ] Implement progress sync (merge localStorage + server)
- [ ] Update tab completion
- [ ] Update exercise progress
- [ ] Update homework status
- [ ] Add time tracking
- [ ] Handle conflicts (server vs local)
- [ ] Update frontend to sync progress

---

#### 19. Quiz Submission API
**Status:** ❌ Not Implemented
**Priority:** 🔵 BACKEND
**Estimated Time:** 2 days
**Depends On:** Task #17 (Auth API)

**Endpoints to Create:**

```
GET    /api/quizzes
GET    /api/quizzes/:id
POST   /api/quizzes/:id/submit
GET    /api/quizzes/:id/attempts
GET    /api/user/quiz-history
```

**Tasks:**
- [ ] Implement quiz list retrieval
- [ ] Implement quiz submission
- [ ] Store quiz attempts
- [ ] Calculate scores server-side
- [ ] Return attempt history
- [ ] Add statistics
- [ ] Update frontend to use real API

---

#### 20. Homework Submission API
**Status:** ❌ Not Implemented
**Priority:** 🔵 BACKEND
**Estimated Time:** 3 days
**Depends On:** Task #17 (Auth API)

**Endpoints to Create:**

```
POST   /api/homework/:courseId/submit
GET    /api/homework/:courseId/submissions
PUT    /api/homework/:submissionId/grade
POST   /api/homework/upload
```

**Tasks:**
- [ ] Implement homework submission
- [ ] Handle file uploads (S3/DigitalOcean Spaces)
- [ ] Store files securely
- [ ] Validate file types/sizes
- [ ] Return submission history
- [ ] Add grading endpoint (teachers only)
- [ ] Send email notifications on grading
- [ ] Update frontend to upload files

---

#### 21. Teacher Dashboard API
**Status:** ❌ Not Implemented
**Priority:** 🔵 BACKEND
**Estimated Time:** 4-5 days
**Depends On:** Task #20 (Homework API)

**Endpoints to Create:**

```
GET    /api/teacher/students
GET    /api/teacher/submissions
GET    /api/teacher/submissions/:id
PUT    /api/teacher/submissions/:id/grade
GET    /api/teacher/analytics
GET    /api/teacher/courses/:id/progress
```

**Tasks:**
- [ ] List all students
- [ ] List pending homework submissions
- [ ] Get submission details
- [ ] Grade submission with feedback
- [ ] View analytics (avg scores, completion rates)
- [ ] View student progress per course
- [ ] Export reports (CSV)

---

#### 22. Teacher Dashboard Frontend
**Status:** ❌ Not Implemented
**Priority:** 🔵 BACKEND
**Estimated Time:** 5-7 days
**Depends On:** Task #21 (Teacher API)

**Pages to Create:**

```
/teacher/dashboard          - Overview & stats
/teacher/students           - Student list
/teacher/submissions        - Pending homework
/teacher/submissions/:id    - Grade homework
/teacher/analytics          - Charts & reports
/teacher/courses            - Course management
```

**Tasks:**
- [ ] Create teacher layout
- [ ] Create dashboard with stats cards
- [ ] Create students list with filters
- [ ] Create submissions queue
- [ ] Create grading interface
  - [ ] View student answers
  - [ ] View uploaded files
  - [ ] Add score input
  - [ ] Add feedback textarea
  - [ ] Submit grade
- [ ] Create analytics page
  - [ ] Average scores chart
  - [ ] Completion rates
  - [ ] Time spent per course
  - [ ] Quiz performance
- [ ] Add export functionality

---

#### 23. Multi-Device Sync
**Status:** ❌ Not Implemented
**Priority:** 🔵 BACKEND
**Estimated Time:** 2 days
**Depends On:** Task #18 (Progress API)

**Current Problem:**
- Progress only in localStorage
- No sync across devices
- Can't switch between phone/computer

**Solution:**
```typescript
// Sync strategy
const syncProgress = async () => {
  // 1. Get local progress
  const localProgress = getCourseProgress(courseId)

  // 2. Get server progress
  const serverProgress = await api.get(`/progress/${courseId}`)

  // 3. Merge (take most recent)
  const merged = {
    completedTabs: [...new Set([
      ...localProgress.completedTabs,
      ...serverProgress.completedTabs
    ])],
    // ... merge other fields by latest timestamp
  }

  // 4. Save merged to server
  await api.post(`/progress/${courseId}/sync`, merged)

  // 5. Update local
  saveCourseProgress(courseId, merged)
}
```

**Tasks:**
- [ ] Implement sync on login
- [ ] Implement auto-sync every 30 seconds
- [ ] Handle offline mode (queue syncs)
- [ ] Resolve conflicts (server wins or local wins?)
- [ ] Add sync status indicator in UI
- [ ] Test across devices

---

## 📊 Summary & Timeline

### Total Estimated Time: 16-20 weeks

**Phase 1: Student Experience (Weeks 1-2)**
- 5 tasks
- Focus: Input, validation, files

**Phase 2: Content & UI (Weeks 3-4)**
- 5 tasks
- Focus: More courses, polish

**Phase 3: Advanced Features (Weeks 5-7)**
- 5 tasks
- Focus: Videos, practice, accessibility

**Phase 4: Backend Integration (Weeks 8-11)**
- 9 tasks
- Focus: API, database, teachers

---

## 🎯 Quick Win Priorities (If Time Limited)

**Top 5 Most Important:**
1. ✅ **LaTeX Input** (Task #1) - Critical for student answers
2. ✅ **Exercise Validation** (Task #2) - Makes learning interactive
3. ✅ **2-3 More Courses** (Task #6) - Shows content scalability
4. ✅ **Mobile Optimization** (Task #8) - 60% of students use mobile
5. ✅ **Backend Setup** (Tasks #15-20) - Required for production

**Next 5 If More Time:**
6. File Upload (Task #3)
7. More Quizzes (Task #7)
8. GeoGebra Save (Task #4)
9. Loading States (Task #9)
10. Teacher Dashboard (Tasks #21-22)

---

## 📝 Notes

- **All tasks are frontend-first** except Phase 4
- **Backend can be developed in parallel** by different developer
- **Each phase builds on previous** but phases can overlap
- **Priority can shift** based on user feedback
- **Time estimates are conservative** - may finish faster

---

**Document Created:** February 7, 2026
**Last Updated:** February 7, 2026
**Status:** Ready for Development 🚀
