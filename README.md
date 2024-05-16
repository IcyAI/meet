#Objective
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

#Key Features:
- Filter Events by City.
- Show/Hide Event Details.
- Specify the Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

#Cloud Hosting/Serverless Functions
This project will use Google OAuth as an Authorization server. The project will also utilize AWS Lambda as the serverless Function provider.
AWS Lambda will retrieve information from Google's protected API Calendar and return it to the React App. 

#Website Link
https://icyai.github.io/meet/

#Install
1. Clone Project
2. Run npm Install (To download dependency)
3.  For local host run npm start
   
#Stories

###As a user, I should be able to filter events by city, so that I can know what events are happening in a given city.

- Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
- When the user selects a city (e.g., “Berlin, Germany”) from the list;
- Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

###As a user, I should be able to show/hide event details, so that I can know what the details of an event are.

- Given the user finds an event that they want to learn more about
- When the user clicks the button to display more details
- Then the user should see more details about the event.

###As a user, I should be able to specify the number of Events, so that I can know how many events are going on.

- Given the user is looking at a specific city
- When the user sees numbers next to all the events
- Then the user should be able to tell how many events are going on.


###As a user, I should be able to use the app when offline, so I can use the app when I'm not connected to the internet.

- Given the user does not have internet/cellar connection
- When the user opens the app;
- Then the user should see a list of upcoming events.


###As a user, I should be able to create a shortcut to my home screen, so I can have easy access to the app.

- Given the user wants to create a shortcut to their home screen
- When the user accesses operating system details to create a shortcut
- Then the user should be able to add a shortcut to their home screen.

###As a user, I should be able to see charts displaying visuals of event details, so I can better understand the event.

- Given the user wants to know more details about an event
- When the user clicks on the button to display more details
- Then the user should see visuals about the event explaining what the event is.
