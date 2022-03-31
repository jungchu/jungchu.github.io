
const template = document.createElement("template");
template.innerHTML = `
<style class="stylesheet">
    @import url("./CSS/content2.css");  
</style>

<!-- 內容頁 -->
<div id="content00" class="content00">
    <div>
    </div>
</div>
`;

class Content extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
window.customElements.define("my-content",Content);
export default Content;