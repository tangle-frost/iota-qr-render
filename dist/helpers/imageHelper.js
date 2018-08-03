Object.defineProperty(exports, "__esModule", { value: true });
const objectHelper_1 = require("@tangle-frost/iota-core/dist/helpers/objectHelper");
const stringHelper_1 = require("@tangle-frost/iota-core/dist/helpers/stringHelper");
/**
 * Class to help with manipulating image data.
 */
class ImageHelper {
    /**
     * Convert the data to an image source.
     * @param mimeType The mime type of the data.
     * @param data The source data.
     * @returns The image source.
     */
    static dataToImageSource(mimeType, data) {
        if (stringHelper_1.StringHelper.isEmpty(mimeType)) {
            throw new Error("You must provider a mimeType");
        }
        let imageSource;
        if (objectHelper_1.ObjectHelper.isType(data, Uint8Array)) {
            let binary = "";
            const len = data.length;
            for (let i = 0; i < len; i++) {
                binary += String.fromCharCode(data[i]);
            }
            const base64Data = btoa(binary);
            imageSource = `data:${mimeType};base64,${base64Data}`;
        }
        else if (stringHelper_1.StringHelper.isString(data)) {
            const base64Data = btoa(data);
            imageSource = `data:${mimeType};base64,${base64Data}`;
        }
        else {
            throw new Error("The data must be a Uint8Array or string");
        }
        return imageSource;
    }
}
exports.ImageHelper = ImageHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9pbWFnZUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0ZBQWlGO0FBQ2pGLG9GQUFpRjtBQUNqRjs7R0FFRztBQUNILE1BQWEsV0FBVztJQUNwQjs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFnQixFQUFFLElBQXlCO1FBQ3ZFLElBQUksMkJBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxXQUFXLENBQUM7UUFFaEIsSUFBSSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLEVBQUU7WUFDdkMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDeEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsTUFBTSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7WUFDRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsV0FBVyxHQUFHLFFBQVEsUUFBUSxXQUFXLFVBQVUsRUFBRSxDQUFDO1NBQ3pEO2FBQU0sSUFBSSwyQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsV0FBVyxHQUFHLFFBQVEsUUFBUSxXQUFXLFVBQVUsRUFBRSxDQUFDO1NBQ3pEO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7U0FDOUQ7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDO0NBQ0o7QUEvQkQsa0NBK0JDIn0=