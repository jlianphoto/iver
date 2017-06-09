class Transition {
  beforeEnter(el){
    console.log(el)
  }

  enter(el){
    console.log(1)
  }

  afterEnter(el){
    console.log(2)
  }

  beforeLeave(el){
    console.log(3)
  }

  leave(el){
    console.log()
  }

  afterLeave(el){

  }
}


export default {
  name: 'slideDown',
  functional: true,
  render(h, { children }) {
    const data = {
      on: new Transition()
    };
    return h('transition', data, children);
  }
};
