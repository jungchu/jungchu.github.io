function changeStatusSelectorN(citySelectorN, statusSelectorN, dataArr, dataLen, getStationInfoN, clearStationInfo){
    clearStationInfo();

    if (statusSelectorN.value == "不分測站狀態"){
        if (citySelectorN.value == "不分縣市"){ 
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                getStationInfoN(i, dataArr); 
            }
        }else if (citySelectorN.value == "基隆市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "基隆市"){ 
                    getStationInfoN(i, dataArr); 
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "臺北市"){   
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺北市"){ 
                    getStationInfoN(i, dataArr); 
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            } 
        }else if (citySelectorN.value == "新北市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新北市"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "桃園市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "桃園市"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "新竹市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新竹市"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "新竹縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新竹縣"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "苗栗縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "苗栗縣"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "臺中市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺中市"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "彰化縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "彰化縣"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "南投縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "南投縣"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "雲林縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "雲林縣"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "嘉義縣"){document.getElementById("infoContainerN").innerHTML = "" ;
        for (let i = 0; i < dataLen; i++){ 
            if (dataArr[i].countyName == "嘉義縣"){ 
                getStationInfoN(i, dataArr);
            }
        }
        if (document.getElementsByClassName("stationInfo").length == 0){
        document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
        }
        }else if (citySelectorN.value == "臺南市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺南市"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "高雄市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "高雄市"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "屏東縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "屏東縣"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "宜蘭縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "宜蘭縣"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "花蓮縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "花蓮縣"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "臺東縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺東縣"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "連江縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "連江縣"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "澎湖縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "澎湖縣"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "金門縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "金門縣"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無設置無人測站。</p>" ;
            }
        }


    }else if (statusSelectorN.value == "現存測站"){

        if (citySelectorN.value == "不分縣市"){ 
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr); 
                }
            }
        }else if (citySelectorN.value == "基隆市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "基隆市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr); 
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "臺北市"){  
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺北市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr); 
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }  
        }else if (citySelectorN.value == "新北市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新北市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "桃園市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "桃園市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "新竹市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新竹市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "新竹縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新竹縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "苗栗縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "苗栗縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "臺中市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺中市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "彰化縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "彰化縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "南投縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "南投縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "雲林縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "雲林縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "嘉義縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "嘉義縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "臺南市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺南市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "高雄市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "高雄市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "屏東縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "屏東縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "宜蘭縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "宜蘭縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "花蓮縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "花蓮縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "臺東縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺東縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "連江縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "連江縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "澎湖縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "澎湖縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "金門縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "金門縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無現存無人測站。</p>" ;
            }
        }
     
        
    }else if (statusSelectorN.value == "已撤銷"){
       
        if (citySelectorN.value == "不分縣市"){ 
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr); 
                }
            }
        }else if (citySelectorN.value == "基隆市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "基隆市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr); 
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "臺北市"){    
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺北市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerText = "該縣市無已撤銷無人測站。" ;
            }
        }else if (citySelectorN.value == "新北市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新北市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "桃園市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "桃園市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "新竹市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新竹市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "新竹縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新竹縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "苗栗縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "苗栗縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "臺中市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺中市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "彰化縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "彰化縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "南投縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "南投縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "雲林縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "雲林縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "嘉義縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "嘉義縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "臺南市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺南市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "高雄市"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "高雄市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "屏東縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "屏東縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "宜蘭縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "宜蘭縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "花蓮縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "花蓮縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "臺東縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺東縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "連江縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "連江縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "澎湖縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "澎湖縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }else if (citySelectorN.value == "金門縣"){
            document.getElementById("infoContainerN").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "金門縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoN(i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerN").innerHTML = "<p>該縣市無已撤銷無人測站。</p>" ;
            }
        }

    };
};