
## Here's how to navigate this deployment. 
- Access to git Repo: https://github.com/tomek85gr/tradezella
- Application working URL: https://tradezella-git-main-tomasz-pietas-projects.vercel.app/

#### The implementation is as close as possible to the actual sign up flow in order to isolate the experiment implementation. 

##### Note: I have removed the step of "How you heard about us" for the sake of simplicity for this task. 

## Experiments
- The default experiment that I prioritised is 01_watch_demo. I tried to replicate the current onboarding as much as possible so that we can isolate the impact of my experiment.


- The second is 02_trust_reinforcement. You can view the second experiment by enabling the feature flag in the url **/?exp_add_social_proof_signup=true**

- 03_steamline_sign_up is about removing more steps from the sign up so there are no visuals to it. Just a hypothesis to test wether reduced steps can increase conversion.

- 03_Unsupported_brokers_reassurance can be activated using the feature flag in the url **/?exp_growth_unsupported_broker_reassurance=true**

- 04_email_follow_up_drop_offs can we viewed in the figma file. I am simply reusing some of the templates you already have and changed the copy and CTA - link to figma file: https://www.figma.com/design/PNzUt1NEN3rgIXnR2xNxTM/ActiveNomads---accommodation---co-working?node-id=707-2

- 05_money_back_guarantee can be activated online using the feature flag 
**/?exp_growth_money_back_guarantee=true**

## Notes
For the rest I just added the hypothesis without proceeding to any designs or code implementation. They are very simple low hanging fruits that I would love to test. Some of these ideas are coming from my experience of over 2000+ experiments at Booking.com and Miro.com.


Thank you for this opportunity!