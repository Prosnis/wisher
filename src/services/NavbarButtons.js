import path from '@/components/constants/pathes'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

function goToSettingsPage() {
  const uid = route.params.uid
  router.push({ path: `${path.settings}/${uid}` })
}




export const NavbarButtons = [
    {
        name: 'Редактировать профиль',
        route: goToSettingsPage()
    },
    {
        name: 'Мой вишлист',
        route:
    }
]