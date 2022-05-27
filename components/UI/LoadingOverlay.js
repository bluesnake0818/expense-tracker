import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

const LoadingOverlay = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="white" />
    </View>
  )
}

export default LoadingOverlay

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 24, 
    backgroundColor: GlobalStyles.colors.primary700,
  },

})