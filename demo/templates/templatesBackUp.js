//This is just a backup for the html files in js format
function templatesBackUp() {
    templates = {
        nav_bar: `<header>
        <h1>CUHK SEEM</h1>
        <h2>Dysarthric Speech Recognition</h2>
    </header>
    
    
    <nav>
        <div>
            <a href="./S006B2M3.html">Demo 1 (Spinocerebellar Ataxia)</a>
        </div>
        <div>
            <a href="./S015B2M3.html">Demo 2 (Unknown CP)</a>
        </div>
        <div>
            <a href="./S030B2M3.html">Demo 3 (Spinocerebellar Ataxia)</a>
        </div>
    </nav>`,
        main: `<div class="main">
        <div class="display_vid">
            <video class="vid subject" controls webkit-playsinline="true" playsinline="true"></video>
        </div>
        <div class="display_transcript">
            <h4>Transcript</h4>
            <p></p>
        </div>
        <div class="display_box">
            <div class="box cu">
                <h4>CUHK System</h4>
                <p></p>
            </div>
            <div class="box google">
                <h4>Google API</h4>
                <p></p>
            </div>
            <div class="box human">
                <h4>Human</h4>
                <p></p>
            </div>
        </div>
        <div class="display_text">
            <div class="left">
                <div class="left_transcript">
                    <div class="remarks">
                        <span>[?]</span>
                        <p class="hide">There are 255 words in total. Click on an underlined word to go to the
                            corresponding time in the video.</p>
                    </div>
                    <h5>Original transcript</h5>
                    <div class="accuracy transcript"></div>
                </div>
    
                <div class="left_cu">
                    <h5>CUHK System</h5>
                    <div class="accuracy cu"></div>
                </div>
    
                <div class="left_google">
                    <div class="remarks">
                        <span>[?]</span>
                        <p class="hide">The speech recognition results were obtained here:
                            https://cloud.google.com/speech-to-text/</p>
                    </div>
                    <h5>Google API</h5>
                    <div class="accuracy google"></div>
                </div>
    
                <div class="left_human">
                    <div class="remarks">
                        <span>[?]</span>
                        <p class="hide">Human recognitions were carried out by some other people who had not seen the word
                            list in advance. They were encouraged to recognize as many words as possible to the best of
                            their abilites.</p>
                    </div>
                    <h5>Human</h5>
                    <div class="accuracy human"></div>
                </div>
            </div>
            <div class="right">
            </div>
        </div>
    
    </div>`,
        detail_wave: `<div class="detail_wave">

    </div>`,
        detail: `<div class="detail">

        <p></p>
      </div>`,
        line: `<div class="line one">
        <div class="black_line"></div>
        <div class="black_line"></div>
    </div>
    
    <div class="line two">
        
    </div>
    
    <div class="line three">

    </div>`    
    };
    return [templates.nav_bar, templates.main, templates.detail_wave, templates.detail, templates.line];
}