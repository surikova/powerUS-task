## How to run tests
Tests are created with Cypress. To run them use the command:
   - `npm test` from the root folder of the project
   - or using Docker `docker run -it -v $(pwd):/e2e -w /e2e cypress/included:12.12.0` from the root folder of the project

## Test description
`freeSignUp.spec.ts` verifies that sign up into the learning platform using mobile view works as expected

**Step 1** Open main page https://staging.powerus.de/

*Expected result:* 
   - Main page must be opened in the mobile view
   - Page must contain:
      - button with free registration 'Jetzt kostenlos registrieren'
      - block with the open positions
      - block with the companies
      - block with the CTA button
      - footer

**Step 2** Click 'Lernplattform' in the footer

*Expected result:* 
   - Learn platform page must be opened in the mobile view
   - New URL must contain `/lernplattform`
   - Block with the platform description must be present

**Step 3** Click register button with the 'Jetzt kostenlos anmelden' text

*Expected result:* 
   - Course registration process must be initiated in the mobile view
   - New URL must contain `/registrieren/kurse`
   - Progress bar must be 20% full

**Step 4** Select profession by clicking the corresponding tile

*Expected result:* 
   - Next step with the education selection must appear in the mobile view
   - New URL must contain `?step=education`
   - Progress bar must be 60% full

**Step 5** Select education by clicking the corresponding tile

*Expected result:* 
   - Next step with the registration form must appear in the mobile view
   - New URL must contain `?step=registration-form`
   - Progress bar must be 80% full

**Step 6** Enter valid random data to the form fields

*Expected result:* 
   - All fields must behave correctly
   - Data must be accepted

**Step 7** Submit registration form

*Expected result:* 
   - Next step with the phone number field must appear in the mobile view
   - New URL must contain `?step=phone-number`
   - Progress bar must be 100% full

**Step 8** Enter valid random phone number to the phone number field

*Expected result:* 
   - The field must behave correctly
   - Phone number must be accepted

**Step 9** Submit phone number form

*Expected result:* 
   - New page with the list of courses must appear in the mobile view
   - New URL must contain `kurse/alle`

**Step 10** Check courses and their titles

*Expected result:* 
   - The amount of courses on the page must be greater than 0
   - Each course must have a title

## Notes
- The tests can be more precise with the specific requirements. For example, if the amount of courses that should be present on the course page and their titles are known, test can be designed with the specific expected result
- On the phone form submission I have to add `cy.wait()`, because application loaded all necessary elements slower than cypress was taking actions
