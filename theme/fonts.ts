import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const fontAssets = {
  [fontFamily.regular]: Poppins_400Regular,
  [fontFamily.medium]: Poppins_500Medium,
  [fontFamily.semiBold]: Poppins_600SemiBold,
  [fontFamily.bold]: Poppins_700Bold,
} as const;

export function useAppFonts() {
  return useFonts(fontAssets);
}
