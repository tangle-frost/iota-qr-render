import { ObjectHelper } from "@tangle-frost/iota-core/dist/helpers/objectHelper";
import { StringHelper } from "@tangle-frost/iota-core/dist/helpers/stringHelper";
/**
 * Class to help with manipulating image data.
 */
export class ImageHelper {
    /**
     * Convert the data to an image source.
     * @param mimeType The mime type of the data.
     * @param data The source data.
     * @returns The image source.
     */
    public static dataToImageSource(mimeType: string, data: Uint8Array | string): string {
        if (StringHelper.isEmpty(mimeType)) {
            throw new Error("You must provider a mimeType");
        }

        let imageSource;

        if (ObjectHelper.isType(data, Uint8Array)) {
            const base64Data = btoa(String.fromCharCode.apply(null, data));
            imageSource = `data:${mimeType};base64,${base64Data}`;
        } else if (StringHelper.isString(data)) {
            const base64Data = btoa(data);
            imageSource = `data:${mimeType};base64,${base64Data}`;
        } else {
            throw new Error("The data must be a Uint8Array or string");
        }

        return imageSource;
    }
}
