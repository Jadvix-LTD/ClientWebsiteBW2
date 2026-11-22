/** Upload rules shared by the enquiry form (client-side hints) and the API route (enforcement). */
export const UPLOAD = {
  maxFiles: 5,
  maxFileMB: 15,
  maxTotalMB: 25,
  extensions: ["pdf", "dwg", "dxf", "rvt", "rfa", "ifc", "nwd", "nwc", "zip", "jpg", "jpeg", "png", "xlsx", "docx"],
} as const;

export const MB = 1024 * 1024;

export function fileExtension(name: string) {
  const i = name.lastIndexOf(".");
  return i === -1 ? "" : name.slice(i + 1).toLowerCase();
}
