var Transition ={
  beforeEnter(el){
    el.classList.add("iv-transition");
    el.style.height = '0px';
    el.style.opacity = 0;
    el.style.overflow = "hidden";
  },

  enter(el){
    var height = calcHeight(el);
    el.style.opacity = 1;
    el.style.height = height + "px";
  },

  afterEnter(el){
    el.style.overflow = "visitiable";
  },

  beforeLeave(el){
    el.style.overflow = "hidden";
  },

  leave(el){
    el.style.opacity = 0;
    el.style.height = "0px";
  },
}


function css(el,attr){ 
  if(el.currentStyle){ 
    return parseFloat(el.currentStyle[attr]); 
  } 
  else{ 
    return parseFloat(document.defaultView.getComputedStyle(el,null)[attr]); 
  } 
}

function calcHeight(el){
  var margin = css(el,"marginTop") + css(el,"marginBottom"),
      padding = css(el,"paddingTop") + css(el,"paddingBottom");

  var height = el.scrollHeight - margin - padding;
  return height;
}


export default {
  name: 'slideDown',
  functional: true,
  render(h, { children }) {
    const data = {
      on: Transition
    };
    return h('transition', data, children);
  }
};
