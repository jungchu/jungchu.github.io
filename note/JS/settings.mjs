const styleTemplate1 = document.createElement("template");
const styleTemplate2 = document.createElement("template");
const styleTemplate3 = document.createElement("template");

const tsizeTemplate_l = document.createElement("template");
const tsizeTemplate_m = document.createElement("template");
const tsizeTemplate_s = document.createElement("template");

const template = document.createElement("template");

styleTemplate1.innerHTML = ` 
    <style class="stylesheet">
        @import url("./CSS/content_topic1.css");  
        @import url("./CSS/settings_topic1.css");
    </style>`;
styleTemplate2.innerHTML = ` 
    <style class="stylesheet">
        @import url("./CSS/content_topic2.css");  
        @import url("./CSS/settings_topic2.css");
    </style>`;
styleTemplate3.innerHTML = ` 
    <style class="stylesheet">
        @import url("./CSS/content_topic3.css");  
        @import url("./CSS/settings_topic3.css");
    </style>`;

tsizeTemplate_l.innerHTML = ` 
    <style class="tsizestylesheet">
        @import url("./CSS/settings_tsize_l.css");
    </style>`;
tsizeTemplate_m.innerHTML = ` 
    <style class="tsizestylesheet">
        @import url("./CSS/settings_tsize_m.css");
    </style>`;
tsizeTemplate_s.innerHTML = ` 
    <style class="tsizestylesheet">
        @import url("./CSS/settings_tsize_s.css");
    </style>`;

template.innerHTML = `
    <style>
        @import url("./CSS/content.css");  
        @import url("./CSS/settings.css");
    </style>
    <div id="content00" class="content00">
    <div class="settings00">
        <div class="settings01">
            <p>設定</p>
        </div>
        <hr/>
        <div class="settings02">
            <p>主題</p>
            <form>
                <input type="radio" id="topic1" name="settings-topic" value="topic1"  >
                <label for="topic1">米棕</label><br/>
                <input type="radio" id="topic2" name="settings-topic" value="topic2" >
                <label for="topic2">粉橘</label><br/>
                <input type="radio" id="topic3" name="settings-topic" value="topic3" >
                <label for="topic3">灰籃</label><br/>
            </form>
        </div>
        <div class="settings03">
            <p>字型大小</p>
            <form>
                <input type="radio" id="tsize-large" name="settings-tsize" value="large"  >
                <label for="tsize-large">大</label><br/>
                <input type="radio" id="tsize-medium" name="settings-tsize" value="medium" >
                <label for="tsize-medium">中</label><br/>
                <input type="radio" id="tsize-small" name="settings-tsize" value="small" >
                <label for="tsize-small">小</label><br/>
            </form>
        </div>
        <hr/>
        <div class="settings04">
            <button id="settings-reset" type="reset" class="settings-btn">預設</button>
        </div>
    </div>
    </div>
`;

class Settings extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.whichTopic();
    }
    whichTopic(){
        const topic = localStorage.getItem("topic");
        const tsize = localStorage.getItem("tsize");

        if (topic == 1){
            this.shadowRoot.getElementById("topic1").checked = true;
            this.shadowRoot.appendChild(styleTemplate1.content.cloneNode(true));
        }else if( topic == 2 ){
            this.shadowRoot.getElementById("topic2").checked = true;
            this.shadowRoot.appendChild(styleTemplate2.content.cloneNode(true));
        }else if( topic == 3 ){
            this.shadowRoot.getElementById("topic3").checked = true;
            this.shadowRoot.appendChild(styleTemplate3.content.cloneNode(true));
        }

        if (tsize == "l"){
            this.shadowRoot.getElementById("tsize-large").checked = true;
            this.shadowRoot.appendChild(tsizeTemplate_l.content.cloneNode(true));
        }else if(tsize == "m"){
            this.shadowRoot.getElementById("tsize-medium").checked = true;
            this.shadowRoot.appendChild(tsizeTemplate_m.content.cloneNode(true));
        }else if(tsize == "s"){
            this.shadowRoot.getElementById("tsize-small").checked = true;
            this.shadowRoot.appendChild(tsizeTemplate_s.content.cloneNode(true));
        }
    }
    
    
    // 主題事件函式
    changeTopic1(){
        localStorage.setItem("topic",1);
        localStorage.setItem("fa_bars_color", "#767171");
        localStorage.setItem("fa_bars_color_hover", "#FFF1DA");

        const stylesheet_now = this.shadowRoot.querySelector(".stylesheet");
        const stylesheet_new = styleTemplate1;
        this.shadowRoot.replaceChild(stylesheet_new, stylesheet_now);
        location.reload();
    }
    changeTopic2(){
        localStorage.setItem("topic",2);
        localStorage.setItem("fa_bars_color","#FDF6F0");
        localStorage.setItem("fa_bars_color_hover","#5f5145");

        const stylesheet_now = this.shadowRoot.querySelector(".stylesheet");
        const stylesheet_new = styleTemplate2;
        this.shadowRoot.replaceChild(stylesheet_new, stylesheet_now);
        location.reload();
    }
    changeTopic3(){
        localStorage.setItem("topic",3);
        localStorage.setItem("fa_bars_color","#F7F2E7");
        localStorage.setItem("fa_bars_color_hover","#AFABAB");

        const stylesheet_now = this.shadowRoot.querySelector(".stylesheet");
        const stylesheet_new = styleTemplate3;
        this.shadowRoot.replaceChild(stylesheet_new, stylesheet_now);
        location.reload();
    }

    // 字型大小事件函式
    changeTsizeLarge(){
        localStorage.setItem("tsize","l");

        const tsizestylesheet_now = this.shadowRoot.querySelector(".tsizestylesheet");
        const tsizestylesheet_new = tsizeTemplate_l;
        this.shadowRoot.replaceChild(tsizestylesheet_new, tsizestylesheet_now);
        location.reload();
    }
    changeTsizeMedium(){
        localStorage.setItem("tsize","m");

        const tsizestylesheet_now = this.shadowRoot.querySelector(".tsizestylesheet");
        const tsizestylesheet_new = tsizeTemplate_m;
        this.shadowRoot.replaceChild(tsizestylesheet_new, tsizestylesheet_now);
        location.reload();
    }
    changeTsizeSmall(){
        localStorage.setItem("tsize","s");

        const tsizestylesheet_now = this.shadowRoot.querySelector(".tsizestylesheet");
        const tsizestylesheet_new = tsizeTemplate_s;
        this.shadowRoot.replaceChild(tsizestylesheet_new, tsizestylesheet_now);
        location.reload();
    }

    // 按鈕事件
    resetSettings(){
        localStorage.setItem("topic",1);
        localStorage.setItem("tsize","m");
        this.shadowRoot.getElementById("topic1").checked = true;
        this.shadowRoot.getElementById("tsize-medium").checked = true;

        const stylesheet_now = this.shadowRoot.querySelector(".stylesheet");
        const stylesheet_new = styleTemplate1;
        this.shadowRoot.replaceChild(stylesheet_new, stylesheet_now);

        const tsizestylesheet_now = this.shadowRoot.querySelector(".tsizestylesheet");
        const tsizestylesheet_new = tsizeTemplate_m;
        this.shadowRoot.replaceChild(tsizestylesheet_new, tsizestylesheet_now);

        location.reload();
    }

    connectedCallback(){
        // 主題事件
        this.shadowRoot.querySelector("#topic1").addEventListener("click", ()=> this.changeTopic1());
        this.shadowRoot.querySelector("#topic2").addEventListener("click", ()=> this.changeTopic2());
        this.shadowRoot.querySelector("#topic3").addEventListener("click", ()=> this.changeTopic3());

        // 字型大小事件
        this.shadowRoot.querySelector("#tsize-large").addEventListener("click", ()=> this.changeTsizeLarge());
        this.shadowRoot.querySelector("#tsize-medium").addEventListener("click", ()=> this.changeTsizeMedium());
        this.shadowRoot.querySelector("#tsize-small").addEventListener("click", ()=> this.changeTsizeSmall());

        // 按鈕事件
        this.shadowRoot.querySelector("#settings-reset").addEventListener("click", ()=> this.resetSettings());
        
    }
   
    disconnectedCallback(){
        // 主題事件
        this.shadowRoot.querySelector("#topic1").removeEventListener();
        this.shadowRoot.querySelector("#topic2").removeEventListener();
        this.shadowRoot.querySelector("#topic3").removeEventListener();

        // 字型大小事件
        this.shadowRoot.querySelector("#tsize-large").removeEventListener();
        this.shadowRoot.querySelector("#tsize-medium").removeEventListener();
        this.shadowRoot.querySelector("#tsize-small").removeEventListener();
        
        // 按鈕事件
        this.shadowRoot.querySelector("#settings-reset").removeEventListener();

    }


}
window.customElements.define("settings-component", Settings)

export default Settings;