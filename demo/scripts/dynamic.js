//This module monitors the dynamic interactions of the website

function dynamic(data,nodes){
    //Get the current corresponding frame from the video time
    function getVideoCurrentFrame() {
    currentFrame = this.currentTime * fps;
    }

    //Get the current corresponding word number from the sectioned frame
    function getVideoCurrentNum() {
        data.frameArr.forEach(
            function(section,index,arr) {
                if (section[0]<=currentFrame && arr[index+1][0]>currentFrame) {
                    currentNum = index;
                } else if (currentFrame < arr[0][0]) {
                    currentNum = undefined;
                } 
            }
        )
    }

    //Synchronize the wave and the subject video
    function syncVideos() {
        nodes.wave.currentTime=nodes.video.currentTime;
    }

    //Go to the corresponding word in the video by clicking on the transcript
    function goToWord(e) {
        console.log(e.target)
        if (e.target.parentElement.className.includes('transcript')) {
            const word = e.target.textContent;
            const index = data.transcript.array.indexOf(word);
            const startFrame = data.frameArr[index][0];
            const startTime = startFrame/fps;
            nodes.video.currentTime = startTime;
        }
    }
    
    //show remark boxes
    function showRemark(){
        const remark = this.querySelector('p');
        remark.classList.remove('hide');
    }
    //hide remark boxes
    function hideRemark(){
        const remark = this.querySelector('p');
        remark.classList.add('hide');
    }

    //Bind the above functions to the nodes with "addEventListener"
    nodes.video.addEventListener('timeupdate', getVideoCurrentFrame);
    nodes.video.addEventListener('timeupdate', getVideoCurrentNum);

    nodes.video.addEventListener('timeupdate', debounce(syncVideos));
    nodes.video.addEventListener('play',() => nodes.wave.play())
    nodes.video.addEventListener('pause',() => nodes.wave.pause())

    nodes.remarks.forEach(remark => remark.addEventListener('mouseenter',showRemark))
    nodes.remarks.forEach(remark => remark.addEventListener('mouseleave',hideRemark))
    nodes.right.addEventListener('click', goToWord)
}

