# Description
An app where users can create, store, and share walkthroughs for building coding projects.  Users can include screenshots as well as instructional text that will be shared with other users in sequential order to help them build projects of their own.  In addition, users can store their own walkthroughs for quick reference when working on thier own projects. 

# User Stories
as a user I want to... 
1.  see the steps needed to complete a project listed in the correct order so I understand the actions I need to take. 
2. see images that reflect what I would see while working through the project so I know what to expect when working on my own. 
3. see instructional text along with images in order to clarify what action needs to be taken. 
4. create my own walkthroughs so I can reference them whenever I need them.
5. store walkthroughs so they are easy to find and update, or use as a reference. 
6.  use images, text, gifs, and videos when creating a walkthrough, so I can create guides that are easy to understand and cover all the necessary information. 
7. trust the accuracy of walkthroughs so I can easily know which ones are reliable
8.  provide and receive feedback on walkthroughs I create to make sure they are as accurate as possible

# MVP
 - Users can upload images and store those images in a specified order (1, 2, 4)
 - Users can view images in the correct order (1, 2, 4) 
 - Users can add text to accompany specific images (3)
 - Users can access their own walkthroughs to update them or delete them (5)

 # Stretch Goals
 - Allow for inclusion of videos and gifs (6)
 - Allow users to drag and drop text to be displayed over the images (3)
 - Allow users to tag walkthroughs and search by tag (5)
 - Allow users to comment on walkthroughs posted by others (7, 8)
 - Allow user to rate walkthroughs posted by others (7, 8)
 
# Technologies used
- React
- React Bootstrap
- Django
- Django Rest Framework 
- AWS 
- JWT Authentication

# Components
- Home
    -  Walkthrough
        - Walkthrough Edit
        - Walkthrough Display
- Login

# Models 
- User
    email
- Walkthrough
    Name
    Slides
- Slide
    image
    help text
    Walkthrough


