const styleTemplate1 = document.createElement("template");
const styleTemplate2 = document.createElement("template");
const styleTemplate3 = document.createElement("template");

const tsizeTemplate_l = document.createElement("template");
const tsizeTemplate_m = document.createElement("template");
const tsizeTemplate_s = document.createElement("template");

const template = document.createElement("template");

styleTemplate1.innerHTML = ` 
    <style class="stylesheet">
        @import url("./CSS/nav_topic1.css");  
        @import url("./CSS/nav-sec_topic1.css");  
    </style>`;
styleTemplate2.innerHTML = ` 
    <style class="stylesheet">
        @import url("./CSS/nav_topic2.css");  
        @import url("./CSS/nav-sec_topic2.css");  
    </style>`;
styleTemplate3.innerHTML = ` 
    <style class="stylesheet">
        @import url("./CSS/nav_topic3.css");  
        @import url("./CSS/nav-sec_topic3.css");   
    </style>`;
tsizeTemplate_l.innerHTML = ` 
    <style class="tsizestylesheet">
        @import url("./CSS/nav-sec_tsize_l.css");
    </style>`;
tsizeTemplate_m.innerHTML = ` 
    <style class="tsizestylesheet">
        @import url("./CSS/nav-sec_tsize_m.css");
    </style>`;
tsizeTemplate_s.innerHTML = ` 
    <style class="tsizestylesheet">
        @import url("./CSS/nav-sec_tsize_s.css");
    </style>`;

template.innerHTML = `
<style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"); 
    @import url("./CSS/nav.css");  
    @import url("./CSS/nav-sec.css");  
</style>

<!-- 導覽列 -->
<div class="nav0">
    <div class="nav00">
        <div class="nav01">
            <a id="btn-bars" class="btn btn-bars" title="Content" href="#"><i class="fa fa-bars"></i></a>
        </div>
        <div class="nav02">
            <a class="btn btn-home" title="Home" href="homepage.html"><i class="fa fa-home"></i></a>
            <a class="btn btn-plus" title="New note" href="homepage.html"><i class="fa fa-plus"></i></a>
            <a class="btn btn-cog" title="Settings" href="settings.html"><i class="fa fa-cog"></i></a>
        </div>
    </div>
</div>


<!-- 副導覽列 -->
<div id="nav-sec00" class="nav-sec00">
    <div class="nav-sec01">
        <ul>
            <li class="li01"><a href="homepage.html"><i class="fa fa-edit"></i>備忘錄</a></li>           
            <li class="li02"><a href="plan.html"><i class="fa fa-calendar"></i>計畫</a></li>           
        </ul>
    </div>
</div>
`;

// 建立組件
class MyNav extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.showNavSec = false ;
        this.whichTopic();
    }

    whichTopic(){
        const topic = localStorage.getItem("topic");
        const tsize = localStorage.getItem("tsize");

        if (topic == 1){
            this.shadowRoot.appendChild(styleTemplate1.content.cloneNode(true));
        }else if( topic == 2 ){
            this.shadowRoot.appendChild(styleTemplate2.content.cloneNode(true));
        }else if( topic == 3 ){
            this.shadowRoot.appendChild(styleTemplate3.content.cloneNode(true));
        }

        if (tsize == "l"){
            this.shadowRoot.appendChild(tsizeTemplate_l.content.cloneNode(true));
        }else if(tsize == "m"){
            this.shadowRoot.appendChild(tsizeTemplate_m.content.cloneNode(true));
        }else if(tsize == "s"){
            this.shadowRoot.appendChild(tsizeTemplate_s.content.cloneNode(true));
        }
    }

    addNewNote(){
        localStorage.setItem("plus", 1);
    }

    closeAddNewNote(){
        localStorage.setItem("plus", 0);
    }

    displayNavSec(){
        this.showNavSec = !this.showNavSec ;
        const nav_sec00 = this.shadowRoot.querySelector(".nav-sec00");
        const fa_bars = this.shadowRoot.querySelector(".fa-bars");

        if (this.showNavSec) {
            nav_sec00.style.display = "block";
            fa_bars.style.color = localStorage.getItem("fa_bars_color_topic") ;
        } else {
            nav_sec00.style.display = "none";
            fa_bars.style.color = localStorage.getItem("fa_bars_color_hover_topic");
        }
    }
    closeNavSec(){
        this.showNavSec = false;

        const nav_sec00 = this.shadowRoot.querySelector(".nav-sec00");
        const fa_bars = this.shadowRoot.querySelector(".fa-bars");
        if (!this.showNavSec){
            nav_sec00.style.display = "none";
            fa_bars.style.color = localStorage.getItem("fa_bars_color_topic");
        }
    }

    connectedCallback(){
        this.shadowRoot.querySelector(".btn-plus").addEventListener("click", ()=>this.addNewNote());
        this.shadowRoot.querySelector(".btn-home").addEventListener("click", ()=>this.closeAddNewNote());
        this.shadowRoot.querySelector(".btn-bars").addEventListener("click", () => this.displayNavSec());
        this.shadowRoot.querySelector(".nav-sec00").addEventListener("mouseleave", () => this.closeNavSec());
        this.shadowRoot.querySelector(".li01").addEventListener("click", ()=>this.closeAddNewNote());
    }

    disconnectedCallback(){
        this.shadowRoot.querySelector(".btn-bars").removeEventListener();
        this.shadowRoot.querySelector(".nav-sec00").removeEventListener();
    }

}
window.customElements.define("my-nav",MyNav);
export default MyNav;