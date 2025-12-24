
const slider = document.getElementById('verticalSlider');
const valueDisplay = document.getElementById('valueDisplay');
const viewDisplay = document.getElementById('viewDisplay');
const targetName = document.getElementById('targetName');
const buttons = document.querySelectorAll('.target-button');

const sliderValues = {
    volume: 50,
    brightness: 70,
    speed: 30
};

const sliderRanges = {
    volume: { min: 0, max: 7 },
    brightness: { min: 0, max: 9 }
};


let currentTarget = 'volume';

slider.addEventListener('input', async function() {
    const v = this.value;
    sliderValues[currentTarget] = this.value;

    valueDisplay.textContent =  this.value;
});

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        currentTarget = this.dataset.target;
        targetName.textContent = this.textContent;
        
        // slider.value = sliderValues[currentTarget];
        // valueDisplay.textContent = sliderValues[currentTarget];
    });
});

// buttons.forEach(button => {
//     button.addEventListener('click', function () {
//         buttons.forEach(btn => btn.classList.remove('active'));
//         this.classList.add('active');

//         currentTarget = this.dataset.target;
//         // targetName.textContent = this.textContent;

//         // ★ Apply min/max for this target
//         slider.min = sliderRanges[currentTarget].min;
//         slider.max = sliderRanges[currentTarget].max;

//         // ★ Restore saved value (clamped)
//         let saved = sliderValues[currentTarget];

//         if (saved < slider.min) saved = slider.min;
//         if (saved > slider.max) saved = slider.max;

//         slider.value = slider.max; //saved;
//         valueDisplay.textContent = slider.max; //saved;
//         viewDisplay.textContent = floorNameOf(slider.max); //saved;

//         if(currentTarget != "volume")
//             sliderSelector = "ARB";
//         else
//             sliderSelector = "ARI";

//         // console.log(sliderSelector);

//         const a = ariInternalOrder.concat(arbInternalOrder);
//         a.forEach( (o) => {
//             let oo = _layers[3].keyAtObject(o);
//             if(oo == null) return;
//             oo.setVisible(true);
//         });

//         setTimeout(initExitArrow, 300);

//     });
// });

    //## Take object out one by one and show them
    function slideInternal(id) {

        const frequency = 100;
        const lyrIdx = _layerNames.indexOf("lyrInternalBuilding");


        let order = null;
        if(sliderSelector == "ARB")
            order = arbInternalOrder;
        else
            order = ariInternalOrder;

        let idx = 0;
        let lastIdx = order.length-1;

        // console.log(order);
        let intervalId = setInterval(() => {
            // console.log("param id is " + id + " " + order[id]);
            // console.log("idx, id" + order[idx] + " " + order[id]);
            // console.log("idx > id" + (order[idx] > order[id]));

            let o = _layers[lyrIdx].keyAtObject(order[idx])
            if(o == null) return;

            if(idx < id)
                o.setVisible(false);
            else
                o.setVisible(true);

            if(idx >= lastIdx) 
                clearInterval(intervalId);

            idx++;

        }, frequency); 

    }


    //##
    function floorNameOf(n){
        // console.log(typeof(n));
        if(n == '0') 
            return "B-1";

        return "F-" + n;
    }