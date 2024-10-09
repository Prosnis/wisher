<template>
    <div class="base-modal">
        <div class="modal-wrapper">
            <div class="modal-content">
                <slot/>
            </div>
        </div>
    </div>
</template>

<style>
.base-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-wrapper {
    max-width: 600px;
    background-color: white;
    border-radius: 20px;
}

.modal-content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>