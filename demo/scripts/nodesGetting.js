//This module get the nodes from the html document

async function nodesGetting() {
    const nodes = {
        transcriptBox: document.querySelector('.display_transcript p'),
        cuBox: document.querySelector('.box.cu p'),
        googleBox: document.querySelector('.box.google p'),
        humanBox: document.querySelector('.box.human p'),
        right: document.querySelector('.right'),
        cuAccuracy: document.querySelector('.accuracy.cu'),
        googleAccuracy: document.querySelector('.accuracy.google'),
        humanAccuracy: document.querySelector('.accuracy.human'),
        remarks: document.querySelectorAll('.remarks'),
        video: document.querySelector(".vid.subject"),
        wave: document.querySelector(".vid.wave")
    }
    return nodes
}