
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
    volume: { min: 0, max: 50 },
    brightness: { min: 0, max: 70 },
    speed: { min: 0, max: 30 }
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
        
        slider.value = sliderValues[currentTarget];
        slider.min = sliderRanges[currentTarget].min;
        slider.max = sliderRanges[currentTarget].max;
        valueDisplay.textContent = sliderValues[currentTarget];
    });
});