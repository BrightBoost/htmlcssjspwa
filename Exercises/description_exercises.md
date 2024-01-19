## HTML Exercise 1

**Objective:** Create a basic HTML page that showcases your personal profile.

**Note:** If this is a bit too new for you to do from scratch, you can take the easy or medium folder to get started from.

**Requirements:**

1. **Document Structure:** 
   - Start with the `<!DOCTYPE html>` declaration.
   - Use the `<html>`, `<head>`, and `<body>` tags to structure your document.

2. **Title:** 
   - Set the title of your page to your name using the `<title>` tag within the `<head>` section.

3. **Header Section:** 
   - Use the `<header>` tag.
   - Include a main heading (`<h1>`) with the text "Welcome to my first page".
   - Add a paragraph (`<p>`) hinting at contact details.
   - Provide two email links (`<a>`) with different email addresses. Use the `mailto:` attribute. Each email address should be wrapped in a `<p>` tag with an `id` of "email".

4. **About Section:** 
   - Use an `<h2>` heading with the text "About Me".
   - Add a paragraph (`<p>`) describing a brief introduction about yourself.

5. **Image:** 
   - Include an `<h2>` heading with the text "Here is a photo I found on google".
   - Embed an image (`<img>`) from an online source. Make sure to use a direct link to the image.

6. **Hobbies Section:** 
   - Use an `<h2>` heading with the text "Hobbies".
   - List at least five hobbies using an unordered list (`<ul>`) and list items (`<li>`).

7. **Table Section:** 
   - Use an `<h2>` heading with a humorous text about creating a table.
   - Create a table (`<table>`) with a border. It should have:
     - A header row with two headings (`<th>`).
     - Two additional rows (`<tr>`) with two cells (`<td>`) each.

8. **Closing:** 
   - Add a closing paragraph (`<p>`) with a farewell message.

**Note:** While CSS is not the focus of this exercise, remember that it can be added later to style and enhance the appearance of your page.


## CSS Exercise 2

**Objective:** Apply CSS styles to enhance the appearance of your personal profile page created in the previous exercise.

**Requirements:**

1. **Page Background:** 
   - Set the background color of the entire HTML document to `#FFC001`.

2. **Body Styling:** 
   - Add a padding of `20px` around the body content.
   - Set the background color of the body to `#FFF`.
   - Use the `Verdana` font for the body text.

3. **Headings:** 
   - Style both `<h1>` and `<h2>` with:
     - `Verdana` font.
     - Bold font weight.
     - Centered text alignment.
     - Padding of `25px` on the top and bottom.
     - Text color set to `#000`.
   - Add a hover effect to both `<h1>` and `<h2>` that changes their background color to `#FFC001`.

4. **Name Paragraph:** 
   - Position it `10px` higher than its normal position.
   - Add rounded corners on the top left and top right with a radius of `15px`.

5. **Email Paragraph:** 
   - Float it to the right with a margin of `5px` on the right.
   - Add a padding of `5px` on the top.
   - Set the font size to `16px` and use the `Verdana, sans-serif` font.
   - Set the text color to `#ffffff`.

6. **Div Elements:** 
   - Add a padding of `20px`.
   - Give them rounded corners with a radius of `5px`.
   - Add a dotted yellow border with a radius of `3px`.

7. **Footer:** 
   - Position it relative to its normal position.
   - Set its height to `50px` and float it to the right.
   - Use a background color of `#000000`.
   - Set the font to `Verdana, sans-serif`, size `14px`, centered text alignment, and color `#ffffff`.
   - Position the paragraph inside the footer relative to its normal position and add a padding of `15px` on the top.

8. **Image:** 
   - Give the image rounded corners with a dotted yellow border of `3px`.

9. **List Items and Table:** 
   - For now, no specific styles are provided for list items (`<li>`) and tables (`<table>`). Feel free to experiment and add your own styles!

**Note:** Ccheck the visual output in a web browser.


## JavaScript Exercise 3

This exercise introduces basic interactivity to your profile page. After implementing the steps, when a user types a message in the input box and clicks the "Show Alert" button, an alert should pop up displaying the entered message.

**Objective:** Implement a basic JavaScript function that triggers an alert when a button is clicked.

**Requirements:**

1. **Input Box:** 
   - Add an input box (`<input>`) to your profile page where users can type a message.
   - Set the `type` attribute to "text" and provide an `id` for easy reference, e.g., `id="userMessage"`.

2. **Button:** 
   - Add a button (`<button>`) next to the input box.
   - Set its label to "Show Alert".
   - Implement the `onclick` event on this button to call a JavaScript function, e.g., `onclick="displayAlert()"`.

3. **JavaScript Function:** 
   - Write a JavaScript function named `displayAlert()`.
   - This function should retrieve the value from the input box and display it in an alert.
   - If the input box is empty, the alert should display a default message like "No message entered!".

4. **Embedding the Script:** 
   - You can either embed the JavaScript directly in the HTML using the `<script>` tag or link to an external `.js` file.

**Sample JavaScript Code:**

```javascript
function displayAlert() {
    var message = document.getElementById("userMessage").value;
    if (message) {
        alert("You entered: " + message);
    } else {
        alert("No message entered!");
    }
}
```

## Extra exercise: HTML CSS JS

In this exercise, we're going to combine all the learnt techniques and elaborate on the shapes demo we've just seen.

1. **Expand the options**
- Add a fourth option for color
- Add a fourth option for shape (e.g. oval)
- Bonus: Change the select dropdown into an html type="color" input field

2. **Extra Extra Challenge**
- Add one input box that is only for numbers
- Adjust the shape so that the width and or height are of that number, depending on the shape

## PWA

Replicate the demo shown in class to turn your profile page into a PWA.