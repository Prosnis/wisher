
<script setup>
import QRCode from 'qrcode'
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
    url: { type: String, required: true },
    logoSrc: { type: String, default: '/box.jpg' }, // путь к логотипу
})

const qrCanvas = ref(null)

const generateQr = async () => {
  const canvas = qrCanvas.value
  if (!canvas) return

  // Генерируем QR на canvas
  await QRCode.toCanvas(canvas, props.url, {
      width: 150,
      margin: 0,
      color: {
          dark: '#2f3e46',
          light: '#f9fafb',
        },
        errorCorrectionLevel: 'H', // важно! H = можно скрыть часть кода логотипом
    })

  // Рисуем логотип по центру
  const ctx = canvas.getContext('2d')
  const img = new Image()
  img.src = props.logoSrc
  img.onload = () => {
    const size = 45
    const x = (canvas.width - size) / 2
    const y = (canvas.height - size) / 2
    ctx.fillStyle = '#fff'
    ctx.fillRect(x - 4, y - 4, size + 8, size + 8) // белая подложка
    ctx.drawImage(img, x, y, size, size)
  }
}

onMounted(generateQr)
watch(() => props.url, generateQr)
</script>

<template>
  <div class="qr-wrapper">
    <canvas ref="qrCanvas" width="256" height="256"></canvas>
  </div>
</template>

<style scoped>
.qr-wrapper {
    padding: 12px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    display: inline-block;
}
canvas {
    border-radius: 8px;
}
</style>
