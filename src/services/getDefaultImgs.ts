import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage();

export const getDefaultImgs = async () => {

    const avatarsListUrl = await getDownloadURL(ref(storage, 'default_avatars/avatars.json'));
    const wallpapersListUrl = await getDownloadURL(ref(storage, 'default_wallpapers/wallpapers.json'));
    
    const [avatarsResponse, wallpapersResponse] = await Promise.all([
      fetch(avatarsListUrl),
      fetch(wallpapersListUrl)
    ]);
    
    const avatarFilenames = await avatarsResponse.json();
    const wallpaperFilenames = await wallpapersResponse.json();

    const photoPromises  = avatarFilenames.images.map(name => 
      getDownloadURL(ref(storage, `default_avatars/${name}`)))

    const wallPromises  = wallpaperFilenames.wallpapers.map(name => 
      getDownloadURL(ref(storage, `default_wallpapers/${name}`)))
      
    const [profilePhoto, profileWall] = await Promise.all([
        Promise.all(photoPromises),
        Promise.all(wallPromises)
      ]);

      return { profilePhoto, profileWall };

  }

