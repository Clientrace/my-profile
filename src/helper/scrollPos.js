


const getScrollPosition = (element) => {
  var xPos = 0;
  var yPos = 0;
  while(element){
    if(element.tagName === 'BODY'){
      var xScroll = element.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = element.scrollTop || document.documentElement.scrollTop;

      xPos += (element.offsetLeft - xScroll + element.clientLeft);
      yPos += (element.offsetTop - yScroll + element.Top);
    } else {
      xPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
      yPos += (element.offsetTop - element.scrollLeft + element.clientLeft);
    }
  }
  return {
    x: xPos,
    y: yPos
  }
}

export default getScrollPosition;


