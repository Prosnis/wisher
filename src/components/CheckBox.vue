<template>
  <div class="checkbox-wrapper">
    <input
      id="switch"
      type="checkbox"
    ><label for="switch" />
  </div>
</template>

<style scoped>
.checkbox-wrapper input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
}

.checkbox-wrapper label {
    --size: 50px;

    cursor: pointer;
    width: var(--size);
    height: calc(var(--size) / 2);
    background: grey;
    display: block;
    border-radius: 100px;
    position: relative;
}

.checkbox-wrapper label:after {
    content: '';
    position: absolute;
    top: 6%;
    left: 2.5%;
    width: calc(50% - 5%);
    height: calc(100% - 11%);
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
}

.checkbox-wrapper input:checked+label {
    background: #bada55;
}

.checkbox-wrapper input:checked+label:after {
    left: calc(100% - 2.5%);
    transform: translateX(-100%);
}

.checkbox-wrapper label:active:after {
    width: 55%;
}
</style>
