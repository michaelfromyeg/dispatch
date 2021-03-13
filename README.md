# htg

Hack the Globe 2021 solution repository.

## About

### TODOs

- [ ] As a user, I can anticipate I will in danger and create a trigger for the police
- [ ] As a user, even if I forget to signal danger, I can still use the app to quickly generate an alert
- [ ] As a user, I can contact different groups (e.g., RCMP, tribal police, police versus family and friends) depending on my situation
- [ ] As a user, I should be able to send what data I feel comfortable sending(e.g., name), and always include longitude, latititude

Figma [TBD](https://michaeldemar.co).

### Figma TODOs (user FE only)

Onboarding
* First time, set your pin
* Set settings
* Then main screen

Main screen
* Logo
* Button
* Navigation bar (to settings)

Main screen (button pressed)
* As above, but button is a different color

Main screen (button released after pressed)
* Pin page is on the screen (pop-up)
* Timer

Main screen (post button released, call made)
* Notification that help is on the way

Main screen (post button released, call cancelled)
* Notification that call has been cancelled
* Back to main screen defaults

Settings
* Two-tiers, one is "locked" as emergency services; other is family and friends (this is customizable)
* Choose a message to send to family and friends
* Toggle location for family and friends
* Customize length of time
* Set your pin

### API TODOs

POST a button press

POST a (made or cancelled) call

GET log of past calls

TODO investigate how to store settings locally

POST user

PUT user (updating settings)

GET user

### Dashboard TODOs

* Fetch all logs
* Render in table
* Filter, paginate, sort
* Map with pinned locations (longitude and latitude)


### "Above and Beyond" TODOs

* Other way of creating a dispatch without the button, while phone is locked
* Voice assistants, some other smart technology
* Activate video and voice on dispatch

### Background

TODO

## Usage

### Installation

TODO

### Development

TODO
