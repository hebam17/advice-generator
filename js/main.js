// Get the elements
const adviceNum = document.getElementById("advice-num");
const adviceContent = document.getElementById("advice-content");
const generatorBtn = document.getElementById("generator");

// make the request
const adviceGenerator = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data.slip);
    // add the data the elements
    adviceNum.innerText = `# ${data.slip.id}`;
    adviceContent.innerText = `“${data.slip.advice}”`;
  } catch (err) {
    console.log(err);
  }
};
// excute the function on every refresh too
adviceGenerator();

// add event listener
generatorBtn.addEventListener("click", adviceGenerator);
