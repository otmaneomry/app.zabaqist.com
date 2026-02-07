# Zabaqist - TODO List & Roadmap
**Prioritized Development Tasks**

**Last Updated:** February 7, 2026
**Current Status:** ✅ **PHASE 1 COMPLETE** - Moving to Phase 2
**Next Phase:** Content Expansion & UI Polish

---

## 📊 Priority Levels

- 🔴 **CRITICAL** - Blocks production use, must fix
- 🟠 **HIGH** - Significantly impacts user experience
- 🟡 **MEDIUM** - Important but not blocking
- 🟢 **LOW** - Nice to have, future enhancement
- 🔵 **BACKEND** - Requires backend API (Phase 4)

---

## ✅ Phase 1: Student Experience Enhancement - **COMPLETE**

**Completion Date:** February 7, 2026
**Status:** ✅ **100% COMPLETE**

### ✅ HIGH Priority Tasks - COMPLETED

#### 1. LaTeX Math Input for Students
**Status:** ✅ **COMPLETE**
**Completed:** February 7, 2026
**Time Taken:** 1 session

**What Was Built:**
- ✅ `components/input/SimpleMathInput.tsx` - LaTeX input with live preview
- ✅ `components/input/MathInput.tsx` - Advanced MathQuill editor (backup)
- ✅ `components/input/LaTeXGuide.tsx` - Reusable LaTeX help guide
- ✅ Integrated into ExerciseWithSolution component
- ✅ Integrated into DevoirAssignment component

**Acceptance Criteria Met:**
- ✅ Students can type math formulas using LaTeX
- ✅ Live preview shows formatted equation
- ✅ Works in homework assignments
- ✅ Works in exercise inputs
- ✅ Mobile-friendly (virtual keyboard friendly)

---

#### 2. Exercise Answer Validation
**Status:** ✅ **COMPLETE**
**Completed:** February 7, 2026
**Time Taken:** 1 session

**What Was Built:**
- ✅ `lib/mathValidation.ts` - Comprehensive validation engine (262 lines)
- ✅ Updated `components/learning/ExerciseWithSolution.tsx` with validation system
- ✅ Attempt tracking (max 3 attempts)
- ✅ Contextual hints system
- ✅ Points system
- ✅ Progress tracking integration

**Acceptance Criteria Met:**
- ✅ Students can enter answers before seeing solution
- ✅ System validates answers correctly
- ✅ Feedback is clear (correct/incorrect/try again)
- ✅ Hints appear after wrong attempts
- ✅ Solution unlocks after 3 attempts
- ✅ Progress tracks correct vs incorrect answers

---

### ✅ Bonus Features Completed

#### 3. Homework Solution Display System
**Status:** ✅ **COMPLETE**
**Completed:** February 7, 2026

**What Was Built:**
- ✅ Toggle button "Afficher les solutions" / "Masquer les solutions"
- ✅ Solution display in styled cards with hints
- ✅ All 5 homework questions have complete solutions
- ✅ Updated `components/learning/DevoirAssignment.tsx`

---

#### 4. Inline Math Rendering Fix
**Status:** ✅ **COMPLETE**
**Completed:** February 7, 2026

**What Was Fixed:**
- ✅ Fixed multi-line math rendering bug
- ✅ Applied `String.raw` solution across all exercises
- ✅ Updated fonctions-logarithmiques course
- ✅ Created documentation: `INLINE_MATH_FIX.md`

---

#### 5. Professional Typography Enhancements
**Status:** ✅ **COMPLETE**
**Completed:** February 7, 2026

**What Was Enhanced:**
- ✅ Enhanced Inter font with multiple weights (400, 500, 600, 700)
- ✅ Added `display: 'swap'` for better performance
- ✅ Professional typography scale in globals.css
- ✅ Math font sizing improvements (1.1em inline, 1.15em block)
- ✅ Anti-aliasing and optimizeLegibility
- ✅ Created `FONT_RECOMMENDATIONS.md` and `TYPOGRAPHY_ENHANCEMENTS_APPLIED.md`

---

### 🟡 MEDIUM Priority - Deferred to Phase 2/3

#### 3. File Upload for Homework
**Status:** ⏸️ **DEFERRED to Phase 2**
**Reason:** Text answers sufficient for now, lower priority

#### 4. Save/Export GeoGebra Work
**Status:** ⏸️ **DEFERRED to Phase 3**
**Reason:** Nice-to-have, not critical for launch

#### 5. Bookmarks & Notes System
**Status:** ⏸️ **DEFERRED to Phase 3**
**Reason:** Focus on core learning features first

---

## 🎯 Phase 2: Content & UI Improvements - **IN PROGRESS**

**Start Date:** February 7, 2026
**Estimated Duration:** 3-4 weeks
**Focus:** More courses, more quizzes, UI polish, mobile optimization

---

### 🟠 HIGH - Educational Content Expansion

#### 6. Create Additional Courses
**Status:** 🔄 **READY TO START**
**Priority:** 🟠 **HIGH**
**Estimated Time:** 1 week per course (4-5 weeks total)
**Depends On:** Phase 1 (COMPLETE)

**Goal:** Create 4-5 more courses to demonstrate platform scalability

**Courses to Create (Priority Order):**

##### Course 1: Algèbre - Équations du Second Degré
**Estimated Time:** 5-7 days
**Tasks:**
- [ ] Create `app/courses/equations-second-degre/page.tsx`
- [ ] **Tab 1 - Introduction** (1 day)
  - [ ] Définition et forme générale: ax² + bx + c = 0
  - [ ] Exemples historiques et applications
  - [ ] Forme canonique vs forme développée
- [ ] **Tab 2 - Méthodes de Résolution** (1 day)
  - [ ] Factorisation
  - [ ] Formule quadratique
  - [ ] Complétion du carré
- [ ] **Tab 3 - Discriminant** (1 day)
  - [ ] Calcul du discriminant Δ = b² - 4ac
  - [ ] Nature des solutions selon Δ
  - [ ] Cas particuliers (Δ > 0, Δ = 0, Δ < 0)
- [ ] **Tab 4 - Graphique (GeoGebra)** (1 day)
  - [ ] Parabole interactive
  - [ ] Manipulation des coefficients a, b, c
  - [ ] Visualisation des racines
  - [ ] Sommet et axe de symétrie
- [ ] **Tab 5 - Exercices** (1 day)
  - [ ] Exercice 1: Résoudre x² - 5x + 6 = 0 (factorisation)
  - [ ] Exercice 2: Résoudre 2x² - 3x - 2 = 0 (formule)
  - [ ] Exercice 3: Calculer discriminant et nature des solutions
  - [ ] Exercice 4: Équation avec paramètre
  - [ ] All with correctAnswer, hints, solutions
- [ ] **Tab 6 - Devoir** (1 day)
  - [ ] 5 questions progressives
  - [ ] Mix de calculs et raisonnement
  - [ ] Complete solutions with hints

**Acceptance Criteria:**
- [ ] All 6 tabs implemented
- [ ] 30+ LaTeX equations
- [ ] 1 GeoGebra interactive parabola
- [ ] 4 exercises with validation
- [ ] 1 homework with 5 questions + solutions
- [ ] Progress tracking works
- [ ] All math renders correctly

---

##### Course 2: Géométrie - Trigonométrie
**Estimated Time:** 5-7 days
**Tasks:**
- [ ] Create `app/courses/trigonometrie/page.tsx`
- [ ] **Tab 1 - Introduction**
  - [ ] Cercle trigonométrique
  - [ ] Angles en radians et degrés
  - [ ] Définitions sin, cos, tan
- [ ] **Tab 2 - Formules Fondamentales**
  - [ ] Relations trigonométriques de base
  - [ ] sin²θ + cos²θ = 1
  - [ ] tan θ = sin θ / cos θ
  - [ ] Valeurs remarquables (0°, 30°, 45°, 60°, 90°)
- [ ] **Tab 3 - Relations Trigonométriques**
  - [ ] Formules d'addition
  - [ ] Formules de duplication
  - [ ] Formules de transformation
- [ ] **Tab 4 - Graphique (GeoGebra)**
  - [ ] Cercle trigonométrique interactif
  - [ ] Visualisation sin, cos, tan
  - [ ] Animation de l'angle
- [ ] **Tab 5 - Exercices**
  - [ ] 4 exercises with validation
- [ ] **Tab 6 - Devoir**
  - [ ] 5 questions with solutions

---

##### Course 3: Analyse - Limites et Continuité
**Estimated Time:** 5-7 days
**Tasks:**
- [ ] Create `app/courses/limites-continuite/page.tsx`
- [ ] **Tab 1 - Introduction**
  - [ ] Notion intuitive de limite
  - [ ] Limite à gauche, limite à droite
  - [ ] Limite en un point, limite à l'infini
- [ ] **Tab 2 - Calcul de Limites**
  - [ ] Limites usuelles
  - [ ] Théorèmes sur les limites
  - [ ] Opérations sur les limites
- [ ] **Tab 3 - Formes Indéterminées**
  - [ ] Types: 0/0, ∞/∞, ∞-∞, 0×∞
  - [ ] Techniques de levée d'indétermination
  - [ ] Limites par factorisation
  - [ ] Limites par conjugaison
- [ ] **Tab 4 - Graphique (GeoGebra)**
  - [ ] Visualisation de limites
  - [ ] Asymptotes
  - [ ] Continuité
- [ ] **Tab 5 - Exercices**
  - [ ] 4 exercises with validation
- [ ] **Tab 6 - Devoir**
  - [ ] 5 questions with solutions

---

##### Course 4: Probabilités - Bases
**Estimated Time:** 5-7 days
**Tasks:**
- [ ] Create `app/courses/probabilites/page.tsx`
- [ ] **Tab 1 - Introduction**
  - [ ] Expériences aléatoires
  - [ ] Événements
  - [ ] Probabilité d'un événement
- [ ] **Tab 2 - Calcul de Probabilités**
  - [ ] Propriétés de base
  - [ ] Événements contraires
  - [ ] Événements incompatibles
  - [ ] Loi de probabilité
- [ ] **Tab 3 - Probabilités Conditionnelles**
  - [ ] Définition P(A|B)
  - [ ] Formule des probabilités totales
  - [ ] Formule de Bayes
  - [ ] Indépendance
- [ ] **Tab 4 - Graphique (Diagrammes)**
  - [ ] Arbres de probabilités interactifs
  - [ ] Diagrammes de Venn
- [ ] **Tab 5 - Exercices**
  - [ ] 4 exercises with validation
- [ ] **Tab 6 - Devoir**
  - [ ] 5 questions with solutions

---

##### Course 5: Statistiques - Descriptive
**Estimated Time:** 5-7 days
**Tasks:**
- [ ] Create `app/courses/statistiques/page.tsx`
- [ ] **Tab 1 - Introduction**
  - [ ] Population et échantillon
  - [ ] Variables statistiques
  - [ ] Séries statistiques
- [ ] **Tab 2 - Mesures de Tendance Centrale**
  - [ ] Moyenne
  - [ ] Médiane
  - [ ] Mode
- [ ] **Tab 3 - Mesures de Dispersion**
  - [ ] Étendue
  - [ ] Variance
  - [ ] Écart-type
- [ ] **Tab 4 - Graphique**
  - [ ] Histogrammes interactifs
  - [ ] Diagrammes en boîte
- [ ] **Tab 5 - Exercices**
  - [ ] 4 exercises with validation
- [ ] **Tab 6 - Devoir**
  - [ ] 5 questions with solutions

---

**Phase 2 Course Creation Strategy:**
1. Use `app/courses/fonctions-logarithmiques/page.tsx` as template
2. Copy structure: 6 tabs, same layout
3. Reuse components: ExerciseWithSolution, DevoirAssignment
4. Focus on content quality
5. Test each course thoroughly before moving to next

---

### 🟡 MEDIUM - Quiz Content Expansion

#### 7. Quiz Content Expansion
**Status:** 🔄 **READY TO START**
**Priority:** 🟡 **MEDIUM**
**Estimated Time:** 3-4 days
**Current Status:** 3 quizzes exist, need 10 more

**Quizzes to Add:**

- [ ] **Quiz 4: Algèbre - Équations (Facile)** (1 hour)
  - 5 questions sur équations du 1er degré
  - Durée: 10 min
  - Niveau: Facile

- [ ] **Quiz 5: Algèbre - Équations du 2nd Degré (Moyen)** (1 hour)
  - 5 questions: factorisation, discriminant
  - Durée: 15 min
  - Niveau: Moyen

- [ ] **Quiz 6: Géométrie - Pythagore** (1 hour)
  - 4 questions sur théorème de Pythagore
  - Durée: 12 min
  - Niveau: Facile

- [ ] **Quiz 7: Fonctions - Dérivées (Facile)** (1 hour)
  - 5 questions: dérivées simples
  - Durée: 10 min
  - Niveau: Facile

- [ ] **Quiz 8: Fonctions - Dérivées (Difficile)** (1 hour)
  - 6 questions: dérivées composées, produit
  - Durée: 15 min
  - Niveau: Difficile

- [ ] **Quiz 9: Trigonométrie - Formules** (1 hour)
  - 5 questions sur formules trigo
  - Durée: 10 min
  - Niveau: Moyen

- [ ] **Quiz 10: Probabilités - Calculs** (1 hour)
  - 4 questions sur calcul de probabilités
  - Durée: 12 min
  - Niveau: Moyen

- [ ] **Quiz 11: Statistiques - Moyenne/Médiane** (1 hour)
  - 4 questions sur mesures centrales
  - Durée: 10 min
  - Niveau: Facile

- [ ] **Quiz 12: Bac Blanc 1 - Mixte** (2 hours)
  - 10 questions mélangées
  - Durée: 30 min
  - Niveau: Difficile
  - Couvre tous les sujets

- [ ] **Quiz 13: Bac Blanc 2 - Mixte** (2 hours)
  - 10 questions mélangées
  - Durée: 30 min
  - Niveau: Difficile
  - Variantes différentes

**Files to Modify:**
- [ ] `lib/mockApi.ts` - Add 10 new quizzes with questions

**Acceptance Criteria:**
- [ ] Total of 13 quizzes (3 existing + 10 new)
- [ ] Mix of difficulty levels
- [ ] All math topics covered
- [ ] LaTeX renders correctly in all questions
- [ ] 2 comprehensive "Bac Blanc" practice exams

---

### 🟡 MEDIUM - UI/UX Polish

#### 8. Mobile Responsive Optimization
**Status:** 🔄 **READY TO START**
**Priority:** 🟡 **MEDIUM**
**Estimated Time:** 3-4 days
**Current Status:** Works but not optimized

**Tasks:**

- [ ] **Day 1: Course Tabs Mobile** (1 day)
  - [ ] Make tabs scrollable horizontally on mobile
  - [ ] Use Mantine ScrollArea component
  - [ ] Test on 375px width (iPhone SE)
  - [ ] Add touch swipe gestures

- [ ] **Day 2: GeoGebra Responsive** (1 day)
  - [ ] Add useMediaQuery hook
  - [ ] Adjust width/height for mobile: 350x350
  - [ ] Adjust for tablet: 600x600
  - [ ] Adjust for desktop: 800x600
  - [ ] Test on real devices

- [ ] **Day 3: Components Mobile** (1 day)
  - [ ] ExerciseWithSolution - Better spacing on mobile
  - [ ] DevoirAssignment - Stack labels vertically on mobile
  - [ ] QuizPlayer - Larger touch targets (min 44px)
  - [ ] SimpleMathInput - Mobile keyboard friendly
  - [ ] LaTeXGuide - Compact on mobile

- [ ] **Day 4: General Polish** (1 day)
  - [ ] Progress bar responsive width
  - [ ] Math equations font size on mobile (1em instead of 1.1em)
  - [ ] Test all pages on mobile
  - [ ] Fix any horizontal scrolling issues
  - [ ] Test touch interactions

**Files to Modify:**
- [ ] All course pages - Add responsive breakpoints
- [ ] `components/math/GeogebraViewer.tsx` - Responsive sizing
- [ ] `components/learning/ExerciseWithSolution.tsx` - Mobile layout
- [ ] `components/learning/DevoirAssignment.tsx` - Mobile layout
- [ ] `components/quiz/QuizPlayer.tsx` - Touch-friendly
- [ ] `components/input/SimpleMathInput.tsx` - Mobile keyboard
- [ ] `components/input/LaTeXGuide.tsx` - Compact mode

**Acceptance Criteria:**
- [ ] All pages work on 375px width (iPhone SE)
- [ ] Tabs scrollable horizontally on mobile
- [ ] GeoGebra fits screen on all devices
- [ ] Touch targets at least 44px
- [ ] Text readable without zooming
- [ ] No horizontal scrolling issues
- [ ] Math input works with mobile keyboard

---

#### 9. Loading States & Skeletons
**Status:** 🔄 **READY TO START**
**Priority:** 🟡 **MEDIUM**
**Estimated Time:** 1-2 days

**Tasks:**

- [ ] **Create Skeleton Components** (Half day)
  - [ ] Create `components/loading/CourseSkeleton.tsx`
  - [ ] Create `components/loading/QuizSkeleton.tsx`
  - [ ] Create `components/loading/ExerciseSkeleton.tsx`

- [ ] **Add Loading States** (1 day)
  - [ ] Quiz pages - Show skeleton while loading
  - [ ] Course pages - Show skeleton while loading
  - [ ] Exercise tabs - Show loading state
  - [ ] GeoGebra - Show "Chargement..." message

- [ ] **Polish Transitions** (Half day)
  - [ ] Fade in content when loaded
  - [ ] Smooth skeleton → content transition
  - [ ] Add suspense boundaries

**Files to Modify:**
- [ ] `app/quiz/[quizId]/page.tsx` - Add loading state
- [ ] All course pages - Add loading state
- [ ] `components/math/GeogebraViewer.tsx` - Add loading indicator
- [ ] `components/quiz/QuizPlayer.tsx` - Add question loading

**Acceptance Criteria:**
- [ ] Quiz pages show skeleton while loading
- [ ] Course pages show skeleton while loading
- [ ] GeoGebra shows loading message
- [ ] Smooth transitions from skeleton to content
- [ ] No layout shift during loading

---

#### 10. Error Boundaries & Error Pages
**Status:** 🔄 **READY TO START**
**Priority:** 🟡 **MEDIUM**
**Estimated Time:** 1 day

**Tasks:**

- [ ] **Create Error Pages** (Half day)
  - [ ] Create `app/error.tsx` - Global error boundary
  - [ ] Create `app/not-found.tsx` - 404 page
  - [ ] Create `app/quiz/error.tsx` - Quiz-specific errors
  - [ ] Create `app/courses/error.tsx` - Course-specific errors

- [ ] **Style Error Pages** (Half day)
  - [ ] Match design system (Mantine + Teal theme)
  - [ ] Add helpful error messages
  - [ ] Add "Retry" button
  - [ ] Add "Go Home" button
  - [ ] Add illustration or icon

**Acceptance Criteria:**
- [ ] Crashes show friendly error page
- [ ] 404 shows helpful message with navigation
- [ ] Can retry/recover from errors
- [ ] Errors logged to console for debugging
- [ ] Error pages match overall design system

---

## 🎯 Phase 2 Summary

**Total Tasks:** 5 major tasks
**Estimated Duration:** 3-4 weeks
**Priority Breakdown:**
- HIGH: 1 task (Courses)
- MEDIUM: 4 tasks (Quizzes, Mobile, Loading, Errors)

**Goals:**
- ✅ Create 4-5 new courses
- ✅ Add 10 new quizzes
- ✅ Optimize mobile experience
- ✅ Add loading states
- ✅ Add error handling

**Success Criteria:**
- Platform has 6 total courses
- Platform has 13 total quizzes
- Mobile experience is excellent
- Professional loading/error states

---

## 🎯 Phase 3: Advanced Features (Weeks 5-7) - PLANNED

Tasks 11-14 deferred to Phase 3:
- Video Explanations Embed
- Practice Problem Generator
- Printable Worksheets (PDF Export)
- Accessibility Features

---

## 🎯 Phase 4: Backend Integration (Weeks 8-11) - PLANNED

Tasks 15-23 deferred to Phase 4:
- Backend API Setup
- Database Schema
- Authentication
- Progress Sync
- Quiz Submission API
- Homework Submission API
- Teacher Dashboard
- Multi-Device Sync

---

## 📝 Notes

**Phase 1 Achievements:**
- ✅ LaTeX input system
- ✅ Answer validation
- ✅ Solution display
- ✅ Professional typography
- ✅ Reusable components
- ✅ Comprehensive documentation

**Phase 2 Focus:**
- 🎯 Content creation (courses + quizzes)
- 🎯 Mobile optimization
- 🎯 UI polish
- 🎯 Better UX (loading, errors)

**Documentation:**
- See `PHASE1_COMPLETION_REPORT.md` for Phase 1 details
- See `TYPOGRAPHY_ENHANCEMENTS_APPLIED.md` for font info
- See `FONT_RECOMMENDATIONS.md` for typography guide
- See `INLINE_MATH_FIX.md` for math rendering guide

---

**Last Updated:** February 7, 2026
**Current Phase:** Phase 2 - Content & UI Improvements
**Status:** Ready to Begin! 🚀
