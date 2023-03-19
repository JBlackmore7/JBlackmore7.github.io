# Work Flow

- Work Flow is a work order web application that lets users create work orders, update them with new information, and view the completed order.
- Live demo [_here_](https://jblackmore7.github.io/).

## Inspiration

- This project was inspired by an old paper work order system that was used at a previous employer. They had to be written by hand which made it difficult to read some employees hand writing, the actual order itself changed hands multiple times which resulted in missing orders and confusion, there was only finite space on the paper work order which sometimes led to multiple orders being used for the same job. I could honestly go on for a while about the downsides of paper work orders -- suffice it to say I was very passionate about digitizing this process.

## Technologies Used

- HTML
- CSS
- Vanilla Javascript

## Features

- Work Flow was originally set up using a fake rest API that handled all of the data on localhost, but I decided to use localStorage instead to highlight my application. The old fetch requests and response handling are commented out in my source code if you want to check them out.
- I have starter data hard coded into the project but all work orders that you create and manipulate will remain on the application until you clear your browsing data/cookies and website data.

## Using the Application

- First, you create a work order and fill in all of the applicable information. The new work order is passed on to the admin section where it waits for a "job number" or labour code.
- In the admin section, the admin team would generate a labour code in their ERP software and enter it in the field provided (you can add any number at all). After a job number has been added to the work order, it will be automatically be moved to the "Service" section of the application.
- A technician would go into the Service section, select a job from the list, and fill out their part of the work order including their notes and all parts used on that particular job.
- Once the job is completed, it gets moved to the History section where the entire contents of the work order will be viewable.

## Room for Improvement

Room for improvement:

- Refactoring -- multiple JS files/functions that could be condensed and too much hard coded HTML.

To do:

- The ability to edit a work order in any state

## Acknowledgements

- Many thanks to @samwise-nl for guiding me through this process and giving me tons of ideas and best practice methods!
