let imagesList = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
window.addEventListener("load",function(){
    let selectBoutom =document.getElementById("next-button");
    let firstImage=document.getElementById("first-imag");
    let imageIndex=1

    selectBoutom.onclick=function(){

        imageIndex++
        if(imageIndex==imagesList.length-1){

            imageIndex=0
        }
        else{
            firstImage.src=`${imagesList[imageIndex]}`
        }

    }

    let privosButton=document.getElementById("privios-button");
    
    privosButton.onclick=function(){
        imageIndex--
        if(imageIndex<0){
            imageIndex=imagesList.length-1
            

        }
        else{
            firstImage.src=imagesList[imageIndex]
            console.log(firstImage.src)
        }

    }
    /////////Slider Show
    let slideShow=document.getElementById("sliderShow-button");
    let changeInterval
    function changeImage() {
    firstImage.src = imagesList[count];
    count = (count + 1) % imagesList.length;


}
    slideShow.onclick=function(){
     changeInterval = setInterval(changeImage, 1000)
    slideShow.setAttribute("disabled","")


    }

    ////////Stop Intervel
    let stopImage=document.getElementById("stop-button");
    stopImage.onclick=function(){
        clearInterval(changeInterval)
        slideShow.removeAttribute("disabled")



    }
    



})