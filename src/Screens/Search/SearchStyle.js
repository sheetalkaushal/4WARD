import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
export const style = StyleSheet.create({
  container: {
    backgroundColor: "#2E2E2E",
    flex: 1,
    paddingHorizontal: moderateScale(24),
  },
  enterlocation: {
    color: "#A5A5A5",
    fontSize: moderateScale(14),
    marginTop: moderateScale(56),
    opacity: 0.5,
  },
  suggest: {
    height: moderateVerticalScale(24),
    color: "#FFFFFF",
    fontSize: moderateScale(15),
    fontWeight: "600",
    marginVertical: moderateScale(16),
  },
  sectorcheck: {
    height: moderateVerticalScale(24),
    marginBottom: moderateScale(24),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sector: {
    color: "#C7C8C7",
    fontSize: 15,
    opacity: 0.9,
    letterSpacing: 0,
    lineWeight: 32,
  },
});
