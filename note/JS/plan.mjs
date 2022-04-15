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
    </style>`;
styleTemplate2.innerHTML = ` 
    <style class="stylesheet">
        @import url("./CSS/content_topic2.css");  
        @import url("./CSS/note_topic2.css");
    </style>`;
styleTemplate3.innerHTML = ` 
    <style class="stylesheet">
        @import url("./CSS/content_topic3.css");  
        @import url("./CSS/note_topic3.css");
    </style>`;

tsizeTemplate_l.innerHTML = ` 
    <style class="tsizestylesheet">
        @import url("./CSS/note_tsize_l.css");
    </style>`;
tsizeTemplate_m.innerHTML = ` 
    <style class="tsizestylesheet">
        @import url("./CSS/note_tsize_m.css");
    </style>`;
tsizeTemplate_s.innerHTML = ` 
    <style class="tsizestylesheet">
        @import url("./CSS/note_tsize_s.css");
    </style>`;

const tb = document.createElement("template");
tb.innerHTML = `
<table id="planTB">
    <tr id="planTR01">
        <th id="planTR01-1">Mon</th>
        <th id="planTR01-2">Tue</th>
        <th id="planTR01-3">Wed</th>
        <th id="planTR01-4">Thr</th>
        <th id="planTR01-5">Fri</th>
        <th id="planTR01-6">Sat</th>
        <th id="planTR01-7">Sun</th>
    </tr>
    <tr id="planTR02">
        <td><p id="planTR02-1"></p><a class="aplanTR" id="aplanTR02-1"></a></td>
        <td><p id="planTR02-2"></p><a class="aplanTR" id="aplanTR02-2"></a></td>
        <td><p id="planTR02-3"></p><a class="aplanTR" id="aplanTR02-3"></a></td>
        <td><p id="planTR02-4"></p><a class="aplanTR" id="aplanTR02-4"></a></td>
        <td><p id="planTR02-5"></p><a class="aplanTR" id="aplanTR02-5"></a></td>
        <td><p id="planTR02-6"></p><a class="aplanTR" id="aplanTR02-6"></a></td>
        <td><p id="planTR02-7"></p><a class="aplanTR" id="aplanTR02-7"></a></td>
    </tr>
    <tr id="planTR03">
        <td><p id="planTR03-1"></p><a class="aplanTR" id="aplanTR03-1"></a></td>
        <td><p id="planTR03-2"></p><a class="aplanTR" id="aplanTR03-2"></a></td>
        <td><p id="planTR03-3"></p><a class="aplanTR" id="aplanTR03-3"></a></td>
        <td><p id="planTR03-4"></p><a class="aplanTR" id="aplanTR03-4"></a></td>
        <td><p id="planTR03-5"></p><a class="aplanTR" id="aplanTR03-5"></a></td>
        <td><p id="planTR03-6"></p><a class="aplanTR" id="aplanTR03-6"></a></td>
        <td><p id="planTR03-7"></p><a class="aplanTR" id="aplanTR03-7"></a></td>
    </tr>
    <tr id="planTR04">
        <td><p id="planTR04-1"></p><a class="aplanTR" id="aplanTR04-1"></a></td>
        <td><p id="planTR04-2"></p><a class="aplanTR" id="aplanTR04-2"></a></td>
        <td><p id="planTR04-3"></p><a class="aplanTR" id="aplanTR04-3"></a></td>
        <td><p id="planTR04-4"></p><a class="aplanTR" id="aplanTR04-4"></a></td>
        <td><p id="planTR04-5"></p><a class="aplanTR" id="aplanTR04-5"></a></td>
        <td><p id="planTR04-6"></p><a class="aplanTR" id="aplanTR04-6"></a></td>
        <td><p id="planTR04-7"></p><a class="aplanTR" id="aplanTR04-7"></a></td>
    </tr>
    <tr id="planTR05">
        <td><p id="planTR05-1"></p><a class="aplanTR" id="aplanTR05-1"></a></td>
        <td><p id="planTR05-2"></p><a class="aplanTR" id="aplanTR05-2"></a></td>
        <td><p id="planTR05-3"></p><a class="aplanTR" id="aplanTR05-3"></a></td>
        <td><p id="planTR05-4"></p><a class="aplanTR" id="aplanTR05-4"></a></td>
        <td><p id="planTR05-5"></p><a class="aplanTR" id="aplanTR05-5"></a></td>
        <td><p id="planTR05-6"></p><a class="aplanTR" id="aplanTR05-6"></a></td>
        <td><p id="planTR05-7"></p><a class="aplanTR" id="aplanTR05-7"></a></td>
    </tr>
    <tr id="planTR06">
        <td><p id="planTR06-1"></p><a class="aplanTR" id="aplanTR06-1"></a></td>
        <td><p id="planTR06-2"></p><a class="aplanTR" id="aplanTR06-2"></a></td>
        <td><p id="planTR06-3"></p><a class="aplanTR" id="aplanTR06-3"></a></td>
        <td><p id="planTR06-4"></p><a class="aplanTR" id="aplanTR06-4"></a></td>
        <td><p id="planTR06-5"></p><a class="aplanTR" id="aplanTR06-5"></a></td>
        <td><p id="planTR06-6"></p><a class="aplanTR" id="aplanTR06-6"></a></td>
        <td><p id="planTR06-7"></p><a class="aplanTR" id="aplanTR06-7"></a></td>
    </tr>
    <tr id="planTR07">
        <td><p id="planTR07-1"></p><a class="aplanTR" id="aplanTR07-1"></a></td>
        <td><p id="planTR07-2"></p><a class="aplanTR" id="aplanTR07-2"></a></td>
        <td><p id="planTR07-3"></p><a class="aplanTR" id="aplanTR07-3"></a></td>
        <td><p id="planTR07-4"></p><a class="aplanTR" id="aplanTR07-4"></a></td>
        <td><p id="planTR07-5"></p><a class="aplanTR" id="aplanTR07-5"></a></td>
        <td><p id="planTR07-6"></p><a class="aplanTR" id="aplanTR07-6"></a></td>
        <td><p id="planTR07-7"></p><a class="aplanTR" id="aplanTR07-7"></a></td>
    </tr>
</table>
`;
template.innerHTML = `
<style>
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"); 
    @import url("./CSS/reset.css");  
    @import url("./CSS/content.css");  
    @import url("./CSS/plan.css");  
    @import url("./CSS/note.css");  
</style>
<div id="content00" class="content00">
<div id="plan00">
    <div id="plan01">
        <select id="yyyy" name="yyyy">
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
        </select>
        <p>.</p>
        <select id="mm" name="mm">
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>
    </div>
    <div id="plan02">
        <table id="planTB">
            <tr id="planTR01">
                <th id="planTR01-1">Mon</th>
                <th id="planTR01-2">Tue</th>
                <th id="planTR01-3">Wed</th>
                <th id="planTR01-4">Thr</th>
                <th id="planTR01-5">Fri</th>
                <th id="planTR01-6">Sat</th>
                <th id="planTR01-7">Sun</th>
            </tr>
            <tr id="planTR02">
                <td><p id="planTR02-1"></p><a class="aplanTR" id="aplanTR02-1"></a></td>
                <td><p id="planTR02-2"></p><a class="aplanTR" id="aplanTR02-2"></a></td>
                <td><p id="planTR02-3"></p><a class="aplanTR" id="aplanTR02-3"></a></td>
                <td><p id="planTR02-4"></p><a class="aplanTR" id="aplanTR02-4"></a></td>
                <td><p id="planTR02-5"></p><a class="aplanTR" id="aplanTR02-5"></a></td>
                <td><p id="planTR02-6"></p><a class="aplanTR" id="aplanTR02-6"></a></td>
                <td><p id="planTR02-7"></p><a class="aplanTR" id="aplanTR02-7"></a></td>
            </tr>
            <tr id="planTR03">
                <td><p id="planTR03-1"></p><a class="aplanTR" id="aplanTR03-1"></a></td>
                <td><p id="planTR03-2"></p><a class="aplanTR" id="aplanTR03-2"></a></td>
                <td><p id="planTR03-3"></p><a class="aplanTR" id="aplanTR03-3"></a></td>
                <td><p id="planTR03-4"></p><a class="aplanTR" id="aplanTR03-4"></a></td>
                <td><p id="planTR03-5"></p><a class="aplanTR" id="aplanTR03-5"></a></td>
                <td><p id="planTR03-6"></p><a class="aplanTR" id="aplanTR03-6"></a></td>
                <td><p id="planTR03-7"></p><a class="aplanTR" id="aplanTR03-7"></a></td>
            </tr>
            <tr id="planTR04">
                <td><p id="planTR04-1"></p><a class="aplanTR" id="aplanTR04-1"></a></td>
                <td><p id="planTR04-2"></p><a class="aplanTR" id="aplanTR04-2"></a></td>
                <td><p id="planTR04-3"></p><a class="aplanTR" id="aplanTR04-3"></a></td>
                <td><p id="planTR04-4"></p><a class="aplanTR" id="aplanTR04-4"></a></td>
                <td><p id="planTR04-5"></p><a class="aplanTR" id="aplanTR04-5"></a></td>
                <td><p id="planTR04-6"></p><a class="aplanTR" id="aplanTR04-6"></a></td>
                <td><p id="planTR04-7"></p><a class="aplanTR" id="aplanTR04-7"></a></td>
            </tr>
            <tr id="planTR05">
                <td><p id="planTR05-1"></p><a class="aplanTR" id="aplanTR05-1"></a></td>
                <td><p id="planTR05-2"></p><a class="aplanTR" id="aplanTR05-2"></a></td>
                <td><p id="planTR05-3"></p><a class="aplanTR" id="aplanTR05-3"></a></td>
                <td><p id="planTR05-4"></p><a class="aplanTR" id="aplanTR05-4"></a></td>
                <td><p id="planTR05-5"></p><a class="aplanTR" id="aplanTR05-5"></a></td>
                <td><p id="planTR05-6"></p><a class="aplanTR" id="aplanTR05-6"></a></td>
                <td><p id="planTR05-7"></p><a class="aplanTR" id="aplanTR05-7"></a></td>
            </tr>
            <tr id="planTR06">
                <td><p id="planTR06-1"></p><a class="aplanTR" id="aplanTR06-1"></a></td>
                <td><p id="planTR06-2"></p><a class="aplanTR" id="aplanTR06-2"></a></td>
                <td><p id="planTR06-3"></p><a class="aplanTR" id="aplanTR06-3"></a></td>
                <td><p id="planTR06-4"></p><a class="aplanTR" id="aplanTR06-4"></a></td>
                <td><p id="planTR06-5"></p><a class="aplanTR" id="aplanTR06-5"></a></td>
                <td><p id="planTR06-6"></p><a class="aplanTR" id="aplanTR06-6"></a></td>
                <td><p id="planTR06-7"></p><a class="aplanTR" id="aplanTR06-7"></a></td>
            </tr>
            <tr id="planTR07">
                <td><p id="planTR07-1"></p><a class="aplanTR" id="aplanTR07-1"></a></td>
                <td><p id="planTR07-2"></p><a class="aplanTR" id="aplanTR07-2"></a></td>
                <td><p id="planTR07-3"></p><a class="aplanTR" id="aplanTR07-3"></a></td>
                <td><p id="planTR07-4"></p><a class="aplanTR" id="aplanTR07-4"></a></td>
                <td><p id="planTR07-5"></p><a class="aplanTR" id="aplanTR07-5"></a></td>
                <td><p id="planTR07-6"></p><a class="aplanTR" id="aplanTR07-6"></a></td>
                <td><p id="planTR07-7"></p><a class="aplanTR" id="aplanTR07-7"></a></td>
            </tr>
        </table>
    </div>
    <div id="plan03">
        <div id="note000" class="note000">
        </div>
    </div>
</div>
`;

class Plan extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.whichTopic();
        this.getDate();
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
    getDate(){
        const currentDate = new Date() ;
        const currentY = currentDate.getFullYear();
        const currentM = currentDate.getMonth() + 1 ;
        this.shadowRoot.getElementById("yyyy").value = currentY ;
        this.shadowRoot.getElementById("mm").value = currentM ;

        const y = this.shadowRoot.getElementById("yyyy").value;
        const m = this.shadowRoot.getElementById("mm").value;
        
        function getLastDate(){

            if (m == 1 || m == 3 || m == 5 || m == 7 ||
                m == 8 || m == 10 || m == 12 ){ 
                    return 31;
            }else if( m == 4 || m == 6 || m == 9 || m == 11 ){ 
                return 30;
            }else if( m == 2 ){
                if ((y % 4 == 0 && y % 100 != 0) || 
                    (y % 400 == 0)) { 
                    return 29; //閏年
                } else { 
                    return 28; //平年
                }
            }
        };
        const lastD = getLastDate();

        const ymdStart =y + "-" + m + "-" + 1 ;
        const dateStart = new Date(ymdStart);
        const wkdStart = dateStart.getDay();
   
        const planTR = ["2-1","2-2","2-3","2-4","2-5","2-6","2-7",
                        "3-1","3-2","3-3","3-4","3-5","3-6","3-7",
                        "4-1","4-2","4-3","4-4","4-5","4-6","4-7",
                        "5-1","5-2","5-3","5-4","5-5","5-6","5-7",
                        "6-1","6-2","6-3","6-4","6-5","6-6","6-7",
                        "7-1","7-2","7-3","7-4","7-5","7-6","7-7"
                        ];

        //填入日期
        //如果此月1號是星期天
        if (wkdStart === 0){
            const idName ="planTR02-7";
            const arrValue = "2-7";
            const index =planTR.indexOf(arrValue);
            this.shadowRoot.getElementById(idName).innerText = 1;

            //處理行事曆中顯示某日note的數量
            if (m < 10){
                var nday = "n" + y + "-" + "0" + m + "-" + "01";
            }else{
                var nday = "n" + y + "-" + m + "-" + "01";
            }
            
            const localSItem = localStorage.getItem(nday);
            //判斷localStorage中 nyyyy-mm-dd是否存在
            if (localSItem){
                const aidName ="aplanTR02-7";
                this.shadowRoot.getElementById(aidName).innerText = localSItem;
                this.shadowRoot.getElementById(aidName).style.display = "block";
            }else{
                const aidName ="aplanTR02-7";
                this.shadowRoot.getElementById(aidName).style.display = "none";
            }

            //此月2號到最後一天
            for (let i = 2; i<lastD+1; i++){
                const idName ="planTR0" + planTR[index+i-1] ;
                this.shadowRoot.getElementById(idName).innerText = i;

                //處理行事曆中顯示某日note的數量
                //日期<10號
                if(i < 10){
                    //月份<10號
                    if (m < 10){ var nday = "n" + y + "-" + "0" + m + "-" + "0" + i;
                    //月份>=10號
                    }else{ var nday = "n" + y + "-" + m + "-" + "0" + i; }
                //日期>=10號
                }else{
                    //月份<10號
                    if (m < 10){ var nday = "n" + y + "-" + "0" + m + "-" + i;
                    //月份>=10號
                    }else{ var nday = "n" + y + "-" + m + "-" + i; }
                }
                const localSItem = localStorage.getItem(nday);
                //判斷localStorage中 nyyyy-mm-dd是否存在
                if (localSItem){
                    const aidName ="aplanTR0" + planTR[index+i-1] ;
                    this.shadowRoot.getElementById(aidName).innerText = localSItem;
                    this.shadowRoot.getElementById(aidName).style.display = "block";
                }else{
                    const aidName ="aplanTR0" + planTR[index+i-1] ;
                    this.shadowRoot.getElementById(aidName).style.display = "none";
                }
            }

        }else{
            //如果第一天不是星期天
            const idName ="planTR02-" + wkdStart ;
            const arrValue = "2-" + wkdStart ;
            const index =planTR.indexOf(arrValue);
            this.shadowRoot.getElementById(idName).innerText = 1;

            //處理行事曆中顯示某日note的數量
            if (m < 10){
                var nday = "n" + y + "-" + "0" + m + "-" + "01";
            }else{
                var nday = "n" + y + "-" + m + "-" + "01";
            }
            const localSItem = localStorage.getItem(nday);

            //判斷localStorage中 nyyyy-mm-dd是否存在
            if (localSItem){
                const aidName ="aplanTR02-" + wkdStart ;
                this.shadowRoot.getElementById(aidName).innerText = localSItem;
                this.shadowRoot.getElementById(aidName).style.display = "block";
            }else{
                const aidName ="aplanTR02-" + wkdStart ;
                this.shadowRoot.getElementById(aidName).style.display = "none";
            }

            for (let i = 2; i<lastD+1; i++){
                const idName ="planTR0" + planTR[index+i-1] ;
                this.shadowRoot.getElementById(idName).innerText = i;

                //處理行事曆中顯示某日note的數量
                //日期<10號
                if(i < 10){
                    //月份<10號
                    if (m < 10){ var nday = "n" + y + "-" + "0" + m + "-" + "0" + i;
                    //月份>=10號
                    }else{ var nday = "n" + y + "-" + m + "-" + "0" + i; }
                //日期>=10號
                }else{
                    //月份<10號
                    if (m < 10){ var nday = "n" + y + "-" + "0" + m + "-" + i;
                    //月份>=10號
                    }else{ var nday = "n" + y + "-" + m + "-" + i; }
                }

                const localSItem = localStorage.getItem(nday);
                //判斷localStorage中 nyyyy-mm-dd是否存在，
                //若存在，則顯示note數
                if (localSItem){
                    const aidName ="aplanTR0" + planTR[index+i-1] ;
                    this.shadowRoot.getElementById(aidName).innerText = localSItem;
                    this.shadowRoot.getElementById(aidName).style.display = "block";
                }else{
                    const aidName ="aplanTR0" + planTR[index+i-1] ;
                    this.shadowRoot.getElementById(aidName).style.display = "none";
                }

            }
        }  
        //如果行事曆最後一row都沒有值，則不顯示最後一row
        const Row7_1 = this.shadowRoot.getElementById("planTR07-1").innerText;
        const Row7_2 = this.shadowRoot.getElementById("planTR07-2").innerText;
        const Row7_3 = this.shadowRoot.getElementById("planTR07-3").innerText;
        const Row7_4 = this.shadowRoot.getElementById("planTR07-4").innerText;
        const Row7_5 = this.shadowRoot.getElementById("planTR07-5").innerText;
        const Row7_6 = this.shadowRoot.getElementById("planTR07-6").innerText;
        const Row7_7 = this.shadowRoot.getElementById("planTR07-7").innerText;
        if (Row7_1 == "" && Row7_2 == "" && Row7_3 == "" && Row7_4 == "" && 
            Row7_5 == "" && Row7_6 == "" && Row7_7 == "" ){
                this.shadowRoot.getElementById("planTR07").style.display = "none";
            }
    }

    changeyyyy(e){
        this.shadowRoot.getElementById("planTB").remove();    
        this.shadowRoot.getElementById("plan02").appendChild(tb.content.cloneNode(true));

        const y = e.target.value;
        const m = this.shadowRoot.getElementById("mm").value;
        
        function getLastDate(){

            if (m == 1 || m == 3 || m == 5 || m == 7 ||
                m == 8 || m == 10 || m == 12 ){ 
                    return 31;
            }else if( m == 4 || m == 6 || m == 9 || m == 11 ){ 
                return 30;
            }else if( m == 2 ){
                if ((y % 4 == 0 && y % 100 != 0) || 
                    (y % 400 == 0)) { 
                    return 29; //閏年
                } else { 
                    return 28; //平年
                }
            }
        };
        const lastD = getLastDate();

        const ymdStart =y + "-" + m + "-" + 1 ;
        const dateStart = new Date(ymdStart);
        const wkdStart = dateStart.getDay();
   
        const planTR = ["2-1","2-2","2-3","2-4","2-5","2-6","2-7",
                        "3-1","3-2","3-3","3-4","3-5","3-6","3-7",
                        "4-1","4-2","4-3","4-4","4-5","4-6","4-7",
                        "5-1","5-2","5-3","5-4","5-5","5-6","5-7",
                        "6-1","6-2","6-3","6-4","6-5","6-6","6-7",
                        "7-1","7-2","7-3","7-4","7-5","7-6","7-7"
                        ];

        //填入日期
        //如果此月1號是星期天
        if (wkdStart === 0){
            const idName ="planTR02-7";
            const arrValue = "2-7";
            const index =planTR.indexOf(arrValue);
            this.shadowRoot.getElementById(idName).innerText = 1;

            //處理行事曆中顯示某日note的數量
            if (m < 10){
                var nday = "n" + y + "-" + "0" + m + "-" + "01";
            }else{
                var nday = "n" + y + "-" + m + "-" + "01";
            }
            
            const localSItem = localStorage.getItem(nday);
            //判斷localStorage中 nyyyy-mm-dd是否存在
            if (localSItem){
                const aidName ="aplanTR02-7";
                this.shadowRoot.getElementById(aidName).innerText = localSItem;
                this.shadowRoot.getElementById(aidName).style.display = "block";
            }else{
                const aidName ="aplanTR02-7";
                this.shadowRoot.getElementById(aidName).style.display = "none";
            }

            //此月2號到最後一天
            for (let i = 2; i<lastD+1; i++){
                const idName ="planTR0" + planTR[index+i-1] ;
                this.shadowRoot.getElementById(idName).innerText = i;

                //處理行事曆中顯示某日note的數量
                //日期<10號
                if(i < 10){
                    //月份<10號
                    if (m < 10){ var nday = "n" + y + "-" + "0" + m + "-" + "0" + i;
                    //月份>=10號
                    }else{ var nday = "n" + y + "-" + m + "-" + "0" + i; }
                //日期>=10號
                }else{
                    //月份<10號
                    if (m < 10){ var nday = "n" + y + "-" + "0" + m + "-" + i;
                    //月份>=10號
                    }else{ var nday = "n" + y + "-" + m + "-" + i; }
                }
                const localSItem = localStorage.getItem(nday);
                //判斷localStorage中 nyyyy-mm-dd是否存在
                if (localSItem){
                    const aidName ="aplanTR0" + planTR[index+i-1] ;
                    this.shadowRoot.getElementById(aidName).innerText = localSItem;
                    this.shadowRoot.getElementById(aidName).style.display = "block";
                }else{
                    const aidName ="aplanTR0" + planTR[index+i-1] ;
                    this.shadowRoot.getElementById(aidName).style.display = "none";
                }
            }

        }else{
            //如果第一天不是星期天
            const idName ="planTR02-" + wkdStart ;
            const arrValue = "2-" + wkdStart ;
            const index =planTR.indexOf(arrValue);
            this.shadowRoot.getElementById(idName).innerText = 1;

            //處理行事曆中顯示某日note的數量
            if (m < 10){
                var nday = "n" + y + "-" + "0" + m + "-" + "01";
            }else{
                var nday = "n" + y + "-" + m + "-" + "01";
            }
            const localSItem = localStorage.getItem(nday);

            //判斷localStorage中 nyyyy-mm-dd是否存在
            if (localSItem){
                const aidName ="aplanTR02-" + wkdStart ;
                this.shadowRoot.getElementById(aidName).innerText = localSItem;
                this.shadowRoot.getElementById(aidName).style.display = "block";
            }else{
                const aidName ="aplanTR02-" + wkdStart ;
                this.shadowRoot.getElementById(aidName).style.display = "none";
            }

            for (let i = 2; i<lastD+1; i++){
                const idName ="planTR0" + planTR[index+i-1] ;
                this.shadowRoot.getElementById(idName).innerText = i;

                //處理行事曆中顯示某日note的數量
                //日期<10號
                if(i < 10){
                    //月份<10號
                    if (m < 10){ var nday = "n" + y + "-" + "0" + m + "-" + "0" + i;
                    //月份>=10號
                    }else{ var nday = "n" + y + "-" + m + "-" + "0" + i; }
                //日期>=10號
                }else{
                    //月份<10號
                    if (m < 10){ var nday = "n" + y + "-" + "0" + m + "-" + i;
                    //月份>=10號
                    }else{ var nday = "n" + y + "-" + m + "-" + i; }
                }

                const localSItem = localStorage.getItem(nday);
                //判斷localStorage中 nyyyy-mm-dd是否存在，
                //若存在，則顯示note數
                if (localSItem){
                    const aidName ="aplanTR0" + planTR[index+i-1] ;
                    this.shadowRoot.getElementById(aidName).innerText = localSItem;
                    this.shadowRoot.getElementById(aidName).style.display = "block";
                }else{
                    const aidName ="aplanTR0" + planTR[index+i-1] ;
                    this.shadowRoot.getElementById(aidName).style.display = "none";
                }

            }
        }  
        //如果行事曆最後一row都沒有值，則不顯示最後一row
        const Row7_1 = this.shadowRoot.getElementById("planTR07-1").innerText;
        const Row7_2 = this.shadowRoot.getElementById("planTR07-2").innerText;
        const Row7_3 = this.shadowRoot.getElementById("planTR07-3").innerText;
        const Row7_4 = this.shadowRoot.getElementById("planTR07-4").innerText;
        const Row7_5 = this.shadowRoot.getElementById("planTR07-5").innerText;
        const Row7_6 = this.shadowRoot.getElementById("planTR07-6").innerText;
        const Row7_7 = this.shadowRoot.getElementById("planTR07-7").innerText;
        if (Row7_1 == "" && Row7_2 == "" && Row7_3 == "" && Row7_4 == "" && 
            Row7_5 == "" && Row7_6 == "" && Row7_7 == "" ){
                this.shadowRoot.getElementById("planTR07").style.display = "none";
            }
        //清除之前行事曆下的note
        if (this.shadowRoot.getElementById("note000")){
            this.shadowRoot.getElementById("note000").remove();
        }
        const note000 = document.createElement("div");
        note000.id = "note000";
        note000.className = "note000";
        this.shadowRoot.getElementById("plan03").appendChild(note000);

        this.connectedCallback();
        this.disconnectedCallback();
    }

    changemm(e){
        this.shadowRoot.getElementById("planTB").remove();    
        this.shadowRoot.getElementById("plan02").appendChild(tb.content.cloneNode(true)); 
        const y = this.shadowRoot.getElementById("yyyy").value;
        const m = e.target.value;
        
        function getLastDate(){

            if (m == 1 || m == 3 || m == 5 || m == 7 ||
                m == 8 || m == 10 || m == 12 ){ 
                    return 31;
            }else if( m == 4 || m == 6 || m == 9 || m == 11 ){ 
                return 30;
            }else if( m == 2 ){
                if ((y % 4 == 0 && y % 100 != 0) || 
                    (y % 400 == 0)) { 
                    return 29; //閏年
                } else { 
                    return 28; //平年
                }
            }
        };
        const lastD = getLastDate();

        const ymdStart =y + "-" + m + "-" + 1 ;
        const dateStart = new Date(ymdStart);
        const wkdStart = dateStart.getDay();
   
        const planTR = ["2-1","2-2","2-3","2-4","2-5","2-6","2-7",
                        "3-1","3-2","3-3","3-4","3-5","3-6","3-7",
                        "4-1","4-2","4-3","4-4","4-5","4-6","4-7",
                        "5-1","5-2","5-3","5-4","5-5","5-6","5-7",
                        "6-1","6-2","6-3","6-4","6-5","6-6","6-7",
                        "7-1","7-2","7-3","7-4","7-5","7-6","7-7"
                        ];

        //填入日期
        //如果此月1號是星期天
        if (wkdStart === 0){
            const idName ="planTR02-7";
            const arrValue = "2-7";
            const index =planTR.indexOf(arrValue);
            this.shadowRoot.getElementById(idName).innerText = 1;

            //處理行事曆中顯示某日note的數量
            if (m < 10){
                var nday = "n" + y + "-" + "0" + m + "-" + "01";
            }else{
                var nday = "n" + y + "-" + m + "-" + "01";
            }
            
            const localSItem = localStorage.getItem(nday);
            //判斷localStorage中 nyyyy-mm-dd是否存在
            if (localSItem){
                const aidName ="aplanTR02-7";
                this.shadowRoot.getElementById(aidName).innerText = localSItem;
                this.shadowRoot.getElementById(aidName).style.display = "block";
            }else{
                const aidName ="aplanTR02-7";
                this.shadowRoot.getElementById(aidName).style.display = "none";
            }

            //此月2號到最後一天
            for (let i = 2; i<lastD+1; i++){
                const idName ="planTR0" + planTR[index+i-1] ;
                this.shadowRoot.getElementById(idName).innerText = i;

                //處理行事曆中顯示某日note的數量
                //日期<10號
                if(i < 10){
                    //月份<10號
                    if (m < 10){ var nday = "n" + y + "-" + "0" + m + "-" + "0" + i;
                    //月份>=10號
                    }else{ var nday = "n" + y + "-" + m + "-" + "0" + i; }
                //日期>=10號
                }else{
                    //月份<10號
                    if (m < 10){ var nday = "n" + y + "-" + "0" + m + "-" + i;
                    //月份>=10號
                    }else{ var nday = "n" + y + "-" + m + "-" + i; }
                }
                const localSItem = localStorage.getItem(nday);
                //判斷localStorage中 nyyyy-mm-dd是否存在
                if (localSItem){
                    const aidName ="aplanTR0" + planTR[index+i-1] ;
                    this.shadowRoot.getElementById(aidName).innerText = localSItem;
                    this.shadowRoot.getElementById(aidName).style.display = "block";
                }else{
                    const aidName ="aplanTR0" + planTR[index+i-1] ;
                    this.shadowRoot.getElementById(aidName).style.display = "none";
                }
            }

        }else{
            //如果第一天不是星期天
            const idName ="planTR02-" + wkdStart ;
            const arrValue = "2-" + wkdStart ;
            const index =planTR.indexOf(arrValue);
            this.shadowRoot.getElementById(idName).innerText = 1;

            //處理行事曆中顯示某日note的數量
            if (m < 10){
                var nday = "n" + y + "-" + "0" + m + "-" + "01";
            }else{
                var nday = "n" + y + "-" + m + "-" + "01";
            }
            const localSItem = localStorage.getItem(nday);

            //判斷localStorage中 nyyyy-mm-dd是否存在
            if (localSItem){
                const aidName ="aplanTR02-" + wkdStart ;
                this.shadowRoot.getElementById(aidName).innerText = localSItem;
                this.shadowRoot.getElementById(aidName).style.display = "block";
            }else{
                const aidName ="aplanTR02-" + wkdStart ;
                this.shadowRoot.getElementById(aidName).style.display = "none";
            }

            for (let i = 2; i<lastD+1; i++){
                const idName ="planTR0" + planTR[index+i-1] ;
                this.shadowRoot.getElementById(idName).innerText = i;

                //處理行事曆中顯示某日note的數量
                //日期<10號
                if(i < 10){
                    //月份<10號
                    if (m < 10){ var nday = "n" + y + "-" + "0" + m + "-" + "0" + i;
                    //月份>=10號
                    }else{ var nday = "n" + y + "-" + m + "-" + "0" + i; }
                //日期>=10號
                }else{
                    //月份<10號
                    if (m < 10){ var nday = "n" + y + "-" + "0" + m + "-" + i;
                    //月份>=10號
                    }else{ var nday = "n" + y + "-" + m + "-" + i; }
                }

                const localSItem = localStorage.getItem(nday);
                //判斷localStorage中 nyyyy-mm-dd是否存在，
                //若存在，則顯示note數
                if (localSItem){
                    const aidName ="aplanTR0" + planTR[index+i-1] ;
                    this.shadowRoot.getElementById(aidName).innerText = localSItem;
                    this.shadowRoot.getElementById(aidName).style.display = "block";
                }else{
                    const aidName ="aplanTR0" + planTR[index+i-1] ;
                    this.shadowRoot.getElementById(aidName).style.display = "none";
                }

            }
        }  
        //如果行事曆最後一row都沒有值，則不顯示最後一row
        const Row7_1 = this.shadowRoot.getElementById("planTR07-1").innerText;
        const Row7_2 = this.shadowRoot.getElementById("planTR07-2").innerText;
        const Row7_3 = this.shadowRoot.getElementById("planTR07-3").innerText;
        const Row7_4 = this.shadowRoot.getElementById("planTR07-4").innerText;
        const Row7_5 = this.shadowRoot.getElementById("planTR07-5").innerText;
        const Row7_6 = this.shadowRoot.getElementById("planTR07-6").innerText;
        const Row7_7 = this.shadowRoot.getElementById("planTR07-7").innerText;
        if (Row7_1 == "" && Row7_2 == "" && Row7_3 == "" && Row7_4 == "" && 
            Row7_5 == "" && Row7_6 == "" && Row7_7 == "" ){
                this.shadowRoot.getElementById("planTR07").style.display = "none";
            }
        //清除之前行事曆下的note
        if (this.shadowRoot.getElementById("note000")){
            this.shadowRoot.getElementById("note000").remove();
        }
        const note000 = document.createElement("div");
        note000.id = "note000";
        note000.className = "note000";
        this.shadowRoot.getElementById("plan03").appendChild(note000);

        this.connectedCallback();
        this.disconnectedCallback();
    }

    getNote(e){

        if (this.shadowRoot.getElementById("note000")){
            this.shadowRoot.getElementById("note000").remove();
        }
        const note000 = document.createElement("div");
        note000.id = "note000";
        note000.className = "note000";
        this.shadowRoot.getElementById("plan03").appendChild(note000);

        //取得日期
        const y = this.shadowRoot.getElementById("yyyy").value;
        const m = this.shadowRoot.getElementById("mm").value;
        const d = parseInt(e.target.parentNode.firstChild.innerText);
        
        //日期<10號
        if(d < 10){
            //月份<10號
            if (m < 10){ var date = y + "-" + "0" + m + "-" + "0" + d;
            //月份>=10號
            }else{ var date = y + "-" + m + "-" + "0" + d; }
        //日期>=10號
        }else{
            //月份<10號
            if (m < 10){ var date = y + "-" + "0" + m + "-" + d;
            //月份>=10號
            }else{ var date = y + "-" + m + "-" + d; }
        }

        //取得note
        const noteArr = localStorage.getItem("note").split(">");
        var newNoteArr = "";
        for (let i = 0; i < noteArr.length; i++){
            const noteArrObj = JSON.parse(noteArr[i]);
            noteArrObj.index = i ;
            if (noteArrObj.noteDate === date){
                if (newNoteArr === ""){
                    newNoteArr += JSON.stringify(noteArrObj);
                }else{
                    newNoteArr += ">" + JSON.stringify(noteArrObj);
                }
            }
        }
        //顯示在行事曆下方
        const newNoteArrSplit = newNoteArr.split(">");

        for ( let i = 0 ; i < newNoteArrSplit.length; i++ ){
            const noteObj = JSON.parse(newNoteArrSplit[i]);
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
                note03.id = "noteIndex-X" + i;
                noteTitle.className = "note-title";
                noteTitle.id = "note-title-X" + i;
                noteDate.className = "note-date note-date-" + noteObj.noteDate;
                noteDate.id = "note-date-X" + i;
                noteX.className =  "note-x noteX" + i ;
                noteX_i.className = "fa fa-close";
                noteContent.className = "note-content";
                noteContent.id = "note-content-X" + i;
                note03.innerText = noteObj.index;
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
        this.connectedCallback();
        this.disconnectedCallback();
    }

    removeNote(e){
         //取得日期
         const noteArrIndex = e.target.parentNode.parentNode.parentNode.lastChild.innerText;
         const nn = e.target.parentNode.parentNode.parentNode.id.split("noteX")[1];
         const dateId = "note-date-X" + nn ;
         const date = this.shadowRoot.getElementById(dateId).innerText;
 
         //刪除localStorage中這筆note 
         const noteArr = localStorage.getItem("note").split(">");
         var newNoteArr = ""; 
         for (let i = 0; i < noteArr.length; i++){
             if (i != parseInt(noteArrIndex)){
                 if ( newNoteArr === "" ){ 
                     newNoteArr = noteArr[i]                     
                 }else{
                     newNoteArr += ">" + noteArr[i]; 
                 } 
             }
         }
         localStorage.setItem("note", newNoteArr);
 
         //計算nyyyy-mm-dd
         const ndate = "n" + date;
         const localSItem = parseInt(localStorage.getItem(ndate));
 
         if (localSItem == 1){
             localStorage.removeItem(ndate);
         }else if (localSItem > 1){
             const temp = localSItem - 1;
             localStorage.setItem(ndate, temp);
        }

        this.getDate();

        // 重整note
        this.shadowRoot.querySelectorAll(".note00").forEach(item => {
            item.remove();
        });
        
        const localSItem2 = parseInt(localStorage.getItem(ndate));

        if(localSItem2 >= 1){

            const noteArr2 = localStorage.getItem("note").split(">");
            var newNoteArr2 = "";

            for (let i = 0; i < noteArr2.length; i++){
                const noteArrObj2 = JSON.parse(noteArr2[i]);
                noteArrObj2.index = i ;
                if (noteArrObj2.noteDate === date){
                    if (newNoteArr2 === ""){
                        newNoteArr2 += JSON.stringify(noteArrObj2);
                    }else{
                        newNoteArr2 += ">" + JSON.stringify(noteArrObj2);
                    }
                }
            }
            const newNoteArrsplit2 = newNoteArr2.split(">");
            for ( let i = 0 ; i < newNoteArrsplit2.length; i++ ){
                const noteObj2 = JSON.parse(newNoteArrsplit2[i]);
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
                note03.id = "noteIndex-X" + i;
                noteTitle.className = "note-title";
                noteTitle.id = "note-title-X" + i;
                noteDate.className = "note-date note-date-" + noteObj2.noteDate;
                noteDate.id = "note-date-X" + i;
                noteX.className =  "note-x noteX" + i ;
                noteX_i.className = "fa fa-close";
                noteContent.className = "note-content";
                noteContent.id = "note-content-X" + i;
                note03.innerText = noteObj2.index;
                noteTitle.innerText = noteObj2.noteTitle;
                noteDate.innerText = noteObj2.noteDate;
                noteContent.innerText = noteObj2.noteContent;

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
        
        this.connectedCallback();
        this.disconnectedCallback();
    }

    connectedCallback(){
        this.shadowRoot.getElementById("yyyy").addEventListener("change", (e) => this.changeyyyy(e));
        this.shadowRoot.getElementById("mm").addEventListener("change", (e) => this.changemm(e));
        this.shadowRoot.querySelectorAll(".aplanTR").forEach(item => {
            item.addEventListener("click", (event) => this.getNote(event))
        });
        this.shadowRoot.querySelectorAll(".note-x").forEach(item => {
            item.addEventListener("click", (event)=> this.removeNote(event));
        });
        
    }
    disconnectedCallback(){
        this.shadowRoot.getElementById("yyyy").removeEventListener("change", (e) => this.changeyyyy(e));
        this.shadowRoot.getElementById("mm").removeEventListener("change", (e) => this.changemm(e));
        this.shadowRoot.querySelectorAll(".aplanTR").forEach(item => {
            item.removeEventListener("click", (event) => this.getNote(event))
        });
        this.shadowRoot.querySelectorAll(".note-x").forEach(item => {
            item.removeEventListener("click", (event)=> this.removeNote(event));
        });
    }
}
window.customElements.define("plan-component", Plan);

export default Plan;
