# Djondzo Website — Motion Rationale

The website uses restrained motion because it is a professional B2B school-management product.

## Where motion is used

### Hero entrance
Purpose: attention and first-load character.
Text rises 10px with opacity; product preview rises 14px and scales from 0.985. This runs once on page load.

### School flow
Purpose: explanation.
The connecting line draws across the sequence while nodes appear with a short stagger. The movement explains that one student record feeds several school workflows.

### Product tour
Purpose: state indication.
Changing the selected profile crossfades and shifts the panel by 8px so the content change is clear without feeling like a carousel.

### Buttons and links
Purpose: feedback.
Buttons use scale(0.98) on press. Arrow links move only a few pixels on pointer hover.

### Mobile navigation
Purpose: spatial continuity.
The menu enters from the header with a 6px translate and opacity change.

## What intentionally does not animate
- Numbers and financial data
- Blog reading surfaces
- Every section on scroll
- FAQ content with elaborate height choreography
- Navigation triggered from keyboard
- Decorative background elements

## Accessibility
`prefers-reduced-motion` removes transform-based entrance/reveal motion and keeps the interface immediately readable.
