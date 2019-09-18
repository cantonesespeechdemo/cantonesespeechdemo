//This module add template html files to the demo htmls, for example, adding a standard nav_bar (navigation bar) to all M12B2M3.html, F04B2M3.html, M12B2M3.html.
async function htmlRouting() {
    //Get the wrapper div from the demo html
    const wrapper = document.querySelector('.wrapper')
    //Fetch html templatess
    let nav_bar = await getTextFile("./templates/nav_bar.html")
    let main = await getTextFile("./templates/main.html")
    let detail_wave = await getTextFile("./templates/detail_wave.html")
    let detail = await getTextFile("./templates/detail.html")
    let line = await getTextFile("./templates/line.html")

    //Backup files stored in js format are to be used if the html files are not avaliable due to web security restriction when fetching local files
    if (nav_bar == undefined | main == undefined | detail_wave == undefined | detail ==undefined | line == undefined) {
        [nav_bar,main,detail_wave,detail,line] = templatesBackUp()
    };
    
    let templates = [nav_bar,main,detail_wave,detail,line]

    //Concatenate the html templates and the demo html
    templates.forEach(template => wrapper.innerHTML+=template)
}

async function videoRouting() {
    //Get the video div from the demo html
    const video = document.querySelector(".vid.subject");
    const wave = document.querySelector(".vid.wave")
    //Set the corresponding video by knowing <subject>,<block> and <channel> from the demo html (e.g <div class="hide">M14,B2,M3</div> in M14B2M3.html)
    video.innerHTML = 
    `<source src="./resources/${subject}${block}${channel}/others/${subject}-${block}-DV-1.mp4" type="video/mp4"> </video>`
}
