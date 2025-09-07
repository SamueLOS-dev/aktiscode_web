# Zhrnutie zmien v projekte

Tento dokument sumarizuje hlavné zmeny a vylepšenia implementované v projekte AktisCode Web Application.

## 1. Oprava responzívnosti kontaktnej stránky
- **Súbor:** `src/pages/Contact.tsx`
- **Zmeny:** Upravený grid layout, padding, veľkosti textu, pridané zalomenie dlhého e-mailu (`break-all`) a menšie medzery pre mobilné zobrazenia. Taktiež boli upravené štýly tlačidla "Demo" pre mobilné zariadenia.

## 2. Skrytie odkazu na portfólio v navigácii
- **Súbor:** `src/components/Navigation.tsx`
- **Zmeny:** Odkazy na portfólio boli zakomentované v desktopovej aj mobilnej navigácii, čo umožňuje ich jednoduché obnovenie v budúcnosti.

## 3. Vytvorenie dynamickej demo podstránky
- **Súbory:** `src/pages/Demo.tsx`, `src/components/demo/DemoHeader.tsx`, `src/components/demo/InfoMessage.tsx`, `src/components/demo/BasicInfoSection.tsx`, `src/components/demo/ServiceSpecificFields.tsx`
- **Zmeny:**
    - Vytvorená nová podstránka `/demo` s formulárom na objednanie dema.
    - Formulár je dynamický a mení sa na základe výberu typu služby (Web, E-shop, AI automatizácia, Softvérové riešenie/Aplikácia).
    - Implementovaná validácia povinných polí s chybovými správami pod políčkami.
    - Pridaná informačná správa pre používateľa.
    - Rozdelenie logiky formulára do viacerých komponentov pre lepšiu modularitu a čitateľnosť kódu.

## 4. Optimalizácia navigácie na demo podstránku
- **Súbory:** `src/components/Navigation.tsx`, `src/components/Hero.tsx`, `src/components/FinalCTA.tsx`, `src/components/Contact.tsx`, a rôzne CTA tlačidlá v sekciách (`WebDevHero`, `ChatbotSection`, `AppHero`, atď.).
- **Zmeny:** Všetky odkazy smerujúce na `/demo` boli zmenené z `window.location.href` na komponent `<Link>` z `react-router-dom`, čo zabezpečuje okamžitú a plynulú navigáciu bez prekládky stránky.

## 5. Oprava chýb "Link is not defined"
- **Súbory:** `src/components/Hero.tsx`, `src/components/FinalCTA.tsx`, `src/components/Contact.tsx`
- **Zmeny:** Pridané chýbajúce importy `import { Link } from 'react-router-dom';` do uvedených komponentov, čím sa vyriešila chyba `ReferenceError: Link is not defined`.