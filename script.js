let Info = new Array();
let Cat1 = new Array();
let Cat2 = new Array();
Cat1 = ["Ribs", "skull","backbone","pelvis"]
Cat2 = ["LeftLeg","RightHand","RightLeg","LeftHand"]
Info["Ribs"] = {
    header: "Rib cage",
    body: "Protects against blah blah blah"
};
Info["backbone"] = {
    header: "vertebral column",
   
};
Info["pelvis"] = {
    header: "The basin",
    
};
Info["skull"] = {
    header: "Skull",
    
};
Info["LeftHand"] = {
    header: "left hand",
    
};
Info["LeftLeg"] = {
    header: "Left foot",
    
};
Info["RightHand"] = {
    header: "right hand",
    
};
Info["RightLeg"] = {
    header: "Right foot",
    
};


function display(id){
    document.getElementsByClassName('part-name')[1].innerHTML = ' ';
    document.getElementsByClassName('part-name')[1].innerHTML += Info[id].header;
    if (Cat1.includes(id)){
    document.getElementById('cat1').style.backgroundColor = '#CCCC00';
    document.getElementById('cat2').style.backgroundColor = 'transparent';
    }
    else if ( Cat2.includes(id)) {
        document.getElementById('cat1').style.backgroundColor = 'transparent';
        document.getElementById('cat2').style.backgroundColor = '#32CD32';
    }
}