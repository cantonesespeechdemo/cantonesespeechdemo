//This is the script that calls functions from other scripts

//------------------------------Define global variables----------------------------------------
//the fps of the videos 
const fps = 29.969;
//The following changes automatically with the HTML document
const[subject,block,channel] = document.querySelector(".hide").textContent.split(',');
//Geting the unused blocks 
const UnusedBlocks = ["B1","B2","B3"];
const blockIndex = UnusedBlocks.indexOf(block);
UnusedBlocks.splice(blockIndex,1)

//These two update as the video is played
let currentFrame;
let currentNum;

//This function calls the other functions from the other scripts
async function asyncWrapperFunction() {
    await htmlRouting();
    await videoRouting();
    const data = await dataProcessing();
    const nodes = await nodesGetting();
    dynamic(data,nodes);
    display(data,nodes);
}

//Run the function
asyncWrapperFunction()
