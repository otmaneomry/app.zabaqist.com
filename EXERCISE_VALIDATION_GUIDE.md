# Exercise Validation - User Guide

**How to test the new interactive exercise features**

---

## 🚀 Quick Start

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to the course:**
   ```
   http://localhost:3000/courses/fonctions-logarithmiques
   ```

3. **Click on Tab 5: "Exercices"**

---

## 🎮 How to Use

### Exercise 1 (Easy): Calculer ln(e³) + ln(e²) - ln(e)

**Correct Answer:** `4`

#### Steps to test:
1. You'll see an input field labeled "Votre réponse:"
2. Type your answer in LaTeX format
3. Click "Vérifier la réponse" button

#### Try these scenarios:

**Scenario A - Wrong Answer:**
```
Type: 3
Click: Vérifier
Result: ❌ Red error alert "Incorrect"
        🟠 Orange hint appears
        Counter shows: "Tentative 1 / 3"
```

**Scenario B - Correct Answer:**
```
Type: 4
Click: Vérifier
Result: ✅ Green success message
        "Bravo ! Vous avez trouvé la bonne réponse"
        "Vous avez réussi en 2 tentatives et gagné 10 points !"
        Input field becomes disabled
```

**Scenario C - Max Attempts:**
```
Try 3 wrong answers (e.g., 1, 2, 3)
After 3rd attempt:
Result: Solution automatically appears after 2 seconds
        Input field becomes disabled
```

---

### Exercise 2 (Medium): Résoudre ln(x) = 3

**Correct Answer:** `e^3` or `e^{3}` or `exp(3)`

#### LaTeX Input Examples:
```latex
e^3          ✅ Valid
e^{3}        ✅ Valid (equivalent)
exp(3)       ✅ Valid
2.71^3       ❌ Wrong (not exact)
20.09        ❌ Wrong (approximate)
```

#### Try:
1. Type: `e^3`
2. See live preview below showing: e³
3. Click "Vérifier la réponse"
4. Result: ✅ Success! "Vous avez gagné 15 points !"

---

### Exercise 3 (Medium): Simplifier ln(8) + ln(2) - ln(4)

**Correct Answer:** `\ln(4)` or `ln(4)` or `2\ln(2)`

#### Valid Formats:
```latex
\ln(4)       ✅ Correct
ln(4)        ✅ Correct (backslash optional)
2\ln(2)      ✅ Also correct (equivalent form)
\ln(2^2)     ✅ Also correct (equivalent form)
1.386        ❌ Wrong (numeric approximation not accepted)
```

---

### Exercise 4 (Difficult): Dériver f(x) = ln(x² + 3x + 2)

**Correct Answer:** `\frac{2x+3}{x^2+3x+2}` or variations

#### Valid Formats:
```latex
\frac{2x+3}{x^2+3x+2}              ✅ Correct
\frac{2x + 3}{x^2 + 3x + 2}        ✅ Correct (spaces ignored)
(2x+3)/(x^2+3x+2)                  ✅ Correct
\frac{2x+3}{(x+1)(x+2)}            ✅ Correct (factored form)
```

---

## 📝 LaTeX Input Tips

### Common Syntax:

| What you want | LaTeX code | Preview |
|---------------|------------|---------|
| Power: x² | `x^2` | x² |
| Fraction: a/b | `\frac{a}{b}` | a/b |
| Square root: √x | `\sqrt{x}` | √x |
| Natural log: ln(x) | `\ln(x)` or `ln(x)` | ln(x) |
| Exponential: e³ | `e^3` | e³ |
| Multiplication: 2·x | `2x` or `2*x` | 2x |

### Helper Guide

When the input is empty, you'll see a helper guide with quick LaTeX reference:
- **Exposant:** `x^2` → x²
- **Indice:** `x_1` → x₁
- **Fraction:** `\frac{a}{b}` → a/b
- **Racine:** `\sqrt{x}` → √x
- **Fonction:** `\ln(x)`, `\sin(x)`, `\cos(x)`

---

## 🎯 Features Demonstrated

### 1. Live Preview
As you type LaTeX, you see a formatted preview below:
```
┌─────────────────────────────────────┐
│ Votre réponse:                      │
│ ┌─────────────────────────────────┐ │
│ │ \frac{2x+3}{x^2+3x+2}           │ │ ← Input field
│ └─────────────────────────────────┘ │
│                                     │
│ 📘 Aperçu de votre réponse:         │
│ ┌─────────────────────────────────┐ │
│ │    2x + 3                       │ │ ← Formatted preview
│ │  ─────────                      │ │
│ │  x² + 3x + 2                    │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
```

### 2. Attempt Tracking
```
Tentative 1 / 3  →  Try 1
Tentative 2 / 3  →  Try 2
Tentative 3 / 3  →  Last chance!
```

### 3. Smart Feedback

**Correct Answer:**
```
┌─────────────────────────────────────┐
│ ✅ Correct !                         │
│ Bravo ! Votre réponse est correcte  │
└─────────────────────────────────────┘
```

**Wrong Answer:**
```
┌─────────────────────────────────────┐
│ ❌ Incorrect                         │
│ Votre réponse n'est pas correcte.   │
│ Essayez encore !                    │
└─────────────────────────────────────┘
```

**Contextual Hint (appears after wrong attempt):**
```
┌─────────────────────────────────────┐
│ 🟠 Indice                           │
│ Indice: La réponse implique la     │
│ fonction logarithme népérien (ln)  │
└─────────────────────────────────────┘
```

### 4. Success Message
```
┌──────────────────────────────────────────┐
│ ✅  Bravo ! Vous avez trouvé la bonne   │
│     réponse                              │
│                                          │
│     Vous avez réussi en 2 tentatives    │
│     et gagné 15 points !                 │
└──────────────────────────────────────────┘
```

### 5. Points System
Each exercise awards points:
- Exercise 1 (Facile): **10 points**
- Exercise 2 (Moyen): **15 points**
- Exercise 3 (Moyen): **12 points**
- Exercise 4 (Difficile): **15 points**

**Total:** 52 points available!

---

## 🧪 Testing Checklist

### Basic Functionality:
- [ ] Input field appears on each exercise
- [ ] Can type LaTeX in input field
- [ ] Live preview updates as you type
- [ ] "Vérifier la réponse" button works
- [ ] Attempt counter updates (1/3, 2/3, 3/3)
- [ ] Wrong answer shows red error alert
- [ ] Correct answer shows green success message
- [ ] Input disables after correct answer

### Advanced Features:
- [ ] Contextual hints appear after wrong attempts
- [ ] Solution auto-shows after 3 failed attempts
- [ ] Helper guide appears when field is empty
- [ ] Points displayed in success message
- [ ] Progress tracking marks exercise as completed
- [ ] Can still view hint button
- [ ] Can still view solution manually

### LaTeX Rendering:
- [ ] Simple expressions: `4` renders correctly
- [ ] Powers: `e^3` renders as e³
- [ ] Fractions: `\frac{2x+3}{x^2+3x+2}` renders correctly
- [ ] Functions: `\ln(4)` renders correctly
- [ ] Preview updates in real-time

---

## 🎓 For Teachers/Course Authors

### How to Add Validation to Exercises

Edit your course page (`app/courses/your-course/page.tsx`):

**Before:**
```tsx
<ExerciseWithSolution
  number={1}
  question="Calculate: $2 + 2$"
  steps={[...]}
  finalAnswer="$4$"
/>
```

**After:**
```tsx
<ExerciseWithSolution
  courseId="your-course-slug"
  number={1}
  question="Calculate: $2 + 2$"
  correctAnswer="4"              // ✅ Add this
  maxAttempts={3}                // ✅ Optional (default: 3)
  points={10}                    // ✅ Optional (default: 10)
  steps={[...]}
  finalAnswer="$4$"
/>
```

### Setting Correct Answers

The `correctAnswer` should be in LaTeX format without the `$` delimiters:

| Question Type | Example correctAnswer |
|---------------|----------------------|
| Number | `"4"` |
| Expression | `"e^3"` |
| Fraction | `"\\frac{2x+3}{x^2+3x+2}"` |
| Function | `"\\ln(4)"` |
| Equation | `"x = 2"` |

**Note:** Use double backslashes `\\` in strings for LaTeX commands.

---

## 🐛 Troubleshooting

### Problem: Input field doesn't appear
**Solution:** Make sure `correctAnswer` prop is set on the exercise.

### Problem: Answer marked wrong when it's correct
**Solution:** Check LaTeX normalization. Try these equivalent forms:
- With/without backslash: `ln(x)` vs `\ln(x)`
- With/without braces: `e^3` vs `e^{3}`
- With/without spaces: `2x+3` vs `2x + 3`

### Problem: Preview doesn't show
**Solution:** Check your LaTeX syntax. Common issues:
- Missing braces: `\frac{a}{b}` not `\frac{a}b`
- Unescaped backslashes: Use `\\` in strings
- Invalid commands: Check KaTeX documentation

### Problem: Solution appears immediately
**Solution:** Exercise might not have `correctAnswer` set, so it falls back to showing solution.

---

## 📊 Expected Behavior Summary

| Action | Expected Result |
|--------|----------------|
| Type in input | Live preview updates |
| Click "Vérifier" with empty input | Button disabled |
| Submit wrong answer (1st) | Red alert + hint + counter 1/3 |
| Submit wrong answer (2nd) | Red alert + hint + counter 2/3 |
| Submit wrong answer (3rd) | Red alert + auto-show solution after 2s |
| Submit correct answer | Green success + points + disable input |
| Get correct answer | Exercise marked completed in progress |
| Click "Voir la solution" | Solution expands (still works) |
| Click "Voir un indice" | Hint expands (still works) |

---

## 🎉 Success Indicators

You'll know it's working when you see:

1. ✅ Input field with label "Votre réponse:"
2. ✅ Blue preview card with formatted math
3. ✅ "Vérifier la réponse" button (teal color)
4. ✅ Attempt counter (e.g., "Tentative 1 / 3")
5. ✅ Colored feedback alerts (green/red/orange)
6. ✅ Success message with points earned
7. ✅ Input becomes disabled after success
8. ✅ Progress bar at top increases

---

## 🔗 Related Documentation

- [PHASE1_COMPLETE.md](PHASE1_COMPLETE.md) - Full Phase 1 documentation
- [TODO.md](TODO.md) - Complete roadmap
- [PROJECT_MASTER_GUIDE.md](PROJECT_MASTER_GUIDE.md) - Full project overview

---

**Last Updated:** February 7, 2026
**Status:** Ready to test! 🚀
