export async function useSvgImporter(folder) {
    const svgList = [];

    try {
        let svgModules;
        if (folder === "wallpapers") {
            svgModules = import.meta.glob("@/components/icons/wallpapers/*.svg");
        } else {
            svgModules = import.meta.glob("@/components/icons/avatars/*.jpg");
        }

        for (const path in svgModules) {
            const module = await svgModules[path]();
            svgList.push(module.default);
        }
    } catch (error) {
        console.error("Ошибка при загрузке SVG:", error);
    }

    return svgList;
}