# Physio Map
Communicating fall risk to persons undergoing physical rehabilitation late in their life presents a unique challenge. Falls for Geriatric persons can result in serious injury and even fatality, presenting a dire need to motivate successful rehabilitation.
Using standardized data, this projects aims to create reference points for whether a patient remains at risk for falling based on how peers of similar age preformed on Geriatric Movement and Balance Assessments. By communicating these reference points patients through a patient-centered app, we hope to find better health outcomes pre and post evaluation (usually a period of 8 weeks).

![Phone Concentric](https://github.com/michael-fernandes/physio-map/blob/master/Resources/phone-concentric.png)
![Desktop Radar](https://github.com/michael-fernandes/physio-map/blob/master/Resources/desktop-radar.png)


## A Patient-Centered Design
We designed Physio Map as a boundary negotiating tool. The general idea is that the physical therapy practitioner will input test results into the UI. Once the tests are done the visuals can be used to communicate with users in two ways. One way using a radar (also known as a "spider") chart to compare pre and post rehabilitation evaluations. The second way using a concentric ring chart that shows relative risk of fall for either pre or post conditions. 

### Radar Chart vs Concentric
The idea including both charts is that is it gives patients both an idea of how much they need to improve and how much they have to improve. While the concentric chart allows a patient to see how much they have to improve to be out of the danger zone for a fall.
![Risk Legend](https://github.com/michael-fernandes/physio-map/blob/master/Resources/risk.png)



# Technology
This app is a front end app built in React. The radar chart chart uses React Chart.js 2 and the concentric chart uses a custom implemented component built with D3.js.

# Team
This project was a collaboration between Michael Fernandes (product developer), Marcus Johnson (Doctor in Physical Therapy Candidate) and Ellen McGough (Physical Therapy Faculty at the University of Washington).