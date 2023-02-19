const content = document.querySelector(".content");
const slider = document.querySelector(".slider");
const sliderImage = Array.from(document.querySelectorAll(".slider-image"));
const btnChevron = document.querySelectorAll(".btn-chevron");
const indicateur = document.querySelectorAll(".indicateur > li");
let i = 0;
let indicateur_array = [];




let reset = (container, clase) => {
    container.forEach(item => item.classList.remove(clase));
}

let createInfo = text => {
    const sliderInfo = document.createElement("p");
    sliderInfo.className = "slider-info";
    sliderInfo.textContent = text;
    content.appendChild(sliderInfo);
};

let createIndicators = () => {
    const container = document.createElement("div");
    container.className = "indicator";
    content.appendChild(container)
    sliderImage.forEach(image => {
        let indicator = document.createElement("p");
        indicator.textContent = sliderImage.indexOf(image) + 1;
        container.appendChild(indicator);
    })
}


let Image = (index) => {
    const sliderInfo = document.querySelector('.slider-info');
    sliderImage[index].classList.add('slider-image-active');
    reset(indicateur, 'indicateur-active');

    i==0 ? indicateur_array.push("indicateur-active"): 
    indicateur_array.splice(i-1, 0, 'nothing');

    indicateur[i].classList.add('indicateur-active');
    
    if (content.hasElement(".slider-info")) return sliderInfo.textContent = sliderImage[index].dataset.info;
    createInfo(sliderImage[index].dataset.info);   
}

let setPosition = (index) => {
    let width = sliderImage[index].getBoundingClientRect().width;
    slider.style.transform = `translateX(-${width * index}px)`;
}

let moveImage = () => {
    if (i === sliderImage.length) {
        i = 0;
    } else if (i == -1) {
        i = sliderImage.length - 1; 
    }
    reset(sliderImage, 'slider-image-active');
    setPosition(i);
    Image(i);
};

btnChevron.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.dataset.action == "right") {
            i++;
            IndicateurMini();
            color_change_next();
            return moveImage();
        }
        i--;
        IndicateurMini();
        color_change_next();
        return moveImage();
    })
})

function color_(){
    let pic_number = i + 1;
    let pic_class = "picture-" + pic_number;
    let pic_class_remove = "picture-" + i;
    let slider_info = document.querySelector('.slider-info');
    let btnChevron = document.querySelectorAll(".btn-chevron");
    for(let a = 0; a < indicateur.length; a++){
        indicateur[a].classList.remove(pic_class_remove);
    }
    for(let b =0; b < btnChevron.length; b++){
        btnChevron[b].classList.remove(pic_class_remove);
    }
    slider_info.classList.remove(pic_class_remove);


    for(let a = 0; a < indicateur.length; a++){
        indicateur[a].classList.toggle(pic_class);
    }
    for(let b =0; b < btnChevron.length; b++){
        btnChevron[b].classList.toggle(pic_class);
    }
    slider_info.classList.toggle(pic_class);
}


//a optimiser//
function color_change_next(){
    switch(i){
        case 0:
            color_();
            break;
        case 1:
            color_();
            break;
        case 2:
            color_();
            break;
        case 3:
            color_();
            break;
        case 4:
            color_();
            break;
        case 5:
            color_();
            break;
        case 6:
            color_();
            break;
        case 7:
            color_();
            break;
        case 8:
            color_();
            break;
        case 9:
            color_();
            break;
        case 10:
            color_();
            break;
    }
}

function IndicateurMini(){
    for(let r = 0; r < indicateur.length; r++){
        indicateur[r].classList.remove("petit");
        indicateur[r].classList.remove("petit_two");
        indicateur[r].classList.remove("no-display");
    }


    indicateur.forEach(value_petit => {
        indicateur.forEach(value_petit_two => {
            indicateur.forEach(value_no_display => {
                length = indicateur_array.length;
                value_petit = indicateur_array.indexOf('indicateur-active') + 4;
                value_petit_two = indicateur_array.indexOf("indicateur-active") + 5;
                value_no_display = indicateur_array.indexOf("indicateur-active") + 6;
                if(length ==0){
                    indicateur[value_no_display+1].classList.add("no-display");
                    indicateur[value_no_display+2].classList.add("no-display");
                    indicateur[value_no_display+3].classList.add("no-display");
                    indicateur[value_no_display+4].classList.add("no-display");
                }
                if (length ==1){
                    indicateur[value_no_display+1].classList.add("no-display");
                    indicateur[value_no_display+2].classList.add("no-display");
                    indicateur[value_no_display+3].classList.add("no-display");
                }
                if (length ==2){
                    indicateur[value_no_display+1].classList.add("no-display");
                    indicateur[value_no_display+2].classList.add("no-display");
                }
                if (length ==3){
                    indicateur[value_no_display+1].classList.add("no-display");
                }
                if (length <= 4){
                    indicateur[value_petit].classList.add('petit');
                    indicateur[value_petit_two].classList.add("petit_two");
                    indicateur[value_no_display].classList.add("no-display");
                }
                if (length == 3){
                    indicateur[value_petit-6].classList.add('petit');
                }
                if(length >= 4){
                    value_petit = indicateur_array.indexOf('indicateur-active') - 2;
                    value_petit_two = indicateur_array.indexOf("indicateur-active") - 3;
                    value_no_display = indicateur_array.indexOf("indicateur-active") - 4;
                    indicateur[value_petit].classList.add('petit');
                    indicateur[value_petit_two].classList.add("petit_two");
                }
                if (length >= 5){
                    indicateur[value_petit].classList.add('petit');
                    indicateur[value_petit_two].classList.add("petit_two");
                    indicateur[value_no_display].classList.add("no-display");
                }
                if (length == 5){
                    indicateur[value_petit+6].classList.add('petit');
                    indicateur[value_petit_two+8].classList.add("petit_two");
                }
                if (length == 6){
                    indicateur[value_petit+6].classList.add('petit');
                    indicateur[value_no_display-1].classList.add("no-display");
                }
                if (length == 7){
                    indicateur[value_no_display-1].classList.add("no-display");
                    indicateur[value_no_display-2].classList.add("no-display");
                }
                if (length == 8){
                    indicateur[value_no_display-1].classList.add("no-display");
                    indicateur[value_no_display-2].classList.add("no-display");
                    indicateur[value_no_display-3].classList.add("no-display");
                }
                if (length == 9){
                    indicateur[value_no_display-1].classList.add("no-display");
                    indicateur[value_no_display-2].classList.add("no-display");
                    indicateur[value_no_display-3].classList.add("no-display");
                    indicateur[value_no_display-4].classList.add("no-display");
                }
                if(length ==10){
                    indicateur_array = [];
                    for(let r = 0; r < indicateur.length; r++){
                        indicateur[r].classList.remove("petit");
                        indicateur[r].classList.remove("petit_two");
                        indicateur[r].classList.remove("no-display");
                    }

                }
            })
        })
    })


}
IndicateurMini();
Image(i);

