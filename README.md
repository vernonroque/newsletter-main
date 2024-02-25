# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![desktop](./desktop-img.png)
![mobile](./mobile-img.png)

### Links

- Solution URL: [Solution URL here](https://github.com/vernonroque/newsletter-main.git)
- Live Site URL: [Live site URL here](https://newsletter-project-d27149.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

1. Height: 100% doesn't work if none of its ancestor containers don't have a fixed height

```css
.parent-container {
  height: 100%;
}
.child-container {
  height: 100%;
}
```

In this case, the child container won't extend 100% of its parent container because its parent container doesn't have a fixed height

2. When using a ternary operator in React, you have to make sure each option is within the same set of tags

```js
{
  !success ? (
    <>
      <h1></h1>
      <p></p>
    </>
  ) : (
    <h1>Hello</h1>
  );
}
```

### Useful resources

- [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) - This helped me review particular css properties
- [Chat GPT](https://chat.openai.com/) - This helped me understand why I was getting certain errors.

## Author

- Website - [Portfolio](https://developer-portfolio-8cc0c.web.app/)
- Frontend Mentor - [@vernonroque](https://www.frontendmentor.io/profile/vernonroque)
- LinkedIn - [linked in profile](https://www.linkedin.com/in/vernon-roque-84724235/)

## Acknowledgments

Thank you universe.
