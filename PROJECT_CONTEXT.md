# Zabaqist Project Context

## Project Overview

Zabaqist is an interactive educational platform for French-speaking learners, inspired by Brilliant.org's approach to STEM education. The platform combines interactive learning with competitive quiz elements, focusing primarily on mathematics curriculum.

## Core Concept

Think of it as **"Brilliant.org meets Kahoot"** - an interactive learning platform that merges:
- Self-paced, visual problem-solving (like Brilliant.org)
- Real-time, competitive quiz gameplay (like Kahoot)
- French mathematics curriculum delivery
- Social/multiplayer learning features

## Technology Stack

### Frontend Framework
- **Next.js 

### UI/Styling
- **Mantine ui** - Main component library

### State Management & API
- **Redux Toolkit** - Global state management
- **RTK Query** - Data fetching and caching
- **Redux Persist** - State persistence

### Educational Features
- **KaTeX** - Mathematical notation rendering
- **React Markdown** - Markdown content rendering
- **remark-math** & **rehype-katex** - Math in markdown
- **React GeoGebra ** - Interactive geometry visualizations
- **Notion API (@notionhq/client)** - Content management
- **notion-to-md** - Converting Notion pages to markdown

## Key Features

### 1. Learning Modes

**Course Browsing (Apprendre)**
- Visual course cards with images from GeoGebra
- Carousel navigation for courses
- French mathematics topics:
  - Les Fonctions (Functions)
  - Les équations (Equations)
  - Calcul littéral (Algebraic calculation)
  - Proportionnalité (Proportionality)
  - Statistiques et probabilités (Statistics and Probabilities)

**Interactive Quizzes**
- Multiple question types:
  - Multiple choice
  - Rank ordering (drag-and-drop)
  - Word cloud responses
  - Clickable images
- Timed challenges with countdown timers
- Real-time feedback

**Math Visualization**
- KaTeX for LaTeX mathematical notation
- GeoGebra for interactive geometry
- Notion integration for rich content

### 2. Progress Tracking

- Course enrollment and tracking
- Progress bars showing completion percentage
- "Pick up where you left off" feature
- Weekly streak tracking
- User profile with statistics:
  - Courses completed
  - Tracks completed
  - Projects completed

### 3. Gamification & Social Features

- Basic vs Premium tiers
- User avatars and profiles
- Badge system (visible in UI)
- Player challenges (competitive mode)
- Live quiz events (multiplayer)
- Invite players functionality

### 4. Content Management

- Notion API integration for course content
- Markdown-based content with math support
- GeoGebra materials library
- MIT OpenCourseWare-inspired course detail pages

## Data Flow Architecture

### Quiz Execution Flow
1. User navigates to `/quiz` page
2. `Quizzes.jsx` component fetches all quizzes via RTK Query
3. Data stored in Redux store (`quiz` slice)
4. User clicks on a quiz → navigates to `/quiz/[quizId]`
5. `Animation` component loads quiz questions
6. User answers questions → responses saved to Redux
7. On completion → responses sent to backend API
8. Results and progress tracked

### State Management Pattern
```javascript
// RTK Query API call
fetchAll() → dispatch(setQuizzes(data)) → Redux Store

// Component access
useSelector(selectQuizzes) → Component renders

// User interaction
User action → dispatch(action) → Reducer → Store update → UI update
```

## API Integration

### Backend Connection
- Base URL configured via `API_URL_SERVER` environment variable
- JWT-based authentication (Bearer token in headers)
- 401 error handling for unauthorized requests

### Key API Endpoints (inferred from services)
- `GET /quizzes` - Fetch all quizzes
- `POST /quizzes/responses` - Save quiz responses
- `POST /quizzes/live-responses` - Save live quiz responses
- `POST /auth/login` - User authentication
- `POST /auth/register` - User registration
- `POST /events/invite` - Invite players
- `POST /events/challenge` - Challenge players

## User Experience Flow

### First-Time User
1. Lands on home page (`/page.tsx`)
2. Sees personalized greeting and weekly progress
3. "Pick up where you left off" section shows resumed courses
4. "Continue learning" shows available courses
5. "Recommended for you" suggests courses

### Learning Journey
1. Browse courses in `/apprendre`
2. Select a course → view course details
3. Enroll in a track (e.g., "Data Scientist with Python")
4. Progress through lessons with practice and apply modes
5. Take quizzes to test knowledge
6. Track progress on profile page

### Competitive Mode
1. User receives/sends challenge
2. Join live quiz event
3. Answer timed questions
4. Compete with other players in real-time
5. View results and rankings

## UI/UX Design Patterns

### Mantine ui Components Used

### Layout Patterns
- Responsive design (mobile-first)
- Two-column layouts (content + sidebar)
- Card-based content presentation
- Breadcrumb navigation for context

## Localization

- **Primary Language**: French
- Course content, UI labels, and navigation in French
- Some code comments and variable names in English

## Development Considerations

### Current State
- Active development (contains TODO comments)
- Some commented-out code for future features
- Mix of `.tsx` (TypeScript) and `.jsx` (JavaScript) files
- Client-side rendering (`"use client"` directive used extensively)


## Target Audience

- Morocco French-speaking students
- Mathematics learners (appears to target middle/high school level)
- Users who prefer interactive, visual learning
- Competitive learners who enjoy timed challenges

## Competitive Advantages

1. **French-focused** - Serves French-speaking market
2. **Math visualization** - GeoGebra integration
3. **Flexible content** - Notion-based CMS
4. **Social learning** - Multiplayer quiz features
5. **Multiple learning modes** - Practice, apply, compete

## Key Business Model Indicators

- Freemium model (Basic vs Premium tiers)
- Upgrade prompts throughout the platform
- Track-based learning paths to encourage continued engagement
- Gamification to increase retention

---

## How to Use This Context

When working with this project, you should understand:

1. **It's a Next.js app** - Uses App Router, not Pages Router
2. **Redux is central** - Most data flows through Redux store
3. **Mantine UI** - Use their components for consistency
4. **French is primary** - Keep user-facing content in French
5. **Math focus** - KaTeX and GeoGebra are essential tools

## Common Tasks You Might Help With
- Adding new quiz question types
- Creating new course content pages
- Implementing additional gamification features
- Enhancing progress tracking
- Improving mathematical notation rendering
- Adding new interactive visualizations
- Implementing social/competitive features
- Optimizing performance and user experience

---


This context should help you understand the architecture, purpose, and implementation details of the Zabaqist educational platform.
