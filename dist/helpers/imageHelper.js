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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGVscGVycy9pbWFnZUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0ZBQWlGO0FBQ2pGLG9GQUFpRjtBQUNqRjs7R0FFRztBQUNIO0lBQ0k7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsaUJBQWlCLENBQUMsUUFBZ0IsRUFBRSxJQUF5QjtRQUN2RSxJQUFJLDJCQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUNuRDtRQUVELElBQUksV0FBVyxDQUFDO1FBRWhCLElBQUksMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFCLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hDLFdBQVcsR0FBRyxRQUFRLFFBQVEsV0FBVyxVQUFVLEVBQUUsQ0FBQztTQUN6RDthQUFNLElBQUksMkJBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLFdBQVcsR0FBRyxRQUFRLFFBQVEsV0FBVyxVQUFVLEVBQUUsQ0FBQztTQUN6RDthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQztDQUNKO0FBL0JELGtDQStCQyJ9