# RandomUser APP

In this application, I have used the following tools

- javascript
- HTML
- CSS
- React

### Description

My goal in this project is to receieve a data from an end point and display the results using react components. I have used "https://randomuser.me/" api to generate a random user. Although I should mention the general look of the web page wasn't my priority.

- [Click for the demo](https://kemal-byte.github.io/RandomUserAPI/)

### ScreenShots

![Alt text](/gif/img1.png)
![Alt text](/gif/img2.png)

### Gained experience

When sending props to another child component, if you use spread operator {...whateverprop} then
the child component will have an one big object filled with many other object. Then you need to decompose it
and push them into a new array so you can iterate over them. It is possible but not easy to work with objects inside of a another object.
The easier method is to sending props as a key value then destructure it when receiving.

- Here how the parent component should send a prop "AddedUser save={save}"
- Here is how the child component should receieve props. const AddedUser = ({ save }) => {}
  This method is waayyyy easier to get around with.
