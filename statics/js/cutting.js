var units;
units=document.getElementById("units")

var defects=new Array();
defects["Knits"]=["Bariness","Bunching Up","Drop Stitch","Holes/Cracks","Crack Fall Out","Horizontal Stripes",
    "Vertical Stripes","Birdseye","Course Yarn","Misdraw"]
defects["Woven"]=["Coloured Flecks","Knots","Slub","Broken Ends Woven In A Bunch","B roken Pattern","Double End","Float",
    "Gout","Hole","Lashing-In","Local Distortion","Missing Ends","Missing Picks","Oil/Stain","Oily Ends","Oily Picks",
    "Reed Mark","Slough Off","Shuttle Smash"]
defects["Checks"]=["d1"]
defects["Stripes"]=["Crack Between Stripes"]
defects["Printed"]=["Broken Colour Pattern","Flipped Yarn","Blabbiness","Bleeding","Stain","Uneven Printing",
    "Slight Touching","Poorly Adjusted Screen","Double Printing","Pressing Paste By Frame","Pattern Bending",
    "Speck","Colour Smear","Listing"]
defects["Yarn Dye"]=["Barre","Bleeding","Crocking","Shade Bar","Shading","Stain","Colour Variation in Yarn","Hole",
    "Creasing","Streaked"]
defects["Fibre Dye"]=["d2"]
defects["Piece Dye"]=["d3"]

function unitChange(selectObject){
    var id=selectObject.selectedIndex;
    var val=selectObject.options[id].value;
    console.log(val);
    document.getElementById("units2").value=val;
    document.getElementById("units3").value=val;
    document.getElementById("units4").value=val;
}
// devMeasure needs to be structured and error free
function devMeasure(){
    var actual=document.getElementById("alength").value;
    var sticked=document.getElementById("slength").value;
    if(actual==""){
    actual=0;}
    else if(sticked==""){
    sticked=0;}
    var d=Number(sticked)-Number(actual)
    document.getElementById("deviation").value=d;
}

function defectChange(selectObj){
    var id=selectObj.selectedIndex;
    var val = selectObj.options[id].value;
    myList=defects[val];
    var defect=document.getElementById("dType");
    var len=defect.options.length; 
    while (defect.options.length > 0) { 
        defect.remove(0); 
    } 
    var newOption; 
    for (var i=0; i<myList.length; i++) { 
        newOption = document.createElement("option"); 
        newOption.value = myList[i];  // assumes option string and value are the same 
        newOption.text=myList[i]; 
        // add the new option 
        try { 
        defect.add(newOption);  // this will fail in DOM browsers but is needed for IE 
        } 
        catch (e) { 
        defect.appendChild(newOption); 
        } 
    } 
}
function tlhPoints(){
    var n=linearPoints()+holePoints();
    document.getElementById("tlp").value=n;
    return n;
}

function linearPoints(){
    var d3=document.getElementById("d3").value;
    var d36=document.getElementById("d36").value;
    var d69=document.getElementById("d69").value;
    var d9=document.getElementById("d9").value;
    if(d3==""){
    d3=0;}
    else if(d36==""){
    d36=0;}
    else if(d69==""){
    d69=0;}
    else if(d9==""){
    d9=0;}
    lpoints=(Number(d3)*1)+(Number(d36)*2)+(Number(d69)*3)+(Number(d9)*4);
    document.getElementById("totalPoints").value=lpoints;
    return lpoints;
}
function holePoints(){
    var n01=document.getElementById("n01").value;
    var ng1=document.getElementById("ng1").value;
    if(n01==""){
        n01=0;}
    else if(ng1==""){
        ng1=0;}
    hpoints=(Number(n01)*2)+(Number(ng1)*4);
    document.getElementById("hp").value=hpoints;  
    return hpoints; 
}

function pointsPerUnit(){
    var totalYardsInspected=1; //totalYardsInspected NOT CLEAR YET
    var pointsYard=(tlhPoints()*3600)/((Number(document.getElementById("fWidth").value))*totalYardsInspected);
    document.getElementById("p100").value=Number(pointsYard);
    console.log(pointsYard);
    document.getElementById("p100m").value=Number(pointsYard/0.83612736);
    document.getElementById("p100cm").value=Number(pointsYard/8361.2736);
    // Change models.py to accept decimal values
}