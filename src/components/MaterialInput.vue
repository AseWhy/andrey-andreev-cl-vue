<template>
  <div class="av-ui-material-input">
    <label
      class="av-ui-material-input-label"
      ref="label"
      :class="{ focused: focus }"
    >
      {{ label }}
    </label>

    <input
      class='av-ui-material-input-input'
      ref="input"
      :type="type"
      :disabled="disabled != null ? disabled : false"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="focus = true"
      @focusout="focusout($event)"
      @keypress="$event.keyCode == 13 ? focusout($event, true) : null"
    />
  </div>
</template>

<script>
  export default {
    props: ['label', 'type', 'disabled', 'modelValue', 'focused' ],

    data(){
      return {
        focus: this.focused || this.modelValue && this.modelValue.length != 0 || false
      }
    },

    mounted(){
      if(this.focused) {
        this.$refs.input.focus();
      }
    },

    methods: {
      focusout(event, kp){
        if(!kp && event.target.modelValue?.trim() == '') {
          this.$data.focus = false;
        }

        this.$emit('focusout')
      }
    },
  }
</script>

<style scoped>
  .av-ui-material-input {
    position: relative;
    --color: black;
  }

  .av-ui-material-input-label {
    position: absolute;
    padding: 0 0.25rem;
    top: 0.6rem;
    left: 0.5rem;
    z-index: 1;
    transition: 0.25s;
    pointer-events: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    color: var(--color);
    font-size: 1.5rem;
  }

  .av-ui-material-input-label.focused {
    top: -0.6rem;
    left: 0.25rem;
    font-size: 0.75em;
    margin-bottom: 0.25rem;
    background-color: white;
  }

  input.av-ui-material-input-input {
    width: calc(100% - 1rem);
    padding: 0.5rem;
    z-index: 0;
    font-size: 1.5rem;
    outline: none;
    border: none;
    color: var(--color);
    border-bottom: 1px solid var(--color);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    background-clip: text;
    color: var(--color);
    border-bottom: 1px solid var(--color);
  }
</style>
