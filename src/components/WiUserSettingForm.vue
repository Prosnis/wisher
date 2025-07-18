<script setup>
import WiWallaperPicker from '@/components/WiWallaperPicker.vue'
import { SaveUserSettings } from '@/services/SaveUserSettings'
import { uploadUserPictures } from '@/services/UserPictureUpdate'
import { Form } from '@primevue/forms'
import { zodResolver } from '@primevue/forms/resolvers/zod'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import FileUpload from 'primevue/fileupload'
import InputText from 'primevue/inputtext'

import Message from 'primevue/message'
import Textarea from 'primevue/textarea'

import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { z } from 'zod'

const router = useRouter()

const wallpapersFolder = 'wallpapers'
const avatarsFolder = 'avatars'
const isLoading = ref(false)

const imgUpload = reactive({
  wallpaper: {
    type: 'link',
    value: '',
  },
  profilePhoto: {
    type: 'link',
    value: '',
  },
})

const avatarFile = ref(null)
const wallpaperFile = ref(null)

const model = defineModel()

const resolver = ref(zodResolver(
  z.object({
    username: z.string()
      .trim()
      .min(2, { message: 'Имя должно содержать минимум 2 символа' })
      .max(20, { message: 'Имя не должно превышать 20 символов' }),
    about: z.string()
      .trim()
      .max(420, { message: 'Максимальное количество символов: 420' }),
  }),
))

const pickWallpaper = (currentImg) => {
  model.value.wallpaper = currentImg
  imgUpload.wallpaper.type = 'link'
  imgUpload.wallpaper.value = currentImg
}
const pickAvatar = (currentImg) => {
  model.value.profilePhoto = currentImg
  imgUpload.profilePhoto.type = 'link'
  imgUpload.profilePhoto.value = currentImg
}

function onFileSelect(target, event) {
  const file = event.files[0]
  const reader = new FileReader()

  if (target === 'avatar') {
    reader.onload = async (e) => {
      avatarFile.value = e.target.result
      model.value.profilePhoto = avatarFile.value
      imgUpload.profilePhoto.type = 'file'
      imgUpload.profilePhoto.value = avatarFile.value
    }
  }
  if (target === 'wallpaper') {
    reader.onload = async (e) => {
      wallpaperFile.value = e.target.result
      model.value.wallpaper = wallpaperFile.value
      imgUpload.wallpaper.type = 'file'
      imgUpload.wallpaper.value = wallpaperFile.value
    }
  }
  reader.readAsDataURL(file)
}

const onFormSubmit = async () => {
  try {
    isLoading.value = true
    await uploadUserPictures(imgUpload)
    await SaveUserSettings(model.value)
    router.go(-1)
  } catch (error) { console.warn(error) }
  finally {
    isLoading.value = false
  }

}
</script>

<template>
  <div class="card flex flex-column items-center gap-5">
      <Form v-slot="$form" :initial-values="model" :resolver="resolver" class="flex flex-column gap-4 w-full sm:w-56"
        @submit="onFormSubmit">
        <div class="flex flex-column gap-1">
          <InputText v-model="model.name" name="username" type="text" placeholder="Имя"
            :class="{ 'p-invalid': $form.username?.invalid }" />
          <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">
            {{ $form.username.error.message }}
          </Message>
        </div>

        <div class="flex flex-column gap-1">
          <DatePicker v-model="model.birthday" date-format="yy-mm-dd" />
        </div>

        <div class="flex flex-col gap-1">
          <Textarea v-model="model.about" name="about" rows="5" cols="50" style="resize: none"
            placeholder="Расскажите о себе" />
          <Message v-if="$form.about?.invalid" severity="error" size="small" variant="simple">
            {{
              $form.about.error?.message }}
          </Message>
        </div>

        <div class="flex justify-content-between align-items-center">
          <label class="block text-900 font-medium mb-2">Обложка</label>
          <div class="flex gap-2">
            <WiWallaperPicker id="wallpaper" :folder="wallpapersFolder" @pick-wallpaper="pickWallpaper" />
            <FileUpload mode="basic" custom-upload auto severity="secondary" class="p-button-outlined"
              @select="onFileSelect('wallpaper', $event)" />
          </div>
        </div>

        <div class="flex justify-content-between align-items-center">
          <label for="avatar" class="block text-900 font-medium mb-2">Аватар</label>
          <div class="flex gap-2">
            <WiWallaperPicker id="avatar" :folder="avatarsFolder" @pick-wallpaper="pickAvatar" />
            <FileUpload mode="basic" custom-upload auto severity="secondary" class="p-button-outlined"
              @select="onFileSelect('avatar', $event)" />
          </div>
        </div>

        <div class="flex gap-2">
          <Button :disabled="$form.username?.invalid || isLoading" type="submit" label="Сохранить" class="w-full" severity="success"
            @click.prevent="onFormSubmit" />
        </div>
      </Form>
    </div>
</template>
