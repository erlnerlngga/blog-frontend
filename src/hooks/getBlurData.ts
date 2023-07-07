import lqip from "lqip-modern";
import axios from "axios";

export async function getBlurData(url: string) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data);
  const lqipData = await lqip(buffer);

  return {
    imageUrl: url,
    width: lqipData.metadata.originalWidth,
    height: lqipData.metadata.originalHeight,
    blurDataUrl: lqipData.metadata.dataURIBase64,
  };
}
