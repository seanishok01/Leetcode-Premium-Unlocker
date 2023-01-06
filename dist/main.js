(()=>{"use strict";class t{constructor(t,e){this.name=t,this.button=e}}class e{constructor(t,e,n,a,o,l){this.frequency=t,this.id=e,this.difficulty=n,this.problemUrl=a,this.problemName=o,this.acceptance=l}}class n extends e{constructor(t,e,n,a,o,l,i,r){super(t,e,n,a,o,l),this.companyName=i,this.duration=r}}class a{constructor(){self.data={}}getData(){return self.data}getList(t){return t in self.data?self.data[t]:[]}appendData(t,e){t in self.data?self.data[t].push(e):self.data[t]=[e]}}function o(){function t(t){let e=document.createElement("div"),n=document.createElement("h3");return n.textContent=t,n.style="color: black;\n        text-align: center;\n        ",e.appendChild(n),e}function e(e){let n=t(e);return n.style="\n       width: 5%\n       ",n}function n(t){let e=document.createElement("div");e.style="\n        display: flex;\n        height: 1rem;\n        overflow: hidden;\n        font-size: .75rem;\n        background-color: #e9ecef;\n        border-radius: 0.25rem;\n        margin-top: auto;\n        margin-bottom: auto;\n        width:10%; \n        ";let n=document.createElement("div");return n.style="\n        height:100%; \n        width:20%; \n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        overflow: hidden;\n        color: #fff;\n        background-color: #0d6efd;\n        ",e.appendChild(n),e}function a(t,e){let n=document.createElement("div"),a=document.createElement("a");return a.href=e,a.textContent=t,n.appendChild(a),n.style="\n        width: 50%\n        ",n}function o(e){let n=t(e);return n.style="\n        width: 12%\n        ",n}function l(e){let n=t(e);return n.style="\n        width: 10%\n        ",n}function i(){let t=document.createElement("div");return t.style="\n        display:flex;\n        border-top: solid 1px black;\n        ",t}this.getTableContentElement=function(t){let r=document.createElement("div");r.appendChild(function(){let t=i();return t.appendChild(e("#")),t.appendChild(a("Title","#")),t.appendChild(l("Acceptance")),t.appendChild(o("Difficulty")),t.appendChild(l("Frequency")),t}());for(let s=0;s<=t.length-1;s++){let d=i(),c=(t[s].frequency,t[s].id),h=t[s].difficulty,u=t[s].problemUrl,p=t[s].problemName,m=t[s].acceptance;d.appendChild(e(c)),d.appendChild(a(p,u)),d.appendChild(l(m)),d.appendChild(o(h)),d.appendChild(n()),r.append(d)}return r}}class l{constructor(t){this.tableId="table-content",this.tableData=t,this.elementGenerator=new o}generateDurationButton(t){let e=document.createElement("button");return e.innerText=t,e.style=" \n        width:5%\n        ",e.setAttribute("duration",t),e.addEventListener("click",onDurationButtonClicked.bind(this)),e}onDurationButtonClicked(t){for(;this.parentDiv.firstChild;)this.parentDiv.removeChild(myNode.lastChild)}generateDurationButtons(){let t=generateRowDiv();return t.appendChild(generateDurationButton("6 months")),t.appendChild(generateDurationButton("1 year")),t.appendChild(generateDurationButton("2 years")),t.appendChild(generateDurationButton("All time")),t}getContentElement(){let t=this.tableData.getList("All time"),e=this.elementGenerator.getTableContentElement(t);return e.id=this.tableId,e}clearTable(){document.getElementById(this.tableId).remove()}}var i=new class{constructor(){this.modal=this.createModal(),this.modalContentBox=this.createModalContentBox(),this.appendToModal(this.modalContentBox),this.appendModal(document.body)}createModalContentBox(){let t=document.createElement("div");return t.style="\n        background-color: #fefefe;\n        margin-top:1%; \n        margin-left: auto;\n        margin-right: auto;\n        padding: 20px;\n        width: 80%;\n        mid-height: 15%\n        ",t}getModalContentBox(){return this.modalContentBox}appendModal(t){t.appendChild(this.modal)}appendToModal(t){this.modal.appendChild(t)}appendToContainer(t){this.modalContentBox.appendChild(t)}createCloseButton(){let t=document.createElement("span");return t.style=" \n        float: right;\n        font-size: 28px;\n        font-weight: bold;\n        cursor: pointer;\n        ",t.innerText="x",t.addEventListener("click",resetModal),t}createModal(){let t=document.createElement("div");return t.style=" \n        display: none; \n        position: fixed; \n        z-index: 32;\n        left: 0;\n        top: 0;\n        width: 100%; \n        height: 100%; \n        overflow: auto; \n        ",window.addEventListener("click",this.onModalClicked),t.id="CompanyModal",t}openModal(){this.modal.style.display=""}closeModal(){this.modal.style.display="none"}clearModalContent(){for(;null!=this.modalContentBox.firstChild;)this.modalContentBox.firstChild.remove()}onModalClicked=t=>{t.target==this.modal&&this.resetModal()};resetModal=()=>{this.closeModal(),this.clearModalContent()}},r=new function(){function e(t){var a=document.getElementsByClassName("mt-0")[0];const o=new MutationObserver((()=>{n(t)}));a?o.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}):window.setTimeout((()=>{e()}),500)}function n(e){let n=function(){let e=[],n=document.getElementsByClassName("swiper-slide-active"),a=n[n.length-1].getElementsByTagName("a");for(let n=0;n<=a.length-1;n++){let o=a[n].firstChild.firstChild.textContent.toLowerCase(),l=new t(o,a[n]);a[n].href="javascript:void(0)",e.push(l)}return e}();for(let t=0;t<=n.length-1;t++){let a=n[t].name;if(1!=n[t].button.getAttribute("listener-registered")){n[t].button.setAttribute("listener-registered","true"),n[t].button.setAttribute("company-name",a);for(let a=0;a<=e.length-1;a++)n[t].button.addEventListener("click",e[a])}}}this.onCompanyButtonClick=[],this.addOnCompanyButtonClickEvent=function(t){this.onCompanyButtonClick.push(t)},this.initialize=function(){n(this.onCompanyButtonClick),e(this.onCompanyButtonClick)}},s=new class{constructor(){this.sheetsId="1hW-bfeFKSkEDzfjaDMjDQmgsupEZz3gysXpG0mrf6QE",this.api_key="AIzaSyDDAE3rf1fjLGKM0FUHQeTcsmS6fCQjtDs",this.companyPageTableData={};let t=this.fetchPageTable();this.setCompanyPageTableData(t)}getUrl(t){return`https://sheets.googleapis.com/v4/spreadsheets/${this.sheetsId}/values/${t}?key=${this.api_key}`}fetchPageTable(){let t=this.getUrl("CompaniesProblem_Map!A:C");var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(),JSON.parse(e.responseText)}setCompanyPageTableData(t){let e=t.values;for(let t=1;t<=e.length-1;t++){let n=e[t][0],a=e[t][1],o=e[t][2];this.companyPageTableData[n]=[a,o]}}haveData(t){return t in this.companyPageTableData}getCompanyProblemData(t){let e=this.fetchCompanyProblemData(t);return this.parseData(e)}fetchCompanyProblemData(t){if(!this.haveData(t))return[];let e=`CompaniesProblem!A${this.companyPageTableData[t][0]}:I${this.companyPageTableData[t][1]}`,n=this.getUrl(e);var a=new XMLHttpRequest;return a.open("GET",n,!1),a.send(),JSON.parse(a.responseText).values}parseData(t){let e=new a;for(let a=0;a<=t.length-1;a++){let o=t[a][2],l=t[a][1],i=t[a][7],r=t[a][6],s=t[a][4],d=t[a][5],c=t[a][0],h=t[a][3],u=new n(o,l,i,r,s,d,c,h);e.appendData(h,u)}return e}};r.addOnCompanyButtonClickEvent((t=>{let e=t.currentTarget.getAttribute("company-name"),n=s.getCompanyProblemData(e),a=new l(n).getContentElement();i.appendToContainer(a),i.openModal()})),r.initialize()})();