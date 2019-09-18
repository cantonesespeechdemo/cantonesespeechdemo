//This module  monitors the display of the data that are pushed to the website as the video is played
function display(data, nodes) {
    //Get the accuracy of the row (e.g. google) by comparing to the original transcript
    function getCurrentAccuracy(pastArr) {
        const currentTotal = pastArr.length;
        let correct = 0;
        pastArr.forEach((word,index) => word == data.transcript.array[index]? correct+=1:correct+=0);
        const accuracy = parseFloat(((correct/currentTotal)*100).toFixed(1));
        return accuracy;
    }
    //Turn the accuracy value into html that can be renderred
    function getAccuracyhtmls(pastArrs) {
        const htmlArrs = pastArrs
        .map(Arr => getCurrentAccuracy(Arr))
        .map((accuracy,index,arr)=> {
            return accuracy >= arr[0] && accuracy >= arr[1] && accuracy >= arr[2]? `<p class="high"> Accuracy: ${accuracy}% </p>`:`<p> Accuracy: ${accuracy}% </p>`});
        return htmlArrs[0] == `<p> Accuracy: NaN% </p>`? ['','',''] : htmlArrs;
    }
    //Get part of the html to be inserted into the 'right' grid 
    function getRighthtmls(objects) {
        const [htmlpastcu,htmlpastGoogle,htmlpastHuman] = objects.map(
            function(object) {
                return object.array
                .map((word,index,arr) => word == data.transcript.array[index]? `<div class="text ${object.id}">${word}</div>`:`<div class="text ${object.id} wrong">${word}</div>`)
                .slice(0,currentNum+1)
                .join('');
            }
        )
        return htmlpastcu+htmlpastGoogle+htmlpastHuman;
    }

    //Use the functions defined above to get the html needed and push the content to the website
    function pushContent(){
        const [pastcu, pastGoogle, pastHuman] = [data.cu, data.google, data.human].map(object => object.array.slice(0,currentNum+1));
        [nodes.cuAccuracy.innerHTML,nodes.googleAccuracy.innerHTML,nodes.humanAccuracy.innerHTML] = getAccuracyhtmls([pastcu,pastGoogle,pastHuman]);

        const htmlallTranscript = data.transcript.array.map(word => `<div class="text transcript"><span>${word}</span></div>`).join("");
        const html = htmlallTranscript+getRighthtmls([data.cu, data.google, data.human]);


        nodes.transcriptBox.innerHTML = data.transcript.array[currentNum] || ' ';
        setTimeout(() => {
            nodes.cuBox.innerHTML = data.cu.array[currentNum] || ' ';
            nodes.googleBox.innerHTML = data.google.array[currentNum] || ' ';
            nodes.humanBox.innerHTML = data.human.array[currentNum] || ' ';
            nodes.right.innerHTML = html;
        }, 500);
    }
    
    //Call the pushContent function whenever there is a timeupdate by the video
    nodes.video.addEventListener('timeupdate', pushContent);
}