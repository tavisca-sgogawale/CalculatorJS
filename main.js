var Calculator = ()=>{
return render=()=>{
          let body = document.getElementsByClassName("maincontent")[0];
          let container = document.createElement("div");
          container.setAttribute("class","container");

          let display = document.createElement("div");
          display.setAttribute("class","display");

          var displayBox = document.createElement("input");
          displayBox.setAttribute("class","displayBar");
          displayBox.readOnly=true;
          display.appendChild(displayBox);
          container.appendChild(display);
          body.appendChild(container);
          let numberPad = document.createElement("div");
          numberPad.setAttribute("class","numberpad")

          let buttonArray= [{title:"C",value:"C",onclick:onClear},{title:'S',value:'-1',onclick:onSign},{title:"<",value:"<",onclick:onBackspace},{title:"/",value:"/",onclick:onInput},
                            {title:7,value:7,onclick:onInput},{title:8,value:8,onclick:onInput},{title:9,value:9,onclick:onInput},{title:'X',value:'*',onclick:onInput},
                            {title:4,value:4,onclick:onInput},{title:5,value:5,onclick:onInput},{title:6,value:6,onclick:onInput},{title:"-",value:'-',onclick:onInput},
                            {title:1,value:1,onclick:onInput},{title:2,value:2,onclick:onInput},{title:3,value:3,onclick:onInput},{title:"+",value:"+",onclick:onInput},
                            {title:0,value:0,onclick:onInput},{title:"00",value:"00",onclick:onInput},{title:".",value:".",onclick:onInput},{title:"=",value:"=",onclick:calculate}]
          for(let i of buttonArray)
          {
            let button = document.createElement("button");
            button.innerText=i.title;
            button.value=i.value;
            button.onclick=i.onclick;
            numberPad.appendChild(button);
          }
          container.appendChild(numberPad);

          function onBackspace(){
            let displayText= displayBox.value.substring(0,displayBox.value.length-1);
          displayBox.value =displayText;
          }
          function onSign(event)
          {
            displayBox.value = eval(displayBox.value *-1);
          }
          function onInput(event){
              displayBox.value += ""+event.target.value;
          }
          function onClear(){
            displayBox.value ="";
          }
          function calculate()
              {
                
                let expression = displayBox.value;
                try
                  {
                    var result = eval(expression);
                    displayBox.value = result.toFixed(2);
                  }
                catch(err){

                    alert("Invalid Expression");
                    displayBox.value = "";
                  }
              }
  }
  
}
let calculateInstance1 =  Calculator();
 calculateInstance1();
let calculateInstance2 =  Calculator();
calculateInstance2(); 
let calculateInstance3 =  Calculator();
calculateInstance3();

