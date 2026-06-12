import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-heading--h2 text-lingua-purple">
        Course Coming Soon
      </Text>
      <Text className="text-body--medium mt-2 text-text-secondary">
        The link to join
      </Text>
    </View>
  );
}
