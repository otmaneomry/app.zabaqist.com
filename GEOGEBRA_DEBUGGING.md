# GeoGebra Function Not Showing - Debugging Guide

## Issue
The ln(x) function should be visible in the GeoGebra viewer at the "Graphique" tab of the logarithmic functions course, but it's not appearing.

## What I've Added

### 1. Enhanced Logging
Added comprehensive console logging to track GeoGebra initialization:

```typescript
appletOnLoad={(api) => {
  console.log('Initializing logarithmic function graph...')

  try {
    api.evalCommand('f(x) = ln(x)')
    console.log('Function f(x) = ln(x) created')

    api.setColor('f', 32, 176, 161)
    console.log('Function color set to teal')

    // ... more commands with logging

    console.log('GeoGebra initialization complete!')
  } catch (error) {
    console.error('Error initializing GeoGebra:', error)
  }
}}
```

### 2. Error Handling
Wrapped all GeoGebra API calls in try-catch blocks to catch any errors.

## How to Debug

### Step 1: Open the Course
1. Run `npm run dev`
2. Navigate to http://localhost:3001/courses/fonctions-logarithmiques
3. Click on the "Graphique" tab

### Step 2: Open Browser Console
1. Press F12 (or Cmd+Option+I on Mac)
2. Go to the Console tab
3. Look for these messages:

**Expected messages:**
```
GeoGebra applet loaded, API available
Initializing logarithmic function graph...
Function f(x) = ln(x) created
Function color set to teal
Point A (1, 0) added
Point B (e, 1) added
GeoGebra initialization complete!
```

### Step 3: Check for Errors

**Possible Error Scenarios:**

#### Scenario A: No messages at all
- **Problem**: GeoGebra applet isn't loading
- **Solution**: Check network tab for failed requests to GeoGebra CDN

#### Scenario B: "GeoGebra applet loaded" but no other messages
- **Problem**: `appletOnLoad` callback isn't firing
- **Solution**: The react-geogebra library might have changed its API

#### Scenario C: Error messages in console
- **Problem**: API commands are failing
- **Possible causes**:
  - API not ready when commands execute
  - Invalid command syntax
  - GeoGebra version incompatibility

## Alternative Solutions

### Option 1: Use GeoGebra Material ID
Instead of drawing programmatically, use a pre-made GeoGebra worksheet:

```typescript
<GeogebraViewer
  appName="graphing"
  width={800}
  height={600}
  material_id="your-material-id-here"  // Create this on geogebra.org
  showAlgebraInput={true}
  showToolBar={true}
/>
```

**How to get a material_id:**
1. Go to https://www.geogebra.org/graphing
2. Create your ln(x) graph
3. Save it (you'll need a GeoGebra account)
4. Get the material ID from the URL (e.g., `https://www.geogebra.org/m/abc123` → `material_id="abc123"`)

### Option 2: Add a Delay Before Commands
The API might not be fully ready when `appletOnLoad` fires:

```typescript
appletOnLoad={(api) => {
  setTimeout(() => {
    console.log('Executing delayed commands...')
    api.evalCommand('f(x) = ln(x)')
    api.setColor('f', 32, 176, 161)
    // ... rest of commands
  }, 1000) // Wait 1 second
}}
```

### Option 3: Use Direct iframe Embedding
Bypass react-geogebra and use direct GeoGebra embedding:

```typescript
<iframe
  src="https://www.geogebra.org/classic/your-material-id"
  width="800"
  height="600"
  style={{ border: 'none' }}
  allowFullScreen
/>
```

### Option 4: Check GeoGebra API Version
The react-geogebra package might be using an older API. Check the library:

```bash
npm list react-geogebra
```

Current version installed: (check package.json)

## Manual Testing in GeoGebra

To verify the commands work:
1. Go to https://www.geogebra.org/graphing
2. In the input field at the bottom, type: `f(x) = ln(x)`
3. Press Enter
4. You should see the logarithmic curve appear

If this works manually but not programmatically, the issue is with the API integration.

## What to Check in Console

Run these commands in browser console after GeoGebra loads:

```javascript
// Check if applet exists
console.log(window.ggbApplet)

// Try to get the API
const api = window.ggbApplet
if (api) {
  console.log('API found!')

  // Try to execute command manually
  api.evalCommand('f(x) = ln(x)')

  // Check if object was created
  console.log('Object created:', api.exists('f'))
}
```

## Common Issues and Fixes

### Issue 1: Function Creates But Isn't Visible
**Cause**: Viewing window doesn't include the function range
**Fix**: Set viewing window explicitly:

```typescript
api.setCoordSystem(-2, 10, -5, 5) // xMin, xMax, yMin, yMax
```

### Issue 2: Points Show But No Function
**Cause**: Function name 'f' might be reserved or conflicting
**Fix**: Use a different name:

```typescript
api.evalCommand('logarithm(x) = ln(x)')
```

### Issue 3: Everything Else Works Except Color
**Cause**: Color needs RGB values 0-255
**Fix**: Already using correct format (32, 176, 161 = teal)

## My Recommendation

**Try this updated code** in [app/courses/fonctions-logarithmiques/page.tsx:347](app/courses/fonctions-logarithmiques/page.tsx#L347):

```typescript
<GeogebraViewer
  appName="graphing"
  width={800}
  height={600}
  showAlgebraInput={true}
  showToolBar={true}
  appletOnLoad={(api) => {
    // Wait for applet to be fully ready
    setTimeout(() => {
      console.log('GeoGebra delayed initialization starting...')

      try {
        // Set coordinate system first
        api.setCoordSystem(-1, 8, -3, 3)
        console.log('Coordinate system set')

        // Create the function
        const result = api.evalCommand('f(x) = ln(x)')
        console.log('evalCommand result:', result)

        // Check if function was created
        const exists = api.exists('f')
        console.log('Function f exists:', exists)

        if (exists) {
          // Set color
          api.setColor('f', 32, 176, 161)
          api.setLineThickness('f', 4)
          console.log('Function styled')

          // Add points
          api.evalCommand('A = (1, 0)')
          api.setPointStyle('A', 3) // Circle
          api.setPointSize('A', 5)

          api.evalCommand('B = (e, 1)')
          api.setPointStyle('B', 3)
          api.setPointSize('B', 5)

          console.log('All objects created successfully!')
        } else {
          console.error('Function f was not created!')
        }
      } catch (error) {
        console.error('GeoGebra initialization error:', error)
      }
    }, 1500) // Increased delay to 1.5 seconds
  }}
/>
```

## Next Steps

1. **Check browser console** for the log messages
2. **Report what you see** - copy/paste any error messages
3. **Try the alternative solutions** if logging shows errors
4. **Consider using a material_id** - this is the most reliable method

## Files Modified

- [components/math/GeogebraViewer.tsx](components/math/GeogebraViewer.tsx) - Added logging and error handling
- [app/courses/fonctions-logarithmiques/page.tsx](app/courses/fonctions-logarithmiques/page.tsx#L347-L382) - Enhanced GeoGebra initialization with console logging

## Testing Checklist

- [ ] Browser console shows "GeoGebra applet loaded"
- [ ] Console shows "Initializing logarithmic function graph..."
- [ ] Console shows "Function f(x) = ln(x) created"
- [ ] No error messages in console
- [ ] GeoGebra viewer appears on page
- [ ] Can interact with GeoGebra (zoom, pan)
- [ ] Function ln(x) is visible as a curve
- [ ] Points A and B are visible

If any of these fail, note which one and we can debug further!
