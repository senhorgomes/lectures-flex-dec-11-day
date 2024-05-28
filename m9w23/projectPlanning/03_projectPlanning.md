Plans are worthless, but planning is everything. - Dwight D. Eisenhower

How useful is planning for our projects?
- Very crucial, if not the most important aspect of our project.

Prevents hefty modifications to your database, backend, frontend.

-> Techstack

Can we create a project without a plan? (Roadblocks, decision fatitgue)

* A simple app, restaurant ordering app - one restaurant

- Landing page
    - Details of the restaurant
    - Hours of operation
    - Pictures of the restaurant
    - Menu with pictures and prices
- Ordering page
    - You can order takeout
    - Menu with pictures and prices
    - Some way to process payments
- Reservation page

React, express, postgres

As I'm on the app, I have to constantly make decisions on the direction of the app.


Scope -> The end goal of my app. What do I want my app to accomplish

Solid vision for your app and half way through you come up with another feature.

- Users can order to dine-in reserve for our restaurant -> This can be a feature to be implemented
    at a later time v1.1
    - Is your database setup to even handle users?
    - Do we know the seating arrangement for the restaurant?
        - Does the seating arrangement change often?
        - How do we keep track of the seating arrangement?

Scope creep

Personal project/freelancing

Working for a company
-Boss/Team lead -> Planning, project management side
    - Company that handles client -> Features that you're working on are much bigger
        - You're mostly working on websites for clients from the ground up
        - You may be tasked to handle a page or two
    - Google/Netflix -> SCRUM
        - You're project already exists
        - Only thing you'll have plan is how to implement the feature/fix you are working on


* A simple app, restaurant ordering app - one restaurant
The Steps

1. List of things we want our app to do - User Stories

- User Stories will help us understand what our tech needs are.

As a user...

As a user, I want to be able to visit the restaurant website and know their hours of operation
As a user, I want to be able to order food for pick up
As a user, I want to be able to see what food options are available, and their prices
As a user, I want to be able to see what dietry options are available - Dairy-free, peanut-free, gluten-free, etc.
As a user, I want to see if there are any daily promotions available
As a user, I want to view my order
As a user, I want to be able to login, view my orders, past, and current
As a user, I want to be able to re-order my last order. Quick order

Features that we want our users to have in our app.

Divide which feature will be a part of the MVP - Minimal Viable Product
Stretch -> Something that we can integrate at a later time, or after the initial release

Do we want this app to be online or offline?

How much time do we have? 

- A month?
- A year?


Major features, always establish this first
- What type of app is this for? Mobile? Web? Android or iPhone?
- Online or offline?
- Will we have a community?

Do some research

2. Database/Flow

3. ERD
4. Routes (web app)
    -  /login - GET AND POST
    - /logout - POST
    - /register - GET AND POST
    - /order/:id - GET AND POST
    - /orders - GET -> To view all orders
    - /menu - GET -> To view all menu items
    - / - GET -> To view restaurant landing page and hours of operation

5. Wireframes(Figma, sketch.io, AdobeXD) - reduces decision fatigue -> figure out the placement of components now instead of later
    - Components, and how everything fits together
        - HTML structure
    - Mobile or website view
    - Flow of the app
6. Setup the Project structure(Establish our tech stack), and the naming conventions(Style-Guide)
    - Should we go with what we know? Or try something new? A new tech stack
    Something new?
    Learn something new, put yourself ahead of everyone else
    A new tech stack, takes away time from development

    Example:
    1 month
    - Planning - 1 week, Database - 1 week, Backend - 3 days, Frontend - 1 week and 4 days(for bugs)

    Something we know?
    Build it faster, fewer problems

    - Front end React? Backend Rails?
        Lookup on how to set it up
        Boilerplates
    - MERN (MongoDB, Express, React, Node)
    - Research about different tech stacks, and find different boilerplates
7. Setup Github Repo
8. Workflow and Tasks (Trello, Asana, Jira, Github)
9. Communication (Slack, Email, Discord, etc.)

- Weekly meetups (Scrums)
    - This is what I did the week prior, the day prior, or the previous sprint
    - This is the roadblocks I faced, and this is what I currently need help with
- Sprint - a length or period of time given to work on a given task