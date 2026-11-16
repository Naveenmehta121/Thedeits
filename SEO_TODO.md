# SEO & Legal To-Do Checklist (SEO_TODO.md)

This file tracks all items, disclosures, and legal notices that require client confirmation or formal legal review. **No placeholders or invented facts have been added to the public live site.**

---

## 1. Legal Review & Compliance [TODO: legal review]

| Page | File | Item Requiring Legal Review | Status |
|---|---|---|---|
| `/privacy-policy` | `src/pages/PrivacyPolicyPage.tsx` | Comprehensive data processing, health intake handling, WhatsApp data transmission, and compliance with India's **Digital Personal Data Protection Act, 2023 (DPDP Act)**. | Marked `[TODO: legal review]` |
| `/terms` | `src/pages/TermsPage.tsx` | Consultation operating terms, 12-hour rescheduling notice window, 90-day emergency pause policy, and refund rules. | Marked `[TODO: legal review]` |
| `/medical-disclaimer` | `src/pages/MedicalDisclaimerPage.tsx` | Clarification of educational/lifestyle guidance, non-replacement of clinical medical diagnosis, requirement of physician supervision for chronic conditions, and emergency protocols (112). | Marked `[TODO: legal review]` |

---

## 2. Professional Credentials & Registration Numbers [TODO: confirm]

| Person | Item | Current State | To Confirm / Provide |
|---|---|---|---|
| **Dt. Radha Mishra** | Clinical Registration Number | Visible: `B.Sc., M.Sc. (Clinical Nutrition), CDE, IADWL` | State dietetic council registration number or CDE registry ID (e.g., RSSDI / IADWL member ID) for Person Schema. |
| **Dt. Surbhi Kumari** | Professional Registration Number | Visible: `B.Sc., M.Sc. (Food and Nutrition)` | Indian Dietetic Association (IDA) member number or state registration number for Person Schema. |

---

## 3. Business Location & Physical Address [TODO: confirm]

| Property | Current State | To Confirm / Provide |
|---|---|---|
| **Registered Business Address** | Virtual online practice across India (`areaServed: IN`) | Physical clinic, corporate office, or registered postal address (City, State, PIN) required by Google for Google Business Profile (GBP) and `MedicalBusiness.address` schema. |
| **Operating Hours** | Virtual video consultations by appointment | Standard operating consultation hours (e.g., Monday–Saturday 10:00 AM – 7:00 PM IST) for Schema. |

---

## 4. Taxation & Commercial Details [TODO: confirm]

| Item | Current Value | To Confirm / Provide |
|---|---|---|
| First Clarity Session | ₹699 | Confirm whether price is inclusive or exclusive of GST / payment gateway fees. |
| 4-Week Rhythm Reset | ₹4,999 | Confirm installment or EMI options if applicable. |
| 12-Week Sustained Care | ₹12,999 | Confirm whether lab test reimbursement/tie-ups apply. |

---

## 5. Domain & Hosting Configuration [TODO: confirm]

| Item | Observed Issue | Action Required in Vercel Dashboard |
|---|---|---|
| Apex HTTP 2-hop redirect | `http://thediets.in` issues two 308 redirects before reaching `https://www.thediets.in` | In **Vercel Dashboard > Project Settings > Domains**, edit `thediets.in` and select **"Redirect to www.thediets.in"** (Status: 301/308). This ensures Vercel's edge network performs the canonical redirect in a single hop for both HTTP and HTTPS. |

---

## 6. Claims Audit & Clinical Verifications [TODO: dietitian to confirm]

| Route | Content / Claim | Status / Source | Action Taken |
|---|---|---|---|
| `/online-dietitian-consultation` | Plan delivery within 24–48 hours | New (not in `siteConfig`) | Softened to "Following your session, you receive a personalized..." Marked `/* [TODO: dietitian to confirm delivery turnaround time] */`. |
| `/online-dietitian-consultation` | Virtual consultations offer equal clinical depth | New comparison claim | Softened to "provide thorough clinical assessments while allowing greater real-world adherence." |
| `/pcos-diet-plan` | Menstrual cycle predictability within 8–12 weeks | 8–12 weeks in `faqs[10]`, but cycle predictability is an outcome promise | Softened to emphasize individual variability and supporting long-term hormonal well-being alongside medical care. Marked `/* [TODO: dietitian to confirm cycle regularity timeframe] */`. |
| `/pcos-diet-plan` | "A substantial majority" have insulin resistance | General medical claim | Softened to "Many individuals with PCOS" and marked `/* [TODO: dietitian to confirm clinical phrasing] */`. |
| `/weight-loss-diet-plan` | Safe weight loss rate of "0.5 to 1 kg per week" | New (not in `siteConfig.faqs[10]`) | Removed numerical rate. Replaced with site's philosophy: steady, individualized progress, healthy habit formation, and inch loss. Marked `/* [TODO: dietitian to confirm numerical rate recommendations] */`. |
| `/weight-loss-diet-plan` | "No meal replacement shakes, powders, detox teas" | New expansion | Re-aligned to exact site copy: "no starvation, fad diets, or expensive fat-burner supplements" (`siteConfig.faqs[9]`). |
| All meta descriptions | "Metabolic reset" / "Metabolic wellness" | Found in `focusAreas[0]` tag | Removed from meta descriptions on `/weight-loss-diet-plan`, `/online-dietitian-consultation`, and `/programs`. Replaced with neutral phrasing ("lifestyle habits", "everyday health"). |

---

## 7. Thyroid Diet Plan Claims Audit [TODO: dietitian to confirm]

| Statement / Claim on `/thyroid-diet-plan` | On Existing Site? | Status & Action Taken |
|---|---|---|
| Diet does not replace medical treatment prescribed by doctor | **Yes** (in `MedicalDisclaimerPage`) | Kept clearly stated; removed "levothyroxine" and any administration instructions. |
| Micronutrients: selenium (walnuts, seeds), zinc (pumpkin seeds, lentils), iodine (iodized salt) | **No** | Softened to everyday kitchen staples; marked `/* [TODO: dietitian to confirm micronutrient focus: selenium, zinc, iodine food choices] */`. |
| Cruciferous vegetables (cabbage, cauliflower, broccoli): goitrogens deactivated by boiling/cooking | **No** | Softened to everyday cooked Indian meals; marked `/* [TODO: dietitian to confirm therapeutic guidelines on goitrogenic food preparation and cooking] */`. |
| Protein provides amino acid tyrosine for thyroid support | **No** | Softened to general protein distribution; marked `/* [TODO: dietitian to confirm tyrosine protein recommendations for thyroid support] */`. |
| Gut motility, sluggish digestion, soothing spices (jeera, ajwain) | **No** (general gut health exists in `focusAreas[3]`) | Kept as gentle culinary advice; marked `/* [TODO: dietitian to confirm gut motility and digestive care protocols] */`. |
| TSH, Free T3, Free T4 routine thyroid panel preparation | **No** (general lab reports exist in `goodToHaveReady`) | Kept as optional preparatory suggestion; marked `/* [TODO: dietitian to confirm routine lab recommendations] */`. |

---

## 8. Diabetes Diet Plan Claims Audit [TODO: dietitian to confirm]

| Statement / Claim on `/diabetes-diet-plan` | On Existing Site? | Status & Action Taken |
|---|---|---|
| Nutritional planning works alongside—never in place of—medical treatment | **Yes** (in `MedicalDisclaimerPage`) | Kept clearly stated; removed "insulin therapy or oral hypoglycemic agents". |
| Type 2 diabetes and pre-diabetes lifestyle management | **Yes** (`siteConfig.faqs[11]`, `focusAreas[2]`) | Re-aligned with site copy. |
| Carbohydrate and protein pairing blunts glycemic surges | **No** | Softened to balanced thali eating; marked `/* [TODO: dietitian to confirm specific fiber and protein pairing protocols] */`. |
| Traditional whole millets (jowar, bajra, ragi) vs refined flours (maida) | **No** | Softened to traditional kitchen options; marked `/* [TODO: dietitian to confirm clinical phrasing for glycemic index recommendations] */`. |
| Certified Diabetes Educator specialized training & carbohydrate counting | **Partially** (CDE credential in `dietitians[0]`, carb counting is new) | Kept as background context on Dt. Radha Mishra; marked `/* [TODO: dietitian to confirm CDE scope description] */`. |
| High dietary fiber (methi seeds, flaxseeds, leafy greens) | **No** | Softened to general kitchen staples; marked `/* [TODO: dietitian to confirm fiber recommendations] */`. |

---

## 9. Outcome Phrasing & Terminology Clean-Up Audit

| Term / Target | Occurrence Location | Site Status | Action Taken |
|---|---|---|---|
| `evidence-informed` | `/pcos-diet-plan`, `/thyroid-diet-plan`, `/weight-loss-diet-plan` | **New** | Replaced with neutral terms: *"structured"*, *"practical"*, *"personalised"*. |
| `evidence-based` | `/about` (line 68), `/diabetes-diet-plan` (line 277) | **Found in siteConfig bio** | Neutralized on new pages to *"clinical dietary guidance"* and *"practical approach"*. |
| `clinical consensus` | `/weight-loss-diet-plan` (FAQ 1) | **New** | Removed; replaced with individualized sustainable habit focus matching `faqs[10]`. |
| `steady blood sugar balance` | `/diabetes-diet-plan` meta description | **Outcome phrase** | Replaced with *"Home-cooked Indian meals planned around your routine."* (140 chars). |
| `supporting metabolic nutrition` | `/thyroid-diet-plan` meta description | **Outcome phrase** | Replaced with *"Home-cooked Indian meal frameworks planned alongside your treating doctor's care."* (137 chars). |
| `weekly reviews` | `/how-it-works` meta description | **Not in howItWorksSteps** | Replaced with *"tailored meal plans and follow-up support."* (147 chars) matching `howItWorksSteps[3]`. |
| `supporting hormonal balance` | `/pcos-diet-plan` meta description | **Outcome phrase** | Replaced with *"Home-cooked Indian meal frameworks designed around your daily lifestyle and routine."* (139 chars). |
| `guarantee` | `MedicalDisclaimerPage.tsx` | **Mandatory disclaimer** | Retained strictly in negative disclaimers: *"The Diets does not guarantee specific numerical weight loss or clinical biomarker outcomes."* |

---

## 10. Platform, Geography & Timing Claims Audit (Final Cleanup)

| Statement / Claim | Location | In siteConfig? | Action Taken |
|---|---|---|---|
| "within a day" / "within 24 hours" | `/book` meta description (`seoConfig.ts`, `prerender.mjs`) | **No** (only in original `BookPage.tsx` intro copy) | Removed from meta description; replaced with *"Simple intake form and easy appointment scheduling."* (145 chars). |
| "Google Meet or Zoom" | `/contact` FAQ, `/about`, `/terms`, `/online-dietitian-consultation`, `llms.txt`, schema | **No** (`siteConfig` specifies *"private 1-on-1 video calls"* / *"secure link"*) | Removed third-party platform names; standardized to *"private 1-on-1 video calls"* matching `siteConfig.faqs[0]` verbatim. |
| "Global Indian Diaspora" / "global clients" / "internationally" | `/contact`, `/about`, `/online-dietitian-consultation`, `llms.txt` | **No** (`siteConfig` specifies *"from anywhere in India"*) | Neutralized to *"Serving clients across India"* and *"all states and cities across India"*. |
| "within 24–48 hours" plan turnaround | `public/llms.txt` | **No** (`siteConfig.faqs[2]` specifies *"clear, written notes after each session"*) | Replaced with *"Receive clear written meal plan notes after each session"*. |
| BreadcrumbList on 404 page | `/404` schema | **No** (404 is an error route) | Removed BreadcrumbList entity from `/404` schema; preserved `noindex, nofollow` and absent canonical tag. |

---

## 11. Asset Optimization & Performance Audit (Phase 6)

1. **Unreferenced Large PNG Migration**:
   - The following 7 unreferenced raster PNG files (totalling ~24 MB) were moved from `public/` into `assets-source/` to prevent shipping unused assets to production:
     - `hero-bg.png` (11.23 MB)
     - `hero-duo.png` (2.46 MB)
     - `radha-mishra.png` (2.44 MB)
     - `duo-editorial.png` (2.38 MB)
     - `image_23_hd.png` (2.31 MB)
     - `surbhi-kumari.png` (2.22 MB)
     - `image_23.png` (0.97 MB)
   - Active production images in `public/` use modern WebP (`hero-bg.webp`, `hero-bg-mobile.webp`, `radha-mishra.webp`, `surbhi-kumari.webp`, `duo-editorial.webp`) with average size <200 KB.
2. **Font Optimization**:
   - `display=swap` configured in Google Fonts link stylesheet.
   - `preconnect` with `crossorigin` configured for `https://fonts.googleapis.com` and `https://fonts.gstatic.com`.
3. **Image Attributes**:
   - Explicit `width` and `height` dimensions present on all `<img>` tags (`Hero.tsx`, `Header.tsx`, `Footer.tsx`, `EditorialPortrait.tsx`).
   - `loading="lazy"` and `decoding="async"` added to all below-the-fold images (including `Footer.tsx` and `EditorialPortrait.tsx`).
   - `fetchpriority="high"` and `loading="eager"` applied exclusively to the Hero LCP background picture.
4. **Bundle Composition**:
   - Main client chunk (`dist/assets/index-D82N_Kax.js`, ~805 KB uncompressed / 251 KB gzip) contains essential runtime libraries: React 18, React DOM, React Router v7, Framer Motion, GSAP, Lenis Smooth Scroll, Supabase JS, React Hook Form, and Zod.
   - Dynamic `React.lazy()` route splitting was evaluated and deliberately avoided because synchronous `renderToString` in the static SSG prerender pipeline would throw errors or render empty `Suspense` fallbacks, wiping out pre-rendered HTML for search bots and causing hydration mismatches for GSAP/Lenis scroll positioning. Current static prerendering guarantees 100% crawlable raw HTML across all 17 routes.

---

## 12. Nutrition Statements Fill-Only Audit (General Educational Guidance)

All clinical and nutrition statements flagged with `[TODO: dietitian to confirm ...]` have been updated strictly using safe, general nutritional guidance. Per instructions, these are marked: **"filled with general guidance, not professionally reviewed"**. 

Business-fact items (delivery turnaround, registration numbers, address, operating hours, legal policies) are deliberately **kept open** with their hidden comments preserved.

| Location | Original Statement | Updated Statement | Status |
|---|---|---|---|
| `/thyroid-diet-plan` (Pillar 1) | Natural food sources of selenium, zinc, iodine | *"Thyroid health depends on a few nutrients, including iodine, selenium and zinc, which most people get from a varied diet that includes iodised salt, pulses, nuts and seeds. Avoid starting supplements unless your doctor advises it."* | **Filled with general guidance, not professionally reviewed** |
| `/thyroid-diet-plan` (Pillar 2 & FAQ 1) | Goitrogens deactivated by boiling/cooking | *"Vegetables such as cabbage and cauliflower are healthy in normal cooked portions as part of a balanced diet. If you have concerns about them, ask your doctor."* | **Filled with general guidance, not professionally reviewed** |
| `/thyroid-diet-plan` (Pillar 3) | Protein provides tyrosine building block | *"Including protein at each meal, such as dal, curd, paneer, eggs, fish or chicken, supports overall nutrition."* (removed "tyrosine") | **Filled with general guidance, not professionally reviewed** |
| `/thyroid-diet-plan` (Pillar 4) | Sluggish digestion & soothing spices | *"Fibre, enough fluids, regular meals and light daily movement support digestive comfort. Spices such as jeera and ajwain are traditionally used in Indian kitchens."* | **Filled with general guidance, not professionally reviewed** |
| `/thyroid-diet-plan` (FAQ 4) | Routine thyroid panel preparation (TSH, Free T3, Free T4) | *"Keep your recent reports handy. Reading them and making any medicine decision is for your treating doctor; we plan meals around your routine and your doctor's advice."* | **Filled with general guidance, not professionally reviewed** |
| `/diabetes-diet-plan` (Pillar 1) | Transitioning from maida to whole grains/millets | *"Whole grains and millets such as jowar, bajra and ragi contain more fibre than refined flour (maida)."* | **Filled with general guidance, not professionally reviewed** |
| `/diabetes-diet-plan` (Pillar 2) | Carbohydrate and protein pairing blunts glycemic surges | *"Eating carbohydrate foods together with vegetables, protein and fibre generally causes a slower rise in blood sugar than eating refined carbohydrates alone."* | **Filled with general guidance, not professionally reviewed** |
| `/diabetes-diet-plan` (Pillar 3) | High dietary fiber intake (methi, flaxseeds) | *"Fibre-rich foods include leafy greens, pulses, vegetables, methi and flaxseeds."* | **Filled with general guidance, not professionally reviewed** |
| `/diabetes-diet-plan` (CDE section & FAQ 2) | CDE carbohydrate counting & glycemic control | *"A Certified Diabetes Educator is trained in diabetes education and lifestyle support, helping translate nutrition guidance into practical meals that fit your family routine. Nutrition works alongside, never in place of, your doctor's treatment and monitoring."* (removed carb counting claim) | **Filled with general guidance, not professionally reviewed** |
| `/pcos-diet-plan` (Section 2) | Many individuals experience underlying insulin resistance | *"Insulin resistance is common in PCOS, though it does not affect everyone. In insulin resistance, cells do not respond effectively to insulin, causing the pancreas to produce more."* | **Filled with general guidance, not professionally reviewed** |
| `/pcos-diet-plan` (FAQ 3) | Menstrual cycle regularity timeframe | *"Changes in cycles vary widely from person to person. Discuss any concerns with your gynaecologist or doctor. Sustained nutrition and healthy daily habits support metabolic and overall well-being over time alongside your doctor's care."* | **Filled with general guidance, not professionally reviewed** |
| `/weight-loss-diet-plan` (FAQ 0) | Safe weight loss rate per month | *"Gradual loss is generally considered safer and easier to sustain than rapid loss. Many guidelines suggest around 0.5 to 1 kg per week for most adults, but individual needs vary and your plan is personalised. Rather than chasing extreme numbers, our clinical dietitians focus on steady progress, healthy habit formation, and noticeable inch loss that you can comfortably maintain for life."* | **Filled with general guidance, not professionally reviewed** |
| `/online-dietitian-consultation` (FAQ 1) | Virtual consultations offer greater real-world adherence than clinic visits | *"Virtual consultations are convenient and let you apply guidance in your own kitchen. You can share updates on your meals, discuss adjustments for dining out or travel over WhatsApp, and speak with your dietitian from home without travelling to a clinic."* | **Filled with general guidance, not professionally reviewed** |
| `/online-dietitian-consultation` (Line 37) | Plan delivery turnaround time | Kept generic: *"After your session you receive written notes and your custom meal framework..."* | **Kept open** (hidden JSX comment preserved; business fact) |
| `/contact` (Line 33) | Standard weekday and weekend appointment hours | Kept generic: *"Consultations are scheduled by mutual appointment across morning, afternoon, and evening slots..."* | **Kept open** (hidden JSX comment preserved; business fact) |
| `/privacy-policy` | Registered business address, DPDP Act review | Placeholder comments preserved | **Kept open** (business/legal fact) |
| `/terms` | Rescheduling/cancellation windows, IP policy, emergency pause terms | Generic drafts with legal review comments | **Kept open** (legal review) |
| `/medical-disclaimer` | Medical safety review | Generic draft with legal review comments | **Kept open** (legal review) |



