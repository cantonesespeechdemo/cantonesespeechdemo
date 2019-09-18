//This module contains functions to extract the raw data from the 'resources' directory and turn them into a single 'data' output in the end

//-----------------helper functions---------------------------------------------------------------------------------------------------------------------------------------
//extract input the word indices and the words from the text file - [ [(word),(index)], [(word),(index)], [(word),(index)]...]
function wordIndexFileToCouple(file) {

    const couple =
    file.toUpperCase()
    .toUpperCase().replace(/ +\n/g,'\n').replace(/\r\n/g,'\n') //Remove impurities (if any)
    .replace(/ +/g,' ') //Remove the extra spaces between the words and indices
    .split('\n')
    .filter(row => !(row.includes(UnusedBlocks[0]) || row.includes(UnusedBlocks[1])) ) //Remove the unused blocks 
    .map(str => str.replace(`${block}_`,'').split(' ')) //Remove the block information in the indices, then split the words and the indices

       return couple;
}

//Extract the cu output into an object with corresponding wordindex - { (index):(word), (index):(word), (index):(word) ... }
function cuToObject(testResult) {

    function removeX(str) { 
        while(str.charAt(0)==="X") {
            str = str.substr(1);
        }
        return str;
        }
    
    const couple = testResult.split(`"test/test/test_UASPCH-XX${subject}-ih.1/decode/lattices/UASPCH-XX${subject}-XXX${block}${subject}-XUA${subject}-ih_`)
    .filter(section => section.includes(channel))
    .map(string => string.split(channel))
    .map(couple => [couple[0],couple[1].split(" ")[2]])
    .map(couple => [couple[1].toUpperCase(),removeX(couple[0])]);
    
    reducer = (accumulator, currentCouple) => ({...accumulator,[currentCouple[1]]:currentCouple[0]});
    
    return couple.reduce(reducer,{});
}

//Turn googleAPI result to an Array
function googleToArr(textFile){
    const array =  textFile
    .split("\n")
    .map(str => str.split(" ").filter(couple => couple !==""))
    .filter(couple => !(couple == ''||couple == null))
    .map(fragment => {
        if (fragment.length == 2) {
            fragment.push(" ");
        }
        return fragment;
    })
    .map(fragment => fragment.slice(-1)[0])
    return array
}

//Turn human interpration to an array
function humanToArr(file){
    const array =
    file.toUpperCase() 
    .toUpperCase().replace(/ +\n/g,'\n').replace(/\r\n/g,'\n') //Remove impurities (if any)
    .split('\n');
    return array;
}
//Turn the frame index to an array
function frameIndexToArr(frameIndex) {
    const array = frameIndex.split(`${subject}_${block}_`)
    .slice(1)
    .map(str => str.split(/\n|\t/))
    .map(arr => [parseInt(arr[1]),parseInt(arr[2])]);
    return array;
    }







//-----------------The function dataProcessing will be called in script.js to output the data---------------------------------------------------------------------------------------------------------------------------------------
async function dataProcessing() {
    //Getting files
    let wordIndexTextFile = await getTextFile("./resources/shared/word_index.txt");
    let cuTextFile = await getTextFile(`./resources/${subject}${block}${channel}/text/cuOutput.txt`);
    let frameIndexTextFile = await getTextFile(`./resources/${subject}${block}${channel}/text/${subject}_${block}_frame_index.txt`);
    let googleTextFile = await getTextFile(`./resources/${subject}${block}${channel}/text/googleOutput.txt`);
    let humanTextFile = await getTextFile(`./resources/${subject}${block}${channel}/text/humanOutput.txt`);
    
    //Backup files stored in js format are to be used if the text files are not avaliable due to web security restriction when fetching local files
    if (wordIndexTextFile == undefined){wordIndexTextFile = wordIndexTextFile_backUp};
    if (cuTextFile == undefined) {cuTextFile = cuTextFile_backUp};
    if (frameIndexTextFile == undefined) {frameIndexTextFile = frameIndexTextFile_backUp};
    if (googleTextFile == undefined) {googleTextFile = googleTextFile_backUp};
    if (humanTextFile == undefined) {humanTextFile = humanTextFile_backUp};
    
    //Call the help functions above to process data
    const indexArr = wordIndexFileToCouple(wordIndexTextFile).map(couple => couple[1]);
    const transcriptArr = wordIndexFileToCouple(wordIndexTextFile).map(couple => couple[0]);
    /*
    const cuObject = cuToObject(cuTextFile);
    const cuArr = indexArr.map(index => cuObject[index]);
    */
   
    const cuArr = humanToArr(cuTextFile);
    const googleArr = humanToArr(googleTextFile);
    const humanArr = humanToArr(humanTextFile);

    const frameArr = frameIndexToArr(frameIndexTextFile);
    
    //Put the above output into a single output 'data'
    const data = {
        index: indexArr,
        frameArr: frameArr,

        transcript: {id:'transcript', array:transcriptArr},
        cu: {id:'cu', array:cuArr},
        google: {id:'google', array:googleArr},
        human: {id:'human', array: humanArr},
    }
    return data    
}