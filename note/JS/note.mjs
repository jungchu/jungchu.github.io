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
        @import url("./CSS/note_topic1.css");
        @import url("./CSS/plus_topic1.css");
    </style>`;
styleTemplate2.innerHTML = ` 
    <style class="stylesheet">
        @import url("./CSS/content_topic2.css");  
        @import url("./CSS/note_topic2.css");
        @import url("./CSS/plus_topic2.css");
    </style>`;
styleTemplate3.innerHTML = ` 
    <style class="stylesheet">
        @import url("./CSS/content_topic3.css");  
        @import url("./CSS/note_topic3.css");
        @import url("./CSS/plus_topic3.css");
    </style>`;

tsizeTemplate_l.innerHTML = ` 
    <style class="tsizestylesheet">
        @import url("./CSS/note_tsize_l.css");
        @import url("./CSS/plus_tsize_l.css");
    </style>`;
tsizeTemplate_m.innerHTML = ` 
    <style class="tsizestylesheet">
        @import url("./CSS/note_tsize_m.css");
        @import url("./CSS/plus_tsize_m.css");
    </style>`;
tsizeTemplate_s.innerHTML = ` 
    <style class="tsizestylesheet">
        @import url("./CSS/note_tsize_s.css");
        @import url("./CSS/plus_tsize_s.css");
    </style>`;

template.innerHTML =`
<style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"); 
    @import url("./CSS/content.css");  
    @import url("./CSS/note.css"); 
    @import url("./CSS/plus.css");
</style>

<div id="content00" class="content00">
    <div id="plus00" class="plus00">
        <div class="plus01">
            <p>新增備忘錄</p>
        </div>
        <hr/>
        <div class="plus02">
                <label for="note-title">標題</label><br/>
                <input id="note-title" name="note-title" type="text" placeholder="點擊新增標題..."><br/>

                <label for="note-date">日期</label><br/>
                <input id="note-date" name="note-date" type="date"> <br/>

                <label for="note-content">內容</label><br/>
                <textarea id="note-content" name="note-cotent" cols="30" rows="10" placeholder="點擊新增標內容..."></textarea><br/>
                <div>
                    <input id="note-submit" type="submit" value="儲存">
                </div>
        </div>
    </div>
    <div id="note000" class="note000">
            <!-- 備忘錄 -->
        </div>
    </div>
</div>
`;

class Note extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.whichTopic();
        this.noteTitle = "";
        this.noteDate = "";
        this.noteContent = "";
    }
    whichTopic(){
        const topic = localStorage.getItem("topic");
        const tsize = localStorage.getItem("tsize");
        const plus = localStorage.getItem("plus");
            

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

        if (plus == 1){
            this.shadowRoot.getElementById("plus00").style.display = "block";
            this.shadowRoot.getElementById("note000").style.display = "none";
        } else{
            this.shadowRoot.getElementById("plus00").style.display = "none";
            this.shadowRoot.getElementById("note000").style.display = "block";
        }

        if (localStorage.getItem("note")){
            const noteArr = localStorage.getItem("note").split(">");
            for ( let i = 0 ; i < noteArr.length; i++ ){
                const noteObj = JSON.parse(noteArr[i]);
                noteObj.index = i ;

                const note00 = document.createElement("div");
                const note01 = document.createElement("div");
                    const noteTitle = document.createElement("p");
                    const noteDate = document.createElement("p");
                    const noteX = document.createElement("div");
                    const noteX_i = document.createElement("i");
                const hr = document.createElement("hr");
                const note02 = document.createElement("div");
                    const noteContent = document.createElement("p");
                const note03 = document.createElement("div");

                note00.className = "note00 noteX" + i;
                note00.id = "noteX" + i;
                note01.className = "note01";
                note02.className = "note02";
                note03.className = "noteIndex";
                noteTitle.className = "note-title";
                noteDate.className = "note-date note-date-" + noteObj.noteDate;
                noteDate.id = "note-date-X" + i;
                noteX.className =  "note-x noteX" + i ;
                noteX_i.className = "fa fa-close";
                noteContent.className = "note-content";
                note03.innerText = i;
                noteTitle.innerText = noteObj.noteTitle;
                noteDate.innerText = noteObj.noteDate;
                noteContent.innerText = noteObj.noteContent;

                noteX.appendChild(noteX_i);
                note01.appendChild(noteTitle);
                note01.appendChild(noteDate);
                note01.appendChild(noteX);
                note02.appendChild(noteContent);
                note00.appendChild(note01);
                note00.appendChild(hr);
                note00.appendChild(note02);
                note00.appendChild(note03);
                
                this.shadowRoot.querySelector(".note000").appendChild(note00);
            }
        }
    }

    getNoteTitle(e){
        this.shadowRoot.querySelector("#note-title").textContent = e.target.value;
        this.noteTitle = e.target.value;
    }
    titleGoDate(e){
        if (e.keyCode == 13){
            this.shadowRoot.querySelector("#note-date").focus();
        }
    }
    getNoteDate(e){
        this.shadowRoot.querySelector("#note-date").textContent = e.target.value;
        this.noteDate = e.target.value;
    }
    dateGoContent(e){
        if (e.keyCode == 13){
            this.shadowRoot.querySelector("#note-content").focus();
        }
    }
    getNoteContent(e){
        this.shadowRoot.querySelector("#note-date").textContent = e.target.value;
        this.noteContent = e.target.value;  
    }
    sendNote(){
        const note = {
            noteTitle: this.noteTitle,
            noteDate: this.noteDate,
            noteContent: this.noteContent
        }
        const noteJSON = JSON.stringify(note);
        if (!localStorage.getItem("note")){
            localStorage.setItem("note",noteJSON);
        }else{
            const temp = localStorage.getItem("note")+ ">" + noteJSON;
            localStorage.setItem("note", temp);
        }

        const localSItem = "n" + this.noteDate;
        if (!localStorage.getItem(localSItem)){
            localStorage.setItem(localSItem,1);
        }else{
            const temp = parseInt(localStorage.getItem(localSItem))  + 1 ;
            localStorage.setItem(localSItem,temp);
        }

        localStorage.setItem("plus",0);
        location.reload();
    }

    removeNote(e){
        const note00id = e.target.parentNode.parentNode.parentNode.id;
        const index = e.target.parentNode.parentNode.parentNode.lastChild.innerText;
        const rmIdName = "noteX"+index;

        if (note00id == rmIdName){
            this.shadowRoot.getElementById(rmIdName).remove();
            var noteArr = localStorage.getItem("note").split(">");
            var newNoteArr = ""; 

            for ( let i = 0 ; i < noteArr.length; i++ ){
                if(noteArr.length == 1){
                    newNoteArr = "";
                    const noteArrObj = JSON.parse(noteArr);
                    const localSItem = "n" + noteArrObj.noteDate;
                    localStorage.removeItem(localSItem);
                }else{
                    if (i != index){
                        if (newNoteArr===""){ newNoteArr = noteArr[i]                     
                        }else{ newNoteArr += ">" + noteArr[i]; } 
                    }else if (i == index) {
                        const noteArrObj = JSON.parse(noteArr[i]);
                        const localSItem = "n" + noteArrObj.noteDate;
                        const temp = localStorage.getItem(localSItem);

                        if (temp == 1){
                            localStorage.removeItem(localSItem);
                        }else if (temp >1){
                            const temp2 = parseInt(localStorage.getItem(localSItem)) - 1;
                            localStorage.setItem(localSItem, temp2);
                        }
                    }
                }
            }
            localStorage.setItem("note", newNoteArr);
        }
    };

    connectedCallback(){
        this.shadowRoot.querySelector("#note-title").addEventListener("input", (event)=>this.getNoteTitle(event));
        this.shadowRoot.querySelector("#note-title").addEventListener("keypress", (event)=>this.titleGoDate(event));
        this.shadowRoot.querySelector("#note-date").addEventListener("input", (event)=>this.getNoteDate(event));
        this.shadowRoot.querySelector("#note-date").addEventListener("keypress", (event)=>this.dateGoContent(event));
        this.shadowRoot.querySelector("#note-content").addEventListener("input", (event)=>this.getNoteContent(event));
        this.shadowRoot.querySelector("#note-submit").addEventListener("click", (event)=>this.sendNote(event));
        this.shadowRoot.querySelectorAll(".note-x").forEach(item => {
            item.addEventListener("click", (event)=> this.removeNote(event));
        });
    }
    disconnectedCallback(){
        this.shadowRoot.querySelector("#note-title").removeEventListener("input", (event)=>this.getNoteTitle(event));
        this.shadowRoot.querySelector("#note-title").removeEventListener("keypress", (event)=>this.titleGoDate(event));
        this.shadowRoot.querySelector("#note-date").removeEventListener("input", (event)=>this.getNoteDate(event));
        this.shadowRoot.querySelector("#note-date").removeEventListener("keypress", (event)=>this.dateGoContent(event));
        this.shadowRoot.querySelector("#note-content").removeEventListener("input", (event)=>this.getNoteContent(event));
        this.shadowRoot.querySelector("#note-submit").removeEventListener("click", (event)=>this.sendNote(event));
        this.shadowRoot.querySelectorAll(".note-x").forEach(item => {
            item.removeEventListener("click", (event)=> this.removeNote(event));
        });
    }
}

window.customElements.define("my-note",Note);

export default Note;