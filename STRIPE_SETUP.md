# Stripe Setup - Keep Stripe

Fees: 2.9% + 30c
$49 -> fee $1.72 net $47.28
$99 -> fee $3.17 net $95.83
$199 -> fee $6.07 net $192.93

Setup:
1. stripe.com -> create account for Ascension Systems LLC
2. Create Products: Starter $49, Growth $99, Pro $199 monthly recurring
3. Copy Price IDs to lib/pricing.ts
4. Add env: STRIPE_SECRET_KEY, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
5. API route app/api/checkout/route.ts creates checkout session -> redirects to Stripe
6. Webhook app/api/webhooks/stripe -> on payment creates data/clients.json entry -> sends welcome email via support@ forwarding
7. Test mode: Use stripe test cards, $0 real fees until live

Email: Namecheap Domain List -> efficiencyarchitects.online -> Manage -> Email Forwarding
Create:
support@efficiencyarchitects.online -> info@efficiencyarchitects.online
amplifi@efficiencyarchitects.online -> info@efficiencyarchitects.online
Catch-all *@efficiencyarchitects.online -> info@efficiencyarchitects.online

Form: Landing contact form saves to data/leads.json, auto-replies via Resend or Nodemailer using info@ credentials, webhook only if Talk to human clicked.

Free Preview: /free-campaign-preview - Enter business name + goal, generates 5-post campaign in 2 min using lib/content/generator.ts, shows with Redo buttons, CTA to Stripe checkout.

Images: Campaigns include images yes - AI generated via image_gen or user photo plus copy with creative direction. Not generic because Business Memory + 5-post framework + Voice Memory + Anti-Generic Guard.

Claim handling: Disclaimer footer - Designed to attract track inquiries bookings revenue, does not guarantee sales bookings customers, results vary, you approve everything.

Statistical backing: Best times increase bookings, campaigns around goals convert 3x vs random, our own proof 11 posts 132 clicks 19 trials $145 via data/income-report.json
