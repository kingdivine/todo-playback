const messages = [
  "Looks like you're all done for today!",
  "No todos to display.",
  "Go ahead and add some tasks...",
  "Not much to see here...",
  "All done!",
  "No tasks left. Yay!",
  "0 tasks left. Whoop whoop!",
  "No items to show.",
];

export const generateRandomMessage = () =>
  messages[Math.floor(Math.random() * messages.length)];
