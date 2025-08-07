Experiment 07 -- Immersive SaaS Background in Sign-Up
====================================================

Hypothesis - Create End to End Sign Up flow with SaaS Background
--------------------------------------------------

By replacing the static background in the sign-up flow with a blurred, dynamic view of the actual product, we can create a sense of "fear of missing out" (FOMO) and immersion, making users feel closer to the product and more likely to complete the sign-up and payment steps.
This idea comes purely from a successful experiment I ran at Miro increasing sign ups by 3% - I am just curious if we can replicate this success at TradeZella ;) 

-   **Reach**: All new users entering the sign-up flow.

-   **Impact**: 3/10

-   **Confidence**: 4/10

-   **Effort**: 2/10

🎯 Problem Addressed
--------------------

The current sign-up flow is a generic, static web form. It's visually and emotionally disconnected from the powerful, data-rich product that users are signing up for. This disconnect fails to build excitement or anticipation, making it easier for a user to abandon the process.

💡 Solution Hypothesis
----------------------

Inspired by patterns seen in other successful SaaS companies like Miro, we hypothesize that showing the product in the background will make the value proposition feel more tangible and immediate. The user is visually surrounded by the goal, which can create a powerful psychological nudge to overcome the final hurdles of sign-up and payment.

### Implementation Steps:

1.  **Create Background Asset:** Record or create a short, looping video or high-quality image of the most visually appealing part of the product dashboard.

2.  **Apply Effect:** Apply a blur or overlay to the asset to ensure the sign-up form elements remain the focus and are clearly legible.

3.  **Implement Background:** Replace the current static background with the new dynamic asset.

📈 Primary Metric
-----------------

-   **Sign-Up → Subscription Conversion Rate**: The primary goal is to see if this visual change can lift the overall conversion rate.

⚠️ Risks & Mitigation
---------------------

-   **Risk: Increased Page Load Time.** Image/Video assets can be heavy and might slow down the initial page load, potentially causing some users to drop off before the form even appears.

    -   **Mitigation:** We must aggressively optimize the background asset for file size and performance to ensure it has a negligible impact on load times.

-   **Risk: Distraction.** The background animation could be distracting for some users, making it harder for them to focus on filling out the form.

    -   **Mitigation:** The blur effect is key. The background should be ambient and not compete for the user's primary attention.

-   **Risk: Pattern Mismatch.** The success of this pattern at Miro may not be replicable for our product and audience.

    -   **Mitigation:** This is why we test. The low effort makes it a worthwhile experiment to validate if this pattern holds true for our use case.