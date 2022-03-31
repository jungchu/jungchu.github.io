const template = document.createElement("template");
template.innerHTML =`
<style>
    @import url("./css/stationInfo.css");  
</style>

<div class="stationInfo">
    <div class="stationHead">
        <slot name="stationID"></slot>
        <slot name="stationName"></slot>
    </div>
    <div class="stationContent">
        <slot name="stationAddress"></slot>
        <slot name="status"></slot>
        <slot name="endDate"></slot>
        <slot name="stationAltitude"></slot>
        <slot name="note"></slot>
    </div>
</div>
`;

class stationInfo extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define("station-info", stationInfo);
export default stationInfo;