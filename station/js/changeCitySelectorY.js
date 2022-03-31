function changeCitySelectorY(citySelectorY, statusSelectorY, dataArr, dataLen, getStationInfoY, clearStationInfo){
    clearStationInfo();

    if (citySelectorY.value == "不分縣市"){ 

        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                getStationInfoY (i, dataArr); 
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr); 
                }
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr); 
                }
            }
        }
    }else if (citySelectorY.value == "基隆市"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "基隆市"){ 
                    getStationInfoY (i, dataArr); 
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "基隆市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr); 
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "基隆市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr); 
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }
        


    }else if (citySelectorY.value == "臺北市"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺北市"){ 
                    getStationInfoY (i, dataArr); 
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺北市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr); 
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺北市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerText = "該縣市無已撤銷有人測站。" ;
            }
        }


    }else if (citySelectorY.value == "新北市"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新北市"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新北市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新北市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }


    }else if (citySelectorY.value == "桃園市"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "桃園市"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "桃園市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "桃園市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        } 


    }else if (citySelectorY.value == "新竹市"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新竹市"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新竹市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新竹市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        } 
    }else if (citySelectorY.value == "新竹縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新竹縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新竹縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "新竹縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }
        


    }else if (citySelectorY.value == "苗栗縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "苗栗縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "苗栗縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "苗栗縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }



    }else if (citySelectorY.value == "臺中市"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺中市"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺中市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺中市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }
        


    }else if (citySelectorY.value == "彰化縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "彰化縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "彰化縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "彰化縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }


    }else if (citySelectorY.value == "南投縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "南投縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "南投縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "南投縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }


    }else if (citySelectorY.value == "雲林縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "雲林縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "雲林縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "雲林縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }


    }else if (citySelectorY.value == "嘉義縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "嘉義縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "嘉義縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "嘉義縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }

    }else if (citySelectorY.value == "臺南市"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺南市"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺南市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺南市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }

        
    }else if (citySelectorY.value == "高雄市"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "高雄市"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "高雄市" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "高雄市" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }


    }else if (citySelectorY.value == "屏東縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "屏東縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "屏東縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "屏東縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }
    }else if (citySelectorY.value == "宜蘭縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "宜蘭縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "宜蘭縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "宜蘭縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }


    }else if (citySelectorY.value == "花蓮縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "花蓮縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "花蓮縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "花蓮縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }


    }else if (citySelectorY.value == "臺東縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺東縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺東縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "臺東縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }


    }else if (citySelectorY.value == "連江縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "連江縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "連江縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "連江縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }


    }else if (citySelectorY.value == "澎湖縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "澎湖縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "澎湖縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "澎湖縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }


    }else if (citySelectorY.value == "金門縣"){
        if (statusSelectorY.value == "不分測站狀態"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "金門縣"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無設置有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "現存測站"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "金門縣" && dataArr[i].status == "現存測站"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無現存有人測站。</p>" ;
            }
        }else if (statusSelectorY.value == "已撤銷"){
            document.getElementById("infoContainerY").innerHTML = "" ;
            for (let i = 0; i < dataLen; i++){ 
                if (dataArr[i].countyName == "金門縣" && dataArr[i].status == "已撤銷"){ 
                    getStationInfoY (i, dataArr);
                }
            }
            if (document.getElementsByClassName("stationInfo").length == 0){
            document.getElementById("infoContainerY").innerHTML = "<p>該縣市無已撤銷有人測站。</p>" ;
            }
        }
    }

};