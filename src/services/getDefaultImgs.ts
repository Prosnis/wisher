import { getDownloadURL, getStorage, ref } from 'firebase/storage'

interface AvatarJson {
  images: string[]
}

interface WallpaperJson {
  wallpapers: string[]
}

interface DefaultImages {
  profilePhoto: string[]
  profileWall: string[]
}

const storage = getStorage()

export const getDefaultImgs = async (): Promise<DefaultImages> => {
  const avatarsListUrl = await getDownloadURL(ref(storage, 'default_avatars/avatars.json'))
  const wallpapersListUrl = await getDownloadURL(ref(storage, 'default_wallpapers/wallpapers.json'))

  const [avatarsResponse, wallpapersResponse] = await Promise.all([
    fetch(avatarsListUrl),
    fetch(wallpapersListUrl),
  ])

  const avatarFilenames = await avatarsResponse.json() as AvatarJson
  const wallpaperFilenames = await wallpapersResponse.json() as WallpaperJson

  const photoPromises = avatarFilenames.images.map(name =>
    getDownloadURL(ref(storage, `default_avatars/${name}`)))

  const wallPromises = wallpaperFilenames.wallpapers.map(name =>
    getDownloadURL(ref(storage, `default_wallpapers/${name}`)))

  const [profilePhoto, profileWall] = await Promise.all([
    Promise.all(photoPromises),
    Promise.all(wallPromises),
  ])

  return { profilePhoto, profileWall }
}
