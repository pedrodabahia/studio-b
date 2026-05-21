reate / refine the Studio.b landing page into a luxury, high-conversion digital experience.

BRAND:
Studio.b

FOUNDER:
Ysabella Novais

POSITIONING:
A premium marketing agency that blends elite design, strategic intelligence and measurable business growth.

MISSION:
The website must feel expensive, exclusive, cinematic, modern and unforgettable.

Do NOT build a generic agency site.
Build a brand experience.

-----------------------------------
CORE OBJECTIVE
-----------------------------------

Transform Studio.b into a brand perceived as elite.

Less focus on “services”.
More focus on:
- authority
- exclusivity
- impact
- desire
- conversion

Users must feel:
“This agency is on another level.”

-----------------------------------
VISUAL IDENTITY
-----------------------------------

Color Palette:
- Black #000000
- Gold Yellow #FFD700
- Dark Gray #1A1A1A
- White for contrast

Style:
- Elegant
- Bold
- Minimal
- Futuristic
- Sophisticated

Typography:
- Headlines: Syne / Archivo Black / Bold geometric sans serif
- Body: Inter

-----------------------------------
LOADING EXPERIENCE (CINEMATIC INTRO)
-----------------------------------

Create a premium loading sequence.

Background:
Pure black.

Animation:

- A yellow custom dot cursor slowly draws the contour of the letter B.
- A loading counter rises from 0% to 100%.
- Clean bold typography centered.

Main message:

O design seduz.
A estratégia transforma.
A Studio.b lidera.

When it reaches 100%:

- Text scales dramatically
- Breaks / fragments
- Transitions into Hero Section

Must feel luxurious and smooth.

Use GSAP for this sequence.

-----------------------------------
CUSTOM CURSOR FIX (IMPORTANT)
-----------------------------------

Current cursor animation is broken on mobile.

Fix professionally:

Desktop only:
Enable custom cursor only for pointer:fine devices.

Mobile / tablet:
- Disable custom cursor completely
- Hide dot / follower
- Use native touch behavior
- No flicker
- No lag
- No overflow

Use:
window.matchMedia("(pointer: fine)")
or touch detection.

-----------------------------------
PAGE STRUCTURE
-----------------------------------

1. HERO SECTION

Headline:
Onde estética premium encontra resultados concretos.

Subheadline:
10 anos de excelência criativa somados a 5 anos de gestão estratégica.
Construímos marcas que não apenas crescem — elas dominam.

CTA:
Descubra seu potencial de escala →

Button should scroll to quiz/contact.

-----------------------------------

2. ABOUT / AUTHORITY SECTION

ID: #about

Use black & white portrait of Ysabella Novais.

Yellow subtle motion accents.

Copy:

10 anos refinando marcas.
5 anos guiando resultados.

Ysabella Novais une visão criativa, experiência prática e estratégia de mercado para empresas que decidiram sair do comum.

-----------------------------------

3. SERVICES SECTION

ID: #services

Title:
Ecossistema de Crescimento

Cards:

- Branding Premium
Identidades visuais que comunicam valor antes da primeira palavra.

- Marketing Estratégico
Gestão orientada a posicionamento, aquisição e escala.

- Experiência Digital
Sites e interfaces que transformam visitas em oportunidades reais.

-----------------------------------

4. PORTFOLIO / RESULTS SECTION

ID: #portfolio

Title:
Marcas que evoluíram com estratégia

Include:

- Before / After branding
- Metrics cards
- Real projects
- Mockups
- Elegant hover animations

-----------------------------------

5. PROCESS SECTION

Title:
Como elevamos marcas

4-step timeline:

1. Diagnóstico
2. Posicionamento Estratégico
3. Execução Criativa
4. Crescimento & Otimização

Animated on scroll.

-----------------------------------

6. QUIZ / CONVERSION HOOK

Yellow block section.

Headline:
Sua marca acelera… ou freia?

Text:
Responda 5 perguntas rápidas e descubra o nível atual do seu posicionamento digital.

CTA:
Iniciar Diagnóstico Gratuito

-----------------------------------

7. EXCLUSIVITY SECTION

Title:
Não trabalhamos com qualquer projeto

Text:
Escolhemos marcas prontas para crescer.

3 cards:

- Não para quem busca barato
- Não para quem rejeita estratégia
- Não para quem quer urgência sem visão

This section must feel bold and premium.

-----------------------------------

8. TESTIMONIALS

Title:
O que acontece após escolher a Studio.b

Elegant testimonial cards:

- Name
- Business niche
- Result

-----------------------------------

9. FAQ

Title:
Perguntas que marcas sérias fazem

Accordion:

- Quanto custa?
- Quanto tempo leva?
- Atendem online?
- Estratégia está inclusa?

-----------------------------------

10. FINAL CTA

ID: #contact

Headline:
Sua marca pode continuar comum... ou crescer agora.

Button:
Solicitar Diagnóstico Estratégico

-----------------------------------

HEADER / NAVIGATION FIX (IMPORTANT)
-----------------------------------

Current menu is broken.

Fix links:

Serviço -> #services
Portfólio -> #portfolio
Sobre -> #about
Contato -> #contact

Use:

href anchors OR scrollIntoView smooth.

Enable:

html {
scroll-behavior:smooth;
}

Use:
scroll-margin-top:100px

Because fixed header exists.

-----------------------------------

MOBILE MENU
-----------------------------------

If mobile menu exists:

- clicking link closes menu
- scroll works perfectly
- no delay
- no glitch

-----------------------------------

UX DETAILS
-----------------------------------

- Active nav item while scrolling
- Hover transitions elegant
- Magnetic buttons
- Smooth parallax subtle
- Scroll reveal animations
- Staggered text animations
- Smooth easing

-----------------------------------

ANIMATION STACK
-----------------------------------

Use:

- GSAP = intro / premium transitions
- Framer Motion = section reveals
- Lenis = smooth scroll
- Optional Three.js = subtle futuristic particles

-----------------------------------

RESPONSIVE RULES
-----------------------------------

Perfect mobile experience:

- no overflow
- no broken layout
- full width buttons
- readable typography
- spacing optimized
- lighter animations on mobile

-----------------------------------

PERFORMANCE
-----------------------------------

Must be fast and premium.

Optimize:
- lazy images
- GPU transforms
- no animation jank
- lighthouse optimized

-----------------------------------

FINAL FEELING
-----------------------------------

This should feel like the website of a high-ticket elite agency.

Users should think:

“This brand is expensive.”
“This brand knows what it’s doing.”
“I want them.”

Site bom vende.
Site premium seleciona cliente.