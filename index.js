let age=document.querySelector("#age");
let height=document.querySelector("#Height");
let weight=document.querySelector("#Weight");
let cal=document.querySelector("#calculate");
let clr=document.querySelector("#clear");
let result=document.querySelector("#result");
let bmi=0;
cal.addEventListener("click",function()
{
  if(age.value<2 || age.value>120)
  {
     result.innerHTML=`<h3 style="color:red">Please provide an age between 2 and 120</h3>`;
  }
  else if(weight.value<=0)
  {
    result.innerHTML=`<h3 style="color:red">please enter positive weight only</h3>`;
  }
  else if(height.value<=0)
  {
    result.innerHTML=`<h3 style="color:red">please enter positive height only</h3>`;
  }
  else{
    let height_m=Number(height.value);
    console.log(height_m)
    let mtr=height_m * 0.01;
    console.log(mtr);
    let weight_cal=Number(weight.value);
    bmi=weight_cal / (mtr*mtr);
    let category;
    if(bmi<16)
    {
      category="Severe Thinness";
    }
    else if(bmi>=16 && bmi<17)
    {
      category="Moderate Thinness";
    }
    else if(bmi>=17 && bmi<18.5)
    {
      category="Mild Thinness";
    }
    else if(bmi>=18.5 && bmi<25)
    {
      category="Normal";
    }
    else if(bmi>=25 && bmi<30)
    {
      category="Overweight";
    }
    else if(bmi>=30 && bmi<35)
    {
      category="Obese Class I";
    }
    else if(bmi>=35 && bmi<40)
    {
      category="Obese Class II";
    }
    else if(bmi>40)
    {
      category="Obese Class III";
    }
    result.innerHTML=`<h2 style="background-color:green",color:white">Result</h2>
    BMI is ${bmi} kg/m2,<h3 style="color:red">${category}</h3>`;
    console.log(bmi);


  }

})

