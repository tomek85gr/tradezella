Experiment 05 -- Alternative Import for Unsupported Brokers
==========================================================

Hypothesis - Provide a Fallback for Unsupported Brokers
-------------------------------------------------------

By offering a clear alternative import method (CSV/screenshot) when a user selects an unsupported broker, we will prevent them from hitting a dead end and reduce drop-offs at this key onboarding step.

-   **Reach**: All users who connect with a broker not on our supported list.

-   **Impact**: 4/10

-   **Confidence**: 9/10

-   **Effort**: 1/10

🎯 Problem Addressed
--------------------

During onboarding, users are prompted to connect their trading broker. If their broker is not on our list of direct integrations, they are currently met with a hard stop. This creates a frustrating experience and leads to immediate abandonment for a segment of our potential user base.

💡 Solution Hypothesis
----------------------

When a user selects or searches for a broker that is not supported, we will proactively display a helpful message with an alternative path forward. This turns a dead end into a solvable problem, retaining the user in the onboarding flow.

### Implementation Steps:

1.  **Detect Selection:** Trigger a new UI element when a user's chosen broker is not in our supported list.

2.  **Display Message:** Show a clear, concise message: "No worries! Your broker isn't supported for direct import, but you can add your trades with a simple CSV file or screenshot."

3.  **Link to Instructions:** Provide a clear call-to-action that links to a help document or a simple UI for manual file uploads.

📈 Primary Metric
-----------------

-   **Onboarding Step Completion Rate**: Increase the percentage of users who successfully move past the "Connect Broker" step.

⚠️ Risks & Mitigation
---------------------

-   **Risk: High Friction Manual Process.** The manual import process (CSV/screenshot) might be cumbersome, leading to user frustration or churn later on.

    -   **Mitigation:** We must ensure the manual import process is as streamlined and user-friendly as possible. This experiment's success relies on the quality of the fallback experience. We will also use this as a signal to prioritize which broker integrations to build next.

✅ Prioritization & Rollout Strategy
-----------------------------------

This is a targeted fix for a known user pain point. While the overall reach is smaller, it's a crucial improvement for user retention and demonstrates that we cater to all traders.