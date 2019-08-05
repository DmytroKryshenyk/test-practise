<template>
  <div>
    <p>{{countValue}}</p>
    <button type="button" v-nazva:click="someMethod">Count</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countValue: 0
    };
  },
  // створення локальної директиви
  directives: {
    // directives -це поле для створення своїх локальних директив
    nazva: {
      //nazva - це назва нашої директиви
      /*  ниже bind() – це хук директиви. І цей хук bind() викликається тоді коли наша директива навішується на елемент-вузол.  
      Ним ми робим привязку передаючи параметром  дом елемент domEl на якому ми запускаєм подію і опції нашої директиви options */
      bind(domEl, options) {
        let callbackNazva = event => {
          //стрілона ф-ція із-за this
          options.value.call(this, event);
        };
        domEl.addEventListener(options.arg, callbackNazva); // тут options.arg –це тип(arg) події, в нашому випадку click
      }
    }
  },

  methods: {
    someMethod() {
      this.countValue += 1;
    }
  }
};
</script>

