
import QRCode from 'qrcode'


export async function generateQrCode(url) {
    try {
        return await QRCode.toDataURL(url, { width: 110, margin: 1, color: { dark: '#ffffff', light: '#000000' } })
    }
    catch (error) {
        console.error('Ошибка генерации QR-кода:', error)
        return null
    }
}