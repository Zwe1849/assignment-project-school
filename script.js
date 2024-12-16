var bg = ['https://imgcdn.stablediffusionweb.com/2024/4/3/4d08d5c6-9394-4f24-acee-ee23c6739730.jpg' , 'https://t4.ftcdn.net/jpg/06/21/41/47/360_F_621414713_noHRPq0h5ieIy4YHpnQRZwhk27Bhe7vv.jpg']
document.querySelector("#bg1").addEventListener("click", function()
{
    document.querySelector("#background_image img").src= bg[0];
})
document.querySelector("#bg2").addEventListener("click", function()
{
    document.querySelector("#background_image img").src= bg[1];
})

// const button = document.getElementById('playButton');
const audio = document.getElementById('audio');

// button.addEventListener('click', function() {
//     audio.play();
// });

const Audio = document.querySelector(".audio");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

btn.addEventListener('click',()=>{
    Audio.src = "./Underthese.mp3";
})

btn2.addEventListener('click',()=>{
    Audio.src = "";
})

let computermove = "";

     function pickComputerMove() {
    const randomnumber = Math.random();

        if (randomnumber >= 0 && randomnumber < 1 / 3) {
          computermove = "rock";
        } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
          computermove = "Paper";
        } else {
          computermove = "scissors";
        }

        return computermove;
      }

    function pickplayermove(playermove) {
        computermove = pickComputerMove();
        if (playermove === "rock") {
          if (computermove === "rock") {
            result = "tie";
          } else if (computermove === "Paper") {
            result = "you LOSE";
          } else {
            result = "you Win!";
          }
        } else if (playermove === "paper") {
          if (computermove === "rock") {
            result = "You Win!";
          } else if (computermove === "Paper") {
            result = "Tie";
          } else {
            result = "You LOSE";
          }
        } else if (playermove === "scissors") {
          if (computermove === "rock") {
            result = "You LOSE";
          } else if (computermove === "Paper") {
            result = "You Win!";
          } else {
            result = "Tie";
          }
        }

        alert(
          `You picked ${playermove}. Computer picked ${computermove}. ${result}.`
        );
      }
    