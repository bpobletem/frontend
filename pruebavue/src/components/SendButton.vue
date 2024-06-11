<template>
<button class="button-40 ">
    {{text}}
</button>
</template>

<script>
export default{
    props: {
        text:{
            type: String,
            required: true,
        }
    }
}
</script>

<style>
.button-40 {
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5rem;
  padding: .5rem 1.2rem;
  text-align: center;
  transition-duration: .2s;
  touch-action: manipulation;
  width: auto;
}

.button-40:hover {
  background-color: #374151;
}

.button-40:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
</style>
